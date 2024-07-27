/**
 *  DeltaLog2 - log of current and recent historical deltas represented in the new Delta2 format
 *  This class is an refactoring of the older DeltaLog class, with the following goals and features:
 *  1. all the goals of Delta2 (simpler and shorter format with categorizations)
 *  2. separate data into 3 sections: current, recent, and previous
 *      - `current` is the same data as in delta2.json
 *      - `recent` are Delta2 records from the previous n hours
 *      - `previous` is a link to a deltaLog2.json file that starts where the recent section ends
 *      - in this way, the size of the file will be kept significantly smaller, which should make
 *        processing it more efficient
 *      - for most downstream users, polling and processing the most recent deltaLog2 file every few days
 *        can be done with just the data in the file
 *      - for others who access it more than a few days, they can get the full history of all changes
 *        with a few extra reads
 *  3. specify a Delta version number to help parsers
 *  4. minimize file storage since we have seen github's file size limits reached in the old deltaLog file

*  Intent is to log all deltas from the current delta to recent historical deltas,
 *  so key information is stored, and other systems using deltas as polling integration points
 *  can poll at any frequency less than the period
 *  defined in `.env`'s `CVES_DEFAULT_DELTA_LOG_HISTORY_IN_DAYS` environment variable
 *  (8 days is current default)
 *
 */
import { Delta2 } from './Delta2.js';
export declare class DeltaLog2 extends Array<Delta2> {
    static kDeltaLogFilename: string;
    static kDeltaLogFile: string;
    /** constructor */
    constructor();
    /**
     * prepends a delta to log
     * @param delta the Delta object to prepend
     */
    prepend(delta: Delta2): void;
}
