"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortData = void 0;
exports.sortData = (data, field) => {
    return data === null || data === void 0 ? void 0 : data.sort((a, b) => a[field].localeCompare(b[field]));
};
//# sourceMappingURL=sort.js.map