import { defineConfig } from "vite";
import path from "path";
import vercel from 'vite-plugin-vercel';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vercel()],
  base: "/react-frontend-dev-portfolio/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
    },
  },
});
