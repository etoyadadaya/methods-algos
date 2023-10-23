import { myLastIndexOf } from "./lastIndexOf";

describe('lastIndexOf method', () => {
    const arr = [1,2,3,4,5];
    const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

    test('with number', () => {
        expect(arr.indexOf(1)).toEqual(myLastIndexOf(arr, 1));
    });

    test('with string', () => {
        expect(animals.indexOf('ant')).toEqual(myLastIndexOf(animals, 'ant'));
    });

    test('without correct value', () => {
        expect(arr.indexOf(-1)).toEqual(myLastIndexOf(arr, -1));
    });
});