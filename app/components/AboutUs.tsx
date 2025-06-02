"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export default function AboutUs() {
  const [showModal, setShowModal] = useState(false);
  const [showGeneratorModal, setShowGeneratorModal] = useState(false);

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
                <b>✨ Try Editor! ✨</b>
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
              src="/demo1.mov"
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
              src="/demo1.mov"
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
      {/* MapFi Generator Section */}
      <motion.div
        className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-4 sm:px-6 lg:px-8 mt-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
      >
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
            onClick={() => setShowGeneratorModal(true)}
            tabIndex={0}
            aria-label="Zoom video preview"
            role="button"
          >
            <video
              src="/demo2.mov"
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
            MapFi Generator{" "}
            <span className="ml-2 text-base font-medium text-primary/70">
              (3D Model Generator)
            </span>
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Instantly generate 3D models from your 2D/3D data using AI. The
            MapFi Generator empowers users to create, customize, and export
            high-quality 3D assets for use in virtual environments, games, and
            digital twins—no modeling experience required.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="font-semibold mb-1">Key Features</div>
            <ul className="list-disc pl-5 text-muted-foreground text-base space-y-1">
              <li>Upload 2D/3D data (images, point clouds, CAD, etc.)</li>
              <li>AI-powered 3D model creation and enhancement</li>
              <li>Export to GLTF, OBJ, FBX, and more</li>
              <li>Seamless integration with MapFi Editor</li>
              <li>Customizable textures and materials</li>
            </ul>
          </motion.div>
          <Link
            href="https://generator.3dmapfi.xyz"
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
                <b>✨ Try Generator! ✨</b>
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
      {/* Modal for zoomed video (MapFi Generator) */}
      {showGeneratorModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
          onClick={() => setShowGeneratorModal(false)}
          onKeyDown={(e) => {
            if (e.key === "Escape") setShowGeneratorModal(false);
          }}
        >
          <div
            className="relative max-w-3xl w-full p-4"
            role="document"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => {
              if (e.key === "Escape") setShowGeneratorModal(false);
            }}
          >
            <button
              className="absolute top-2 right-2 text-white text-2xl bg-black/40 rounded-full px-2 py-1 hover:bg-black/70 focus:outline-none"
              onClick={() => setShowGeneratorModal(false)}
              aria-label="Close video modal"
            >
              ×
            </button>
            <video
              src="/demo2.mov"
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
          <img
            src="/demo3.png"
            alt="MapFi LLM Preview"
            width={480}
            height={320}
            className="rounded-xl shadow-lg mb-4 bg-muted"
            style={{ maxWidth: 480, maxHeight: 320 }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
