"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.makeIntegerSequence = exports.integerSequence = void 0;

var integerSequence = function integerSequence() {
  var startingAt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var startOverWhenMaxIntegerIsReached = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var id = startingAt;
  return {
    next: function next() {
      if (id === Number.MAX_SAFE_INTEGER) {
        if (startOverWhenMaxIntegerIsReached) {
          id = startingAt;
        } else {
          throw new Error('Number.MAX_SAFE_INTEGER reached!');
        }
      }

      return id++;
    }
  };
};

exports.integerSequence = integerSequence;

var makeIntegerSequence = function makeIntegerSequence() {
  var startingAt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var idSequence = integerSequence(startingAt);
  return function () {
    return idSequence.next();
  };
};

exports.makeIntegerSequence = makeIntegerSequence;
var _default = makeIntegerSequence;
exports.default = _default;
