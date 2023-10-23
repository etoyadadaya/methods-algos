import { myReduceRight } from "./reduceRight";

describe('reduce method', () => {
    let arr = [1,2,3,4,5];

    test('accumulated value is positive', () => {
        expect(arr.reduceRight((acc, curr) => acc + curr, 0)).toEqual(myReduceRight(arr, (acc, curr) => acc + curr, 0));
    });

    test('accumulated value is negative', () => {
        expect(arr.reduceRight((acc, curr) => acc - curr, 0)).toEqual(myReduceRight(arr, (acc, curr) => acc - curr, 0));
    });

    test('without initial value', () => {
        expect(arr.reduceRight((acc, curr) => acc + curr)).toEqual(myReduceRight(arr, (acc, curr) => acc + curr));
    });
});