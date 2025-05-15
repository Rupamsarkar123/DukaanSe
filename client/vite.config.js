import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // allow external connections
    port: process.env.PORT || 5173,
    allowedHosts: ['dukaanse-1.onrender.com'], // ✅ Allow your frontend domain
  },
});
