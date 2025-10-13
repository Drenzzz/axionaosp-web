"use client";
import { Github, Send } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-black text-center py-5">
      <div className="flex justify-center gap-6 mb-4">
        <a href="https://github.com/AxionAOSP" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white">
          <Github size={20} />
        </a>
        <a href="https://t.me/AxionOS_android" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white">
          <Send size={20} />
        </a>
      </div>
      <p className="text-neutral-400 text-sm">
        &copy; {new Date().getFullYear()} AxionOS. All Rights Reserved.
      </p>
    </footer>
  );
}
