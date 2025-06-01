import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  return (
    <section
      id="about"
      className="py-36 bg-background backdrop-blur rounded-2xl shadow-xl"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-4 sm:px-6 lg:px-8">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">About 3DMapFi</h2>
          <p className="text-lg text-muted-foreground mb-6">
            3DMapFi is pioneering the future of digital mapping by transforming
            real-world data into immersive 3D environments. Our platform
            empowers users to build, edit, and customize virtual spaces
            visually—no code required. Leveraging AI-driven tools and an
            intuitive map editor, we make it easy for anyone to create, manage,
            and share 3D worlds.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>AI-powered map editor for seamless customization</li>
            <li>Instantly convert real data into interactive 3D spaces</li>
            <li>No coding or technical expertise needed</li>
            <li>Trusted by forward-thinking businesses and creators</li>
          </ul>
          <Link
            href="https://editor.3dmapfi.xyz"
            target="_blank"
            rel="noreferrer"
          >
            <Button size="lg" className="mt-4">
              <b>Try it here!</b>
            </Button>
          </Link>
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            src="/editor.png"
            alt="3DMapFi Platform Preview"
            width={480}
            height={320}
            className="rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
