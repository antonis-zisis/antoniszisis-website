import type { MetaFunction } from 'react-router';

import { Link } from '@/components/link';

export const meta: MetaFunction = () => {
  return [{ title: '404 - Page Not Found | Antonis Zisis' }];
};

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-screen max-w-(--breakpoint-lg) flex-col items-center justify-center">
      <h1 className="text-3xl font-semibold">404 - Page Not Found</h1>
      <p className="text-base">
        Oops! The page you&apos;re looking for doesn&apos;t exist.
      </p>

      <Link to="/" className="mt-10 font-mono underline">
        Go back home
      </Link>
    </div>
  );
}
