"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { Brain } from "lucide-react";

export default function AboutUs() {
  const [showModal, setShowModal] = useState(false);
  return (
    <section
      id="about"
      className="py-36 bg-background backdrop-blur rounded-2xl shadow-xl"
    >
      <motion.div
        className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
      >
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            type: "spring",
            bounce: 0.2,
          }}
        >
          <motion.h2
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            About 3DMapFi
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            3DMapFi is pioneering the future of digital mapping by transforming
            real-world data into immersive 3D environments. Our platform
            empowers users to build, edit, and customize virtual spaces
            visually—no code required. Leveraging AI-driven tools and an
            intuitive map editor, we make it easy for anyone to create, manage,
            and share 3D worlds.
          </motion.p>
          <motion.ul
            className="list-disc pl-5 space-y-2 text-muted-foreground"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.4,
                },
              },
            }}
          >
            {[
              "AI-powered map editor for seamless customization",
              "Instantly convert real data into interactive 3D spaces",
              "No coding or technical expertise needed",
              "Trusted by forward-thinking businesses and creators",
            ].map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
          <Link
            href="https://editor.3dmapfi.xyz"
            target="_blank"
            rel="noreferrer"
          >
            <motion.div
              className="inline-block"
              animate={{
                rotate: [0, 4, -4, 0],
                x: [0, 4, -4, 0],
              }}
              transition={{
                duration: 0.7,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            >
              <Button size="lg" className="mt-4 px-8 py-4">
                <b>✨ Try it here! ✨</b>
              </Button>
            </motion.div>
          </Link>
        </motion.div>
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.9,
            delay: 0.2,
            type: "spring",
            bounce: 0.25,
          }}
        >
          <motion.div
            className="relative cursor-pointer"
            initial={{ rotate: -4, scale: 0.98 }}
            whileHover={{
              rotate: 2,
              scale: 1.03,
              boxShadow: "0 8px 32px 0 #00d2ff44",
            }}
            transition={{ type: "spring", stiffness: 120, damping: 8 }}
            onClick={() => setShowModal(true)}
            tabIndex={0}
            aria-label="Zoom video preview"
            role="button"
          >
            <video
              src="/demo1.mp4"
              width={480}
              height={320}
              className="rounded-xl shadow-lg object-cover"
              autoPlay
              loop
              muted
              playsInline
              poster="/editor.png"
            />
            {/* Animated glow effect */}
            <motion.span
              className="absolute inset-0 rounded-xl pointer-events-none"
              style={{
                boxShadow: "0 0 32px 0 #00d2ff55, 0 4px 32px 0 #3a7bd533",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{
                duration: 1.2,
                delay: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
      {/* Modal for zoomed video */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
          onClick={() => setShowModal(false)}
          onKeyDown={(e) => {
            if (e.key === "Escape") setShowModal(false);
          }}
        >
          <div
            className="relative max-w-3xl w-full p-4"
            role="document"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => {
              if (e.key === "Escape") setShowModal(false);
            }}
          >
            <button
              className="absolute top-2 right-2 text-white text-2xl bg-black/40 rounded-full px-2 py-1 hover:bg-black/70 focus:outline-none"
              onClick={() => setShowModal(false)}
              aria-label="Close video modal"
            >
              ×
            </button>
            <video
              src="/demo1.mp4"
              className="w-full h-auto rounded-xl shadow-2xl border-4 border-white"
              autoPlay
              loop
              muted
              controls
              playsInline
              poster="/editor.png"
              style={{ background: "#222" }}
            />
          </div>
        </div>
      )}
      {/* MapFi LLM Section */}
      <motion.div
        className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-4 sm:px-6 lg:px-8 mt-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
      >
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            type: "spring",
            bounce: 0.2,
          }}
        >
          <motion.h2
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            MapFi LLM{" "}
            <span className="ml-2 text-base font-medium text-primary/70">
              (In Development)
            </span>
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            MapFi LLM is your AI assistant for mapping—generate map layers,
            analyze spatial data, automate workflows, and get code or
            integration help, all in plain English.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="font-semibold mb-1">Key Features</div>
            <ul className="list-disc pl-5 text-muted-foreground text-base space-y-1">
              <li>Natural language to map layers</li>
              <li>Spatial data Q&A</li>
              <li>Code & workflow automation</li>
              <li>Integration & docs help</li>
            </ul>
          </motion.div>
        </motion.div>
        <motion.div className="flex-1 flex justify-center items-center">
          <div className="rounded-xl bg-muted/40 border border-muted p-8 text-center shadow-lg flex flex-col items-center">
            <div className="flex justify-center items-center mb-4">
              <Brain className="h-16 w-16 text-primary drop-shadow" />
            </div>
            <div className="font-semibold text-lg mb-2">MapFi LLM</div>
            <div className="text-muted-foreground text-base">
              AI assistant for mapping, code, and data analysis.
              <br />
              Coming soon!
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
