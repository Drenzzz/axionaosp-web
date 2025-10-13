"use client"; 

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ParticlesBackground } from "@/components/ParticlesBackground";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ParticlesBackground />

      <div className="relative z-10">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>

      <style jsx global>{`
        body {
          font-family: 'Google Sans', sans-serif;
        }
        h1, h2, h3, .logo-font {
          font-family: var(--font-space-grotesk), sans-serif;
        }
      `}</style>
    </>
  );
}
