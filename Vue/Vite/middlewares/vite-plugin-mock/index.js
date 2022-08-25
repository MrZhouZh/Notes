import useMiddleware from "./middleware";

export default function (opts) {
  return {
    name: "vite-plugin-mock",
    configureServer({ middlewares }) {
      middlewares.use(useMiddleware(opts));
    },
  };
}
