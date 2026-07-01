import { Package, ShieldCheck, Gift } from "lucide-react";
import { cn } from "@/lib/utils";

interface OfferCard {
  title: string;
  value: string;
  icon: React.ReactNode;
}

const offerCards: OfferCard[] = [
  {
    title: "Free\nNext-Day Delivery",
    value: "Worth $9.99",
    icon: <Package size={32} className="text-white" />,
  },
  {
    title: "Free\nsoundcore Care",
    value: "Worth $9.99",
    icon: <ShieldCheck size={32} className="text-white" />,
  },
  {
    title: "Free\nWorry-Free Purchase",
    value: "Worth Up to $4.99",
    icon: <Gift size={32} className="text-white" />,
  },
];

export function TrialOfferSection() {
  return (
    <section
      className="w-full flex flex-col items-center"
      style={{ backgroundColor: "#000000", padding: "80px 64px" }}
    >
      {/* Heading */}
      <h2
        className="text-white text-center"
        style={{
          fontSize: "40px",
          fontWeight: 800,
          lineHeight: 1.2,
          maxWidth: "700px",
        }}
      >
        $0 Trial Spots Fully Booked!
        <br />
        Enjoy a 30-Day Risk-Free Guarantee
      </h2>

      {/* Sub text */}
      <div className="flex flex-col items-center gap-3 mt-6">
        <p
          className="text-center"
          style={{ color: "#767880", fontSize: "16px" }}
        >
          All Free Trial Spots Are Taken
        </p>
        <p
          className="text-center"
          style={{ color: "#767880", fontSize: "14px", maxWidth: "500px" }}
        >
          This promotion reached its 5,000-unit limit on June 11. The offer is
          now closed. Your remaining benefits continue as listed below.
        </p>
      </div>

      {/* Large "30 Days" visual */}
      <div className="relative flex flex-col items-center justify-center mt-12 mb-10">
        {/* Glowing radial gradient behind the number */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(255,255,255,0.18) 0%, transparent 70%)",
          }}
        />
        <span
          className="text-white leading-none font-black relative z-10"
          style={{ fontSize: "200px", fontWeight: 900, lineHeight: 1 }}
        >
          30
        </span>
        <span
          className="text-white font-black relative z-10 -mt-4"
          style={{ fontSize: "60px", fontWeight: 900, lineHeight: 1 }}
        >
          Days
        </span>
      </div>

      {/* Offers continue heading */}
      <h3
        className="text-white text-center"
        style={{ fontSize: "28px", fontWeight: 700 }}
      >
        Your 3 Exclusive Offers Continue
      </h3>

      {/* How it works / Rules links */}
      <div className="flex items-center gap-6 mt-3">
        <a
          href="#how-it-works"
          className="font-medium hover:underline transition-colors"
          style={{ color: "#17bbef", fontSize: "14px" }}
        >
          How it works &gt;
        </a>
        <a
          href="#rules"
          className="font-medium hover:underline transition-colors"
          style={{ color: "#17bbef", fontSize: "14px" }}
        >
          Rules &gt;
        </a>
      </div>

      {/* Valid date */}
      <p className="mt-2" style={{ color: "#767880", fontSize: "14px" }}>
        Offer Valid: May 21st - June 30th, 2026
      </p>

      {/* 3-col offer cards */}
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 w-full"
        style={{ maxWidth: "1100px" }}
      >
        {offerCards.map((card) => (
          <div
            key={card.title}
            className={cn("flex items-center justify-between")}
            style={{
              backgroundColor: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "16px",
              padding: "24px",
            }}
          >
            <div className="flex flex-col gap-1">
              <span
                className="text-white font-bold"
                style={{ fontSize: "18px", fontWeight: 700, whiteSpace: "pre-line" }}
              >
                {card.title}
              </span>
              <span
                style={{ color: "#767880", fontSize: "13px" }}
              >
                {card.value}
              </span>
            </div>
            <div className="ml-4 shrink-0">{card.icon}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
