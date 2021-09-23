"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _morgan = _interopRequireDefault(require("morgan"));

var _swaggerJsdoc = _interopRequireDefault(require("swagger-jsdoc"));

var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));

var _swaggerOptions = require("./swaggerOptions");

var _controlcierre = _interopRequireDefault(require("./routes/controlcierre"));

var _controlIngreso = _interopRequireDefault(require("./routes/controlIngreso"));

var _tasks = _interopRequireDefault(require("./routes/tasks"));

var _locales = _interopRequireDefault(require("./routes/locales"));

var _colaboradores = _interopRequireDefault(require("./routes/colaboradores"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var express = require("express");

var cors = require("cors");

var specs = (0, _swaggerJsdoc["default"])(_swaggerOptions.options);
var app = express();
app.use(cors());
app.use((0, _morgan["default"])("dev"));
app.use(express.json());
app.use([_tasks["default"], _locales["default"], _colaboradores["default"], _controlIngreso["default"], _controlcierre["default"]]);
app.use("/docs", _swaggerUiExpress["default"].serve, _swaggerUiExpress["default"].setup(specs));
var _default = app;
exports["default"] = _default;