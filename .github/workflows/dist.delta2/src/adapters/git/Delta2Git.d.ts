import { Delta } from '../../core/Delta.js';
import { Delta2, DeltaCategories } from '../../core/delta/Delta2.js';
import { CveId } from '../../core/CveId.js';
export declare class Delta2Git {
    static kDelta1Filename: string;
    /** this is a very specialized function for beta deployment in July 2024
     *  for beta testing Delta2.  Because we're using a different runtime for generating
     *  Delta2, it means that by the time this function is called
     *  1. delta.json and deltaLog.json are already written and committed
     *  2. the primary nodejs run for updating the repository has already committed all
     *     CVEs and has exited and we're back in the bash shell in the github action VM
     *  3. we have not yet called `git push` in the bash shell
     *  4. the github action will call this ./dist.delta2 runtime, which will call this method
     *
     *  When the beta testing is completed, this function will be modified to do the delta2 "inline"
     *  in the main runtime using a different method (calculateDelta2()) with appropriate logic,
     *  at which time this method will be deprecated.
     */
    static calculateDelta2FromDelta1(delta1Path?: string): Promise<Delta2>;
    /** calculates the categories of a CVE ID into one of the categories
     *  @param cveId a CVE ID or string to be added
     *  @param cvesPath the path to look for the cve
     */
    static calculateCveChangeCategories(cveId: CveId | string, cvesPath: string): Promise<DeltaCategories[]>;
    /** converts a Delta1 object to a Delta2 object */
    static convertDelta1ToDelta2(delta1: Delta): Delta2;
}
