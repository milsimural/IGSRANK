import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   build: {
//     outDir: '../server/dist',
//   },
//   base: '/',
//   server: {
//     proxy: {
//       '/api': 'http://localhost:3000',
//     },
//   },
//   resolve: {
//     alias: {
//       src: '/src',
//     },
//   },
// });

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '../server/dist',
  },
  base: '/',
  server: {
    proxy: {
      '/api': 'http://localhost:3000',
      // '/api': 'https://127.0.4.140:51588',
    },
  },
  resolve: {
    alias: {
      src: '/src',
    },
  },
});
