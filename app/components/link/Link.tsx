import cn from 'classnames';
import type { ReactNode } from 'react';
import { Link as RRLink, useMatch, useResolvedPath } from 'react-router';

type Props = {
  children: ReactNode;
  className?: string;
  openInNewTab?: boolean;
  to: string;
};

export function Link({ children, className, openInNewTab = false, to }: Props) {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <RRLink
      className={cn(
        'hover:text-red-800 dark:hover:text-teal-300',
        match
          ? 'text-red-800 dark:text-teal-300'
          : 'text-slate-600 dark:text-slate-200',
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
