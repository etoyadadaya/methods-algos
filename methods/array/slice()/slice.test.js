import { mySlice } from "./slice";

describe('slice method', () => {
    const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

    test('without start && end indexes', () => {
        expect(animals.slice()).toEqual(mySlice(animals));
    });

    test('without end index', () => {
        expect(animals.slice(1)).toEqual(mySlice(animals, 1));
    });

    test('with start < 0', () => {
        expect(animals.slice(-2)).toEqual(mySlice(animals, -2));
    });

    test('with end < 0', () => {
        expect(animals.slice(2, -1)).toEqual(mySlice(animals, 2, -1));
    });
});