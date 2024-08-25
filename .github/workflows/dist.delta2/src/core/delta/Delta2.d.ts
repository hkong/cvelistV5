/**
 *  This is the Delta2 class.  A record represented in a Delta2 class is a list of changes to the /cves directory since the last git commit.
 *  This class is an refactoring of the older Delta class, with the following goals and features:
 *  1. store a simpler list, omitting information that can be assembled or accessed elsewhere (e.g., store just the CVE ID rather than the full path to the CVE in the github repository)
 *  2. separate changes in CVEs into categories for easier assessment of next steps for downstream users (e.g., cna-new, cna-updated, CISA-ADP, Secretariat-ADP, etc.)
 *  3. clarify what fetchTime means in all commands
 *  4. specify a Delta version number to help parsers
 *  5. minimize file storage since we have seen github's file size limits reached in the old deltaLog file
 */
import { CveId } from '../CveId.js';
import { IsoDateString } from '../../common/IsoDateString.js';
export declare type DeltaCategories = string | "cna-new" | "cna-updated" | "cna-rejected" | "adp" | "unchanged" | // CVE was unchanged (this should not happen because that CVE should not have gotten into this list)
"unknown" | // an unknown change to a CVE occurred (i.e., not any of the other categories, this should not happen)
"deleted";
export declare class Delta2 {
    /** fetchTime is the time that the CVE data was queried/fetched
     *  While this is simple in concept, there are constraints for making this value accurate.
     *
     *  In order to make this as accurate as possible, the following information
     *  for each action is described:
     *
     *  1. When this value is undefined, nothing should be assumed about the fetchTime.  This should rarely happen
     *  2. update - the timestamp when the request is made to the server
     *     - NOT the time when the response is received)
     *  3. rebuild - the time when the first page is requested
     *     - NOT the time the summary was requested nor the time the last page was received
     *       - while the database could have been updated in the long time it takes to do a rebuild,
     *         this more pessimistic time stamp should be less error prone when debugging a problem
     *
     */
    private _fetchTime?;
    get fetchTime(): IsoDateString;
    set fetchTime(value: IsoDateString | string | "undetermined");
    /** the map containing all the categories and the CVE IDs associated with each category */
    private queues;
    /** setter
     *  @param prefill a partial Delta2 object to intialize this object
     */
    set(prefill: Partial<Delta2>): Delta2;
    setQueues(queues: Map<DeltaCategories, Set<string>>): Delta2;
    /** deep equals */
    isEquivalentTo(delta: Delta2): boolean;
    /**
     *  categorizations are calculated as follows
     *
     *  new file:  cna-new
     *  has previous version:
     *    dataType: cna-update
     *    dataVersion: cna-update
     *    cveMetadata !dateUpdated: cna-update
     *                (dateUpdated can be cna or adp)
     *    containers
     *      cna: cna-update
     *      adp: xxxxx-adp
     *  because there can be changes in multiple places
     *    a CVE change can be in multiple categories
     *    except cna-new, deleted
     *
     */
    /** adds a CVE ID into one of the category queues
     *  Note that this should really be used by this class and not users of this class
     *  unless you need to force a CVE into a specific category.  For normal use, use
     *  add() instead, since it determines the proper queue to insert the CVE in a standardized way
     *  @param cveId a CVE ID or string to be added
     *  @param category the DeltaCategory to add to
     */
    addToQueue(cveId: CveId | string, category: DeltaCategories): void;
    /** retrieves the specified queue as an array
     *  @param category the DeltaCategory queue to retrieve from
     *  @returns the category's set as an array
     *    or if the category is not in this delta, returns []
     */
    getAsArray(category: DeltaCategories): string[];
    /** returns an iterator for the categories
     *  You must use the iterator as follows:
     *  given:
     *    const categories = delta.categories()
     *  then use the iterator as:
     *  1. repeatedly calling categories.next().value
     *  2. for (let cat of delta.categories()) {...}
     *     cat in this case is a string, so you can use
     *       delta.getAsArray(cat) inside the for loop
     *  Note:  remember that iterators are consumed after access,
     *    so you have to call delta.categories() again to get another iterator
     *    each time you need to iterate
     */
    categories(): IterableIterator<string>;
    /** returns the number of category queues */
    numQueues(): number;
    toJSON(): {
        fetchTime: string | IsoDateString;
    };
    /** summarize the information in this Delta object in human-readable form */
    toText(): string;
}
