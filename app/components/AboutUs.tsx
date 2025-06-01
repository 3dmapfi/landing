"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutUs() {
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
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Button
                size="lg"
                className="mt-4 hover:scale-105 transition-transform"
              >
                <b>Try it here!</b>
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
            className="relative"
            initial={{ rotate: -4, scale: 0.98 }}
            whileHover={{
              rotate: 2,
              scale: 1.03,
              boxShadow: "0 8px 32px 0 #00d2ff44",
            }}
            transition={{ type: "spring", stiffness: 120, damping: 8 }}
          >
            <Image
              src="/editor.png"
              alt="3DMapFi Platform Preview"
              width={480}
              height={320}
              className="rounded-xl shadow-lg object-cover"
              priority
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
    </section>
  );
}
