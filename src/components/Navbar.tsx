import { Button } from '@/components/ui/button';

export function Navbar() {
  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#features', label: 'Features' },
    { href: '#changelog', label: 'Changelog' },
    { href: '#community', label: 'Community' },
    { href: '#faq', label: 'FAQ' },
  ];

  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 w-[calc(100%-40px)] max-w-4xl mx-auto bg-neutral-800/80 backdrop-blur-sm rounded-2xl flex justify-between items-center p-3 z-50 border border-neutral-700/80">
      <a href="/" className="text-xl font-medium text-green-300 pl-2 logo-font">
        AxionOS
      </a>
      <nav>
        <ul className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-white hover:text-green-300 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <a href="/downloads">
        <Button className="bg-green-300 hover:bg-green-400 text-black">
          Downloads
        </Button>
      </a>
    </header>
  );
}
