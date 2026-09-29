// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    vite: {
    server: {
      // Разрешаем любые внешние хосты, чтобы при перезапуске localtunnel новая ссылка тоже сразу работала
      allowedHosts: true,
    }
  }
});

