"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = void 0;

var _dotenv = require("dotenv");

(0, _dotenv.config)(); // export const config = {
//   host: process.env.DB_HOST || "31.170.166.145",
//   user: process.env.DB_USER || "u524788796_security",
//   password: process.env.DB_PASSWORD || "Seguridad2021",
//   database: process.env.DB_DATABASE || "u524788796_security",
//   multipleStatements: true,
// };

var config = {
  host: "localhost",
  user: "root",
  password: "",
  database: "security",
  multipleStatements: true
}; // export const config = {
//   host: "31.170.166.145",
//   user: "u524788796_tasks",
//   password: "Tasks2021",
//   database: "u524788796_tasks",
// };

exports.config = config;