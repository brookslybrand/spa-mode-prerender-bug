import type { RouteConfig } from "@react-router/dev/routes";
import { route, index } from "@react-router/dev/routes";

export const routes: RouteConfig = [
  index("routes/home.tsx"),
  route("api/data.json", "routes/static-json.tsx"),
];
