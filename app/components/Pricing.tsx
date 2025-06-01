"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const plans = [
	{
		name: "Starter",
		price: "$19",
		description:
			"Perfect for individuals and small teams starting with 3D mapping. Get essential features to visualize and collaborate.",
		included: [
			"AI-driven map analytics",
			"Collaborative mapping tools",
			"Basic 3D visualization",
			"Email support",
		],
	},
	{
		name: "Professional",
		price: "$49",
		description:
			"For growing teams and businesses needing advanced analytics and security. Unlock more power and support.",
		included: [
			"All Starter features",
			"Blockchain data integrity",
			"Advanced 3D visualization",
			"Priority support",
		],
	},
	{
		name: "Enterprise",
		price: "Custom",
		description:
			"Tailored for large organizations with custom needs. Get dedicated support, custom AI, and full service.",
		included: [
			"All Professional features",
			"Custom AI solutions",
			"Dedicated account manager",
			"24/7 phone & chat support",
		],
	},
];

const cardVariants = {
	hidden: { opacity: 0, y: 40, scale: 0.95 },
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		scale: 1,
		transition: { delay: i * 0.12, type: "spring", stiffness: 120, damping: 14 },
	}),
	hover: {
		scale: 1.04,
		boxShadow: "0 0 40px 0 #00d2ff77, 0 8px 40px 0 #3a7bd555",
		transition: { type: "spring", stiffness: 200, damping: 12 },
	},
	tap: {
		scale: 0.97,
		transition: { type: "spring", stiffness: 300, damping: 18 },
	},
};

const buttonVariants = {
	initial: { scale: 1, boxShadow: "0 2px 8px 0 #00d2ff33" },
	hover: { scale: 1.06, boxShadow: "0 4px 16px 0 #00d2ff66" },
	tap: { scale: 0.96 },
};

export default function Pricing() {
	return (
		<motion.section
			id="pricing"
			className="pb-20 pt-20 bg-background backdrop-blur rounded-2xl shadow-xl"
			initial={{ opacity: 0, y: 40 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.7, type: "spring", stiffness: 80 }}
		>
			<div className="container mx-auto">
				<motion.h2
					className="text-3xl font-bold text-center mb-12"
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}
				>
					Choose Your Plan
				</motion.h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<AnimatePresence>
						{plans.map((plan, idx) => {
							// Gradient and shadow classes for each plan
							let borderClass = "";
							let shadowClass = "";
							let boxShadow = "";
							let borderGlow = "";
							let buttonClass = "";

							borderClass = "border-2 border-blue-500";
							shadowClass = "shadow-blue-400/30";
							boxShadow = "0 0 32px 0 #00d2ff55, 0 4px 32px 0 #3a7bd533";
							borderGlow = "0 0 24px 4px #00d2ffaa";
							buttonClass =
								"bg-blue-400 text-white hover:bg-blue-500 shadow-blue-400/40";

							return (
								<motion.div
									key={plan.name}
									className={`relative p-8 rounded-lg shadow-md overflow-hidden bg-gradient-to-br ${borderClass} ${shadowClass}`}
									style={{
										boxShadow,
										backdropFilter: "blur(8px)",
									}}
									custom={idx}
									initial="hidden"
									whileInView="visible"
									whileHover="hover"
									whileTap="tap"
									viewport={{ once: true, amount: 0.4 }}
									variants={cardVariants}
									exit={{
										opacity: 0,
										y: 40,
										scale: 0.95,
										transition: { duration: 0.3 },
									}}
								>
									{/* Futuristic glowing border effect */}
									<motion.span
										className="absolute inset-0 pointer-events-none rounded-lg border border-white/10"
										style={{ boxShadow: borderGlow }}
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ delay: 0.3 + idx * 0.1, duration: 0.7 }}
									/>
									<motion.h3
										className="relative z-10 text-2xl font-bold mb-2 text-white drop-shadow-lg"
										initial={{ opacity: 0, y: -10 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
									>
										{plan.name}
									</motion.h3>
									<motion.p
										className="relative z-10 text-cyan-100/80 mb-4 text-base min-h-[48px]"
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ delay: 0.3 + idx * 0.1, duration: 0.5 }}
									>
										{plan.description}
									</motion.p>
									<motion.p
										className="relative z-10 text-4xl font-bold mb-6 text-white drop-shadow-lg"
										initial={{ opacity: 0, scale: 0.9 }}
										animate={{ opacity: 1, scale: 1 }}
										transition={{ delay: 0.35 + idx * 0.1, duration: 0.5 }}
									>
										{plan.price}
										<span className="text-lg font-normal text-cyan-100/80 ml-1">
											{plan.name !== "Enterprise" ? "/month" : ""}
										</span>
									</motion.p>
									<div className="relative z-10 mb-8">
										<h4 className="font-semibold text-cyan-100 mb-2 text-sm tracking-wide uppercase">
											Included
										</h4>
										<ul>
											{plan.included.map((feature) => (
  <motion.li
    key={feature}
    className="flex items-center mb-1 text-cyan-50/90"
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{
      delay: 0.5 + idx * 0.03,
      duration: 0.3,
    }}
  >
    <Check className="h-5 w-5 text-primary mr-2 drop-shadow" />
    <span>{feature}</span>
  </motion.li>
))}
										</ul>
									</div>
									<motion.div
										initial="initial"
										whileHover="hover"
										whileTap="tap"
										variants={buttonVariants}
									>
										<Button
											className={`w-full relative z-10 font-semibold tracking-wide ${buttonClass} transition-transform`}
											variant={plan.name === "Pro" ? "default" : "outline"}
										>
											{plan.name === "Enterprise"
												? "Contact Sales"
												: "Get Started"}
										</Button>
									</motion.div>
								</motion.div>
							);
						})}
					</AnimatePresence>
				</div>
			</div>
		</motion.section>
	);
}
