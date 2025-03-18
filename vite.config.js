import { defineConfig } from "vite";
import path from "path";
import postcssAssignLayer from 'postcss-assign-layer';
export default defineConfig({
  base: "/slides/",
  root: path.resolve(__dirname, "src"),
  build: {
    emptyOutDir: true,
    outDir: path.resolve(__dirname, "docs"),
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "src/index.html"),
        webFontsSlides: path.resolve(__dirname, "src/slides/web-fonts/index.html"),
        webFontsExample0: path.resolve(__dirname, "src/slides/web-fonts/examples/0/index.html"),
        webFontsExample10: path.resolve(__dirname, "src/slides/web-fonts/examples/10/index.html"),
        webFontsExample12: path.resolve(__dirname, "src/slides/web-fonts/examples/12/index.html"),
        webFontsExample20: path.resolve(__dirname, "src/slides/web-fonts/examples/20/index.html"),
      },
    },
  },
  css: {
    postcss: {
      plugins: [postcssAssignLayer([{
        include: 'node_modules/**/*.css',
        layerName: 'vendors',
      }])],
    },
  },
});

