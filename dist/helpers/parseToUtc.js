"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sanitizeDateToUTC = void 0;
exports.sanitizeDateToUTC = (data) => {
    return data === null || data === void 0 ? void 0 : data.map((dt) => {
        var _a;
        return (Object.assign(Object.assign({}, dt === null || dt === void 0 ? void 0 : dt.dataValues), { date: new Date((_a = dt === null || dt === void 0 ? void 0 : dt.dataValues) === null || _a === void 0 ? void 0 : _a.createdAt).toUTCString() }));
    });
};
//# sourceMappingURL=parseToUtc.js.map