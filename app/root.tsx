import './tailwind.css';

import type { MetaFunction } from 'react-router';
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router';

export const meta: MetaFunction = () => {
  return [
    { title: 'Antonis Zisis' },
    { name: 'author', content: 'Antonis Zisis' },
    { name: 'description', content: "Antonis Zisis' personal website" },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />

        <Meta />
        <Links />
      </head>

      <body className="bg-slate-50 text-slate-600 antialiased dark:bg-slate-900 dark:text-slate-200">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
