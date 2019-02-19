(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.SplitTrim = {}));
}(this, function (exports) { 'use strict';

  function splitTrim(str, char) {
    if (!str || !str.split) {
      return [];
    }
    return str.split(char).reduce((acc, part) => {
      const trimmed = part.trim();
      if (trimmed.length) {
        acc.push(trimmed);
      }
      return acc;
    }, []);
  }

  exports.splitTrim = splitTrim;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
