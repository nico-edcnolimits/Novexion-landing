"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

// ─── Internal: Before/After comparison block ────────────────────────────────

interface BeforeAfterProps {
  heading: string;
  beforeLabel: string;
  beforeTitle: string;
  beforeSubtitle: string;
  afterLabel: string;
  afterTitle: string;
  afterImageSrc: string;
  afterImageAlt: string;
}

function BeforeAfterBlock({
  heading,
  beforeLabel,
  beforeTitle,
  beforeSubtitle,
  afterLabel,
  afterTitle,
  afterImageSrc,
  afterImageAlt,
}: BeforeAfterProps) {
  const [active, setActive] = useState<"before" | "after">("after");

  return (
    <div className="bg-black py-20 px-6">
      <p
        className="text-white font-bold text-center max-w-[700px] mx-auto mb-12"
        style={{ fontSize: "36px", lineHeight: 1.25 }}
      >
        {heading}
      </p>

      <div className="relative max-w-[1100px] mx-auto flex items-center gap-4">
        {/* Left arrow */}
        <button
          aria-label="Previous"
          onClick={() => setActive("before")}
          className={cn(
            "flex-shrink-0 w-10 h-10 rounded-full border flex items-center justify-center text-white text-xl transition-all duration-200 hover:bg-white/10",
            active === "before"
              ? "border-[#17bbef] text-[#17bbef]"
              : "border-white/30"
          )}
        >
          &#8249;
        </button>

        {/* Cards */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Before card */}
          <div
            className={cn(
              "relative rounded-2xl overflow-hidden min-h-[320px] bg-[#111] border transition-all duration-300 cursor-pointer",
              active === "before"
                ? "border-white/40 scale-[1.01]"
                : "border-white/10 opacity-80"
            )}
            onClick={() => setActive("before")}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]" />
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <div className="mb-3">
                <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {beforeLabel}
                </span>
              </div>
              <p
                className="text-white font-semibold"
                style={{ fontSize: "16px", lineHeight: 1.4 }}
              >
                {beforeTitle}
              </p>
              <p className="text-[#767880] text-sm mt-1">{beforeSubtitle}</p>
            </div>
          </div>

          {/* After card */}
          <div
            className={cn(
              "relative rounded-2xl overflow-hidden min-h-[320px] border transition-all duration-300 cursor-pointer",
              active === "after"
                ? "border-[#17bbef]/60 scale-[1.01]"
                : "border-white/10 opacity-80"
            )}
            onClick={() => setActive("after")}
          >
            <Image
              src={afterImageSrc}
              alt={afterImageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 550px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <div className="mb-3">
                <span
                  className="inline-block text-black text-xs font-semibold px-3 py-1 rounded-full"
                  style={{ backgroundColor: "#17bbef" }}
                >
                  {afterLabel}
                </span>
              </div>
              <p
                className="text-white font-semibold"
                style={{ fontSize: "16px", lineHeight: 1.4 }}
              >
                {afterTitle}
              </p>
            </div>
          </div>
        </div>

        {/* Right arrow */}
        <button
          aria-label="Next"
          onClick={() => setActive("after")}
          className={cn(
            "flex-shrink-0 w-10 h-10 rounded-full border flex items-center justify-center text-white text-xl transition-all duration-200 hover:bg-white/10",
            active === "after"
              ? "border-[#17bbef] text-[#17bbef]"
              : "border-white/30"
          )}
        >
          &#8250;
        </button>
      </div>
    </div>
  );
}

// ─── Main export ─────────────────────────────────────────────────────────────

export function CallQualitySection() {
  const [callToggle, setCallToggle] = useState<"liberty" | "other">("liberty");
  const [sensorToggle, setSensorToggle] = useState<"liberty" | "other">(
    "liberty"
  );

  return (
    <section className="bg-black text-white">
      {/* A: Hero intro — "Speak Freely. Be Heard Clearly." */}
      <div className="relative w-full min-h-[560px] flex flex-col items-center justify-center bg-gradient-to-b from-[#080a0f] to-black py-24 px-6 text-center">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_60%,rgba(23,187,239,0.05),transparent)]" />
        </div>
        <h2
          className="relative font-extrabold text-white text-center mb-6 leading-tight"
          style={{ fontSize: "52px" }}
        >
          Speak Freely. Be Heard Clearly.
        </h2>
        <h3
          className="relative font-bold text-white text-center mb-5"
          style={{ fontSize: "36px" }}
        >
          Whisper-Clear Calls
        </h3>
        <p
          className="relative text-[#767880] text-center max-w-[600px] mx-auto"
          style={{ fontSize: "18px", lineHeight: 1.6 }}
        >
          Be heard clearly, even in crowded, noisy places—no shouting required.
        </p>
      </div>

      {/* B: Crowded places — Before/After */}
      <BeforeAfterBlock
        heading="Be heard clearly, even in crowded, noisy places—no shouting required."
        beforeLabel="Before"
        beforeTitle="Calls in Busy Streets."
        beforeSubtitle="Background noise drowns out your voice."
        afterLabel="After"
        afterTitle="Even in a crowd, your caller hears every word."
        afterImageSrc="/images/22_4b2d9011-6ca0-4c17-8f87-bc9fa48bd25e.png"
        afterImageAlt="Woman on call, clearly heard even in a crowded place"
      />

      {/* C: Quiet places — Before/After */}
      <BeforeAfterBlock
        heading="Be heard clearly in quiet places—no awkward moments."
        beforeLabel="Before"
        beforeTitle="Calls in Offices."
        beforeSubtitle="Worried about being loud / overheard."
        afterLabel="After"
        afterTitle="Even while whispering, your caller hears every word."
        afterImageSrc="/images/5_1_10__public.jpg"
        afterImageAlt="Woman whispering in office, caller hears every word"
      />

      {/* D: "Experience the World's Best Call Quality" + toggle */}
      <div className="py-20 px-6 bg-[#080a0f]">
        <div className="max-w-[1100px] mx-auto flex flex-col lg:flex-row gap-12 items-center">
          {/* Left: text */}
          <div className="flex-1">
            <h2
              className="text-white font-bold mb-5 leading-tight"
              style={{ fontSize: "32px" }}
            >
              Experience the World&apos;s Best Call Quality
            </h2>
            <p
              className="text-[#767880]"
              style={{ fontSize: "16px", lineHeight: 1.7 }}
            >
              soundcore Liberty 5 Pro earbuds, combined with our advanced AI,
              showcase your professionalism and confidence—in any call, any
              environment.
            </p>
          </div>

          {/* Right: toggle */}
          <div className="flex-1 flex items-center justify-center lg:justify-end">
            <div
              className="inline-flex rounded-full overflow-hidden border"
              style={{ borderColor: "rgba(255,255,255,0.2)" }}
            >
              <button
                onClick={() => setCallToggle("other")}
                className={cn(
                  "px-6 py-3 text-sm font-semibold transition-all duration-200 rounded-l-full",
                  callToggle === "other"
                    ? "bg-white/10 text-white"
                    : "bg-transparent text-[#767880] hover:text-white"
                )}
              >
                Other Earbuds
              </button>
              <button
                onClick={() => setCallToggle("liberty")}
                className={cn(
                  "px-6 py-3 text-sm font-semibold transition-all duration-200 rounded-r-full",
                  callToggle === "liberty"
                    ? "text-black"
                    : "bg-transparent text-[#767880] hover:text-white"
                )}
                style={
                  callToggle === "liberty"
                    ? { backgroundColor: "#17bbef" }
                    : undefined
                }
              >
                Liberty 5 Pro Series
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* E: "Absolute Clarity with 10 Sensors and Thus™ AI Chip" */}
      <div className="py-20 px-6 bg-black">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-12 items-center">
          {/* Left: product cutaway image */}
          <div className="flex-1 relative min-h-[420px] w-full">
            <Image
              src="/images/Group-109.png"
              alt="Earbud internals showing 10 sensors and Thus AI Chip"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Right: text + toggle */}
          <div className="flex-1">
            <h2
              className="text-white font-bold mb-5 leading-tight"
              style={{ fontSize: "36px" }}
            >
              Absolute Clarity with 10 Sensors and Thus™ AI Chip
            </h2>
            <p
              className="text-[#767880] mb-10"
              style={{ fontSize: "16px", lineHeight: 1.7 }}
            >
              Your voice is isolated and background noise is blocked—so every
              word is transmitted, and every call is flawlessly clear.
            </p>

            <div
              className="inline-flex rounded-full overflow-hidden border"
              style={{ borderColor: "rgba(255,255,255,0.2)" }}
            >
              <button
                onClick={() => setSensorToggle("liberty")}
                className={cn(
                  "px-6 py-3 text-sm font-semibold transition-all duration-200 rounded-l-full",
                  sensorToggle === "liberty"
                    ? "text-black"
                    : "bg-transparent text-[#767880] hover:text-white"
                )}
                style={
                  sensorToggle === "liberty"
                    ? { backgroundColor: "#17bbef" }
                    : undefined
                }
              >
                Liberty 5 Pro Series
              </button>
              <button
                onClick={() => setSensorToggle("other")}
                className={cn(
                  "px-6 py-3 text-sm font-semibold transition-all duration-200 rounded-r-full",
                  sensorToggle === "other"
                    ? "bg-white/10 text-white"
                    : "bg-transparent text-[#767880] hover:text-white"
                )}
              >
                Other Brands
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
