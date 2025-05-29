"use client";
import { Button } from "@/components/ui/button";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Github } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <img src="/logo.svg" alt="3DMapFi Logo" className="h-7 w-auto" />
        </Link>
        <nav className="flex flex-1 items-center space-x-6 text-sm font-medium">
          <Link
            href="/solutions"
            className="transition-colors hover:text-primary"
          >
            Solutions
          </Link>
          <Link
            href="/industries"
            className="transition-colors hover:text-primary"
          >
            Industries
          </Link>
          <Link href="/about" className="transition-colors hover:text-primary">
            About Us
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link
            href="https://github.com/3dmapfi"
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="ghost" size="icon">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => (window.location.href = "mailto:3dmapfi@gmail.com")}
          >
            Contact
          </Button>
          <WalletMultiButton
            className="h-9 rounded-md px-3 bg-primary text-primary-foreground hover:bg-primary/90"
            style={{
              height: "2.5rem",
              fontWeight: "calc(var(--radius) - 2px)",
              paddingLeft: "0.75rem",
              paddingRight: "0.75rem",
              backgroundColor: "hsl(var(--primary))",
              color: "hsl(var(--primary-foreground))",
            }}
          />
        </div>
      </div>
    </header>
  );
}
