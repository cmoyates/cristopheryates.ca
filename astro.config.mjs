// astro.config.mjs
import { defineConfig, passthroughImageService } from "astro/config";
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

  image: {
    service: passthroughImageService(),
    domains: ["cdn.cristopheryates.ca"],
  },

  markdown: {
    // Disable Astro's Shiki/Prism so we don't double-highlight:
    syntaxHighlight: false,

    // Rehype plugins run for Markdown/MDX only (not .astro files)
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
          // Light/dark themes (Shiki v1 names)
          theme: { light: "github-light", dark: "github-dark" },
          keepBackground: false, // let your site/bg show through
          defaultLang: { block: "plaintext", inline: "plaintext" },
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
