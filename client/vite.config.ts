import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '../server/dist',
  },
  base: '/',
  server: {
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
  resolve: {
    alias: {
      src: '/src',
    },
    extensions: ['.tsx', '.js', '.ts', '.jsx', '.json', '.mjs', '.mts'],
  },
});
