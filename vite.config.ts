import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

// Served from https://poojadonode28.github.io/pooja-portfolio/
const config = defineConfig({
  base: "/pooja-portfolio/",
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: "./src/test-setup.ts",
  },
});

export default config;
