import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/AI-interviewer/',  // 👈 This is crucial for GitHub Pages
})
