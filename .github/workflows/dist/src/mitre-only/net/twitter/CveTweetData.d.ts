import { CveId } from '../../../core/CveId.js';
import { CveCorePlus } from '../../../core/CveCorePlus.js';
import { IsoDateString } from '../../../common/IsoDateString.js';
export declare class CveTweetData {
    cveId: CveId;
    datePublished: IsoDateString | undefined;
    tweeted: IsoDateString | undefined;
    private _description;
    get description(): string;
    set description(str: string);
    private _tweetText;
    /** returns the tweet text */
    get tweetText(): string;
    /** sets the tweetText, overwriting what was already built in the constructor
     * @param str the tweet text
     */
    set tweetText(str: string);
    buildTweetText(): string;
    detail: CveCorePlus;
    /**
     * constructs a CveTweetData
     * @param cveId required CveId
     * @param description required full description text
     * @param datePublished optional date published
     * @param tweetText calculated or copied text to be tweeted
     * @param tweeted calcuated or copied timestamp when tweeted
     */
    constructor(cveId: CveId, description?: string, datePublished?: IsoDateString | undefined, tweetText?: string, tweeted?: IsoDateString);
    /** builds a CveTweetData from a CveCorePlus object */
    static fromCveCorePlus(cvep: CveCorePlus): CveTweetData;
    /**
     * Builds a CveTweetData object out of the parameters provided, including
     * the trimmed version of the tweet text, built from the parameters
     * @param cveId the CVE ID
     * @param description the CVE description
     * @param datePublished the published date of the CVE
     * @returns a string ready to be tweeted
     */
    static buildCveTweetText(cveId: CveId, description: string, datePublished: IsoDateString): string;
    toJSON(): {
        cveId: string;
        description: string;
        datePublished: string;
        tweetText: string;
        tweeted: string;
    };
    /**
     * returns true iff this.tweeted is set
     */
    isTweeted(): boolean;
    /**
     * sets the tweeted property to the current date
     */
    setTweeted(): IsoDateString;
}
