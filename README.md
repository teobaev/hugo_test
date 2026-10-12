# A Place on the Web

A small, responsive single-page Hugo site with no theme or runtime dependencies. The site is built and published to GitHub Pages with GitHub Actions.

The visual style follows the [hugo-scroll](https://zjedi.github.io/hugo-scroll/) design: a full-screen cover image, a sticky left-side section menu with scroll-spy highlighting (desktop only), full-height alternating light (`#f2efe8`) and dark (`#141515`) sections — Services, Prices, About, Process, Gallery, FAQ, Contact — separated by the theme's signature triangle notches, and a compact centered footer. The shop's yellow accent (`#FED403`) replaces the theme's default highlight color. A small vanilla-JS scroll-spy (`assets/js/scrollspy.js`) replaces the theme's jQuery-based one. Headings and body text use the self-hosted **Golos Text** font (latin + cyrillic subsets in `static/fonts/`, SIL OFL 1.1, © Paratype), so no external font requests are made.

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
