import { myConcat } from "./concat";

describe('concat method', () => {
    let firstArr = [1,2,3,4,5];
    let secondArr = [6,7,8,9,10];
    let thirdArr = [11,12,13,14,15];
    let arrWithNum = [[1], 1];

    test("with one array", () => {
        expect(firstArr.concat(secondArr)).toEqual(myConcat(firstArr, secondArr));
    });

    test("with two arrays", () => {
        expect(firstArr.concat(secondArr, thirdArr)).toEqual(myConcat(firstArr, secondArr, thirdArr));
    });

    test("with array with number", () => {
        expect(firstArr.concat(arrWithNum)).toEqual(myConcat(firstArr, arrWithNum));
    });
});