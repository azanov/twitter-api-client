"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatURL = void 0;
exports.formatURL = function (url) {
    return url
        .replace(/\!/g, '%21')
        .replace(/\'/g, '%27')
        .replace(/\(/g, '%28')
        .replace(/\)/g, '%29')
        .replace(/\*/g, '%2A');
};
