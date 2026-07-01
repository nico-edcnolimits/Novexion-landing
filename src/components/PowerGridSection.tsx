import Image from "next/image";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  subtitle: string;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
}

function FeatureCard({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  className,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border flex flex-col",
        "bg-white/[0.04] border-white/10",
        className
      )}
    >
      {imageSrc && (
        <div className="relative w-full" style={{ height: "280px" }}>
          <Image
            src={imageSrc}
            alt={imageAlt ?? title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      )}
      <div className="p-5">
        <p
          className="text-white font-bold mb-1"
          style={{ fontSize: "20px", fontFamily: "var(--font-montserrat)" }}
        >
          {title}
        </p>
        <p
          style={{
            color: "#767880",
            fontSize: "14px",
            fontFamily: "var(--font-montserrat)",
          }}
        >
          {subtitle}
        </p>
      </div>
    </div>
  );
}

function CenterChipCard() {
  return (
    <div
      className="relative overflow-hidden rounded-2xl flex flex-col items-center justify-center"
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.1)",
        minHeight: "580px",
        padding: "40px 24px",
      }}
    >
      <div className="relative w-full mb-6" style={{ height: "320px" }}>
        <Image
          src="/images/02-KSP.png"
          alt="ANKER Thus AI Chip"
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 40vw"
        />
      </div>
      <p
        className="text-white text-center"
        style={{
          fontSize: "20px",
          fontFamily: "var(--font-montserrat)",
          fontWeight: 700,
          lineHeight: "1.4",
        }}
      >
        Powered by the World&apos;s First Neural-Net Compute-in-Memory AI Audio
        Chip
      </p>
    </div>
  );
}

export function PowerGridSection() {
  return (
    <section
      className="w-full"
      style={{
        background: "#000000",
        padding: "80px 64px",
      }}
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h2
          className="text-white mb-4"
          style={{
            fontSize: "48px",
            fontFamily: "var(--font-montserrat)",
            fontWeight: 800,
          }}
        >
          150× Power <sup style={{ fontSize: "24px", verticalAlign: "super" }}>²</sup>
        </h2>
        <p
          style={{
            color: "#767880",
            fontSize: "18px",
            fontFamily: "var(--font-montserrat)",
          }}
        >
          On-Device Audio AI—Four Features You Never Thought Possible
        </p>
      </div>

      {/* 3-column grid */}
      <div
        className="grid gap-4 mx-auto"
        style={{
          gridTemplateColumns: "1fr 1.2fr 1fr",
          maxWidth: "1200px",
        }}
      >
        {/* Left column — 2 stacked cards */}
        <div className="flex flex-col gap-4">
          <FeatureCard
            title="Whisper-Clear Calls"
            subtitle="Crystal-Clear Calls, Anywhere"
            imageSrc="/images/20260522-002816.png"
            imageAlt="Woman in office wearing earbuds"
          />
          <FeatureCard
            title="Instant Pure Silence"
            subtitle="Industry-Leading Noise Cancellation"
            imageSrc="/images/02-KSP_28cd788b-c180-4fb3-9395-b325d97321ce.png"
            imageAlt="Blue earbuds in case"
          />
        </div>

        {/* Center column — tall chip card */}
        <CenterChipCard />

        {/* Right column — 2 stacked cards */}
        <div className="flex flex-col gap-4">
          <FeatureCard
            title="Your Signature Sound"
            subtitle="Personalized Sound Experience"
            imageSrc="/images/02-KSP_3b712b6a-cb42-447a-84ea-5a194e5eda6b.png"
            imageAlt="Titanium Gold earbuds case"
          />
          <FeatureCard
            title="Lag-Free Voice Control"
            subtitle="Instant Hands-Free Voice Control"
          />
        </div>
      </div>
    </section>
  );
}
