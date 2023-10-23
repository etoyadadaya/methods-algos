import { myFilter } from "./filter";

describe('filter test', () => {
    let arr = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

    test('with matching value', () => {
        expect(arr.filter((word) => word.length > 6)).toEqual(myFilter(arr, (word) => word.length > 6));
    });

    test('without matching value', () => {
        expect(arr.filter((word) => word.length < 4)).toEqual(myFilter(arr, (word) => word.length < 4));
    });
});