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
    alias: [
      {
        find: "@",
        replacement: path.resolve(process.cwd(), "src"),
      },
      {
        find: "@public",
        replacement: path.resolve(process.cwd(), "public"),
      },
    ],
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
      input: path.resolve(process.cwd(), "index.html"),
    },
    target: "esnext",
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
    minify: "esbuild",
  },
  server: {
    fs: {
      strict: false,
    },
  },
  base: "/",
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
  esbuild: {
    target: "esnext",
  },
});
