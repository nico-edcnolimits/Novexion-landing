import { writeFileSync, mkdirSync, existsSync } from "fs";
import { createWriteStream } from "fs";
import https from "https";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const PUBLIC = path.join(ROOT, "public");

const IMAGES = [
  "https://cdn.shopify.com/s/files/1/0516/3761/6830/files/videoframe_0_16.png",
  "https://cdn.shopify.com/s/files/1/0516/3761/6830/files/Group_2147238894.png",
  "https://cdn.shopify.com/s/files/1/0516/3761/6830/files/20260522-002816.png",
  "https://cdn.shopify.com/s/files/1/0516/3761/6830/files/02-KSP_3b712b6a-cb42-447a-84ea-5a194e5eda6b.png",
  "https://cdn.shopify.com/s/files/1/0563/4696/8115/files/90025c14-c951-40c5-a7a9-7fc4a554df7d_Group-61.png",
  "https://cdn.shopify.com/s/files/1/0516/3761/6830/files/d0ac6567f3b38273f997dcfdf5da7ef1.png",
  "https://cdn.shopify.com/s/files/1/0516/3761/6830/files/02-KSP_28cd788b-c180-4fb3-9395-b325d97321ce.png",
  "https://cdn.shopify.com/s/files/1/0516/3761/6830/files/02-KSP.png",
  "https://cdn.shopify.com/s/files/1/0516/3761/6830/files/20260521-224257.png",
  "https://cdn.shopify.com/s/files/1/0511/6346/3874/files/5594e728-b5ba-459c-83b3-ab5ac8bfde36_Group_2121239447.png",
  "https://cdn.shopify.com/s/files/1/0516/3761/6830/files/15-kws.png",
  "https://cdn.shopify.com/s/files/1/0512/8568/8505/files/Group-109.png",
  "https://cdn.shopify.com/s/files/1/0516/3761/6830/files/Webdesign_1441-1920_US_Material_22_v2.jpg",
  "https://cdn.shopify.com/s/files/1/0511/6346/3874/files/5_1_10__public.jpg",
  "https://cdn.shopify.com/s/files/1/0512/8568/8505/files/Group-105.png",
  "https://cdn.shopify.com/s/files/1/0512/8568/8505/files/Group-111.png",
  "https://cdn.shopify.com/s/files/1/0512/8568/8505/files/Group-115.png",
  "https://cdn.shopify.com/s/files/1/0516/3761/6830/files/22_4b2d9011-6ca0-4c17-8f87-bc9fa48bd25e.png",
  "https://cdn.shopify.com/s/files/1/0516/3761/6830/files/23-01.png",
  "https://cdn.shopify.com/s/files/1/0516/3761/6830/files/23-02.png",
  "https://cdn.shopify.com/s/files/1/0516/3761/6830/files/23-03.png",
  "https://cdn.shopify.com/s/files/1/0516/3761/6830/files/23-04.png",
  "https://cdn.shopify.com/s/files/1/0563/4696/8115/files/4-17.png",
];

const VIDEOS = [
  "https://cdn.shopify.com/videos/c/o/v/d976ae1dbdfb4bdc91cbe468cc0e2014.mp4",
  "https://cdn.shopify.com/videos/c/o/v/c7d51fcc98b943aea425b28c5e5c658e.mp4",
  "https://cdn.shopify.com/videos/c/o/v/75fa01631f3e48e5a57c6b8ee5b7465f.mp4",
  "https://cdn.shopify.com/videos/c/o/v/272ffbf2fd63454da79214fad8c03e8d.mp4",
  "https://cdn.shopify.com/videos/c/o/v/0216aa277bfb403e9f0111eed5d3a879.mp4",
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    if (existsSync(dest)) { resolve(); return; }
    const file = createWriteStream(dest);
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close();
        download(res.headers.location, dest).then(resolve).catch(reject);
        return;
      }
      res.pipe(file);
      file.on("finish", () => { file.close(); resolve(); });
    }).on("error", (err) => {
      file.close();
      reject(err);
    });
  });
}

async function downloadBatch(urls, destDir, concurrency = 4) {
  mkdirSync(destDir, { recursive: true });
  const chunks = [];
  for (let i = 0; i < urls.length; i += concurrency) {
    chunks.push(urls.slice(i, i + concurrency));
  }
  for (const chunk of chunks) {
    await Promise.all(chunk.map(async (url) => {
      const filename = url.split("/").pop();
      const dest = path.join(destDir, filename);
      try {
        await download(url, dest);
        console.log(`✓ ${filename}`);
      } catch (e) {
        console.error(`✗ ${filename}: ${e.message}`);
      }
    }));
  }
}

console.log("Downloading images...");
await downloadBatch(IMAGES, path.join(PUBLIC, "images"));

console.log("Downloading videos...");
await downloadBatch(VIDEOS, path.join(PUBLIC, "videos"));

console.log("Done!");
