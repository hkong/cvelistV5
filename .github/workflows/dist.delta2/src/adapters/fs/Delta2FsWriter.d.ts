/**
 *  Delta2 file writer
 *
 */
import { Delta2 } from '../../core/delta/Delta2.js';
import { FsAdapter } from './FsAdapter.js';
import { Delta2FsReader } from './Delta2FsReader.js';
export { Delta2FsReader };
export declare class Delta2FsWriter {
    /** constructs a Delta2 by reading in the delta2 file
     *  @param relFilepath optional path to the delta2 file (defaults to cves/delta2.json)
     *  @param returns the FsAdapter used to write the file, so you can call rm() to remove it if needed
     *
    */
    static write(delta: Delta2, relFilepath?: string): FsAdapter;
}
