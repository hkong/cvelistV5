/** provides READ-ONLY access git */
import { Response, SimpleGit, StatusResult } from 'simple-git';
import { IsoDateString } from '../../common/IsoDateString.js';
export { StatusResult, Response };
export declare type GitLogResult = {
    hash?: string;
    date?: IsoDateString;
};
export declare class GitAdapterRO {
    localDir: string;
    git: SimpleGit;
    /** constructor */
    constructor(localDir?: string | undefined);
    /** gets the latest commit hashes in reverse chronological order
     *  @param fileOrDirFullPath the full path to a file or directory, if not specified, defaults `./cves`
     *  @param maxCount the number of hashes to get (defaults to 1)
     *  Notes:
     *  - when result is [], it means there are no logs associated with that file
     *  - cannot currently deal with directories
     *  - cannot get logs on .gitignore'd files/dirs
     * @returns an array of GitLogResult
     */
    getLatestCommitHashes(fileOrDirFullPath?: string, maxCount?: number): Promise<GitLogResult[]>;
    /**
     * @param hash the commit hash
     * @param filePath the full path or path relative to the base of the repo.
     * @returns file contents at the given hash
     */
    getFileContentsAtHash(hash: string, filePath: string): Promise<string>;
}
