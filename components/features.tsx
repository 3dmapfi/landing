import { Brain, Cloud, Shield, Zap } from "lucide-react";

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
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
          Cutting-Edge Solutions
        </h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          Discover how 3DMapFi Soft can transform your business with our
          advanced map technologies.
        </p>
      </div>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
        {features.map((feature) => (
          <div
            key={feature.name}
            className="relative overflow-hidden rounded-lg border bg-background p-8"
          >
            <div className="flex items-center gap-4">
              <feature.icon className="h-8 w-8" />
              <h3 className="font-bold">{feature.name}</h3>
            </div>
            <p className="mt-2 text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
