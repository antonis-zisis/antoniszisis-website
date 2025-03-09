import cn from 'classnames';
import type { ReactNode } from 'react';
import { Link as RRLink } from 'react-router';

type Props = {
  children: ReactNode;
  className?: string;
  openInNewTab?: boolean;
  to: string;
};

export function Link({ children, className, openInNewTab = false, to }: Props) {
  return (
    <RRLink
      className={cn(
        'text-slate-600 hover:text-red-800 dark:text-slate-200 dark:hover:text-teal-300',
        className
      )}
      to={to}
      target={openInNewTab ? '_blank' : undefined}
      rel={openInNewTab ? 'noopener noreferrer' : undefined}
    >
      {children}
    </RRLink>
  );
}
