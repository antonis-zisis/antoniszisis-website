import { type RouteConfig } from '@react-router/dev/routes';
import { remixRoutesOptionAdapter } from '@react-router/remix-routes-option-adapter';

// initially wanted to go with file based conventions, but couldn't render
// a custom 404 page, this led to move away from file based convetions
// import { flatRoutes } from '@react-router/fs-routes';
// export default flatRoutes() satisfies RouteConfig;

export default remixRoutesOptionAdapter((defineRoutes) => {
  return defineRoutes((route) => {
    route('/', 'routes/_index.tsx', { index: true });
    route('/about', 'routes/about.tsx');
    route('/timeline', 'routes/timeline.tsx');
    route('*', 'routes/404.tsx');
  });
}) satisfies RouteConfig;
