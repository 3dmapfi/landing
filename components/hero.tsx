"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ThreeScene from "./three-scene";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-3.5rem)] w-full flex-col items-center justify-center space-y-8 py-24 text-center md:py-32 overflow-hidden">
      {/* 3D Background */}
      <section
        className="fixed inset-0 z-0 w-full h-full pointer-events-none"
        style={{
          maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 70%, transparent 100%)",
        }}
      >
        <ThreeScene />
      </section>

      {/* Content overlay */}
      <motion.div
        className="relative z-10 space-y-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring", bounce: 0.25 }}
      >
        <motion.h1
          className="bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, type: "spring", bounce: 0.3 }}
        >
          Transforming Maps faster with
          <br />
          3DMapFi
        </motion.h1>
        <motion.p
          className="mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, type: "spring", bounce: 0.2 }}
        >
          Build virtual spaces from real data. No code. No hassle. Just
          creation.
          <br />
          Edit and customize your maps visually with the 3DMapFi Map Editor.
          Powerful, AI-driven, 3DMapFi lets you create, edit, and manage 3D maps
          with ease—no hand-coding required.
        </motion.p>
      </motion.div>
      <motion.div
        className="relative z-10 flex gap-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6, type: "spring", bounce: 0.25 }}
      >
        <motion.div
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link
            href="https://generator.3dmapfi.xyz"
            target="_blank"
            rel="noreferrer"
          >
            <Button size="lg" variant="secondary">
              Generator
            </Button>
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link
            href="https://editor.3dmapfi.xyz"
            target="_blank"
            rel="noreferrer"
          >
            <Button size="lg">
              Explore
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
