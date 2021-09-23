"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _tasks = require("../controllers/tasks");

var router = (0, _express.Router)();
/**
 * @swagger
 * /tasks:
 *  get:
 *    summary: Get all Tasks
 *    tags: [Tasks]
 */

router.get("/tasks", _tasks.getTasks);
/**
 * @swagger
 * tags:
 * name: Tasks
 * description: Tasks endpoint
 */

/**
 * @swagger
 * /tasks/count:
 *  get:
 *    summary: get total tasks counter
 *    tags: [Tasks]
 */

router.get("/tasks/count", _tasks.getTasksCount);
/**
 * @swagger
 * /tasks:
 *  post:
 *    summary: save a new Task
 *    tags: [Tasks]
 */

router.post("/tasks", _tasks.saveTask);
/**
 * @swagger
 * /tasks/{id}:
 *  get:
 *    summary: Get task by Id
 *    tags: [Tasks]
 */

router.get("/tasks/:id", _tasks.getTask);
/**
 * @swagger
 * /tasks/{id}:
 *  delete:
 *    summary: delete a task by Id
 *    tags: [Tasks]
 */

router["delete"]("/tasks/:id", _tasks.deleteTask);
/**
 * @swagger
 * /tasks/{id}:
 *  put:
 *    summary: update a task by Id
 *    tags: [Tasks]
 */

router.put("/tasks/:id", _tasks.updateTask);
var _default = router;
exports["default"] = _default;