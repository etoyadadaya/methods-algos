import { mySome } from "./some";

describe('some method', () => {
    const arr = [1,2,3,4,5];

    test('with true value', () => {
        expect(arr.some((el) => el % 2 === 0)).toEqual(mySome(arr, (el) => el % 2 === 0));
    });

    test('with false value', () => {
        expect(arr.some((el) => el % 6 === 0)).toEqual(mySome(arr, (el) => el % 6 === 0));
    });
});