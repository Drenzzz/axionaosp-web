"use client"; 

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      <ParticlesBackground />

      <div className="relative z-10">
        <Navbar />

        <AnimatePresence mode="wait">
          <motion.main
            key={pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.main>
        </AnimatePresence>

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
