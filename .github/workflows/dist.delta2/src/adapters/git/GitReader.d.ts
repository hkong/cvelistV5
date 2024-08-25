/** Provides READ-ONLY access git functions, e.g., log, status
 *
 *  Note that because the git utility (and thus this class and the SimpleGit library this class
 *  depends on) is meant to be used by one process at a time in each "clone" (i.e., each directory
 *  that contains a `.git` subdirectory), there are operations that is not easily used or tested
 *  in an asynchronous environment (e.g., cveUtils and jest tests).
 *
 *  Specifically, the methods `status()`, `add()`, and "rm()" can have non-deterministric behavior
 *  when used asynchronously in multiple places.
*/
import { StatusResult } from 'simple-git';
import { IsoDateString } from '../../common/IsoDateString.js';
export { StatusResult, };
export declare type GitLogResult = {
    hash?: string;
    date?: IsoDateString;
};
export declare class GitReader {
    baseDir: string;
    gitAdapter: any;
    /** constructor */
    constructor(baseDir?: string | undefined, checkout?: string);
    /** returns the git status
     *  Note that this operation may not be deterministic if, for example, the `rm` method is called
     *  asynchronously elsewhere in the app.  See the note for this class above for more details.
     *
     *  Note that while StatusResult shows files with paths relative to pwd, working
     *  with those files (for example, add or rm) requires a full path
     *
     *  response is Promise to an object with these properties
     *  {
     *    not_added: [],  // untracked
     *    conflicted: [], // conflicts (untested)
     *    created: [],    // added (untested)
     *    deleted: [],    // deleted (untested)
     *    modified: [],   // modified (untested)
     *    renamed: [],    // renamed (untested)
     *    files: [],      // file by file status with index (?) and working_dir representing state (e.g., A, M, D, R, etc.)
     *    staged: [],     // staged (untested)
     *    ahead: 0,       // ahead of remote (untested)
     *    behind: 0,      // behind remote (untested)
     *    current: "main",
     *    tracking: "origin/main",
     *    detached: false
     *  }
     */
    status(): Promise<StatusResult>;
    /** returns true iff there are changes (after applying .gitignore settings) */
    hasChanges(): Promise<boolean>;
    /** returns information about commits using log
     *  - Note that unlike the command line log, the default is to return only the latest 2
     *    commits (not all as in the command line).
     *  - Note also that all 3 optional parameters can be used at the same time
     *  @param aPath path to the file/directory you want to get info from
     *  @param maxCount optional number of commits to return.  Pass in '-1' for all commits.  default is 2
     *  @param startDate optional starting timestamp of log
     *  @param stopDate optional ending timestamp of log
    */
    getCommits(aPath: string, maxCount?: number, startDate?: IsoDateString | string, stopDate?: IsoDateString | string): Promise<GitLogResult[]>;
    /** gets the latest commit hashes in reverse chronological order
     *  @param fileOrDirFullPath the full path to a file or directory, if not specified, defaults `./cves`
     *  @param maxCount the number of hashes to get (defaults to 1)
     *  Notes:
     *  - when result is [], it means there are no logs associated with that file
     *  - cannot currently deal with directories
     *  - cannot get logs on .gitignore'd files/dirs
     *  @returns an array of GitLogResult
     */
    getLatestCommitHashes(fileOrDirFullPath?: string, maxCount?: number): Promise<GitLogResult[]>;
    /**
     * @param hash the commit hash
     * @param filePath the full path or path relative to the base of the repo.
     * @returns file contents at the given hash
     */
    getFileContentsAtHash(hash: string, filePath: string): Promise<string>;
}
