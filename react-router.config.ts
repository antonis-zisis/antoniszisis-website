import type { Config } from '@react-router/dev/config';

export default {
  ssr: true,
  prerender: false, // TODO: setting to true breaks the build because of this: @netlify/vite-plugin-react-router
} satisfies Config;
