Playing around with React Router v7's `ssr: false` + `prerender` and it looks like it's easy to break the build step subtly.

Steps to reproduce:

- Remove `"/"` from `prerender` in `vite.config.ts` -- should just be `prerender: ["/api/data.json"]`
- Run `npm run build` to build the app.
- Run `npx vite preview` to preview the app.
- Go to http://localhost:4173 -- nothing there
- Look inside [`build/client`](./build/client) and see that there's not `index.html` file
- Cry
