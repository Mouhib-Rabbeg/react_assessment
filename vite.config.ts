import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://mvvvip1.defas-fgi.de',
        changeOrigin: true,
        secure: true,
        headers: {
          Referer: 'https://mvvvip1.defas-fgi.de',
        },
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
    port: 3000,
    host:"localhost"
  }
})
