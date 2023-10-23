import { myIncludes } from "./includes";

describe('includes method', () => {
    const arr = [1,2,3,4,5];
    const pets = ["cat", "dog", "bat", "man"];

    test('with number', () => {
        expect(arr.includes(2)).toEqual(myIncludes(arr, 2));
    });

    test('with string', () => {
        expect(pets.includes("bat")).toEqual(myIncludes(pets, "bat"));
    });

    test('with invalid element', () => {
        expect(arr.includes(-1)).toEqual(myIncludes(arr, -1));
    });
});