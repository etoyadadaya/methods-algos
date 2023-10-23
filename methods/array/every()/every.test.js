import { myEvery } from "./every";

describe("every test", () => {
    let arr = [1, 30, 39, 29, 10, 13];

    test("with true", () => {
        expect(arr.every((curr) => curr < 40)).toEqual(myEvery(arr, (curr) => curr < 40));
    });

    test("with false", () => {
        expect(arr.every((curr) => curr < 39)).toEqual(myEvery(arr, (curr) => curr < 39));
    });
});