"use client";

import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";

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
      <motion.div
        className="container flex flex-col items-center gap-4 py-24 text-center md:py-32"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
      >
        <motion.h2
          className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Ready to revolutionize your business?
        </motion.h2>
        <motion.p
          className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Join leading companies who trust 3DMapFi to drive their digital
          transformation and stay ahead in the rapidly evolving tech landscape.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.97 }}
        >
          <Link href="https://docs.3dmapfi.xyz" target="_blank" rel="noreferrer">
            <Button size="lg" className="mt-4 transition-transform">
              Get Started Today
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
