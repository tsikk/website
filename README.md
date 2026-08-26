# tsikk.com

Personal site for [Trent Sikkema](https://www.tsikk.com), hosted on GitHub Pages.

## Local development

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm test
npm run build
```

## Deploy

GitHub Pages serves the `gh-pages` branch. From a machine with push access:

```bash
npm run deploy
```

That builds the React app and publishes the `build` folder. The custom domain is `www.tsikk.com` (`public/CNAME`). The build copies `index.html` to `404.html` so paths like `/resume` still load the app on GitHub Pages.
