import { type RouteConfig } from '@react-router/dev/routes';
import { flatRoutes } from '@react-router/fs-routes';

// use file-based conventions
export default flatRoutes() satisfies RouteConfig;
