import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export function HoverAnimation({ children }: Props) {
  return (
    <div className="transition-transform duration-200 ease-in-out hover:rotate-10">
      {children}
    </div>
  );
}
