import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    build: {
      outDir: 'build',
      cssCodeSplit: false
    },
    base: "",
    plugins: [react()],
    server: {    
        port: 3000, 
    },
  };
});