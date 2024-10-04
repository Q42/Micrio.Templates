import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

const rootDir = path.resolve(__dirname, '../../../');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'shared': path.resolve(rootDir, './shared'),
    }
  },
  build: {
    outDir: path.resolve(rootDir, './dist/client/5.0/react'),
  }
})
