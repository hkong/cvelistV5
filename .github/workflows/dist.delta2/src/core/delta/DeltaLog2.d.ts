/**
 *  DeltaLog2 - log of current and recent historical deltas represented in the new Delta2 format
 *  This class is an refactoring of the older DeltaLog class, with the following goals and features:
 *  1. all the goals of Delta2 (simpler and shorter format with categorizations)
 *  2. separate data into 3 sections: current, recent, and previous
 *      - `current` is the same data as in delta2.json
 *      - `recent` are Delta2 records from the previous n days
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
import { IsoDateString } from '../../common/IsoDateString.js';
import { Delta2 } from './Delta2.js';
/** a single "pointer" to another instance of DeltaLog2
 *
 *  This is used to enable a DeltaLog2 to reconstruct an entire
 *  DeltaLog2 history by chaining previous DeltaLog2s together.
 *
 *  Currently, this only reconstructs up to the beginning of Delta2, but
 *  if necessary, it is possible to reconstruct all the history in cvelistV5,
 *  but requires much more work.  It would require adding in the 1.0 format,
 *  the 0.0 format when it was part of activitiesLog, and even previous to that.
 *  Since there is no requirement for this yet, the implementation stops
 *  at the first DeltaLog2.
 */
export declare type DeltaLog2Pointer = {
    /** earliest Delta2 in DeltaLog2 pointed to by this DeltaLog2Pointer */
    earliestFetchTime: IsoDateString;
    /** latest Delta2 in DeltaLog2 pointed to by this DeltaLog2Pointer */
    latestFetchTime: IsoDateString;
    /** the git hash of the DeltaLog2.json file
     *
     *  You can also use this directly in GitReader.getFileContentsAtHash(githash,'deltaLog2.json')
     *
     *  Note: to build a github permalink to the actual deltaLog2.json, use the string template
     *  `https://raw.githubusercontent.com/CVEProject/cvelistV5/${githash}/cves/deltaLog2.json
     *
     *  Note: to access the deltaLog2.json file locally using git, use
     *  `${githash}:deltaLog2.json`.
     *  For example, to show the content in git:
     *  `git show <githash>:deltaLog2.json --relative=<repository root>`
     */
    githash: string;
    /** a permalink to the DeltaLog2.json file on GitHub
     *  @deprecated
     */
    github?: string;
    /** the "hash:filename" of the DeltaLog2.json file for manipulating with git locally
     *  @deprecated
    */
    git?: string;
};
export declare class DeltaLog2 extends Array<Delta2> {
    /** the default file name of the deltaLog2.json file */
    static kDeltaLogFilename: string;
    /** the default partial path (from root of repository) to deltaLog2.json */
    static kDeltaLogFilePartialPath: string;
    version: string;
    /** the previous section, containing DeltaLog2Pointer to a deltalog2.json
     *  in a previous commit.  If this is not defined,
     *  then this is because of one of the following:
     *  - it was not read in correctly by DeltaLog2FsReader
     *  - it was not previously written correctly by DeltaLog2FsWriter
     *  - this is a arbitrarily built DeltaLog2 object, and history
     *    is not relevant or will be built later in the process
     *  - this is the oldest deltaLog2.json file in the git history (rare)
     */
    previous?: DeltaLog2Pointer;
    /** constructor */
    constructor();
    /**
     * prepends a delta to log
     * @param delta the Delta object to prepend
     */
    prepend(delta: Delta2): void;
    /** sorts the Deltas in place by the `fetchTime` property
     *  @param direction: one of
     *            - "latestFirst" - reverse chronological order (default)
     *            - "latestLast" - chronological order
    */
    sortByFetchTme(direction?: "latestFirst" | "latestLast"): DeltaLog2;
}
