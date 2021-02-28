# React Assignmnent Ecommerce

**GOALS**

- TypeScript.
- Single Page Application.
- Modern libs + tools for ease to develop.
- Performance in mind.
- No SEO supported. (in case we want to, we might need prerender.io services).
- Featured base structure.
- Use functional component + hooks.
- Use component styles (SCSS + BEM)

**REFS**

- TypeScript: [TypeScript](https://www.typescriptlang.org/)
- Routing: [react-router-dom](https://reacttraining.com/react-router/web/guides/quick-start)
- Form management: [react-hook-form](https://react-hook-form.com/)
- Http client: [axios](https://github.com/axios/axios)
- Multi-languages support: [react-i18next](https://react.i18next.com/)
- State management: [redux-toolkit](https://redux-toolkit.js.org/)

## Folders structure for the whole app

```
.
├── api: API modules
├── app: Redux store setup
├── assets: styles + images
├── components: shared component
├── constants: shared contants
├── hooks: shared hooks
├── utils: utilities that help to resolve common problems
└── features: each feature will be isolated in one folder
    ├── home
    ├── about
    └── ... 
```


## Folders structure for each feature

```
.
├── components: dump components
├── pages: list of pages
├── index.jsx: entry point for current feature
├── routes.js: routings
└── slice.js: redux setup
```

---