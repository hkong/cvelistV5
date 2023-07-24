import { Command } from 'commander';
import { GenericCommand } from '../../commands/GenericCommand.js';
/** Command to tweet newly published CVEs */
export declare class TwitterCommand extends GenericCommand {
    constructor(name: string, program: Command);
    run(options: any): Promise<void>;
}
