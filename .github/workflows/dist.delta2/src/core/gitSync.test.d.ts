/**
 * This is a special test file.
 * Due to git acting as a singleton, testing multiple instances of code that utilizes git asynchronously are practically garunteed to cause race condition issues.
 * This file handles the execution of these problematic tests by running them in a syncronus sequence via describe blocks.
 *
 * For testing direct or indirect usage of the git "singleton":
 *      1. Export said tests into an executable function.
 *          1a. Include additional supporting functions, constants, [before|After][All|Each], etc.
 *          1b. Exporting multiple tests to be run independantly is allowed.
 *          1_Example:
 *              See git.test.ts -> `export const GitTestsUsingGit = function () { ... }`
 *      2. Import said tests into the git.test.ts file.
 *          2_Example:
 *              import { GitTestsUsingGit } from './git.test.js';
 *      3. Run the imported executable function for said tests in its own describe block in the git.test.ts.
 *          3a. Add a descriptive name for the describe block.
 *          3_Example:
 *              describe(`Git.ts::Git class`, GitTestsUsingGit);
 */
export declare const DeltaTestsUsingGit1: () => void;
export declare const DeltaTestsUsingGit2: () => void;
