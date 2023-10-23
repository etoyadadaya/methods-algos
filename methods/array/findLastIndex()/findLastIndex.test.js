import { myFindLastIndex } from "./findLastIndex";

describe('findLastIndex method', () => {
    const arr = [5, 12, 50, 130, 44];

    test('value exist', () => {
        expect(arr.findLastIndex((el) => el > 45)).toEqual(myFindLastIndex(arr, (el) => el > 45));
    });

    test('value doesnt exist', () => {
        expect(arr.findLastIndex((el) => el > 131)).toEqual(myFindLastIndex(arr, (el) => el > 131));
    });
});