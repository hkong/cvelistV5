/**
 *  reader for DeltaLog2.
 *
 */
import { DeltaLog2 } from '../../core/delta/DeltaLog2.js';
export declare class DeltaLog2FsReader {
    static kDeltaLogFilename: string;
    static kDeltaLogFile: string;
    /** constructor */
    /** constructs a DeltaLog2 by reading in the deltaLog2 file
    //  *  @param pruneOlderThan optional ISO date, any items older than that date will
    //  *    not be included in the resulting DeltaLog
     *  @param relFilepath optional path to the logfile (defaults to cves/deltaLog.json)
     *
    */
    static read(relFilepath?: string): DeltaLog2;
}
