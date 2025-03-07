import type { ReactNode } from 'react';
import { Link as RRLink } from 'react-router';

type Props = {
  children: ReactNode;
  to: string;
};

export function Link({ children, to }: Props) {
  return (
    <RRLink
      className="text-teal-300 hover:underline"
      to={to}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </RRLink>
  );
}
