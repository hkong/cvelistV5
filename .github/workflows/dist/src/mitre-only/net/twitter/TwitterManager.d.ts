/**
 *  Twitter activities using Twitter API v2.0
 *
 *  twitter.json is of the format described in TwitterLog.ts.
 *
 *  The file is trimmed to the last process.env.TWITTER_JSON_KEEP_MINS
 *    - to prevent retweeting the same CVE
 *    - have a large enough buffer in case github actions fail
 */
import { IsoDateString } from '../../../common/IsoDateString.js';
import { CveTweetData } from './CveTweetData.js';
export interface TwitterResp {
    id: string;
    text: string;
}
export declare class TwitterManager {
    static credentials: {
        appKey: string;
        appSecret: string;
        accessToken: string;
        accessSecret: string;
    };
    static __cveUrl: string;
    /** constructor */
    private constructor();
    static tweetNewCves(): Promise<number>;
    static setTweeterLogDate(date: IsoDateString): Promise<IsoDateString>;
    /**
     *
     * @param content string to include in tweeet.
     *                Note that this will automatically be trimmed to fit Twitter's text size
     *                along with additional data required by the CVE tweet message
     * @returns
     */
    static tweet(content: string): Promise<TwitterResp>;
    static findUntweeted(start: IsoDateString, stop: IsoDateString, dir: string): Promise<CveTweetData[]>;
}
