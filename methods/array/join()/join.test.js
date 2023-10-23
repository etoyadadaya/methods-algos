import { myJoin } from "./join";

describe('join method', () => {
    const arr = ["fire", "air", "method"];

    test('empty separator', () => {
        expect(arr.join()).toEqual(myJoin(arr));
    });

    test('separator equal "" ', () => {
        expect(arr.join("")).toEqual(myJoin(arr, ""));
    });

    test('separator equal any character', () => {
        expect(arr.join("-")).toEqual(myJoin(arr, "-"));
    });
});