/**
 *  Delta2 file reader
 *
 */
import { Delta2 } from '../../core/delta/Delta2.js';
export declare class Delta2FsReader {
    static kDelta2Filename: string;
    static kDelta2Fullpath: string;
    /** constructs a Delta2 by reading in the delta2 file
     *  @param relFilepath optional path to the delta2 file (defaults to cves/delta2.json)
     *
    */
    static read(relFilepath?: string): Delta2;
}
