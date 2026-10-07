import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/master-proyectos-reactjs/ejercicio-1/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        ejercicio1: resolve(__dirname, 'ejercicio1/index.html'),
        ejercicio2: resolve(__dirname, 'ejercicio2/index.html'),
        ejercicio3: resolve(__dirname, 'ejercicio3/index.html'),
        ejercicio4: resolve(__dirname, 'ejercicio4/index.html'),
        ejercicio5: resolve(__dirname, 'ejercicio5/index.html'),
        ejercicio6: resolve(__dirname, 'ejercicio6/index.html'),
        ejercicio7: resolve(__dirname, 'ejercicio7/index.html'),
        ejercicio8: resolve(__dirname, 'ejercicio8/index.html'),
        ejercicio9: resolve(__dirname, 'ejercicio9/index.html'),
      },
    },
  },
})