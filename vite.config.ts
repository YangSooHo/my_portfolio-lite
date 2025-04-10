import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://yangsooho.github.io/my_portfolio-lite/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  esbuild: {
    minifyIdentifiers: false,
    minifySyntax: false,
    minifyWhitespace: false
  }
});
