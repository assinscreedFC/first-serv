// https://vitejs.dev/config/
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about.html"),
        forum: resolve(__dirname, "contact.html"),
        menu: resolve(__dirname, "menu.html"),
      },
    },
  },
  base: "/first-serv/",
});
