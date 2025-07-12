import appRoutes from "./app.js";
import errorRoutes from "./errors.js";

const allAppRoutes = [...appRoutes, ...errorRoutes];

export default allAppRoutes;
