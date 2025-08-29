# cristopheryates.ca

## Todo

- Animations & Motion
  - [x] Set up `motion` (formerly `framer-motion`) for interactive animations.
    - [x] Create a figure-style component:
      - Black background
      - Border using `shadcn-ui` border color
      - A draggable circle that feels natural to move
    - [ ] Use this as a sandbox to get comfortable with `motion`
    - [ ] Explore other animation opportunities throughout the site
- Content Cards
  - [ ] Build card components for:
    - [ ] **Inspiration page** — image + blurb of why it’s good
    - [ ] **Resources page** (optional) — image + blurb
  - [ ] Ensure consistent styling across both pages
- Footer
  - [ ] Finish footer with navigation between blog posts (next/previous links)
- Blog Index
  - [ ] Redesign the blog index page
    - [ ] Replace current unstyled HTML
    - [ ] Create a styled index layout for browsing posts
- Social Image Generation
  - [ ] Create a script (Python or Node) to automatically generate a social media card image for each new blog post
    - [ ] Pull in the blog post title from frontmatter
    - [ ] Render image with:
      - White text
      - Current background color
      - Title in bold, bottom-left
  - [ ] Integrate script into GitHub Actions workflow
    - [ ] Trigger on new post commits / deploys
    - [ ] Run image generation before deployment
  - [ ] Decide on image storage strategy
    - [ ] Option A: Save generated images directly into the repo (so Astro can reference them at build time)
    - [ ] Option B: Upload images to Cloudflare file storage / KV / R2 and reference them at runtime
  - [ ] Update Astro site code to include generated social card in `<head>` metadata
    - [ ] Ensure `og:image` and `twitter:image` tags point to the correct generated image
  - [ ] Test full pipeline
    - [ ] Commit a new blog post → image auto-generated → deployed to Cloudflare with correct metadata
