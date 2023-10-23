import { myToString } from "./toString";

describe('toString method', () => {
    const numbers = [1,2,3,4,5];
    const strings = ["a", "b", "c", "d", "e"];

    test('strings array', () => {
        expect(strings.toString()).toEqual(myToString(strings));
    });

    test('numbers array', () => {
        expect(numbers.toString()).toEqual(myToString(numbers));
    });
});