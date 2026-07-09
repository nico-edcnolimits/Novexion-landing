"use client";

import { useState } from "react";
import Image from "next/image";
import { ImageOff } from "lucide-react";
import { cn } from "@/lib/utils";

interface PlaceholderImageProps {
  /** Path under /public to the on-brand illustration used as a stand-in visual. */
  illustration: string;
  /**
   * Base filename (no extension) the real asset must be saved as under
   * public/images/novexion/ — e.g. "hero-driver" for hero-driver.webp.
   * Drop a .webp with this exact name in that folder and it replaces the
   * placeholder automatically, no code changes needed.
   */
  name: string;
  /** Short label for what this placeholder represents (shown in the corner tag). */
  alt: string;
  /** Instructions for what the real photo/video should show. */
  brief: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

/**
 * Stand-in for a real product photo/video. Tries to load the real asset at
 * /images/novexion/{name}.webp first; if it 404s, falls back to an on-brand
 * placeholder illustration with a visible "PLACEHOLDER" tag and a caption
 * naming the exact file to drop in. Once the real .webp exists, it just
 * renders — no code changes needed.
 */
export function PlaceholderImage({
  illustration,
  name,
  alt,
  brief,
  fill,
  width,
  height,
  className,
  priority,
}: PlaceholderImageProps) {
  const [realAssetMissing, setRealAssetMissing] = useState(false);
  const realSrc = `/images/novexion/${name}.webp`;

  if (!realAssetMissing) {
    return (
      <div
        className={cn("relative overflow-hidden", fill ? "absolute inset-0" : "", className)}
      >
        <Image
          src={realSrc}
          alt={alt}
          fill={fill}
          width={fill ? undefined : width}
          height={fill ? undefined : height}
          priority={priority}
          className={cn("object-cover object-center", fill ? "" : "w-full h-full")}
          onError={() => setRealAssetMissing(true)}
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border-2 border-dashed",
        fill ? "absolute inset-0" : "",
        className
      )}
      style={{ borderColor: "var(--brand)" }}
    >
      <Image
        src={illustration}
        alt={alt}
        fill={fill}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        priority={priority}
        className={cn("object-cover object-center", fill ? "" : "w-full h-full")}
      />
      <div
        className="absolute top-2 left-2 flex items-center gap-1.5 rounded-full px-2.5 py-1 text-white"
        style={{ backgroundColor: "var(--brand)", fontSize: "11px", fontWeight: 700 }}
      >
        <ImageOff size={12} />
        PLACEHOLDER
      </div>
      <div
        className="absolute bottom-0 left-0 right-0 px-3 py-2 text-white"
        style={{ backgroundColor: "rgba(10,31,68,0.85)", fontSize: "11px", lineHeight: 1.4 }}
      >
        <p className="font-mono font-bold" style={{ color: "#7fc4ff" }}>
          Reemplazar: public/images/novexion/{name}.webp
        </p>
        <p>{brief}</p>
      </div>
    </div>
  );
}
