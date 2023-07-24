import { IsoDateString } from '../../../common/IsoDateString.js';
import { CveTweetData } from './CveTweetData.js';
export declare class TwitterLog {
    static kFilename: string;
    filepath: string;
    last_successful_tweet_timestamp: IsoDateString;
    newCves: CveTweetData[];
    tweetedCves: CveTweetData[];
    private constructor();
    /** reads in the recent activities into _activities */
    static fromLogfile(relFilepath?: string): TwitterLog;
    /** using Git and TwitterLog.kFilename, build up a new TwitterLog
     * @param start git log start time window
     * @param stop git log stop time window (defaults to now)
     * @param repository directory to get git info from (defaults to process.env.CVES_BASE_DIRECTORY)
     * @param twitterLogfile the path to the twitterlog file (defaults to TwitterLog.kFilename)
     */
    static fromGit(twitterLogfile?: string, repository?: string, start?: string, stop?: string): Promise<TwitterLog>;
    /**
     * adds a CveTweetData to the newCves queue iff it is not already in
     *  either the newCves nor the tweetedCves queues
     * @param data a CveTweetData object
     */
    addNew(data: CveTweetData): void;
    /**
     * returns the first newCve, BUT DOES NOT REMOVE IT in case the tweet failed
     */
    nextNew(): CveTweetData;
    setTweeted(data: CveTweetData): void;
    /**
     * adds data to tweetedCves list, and removes it from the newCves list
     * @param data the CveTweetData that was successfully tweeted
     */
    pushAsTweeted(data: CveTweetData): void;
    /**
     * cleans up the log:
     * 1. reverse chronologically orders tweetedCves
     * 2. truncates any tweetedCves older than timestamp
     * @param timestamp the ISO timestamp before which CVEs tweeted will be removed
     */
    cleanup(timestamp?: IsoDateString): void;
    /**
     * resets the 'last_successful_tweet_timestamp' to the specified ISO date
     */
    setLogDate(date?: IsoDateString): void;
    /** properly outputs this object in JSON.stringify() */
    toJSON(): {
        last_successful_tweet_timestamp: string;
        newCves: CveTweetData[];
        tweetedCves: CveTweetData[];
    };
    /** writes to TwitterLog.kFilename file
     *  @param relFilepath path to write to, defaults to the same filepath that was read from
     */
    writeLogfile(relFilepath?: string): void;
}
