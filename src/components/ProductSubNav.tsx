"use client";

import { cn } from "@/lib/utils";

const tabs = [
  { label: "Overview", href: "#overview" },
  { label: "ANKER Thus™", href: "#thus" },
  { label: "Specs", href: "#specs" },
];

interface ProductSubNavProps {
  activeTab?: string;
}

export function ProductSubNav({ activeTab = "Overview" }: ProductSubNavProps) {
  return (
    <div
      className="sticky z-40 flex items-center justify-between px-16"
      style={{
        backgroundColor: "#1e2024",
        height: "46px",
        top: "0",
      }}
    >
      {/* Left: Product name */}
      <span
        className="text-white shrink-0"
        style={{
          fontWeight: 700,
          fontSize: "14px",
          letterSpacing: "-0.04em",
          whiteSpace: "nowrap",
        }}
      >
        soundcore Liberty 5 Pro Series
      </span>

      {/* Center: Tab links */}
      <nav className="flex items-center h-full gap-8">
        {tabs.map((tab) => {
          const isActive = tab.label === activeTab;
          return (
            <a
              key={tab.label}
              href={tab.href}
              className={cn(
                "relative h-full flex items-center text-white transition-colors hover:text-gray-300",
                "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:content-['']",
                isActive
                  ? "after:bg-[#17bbef]"
                  : "after:bg-transparent hover:after:bg-white/30"
              )}
              style={{ fontSize: "14px", fontWeight: 500 }}
            >
              {tab.label}
            </a>
          );
        })}
      </nav>

      {/* Right: Shop Now button */}
      <a
        href="#shop"
        className="shrink-0 bg-white text-black font-bold transition-opacity hover:opacity-90"
        style={{
          fontSize: "14px",
          fontWeight: 700,
          borderRadius: "24px",
          padding: "8px 20px",
        }}
      >
        Shop Now
      </a>
    </div>
  );
}
