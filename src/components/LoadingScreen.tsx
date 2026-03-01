"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const MIN_DISPLAY_MS = 800;
const MAX_WAIT_MS = 6000;

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    let videoReady = false;
    let imgReady = false;
    let minDisplayElapsed = false;

    const checkComplete = () => {
      if (!videoReady || !imgReady || !minDisplayElapsed) return;
      setIsFading(true);
    };

    const minTimer = setTimeout(() => {
      minDisplayElapsed = true;
      checkComplete();
    }, MIN_DISPLAY_MS);

    const maxTimer = setTimeout(() => {
      setIsFading(true);
    }, MAX_WAIT_MS);

    const video = document.createElement("video");
    video.preload = "auto";
    video.muted = true;
    video.playsInline = true;
    video.src = "/banner.mp4";

    const onVideoReady = () => {
      if (videoReady) return;
      videoReady = true;
      checkComplete();
    };

    video.addEventListener("canplaythrough", onVideoReady);
    video.addEventListener("canplay", onVideoReady);
    video.addEventListener("error", onVideoReady);
    video.load();

    const img = new window.Image();
    img.onload = () => {
      if (imgReady) return;
      imgReady = true;
      checkComplete();
    };
    img.onerror = () => {
      if (imgReady) return;
      imgReady = true;
      checkComplete();
    };
    img.src = "/app.png";

    return () => {
      clearTimeout(minTimer);
      clearTimeout(maxTimer);
      video.removeEventListener("canplaythrough", onVideoReady);
      video.removeEventListener("canplay", onVideoReady);
      video.removeEventListener("error", onVideoReady);
    };
  }, []);

  useEffect(() => {
    if (!isFading) return;
    const hideTimer = setTimeout(() => setIsVisible(false), 500);
    return () => clearTimeout(hideTimer);
  }, [isFading]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-cf-darker transition-opacity duration-500 ${
        isFading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-hidden={isFading}
    >
      <div className="flex flex-col items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-cf-orange animate-pulse" />
          <div
            className="w-2 h-2 rounded-full bg-cf-orange animate-pulse"
            style={{ animationDelay: "150ms" }}
          />
          <div
            className="w-2 h-2 rounded-full bg-cf-orange animate-pulse"
            style={{ animationDelay: "300ms" }}
          />
        </div>
      </div>
    </div>
  );
}
