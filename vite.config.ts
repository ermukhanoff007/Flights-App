import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve, dirname } from "path"; // Импортируем resolve и dirname
import { fileURLToPath } from "url"; // Для работы с ESM
import tailwindcss from '@tailwindcss/vite'

// Получаем __dirname для ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"), // Корректное разрешение пути
      shared: resolve(__dirname, "./src/shared"), // Корректное разрешение пути
    },
  },
})
