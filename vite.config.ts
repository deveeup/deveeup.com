import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import vercel from 'vite-plugin-vercel';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vercel()],
  base: "/react-frontend-dev-portfolio/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
    },
  },
});
