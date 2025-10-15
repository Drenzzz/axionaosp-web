// src/components/Navbar.tsx

"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { ChangelogModal } from './ChangelogModal';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Link from 'next/link';

const queryClient = new QueryClient();

const navLinks = [
  { href: '/blog', label: 'Blog' },
  { href: '/#about', label: 'About' },
  { href: '/#features', label: 'Features' },
  { href: '/#community', label: 'Community' },
  { href: '/#faq', label: 'FAQ' },
];

export function Navbar() {
  const [isChangelogOpen, setIsChangelogOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (window.location.pathname === '/' && href.startsWith('/#')) {
      e.preventDefault();
      const targetId = href.substring(2);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.history.pushState(null, "", href.substring(1));
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4">
          <div className="mt-5 bg-neutral-800/80 backdrop-blur-sm rounded-2xl flex justify-between items-center p-3 border border-neutral-700/80">
            <Link href="/" className="flex items-center gap-2 group">
              <img src="/img/axionaosp.png" alt="AxionOS Logo" className="h-12 w-auto transition-transform duration-300 group-hover:rotate-[20deg]" />
              <span className="text-xl font-medium text-green-300 logo-font">AxionOS</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-2"> {/* Mengurangi gap agar lebih pas */}
              <nav className="flex items-center gap-2"> {/* Mengurangi gap agar lebih pas */}
                {navLinks.map((link) => (
                  <Link 
                    key={link.href} 
                    href={link.href} 
                    onClick={(e) => handleNavClick(e, link.href)}
                    // Tambahkan kelas baru di sini
                    className="nav-link-effect text-sm text-neutral-300 hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
                {/* Tambahkan kelas baru di sini */}
                <button onClick={() => setIsChangelogOpen(true)} className="nav-link-effect text-sm text-neutral-300 hover:text-white">
                  Changelog
                </button>
              </nav>
              <Link href="/downloads">
                <Button className="bg-green-300 hover:bg-green-400 text-black font-semibold button-glow-effect">
                  Downloads
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Trigger */}
            <div className="md:hidden">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6 text-white" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="inset-0 h-full w-full border-0 bg-neutral-950/80 backdrop-blur-xl" showClose={false}>
                  <div className="flex flex-col items-center justify-center h-full text-center">
                    <nav className="flex flex-col gap-6 text-2xl font-medium">
                      {navLinks.map((link) => (
                        <Link 
                          key={link.href} 
                          href={link.href}
                          onClick={(e) => handleNavClick(e, link.href)}
                          // Tambahkan kelas baru di sini juga
                          className="nav-link-effect text-neutral-300 hover:text-white"
                        >
                          {link.label}
                        </Link>
                      ))}
                      {/* Tambahkan kelas baru di sini juga */}
                      <button 
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setIsChangelogOpen(true);
                        }} 
                        className="nav-link-effect text-neutral-300 hover:text-white"
                      >
                        Changelog
                      </button>
                    </nav>

                    <Link 
                      href="/downloads"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="mt-12 block bg-green-400/20 border border-green-400/50 text-green-300 font-semibold px-10 py-4 rounded-xl text-lg button-glow-effect"
                    >
                      Downloads
                    </Link>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      <ChangelogModal isOpen={isChangelogOpen} setIsOpen={setIsChangelogOpen} />
    </QueryClientProvider>
  );
}
