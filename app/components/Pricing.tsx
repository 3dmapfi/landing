import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    price: "$19",
    features: [
      "AI-driven map analytics",
      "Collaborative mapping tools",
      "Basic 3D visualization",
      "Email support",
    ],
  },
  {
    name: "Professional",
    price: "$49",
    features: [
      "All Starter features",
      "Blockchain data integrity",
      "Advanced 3D visualization",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "All Professional features",
      "Custom AI solutions",
      "Dedicated account manager",
      "24/7 phone & chat support",
    ],
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="pb-20 pt-20 bg-background backdrop-blur rounded-2xl shadow-xl"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Choose Your Plan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <div
                key={plan.name}
                className={`relative p-8 rounded-lg shadow-md overflow-hidden bg-gradient-to-br ${borderClass} ${shadowClass}`}
                style={{
                  boxShadow,
                  backdropFilter: "blur(8px)",
                }}
              >
                {/* Futuristic glowing border effect */}
                <span
                  className="absolute inset-0 pointer-events-none rounded-lg border border-white/10"
                  style={{ boxShadow: borderGlow }}
                />
                <h3 className="relative z-10 text-2xl font-bold mb-4 text-white drop-shadow-lg">
                  {plan.name}
                </h3>
                <p className="relative z-10 text-4xl font-bold mb-6 text-white drop-shadow-lg">
                  {plan.price}
                  <span className="text-lg font-normal text-cyan-100/80 ml-1">
                    {plan.name !== "Enterprise" ? "/month" : ""}
                  </span>
                </p>
                <ul className="relative z-10 mb-8">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center mb-2 text-cyan-50/90"
                    >
                      <Check className="h-5 w-5 text-primary mr-2 drop-shadow" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full relative z-10 font-semibold tracking-wide ${buttonClass}`}
                  variant={plan.name === "Pro" ? "default" : "outline"}
                >
                  {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
