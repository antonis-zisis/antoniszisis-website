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
  return (
    <header className="fixed top-0 z-10 flex h-20 w-full items-center justify-between px-20 py-0">
      <nav className="relative flex w-full items-center justify-between">
        <div className="flex items-center justify-center">
          <Link to="/">
            <HoverAnimation>
              <Logo />
            </HoverAnimation>
          </Link>
        </div>

        <div className="flex items-center justify-center">
          <div className="mr-8 flex gap-x-8 font-mono text-base">
            {links.map((link) => (
              <Link key={link.id} to={link.url}>
                {link.text}
              </Link>
            ))}
          </div>

          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
