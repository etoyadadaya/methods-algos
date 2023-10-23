import { myFill } from "./fill";

describe('fill test', () => {
    let arr = [1,2,3,4,5];

    test('with value', () => {
        expect(arr.fill(6)).toEqual(myFill(arr, 6));
    });

    test('with value start index', () => {
        expect(arr.fill(5, 1)).toEqual(myFill(arr, 5, 1));
    });

    test('with value start index and end index', () => {
        expect(arr.fill(0, 2, 4)).toEqual(myFill(arr, 0, 2, 4));
    });
});