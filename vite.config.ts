import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import basicSsl from "@vitejs/plugin-basic-ssl";
import glsl from "vite-plugin-glsl";

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: 8081,
    https: true,
    open: true,
  },
  build: {
    outDir: "dist",
  },
  plugins: [
    glsl(),
    react(),
    basicSsl({
      name: "webxr-react-glsl",
    }),
  ],
});
