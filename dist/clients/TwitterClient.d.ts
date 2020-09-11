import IClientOptions from '../base/IClientOptions';
import BasicsClient from './BasicsClient';
import AccountsAndUsersClient from './AccountsAndUsersClient';
import TweetsClient from './TweetsClient';
import DirectMessagesClient from './DirectMessagesClient';
import TrendsClient from './TrendsClient';
import GeoClient from './GeoClient';
declare class TwitterClient {
    private basicsClient;
    private accountsAndUsersClient;
    private tweetsClient;
    private directMessagesClient;
    private trendsClient;
    private geoClient;
    /**
     * Provide Twitter API Credentials and options
     * @param options
     */
    constructor(options: IClientOptions);
    get basics(): BasicsClient;
    get accountsAndUsers(): AccountsAndUsersClient;
    get tweets(): TweetsClient;
    get directMessages(): DirectMessagesClient;
    get trends(): TrendsClient;
    get geo(): GeoClient;
}
export default TwitterClient;
