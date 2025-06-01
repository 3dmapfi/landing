"use client";
import { Button } from "@/components/ui/button";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Github, Send } from "lucide-react";
import Link from "next/link";
import { XIcon } from "./icons/x-icon";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <img src="/logo.svg" alt="3DMapFi Logo" className="h-7 w-auto" />
        </Link>
        <nav className="flex flex-1 items-center space-x-6 text-sm font-medium">
          <Link
            href="#features"
            className="transition-colors hover:text-primary"
          >
            Features
          </Link>
          <Link
            href="#pricing"
            className="transition-colors hover:text-primary"
          >
            Pricing
          </Link>
          <Link href="#about" className="transition-colors hover:text-primary">
            About Us
          </Link>
          <Link
            href="https://docs.3dmapfi.xyz"
            className="transition-colors hover:text-primary"
            target="_blank"
            rel="noreferrer"
          >
            Documentation
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
          <Link
            href="https://t.me/ThreeDMapfi"
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="ghost" size="icon">
              <Send className="h-4 w-4 " />
              <span className="sr-only">Telegram</span>
            </Button>
          </Link>
          <Link href="https://x.com/3dmapfi" target="_blank" rel="noreferrer">
            <Button variant="ghost" size="icon">
              <XIcon className="h-4 w-4" />
              <span className="sr-only">X</span>
            </Button>
          </Link>
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
