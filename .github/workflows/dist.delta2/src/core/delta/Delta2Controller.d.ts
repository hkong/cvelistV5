import { Delta2 } from './Delta2.js';
import { FsAdapter } from '../../adapters/fs/FsAdapter.js';
export declare type Delta2ControllerOptions = {
    delta1Filepath?: string;
    delta2Filepath?: string;
    runAfterDelta1?: boolean;
};
/**
 * Manager class for manipulating Delta2.  This is intended to replace the lgoic in DeltaCommand
 * as we move from Delta 1 to Delta2
 */
export declare class Delta2Controller {
    _options: Delta2ControllerOptions;
    delta2: Delta2;
    /** constructor */
    constructor(options?: Delta2ControllerOptions);
    /** builds the delta2.json and deltaLog2.json files */
    buildDelta2(): Delta2;
    /** outputs the delta2 */
    writeDelta2(): FsAdapter;
}
