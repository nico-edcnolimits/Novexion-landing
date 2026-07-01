import Image from "next/image";

// ─── Main export ─────────────────────────────────────────────────────────────

export function ANCSection() {
  return (
    <section className="bg-black text-white">
      {/* A: "Beyond Silence. Protect Your Flow." — cinematic hero */}
      <div className="relative w-full min-h-[640px] flex flex-col justify-end overflow-hidden">
        {/* Background image */}
        <Image
          src="/images/Group-105.png"
          alt="Person in serene environment with soundcore earbuds, experiencing pure silence"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />

        {/* Text overlay — bottom-left */}
        <div className="relative z-10 px-16 pb-16 max-w-[640px]">
          <p
            className="text-white font-semibold uppercase tracking-widest mb-4"
            style={{ fontSize: "14px", letterSpacing: "0.1em" }}
          >
            Instant Pure Silence
          </p>
          <h2
            className="text-white font-extrabold leading-tight"
            style={{ fontSize: "52px" }}
          >
            Beyond Silence.{" "}
            <span className="block">Protect Your Flow.</span>
          </h2>
        </div>
      </div>

      {/* B: "Instant Pure Silence / Industry-Leading ANC Technology" — split */}
      <div className="flex flex-col lg:flex-row min-h-[520px]">
        {/* Left half: image */}
        <div className="relative flex-1 min-h-[400px] lg:min-h-[520px]">
          <Image
            src="/images/Group-111.png"
            alt="ANC waveform visualization showing noise cancellation"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
        </div>

        {/* Right half: text content */}
        <div className="flex-1 flex flex-col justify-center px-12 py-16 bg-black">
          <h2
            className="text-white font-extrabold mb-3 leading-tight"
            style={{ fontSize: "40px" }}
          >
            Instant Pure Silence
          </h2>
          <h3
            className="text-white font-bold mb-6"
            style={{ fontSize: "22px" }}
          >
            Industry-Leading ANC Technology
          </h3>
          <p
            className="text-[#767880]"
            style={{ fontSize: "16px", lineHeight: 1.7 }}
          >
            100% more effective ANC than the previous flagship model.
            <sup className="text-xs">4</sup>
          </p>

          {/* ANC effectiveness bar */}
          <div className="mt-10">
            <div className="flex items-center gap-4 mb-3">
              <span className="text-[#767880] text-sm font-medium w-32">
                Previous model
              </span>
              <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-white/30"
                  style={{ width: "50%" }}
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-white text-sm font-semibold w-32">
                Liberty 5 Pro
              </span>
              <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{ width: "100%", backgroundColor: "#17bbef" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* C: "Fade the Noise. Find Your Flow." — full-width dark */}
      <div className="bg-[#080a0f] py-24 px-6">
        <div className="max-w-[800px] mx-auto text-center">
          <h2
            className="text-white font-extrabold mb-5 leading-tight"
            style={{ fontSize: "52px" }}
          >
            Fade the Noise. Find Your Flow.
          </h2>
          <p
            className="text-[#767880] mb-16"
            style={{ fontSize: "18px", lineHeight: 1.6 }}
          >
            Filter out what you don&apos;t want to hear. Keep only what you do.
          </p>
        </div>

        {/* ANC noise-reduction visualization */}
        <div className="max-w-[640px] mx-auto">
          <div className="space-y-4">
            {/* Bar 1 — Ambient noise (no ANC) */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-[#767880] text-sm font-medium">
                  Ambient Noise
                </span>
                <span className="text-[#767880] text-xs">Without ANC</span>
              </div>
              <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-white/40 transition-all duration-700"
                  style={{ width: "92%" }}
                />
              </div>
            </div>

            {/* Bar 2 — ANC active, partial */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-[#767880] text-sm font-medium">
                  Noise Filtered
                </span>
                <span className="text-[#767880] text-xs">ANC Active</span>
              </div>
              <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-700"
                  style={{ width: "32%", backgroundColor: "#17bbef" }}
                />
              </div>
            </div>

            {/* Bar 3 — What you hear */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-white text-sm font-semibold">
                  What You Hear
                </span>
                <span
                  className="text-xs font-semibold"
                  style={{ color: "#17bbef" }}
                >
                  Pure silence
                </span>
              </div>
              <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-700"
                  style={{ width: "6%", backgroundColor: "#17bbef" }}
                />
              </div>
            </div>
          </div>

          {/* ANC level label */}
          <div className="flex justify-between mt-8">
            <span className="text-[#767880] text-xs">0 dB</span>
            <span className="text-[#767880] text-xs">Noise Level</span>
            <span className="text-[#767880] text-xs">100 dB</span>
          </div>
        </div>
      </div>
    </section>
  );
}
