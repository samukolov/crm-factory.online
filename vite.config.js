import { defineConfig } from 'vite';

export default defineConfig({
  // Use relative paths for assets so the project can be deployed to any subpath (e.g., GitHub Pages)
  base: './',
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Generate source maps for easier debugging
    sourcemap: true,
    // Minify output for production
    minify: 'terser'
  }
});
