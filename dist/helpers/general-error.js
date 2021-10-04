"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotAuthorise = exports.NotFound = exports.BadRequest = exports.GeneralError = void 0;
class GeneralError extends Error {
    constructor(message) {
        super();
        this.message = message;
    }
    getCode() {
        if (this instanceof BadRequest) {
            return 400;
        }
        if (this instanceof NotAuthorise) {
            return 401;
        }
        if (this instanceof NotFound) {
            return 404;
        }
        return 500;
    }
}
exports.GeneralError = GeneralError;
class BadRequest extends GeneralError {
}
exports.BadRequest = BadRequest;
class NotFound extends GeneralError {
}
exports.NotFound = NotFound;
class NotAuthorise extends GeneralError {
}
exports.NotAuthorise = NotAuthorise;
//# sourceMappingURL=general-error.js.map