import Image from "next/image";
import { cn } from "@/lib/utils";

export function ColorOptionsSection() {
  return (
    <section className={cn("bg-black text-white")}>
      <div className="flex flex-col items-center pt-20 pb-24 px-4">
        <h2
          className="text-white text-center leading-tight"
          style={{ fontSize: "48px", fontWeight: 800 }}
        >
          Choose Your Style
        </h2>

        <div className="mt-10 w-full max-w-[1100px] mx-auto">
          <Image
            src="/images/23-04.png"
            alt="Liberty 5 Pro in four colorways: Midnight Black, Pearl White, Blush Pink, and Pearl Blue"
            width={1100}
            height={600}
            className="w-full h-auto"
          />
        </div>

        <a
          href="#"
          className="mt-10 inline-block bg-white text-black font-bold text-lg px-12 py-4 hover:bg-white/90 transition-colors"
          style={{ borderRadius: "24px" }}
        >
          Get Yours Now
        </a>
      </div>
    </section>
  );
}
