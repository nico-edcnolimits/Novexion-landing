import Image from "next/image";
import { cn } from "@/lib/utils";

// ─── Feature pill badge ──────────────────────────────────────────────────────

interface FeaturePillProps {
  label: string;
  active?: boolean;
}

function FeaturePill({ label, active = false }: FeaturePillProps) {
  return (
    <span
      className={cn(
        "inline-block px-4 py-2 rounded-full text-sm font-semibold border transition-colors",
        active
          ? "text-black border-transparent"
          : "text-white border-white/30 bg-white/5"
      )}
      style={active ? { backgroundColor: "#17bbef", borderColor: "#17bbef" } : undefined}
    >
      {label}
    </span>
  );
}

// ─── Main export ─────────────────────────────────────────────────────────────

export function SignatureSoundSection() {
  return (
    <section className="bg-black text-white">
      {/* A: Close-up earbud image + heading */}
      <div className="relative w-full min-h-[600px] flex flex-col items-center justify-center overflow-hidden">
        {/* Background earbud image */}
        <Image
          src="/images/Group-115.png"
          alt="Close-up of soundcore Liberty 5 Pro earbud"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80" />

        {/* Heading overlay */}
        <div className="relative z-10 text-center px-6">
          <h2
            className="font-extrabold leading-tight"
            style={{ fontSize: "52px" }}
          >
            <span className="text-white">Your Signature </span>
            <span className="text-white/40">Sound</span>
          </h2>
        </div>
      </div>

      {/* B: "Personalized EQ Adjustment" — split layout */}
      <div className="py-20 px-6 bg-[#080a0f]">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-12 items-center">
          {/* Left: text */}
          <div className="flex-1">
            <h2
              className="text-white font-bold mb-4 leading-tight"
              style={{ fontSize: "40px" }}
            >
              Your Signature Sound
            </h2>
            <h3
              className="font-bold mb-6"
              style={{ fontSize: "24px", color: "#17bbef" }}
            >
              Personalized EQ Adjustment
            </h3>
            <p
              className="text-[#767880]"
              style={{ fontSize: "16px", lineHeight: 1.7 }}
            >
              Tailor your audio to your unique hearing with a personalized
              HearID 2.0 test—and find your perfect sound in seconds.
            </p>

            {/* EQ presets */}
            <div className="mt-8 flex flex-wrap gap-3">
              {["Balanced", "Bass Boost", "Clear Treble", "Podcast", "HearID 2.0"].map(
                (preset) => (
                  <FeaturePill
                    key={preset}
                    label={preset}
                    active={preset === "HearID 2.0"}
                  />
                )
              )}
            </div>
          </div>

          {/* Right: app screenshot / EQ interface */}
          <div className="flex-1 relative min-h-[480px] w-full flex items-center justify-center">
            <div className="relative w-full min-h-[480px]">
              <Image
                src="/images/Group-105.png"
                alt="soundcore app showing personalized EQ and HearID 2.0 interface"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>

      {/* C: "Enhance What You Hear" — split layout (image left, text right) */}
      <div className="py-20 px-6 bg-black">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-12 items-center">
          {/* Left: image */}
          <div className="flex-1 relative min-h-[440px] w-full rounded-2xl overflow-hidden">
            <Image
              src="/images/Group-111.png"
              alt="AI audio enhancement waveform visualization"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/30" />
          </div>

          {/* Right: text */}
          <div className="flex-1">
            <h2
              className="text-white font-bold mb-5 leading-tight"
              style={{ fontSize: "40px" }}
            >
              Enhance What You Hear
            </h2>
            <p
              className="text-[#767880] mb-8"
              style={{ fontSize: "16px", lineHeight: 1.7 }}
            >
              AI-powered audio processing adapts in real time to your
              environment—so every note, every voice, and every detail sounds
              exactly as it should. Experience music the way the artist intended.
            </p>

            {/* Feature pills / tags */}
            <div className="flex flex-wrap gap-3">
              <FeaturePill label="AI Audio Enhancement" active />
              <FeaturePill label="Spatial Audio" />
              <FeaturePill label="Adaptive EQ" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
