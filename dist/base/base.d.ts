import IClientOptions from './IClientOptions';
export declare const setOptions: (options: IClientOptions) => void;
export declare const updateOptions: (options: Partial<IClientOptions>) => void;
export declare const doGetRequest: <T>(url: string) => Promise<T>;
export declare const doPostRequest: <T>(url: string, body?: any) => Promise<T>;
