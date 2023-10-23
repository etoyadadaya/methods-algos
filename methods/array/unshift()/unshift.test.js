import { myUnshift } from "./unshift";

describe('unshift method', () => {
    const arr = [1,2,3,4,5];
    const myArr = [1,2,3,4,5];

    test('shift element', () => {
        expect(arr.unshift()).toEqual(myUnshift(myArr));
    })
});