/** Provides "singleton" access to the git library at a
 *  specified git init'ed directory
*/
import { SimpleGit, StatusResult } from 'simple-git';
export { StatusResult, };
export declare class GitAdapter {
    gitRoot: string;
    baseDir: string;
    git: SimpleGit;
    /** private constructor
     *  @param baseDir the non-optional local git init'ed directory,
     *  in other words, the directory where the `.git` hidden directory
     *  that git uses is located.
     *
     *  Note that baseDir is required here, and cannot be null or
     *  undefined, because the only access to this construtor would
     *  have properly initialized the baseDir if one was not specified
    */
    private constructor();
    /** this is the lazily-initialized "singleton":
     *  there is a single GitAdapter (and thus a single git library instance
     *  for each baseDir (fullpath).  This correlates to
     *  the .git directory of each git init'ed directory,
     *  and can be thought of as the
     *  singleton for that directory.
     *
     *  @todo validate:  The git lock that is used by git and the
     *  git library is local to each .git directory
     *
     *  Note:  the name of the fully qualified path is the key in
     *  this object.  It isn't Set, but an Object with keys.  No duplicates
     *  are possible because of the lazy initialization
     *
     *  If a key is undefined, it means that it has not yet been initialized
     *  If a key is null, it means that there is an error and GitAdapter cannot
     *     work with that directory.
     */
    static singletonGitAdapter: {};
    static gitRootPath: string;
    /** finds and returns the directory that contains the .git directory
     *  @param start optional starting point, which should be the git root or a subdirectory under it
     *               if not specified, it defaults to process.cwd()
     *  @return the directory that contains the .git directory, or null if none are found
    */
    static findGitRoot(start?: string): string;
    /** lazily returns the GitAdapter at baseDir */
    static adapter(baseDir?: string): GitAdapter;
    static git(baseDir?: string): SimpleGit;
}
