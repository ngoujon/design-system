import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Extra dev-server hostnames come from an untracked .env.local
  // (e.g. DEV_ALLOWED_HOSTS=my-host.lan), never from committed config.
  const env = loadEnv(mode, process.cwd(), '')
  const allowedHosts = env.DEV_ALLOWED_HOSTS?.split(',').map((h) => h.trim()).filter(Boolean)

  return {
    plugins: [react(), tailwindcss()],
    server: allowedHosts?.length ? { host: true, allowedHosts } : undefined,
  }
})
