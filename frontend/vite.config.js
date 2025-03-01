import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/login": "http://localhost:3452",
      "/register": "http://localhost:3452",
      "/product": "http://localhost:3452",
    },
  },
  plugins: [react()],
});
