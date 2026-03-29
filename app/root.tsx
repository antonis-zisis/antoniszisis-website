import './tailwind.css';

import type { MetaFunction } from 'react-router';
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from 'react-router';

import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { THEME_NAME, ThemeProvider } from '@/contexts/ThemeContext';

export const meta: MetaFunction = () => {
  return [
    { title: 'Antonis Zisis' },
    { name: 'author', content: 'Antonis Zisis' },
    {
      name: 'description',
      content:
        'Software engineer specializing in front-end development. Explore my career timeline, projects, and more.',
    },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { property: 'og:title', content: 'Antonis Zisis' },
    {
      property: 'og:description',
      content:
        'Software engineer specializing in front-end development. Explore my career timeline, projects, and more.',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://www.antoniszisis.com' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: 'Antonis Zisis' },
    {
      name: 'twitter:description',
      content:
        'Software engineer specializing in front-end development. Explore my career timeline, projects, and more.',
    },
  ];
};

export function links() {
  return [
    {
      rel: 'icon',
      href: '/favicon.ico',
      type: 'image/x-icon',
    },
  ];
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />

        <Meta />
        <Links />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('${THEME_NAME}');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme:dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})()`,
          }}
        />
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="27e39b06-544d-41a5-b396-271e444b5373"
        />
      </head>

      <body className="bg-slate-100 text-slate-600 antialiased dark:bg-slate-900 dark:text-slate-200">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-white focus:p-4 focus:text-slate-900"
        >
          Skip to main content
        </a>
        <ThemeProvider>
          <Navbar />
          <main id="main-content" className="pt-(--navbar-height)">
            <Outlet />
          </main>
          <Footer />
        </ThemeProvider>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  let heading = 'Something went wrong';
  let message = 'An unexpected error occurred. Please try again later.';

  if (isRouteErrorResponse(error)) {
    heading = `${error.status} ${error.statusText}`;
    message = error.data;
  }

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{heading}</title>
        <Meta />
        <Links />
      </head>

      <body className="flex min-h-screen items-center justify-center bg-slate-100 text-slate-600 antialiased dark:bg-slate-900 dark:text-slate-200">
        <div className="text-center">
          <h1 className="text-4xl font-bold">{heading}</h1>
          <p className="mt-4 text-lg">{message}</p>
        </div>

        <Scripts />
      </body>
    </html>
  );
}
