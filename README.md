# darcodevsite

My portfolio. Plain HTML/CSS/JS, no build step, no framework. Just open
`index.html` in a browser.

## Adding a project

Projects live in the `PROJECTS` array at the top of `script.js`:

```js
{
  name: "my-macro-pad",
  category: "hardware",       // "software" or "hardware"
  kind: "hardware build",     // small label above the name
  tagline: "RP2040, hand-wired",
  description: "One sentence about what it is.",
  tags: ["RP2040", "KiCad"],
  icon: "chip",               // "lens", "mail" or "chip"
  links: [{ label: "Build log", url: "https://...", icon: "external" }],
}
```

The card, filters and animations pick it up automatically. For GitHub repos,
also set `repo: "darcodev/name"` and `stars` - the star count and the
"updated" stamp refresh from the GitHub API on page load.

## Deploying

```bash
git init && git add index.html styles.css script.js README.md
git commit -m "portfolio"
git branch -M main
git remote add origin https://github.com/darcodev/darcodev.github.io.git
git push -u origin main
```

Then it's live at https://darcodev.github.io (Settings > Pages > Deploy from
branch > main, if it doesn't turn on by itself).
