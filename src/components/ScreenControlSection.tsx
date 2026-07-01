import Image from "next/image";
import { cn } from "@/lib/utils";

export function ScreenControlSection() {
  return (
    <section className={cn("bg-black text-white")}>
      {/* Sub-section A: "Listen. Touch. Remember." */}
      <div className="flex flex-col items-center pt-20 px-4">
        <h1
          className="text-center text-white leading-tight"
          style={{ fontSize: "52px", fontWeight: 800 }}
        >
          Listen. Touch. Remember.
        </h1>
        <p
          className="text-center text-white mt-4"
          style={{ fontSize: "30px" }}
        >
          Effortless Screen Control
        </p>
        <div className="mt-6 text-center text-[#767880] text-base leading-relaxed max-w-xl">
          <p>Take command with the large, vibrant screen.</p>
          <p>No phone, no hassle—just touch and control.</p>
        </div>
        <div className="mt-10 w-full max-w-[800px] mx-auto">
          <Image
            src="/images/23-01.png"
            alt="Soundcore Liberty 5 Pro charging case with touchscreen displaying the time"
            width={800}
            height={600}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>

      {/* Sub-section B: "Elegant Control. True Mastery." */}
      <div
        className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center"
        style={{ padding: "80px 64px" }}
      >
        <div className="flex-1">
          <h2
            className="text-white leading-tight"
            style={{ fontSize: "48px", fontWeight: 800 }}
          >
            Elegant Control. True Mastery.
          </h2>
          <p className="text-[#767880] mt-6 text-lg leading-relaxed">
            The screen doesn&apos;t just look good. It does everything—volume,
            tracks, calls, ANC, and more—right from the case.
          </p>
        </div>
        <div className="flex-1">
          <Image
            src="/images/23-02.png"
            alt="Soundcore Liberty 5 Pro case screen close-up"
            width={600}
            height={500}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
