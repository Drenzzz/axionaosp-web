"use client";

import { Github, Send } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { href: '/blog', label: 'Blog' },
  { href: '/#about', label: 'About' },
  { href: '/#features', label: 'Features' },
  { href: '/#community', label: 'Community' },
  { href: '/#faq', label: 'FAQ' },
  { href: '/downloads', label: 'Downloads' },
];

export function Footer() {
  return (
    <footer className="w-full bg-neutral-950/50 border-t border-neutral-800/50 py-12">
      <div className="container mx-auto px-4 flex flex-col items-center text-center gap-8">
        
        <Link href="/" className="flex items-center gap-2 group">
          <img src="/img/axionaosp.png" alt="AxionOS Logo" className="h-12 w-auto transition-transform duration-300 group-hover:rotate-[20deg]" />
          <span className="text-xl font-medium text-green-300 logo-font">AxionOS</span>
        </Link>

        <nav className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-neutral-400 hover:text-white transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex justify-center gap-8">
          <a href="https://github.com/AxionAOSP" target="_blank" rel="noopener noreferrer" className="text-neutral-500 footer-icon-effect">
            <Github size={24} />
          </a>
          <a href="https://t.me/AxionOS_android" target="_blank" rel="noopener noreferrer" className="text-neutral-500 footer-icon-effect">
            <Send size={24} />
          </a>
        </div>
        
        <div className="w-full max-w-md border-t border-neutral-800/50 my-2"></div>

        <div className="text-neutral-500 text-sm space-y-2">
          <p>&copy; {new Date().getFullYear()} AxionOS. All Rights Reserved.</p>
          <p>
            Designed by <a href="https://github.com/rmp22" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline font-semibold">rmp22</a> and <a href="https://github.com/drenzzz" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline font-semibold">Drenzzz</a>
          </p>
        </div>

      </div>
    </footer>
  );
}
