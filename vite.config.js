import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    serveStatic: {
      // Specify MIME types for PDF files
      mimeTypes: {
        '.pdf': 'application/pdf',
      },
      ignore: ['favicon.ico']
    }
  },
  build: {
    assetsInlineLimit: 0,
    // Set public directory to allow Vite to resolve image imports
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      // Ensure that image files are treated as assets
      output: {
        assetFileNames: '[name].[ext]'
      }
    }
  }
});
