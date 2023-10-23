import { myFind } from "./find";

describe('find method', () => {
    const arr = [5, 12, 8, 130, 44];

    test('value exist', () => {
        expect(arr.find((el) => el > 5)).toEqual(myFind(arr, (el) => el > 5));
    });

    test('value doesnt exist', () => {
        expect(arr.find((el) => el > 130)).toEqual(myFind(arr, (el) => el > 130));
    });
});