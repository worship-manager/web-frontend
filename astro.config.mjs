import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://worshipmanager.org",
  integrations: [mdx(), sitemap(), react(), icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});
