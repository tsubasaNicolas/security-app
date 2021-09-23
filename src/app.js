const express = require("express");
const cors = require("cors");
import morgan from "morgan";

import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import { options } from "./swaggerOptions";
const specs = swaggerJSDoc(options);

import controlCierreRoutes from "./routes/controlCierre";
import controlIngresoRoutes from "./routes/controlIngreso";
import tasksRoutes from "./routes/tasks";
import localesRoutes from "./routes/locales";
import colaboradoresRoutes from "./routes/colaboradores";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use([
  tasksRoutes,
  localesRoutes,
  colaboradoresRoutes,
  controlIngresoRoutes,
  controlCierreRoutes,
]);

app.use("/docs", swaggerUI.serve, swaggerUI.setup(specs));

export default app;
