import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // ← ✅ THIS LINE is critical for Netlify to load assets correctly
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
