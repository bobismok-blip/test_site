import { defineConfig } from 'vite'

export default defineConfig({
  base: '/test_site/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: './index.html',
        login: './login.html',
        directory: './directory/index.html',
        admin: './admin/index.html',
        dashboard: './dashboard/index.html',
        configs: './configs/index.html',
        logs: './logs/index.html',
        backup: './backup/index.html',
        testData: './test_data/index.html',
      }
    }
  },
  publicDir: 'public'
})

