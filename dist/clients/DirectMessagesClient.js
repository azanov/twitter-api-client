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
var DirectMessagesClient = /** @class */ (function () {
    function DirectMessagesClient() {
    }
    /**
     * Returns a custom profile that was created with POST custom_profiles/new.json.
     *
     * @link https://developer.twitter.com/en/docs/direct-messages/custom-profiles/api-reference/get-profile
     * @param parameters
     */
    DirectMessagesClient.prototype.customProfilesById = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = utils_1.createParams(parameters);
                        return [4 /*yield*/, base_1.doGetRequest('https://api.twitter.com/1.1/custom_profiles/:id.json' + params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Returns a single Direct Message event by the given id.
     *
     * @link https://developer.twitter.com/en/docs/direct-messages/sending-and-receiving/api-reference/get-event
     * @param parameters
     */
    DirectMessagesClient.prototype.directMessagesEventsShow = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = utils_1.createParams(parameters);
                        return [4 /*yield*/, base_1.doGetRequest('https://api.twitter.com/1.1/direct_messages/events/show.json' + params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Publishes a new message_create event resulting in a Direct Message sent to a specified user from the authenticating user. Returns an event if successful. Supports publishing Direct Messages with optional Quick Reply and media attachment. Replaces behavior currently provided by POST direct_messages/new.Requires a JSON POST body and Content-Type header to be set to application/json. Setting Content-Length may also be required if it is not automatically.
     *
     * @link https://developer.twitter.com/en/docs/direct-messages/sending-and-receiving/api-reference/new-event
     * @param parameters
     */
    DirectMessagesClient.prototype.directMessagesEventsNewMessageCreate = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = utils_1.createParams(parameters);
                        return [4 /*yield*/, base_1.doPostRequest('https://api.twitter.com/1.1/direct_messages/events/new.json' + params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Displays a visual typing indicator in the recipient’s Direct Message conversation view with the sender. Each request triggers a typing indicator animation with a duration of ~3 seconds.
     *
     * @link https://developer.twitter.com/en/docs/direct-messages/typing-indicator-and-read-receipts/api-reference/new-typing-indicator
     * @param parameters
     */
    DirectMessagesClient.prototype.directMessagesIndicateTyping = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = utils_1.createParams(parameters);
                        return [4 /*yield*/, base_1.doPostRequest('https://api.twitter.com/1.1/direct_messages/indicate_typing.json' + params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Returns a Welcome Message Rule by the given id.
     *
     * @link https://developer.twitter.com/en/docs/direct-messages/welcome-messages/api-reference/get-welcome-message-rule
     * @param parameters
     */
    DirectMessagesClient.prototype.directMessagesWelcomeMessagesRulesShow = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = utils_1.createParams(parameters);
                        return [4 /*yield*/, base_1.doGetRequest('https://api.twitter.com/1.1/direct_messages/welcome_messages/rules/show.json' + params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Returns a Welcome Message by the given id.
     *
     * @link https://developer.twitter.com/en/docs/direct-messages/welcome-messages/api-reference/get-welcome-message
     * @param parameters
     */
    DirectMessagesClient.prototype.directMessagesWelcomeMessagesShow = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = utils_1.createParams(parameters);
                        return [4 /*yield*/, base_1.doGetRequest('https://api.twitter.com/1.1/direct_messages/welcome_messages/show.json' + params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Creates a new Welcome Message that will be stored and sent in the future from the authenticating user in defined circumstances. Returns the message template if successful. Supports publishing with the same elements as Direct Messages (e.g. Quick Replies, media attachments).Requires a JSON POST body and Content-Type header to be set to application/json. Setting Content-Length may also be required if it is not automatically.See the Welcome Messages overview to learn how to work with Welcome Messages.
     *
     * @link https://developer.twitter.com/en/docs/direct-messages/welcome-messages/api-reference/new-welcome-message
     * @param parameters
     */
    DirectMessagesClient.prototype.directMessagesWelcomeMessagesNew = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = utils_1.createParams(parameters);
                        return [4 /*yield*/, base_1.doPostRequest('https://api.twitter.com/1.1/direct_messages/welcome_messages/new.json' + params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Creates a new Welcome Message Rule that determines which Welcome Message will be shown in a given conversation. Returns the created rule if successful.Requires a JSON POST body and Content-Type header to be set to application/json. Setting Content-Length may also be required if it is not automatically.Additional rule configurations are forthcoming. For the initial beta release, the most recently created Rule will always take precedence, and the assigned Welcome Message will be displayed in the conversation.See the Welcome Messages overview to learn how to work with Welcome Messages.
     *
     * @link https://developer.twitter.com/en/docs/direct-messages/welcome-messages/api-reference/new-welcome-message-rule
     * @param parameters
     */
    DirectMessagesClient.prototype.directMessagesWelcomeMessagesRulesNew = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = utils_1.createParams(parameters);
                        return [4 /*yield*/, base_1.doPostRequest('https://api.twitter.com/1.1/direct_messages/welcome_messages/rules/new.json' + params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return DirectMessagesClient;
}());
exports.default = DirectMessagesClient;
