import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

// GitHub Pages serves this repo from /pooja-portfolio/. Set BASE_PATH=/ when
// deploying to a host that serves from the domain root (Vercel, Netlify, a
// custom domain) so asset and resume URLs stay correct.
const base = process.env.BASE_PATH ?? "/pooja-portfolio/";

const config = defineConfig({
  base,
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: "./src/test-setup.ts",
  },
});

export default config;
