/**
 *  FsAdapterRO performs synchronous file system operations with no side effects
 *  This class is used as a superclass for mutating file system adapters (e.g., FsAdapter)
 *  as well as more specialized file system adapters (e.g., Delta2Fs)
 */
export declare type FsAdapterType = "RO" | "Mutating";
export declare class FsAdapterRO {
    private _relfilepath;
    get relFilepath(): string;
    /** constructor for the FsAdapter object
     *  @param filepath the relative path this adapter will work with
     *  Note that in this class, once the relfilepath is set, it should not be modified
     *  If you need to modify it, create a new one of the new relfilepath
     */
    constructor(relfilepath: any);
    /** always returns false for this class */
    canMutate(): boolean;
    /**
     * synchronously returns whether this path exists
     * @returns true iff the specified path exists
     */
    exists(): boolean;
    /** synchronously writes a string to an output file
     *  @param data the data preformatted as a string (this means any formatting must be done before the call)
    */
    readAll(): string;
    /**
     * synchronously returns whether the path exists
     * (very thin wrapper for fs.existsSync which is NOT deprecated, unlike fs.exists)
     * @param path the full or partial path to test
     * @returns true iff the specified path exists
     */
    static exists(path: string): boolean;
}
