import { myIndexOf } from "./indexOf";

describe('indexOf method', () => {
    const arr = [1,2,3,4,5];
    const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

    test('with number', () => {
        expect(arr.indexOf(1)).toEqual(myIndexOf(arr, 1));
    });

    test('with string', () => {
        expect(beasts.indexOf('ant')).toEqual(myIndexOf(beasts, 'ant'));
    });

    test('without correct value', () => {
        expect(arr.indexOf(-1)).toEqual(myIndexOf(arr, -1));
    });
});