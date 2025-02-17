import { defineConfig, transformerVariantGroup } from "unocss";

export default defineConfig({
  transformers: [transformerVariantGroup()],

  theme: {
    fontFamily: {
      sans: "system-ui, sans-serif",
    }
  }
});
