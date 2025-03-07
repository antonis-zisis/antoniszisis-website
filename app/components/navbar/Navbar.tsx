import { ThemeToggle } from '@/components/theme-toggle';

export function Navbar() {
  return (
    <header className="fixed top-0 z-10 flex h-20 w-full items-center justify-between px-20 py-0">
      <nav className="relative flex w-full items-center justify-between">
        <div className="flex items-center justify-center"></div>

        <div className="flex items-center justify-center">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
