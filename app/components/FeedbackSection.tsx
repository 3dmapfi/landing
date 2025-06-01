"use client";

import { motion } from "framer-motion";

const feedbacks = [
  {
    name: "Alice Nguyen",
    company: "GeoChain Solutions",
    feedback:
      "3DMapFi's AI-powered analytics and blockchain-backed data integrity have transformed how we manage and trust our geospatial data. The platform is intuitive and powerful!",
    avatar: "/placeholder-user.jpg",
  },
  {
    name: "David Tran",
    company: "UrbanAI Tech",
    feedback:
      "The real-time collaboration and 3D visualization tools are a game changer for our city planning projects. Our team productivity has soared!",
    avatar: "/placeholder-user.jpg",
  },
  {
    name: "Sophia Lee",
    company: "MapTrust Inc.",
    feedback:
      "We needed secure, scalable mapping. 3DMapFi delivered with seamless blockchain integration and stunning 3D maps. Highly recommended!",
    avatar: "/placeholder-user.jpg",
  },
];

export default function FeedbackSection() {
  return (
    <section
      id="feedback"
      className="py-24 bg-background/95 backdrop-blur rounded-2xl shadow-xl mt-16"
    >
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          What Our Clients Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {feedbacks.map((item, i) => (
            <motion.div
              key={item.name}
              className="bg-gradient-to-br from-blue-900/80 via-blue-700/70 to-blue-500/60 rounded-lg p-8 shadow-lg flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                type: "spring",
                bounce: 0.18,
              }}
              whileHover={{ scale: 1.03, boxShadow: "0 8px 32px 0 #00d2ff44" }}
            >
              <img
                src={item.avatar}
                alt={item.name}
                className="w-16 h-16 rounded-full mb-4 border-2 border-blue-400 shadow"
              />
              <p className="text-cyan-100/90 mb-4">{item.feedback}</p>
              <span className="text-base font-semibold text-white">
                {item.name}
              </span>
              <span className="text-xs text-cyan-200/70 mb-2">
                {item.company}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
