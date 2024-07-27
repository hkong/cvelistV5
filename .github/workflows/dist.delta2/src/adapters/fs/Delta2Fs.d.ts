/**
 *  Delta2Fs performs file system operations for Delta2.
 */
import { Delta2 } from '../../core/delta/Delta2.js';
import { FsAdapterRO, FsAdapterType } from './FsAdapterRO.js';
import { FsAdapter } from './FsAdapter.js';
export declare class Delta2Fs {
    static kDelta2Filename: string;
    static kErrorROCannotWrite: string;
    static kErrorROCannotRm: string;
    fsAdapter: FsAdapterRO | FsAdapter;
    constructor(relFilepath?: string, type?: FsAdapterType);
    read(): Delta2;
    /** writes the delta2 to a JSON file
     *  @param delta the Delta2 object to write out
    */
    write(delta: Delta2): void;
    rm(): void;
}
