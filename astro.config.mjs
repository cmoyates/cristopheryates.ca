// astro.config.mjs
import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";

import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

export default defineConfig({
  adapter: cloudflare(),
  vite: { plugins: [tailwindcss()] },

  markdown: {
    syntaxHighlight: false,
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: {
            class: "heading-anchor",
            ariaLabel: "Link to this section",
          },
        },
      ],
      [
        rehypePrettyCode,
        /** @type {import('rehype-pretty-code').Options} */ ({
          theme: { light: "github-light", dark: "github-dark" },
          keepBackground: false,
          onVisitLine(node) {
            if (node.children.length === 0)
              node.children = [{ type: "text", value: " " }];
          },
        }),
      ],
    ],
  },

  integrations: [react(), mdx()],
});
