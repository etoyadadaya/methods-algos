import { myKeys } from "./keys";

describe('keys method', () => {
    let arr = [1,2,3,4,5];
    let keysGenerator = arr.keys();
    let myKeysGenerator = myKeys(arr);

    test('next value', () => {
        expect(keysGenerator.next()).toEqual(myKeysGenerator.next());
    });
})