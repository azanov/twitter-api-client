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
var AccountsAndUsersClient = /** @class */ (function () {
    function AccountsAndUsersClient() {
    }
    /**
     *  Returns all lists the authenticating or specified user subscribes to, including their own. The user is specified using the user_id or screen_name parameters. If no user is given, the authenticating user is used.A maximum of 100 results will be returned by this call. Subscribed lists are returned first, followed by owned lists. This means that if a user subscribes to 90 lists and owns 20 lists, this method returns 90 subscriptions and 10 owned lists. The reverse method returns owned lists first, so with reverse=true, 20 owned lists and 80 subscriptions would be returned. If your goal is to obtain every list a user owns or subscribes to, use GET lists / ownerships and/or GET lists / subscriptions instead.
     *
     * @link https://developer.twitter.com/en/docs/accounts-and-users/create-manage-lists/api-reference/get-lists-list
     * @param parameters
     */
    AccountsAndUsersClient.prototype.listsList = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = utils_1.createParams(parameters);
                        return [4 /*yield*/, base_1.doGetRequest('https://api.twitter.com/1.1/lists/list.json' + params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  members/* Returns the members of the specified list. Private list members will only be shown if the authenticated user owns the specified list.
     *
     * @link https://developer.twitter.com/en/docs/accounts-and-users/create-manage-lists/api-reference/get-lists-members
     */
    AccountsAndUsersClient.prototype.listsMembers = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, base_1.doGetRequest('https://api.twitter.com/1.1/lists/members.json')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Check if the specified user is a member of the specified list.
     *
     * @link https://developer.twitter.com/en/docs/accounts-and-users/create-manage-lists/api-reference/get-lists-members-show
     * @param parameters
     */
    AccountsAndUsersClient.prototype.listsMembersShow = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = utils_1.createParams(parameters);
                        return [4 /*yield*/, base_1.doGetRequest('https://api.twitter.com/1.1/lists/members/show.json' + params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Returns the lists the specified user has been added to. If user_id or screen_name are not provided, the memberships for the authenticating user are returned.
     *
     * @link https://developer.twitter.com/en/docs/accounts-and-users/create-manage-lists/api-reference/get-lists-memberships
     * @param parameters
     */
    AccountsAndUsersClient.prototype.listsMemberships = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = utils_1.createParams(parameters);
                        return [4 /*yield*/, base_1.doGetRequest('https://api.twitter.com/1.1/lists/memberships.json' + params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Returns the lists owned by the specified Twitter user. Private lists will only be shown if the authenticated user is also the owner of the lists.
     *
     * @link https://developer.twitter.com/en/docs/accounts-and-users/create-manage-lists/api-reference/get-lists-ownerships
     * @param parameters
     */
    AccountsAndUsersClient.prototype.listsOwnerships = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = utils_1.createParams(parameters);
                        return [4 /*yield*/, base_1.doGetRequest('https://api.twitter.com/1.1/lists/ownerships.json' + params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Returns the specified list. Private lists will only be shown if the authenticated user owns the specified list.
     *
     * @link https://developer.twitter.com/en/docs/accounts-and-users/create-manage-lists/api-reference/get-lists-show
     * @param parameters
     */
    AccountsAndUsersClient.prototype.listsShow = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = utils_1.createParams(parameters);
                        return [4 /*yield*/, base_1.doGetRequest('https://api.twitter.com/1.1/lists/show.json' + params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Returns a timeline of tweets authored by members of the specified list. Retweets are included by default. Use the include_rts=false parameter to omit retweets.Embedded Timelines is a great way to embed list timelines on your website.
     *
     * @link https://developer.twitter.com/en/docs/accounts-and-users/create-manage-lists/api-reference/get-lists-statuses
     * @param parameters
     */
    AccountsAndUsersClient.prototype.listsStatuses = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = utils_1.createParams(parameters);
                        return [4 /*yield*/, base_1.doGetRequest('https://api.twitter.com/1.1/lists/statuses.json' + params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  subscribers/* Returns the subscribers of the specified list. Private list subscribers will only be shown if the authenticated user owns the specified list.
     *
     * @link https://developer.twitter.com/en/docs/accounts-and-users/create-manage-lists/api-reference/get-lists-subscribers
     * @param parameters
     */
    AccountsAndUsersClient.prototype.listsSubscribers = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = utils_1.createParams(parameters);
                        return [4 /*yield*/, base_1.doGetRequest('https://api.twitter.com/1.1/lists/subscribers.json' + params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Check if the specified user is a subscriber of the specified list. Returns the user if they are a subscriber.
     *
     * @link https://developer.twitter.com/en/docs/accounts-and-users/create-manage-lists/api-reference/get-lists-subscribers-show
     * @param parameters
     */
    AccountsAndUsersClient.prototype.listsSubscribersShow = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = utils_1.createParams(parameters);
                        return [4 /*yield*/, base_1.doGetRequest('https://api.twitter.com/1.1/lists/subscribers/show.json' + params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Obtain a collection of the lists the specified user is subscribed to, 20 lists per page by default. Does not include the user's own lists.
     *
     * @link https://developer.twitter.com/en/docs/accounts-and-users/create-manage-lists/api-reference/get-lists-subscriptions
     * @param parameters
     */
    AccountsAndUsersClient.prototype.listsSubscriptions = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = utils_1.createParams(parameters);
                        return [4 /*yield*/, base_1.doGetRequest('https://api.twitter.com/1.1/lists/subscriptions.json' + params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Creates a new list for the authenticated user. Note that you can create up to 1000 lists per account.
     *
     * @link https://developer.twitter.com/en/docs/accounts-and-users/create-manage-lists/api-reference/post-lists-create
     * @param parameters
     */
    AccountsAndUsersClient.prototype.listsCreate = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = utils_1.createParams(parameters);
                        return [4 /*yield*/, base_1.doPostRequest('https://api.twitter.com/1.1/lists/create.json' + params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Deletes the specified list. The authenticated user must own the list to be able to destroy it.
     *
     * @link https://developer.twitter.com/en/docs/accounts-and-users/create-manage-lists/api-reference/post-lists-destroy
     * @param parameters
     */
    AccountsAndUsersClient.prototype.listsDestroy = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = utils_1.createParams(parameters);
                        return [4 /*yield*/, base_1.doPostRequest('https://api.twitter.com/1.1/lists/destroy.json' + params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Add a member to a list. The authenticated user must own the list to be able to add members to it. Note that lists cannot have more than 5,000 members.
     *
     * @link https://developer.twitter.com/en/docs/accounts-and-users/create-manage-lists/api-reference/post-lists-members-create
     * @param parameters
     */
    AccountsAndUsersClient.prototype.listsMembersCreate = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = utils_1.createParams(parameters);
                        return [4 /*yield*/, base_1.doPostRequest('https://api.twitter.com/1.1/lists/members/create.json' + params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Adds multiple members to a list, by specifying a comma-separated list of member ids or screen names. The authenticated user must own the list to be able to add members to it. Note that lists can't have more than 5,000 members, and you are limited to adding up to 100 members to a list at a time with this method.Please note that there can be issues with lists that rapidly remove and add memberships. Take care when using these methods such that you are not too rapidly switching between removals and adds on the same list.
     *
     * @link https://developer.twitter.com/en/docs/accounts-and-users/create-manage-lists/api-reference/post-lists-members-create_all
     * @param parameters
     */
    AccountsAndUsersClient.prototype.listsMembersCreateAll = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = utils_1.createParams(parameters);
                        return [4 /*yield*/, base_1.doPostRequest('https://api.twitter.com/1.1/lists/members/create_all.json' + params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Removes the specified member from the list. The authenticated user must be the list's owner to remove members from the list.
     *
     * @link https://developer.twitter.com/en/docs/accounts-and-users/create-manage-lists/api-reference/post-lists-members-destroy
     * @param parameters
     */
    AccountsAndUsersClient.prototype.listsMembersDestroy = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = utils_1.createParams(parameters);
                        return [4 /*yield*/, base_1.doPostRequest('https://api.twitter.com/1.1/lists/members/destroy.json' + params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Removes multiple members from a list, by specifying a comma-separated list of member ids or screen names. The authenticated user must own the list to be able to remove members from it. Note that lists can't have more than 500 members, and you are limited to removing up to 100 members to a list at a time with this method.Please note that there can be issues with lists that rapidly remove and add memberships. Take care when using these methods such that you are not too rapidly switching between removals and adds on the same list.
     *
     * @link https://developer.twitter.com/en/docs/accounts-and-users/create-manage-lists/api-reference/post-lists-members-destroy_all
     * @param parameters
     */
    AccountsAndUsersClient.prototype.listsMembersDestroyAll = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = utils_1.createParams(parameters);
                        return [4 /*yield*/, base_1.doPostRequest('https://api.twitter.com/1.1/lists/members/destroy_all.json' + params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Subscribes the authenticated user to the specified list.
     *
     * @link https://developer.twitter.com/en/docs/accounts-and-users/create-manage-lists/api-reference/post-lists-subscribers-create
     * @param parameters
     */
    AccountsAndUsersClient.prototype.listsSubscribersCreate = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = utils_1.createParams(parameters);
                        return [4 /*yield*/, base_1.doPostRequest('https://api.twitter.com/1.1/lists/subscribers/create.json' + params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Unsubscribes the authenticated user from the specified list.
     *
     * @link https://developer.twitter.com/en/docs/accounts-and-users/create-manage-lists/api-reference/post-lists-subscribers-destroy
     * @param parameters
     */
    AccountsAndUsersClient.prototype.listsSubscribersDestroy = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = utils_1.createParams(parameters);
                        return [4 /*yield*/, base_1.doPostRequest('https://api.twitter.com/1.1/lists/subscribers/destroy.json' + params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Updates the specified list. The authenticated user must own the list to be able to update it.
     *
     * @link https://developer.twitter.com/en/docs/accounts-and-users/create-manage-lists/api-reference/post-lists-update
     * @param parameters
     */
    AccountsAndUsersClient.prototype.listsUpdate = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = utils_1.createParams(parameters);
                        return [4 /*yield*/, base_1.doPostRequest('https://api.twitter.com/1.1/lists/update.json' + params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Returns a cursored collection of user IDs for every user following the specified user.At this time, results are ordered with the most recent following first — however, this ordering is subject to unannounced change and eventual consistency issues. Results are given in groups of 5,000 user IDs and multiple "pages" of results can be navigated through using the next_cursor value in subsequent requests. See Using cursors to navigate collections for more information.This method is especially powerful when used in conjunction with GET users / lookup, a method that allows you to convert user IDs into full user objects in bulk.
     *
     * @link https://developer.twitter.com/en/docs/accounts-and-users/follow-search-get-users/api-reference/get-followers-ids
     * @param parameters
     */
    AccountsAndUsersClient.prototype.followersIds = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = utils_1.createParams(parameters);
                        return [4 /*yield*/, base_1.doGetRequest('https://api.twitter.com/1.1/followers/ids.json' + params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Returns a cursored collection of user objects for users following the specified user.At this time, results are ordered with the most recent following first — however, this ordering is subject to unannounced change and eventual consistency issues. Results are given in groups of 20 users and multiple "pages" of results can be navigated through using the next_cursor value in subsequent requests. See Using cursors to navigate collections for more information.
     *
     * @link https://developer.twitter.com/en/docs/accounts-and-users/follow-search-get-users/api-reference/get-followers-list
     * @param parameters
     */
    AccountsAndUsersClient.prototype.followersList = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = utils_1.createParams(parameters);
                        return [4 /*yield*/, base_1.doGetRequest('https://api.twitter.com/1.1/followers/list.json' + params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Returns a cursored collection of user IDs for every user the specified user is following (otherwise known as their "friends").At this time, results are ordered with the most recent following first — however, this ordering is subject to unannounced change and eventual consistency issues. Results are given in groups of 5,000 user IDs and multiple "pages" of results can be navigated through using the next_cursor value in subsequent requests. See Using cursors to navigate collections for more information.This method is especially powerful when used in conjunction with GET users / lookup, a method that allows you to convert user IDs into full user objects in bulk.
     *
     * @link https://developer.twitter.com/en/docs/accounts-and-users/follow-search-get-users/api-reference/get-friends-ids
     * @param parameters
     */
    AccountsAndUsersClient.prototype.friendsIds = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = utils_1.createParams(parameters);
                        return [4 /*yield*/, base_1.doGetRequest('https://api.twitter.com/1.1/friends/ids.json' + params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Returns a cursored collection of user objects for every user the specified user is following (otherwise known as their "friends").At this time, results are ordered with the most recent following first — however, this ordering is subject to unannounced change and eventual consistency issues. Results are given in groups of 20 users and multiple "pages" of results can be navigated through using the next_cursor value in subsequent requests. See Using cursors to navigate collections for more information.
     *
     * @link https://developer.twitter.com/en/docs/accounts-and-users/follow-search-get-users/api-reference/get-friends-list
     * @param parameters
     */
    AccountsAndUsersClient.prototype.friendsList = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = utils_1.createParams(parameters);
                        return [4 /*yield*/, base_1.doGetRequest('https://api.twitter.com/1.1/friends/list.json' + params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Returns a collection of numeric IDs for every user who has a pending request to follow the authenticating user.
     *
     * @link https://developer.twitter.com/en/docs/accounts-and-users/follow-search-get-users/api-reference/get-friendships-incoming
     * @param parameters
     */
    AccountsAndUsersClient.prototype.friendshipsIncoming = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = utils_1.createParams(parameters);
                        return [4 /*yield*/, base_1.doGetRequest('https://api.twitter.com/1.1/friendships/incoming.json' + params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Returns the relationships of the authenticating user to the comma-separated list of up to 100 screen_names or user_ids provided. Values for connections can be: following, following_requested, followed_by, none, blocking, muting.
     *
     * @link https://developer.twitter.com/en/docs/accounts-and-users/follow-search-get-users/api-reference/get-friendships-lookup
     * @param parameters
     */
    AccountsAndUsersClient.prototype.friendshipsLookup = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = utils_1.createParams(parameters);
                        return [4 /*yield*/, base_1.doGetRequest('https://api.twitter.com/1.1/friendships/lookup.json' + params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Returns a collection of user_ids that the currently authenticated user does not want to receive retweets from.Use POST friendships / update to set the "no retweets" status for a given user account on behalf of the current user.
     *
     * @link https://developer.twitter.com/en/docs/accounts-and-users/follow-search-get-users/api-reference/get-friendships-no_retweets-ids
     * @param parameters
     */
    AccountsAndUsersClient.prototype.friendshipsNoRetweetsIds = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = utils_1.createParams(parameters);
                        return [4 /*yield*/, base_1.doGetRequest('https://api.twitter.com/1.1/friendships/no_retweets/ids.json' + params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Returns a collection of numeric IDs for every protected user for whom the authenticating user has a pending follow request.
     *
     * @link https://developer.twitter.com/en/docs/accounts-and-users/follow-search-get-users/api-reference/get-friendships-outgoing
     * @param parameters
     */
    AccountsAndUsersClient.prototype.friendshipsOutgoing = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = utils_1.createParams(parameters);
                        return [4 /*yield*/, base_1.doGetRequest('https://api.twitter.com/1.1/friendships/outgoing.format' + params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Returns detailed information about the relationship between two arbitrary users.
     *
     * @link https://developer.twitter.com/en/docs/accounts-and-users/follow-search-get-users/api-reference/get-friendships-show
     * @param parameters
     */
    AccountsAndUsersClient.prototype.friendshipsShow = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = utils_1.createParams(parameters);
                        return [4 /*yield*/, base_1.doGetRequest('https://api.twitter.com/1.1/friendships/show.json' + params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Returns fully-hydrated user objects for up to 100 users per request, as specified by comma-separated values passed to the user_id and/or screen_name parameters.This method is especially useful when used in conjunction with collections of user IDs returned from GET friends / ids and GET followers / ids.GET users / show is used to retrieve a single user object.There are a few things to note when using this method. You must be following a protected user to be able to see their most recent status update. If you don't follow a protected user their status will be removed. The order of user IDs or screen names may not match the order of users in the returned array. If a requested user is unknown, suspended, or deleted, then that user will not be returned in the results list. If none of your lookup criteria can be satisfied by returning a user object, a HTTP 404 will be thrown. You are strongly encouraged to use a POST for larger requests.
     *
     * @link https://developer.twitter.com/en/docs/accounts-and-users/follow-search-get-users/api-reference/get-users-lookup
     * @param parameters
     */
    AccountsAndUsersClient.prototype.usersLookup = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = utils_1.createParams(parameters);
                        return [4 /*yield*/, base_1.doGetRequest('https://api.twitter.com/1.1/users/lookup.json' + params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Provides a simple, relevance-based search interface to public user accounts on Twitter. Try querying by topical interest, full name, company name, location, or other criteria. Exact match searches are not supported.Only the first 1,000 matching results are available.
     *
     * @link https://developer.twitter.com/en/docs/accounts-and-users/follow-search-get-users/api-reference/get-users-search
     * @param parameters
     */
    AccountsAndUsersClient.prototype.usersSearch = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = utils_1.createParams(parameters);
                        return [4 /*yield*/, base_1.doGetRequest('https://api.twitter.com/1.1/users/search.json' + params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Returns a variety of information about the user specified by the required user_id or screen_name parameter. The author's most recent Tweet will be returned inline when possible.GET users / lookup is used to retrieve a bulk collection of user objects.You must be following a protected user to be able to see their most recent Tweet. If you don't follow a protected user, the user's Tweet will be removed. A Tweet will not always be returned in the current_status field.
     *
     * @link https://developer.twitter.com/en/docs/accounts-and-users/follow-search-get-users/api-reference/get-users-show
     * @param parameters
     */
    AccountsAndUsersClient.prototype.usersShow = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = utils_1.createParams(parameters);
                        return [4 /*yield*/, base_1.doGetRequest('https://api.twitter.com/1.1/users/show.json' + params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Allows the authenticating user to follow (friend) the user specified in the ID parameter.Returns the followed user when successful. Returns a string describing the failure condition when unsuccessful. If the user is already friends with the user a HTTP 403 may be returned, though for performance reasons this method may also return a HTTP 200 OK message even if the follow relationship already exists.Actions taken in this method are asynchronous. Changes will be eventually consistent.
     *
     * @link https://developer.twitter.com/en/docs/accounts-and-users/follow-search-get-users/api-reference/post-friendships-create
     * @param parameters
     */
    AccountsAndUsersClient.prototype.friendshipsCreate = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = utils_1.createParams(parameters);
                        return [4 /*yield*/, base_1.doPostRequest('https://api.twitter.com/1.1/friendships/create.json' + params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Allows the authenticating user to unfollow the user specified in the ID parameter.Returns the unfollowed user when successful. Returns a string describing the failure condition when unsuccessful.Actions taken in this method are asynchronous. Changes will be eventually consistent.
     *
     * @link https://developer.twitter.com/en/docs/accounts-and-users/follow-search-get-users/api-reference/post-friendships-destroy
     * @param parameters
     */
    AccountsAndUsersClient.prototype.friendshipsDestroy = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = utils_1.createParams(parameters);
                        return [4 /*yield*/, base_1.doPostRequest('https://api.twitter.com/1.1/friendships/destroy.json' + params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Enable or disable Retweets and device notifications from the specified user.
     *
     * @link https://developer.twitter.com/en/docs/accounts-and-users/follow-search-get-users/api-reference/post-friendships-update
     * @param parameters
     */
    AccountsAndUsersClient.prototype.friendshipsUpdate = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = utils_1.createParams(parameters);
                        return [4 /*yield*/, base_1.doPostRequest('https://api.twitter.com/1.1/friendships/update.json' + params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Returns settings (including current trend, geo and sleep time information) for the authenticating user.
     *
     * @link https://developer.twitter.com/en/docs/accounts-and-users/manage-account-settings/api-reference/get-account-settings
     */
    AccountsAndUsersClient.prototype.accountSettings = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, base_1.doGetRequest('https://api.twitter.com/1.1/account/settings.json')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Returns the authenticated user's saved search queries.
     *
     * @link https://developer.twitter.com/en/docs/accounts-and-users/manage-account-settings/api-reference/get-saved_searches-list
     */
    AccountsAndUsersClient.prototype.savedSearchesList = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, base_1.doGetRequest('https://api.twitter.com/1.1/saved_searches/list.json')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Retrieve the information for the saved search represented by the given id. The authenticating user must be the owner of saved search ID being requested.
     *
     * @link https://developer.twitter.com/en/docs/accounts-and-users/manage-account-settings/api-reference/get-saved_searches-show-id
     * @param parameters
     */
    AccountsAndUsersClient.prototype.savedSearchesShowById = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = utils_1.createParams(parameters);
                        return [4 /*yield*/, base_1.doGetRequest('https://api.twitter.com/1.1/saved_searches/show/:id.json' + params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Returns a map of the available size variations of the specified user's profile banner. If the user has not uploaded a profile banner, a HTTP 404 will be served instead. This method can be used instead of string manipulation on the profile_banner_url returned in user objects as described in Profile Images and Banners.The profile banner data available at each size variant's URL is in PNG format.
     *
     * @link https://developer.twitter.com/en/docs/accounts-and-users/manage-account-settings/api-reference/get-users-profile_banner
     * @param parameters
     */
    AccountsAndUsersClient.prototype.usersProfileBanner = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = utils_1.createParams(parameters);
                        return [4 /*yield*/, base_1.doGetRequest('https://api.twitter.com/1.1/users/profile_banner.json' + params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Removes the uploaded profile banner for the authenticating user. Returns HTTP 200 upon success.
     *
     * @link https://developer.twitter.com/en/docs/accounts-and-users/manage-account-settings/api-reference/post-account-remove_profile_banner
     */
    AccountsAndUsersClient.prototype.accountRemoveProfileBanner = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, base_1.doPostRequest('https://api.twitter.com/1.1/account/remove_profile_banner.json')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Sets some values that users are able to set under the "Account" tab of their settings page. Only the parameters specified will be updated.
     *
     * @link https://developer.twitter.com/en/docs/accounts-and-users/manage-account-settings/api-reference/post-account-update_profile
     * @param parameters
     */
    AccountsAndUsersClient.prototype.accountUpdateProfile = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = utils_1.createParams(parameters);
                        return [4 /*yield*/, base_1.doPostRequest('https://api.twitter.com/1.1/account/update_profile.json' + params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Updates the authenticating user's profile background image. This method can also be used to enable or disable the profile background image.Although each parameter is marked as optional, at least one of image or media_id must be provided when making this request.Learn more about the deprecation of this endpoint via our forum post.
     *
     * @link https://developer.twitter.com/en/docs/accounts-and-users/manage-account-settings/api-reference/post-account-update_profile_background_image
     * @param parameters
     */
    AccountsAndUsersClient.prototype.accountUpdateProfileBackgroundImageRetired = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = utils_1.createParams(parameters);
                        return [4 /*yield*/, base_1.doPostRequest('https://api.twitter.com/1.1/account/update_profile_background_image.json' + params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Uploads a profile banner on behalf of the authenticating user. More information about sizing variations can be found in User Profile Images and Banners and GET users / profile_banner.Profile banner images are processed asynchronously. The profile_banner_url and its variant sizes will not necessary be available directly after upload.
     *
     * @link https://developer.twitter.com/en/docs/accounts-and-users/manage-account-settings/api-reference/post-account-update_profile_banner
     * @param parameters
     */
    AccountsAndUsersClient.prototype.accountUpdateProfileBanner = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = utils_1.createParams(parameters);
                        return [4 /*yield*/, base_1.doPostRequest('https://api.twitter.com/1.1/account/update_profile_banner.json' + params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Updates the authenticating user's profile image. Note that this method expects raw multipart data, not a URL to an image.This method asynchronously processes the uploaded file before updating the user's profile image URL. You can either update your local cache the next time you request the user's information, or, at least 5 seconds after uploading the image, ask for the updated URL using GET users / show.
     *
     * @link https://developer.twitter.com/en/docs/accounts-and-users/manage-account-settings/api-reference/post-account-update_profile_image
     * @param parameters
     */
    AccountsAndUsersClient.prototype.accountUpdateProfileImage = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = utils_1.createParams(parameters);
                        return [4 /*yield*/, base_1.doPostRequest('https://api.twitter.com/1.1/account/update_profile_image.json' + params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Create a new saved search for the authenticated user. A user may only have 25 saved searches.
     *
     * @link https://developer.twitter.com/en/docs/accounts-and-users/manage-account-settings/api-reference/post-saved_searches-create
     * @param parameters
     */
    AccountsAndUsersClient.prototype.savedSearchesCreate = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = utils_1.createParams(parameters);
                        return [4 /*yield*/, base_1.doPostRequest('https://api.twitter.com/1.1/saved_searches/create.json' + params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Destroys a saved search for the authenticating user. The authenticating user must be the owner of saved search id being destroyed.
     *
     * @link https://developer.twitter.com/en/docs/accounts-and-users/manage-account-settings/api-reference/post-saved_searches-destroy-id
     * @param parameters
     */
    AccountsAndUsersClient.prototype.savedSearchesDestroyById = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = utils_1.createParams(parameters);
                        return [4 /*yield*/, base_1.doPostRequest('https://api.twitter.com/1.1/saved_searches/destroy/:id.json' + params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Returns an array of numeric user ids the authenticating user is blocking.Important This method is cursored, meaning your app must make multiple requests in order to receive all blocks correctly. See Using cursors to navigate collections for more details on how cursoring works.
     *
     * @link https://developer.twitter.com/en/docs/accounts-and-users/mute-block-report-users/api-reference/get-blocks-ids
     */
    AccountsAndUsersClient.prototype.blocksIds = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, base_1.doGetRequest('https://api.twitter.com/1.1/blocks/ids.json')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Returns a collection of user objects that the authenticating user is blocking.Important This method is cursored, meaning your app must make multiple requests in order to receive all blocks correctly. See Using cursors to navigate collections for more details on how cursoring works.
     *
     * @link https://developer.twitter.com/en/docs/accounts-and-users/mute-block-report-users/api-reference/get-blocks-list
     */
    AccountsAndUsersClient.prototype.blocksList = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, base_1.doGetRequest('https://api.twitter.com/1.1/blocks/list.json')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Returns an array of numeric user ids the authenticating user has muted.
     *
     * @link https://developer.twitter.com/en/docs/accounts-and-users/mute-block-report-users/api-reference/get-mutes-users-ids
     */
    AccountsAndUsersClient.prototype.mutesUsersIds = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, base_1.doGetRequest('https://api.twitter.com/1.1/mutes/users/ids.json')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Returns an array of user objects the authenticating user has muted.
     *
     * @link https://developer.twitter.com/en/docs/accounts-and-users/mute-block-report-users/api-reference/get-mutes-users-list
     */
    AccountsAndUsersClient.prototype.mutesUsersList = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, base_1.doGetRequest('https://api.twitter.com/1.1/mutes/users/list.json')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Blocks the specified user from following the authenticating user. In addition the blocked user will not show in the authenticating users mentions or timeline (unless retweeted by another user). If a follow or friend relationship exists it is destroyed.The URL pattern /version/block/create/:screen_name_or_user_id.format is still accepted but not recommended. As a sequence of numbers is a valid screen name we recommend using the screen_name or user_id parameter instead.
     *
     * @link https://developer.twitter.com/en/docs/accounts-and-users/mute-block-report-users/api-reference/post-blocks-create
     * @param parameters
     */
    AccountsAndUsersClient.prototype.blocksCreate = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = utils_1.createParams(parameters);
                        return [4 /*yield*/, base_1.doPostRequest('https://api.twitter.com/1.1/blocks/create.json' + params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Mutes the user specified in the ID parameter for the authenticating user.Returns the muted user when successful. Returns a string describing the failure condition when unsuccessful.Actions taken in this method are asynchronous. Changes will be eventually consistent.
     *
     * @link https://developer.twitter.com/en/docs/accounts-and-users/mute-block-report-users/api-reference/post-mutes-users-create
     * @param parameters
     */
    AccountsAndUsersClient.prototype.mutesUsersCreate = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = utils_1.createParams(parameters);
                        return [4 /*yield*/, base_1.doPostRequest('https://api.twitter.com/1.1/mutes/users/create.json' + params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Un-mutes the user specified in the ID parameter for the authenticating user.Returns the unmuted user when successful. Returns a string describing the failure condition when unsuccessful.Actions taken in this method are asynchronous. Changes will be eventually consistent.
     *
     * @link https://developer.twitter.com/en/docs/accounts-and-users/mute-block-report-users/api-reference/post-mutes-users-destroy
     * @param parameters
     */
    AccountsAndUsersClient.prototype.mutesUsersDestroy = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = utils_1.createParams(parameters);
                        return [4 /*yield*/, base_1.doPostRequest('https://api.twitter.com/1.1/mutes/users/destroy.json' + params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Report the specified user as a spam account to Twitter. Additionally, optionally performs the equivalent of POST blocks / create on behalf of the authenticated user.
     *
     * @link https://developer.twitter.com/en/docs/accounts-and-users/mute-block-report-users/api-reference/post-users-report_spam
     * @param parameters
     */
    AccountsAndUsersClient.prototype.usersReportSpam = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = utils_1.createParams(parameters);
                        return [4 /*yield*/, base_1.doPostRequest('https://api.twitter.com/1.1/users/report_spam.json' + params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return AccountsAndUsersClient;
}());
exports.default = AccountsAndUsersClient;
