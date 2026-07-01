import Image from "next/image";

function PartA() {
  return (
    <section
      className="relative w-full flex flex-col items-center justify-center overflow-hidden"
      style={{ minHeight: "60vh", background: "#000000" }}
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Webdesign_1441-1920_US_Material_22_v2.jpg"
          alt="ANKER Thus AI Chip circuit board"
          fill
          className="object-cover opacity-60"
          sizes="100vw"
          priority
        />
        <div
          className="absolute inset-0"
          style={{ background: "rgba(0,0,0,0.4)" }}
        />
      </div>

      {/* Content */}
      <div
        className="relative z-10 flex flex-col items-center text-center"
        style={{ padding: "80px 32px", maxWidth: "800px" }}
      >
        {/* Eyebrow */}
        <p
          style={{
            color: "#17bbef",
            fontSize: "14px",
            fontFamily: "var(--font-montserrat)",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "20px",
          }}
        >
          ANKER Thus™ AI Chip
        </p>

        {/* Heading */}
        <h2
          className="text-white"
          style={{
            fontSize: "56px",
            fontFamily: "var(--font-montserrat)",
            fontWeight: 800,
            lineHeight: "1.1",
            marginBottom: "20px",
          }}
        >
          150× Computing Power
        </h2>

        {/* Subheading */}
        <p
          style={{
            color: "#767880",
            fontSize: "18px",
            fontFamily: "var(--font-montserrat)",
            lineHeight: "1.6",
            marginBottom: "40px",
            whiteSpace: "pre-line",
          }}
        >
          {"Powered by the world's first neural-net\ncompute-in-memory AI audio chip"}
        </p>

        {/* CTA */}
        <button
          type="button"
          className="cursor-pointer transition-opacity hover:opacity-90"
          style={{
            background: "transparent",
            color: "#ffffff",
            border: "1.5px solid #ffffff",
            borderRadius: "24px",
            padding: "12px 32px",
            fontSize: "16px",
            fontWeight: 700,
            fontFamily: "var(--font-montserrat)",
          }}
        >
          Watch Video
        </button>
      </div>
    </section>
  );
}

function PartB() {
  return (
    <section
      className="w-full"
      style={{ background: "#000000", padding: "80px 64px" }}
    >
      <div
        className="mx-auto grid"
        style={{
          maxWidth: "1200px",
          gridTemplateColumns: "1fr 1fr 1fr",
        }}
      >
        {/* Left column */}
        <div
          className="flex flex-col"
          style={{
            padding: "0 40px 0 0",
            borderRight: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          {/* Icon */}
          <div className="relative mb-6" style={{ width: "64px", height: "64px" }}>
            <Image
              src="/images/15-kws.png"
              alt="Compute-in-Memory chip architecture"
              fill
              className="object-contain"
              sizes="64px"
            />
          </div>

          <h3
            className="text-white"
            style={{
              fontSize: "22px",
              fontFamily: "var(--font-montserrat)",
              fontWeight: 700,
              marginBottom: "4px",
            }}
          >
            Compute-in-Memory
          </h3>
          <p
            style={{
              color: "#767880",
              fontSize: "14px",
              fontFamily: "var(--font-montserrat)",
              fontWeight: 500,
              marginBottom: "16px",
            }}
          >
            New Architecture
          </p>
          <p
            style={{
              color: "#767880",
              fontSize: "14px",
              fontFamily: "var(--font-montserrat)",
              lineHeight: "1.7",
            }}
          >
            Traditional chips separate the CPU and memory, wasting over 90% of
            energy on data movement alone. Thus™ fuses them into one—computing
            happens exactly where data lives.
          </p>
        </div>

        {/* Center column */}
        <div
          className="flex flex-col items-center text-center"
          style={{
            padding: "0 40px",
            borderRight: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <p
            style={{
              color: "#17bbef",
              fontSize: "72px",
              fontFamily: "var(--font-montserrat)",
              fontWeight: 900,
              lineHeight: "1",
              marginBottom: "4px",
            }}
          >
            150×
          </p>
          <p
            className="text-white"
            style={{
              fontSize: "20px",
              fontFamily: "var(--font-montserrat)",
              fontWeight: 700,
              marginBottom: "24px",
            }}
          >
            Computing Power
          </p>
          <p
            style={{
              color: "#767880",
              fontSize: "14px",
              fontFamily: "var(--font-montserrat)",
              lineHeight: "1.7",
            }}
          >
            By eliminating data movement, energy can be focused entirely on
            computation. The result: up to 150× the AI computing power from a
            single design shift—making advanced audio AI in earbuds practical.
          </p>
        </div>

        {/* Right column */}
        <div
          className="flex flex-col"
          style={{ padding: "0 0 0 40px" }}
        >
          {/* Icon */}
          <div className="relative mb-6" style={{ width: "64px", height: "64px" }}>
            <Image
              src="/images/5594e728-b5ba-459c-83b3-ab5ac8bfde36_Group_2121239447.png"
              alt="On-Device Audio AI waveform"
              fill
              className="object-contain"
              sizes="64px"
            />
          </div>

          <h3
            className="text-white"
            style={{
              fontSize: "22px",
              fontFamily: "var(--font-montserrat)",
              fontWeight: 700,
              marginBottom: "4px",
            }}
          >
            On-Device Audio AI
          </h3>
          <p
            style={{
              color: "#767880",
              fontSize: "14px",
              fontFamily: "var(--font-montserrat)",
              fontWeight: 500,
              marginBottom: "16px",
            }}
          >
            Novel Experiences
          </p>
          <p
            style={{
              color: "#767880",
              fontSize: "14px",
              fontFamily: "var(--font-montserrat)",
              lineHeight: "1.7",
            }}
          >
            Driven by this 150× compute, real-time audio AI runs directly on the
            earbud—no cloud, no phone, no delay, enabling experiences that were
            once impossible.
          </p>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="flex justify-center mt-16">
        <button
          type="button"
          className="cursor-pointer transition-opacity hover:opacity-90"
          style={{
            background: "#ffffff",
            color: "#000000",
            border: "none",
            borderRadius: "24px",
            padding: "14px 32px",
            fontSize: "16px",
            fontWeight: 700,
            fontFamily: "var(--font-montserrat)",
          }}
        >
          + Explore the ANKER Thus™ AI Chip
        </button>
      </div>
    </section>
  );
}

export function AnkerThusSection() {
  return (
    <>
      <PartA />
      <PartB />
    </>
  );
}
