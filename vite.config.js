import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
// Si tu repo NO está en la raíz de GitHub Pages (ej: tuusuario.github.io/mi-repo),
// cambia base al nombre de tu repositorio: base: '/mi-repo/'
// Si usas un dominio propio o tuusuario.github.io directamente, deja base: '/'
export default defineConfig({
  plugins: [react()],
  base: '/parcial-di-2/',
})
