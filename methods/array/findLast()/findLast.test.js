import { myFindLast } from "./findLast";

describe('findLast', () => {
    const arr = [5, 12, 8, 130, 44];

    test('value exist', () => {
        expect(arr.findLast((el) => el > 45)).toEqual(myFindLast(arr, (el) => el > 45));
    });

    test('value doesnt exist', () => {
        expect(arr.findLast((el) => el > 131)).toEqual(myFindLast(arr, (el) => el > 131));
    });
});