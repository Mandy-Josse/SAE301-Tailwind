import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [tailwindcss()],
  base: "/SAE301-Tailwind/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        page_pproduit: resolve(__dirname, "pages/page_pproduit.html"),
        compte: resolve(__dirname, "pages/compte.html"),
        panier: resolve(__dirname, "pages/panier.html"),
        validation_commande: resolve(__dirname, "pages/validation_commande.html"),
        // ajoutez d'autres pages si nécessaire
      },
    },
  },
});
