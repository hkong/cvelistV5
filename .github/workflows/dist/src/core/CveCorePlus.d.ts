/**
 *  CveCorePlus extends CveCore by adding things that are useful
 *  for various purposes (e.g., activity logs, twitter):
 *      description from container.cna.description
 */
import { CveId } from './CveId.js';
import { CveCore } from './CveCore.js';
export { CveId } from './CveId.js';
export { CveCore } from './CveCore.js';
export declare class CveCorePlus extends CveCore {
    description?: string;
    /** optional field for storing timestamp when the update github action added
     *  this to the repository
     */
    /**
     * constructor which builds a minimum CveCore from a CveId or string
     * @param cveId a CveId or string
     */
    constructor(cveId: string | CveId);
    /**
     * builds a full CveCorePlus from a CveCore
     * @param cveCore a CveCore object
     * @returns a CveCorePlus object
     */
    static fromCveCore(cveCore: CveCore): CveCorePlus;
    /**
     * update CveCorePlus with additional data from the repository
     * @returns true iff a JSON file was found and readable to fill in
     * ALL the fields in the CveCorePlus data structure
     */
    updateFromLocalRepository(): boolean;
}
