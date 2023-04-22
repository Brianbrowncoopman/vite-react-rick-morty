import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://Brianbrowncoopman.github.io/vite-react-rick-morty/",
  plugins: [react()],
});
