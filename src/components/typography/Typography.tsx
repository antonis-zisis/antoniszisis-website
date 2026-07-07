import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export function Accent({ children }: Props) {
  return <span className="text-red-800 dark:text-teal-300">{children}</span>;
}
