// @ts-check
import { defineConfig, envField } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: "https://example.com",
  integrations: [sitemap(), react()],
  env: {
    schema: {
      ADMIN_KEY: envField.string({ context: "server", access: "public" }),
      API_KEY: envField.string({ context: "server", access: "public" }),
      AUTH_DOMAIN: envField.string({ context: "server", access: "public" }),
      PROJECT_ID: envField.string({ context: "server", access: "public" }),
      STORAGE_BUCKET: envField.string({ context: "server", access: "public" }),
      MESSAGING_SENDER_ID: envField.string({
        context: "server",
        access: "public",
      }),
      APP_ID: envField.string({ context: "server", access: "public" }),
      MEASUREMENT_ID: envField.string({ context: "server", access: "public" }),
      DATABASE_URL: envField.string({ context: "server", access: "public" }),
    },
  },
});
