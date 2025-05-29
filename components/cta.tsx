"use client";

import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";

// Dynamically import the 3D overlay to avoid SSR issues
const Animated3DOverlay = dynamic(
  () => import("@/components/Animated3DOverlay"),
  { ssr: false }
);

export default function CTA() {
  return (
    <section
      id="cta-section"
      className="border-t border-b relative z-50 bg-background/85 backdrop-blur"
    >
      {/* 3D Overlay fixed to top border */}
      {/* <Animated3DOverlay overlayTargetId="cta-section" /> */}
      <div className="container flex flex-col items-center gap-4 py-24 text-center md:py-32">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
          Ready to revolutionize your business?
        </h2>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Join leading companies who trust 3DMapFi to drive their digital
          transformation and stay ahead in the rapidly evolving tech landscape.
        </p>
        <Button size="lg" className="mt-4">
          Get Started Today
        </Button>
      </div>
    </section>
  );
}
