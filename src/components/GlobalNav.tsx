"use client";

import { Search, ShoppingCart, User, Monitor } from "lucide-react";
import { cn } from "@/lib/utils";

const brandLinks = [
  { label: "ANKER", href: "#" },
  { label: "ANKER SOLIX", href: "#" },
  { label: "eufy", href: "#" },
  { label: "eufy Make", href: "#" },
  { label: "soundcore", href: "#" },
];

const navLinks = [
  { label: "Headphones", href: "#" },
  { label: "Earbuds", href: "#" },
  { label: "Speakers", href: "#" },
  { label: "Works", href: "#" },
  { label: "Projectors", href: "#" },
  { label: "Independence Day Sale", href: "#" },
];

const rightLinks = [
  { label: "New Release", href: "#" },
  { label: "Deals", href: "#" },
  { label: "Explore & Support", href: "#" },
];

export function GlobalNav() {
  return (
    <header className="sticky top-0 z-50">
      {/* Top brand switcher bar */}
      <div
        className="h-8 flex items-center justify-between px-16"
        style={{ backgroundColor: "#000" }}
      >
        <nav className="flex items-center gap-4">
          {brandLinks.map((link, index) => (
            <span key={link.label} className="flex items-center gap-4">
              <a
                href={link.href}
                className="text-white hover:text-gray-300 transition-colors"
                style={{ fontSize: "12px" }}
              >
                {link.label}
              </a>
              {index < brandLinks.length - 1 && (
                <span className="text-gray-500 text-xs">|</span>
              )}
            </span>
          ))}
        </nav>
        <span className="text-white" style={{ fontSize: "12px" }}>
          ANKER Innovations
        </span>
      </div>

      {/* Main nav */}
      <nav
        className={cn(
          "h-20 flex items-center justify-between px-16 bg-white shadow-sm"
        )}
      >
        {/* Left: Logo + tagline */}
        <div className="flex items-center gap-3 shrink-0">
          <a href="#" className="flex items-center gap-3">
            <span
              className="text-black font-black tracking-tight"
              style={{ fontSize: "22px", letterSpacing: "-0.03em" }}
            >
              soundcore
            </span>
            <span className="text-gray-300 text-lg">|</span>
            <span
              className="text-gray-500 font-medium"
              style={{ fontSize: "13px" }}
            >
              Hear It, Feel It
            </span>
          </a>
        </div>

        {/* Center-left: Nav links */}
        <ul className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-black hover:text-gray-600 transition-colors font-medium whitespace-nowrap"
                style={{ fontSize: "14px" }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: Links + Icons */}
        <div className="flex items-center gap-4 shrink-0">
          {rightLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hidden xl:block text-black hover:text-gray-600 transition-colors font-medium whitespace-nowrap"
              style={{ fontSize: "14px" }}
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-3 ml-2">
            <button
              className="text-black hover:text-gray-600 transition-colors"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <button
              className="text-black hover:text-gray-600 transition-colors"
              aria-label="Cart"
            >
              <ShoppingCart size={20} />
            </button>
            <button
              className="text-black hover:text-gray-600 transition-colors"
              aria-label="Account"
            >
              <User size={20} />
            </button>
            <button
              className="text-black hover:text-gray-600 transition-colors"
              aria-label="Display"
            >
              <Monitor size={20} />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
