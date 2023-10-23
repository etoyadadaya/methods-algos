import { myAt } from "./at";

describe("at method", () => {
    const arr = [1,2,3,4,5];

    test("positive number", () => {
        expect(arr.at(1)).toEqual(myAt(arr,1));
    });

    test("negative number", () => {
        expect(arr.at(-1)).toEqual(myAt(arr, -1));
    });
})