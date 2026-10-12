# A Place on the Web

A small, responsive Hugo site with no theme or runtime dependencies. The site is built and published to GitHub Pages with GitHub Actions.

The visual style follows a construction-theme design (dark `#141515` sections, `#FED403` yellow accents, white content bands). Headings and body text use the self-hosted **Golos Text** font (latin + cyrillic subsets in `static/fonts/`, SIL OFL 1.1, © Paratype), so no external font requests are made.

## Run locally

Install [Hugo Extended](https://gohugo.io/installation/), then run:

```sh
hugo server
```

Open the local URL printed by Hugo (usually <http://localhost:1313/>).

## Make it yours

- Change the site title and description in `hugo.toml`.
- Add the shop's phone number and email under `[params.contact]` in `hugo.toml`.
- Edit the homepage copy and front matter in `content/_index.md`.
- Adjust the visual style in `assets/css/main.css`.

## Publish with GitHub Pages

1. Push this repository to GitHub on the `main` branch.
2. In the repository, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**.
3. Push a change to `main`, or run **Deploy Hugo site to Pages** from the **Actions** tab.

The workflow builds the site with Hugo and deploys it automatically. GitHub Pages provides the correct base URL during the build, including for project sites.
