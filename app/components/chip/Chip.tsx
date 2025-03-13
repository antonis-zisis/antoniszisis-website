import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export function Chip({ children }: Props) {
  return (
    <span className="flex items-center rounded-full bg-red-800/10 px-3 py-1 text-xs leading-5 font-medium text-red-800 dark:bg-teal-300/10 dark:text-teal-300">
      {children}
    </span>
  );
}
