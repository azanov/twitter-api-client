"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var object_sizeof_1 = __importDefault(require("object-sizeof"));
var generateHash_1 = __importDefault(require("../utils/generateHash"));
var windowSessionStorage = typeof sessionStorage !== 'undefined' ? sessionStorage : undefined;
var Cache = /** @class */ (function () {
    function Cache(ttl, maxByteSize) {
        if (ttl === void 0) { ttl = 360; }
        if (maxByteSize === void 0) { maxByteSize = 16000000; }
        this.cache = new Map();
        this.ttl = ttl;
        this.maxByteSize = maxByteSize;
    }
    Cache.prototype.add = function (query, data) {
        var hashedKey = generateHash_1.default(query);
        var added = new Date();
        var entry = {
            added: added,
            data: data,
        };
        this.cache.set(hashedKey, entry);
        windowSessionStorage === null || windowSessionStorage === void 0 ? void 0 : windowSessionStorage.setItem(hashedKey, JSON.stringify(entry));
        this.clearSpace();
    };
    Cache.prototype.get = function (query) {
        var hashedKey = generateHash_1.default(query);
        if (!this.has(query)) {
            return null;
        }
        try {
            var entry = this.cache.get(hashedKey);
            if (!entry) {
                var sessionData = windowSessionStorage === null || windowSessionStorage === void 0 ? void 0 : windowSessionStorage.getItem(hashedKey);
                if (!sessionData) {
                    return;
                }
                return JSON.parse(sessionData);
            }
            return entry.data;
        }
        catch (error) {
            return null;
        }
    };
    Cache.prototype.has = function (query) {
        var hashedKey = generateHash_1.default(query);
        try {
            var now = new Date();
            var data = this.cache.get(hashedKey);
            if (!data) {
                var sessionData = windowSessionStorage === null || windowSessionStorage === void 0 ? void 0 : windowSessionStorage.getItem(hashedKey);
                if (!sessionData) {
                    return false;
                }
                data = JSON.parse(sessionData);
            }
            var entryAdded = new Date(data.added);
            if (now.getTime() > entryAdded.getTime() + this.ttl * 1000) {
                windowSessionStorage === null || windowSessionStorage === void 0 ? void 0 : windowSessionStorage.removeItem(hashedKey);
                this.cache.delete(hashedKey);
                return false;
            }
            return true;
        }
        catch (error) {
            return false;
        }
    };
    Cache.prototype.clearSpace = function () {
        var cacheArray = Array.from(this.cache);
        if (object_sizeof_1.default(cacheArray) < this.maxByteSize) {
            return;
        }
        cacheArray.sort(function (a, b) { return a[1].added.getTime() - b[1].added.getTime(); });
        var reducedCacheArray = cacheArray.slice(1);
        this.cache = new Map(reducedCacheArray);
        this.clearSpace();
    };
    return Cache;
}());
exports.default = Cache;
