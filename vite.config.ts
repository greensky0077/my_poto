import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import path from "path";

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
    }),
    svgr(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(process.cwd(), "src"),
      "@public": path.resolve(process.cwd(), "public"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern",
      },
    },
  },
  build: {
    rollupOptions: {
      external: [],
    },
    target: "esnext",
  },
  server: {
    fs: {
      strict: false,
    },
  },
});
