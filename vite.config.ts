import react from '@vitejs/plugin-react';

import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react(), tailwindcss()],

    server: {
      proxy: {
        '/api/grist': {
          target: env.VITE_API_GRIST_URL,
          changeOrigin: true,
          rewrite: (p) => p.replace(/^\/api\/grist/, ''),
          configure: (proxy) => {
            proxy.on('proxyReq', (proxyReq) => {
              proxyReq.setHeader('Authorization', `Bearer ${env.VITE_API_GRIST_TOKEN}`);
              proxyReq.setHeader('Content-Type', 'application/json');
            });
          },
        },
      },
    },

    resolve: {
      alias: {
        '@Commons': path.resolve(__dirname, 'src/_commons'),
        '@Components': path.resolve(__dirname, 'src/_components'),
        '@Domains': path.resolve(__dirname, 'src/_domains'),
        '@Hooks': path.resolve(__dirname, 'src/_hooks'),
        '@PagesProtected': path.resolve(__dirname, 'src/_pages/[protected]'),
        '@PagesPublic': path.resolve(__dirname, 'src/_pages/[public]'),
        '@Providers': path.resolve(__dirname, 'src/_providers'),
        '@Router': path.resolve(__dirname, 'src/_router'),
        '@Styles': path.resolve(__dirname, 'src/_styles'),
        '@Types': path.resolve(__dirname, 'src/_types'),
        '@Package': path.resolve(__dirname, './package.json') 
      },
    },
  };
});
