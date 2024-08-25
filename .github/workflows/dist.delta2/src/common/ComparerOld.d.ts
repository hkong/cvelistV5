/** class that provides static standard comparison capabilities
 *  for sorters and object diff utilities
 */
export declare class Comparer {
    /** Get the json path of the differences between the two objects.
     * @param thisObj base object to compare
     * @param thatObj other object to compare to base.
     * @returns array of, array of strings, representing the json path of the keys whose leaf nodes differ for any reason.
     */
    static getUniqueJsonPathsOfDiff(thisObj: object, thatObj: object): Array<string[]>;
    /** Helper func: Recursively compare a JS object.
     * @param left object to compare, will be reffered to as 'left'
     * @param right object to compare, will be refferred to as 'right'
     * @returns Object with three keys:
     *  - {Array<string[]>} differs, for the property/key paths where the two objects contain different values.
     *  - { Array<string[]>} leftIsMissing, for the property/key paths of that object which is missing from this object.
     * - { Array<string[]>} rightIsMissing, for the property/key paths of this object which is missing from that object.
     */
    static compareObject(left: any, right: any): {
        differs: Array<string[]>;
        leftIsMissing: Array<string[]>;
        rightIsMissing: Array<string[]>;
    };
    /** Helper func: Gets the value from a Json property/key paths for the given object.
     * @param obj an object to traverse
     * @param path the list of property/key names to visit in hierarchical order.
     * @returns the value or node of `obj` located at the given path.
     *
     * @example
     * const nested = { z: true };
     * const exObj = { a: {b: [1, nested, 3], c: 99} };
     * getJsonNodeFromPath(exObj, ['a', 'b']);            // -> [1, { z: true }, 3]
     * getJsonNodeFromPath(exObj, ['a', 'b', 1, 'z']);    // -> true
     *
     */
    static getJsonNodeFromPath(obj: any, path: string[]): any;
}
