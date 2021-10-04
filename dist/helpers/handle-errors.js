"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const general_error_1 = require("./general-error");
const handleErrors = (err, _req, res, _next) => {
    if (err instanceof general_error_1.GeneralError) {
        return res.status(err.getCode()).json({
            status: "error",
            message: err.message,
        });
    }
    return res.status(500).json({
        status: "error",
        message: err.message,
    });
};
exports.default = handleErrors;
//# sourceMappingURL=handle-errors.js.map