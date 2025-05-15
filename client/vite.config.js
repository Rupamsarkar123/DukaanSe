import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 5173, // Bind to Render's PORT if available
    host: true                      // Allow external access
  }
})
