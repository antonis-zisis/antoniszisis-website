import { HoverAnimation } from '@/components/animated';
import { Icon } from '@/components/icon';
import { useTheme } from '@/contexts/ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="cursor-pointer hover:text-red-800 dark:hover:text-teal-300"
    >
      <HoverAnimation>
        {theme === 'dark' ? (
          <Icon accessibilityLabel="Toggle light mode" name="SunIcon" />
        ) : (
          <Icon accessibilityLabel="Toggle dark mode" name="MoonIcon" />
        )}
      </HoverAnimation>
    </button>
  );
}
