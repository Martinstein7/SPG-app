import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Mantém as mensagens de erro do Rust visíveis no terminal durante o "tauri dev"
  clearScreen: false,
  server: {
    // O Tauri espera o front exatamente nesta porta; se estiver ocupada, falha em vez de trocar
    port: 5173,
    strictPort: true,
    // Mudanças no código Rust não devem recarregar o front
    watch: { ignored: ['**/src-tauri/**'] },
  },
})
