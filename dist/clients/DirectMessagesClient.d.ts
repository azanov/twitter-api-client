import { CustomProfilesByIdParams } from '../interfaces/params/CustomProfilesParams';
import { DirectMessagesEventsShowParams, DirectMessagesEventsNewMessageCreateParams } from '../interfaces/params/SendingAndReceivingEventsParams';
import { DirectMessagesIndicateTypingParams } from '../interfaces/params/TypingIndicatorAndReadReceiptsParams';
import { DirectMessagesWelcomeMessagesRulesShowParams, DirectMessagesWelcomeMessagesShowParams, DirectMessagesWelcomeMessagesNewParams, DirectMessagesWelcomeMessagesRulesNewParams } from '../interfaces/params/WelcomeMessagesParams';
import CustomProfilesById from '../interfaces/types/CustomProfilesByIdTypes';
import DirectMessagesEventsShow from '../interfaces/types/DirectMessagesEventsShowTypes';
import DirectMessagesEventsNewMessageCreate from '../interfaces/types/DirectMessagesEventsNewMessageCreateTypes';
import DirectMessagesWelcomeMessagesRulesShow from '../interfaces/types/DirectMessagesWelcomeMessagesRulesShowTypes';
import DirectMessagesWelcomeMessagesShow from '../interfaces/types/DirectMessagesWelcomeMessagesShowTypes';
import DirectMessagesWelcomeMessagesNew from '../interfaces/types/DirectMessagesWelcomeMessagesNewTypes';
import DirectMessagesWelcomeMessagesRulesNew from '../interfaces/types/DirectMessagesWelcomeMessagesRulesNewTypes';
declare class DirectMessagesClient {
    /**
     * Returns a custom profile that was created with POST custom_profiles/new.json.
     *
     * @link https://developer.twitter.com/en/docs/direct-messages/custom-profiles/api-reference/get-profile
     * @param parameters
     */
    customProfilesById(parameters: CustomProfilesByIdParams): Promise<CustomProfilesById>;
    /**
     *  Returns a single Direct Message event by the given id.
     *
     * @link https://developer.twitter.com/en/docs/direct-messages/sending-and-receiving/api-reference/get-event
     * @param parameters
     */
    directMessagesEventsShow(parameters: DirectMessagesEventsShowParams): Promise<DirectMessagesEventsShow>;
    /**
     *  Publishes a new message_create event resulting in a Direct Message sent to a specified user from the authenticating user. Returns an event if successful. Supports publishing Direct Messages with optional Quick Reply and media attachment. Replaces behavior currently provided by POST direct_messages/new.Requires a JSON POST body and Content-Type header to be set to application/json. Setting Content-Length may also be required if it is not automatically.
     *
     * @link https://developer.twitter.com/en/docs/direct-messages/sending-and-receiving/api-reference/new-event
     * @param parameters
     */
    directMessagesEventsNewMessageCreate(parameters: DirectMessagesEventsNewMessageCreateParams): Promise<DirectMessagesEventsNewMessageCreate>;
    /**
     *  Displays a visual typing indicator in the recipient’s Direct Message conversation view with the sender. Each request triggers a typing indicator animation with a duration of ~3 seconds.
     *
     * @link https://developer.twitter.com/en/docs/direct-messages/typing-indicator-and-read-receipts/api-reference/new-typing-indicator
     * @param parameters
     */
    directMessagesIndicateTyping(parameters: DirectMessagesIndicateTypingParams): Promise<unknown>;
    /**
     *  Returns a Welcome Message Rule by the given id.
     *
     * @link https://developer.twitter.com/en/docs/direct-messages/welcome-messages/api-reference/get-welcome-message-rule
     * @param parameters
     */
    directMessagesWelcomeMessagesRulesShow(parameters: DirectMessagesWelcomeMessagesRulesShowParams): Promise<DirectMessagesWelcomeMessagesRulesShow>;
    /**
     *  Returns a Welcome Message by the given id.
     *
     * @link https://developer.twitter.com/en/docs/direct-messages/welcome-messages/api-reference/get-welcome-message
     * @param parameters
     */
    directMessagesWelcomeMessagesShow(parameters: DirectMessagesWelcomeMessagesShowParams): Promise<DirectMessagesWelcomeMessagesShow>;
    /**
     *  Creates a new Welcome Message that will be stored and sent in the future from the authenticating user in defined circumstances. Returns the message template if successful. Supports publishing with the same elements as Direct Messages (e.g. Quick Replies, media attachments).Requires a JSON POST body and Content-Type header to be set to application/json. Setting Content-Length may also be required if it is not automatically.See the Welcome Messages overview to learn how to work with Welcome Messages.
     *
     * @link https://developer.twitter.com/en/docs/direct-messages/welcome-messages/api-reference/new-welcome-message
     * @param parameters
     */
    directMessagesWelcomeMessagesNew(parameters: DirectMessagesWelcomeMessagesNewParams): Promise<DirectMessagesWelcomeMessagesNew>;
    /**
     *  Creates a new Welcome Message Rule that determines which Welcome Message will be shown in a given conversation. Returns the created rule if successful.Requires a JSON POST body and Content-Type header to be set to application/json. Setting Content-Length may also be required if it is not automatically.Additional rule configurations are forthcoming. For the initial beta release, the most recently created Rule will always take precedence, and the assigned Welcome Message will be displayed in the conversation.See the Welcome Messages overview to learn how to work with Welcome Messages.
     *
     * @link https://developer.twitter.com/en/docs/direct-messages/welcome-messages/api-reference/new-welcome-message-rule
     * @param parameters
     */
    directMessagesWelcomeMessagesRulesNew(parameters: DirectMessagesWelcomeMessagesRulesNewParams): Promise<DirectMessagesWelcomeMessagesRulesNew>;
}
export default DirectMessagesClient;
