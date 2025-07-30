// @ts-check
import { defineConfig } from 'astro/config';
import moduleFederation from  '@originjs/vite-plugin-federation' //'astro-module-federation';
import react from '@astrojs/react';
// https://astro.build/config
const port = parseInt(process.env.PORT || '4000')
export default defineConfig({
    server:{port: port},
    integrations: [react()],
    vite: {
      plugins: [
        react(),
        moduleFederation({
          name: 'host_app',
          remotes: {
            // remote_app: 'http://localhost:5001/assets/remoteEntry.js'
            remote_app: 'https://micro-front-fiap.netlify.app/assets/remoteEntry.js'
          },
          shared: ['react', 'react-dom']
        })
      ],
    },
  });