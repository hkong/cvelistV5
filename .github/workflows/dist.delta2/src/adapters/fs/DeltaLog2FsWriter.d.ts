/**
 *  performs file system operations for DeltaLog2.
 *
 */
import { DeltaLog2 } from '../../core/delta/DeltaLog2.js';
export declare class DeltaLog2FsWriter {
    static kDeltaLogFilename: string;
    static kDeltaLogFile: string;
    /** constructor */
    /** writes deltas to a file
     *  @param relFilepath optional relative or full filepath
     *  @returns true iff the file was written (which only happens when
     *    the [0] delta has changes)
      */
    static write(deltaLog: DeltaLog2, relFilepath?: string): boolean;
}
