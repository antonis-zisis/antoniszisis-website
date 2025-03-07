import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  onClick: VoidFunction;
};

export function Button({ children, onClick }: Props) {
  return (
    <button
      className="cursor-pointer rounded border border-teal-300 p-4 font-mono text-teal-300 transition-all duration-300 hover:bg-slate-800"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
