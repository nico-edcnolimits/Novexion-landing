// Note: lucide-react v1.x removed brand icons (Instagram/Facebook/Twitter/LinkedIn).
// We use semantic equivalents: Camera → Instagram, Users → Facebook, X → Twitter/X, Link2 → LinkedIn.
import { Camera, Users, X, Link2, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const companyLinks = ["About Us", "Careers", "Warranty", "Partners"];
const productLinks = ["Headphones", "Earbuds", "Speakers", "Projectors"];
const supportLinks = [
  "FAQ",
  "Document & Drivers",
  "Shipping Policy",
  "Refund Policy",
  "Warranty Info",
];
const communityLinks = ["Blogs", "soundcoreCredits", "Earn 10% Referral Cash"];

const paymentMethods = [
  "Amex",
  "Apple Pay",
  "Diners",
  "Discover",
  "Google Pay",
  "MC",
  "PayPal",
  "Shop Pay",
  "Venmo",
  "Visa",
];

const policyLinks = [
  "About Us",
  "Shipping policy",
  "Refund policy",
  "Privacy Notice",
  "Terms of service",
];

const brandNames = [
  "ANKER Innovations",
  "ANKER",
  "ANKER SOLIX",
  "eufy",
  "eufy Make",
  "soundcore",
];

type SocialEntry = {
  label: string;
  // We type Icon as a component accepting SVG size props
  Icon: React.ComponentType<{ size?: number; className?: string }>;
};

const socialIcons: SocialEntry[] = [
  { Icon: Camera, label: "Instagram" },
  { Icon: Users, label: "Facebook" },
  { Icon: X, label: "Twitter / X" },
  { Icon: Link2, label: "LinkedIn" },
];

export function FooterSection() {
  return (
    <footer
      className={cn("bg-black text-white")}
      style={{ padding: "60px 64px 40px" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* ── 4-column grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Company / Brand */}
          <div>
            <p className="text-xl font-extrabold text-white mb-5">soundcore</p>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-[#767880] hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Products */}
          <div>
            <p className="text-xs text-[#767880] uppercase tracking-widest mb-5">
              Products
            </p>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-[#767880] hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <p className="text-xs text-[#767880] uppercase tracking-widest mb-5">
              Support
            </p>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-[#767880] hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Community + App */}
          <div>
            <p className="text-xs text-[#767880] uppercase tracking-widest mb-5">
              Community
            </p>
            <ul className="space-y-2 mb-8">
              {communityLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-[#767880] hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            <p className="text-xs text-[#767880] uppercase tracking-widest mb-3">
              App
            </p>
            <div className="space-y-2">
              <a
                href="#"
                className="block text-xs text-[#767880] border border-white/20 rounded-lg px-3 py-2 hover:text-white hover:border-white/40 transition-colors"
              >
                Get it on Google Play
              </a>
              <a
                href="#"
                className="block text-xs text-[#767880] border border-white/20 rounded-lg px-3 py-2 hover:text-white hover:border-white/40 transition-colors"
              >
                Download on the App Store
              </a>
            </div>
          </div>
        </div>

        {/* ── Social row ── */}
        <div className="flex flex-col sm:flex-row justify-between items-center py-8 border-b border-white/10 gap-4">
          <div className="flex gap-5 items-center">
            {socialIcons.map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="text-[#767880] hover:text-white transition-colors"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2 text-sm text-[#767880] hover:text-white cursor-pointer transition-colors">
            <Globe size={16} />
            <span>United States</span>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="pt-6 flex flex-col gap-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 text-xs text-[#767880]">
            {/* Copyright */}
            <p className="whitespace-nowrap">
              © Fantasia Trading LLC 2022 200923810277
            </p>

            {/* Payment method badges */}
            <div className="flex flex-wrap gap-1 items-center justify-center">
              {paymentMethods.map((method) => (
                <span
                  key={method}
                  className="inline-flex items-center justify-center w-10 h-6 text-[9px] font-semibold border border-white/20 rounded text-white/50 bg-white/[0.03]"
                >
                  {method}
                </span>
              ))}
            </div>

            {/* Policy links */}
            <div className="flex flex-wrap gap-x-2 items-center justify-center">
              {policyLinks.map((link, i) => (
                <span key={link} className="flex items-center gap-2">
                  <a href="#" className="hover:text-white transition-colors">
                    {link}
                  </a>
                  {i < policyLinks.length - 1 && (
                    <span className="text-white/20 select-none">|</span>
                  )}
                </span>
              ))}
            </div>
          </div>

          {/* ── Brand switcher ── */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 items-center justify-center pt-4 border-t border-white/10">
            {brandNames.map((brand) => (
              <a
                key={brand}
                href="#"
                className="text-[14px] font-bold text-[#767880] hover:text-white transition-colors"
              >
                {brand}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
