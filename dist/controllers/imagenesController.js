"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteImagen = exports.saveImagenes = exports.getImagenes = exports.fileUpload = void 0;

var _database = require("../database");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var fs = require("fs");

var path = require("path");

var multer = require("multer");

var diskstorage = multer.diskStorage({
  destination: path.join(__dirname, "../images"),
  filename: function filename(req, file, cb) {
    cb(null, Date.now() + "-NC-" + file.originalname);
  }
});
var fileUpload = multer({
  storage: diskstorage
}).single("image");
exports.fileUpload = fileUpload;

var getImagenes = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var connection, _yield$connection$que, _yield$connection$que2, rows, imagedir;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _database.connect)();

          case 3:
            connection = _context.sent;
            _context.next = 6;
            return connection.query("SELECT * FROM image");

          case 6:
            _yield$connection$que = _context.sent;
            _yield$connection$que2 = _slicedToArray(_yield$connection$que, 1);
            rows = _yield$connection$que2[0];
            rows.map(function (img) {
              fs.writeFileSync(path.join(__dirname, "../dbimages/" + img.id + "_" + "nico.png"), img.data);
            });
            imagedir = fs.readdirSync(path.join(__dirname, "../dbimages/"));
            res.json(imagedir);
            console.log(fs.readdirSync(path.join(__dirname, "../dbimages/")));
            res.json(rows);
            _context.next = 19;
            break;

          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 16]]);
  }));

  return function getImagenes(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getImagenes = getImagenes;

var saveImagenes = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var connection, type, name, data, sql, _yield$connection$exe, _yield$connection$exe2, results;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            console.log(req.file);
            _context2.next = 3;
            return (0, _database.connect)();

          case 3:
            connection = _context2.sent;
            type = req.file.mimetype;
            name = req.file.originalname;
            data = fs.readFileSync(path.join(__dirname, "../images/" + req.file.filename));
            sql = "INSERT INTO image(type, name, data)values(?,?,?);";
            _context2.next = 10;
            return connection.execute(sql, [type, name, data]);

          case 10:
            _yield$connection$exe = _context2.sent;
            _yield$connection$exe2 = _slicedToArray(_yield$connection$exe, 1);
            results = _yield$connection$exe2[0];
            res.json(_objectSpread({
              id: results.insertId
            }, req.body));

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function saveImagenes(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.saveImagenes = saveImagenes;

var deleteImagen = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var connection;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return (0, _database.connect)();

          case 2:
            connection = _context3.sent;
            _context3.next = 5;
            return connection.execute("DELETE FROM image WHERE id = ?", [req.params.id]);

          case 5:
            fs.unlinkSync(path.join(__dirname, "../dbimages/" + req.params.id + "_" + "nico.png"));
            res.send("image deleted");

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function deleteImagen(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.deleteImagen = deleteImagen;