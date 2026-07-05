"use client";

import Image from "next/image";
import { ImageOff } from "lucide-react";
import { cn } from "@/lib/utils";

interface PlaceholderImageProps {
  /** Path under /public to the on-brand illustration used as a stand-in visual. */
  illustration: string;
  /** Short label for what this placeholder represents (shown in the corner tag). */
  alt: string;
  /** Instructions for the real asset that should replace this placeholder before launch. */
  brief: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

/**
 * Stand-in for a real product photo/video. Renders the on-brand placeholder
 * illustration plus a visible "PLACEHOLDER" tag and a caption describing the
 * exact real asset to source, so design stays intact but nothing gets mistaken
 * for final content.
 */
export function PlaceholderImage({
  illustration,
  alt,
  brief,
  fill,
  width,
  height,
  className,
  priority,
}: PlaceholderImageProps) {
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
        {brief}
      </div>
    </div>
  );
}
