// import { netlifyPlugin } from '@netlify/remix-edge-adapter/plugin';
import { reactRouter } from '@react-router/dev/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  // @ts-expect-error there is an issue with "tailwindcss" types
  plugins: [reactRouter(), tailwindcss(), tsconfigPaths()],
});
