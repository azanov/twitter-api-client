"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var base_1 = require("../base/base");
var BasicsClient_1 = __importDefault(require("./BasicsClient"));
var AccountsAndUsersClient_1 = __importDefault(require("./AccountsAndUsersClient"));
var TweetsClient_1 = __importDefault(require("./TweetsClient"));
var DirectMessagesClient_1 = __importDefault(require("./DirectMessagesClient"));
var TrendsClient_1 = __importDefault(require("./TrendsClient"));
var GeoClient_1 = __importDefault(require("./GeoClient"));
var TwitterClient = /** @class */ (function () {
    /**
     * Provide Twitter API Credentials and options
     * @param options
     */
    function TwitterClient(options) {
        if (!options.apiKey) {
            throw Error('API KEY needs to be provided.');
        }
        if (!options.apiSecret) {
            throw Error('API SECRET needs to be provided.');
        }
        if (!options.accessToken) {
            throw Error('ACCESS TOKEN needs to be provided.');
        }
        if (!options.accessTokenSecret) {
            throw Error('ACCESS TOKEN SECRET needs to be provided.');
        }
        base_1.setOptions(options);
    }
    Object.defineProperty(TwitterClient.prototype, "basics", {
        get: function () {
            if (!this.basicsClient) {
                this.basicsClient = new BasicsClient_1.default();
            }
            return this.basicsClient;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TwitterClient.prototype, "accountsAndUsers", {
        get: function () {
            if (!this.accountsAndUsersClient) {
                this.accountsAndUsersClient = new AccountsAndUsersClient_1.default();
            }
            return this.accountsAndUsersClient;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TwitterClient.prototype, "tweets", {
        get: function () {
            if (!this.tweetsClient) {
                this.tweetsClient = new TweetsClient_1.default();
            }
            return this.tweetsClient;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TwitterClient.prototype, "directMessages", {
        get: function () {
            if (!this.directMessagesClient) {
                this.directMessagesClient = new DirectMessagesClient_1.default();
            }
            return this.directMessagesClient;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TwitterClient.prototype, "trends", {
        get: function () {
            if (!this.trendsClient) {
                this.trendsClient = new TrendsClient_1.default();
            }
            return this.trendsClient;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TwitterClient.prototype, "geo", {
        get: function () {
            if (!this.geoClient) {
                this.geoClient = new GeoClient_1.default();
            }
            return this.geoClient;
        },
        enumerable: false,
        configurable: true
    });
    return TwitterClient;
}());
exports.default = TwitterClient;
