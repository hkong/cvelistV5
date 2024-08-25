/** provides git functions that change the state of git, e.g., add, commit, reset, etc.
 *
 *  Note that because the git utility (and thus this class and the SimpleGit library this class
 *  depends on) is meant to be used by one process at a time in each "clone" (i.e., each directory
 *  that contains a `.git` subdirectory), there are operations that is not easily used or tested
 *  in an asynchronous environment (e.g., cveUtils and jest tests).
 *
 *  Specifically, the methods `status()`, `add()`, and "rm()" can have non-deterministric behavior
 *  when used asynchronously in multiple places.
*/
import { CommitResult, Response, SimpleGit } from 'simple-git';
import { GitAdapter } from './GitAdapter.js';
export declare class GitWriter {
    baseDir: string;
    gitAdapter: GitAdapter;
    git: SimpleGit;
    /** constructor */
    constructor(baseDir?: string | undefined);
    static genericCallback(err: any): void;
    /** git add files to git stage
     *  Note that this operation may not be deterministic if, for example, the `rm` method is called
     *  asynchronously elsewhere in the app.  See the note for this class above for more details.
     *
     *  @param filepathFromGitRoot a single file path or array of file paths to be added to stage
     *    Note that filepathFromGitRoot must be partial paths from the git root specified in the constructor and must be under the git root
     *    Note that filepathFromGitRoot should NOT be a directory
     *
     */
    add(filepathFromGitRoot: string | string[]): Promise<Response<string>>;
    /** git rm files from git stage
     *  Note that this operation may not be deterministic if, for example, the `rm` method is called
     *  asynchronously elsewhere in the app.  See the note for this class above for more details.
     *
     *  @param fullPathFiles a single file or array of files to be added to stage
     *    Note that fullPathFiles must be either full path specs or partial paths from this.baseDir
     *    Note that fullPathFiles should NOT be a directory
    */
    rm(fullPathFiles: string | string[]): Promise<Response<void>>;
    /**
     * commits staged files
     * @param msg commit message
     * @returns CommitResult
     *
     */
    commit(msg: string): Promise<CommitResult>;
    /**
     * resets the current branch by one commit if there is an unpushed commit, essentially uncommitting the last local commit
     * @return true iff an uncommit happened
     * @todo we should be able to specify a number other than 1, but default it to 1 since that is what we are currently using
     */
    uncommitLocal(): Promise<boolean>;
}
