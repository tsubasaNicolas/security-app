const express = require("express");
const cors = require("cors");
const path = require("path");
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

import imagenesRoutes from "./routes/imagenes";

const app = express();
app.use(express.static(path.join(__dirname, "dbimages")));
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use([
  tasksRoutes,
  localesRoutes,
  colaboradoresRoutes,
  controlIngresoRoutes,
  controlCierreRoutes,
  imagenesRoutes,
]);

app.use("/docs", swaggerUI.serve, swaggerUI.setup(specs));

export default app;
