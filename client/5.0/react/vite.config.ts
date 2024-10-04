import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

const rootDir = path.resolve(__dirname, '../../../');

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  resolve: {
    alias: {
      'shared': path.resolve(rootDir, './shared'),
    }
  },
  base: command === 'build' ? 'https://q42.github.io/Micrio.Templates/client/5.0/react/' : undefined,
  build: {
    outDir: command === 'build' ? path.resolve(rootDir, './dist/client/5.0/react') : undefined,
  }
}))
