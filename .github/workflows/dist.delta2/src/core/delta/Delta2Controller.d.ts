import { Delta2 } from './Delta2.js';
import { DeltaLog2 } from './DeltaLog2.js';
export declare type Delta2ControllerOptions = {
    delta1Filepath?: string;
    delta2Filepath?: string;
    deltaLog2Filepath?: string;
    runAfterDelta1?: boolean;
};
/**
 * Manager class for manipulating Delta2.  This is intended to replace the lgoic in DeltaCommand
 * as we move from Delta 1 to Delta2
 */
export declare class Delta2Controller {
    _options: Delta2ControllerOptions;
    delta2: Delta2;
    deltaLog2: DeltaLog2;
    /** constructor */
    constructor(options?: Delta2ControllerOptions);
    /** returns true iff there are changes in the local directory that can/should be committed and pushed */
    hasDelta(): Promise<boolean>;
    /** uncommit previously committed cves, delta, deltaLog so we can add delta2 and new commit message
     *  @return true iff an uncommit happened
    */
    uncommitDelta1(): Promise<boolean>;
    /** uncommit previously committed cves, delta, deltaLog so we can add delta2 and new commit message */
    commitDelta2(): Promise<void>;
    /** builds the delta2.json and deltaLog2.json files */
    buildDelta2(): Promise<Delta2>;
    /** outputs the delta2 */
    writeDelta2(): void;
}
