import { HoverAnimation } from '@/components/animated';
import { MoonIcon, SunIcon } from '@/components/icon';
import { useTheme } from '@/contexts/ThemeContext';

export function ThemeToggle() {
  const { toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="cursor-pointer hover:text-red-800 dark:hover:text-teal-300"
    >
      <HoverAnimation>
        <SunIcon
          aria-label="Toggle light mode"
          role="img"
          className="hidden dark:block"
        />

        <MoonIcon
          aria-label="Toggle dark mode"
          role="img"
          className="block dark:hidden"
        />
      </HoverAnimation>
    </button>
  );
}
