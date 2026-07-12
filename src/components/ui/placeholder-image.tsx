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
  /** How the image fills its box. "cover" (default) crops to fill; "contain" shows it whole. */
  fit?: "cover" | "contain";
  /** CSS object-position override for "cover" fit, when the subject isn't centered (e.g. "25% center"). */
  objectPosition?: string;
}

/**
 * Stand-in for a real product photo/video. Tries to load the real asset at
 * /images/novexion/{name}.webp first; if it 404s, falls back to the on-brand
 * placeholder illustration. In development the fallback shows a "PLACEHOLDER"
 * tag + a caption naming the exact file to drop in; in the production build
 * (e.g. the live landing running ads) only the clean illustration renders, so
 * nothing looks broken while real assets are still pending. Once the real
 * .webp exists, it just renders — no code changes needed.
 */
const IS_DEV = process.env.NODE_ENV === "development";
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
  fit = "cover",
  objectPosition,
}: PlaceholderImageProps) {
  const [realAssetMissing, setRealAssetMissing] = useState(false);
  const realSrc = `/images/novexion/${name}.webp`;
  const fitClass = fit === "contain" ? "object-contain" : "object-cover object-center";

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
          className={cn(fitClass, fill ? "" : "w-full h-full")}
          style={objectPosition ? { objectPosition } : undefined}
          onError={() => setRealAssetMissing(true)}
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        IS_DEV ? "rounded-xl border-2 border-dashed" : "",
        fill ? "absolute inset-0" : "",
        className
      )}
      style={IS_DEV ? { borderColor: "var(--brand)" } : undefined}
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
      {IS_DEV && (
        <>
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
        </>
      )}
    </div>
  );
}
