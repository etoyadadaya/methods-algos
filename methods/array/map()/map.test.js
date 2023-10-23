import { myMap } from "./map";

describe('map method', () => {
    const arr = [1, 4, 9, 16];

    test('iterate through array', () => {
       expect(arr.map((el) => el * 2)).toEqual(myMap(arr, (el) => el * 2));
    });
});