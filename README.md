# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Notes about GitHub Pages deployment

If you deploy this app as a GitHub project page (e.g. https://<your-user>.github.io/<repo>/), the app needs a router basename so client-side routes map correctly under the project path.

- The project already sets the Vite `base` to `/kasa/` and the router `basename` in `src/main.jsx` uses `import.meta.env.BASE_URL`.
- After building you can deploy with:

```powershell
npm run build
npm run deploy
```

If your site shows a blank page on GitHub Pages, make sure the deployed files exist (the `gh-pages` branch should contain files from `dist`) and that the `base`/`basename` correspond to the repository name (for example `/kasa/`).
