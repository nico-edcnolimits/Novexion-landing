"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface BackgroundVideoProps {
  /** Path under /public to the mp4 file. */
  src: string;
  className?: string;
}

/**
 * Autoplaying, looping, muted background video. If it fails to load (missing
 * file, unsupported format), it unmounts silently so whatever sits behind it
 * (a PlaceholderImage) shows through — same graceful-degradation pattern as
 * PlaceholderImage itself.
 */
export function BackgroundVideo({ src, className }: BackgroundVideoProps) {
  const [failed, setFailed] = useState(false);

  if (failed) return null;

  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      onError={() => setFailed(true)}
      className={cn("absolute inset-0 w-full h-full object-cover object-center", className)}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
