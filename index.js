module.exports = function() {
  class ExtendableError extends Error {
    constructor(message, extra) {
      super(message);
      this.name = this.constructor.name;
      this.extra = extra;
      if (typeof Error.captureStackTrace === 'function') {
        Error.captureStackTrace(this, this.constructor);
      } else { 
        this.stack = (new Error(message)).stack;
      }
    }
  }

  return ExtendableError;
} ();