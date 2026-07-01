import Image from "next/image";

export function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: "calc(100vh - 126px)" }}
    >
      {/* Background image */}
      <Image
        src="/images/videoframe_0_16.png"
        alt="soundcore Liberty 5 Pro Series"
        fill
        className="object-cover object-center"
        priority
        quality={90}
      />

      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

      {/* Left content — absolute positioned */}
      <div
        className="absolute top-1/2 -translate-y-1/2 flex flex-col gap-6"
        style={{ left: "64px", maxWidth: "560px" }}
      >
        {/* Eyebrow */}
        <p
          className="text-white"
          style={{ fontSize: "16px", fontWeight: 500, opacity: 0.9 }}
        >
          Liberty 5 Pro / Liberty 5 Pro Max
        </p>

        {/* H1 */}
        <h1
          className="text-white"
          style={{
            fontSize: "56px",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
          }}
        >
          The World&apos;s Clearest
          <br />
          Earbuds for Calls
        </h1>

        {/* Sub-headline */}
        <p
          className="text-white"
          style={{ fontSize: "16px", fontWeight: 500 }}
        >
          Powered by ANKER Thus™ AI Chip¹
        </p>

        {/* CTA buttons */}
        <div className="flex items-center gap-3">
          <a
            href="#liberty-5-pro-max"
            className="inline-flex items-center justify-center text-white font-bold transition-opacity hover:opacity-90 whitespace-nowrap"
            style={{
              backgroundColor: "rgba(255,255,255,0.15)",
              border: "1.5px solid white",
              borderRadius: "24px",
              padding: "12px 24px",
              fontSize: "16px",
              fontWeight: 700,
            }}
          >
            Liberty 5 Pro Max
          </a>
          <a
            href="#liberty-5-pro"
            className="inline-flex items-center justify-center text-white font-bold transition-opacity hover:opacity-90 whitespace-nowrap"
            style={{
              backgroundColor: "transparent",
              border: "1.5px solid white",
              borderRadius: "24px",
              padding: "12px 24px",
              fontSize: "16px",
              fontWeight: 700,
            }}
          >
            Liberty 5 Pro
          </a>
        </div>
      </div>

      {/* Awards row — bottom of hero */}
      <div
        className="absolute bottom-0 left-0"
        style={{ paddingBottom: "32px", paddingLeft: "64px" }}
      >
        <Image
          src="/images/Group_2147238894.png"
          alt="Award logos: Guinness World Record, SoundGuys Recommended, iF Design Award, Tom's Guide, The Verge, CNET, Red Dot"
          width={700}
          height={60}
          className="h-16 w-auto object-contain"
          quality={90}
        />
      </div>
    </section>
  );
}
