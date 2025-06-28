import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000,
    allowedHosts: [`${process.env.FLY_APP_NAME}-${process.env.FLY_MACHINE_ID}.rockoai.dev`],
  },
});
