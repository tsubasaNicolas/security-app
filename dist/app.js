"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _morgan = _interopRequireDefault(require("morgan"));

var _swaggerJsdoc = _interopRequireDefault(require("swagger-jsdoc"));

var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));

var _swaggerOptions = require("./swaggerOptions");

var _controlCierre = _interopRequireDefault(require("./routes/controlCierre"));

var _controlIngreso = _interopRequireDefault(require("./routes/controlIngreso"));

var _tasks = _interopRequireDefault(require("./routes/tasks"));

var _locales = _interopRequireDefault(require("./routes/locales"));

var _colaboradores = _interopRequireDefault(require("./routes/colaboradores"));

var _imagenes = _interopRequireDefault(require("./routes/imagenes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var express = require("express");

var cors = require("cors");

var path = require("path");

var specs = (0, _swaggerJsdoc["default"])(_swaggerOptions.options);
var app = express();
app.use(express["static"](path.join(__dirname, "dbimages")));
app.use(cors());
app.use((0, _morgan["default"])("dev"));
app.use(express.json());
app.use([_tasks["default"], _locales["default"], _colaboradores["default"], _controlIngreso["default"], _controlCierre["default"], _imagenes["default"]]);
app.use("/docs", _swaggerUiExpress["default"].serve, _swaggerUiExpress["default"].setup(specs));
var _default = app;
exports["default"] = _default;