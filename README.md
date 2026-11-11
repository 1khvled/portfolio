# 1khvled — Portfolio

The personal site of **Khaled ([@1khvled](https://github.com/1khvled))**, a product engineer in Algiers, Algeria.

**Live:** [1khvled.vercel.app](https://1khvled.vercel.app)

## What this is

A hand-written static site: one HTML document, one stylesheet, one JavaScript file. No framework, no build step, no analytics, no third-party requests.

- Selected work with per-project case studies in a native `<dialog>`
- Real screenshots, optimised to WebP at two widths
- Self-hosted fonts (Instrument Sans, Instrument Serif, JetBrains Mono)
- Light editorial design: warm paper, near-black ink, one signal accent
- Responsive from 320px up, keyboard navigable, reduced-motion aware

## Structure

```
public/
  index.html      # markup, content, meta tags and JSON-LD
  styles.css      # design system and responsive rules
  app.js          # case studies, mobile menu, clock, copy-email
  404.html        # not-found page
  favicon.svg
  og.png          # 1200x630 social card
  projects/       # project screenshots (WebP, 1400w and 800w)
  fonts/          # four self-hosted latin woff2 files
  robots.txt
  sitemap.xml
vercel.json       # static output, caching and security headers
```

## Run locally

Any static file server will do:

```bash
npx serve public
# or
python -m http.server 8000 --directory public
```

Then open `http://localhost:3000` (or the port the server prints).

## Deploy

Deployed on Vercel with `public` as the output directory. From the repository root:

```bash
npm run deploy
```

## Notes

- Project links point to the real, live products; private repositories are labelled "Private source" instead of linking nowhere.
- The contact address is `1khvled.dev@gmail.com`.
- No cookies, no tracking scripts, no external font or CDN requests.

## License

MIT for the code in this repository. Screenshots, copy and personal content belong to Khaled.
