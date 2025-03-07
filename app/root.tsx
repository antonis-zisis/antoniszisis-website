import './tailwind.css';

import type { MetaFunction } from 'react-router';
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router';

import { Navbar } from '@/components/navbar';
import { ThemeProvider } from '@/contexts/ThemeContext';

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

      <body className="bg-slate-100 text-slate-600 antialiased dark:bg-slate-900 dark:text-slate-200">
        <ThemeProvider>
          <Navbar />
          <Outlet />
        </ThemeProvider>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
