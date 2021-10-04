"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.totalHeight = void 0;
const feetConstant = 0.032808;
exports.totalHeight = (data) => {
    const total = data === null || data === void 0 ? void 0 : data.reduce((acc, val) => (acc += parseInt(val.height, 10)), 0);
    const feet = Math.floor(total * feetConstant);
    const inch = (total / feetConstant).toFixed(2).split(".")[1];
    const measure = `${total} cm (${feet}ft/${inch}in)`;
    return measure;
};
//# sourceMappingURL=get-total-height.js.map