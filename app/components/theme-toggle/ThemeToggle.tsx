import { Icon } from '@/components/icon';
import { useTheme } from '@/contexts/ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="cursor-pointer transition-transform duration-200 ease-in-out hover:rotate-10 hover:text-teal-300"
    >
      {theme === 'dark' ? <Icon name="SunIcon" /> : <Icon name="MoonIcon" />}
    </button>
  );
}
