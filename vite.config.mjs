import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import path from "path";
import process from "process";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.VITE_BASE_PATH || "/",
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: true,
      },
    }),
    ViteImageOptimizer({
      png: {
        quality: 75,
      },
      jpeg: {
        quality: 75,
      },
      jpg: {
        quality: 75,
      },
      webp: {
        quality: 70,
      },
      avif: {
        quality: 60,
      },
      svg: {
        multipass: true,
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000,
    open: true,
    strictPort: false,
    proxy: {
      "/api": {
        target: "http://localhost:3001",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  build: {
    outDir: "dist",
    sourcemap: false,
    minify: "terser",
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom"],
          router: ["react-router-dom"],
          redux: ["redux", "react-redux", "@reduxjs/toolkit"],
          "material-ui": ["@mui/material", "@mui/icons-material"],
        },
      },
    },
  },
  define: {
    "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
  },
});
