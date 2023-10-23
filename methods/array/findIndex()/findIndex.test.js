import { myFindIndex } from "./findIndex";

describe('findIndex method', () => {
    const arr = [5, 12, 8, 130, 44];

    test('value exist', () => {
        expect(arr.findIndex((el) => el > 13)).toEqual(myFindIndex(arr, (el) => el > 13));
    });

    test('value doesnt exist', () => {
        expect(arr.findIndex((el) => el > 131)).toEqual(myFindIndex(arr, (el) => el > 131));
    });
});