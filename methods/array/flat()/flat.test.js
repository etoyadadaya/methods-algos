import { myFlat } from "./flat";

describe('flat method', () => {
    const arr = [0, 1, [2, [3, [4, 5]]]];

    test('without depth', () => {
        expect(arr.flat()).toEqual(myFlat(arr));
    });

    test('with depth equal 3', () => {
        expect(arr.flat(3)).toEqual(myFlat(arr, 3));
    });

    test('with depth equal Infinity', () => {
        expect(arr.flat(Infinity)).toEqual(myFlat(arr, Infinity));
    });
});