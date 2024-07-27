/**
 *  performs file system operations for DeltaLog2.
 *
 */
import { DeltaLog2 } from '../../core/delta/DeltaLog2.js';
export declare class DeltaLog2Fs {
    static kDeltaLogFilename: string;
    static kDeltaLogFile: string;
    /** constructor */
    /** constructs a DeltaLog by reading in the deltaLog file
     *  @param pruneOlderThan optional ISO date, any items older than that date will
     *    not be included in the resulting DeltaLog
     *  @param relFilepath optional path to the logfile (defaults to cves/deltaLog.json)
     *
    */
    static read(relFilepath?: string): DeltaLog2;
    /** writes deltas to a file
     *  @param relFilepath optional relative or full filepath
     *  @returns true iff the file was written (which only happens when
     *    there the [0] delta has changes)
      */
    static write(deltaLog: DeltaLog2, relFilepath?: string): boolean;
}
