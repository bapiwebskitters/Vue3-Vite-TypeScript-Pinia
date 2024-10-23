import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import EnvironmentPlugin from "vite-plugin-environment";

export default defineConfig({
  plugins: [vue(), EnvironmentPlugin("all", { prefix: "VITE_" })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
