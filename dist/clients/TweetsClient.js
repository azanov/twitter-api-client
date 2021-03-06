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
var TweetsClient = /** @class */ (function () {
    function TweetsClient() {
    }
    /**
     *  Retrieve the identified Collection, presented as a list of the Tweets curated within.The response structure of this method differs significantly from timelines you may be used to working with elsewhere in the Twitter API.To navigate a Collection, use the position object of a response, which includes attributes for max_position, min_position, and was_truncated. was_truncated indicates whether additional Tweets exist in the collection outside of the range of the current request. To retrieve Tweets further back in time, use the value of min_position found in the current response as the max_position parameter in the next call to this endpoint.
     *
     * @link https://developer.twitter.com/en/docs/tweets/curate-a-collection/api-reference/get-collections-entries
     * @param parameters
     */
    TweetsClient.prototype.collectionsEntries = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = utils_1.createParams(parameters);
                        return [4 /*yield*/, base_1.doGetRequest('https://api.twitter.com/1.1/collections/entries.json' + params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Find Collections created by a specific user or containing a specific curated Tweet.Results are organized in a cursored collection.
     *
     * @link https://developer.twitter.com/en/docs/tweets/curate-a-collection/api-reference/get-collections-list
     * @param parameters
     */
    TweetsClient.prototype.collectionsList = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = utils_1.createParams(parameters);
                        return [4 /*yield*/, base_1.doGetRequest('https://api.twitter.com/1.1/collections/list.json' + params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Retrieve information associated with a specific Collection.
     *
     * @link https://developer.twitter.com/en/docs/tweets/curate-a-collection/api-reference/get-collections-show
     * @param parameters
     */
    TweetsClient.prototype.collectionsShow = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = utils_1.createParams(parameters);
                        return [4 /*yield*/, base_1.doGetRequest('https://api.twitter.com/1.1/collections/show.json' + params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Create a Collection owned by the currently authenticated user.The API endpoint may refuse to complete the request if the authenticated user has exceeded the total number of allowed collections for their account.
     *
     * @link https://developer.twitter.com/en/docs/tweets/curate-a-collection/api-reference/post-collections-create
     * @param parameters
     */
    TweetsClient.prototype.collectionsCreate = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = utils_1.createParams(parameters);
                        return [4 /*yield*/, base_1.doPostRequest('https://api.twitter.com/1.1/collections/create.json' + params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Permanently delete a Collection owned by the currently authenticated user.
     *
     * @link https://developer.twitter.com/en/docs/tweets/curate-a-collection/api-reference/post-collections-destroy
     * @param parameters
     */
    TweetsClient.prototype.collectionsDestroy = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = utils_1.createParams(parameters);
                        return [4 /*yield*/, base_1.doPostRequest('https://api.twitter.com/1.1/collections/destroy.json' + params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Add a specified Tweet to a Collection.A collection will store up to a few thousand Tweets. Adding a Tweet to a collection beyond its allowed capacity will remove the oldest Tweet in the collection based on the time it was added to the collection.Use POST collections / entries / curate to add Tweets to a Collection in bulk.
     *
     * @link https://developer.twitter.com/en/docs/tweets/curate-a-collection/api-reference/post-collections-entries-add
     * @param parameters
     */
    TweetsClient.prototype.collectionsEntriesAdd = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = utils_1.createParams(parameters);
                        return [4 /*yield*/, base_1.doPostRequest('https://api.twitter.com/1.1/collections/entries/add.json' + params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Curate a Collection by adding or removing Tweets in bulk. Updates must be limited to 100 cumulative additions or removals per request.Use POST collections / entries / add and POST collections / entries / remove to add or remove a single Tweet.
     *
     * @link https://developer.twitter.com/en/docs/tweets/curate-a-collection/api-reference/post-collections-entries-curate
     */
    TweetsClient.prototype.collectionsEntriesCurate = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, base_1.doPostRequest('https://api.twitter.com/1.1/collections/entries/curate.json')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Move a specified Tweet to a new position in a curation_reverse_chron ordered collection.
     *
     * @link https://developer.twitter.com/en/docs/tweets/curate-a-collection/api-reference/post-collections-entries-move
     * @param parameters
     */
    TweetsClient.prototype.collectionsEntriesMove = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = utils_1.createParams(parameters);
                        return [4 /*yield*/, base_1.doPostRequest('https://api.twitter.com/1.1/collections/entries/move.json' + params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Remove the specified Tweet from a Collection.Use POST collections / entries / curate to remove Tweets from a Collection in bulk.
     *
     * @link https://developer.twitter.com/en/docs/tweets/curate-a-collection/api-reference/post-collections-entries-remove
     * @param parameters
     */
    TweetsClient.prototype.collectionsEntriesRemove = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = utils_1.createParams(parameters);
                        return [4 /*yield*/, base_1.doPostRequest('https://api.twitter.com/1.1/collections/entries/remove.json' + params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Update information concerning a Collection owned by the currently authenticated user.Partial updates are not currently supported: please provide name, description, and url whenever using this method. Omitted description or url parameters will be treated as if an empty string was passed, overwriting any previously stored value for the Collection.
     *
     * @link https://developer.twitter.com/en/docs/tweets/curate-a-collection/api-reference/post-collections-update
     * @param parameters
     */
    TweetsClient.prototype.collectionsUpdate = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = utils_1.createParams(parameters);
                        return [4 /*yield*/, base_1.doPostRequest('https://api.twitter.com/1.1/collections/update.json' + params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Returns a collection of the most recent Tweets and Retweets posted by the authenticating user and the users they follow. The home timeline is central to how most users interact with the Twitter service.Up to 800 Tweets are obtainable on the home timeline. It is more volatile for users that follow many users or follow users who Tweet frequently.See Working with Timelines for instructions on traversing timelines efficiently.
     *
     * @link https://developer.twitter.com/en/docs/tweets/timelines/api-reference/get-statuses-home_timeline
     * @param parameters
     */
    TweetsClient.prototype.statusesHomeTimeline = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = utils_1.createParams(parameters);
                        return [4 /*yield*/, base_1.doGetRequest('https://api.twitter.com/1.1/statuses/home_timeline.json' + params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Important notice: On June 19, 2019, we began enforcing a limit of 100,000 requests per day to the /statuses/mentions_timeline endpoint. This is in addition to existing user-level rate limits (75 requests / 15-minutes). This limit is enforced on a per-application basis, meaning that a single developer app can make up to 100,000 calls during any single 24-hour period.Returns the 20 most recent mentions (Tweets containing a users's @screen_name) for the authenticating user.The timeline returned is the equivalent of the one seen when you view your mentions on twitter.com.This method can only return up to 800 tweets.See Working with Timelines for instructions on traversing timelines.
     *
     * @link https://developer.twitter.com/en/docs/tweets/timelines/api-reference/get-statuses-mentions_timeline
     * @param parameters
     */
    TweetsClient.prototype.statusesMentionsTimeline = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = utils_1.createParams(parameters);
                        return [4 /*yield*/, base_1.doGetRequest('https://api.twitter.com/1.1/statuses/mentions_timeline.json' + params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Important notice: On June 19, 2019, we began enforcing a limit of 100,000 requests per day to the /statuses/user_timeline endpoint, in addition to existing user-level and app-level rate limits. This limit is applied on a per-application basis, meaning that a single developer app can make up to 100,000 calls during any single 24-hour period.Returns a collection of the most recent Tweets posted by the user indicated by the screen_name or user_id parameters.User timelines belonging to protected users may only be requested when the authenticated user either "owns" the timeline or is an approved follower of the owner.The timeline returned is the equivalent of the one seen as a user's profile on Twitter.This method can only return up to 3,200 of a user's most recent Tweets. Native retweets of other statuses by the user is included in this total, regardless of whether include_rts is set to false when requesting this resource.See Working with Timelines for instructions on traversing timelines.See Embedded Timelines, Embedded Tweets, and GET statuses/oembed for tools to render Tweets according to Display Requirements.
     *
     * @link https://developer.twitter.com/en/docs/tweets/timelines/api-reference/get-statuses-user_timeline
     * @param parameters
     */
    TweetsClient.prototype.statusesUserTimeline = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = utils_1.createParams(parameters);
                        return [4 /*yield*/, base_1.doGetRequest('https://api.twitter.com/1.1/statuses/user_timeline.json' + params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Note: favorites are now known as likes.Returns the 20 most recent Tweets liked by the authenticating or specified user.
     *
     * @link https://developer.twitter.com/en/docs/tweets/post-and-engage/api-reference/get-favorites-list
     * @param parameters
     */
    TweetsClient.prototype.favoritesList = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = utils_1.createParams(parameters);
                        return [4 /*yield*/, base_1.doGetRequest('https://api.twitter.com/1.1/favorites/list.json' + params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Returns fully-hydrated Tweet objects for up to 100 Tweets per request, as specified by comma-separated values passed to the id parameter.This method is especially useful to get the details (hydrate) a collection of Tweet IDs.GET statuses / show / :id is used to retrieve a single Tweet object.There are a few things to note when using this method. You must be following a protected user to be able to see their most recent Tweets. If you don't follow a protected user their status will be removed. The order of Tweet IDs may not match the order of Tweets in the returned array. If a requested Tweet is unknown or deleted, then that Tweet will not be returned in the results list, unless the map parameter is set to true, in which case it will be returned with a value of null. If none of your lookup criteria matches valid Tweet IDs an empty array will be returned for map=false. You are strongly encouraged to use a POST for larger requests.
     *
     * @link https://developer.twitter.com/en/docs/tweets/post-and-engage/api-reference/get-statuses-lookup
     * @param parameters
     */
    TweetsClient.prototype.statusesLookup = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = utils_1.createParams(parameters);
                        return [4 /*yield*/, base_1.doGetRequest('https://api.twitter.com/1.1/statuses/lookup.json' + params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Returns a collection of up to 100 user IDs belonging to users who have retweeted the Tweet specified by the id parameter.This method offers similar data to GET statuses / retweets / :id.
     *
     * @link https://developer.twitter.com/en/docs/tweets/post-and-engage/api-reference/get-statuses-retweeters-ids
     */
    TweetsClient.prototype.statusesRetweetersIds = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, base_1.doGetRequest('https://api.twitter.com/1.1/statuses/retweeters/ids.json')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Returns a collection of the 100 most recent retweets of the Tweet specified by the id parameter.
     *
     * @link https://developer.twitter.com/en/docs/tweets/post-and-engage/api-reference/get-statuses-retweets-id
     * @param parameters
     */
    TweetsClient.prototype.statusesRetweetsById = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = utils_1.createParams(parameters);
                        return [4 /*yield*/, base_1.doGetRequest('https://api.twitter.com/1.1/statuses/retweets/:id.json' + params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Returns the most recent Tweets authored by the authenticating user that have been retweeted by others. This timeline is a subset of the user's GET statuses / user_timeline.
     *
     * @link https://developer.twitter.com/en/docs/tweets/post-and-engage/api-reference/get-statuses-retweets_of_me
     * @param parameters
     */
    TweetsClient.prototype.statusesRetweetsOfMe = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = utils_1.createParams(parameters);
                        return [4 /*yield*/, base_1.doGetRequest('https://api.twitter.com/1.1/statuses/retweets_of_me.json' + params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Returns a single Tweet, specified by the id parameter. The Tweet's author will also be embedded within the Tweet.See GET statuses / lookup for getting Tweets in bulk (up to 100 per call). See also Embedded Timelines, Embedded Tweets, and GET statuses/oembed for tools to render Tweets according to Display Requirements.About GeoIf there is no geotag for a status, then there will be an empty <geo></geo> or "geo" : {}. This can only be populated if the user has used the Geotagging API to send a statuses/update.The JSON response mostly uses conventions laid out in GeoJSON. The coordinates that Twitter renders are reversed from the GeoJSON specification (GeoJSON specifies a longitude then a latitude, whereas Twitter represents it as a latitude then a longitude), eg: "geo": { "type":"Point", "coordinates":[37.78029, -122.39697] }
     *
     * @link https://developer.twitter.com/en/docs/tweets/post-and-engage/api-reference/get-statuses-show-id
     * @param parameters
     */
    TweetsClient.prototype.statusesShowById = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = utils_1.createParams(parameters);
                        return [4 /*yield*/, base_1.doGetRequest('https://api.twitter.com/1.1/statuses/show.json' + params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Note: favorites are now known as likes.Favorites (likes) the Tweet specified in the ID parameter as the authenticating user. Returns the favorite Tweet when successful.The process invoked by this method is asynchronous. The immediately returned Tweet object may not indicate the resultant favorited status of the Tweet. A 200 OK response from this method will indicate whether the intended action was successful or not.
     *
     * @link https://developer.twitter.com/en/docs/tweets/post-and-engage/api-reference/post-favorites-create
     * @param parameters
     */
    TweetsClient.prototype.favoritesCreate = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = utils_1.createParams(parameters);
                        return [4 /*yield*/, base_1.doPostRequest('https://api.twitter.com/1.1/favorites/create.json' + params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Note: favorites are now known as likes.Unfavorites (un-likes) the Tweet specified in the ID parameter as the authenticating user. Returns the un-liked Tweet when successful.The process invoked by this method is asynchronous. The immediately returned Tweet object may not indicate the resultant favorited status of the Tweet. A 200 OK response from this method will indicate whether the intended action was successful or not.
     *
     * @link https://developer.twitter.com/en/docs/tweets/post-and-engage/api-reference/post-favorites-destroy
     * @param parameters
     */
    TweetsClient.prototype.favoritesDestroy = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = utils_1.createParams(parameters);
                        return [4 /*yield*/, base_1.doPostRequest('https://api.twitter.com/1.1/favorites/destroy.json' + params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Destroys the status specified by the required ID parameter. The authenticating user must be the author of the specified status. Returns the destroyed status if successful.
     *
     * @link https://developer.twitter.com/en/docs/tweets/post-and-engage/api-reference/post-statuses-destroy-id
     * @param parameters
     */
    TweetsClient.prototype.statusesDestroyById = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = utils_1.createParams(parameters);
                        return [4 /*yield*/, base_1.doPostRequest('https://api.twitter.com/1.1/statuses/destroy/:id.json' + params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Retweets a tweet. Returns the original Tweet with Retweet details embedded.Usage Notes: This method is subject to update limits. A HTTP 403 will be returned if this limit as been hit. Twitter will ignore attempts to perform duplicate retweets. The retweet_count will be current as of when the payload is generated and may not reflect the exact count. It is intended as an approximation.
     *
     * @link https://developer.twitter.com/en/docs/tweets/post-and-engage/api-reference/post-statuses-retweet-id
     * @param parameters
     */
    TweetsClient.prototype.statusesRetweetById = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = utils_1.createParams(parameters);
                        return [4 /*yield*/, base_1.doPostRequest('https://api.twitter.com/1.1/statuses/retweet/:id.json' + params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Untweets a retweeted status. Returns the original Tweet with Retweet details embedded.Usage Notes: This method is subject to update limits. A HTTP 429 will be returned if this limit has been hit. The untweeted retweet status ID must be authored by the user backing the authentication token. An application must have write privileges to POST. A HTTP 401 will be returned for read-only applications. When passing a source status ID instead of the retweet status ID a HTTP 200 response will be returned with the same Tweet object but no action.
     *
     * @link https://developer.twitter.com/en/docs/tweets/post-and-engage/api-reference/post-statuses-unretweet-id
     * @param parameters
     */
    TweetsClient.prototype.statusesUnretweetById = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = utils_1.createParams(parameters);
                        return [4 /*yield*/, base_1.doPostRequest('https://api.twitter.com/1.1/statuses/unretweet/:id.json' + params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  Updates the authenticating user's current status, also known as Tweeting.For each update attempt, the update text is compared with the authenticating user's recent Tweets. Any attempt that would result in duplication will be blocked, resulting in a 403 error. A user cannot submit the same status twice in a row.While not rate limited by the API, a user is limited in the number of Tweets they can create at a time. If the number of updates posted by the user reaches the current allowed limit this method will return an HTTP 403 error.About Geo Any geo-tagging parameters in the update will be ignored if geo_enabled for the user is false (this is the default setting for all users, unless the user has enabled geolocation in their settings) The number of digits after the decimal separator passed to lat (up to 8) is tracked so that when the lat is returned in a status object it will have the same number of digits after the decimal separator. Use a decimal point as the separator (and not a decimal comma) for the latitude and the longitude - usage of a decimal comma will cause the geo-tagged portion of the status update to be dropped. For JSON, the response mostly uses conventions described in GeoJSON. However, the geo object coordinates that Twitter renders are reversed from the GeoJSON specification. GeoJSON specifies a longitude then a latitude, whereas Twitter represents it as a latitude then a longitude: "geo": { "type":"Point", "coordinates":[37.78217, -122.40062] } The coordinates object is replacing the geo object (no deprecation date has been set for the geo object yet) -- the difference is that the coordinates object, in JSON, is now rendered correctly in GeoJSON. If a place_id is passed into the status update, then that place will be attached to the status. If no place_id was explicitly provided, but latitude and longitude are, the API attempts to implicitly provide a place by calling geo/reverse_geocode. Users have the ability to remove all geotags from all their Tweets en masse via the user settings page. Currently there is no method to remove geotags from individual Tweets.
     *
     * @link https://developer.twitter.com/en/docs/tweets/post-and-engage/api-reference/post-statuses-update
     */
    TweetsClient.prototype.statusesUpdate = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, base_1.doPostRequest('https://api.twitter.com/1.1/statuses/update.json')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return TweetsClient;
}());
exports.default = TweetsClient;
