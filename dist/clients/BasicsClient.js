"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var base_1 = require("../base/base");
var utils_1 = require("../utils/utils");
var BasicsClient = /** @class */ (function () {
    function BasicsClient() {
    }
    /**
     *  Allows a Consumer application to use an OAuth request_token to request user authorization.This method is a replacement of Section 6.2 of the OAuth 1.0 authentication flow for applications using the callback authentication flow. The method will use the currently logged in user as the account for access authorization unless the force_login parameter is set to true.This method differs from GET oauth / authorize in that if the user has already granted the application permission, the redirect will occur without the user having to re-approve the application. To realize this behavior, you must enable the Use Sign in with Twitter setting on your application record.
     *
     * @link https://developer.twitter.com/en/docs/basics/authentication/api-reference/authenticate
     * @param parameters
     */
    BasicsClient.prototype.oauthAuthenticate = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = utils_1.createParams(parameters);
                        return [4 /*yield*/, base_1.doGetRequest('https://api.twitter.com/oauth/authenticate' + params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Allows a Consumer application to use an OAuth Request Token to request user authorization. This method fulfills Section 6.2 of the OAuth 1.0 authentication flow. Desktop applications must use this method (and cannot use GET oauth / authenticate).Usage Note: An oauth_callback is never sent to this method, provide it to POST oauth / request_token instead.
     *
     * @link https://developer.twitter.com/en/docs/basics/authentication/api-reference/authorize
     * @param parameters
     */
    BasicsClient.prototype.oauthAuthorize = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = utils_1.createParams(parameters);
                        return [4 /*yield*/, base_1.doGetRequest('https://api.twitter.com/oauth/authorize' + params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Allows a Consumer application to exchange the OAuth Request Token for an OAuth Access Token. This method fulfills Section 6.3 of the OAuth 1.0 authentication flow.
     *
     * @link https://developer.twitter.com/en/docs/basics/authentication/api-reference/access_token
     */
    BasicsClient.prototype.oauthAccessToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, base_1.doPostRequest('https://api.twitter.com/oauth/access_token')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Allows a registered application to revoke an issued OAuth access_token by presenting its client credentials. Once an access_token has been invalidated, new creation attempts will yield a different Access Token and usage of the invalidated token will no longer be allowed.
     *
     * @link https://developer.twitter.com/en/docs/basics/authentication/api-reference/invalidate_access_token
     */
    BasicsClient.prototype.oauthInvalidateToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, base_1.doPostRequest('https://api.twitter.com/1.1/oauth/invalidate_token')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * undefined
     *
     * @link https://developer.twitter.com/en/docs/basics/authentication/api-reference/request_token
     */
    BasicsClient.prototype.oauthRequestToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, base_1.doPostRequest('https://api.twitter.com/oauth/request_token')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Allows a registered application to revoke an issued oAuth 2.0 Bearer Token by presenting its client credentials. Once a Bearer Token has been invalidated, new creation attempts will yield a different Bearer Token and usage of the invalidated token will no longer be allowed.Successful responses include a JSON-structure describing the revoked Bearer Token.
     *
     * @link https://developer.twitter.com/en/docs/basics/authentication/api-reference/invalidate_bearer_token
     */
    BasicsClient.prototype.oauth2InvalidateToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, base_1.doPostRequest('https://api.twitter.com/oauth2/invalidate_token')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Allows a registered application to obtain an OAuth 2 Bearer Token, which can be used to make API requests on an application's own behalf, without a user context. This is called Application-only authentication.A Bearer Token may be invalidated using oauth2/invalidate_token. Once a Bearer Token has been invalidated, new creation attempts will yield a different Bearer Token and usage of the previous token will no longer be allowed.Only one bearer token may exist outstanding for an application, and repeated requests to this method will yield the same already-existent token until it has been invalidated.Successful responses include a JSON-structure describing the awarded Bearer Token.Tokens received by this method should be cached. If attempted too frequently, requests will be rejected with a HTTP 403 with code 99.
     *
     * @link https://developer.twitter.com/en/docs/basics/authentication/api-reference/token
     * @param parameters
     */
    BasicsClient.prototype.oauth2Token = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = utils_1.createParams(parameters);
                        return [4 /*yield*/, base_1.doPostRequest('https://api.twitter.com/oauth2/token' + params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return BasicsClient;
}());
exports.default = BasicsClient;
