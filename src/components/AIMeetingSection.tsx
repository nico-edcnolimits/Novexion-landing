import Image from "next/image";
import { cn } from "@/lib/utils";

export function AIMeetingSection() {
  return (
    <section className={cn("bg-black text-white")}>
      {/* Sub-section A: "You Listen. AI Remembers." */}
      <div className="flex flex-col items-center pt-20 px-4">
        <h1
          className="text-center text-white leading-tight"
          style={{ fontSize: "52px", fontWeight: 800 }}
        >
          You Listen. AI Remembers.
        </h1>
      </div>

      {/* Sub-section B: "Never Miss a Key Detail" */}
      <div
        className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center"
        style={{ padding: "80px 64px" }}
      >
        <div className="flex-1">
          <h2
            className="text-white leading-tight"
            style={{ fontSize: "40px", fontWeight: 800 }}
          >
            Never Miss a Key Detail
          </h2>
          <p className="text-white text-base mt-4">
            Meeting over. Phone synced<sup>10</sup>. Here&apos;s what&apos;s next:
          </p>
          <ul className="mt-4 space-y-2 text-white text-base">
            <li>· Tasks to complete.</li>
            <li>· Deadlines to meet.</li>
          </ul>
        </div>
        <div className="flex-1">
          <Image
            src="/images/23-03.png"
            alt="AI Meeting Memory app screenshot composite showing earbuds, phone recording, and AI summary"
            width={600}
            height={500}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Sub-section C: "Your Data, Securely Protected" */}
      <div
        className="flex flex-col items-center px-4"
        style={{ padding: "80px 16px" }}
      >
        <h2
          className="text-white text-center leading-tight max-w-3xl"
          style={{ fontSize: "40px", fontWeight: 800 }}
        >
          Your Data, Securely Protected
        </h2>
        <p className="text-[#767880] text-center mt-6 max-w-[600px] leading-relaxed text-lg">
          On-device processing means your voice never leaves your
          earbuds—no cloud upload, no data exposure.
        </p>
      </div>
    </section>
  );
}
