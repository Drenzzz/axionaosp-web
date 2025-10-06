import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { ChangelogModal } from './ChangelogModal';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const navLinks = [
  { href: '/#about', label: 'About' },
  { href: '/#features', label: 'Features' },
  { href: '/#community', label: 'Community' },
  { href: '/#faq', label: 'FAQ' },
];

export function Navbar() {
  const [isChangelogOpen, setIsChangelogOpen] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4">
          <div className="mt-5 bg-neutral-800/80 backdrop-blur-sm rounded-2xl flex justify-between items-center p-3 border border-neutral-700/80">
          <a href="/" className="text-xl font-medium text-green-300 pl-2 logo-font">
            AxionOS
          </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-white hover:text-green-300 transition-colors">
              {link.label}
            </a>
          ))}
          <button onClick={() => setIsChangelogOpen(true)} className="text-white hover:text-green-300 transition-colors">
            Changelog
          </button>
        </nav>

        <div className="hidden md:block">
          <a href="/downloads">
            <Button className="bg-green-300 hover:bg-green-400 text-black">
              Downloads
            </Button>
          </a>
        </div>

        {/* Hamburger & Menu for Mobile */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-white" />
              </Button>
            </SheetTrigger>
            <SheetContent className="mobile-menu-sheet">
              <nav className="flex flex-col space-y-4 pt-10 text-lg">
                <h2 className="px-4 text-2xl font-bold logo-font mb-4">Menu</h2>
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href} className="px-4 py-2 rounded-lg hover:bg-neutral-800 transition-colors">
                    {link.label}
                  </a>
                ))}
                <button onClick={() => setIsChangelogOpen(true)} className="text-left px-4 py-2 rounded-lg hover:bg-neutral-800 transition-colors">
                  Changelog
                </button>
                <a href="/downloads" className="px-4 py-2 rounded-lg hover:bg-neutral-800 transition-colors">
                  Downloads
                </a>
              </nav>
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
