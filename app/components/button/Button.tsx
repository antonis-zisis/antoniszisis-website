import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  onClick: VoidFunction;
};

export function Button({ children, onClick }: Props) {
  return (
    <button
      className="cursor-pointer rounded border border-red-800 p-4 font-mono text-red-800 transition-all duration-300 hover:bg-slate-200 dark:border-teal-300 dark:text-teal-300 dark:hover:bg-slate-800"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
