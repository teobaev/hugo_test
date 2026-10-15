# A Place on the Web

A small, responsive single-page Hugo site with no theme or runtime dependencies. The site is built and published to GitHub Pages with GitHub Actions.

The visual style is a sleek, fully dark "workshop" theme: a full-screen cover photo (circuit-board macro) with a grid overlay and soft cyan/indigo glows, a floating glass pill navigation bar that appears after the cover with scroll-spy highlighting (desktop only), and alternating subtly-tinted dark sections — Services, Prices, About, Process, Gallery, FAQ, Contact — separated by hairline dividers with an accent tick. Cards are glassmorphic with hairline borders, cyan (`#3ad7f0`) to indigo (`#7c8cff`) gradient accents, soft glow hovers, and gradient headline text. Sections fade in on scroll via a small vanilla-JS scroll-spy/reveal script (`assets/js/scrollspy.js`). Headings and body text use the self-hosted **Golos Text** font (latin + cyrillic subsets in `static/fonts/`, SIL OFL 1.1, © Paratype), so no external font requests are made. Photos are from Unsplash (files in `assets/images/`).

## Run locally

Install [Hugo Extended](https://gohugo.io/installation/), then run:

```sh
hugo server
```

Open the local URL printed by Hugo (usually <http://localhost:1313/>).

## Make it yours

- Change the site title and description in `hugo.toml`.
- Add the shop's phone number and email under `[params.contact]` in `hugo.toml`.
- Edit the homepage copy, services, and price list in the front matter of `content/_index.md` (and `content/_index.en.md` for English).
- Adjust the visual style (colors, section rhythm) in `assets/css/main.css`.

## Publish with GitHub Pages

1. Push this repository to GitHub on the `main` branch.
2. In the repository, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**.
3. Push a change to `main`, or run **Deploy Hugo site to Pages** from the **Actions** tab.

The workflow builds the site with Hugo and deploys it automatically. GitHub Pages provides the correct base URL during the build, including for project sites.
