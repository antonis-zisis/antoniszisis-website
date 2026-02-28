import cn from 'classnames';
import { useState } from 'react';

import { HoverAnimation } from '@/components/animated';
import { Link } from '@/components/link';
import { Logo } from '@/components/logo';
import { ThemeToggle } from '@/components/theme-toggle';

type AppLink = {
  id: string;
  text: string;
  url: string;
};

const links = [
  { id: 'home', text: 'Home', url: '/' },
  { id: 'about', text: 'About', url: '/about' },
  { id: 'timeline', text: 'Timeline', url: '/timeline' },
] satisfies Array<AppLink>;

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-10 h-(--navbar-height) w-full bg-slate-100 shadow-sm dark:bg-slate-900">
      <nav className="relative mx-auto flex h-full max-w-(--breakpoint-lg) items-center justify-between px-6 md:px-0">
        <div className="flex items-center justify-center">
          <Link accessibilityLabel="Home link" to="/">
            <HoverAnimation>
              <Logo />
            </HoverAnimation>
          </Link>
        </div>

        <button
          className="block cursor-pointer hover:text-red-800 md:hidden dark:hover:text-teal-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>

        <div
          className={cn(
            'absolute top-20 left-0 flex w-full flex-col items-center gap-6 bg-slate-100 py-6 font-mono text-lg md:static md:flex md:w-auto md:flex-row md:gap-x-8 md:p-0 md:text-base dark:bg-slate-900',
            'transition-all duration-300 md:transition-none',
            {
              'translate-y-0 opacity-100': isMenuOpen,
              '-translate-y-96 opacity-0 md:translate-y-0 md:opacity-100':
                !isMenuOpen,
            }
          )}
        >
          {links.map((link) => (
            <Link key={link.id} to={link.url}>
              {link.text}
            </Link>
          ))}

          <a
            href="https://blog.antoniszisis.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-red-800 dark:text-slate-200 dark:hover:text-teal-300"
          >
            Blog
          </a>

          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
