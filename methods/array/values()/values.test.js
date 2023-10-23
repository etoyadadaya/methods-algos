import { myValues } from "./values";

describe('values method', () => {
    let arr = [1,2,3,4,5];
    let valuesGenerator = arr.values();
    let myValuesGenerator = myValues(arr);

    test('next value', () => {
        expect(valuesGenerator.next()).toEqual(myValuesGenerator.next());
    });
})