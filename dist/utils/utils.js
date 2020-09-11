"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createParams = void 0;
exports.createParams = function (params) {
    if (!params) {
        return '';
    }
    var searchParams = new URLSearchParams();
    Object.entries(params).forEach(function (_a) {
        var key = _a[0], value = _a[1];
        if (typeof value === 'boolean') {
            searchParams.append(key, value ? 'true' : 'false');
            return;
        }
        searchParams.append(key, "" + value);
    });
    return "?" + searchParams.toString();
};
