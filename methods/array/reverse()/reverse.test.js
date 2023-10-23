import { myReverse } from "./reverse";

describe('reverse method', () => {
    const numbers = [1,2,3,4,5];
    const strings = ["cat", "dog", "bat", "man", "goat"];

    test('reverse array of numbers', () => {
        expect(numbers.reverse()).toEqual(myReverse(numbers));
    });

    test('reverse array of strings', () => {
        expect(strings.reverse()).toEqual(myReverse(strings));
    });
});