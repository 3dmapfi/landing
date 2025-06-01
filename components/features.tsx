"use client";

import { Brain, Cloud, Shield, Zap } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    name: "AI-Driven Map Intelligence",
    description:
      "Leverage advanced AI to analyze geospatial data, uncover trends, and automate map-based decision making.",
    icon: Brain,
  },
  {
    name: "Blockchain-Powered Data Integrity",
    description:
      "Ensure the authenticity and traceability of your geospatial data with secure blockchain technology.",
    icon: Shield,
  },
  {
    name: "Real-Time Collaborative Mapping",
    description:
      "Collaborate on live maps with seamless cloud-native tools, enabling teams to build and update geospatial projects together.",
    icon: Cloud,
  },
  {
    name: "High-Performance 3D Visualization",
    description:
      "Experience fast, interactive 3D maps optimized for large-scale datasets and complex analytics.",
    icon: Zap,
  },
];

export default function Features() {
  return (
    <section className="container space-y-16 py-24 md:py-32" id="features">
      <motion.div
        className="mx-auto max-w-[58rem] text-center"
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
          Cutting-Edge Solutions
        </motion.h2>
        <motion.p
          className="mt-4 text-muted-foreground sm:text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Discover how 3DMapFi Soft can transform your business with our
          advanced map technologies.
        </motion.p>
      </motion.div>

      <motion.div
        className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.18,
              delayChildren: 0.3,
            },
          },
        }}
      >
        {features.map((feature, i) => (
          <motion.div
            key={feature.name}
            className="relative overflow-hidden rounded-lg border bg-background p-8 shadow-lg"
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              type: "spring",
              bounce: 0.18,
              delay: i * 0.1,
            }}
            whileHover={{ scale: 1.03, boxShadow: "0 8px 32px 0 #00d2ff44" }}
          >
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
            >
              <feature.icon className="h-8 w-8 text-primary drop-shadow" />
              <h3 className="font-bold text-lg">{feature.name}</h3>
            </motion.div>
            <motion.p
              className="mt-2 text-muted-foreground"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
            >
              {feature.description}
            </motion.p>
            {/* Animated border glow */}
            <motion.span
              className="absolute inset-0 rounded-lg pointer-events-none"
              style={{
                boxShadow: "0 0 32px 0 #00d2ff33, 0 4px 32px 0 #3a7bd522",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{
                duration: 1.2,
                delay: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
