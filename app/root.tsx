import { Links, Meta, Outlet, Scripts } from '@remix-run/react';

import './globals.css';

export default function App() {
  return (
    <html>
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />

        <Meta />
        <Links />
      </head>

      <body>
        <h1 className="flex items-center justify-center">
          Hello world! Refresh works
        </h1>

        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}
