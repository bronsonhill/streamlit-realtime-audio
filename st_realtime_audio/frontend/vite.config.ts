import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
    cors: true,
  },
  build: {
    outDir: 'build',
    lib: {
      entry: 'src/index.tsx',
      name: 'StreamlitRealtimeAudio',
      fileName: (format) => `streamlit-realtime-audio.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  define: {
    global: 'globalThis',
  },
})