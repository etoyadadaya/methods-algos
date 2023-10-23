import { myReduce } from "./reduce";

describe('reduce method', () => {
    let arr = [1,2,3,4,5];

    test('accumulated value is positive', () => {
        expect(arr.reduce((acc, curr) => acc + curr, 0)).toEqual(myReduce(arr, (acc, curr) => acc + curr, 0));
    });

    test('accumulated value is negative', () => {
        expect(arr.reduce((acc, curr) => acc - curr, 0)).toEqual(myReduce(arr, (acc, curr) => acc - curr, 0));
    });

    test('without initial value', () => {
        expect(arr.reduce((acc, curr) => acc + curr)).toEqual(myReduce(arr, (acc, curr) => acc + curr));
    });
});