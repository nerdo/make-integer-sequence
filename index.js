"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.makeIntegerSequence = exports.integerIterator = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var integerIterator = function integerIterator() {
  var _ref;

  var startingAt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var endingAt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Number.MAX_SAFE_INTEGER;
  var startOverWhenAtEnd = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var id = startingAt;
  return _ref = {}, _defineProperty(_ref, Symbol.iterator, function () {
    return this;
  }), _defineProperty(_ref, "next", function next(reset) {
    var value = id;

    if (reset) {
      id = startingAt;
    } else if (id === endingAt) {
      if (startOverWhenAtEnd) {
        id = startingAt;
      }
    } else {
      id++;
    }

    return {
      value: value,
      done: value === endingAt && !startOverWhenAtEnd
    };
  }), _ref;
};

exports.integerIterator = integerIterator;

var makeIntegerSequence = function makeIntegerSequence() {
  var startingAt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var endingAt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Number.MAX_SAFE_INTEGER;
  var startOverWhenAtEnd = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var idSequence = integerIterator(startingAt, endingAt, startOverWhenAtEnd);
  return function () {
    var next = idSequence.next();

    if (next.done && !startOverWhenAtEnd) {
      throw new Error("".concat(endingAt === Number.MAX_SAFE_INTEGER ? 'Number.MAX_SAFE_INTEGER' : endingAt, " reached!"));
    }

    return next.value;
  };
};

exports.makeIntegerSequence = makeIntegerSequence;
var _default = makeIntegerSequence;
exports.default = _default;
