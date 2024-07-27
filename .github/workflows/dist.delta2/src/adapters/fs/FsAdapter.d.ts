/**
 *  FsAdapter performs synchronous file system operations in a generic way
 *  This class is used as a superclass for more specialized file system adapters (e.g., Delta2Fs)
 */
import { FsAdapterRO, FsAdapterType } from './FsAdapterRO.js';
export { FsAdapterRO, FsAdapterType };
export declare class FsAdapter extends FsAdapterRO {
    /** constructor for the FsAdapter object
     *  @param filepath the relative path this adapter will work with
     *  Note that in this class, once the relfilepath is set, it should not be modified
     *  If you need to modify it, create a new one of the new relfilepath
     */
    constructor(relfilepath: any);
    /** always returns true for this class */
    canMutate(): boolean;
    /** synchronousllly writes a string to an output file
     *  @param data the data preformatted as a string (this means any formatting must be done before the call)
    */
    writeString(data: string): FsAdapter;
    /** synchronousllly copies a file or directory to a destination
     *  @param srcPath the path where the source file or directory is
     *  @param destPath the path to copy srcPath to
    */
    cp(srcPath: string, destPath: string): void;
    /**
     * synchronously removes this file iff it exists
     * @returns true if the file was removed, false if it did not exist in the first place
     */
    rm(): boolean;
    /**
     * synchronously removes the specified file iff it exists
     * @param path
     * @returns true if the file was removed, false if it did not exist in the first place
     */
    static rm(path: string): boolean;
}
