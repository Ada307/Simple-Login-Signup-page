import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Simple-Login-Signup-page/',  // ← added this line
  plugins: [react()],
})
