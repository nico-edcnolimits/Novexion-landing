import Image from "next/image";

// ─── Voice command pill ──────────────────────────────────────────────────────

function CommandPill({ label }: { label: string }) {
  return (
    <span className="inline-block px-5 py-2.5 rounded-full border border-white text-white text-sm font-medium whitespace-nowrap hover:bg-white/10 transition-colors duration-200">
      {label}
    </span>
  );
}

// ─── Main export ─────────────────────────────────────────────────────────────

export function VoiceControlSection() {
  const voiceCommands = [
    "Play/Pause",
    "Skip Track",
    "Answer Call",
    "Volume Up/Down",
    "Check Battery",
    "Enable ANC",
    "Enable Transparency",
  ];

  return (
    <section className="bg-black text-white">
      {/* A: "Lag-Free Voice Control" — full-width hero */}
      <div className="py-24 px-6 text-center bg-gradient-to-b from-[#080a0f] to-black">
        <h2
          className="text-white font-extrabold mb-4 leading-tight"
          style={{ fontSize: "48px" }}
        >
          Lag-Free Voice Control
        </h2>
        <p
          className="text-[#767880] text-center max-w-[600px] mx-auto"
          style={{ fontSize: "20px", lineHeight: 1.6 }}
        >
          Instant Hands-Free Voice Control
        </p>
      </div>

      {/* B: "No Wake Words. Just Action." — split layout */}
      <div className="py-0 bg-black">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row min-h-[600px]">
          {/* Left: large image */}
          <div className="flex-1 relative min-h-[400px] lg:min-h-[600px] rounded-none overflow-hidden">
            <Image
              src="/images/5_1_10__public.jpg"
              alt="Man at gym holding ball, wearing soundcore Liberty 5 Pro earbuds"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/50" />
          </div>

          {/* Right: text + stat comparison card */}
          <div className="flex-1 flex flex-col justify-center px-10 py-16 bg-black">
            <h2
              className="text-white font-extrabold mb-4 leading-tight"
              style={{ fontSize: "40px" }}
            >
              No Wake Words. Just Action.
            </h2>
            <p
              className="text-[#767880] mb-8"
              style={{ fontSize: "16px", lineHeight: 1.7 }}
            >
              Fully on-device voice control. No waiting: Speak, execute, done.
            </p>

            {/* Voice Command Response Time comparison card */}
            <div
              className="rounded-xl p-5 border"
              style={{
                backgroundColor: "rgba(255,255,255,0.04)",
                borderColor: "rgba(255,255,255,0.12)",
                borderRadius: "12px",
              }}
            >
              <p className="text-white text-sm font-semibold mb-5 text-center">
                Voice Command Response Time
                <sup className="text-xs">6</sup>
              </p>

              <div className="flex items-center justify-around gap-6">
                {/* Liberty 5 Pro stat */}
                <div className="flex flex-col items-center gap-2">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center border-2 font-extrabold"
                    style={{
                      borderColor: "#17bbef",
                      color: "#17bbef",
                      fontSize: "22px",
                    }}
                  >
                    0.91s
                  </div>
                  <p className="text-white text-xs font-semibold text-center">
                    Liberty 5 Pro Series
                  </p>
                </div>

                {/* VS divider */}
                <span className="text-[#767880] text-sm font-bold">vs</span>

                {/* Other stat */}
                <div className="flex flex-col items-center gap-2">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center border-2 border-dashed font-extrabold text-white"
                    style={{
                      borderColor: "rgba(255,255,255,0.30)",
                      fontSize: "22px",
                    }}
                  >
                    2.78s
                  </div>
                  <p className="text-[#767880] text-xs font-semibold text-center">
                    Other
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* C: "Speak, and It's Done" — voice command pills grid */}
      <div className="py-24 px-6 bg-[#080a0f] text-center">
        <h2
          className="text-white font-extrabold mb-12 leading-tight"
          style={{ fontSize: "48px" }}
        >
          Speak, and It&apos;s Done
        </h2>

        {/* Voice command pills */}
        <div className="flex flex-wrap justify-center gap-3 max-w-[800px] mx-auto">
          {voiceCommands.map((command) => (
            <CommandPill key={command} label={command} />
          ))}
        </div>
      </div>
    </section>
  );
}
