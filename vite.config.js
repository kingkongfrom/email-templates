import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Disable serving of favicon
    serveStatic: {
      // Disable serving of favicon
      ignore: ['favicon.ico']
    }
  }
})
