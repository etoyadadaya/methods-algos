import { myEntries } from "./entries";

describe('entries method', () => {
    let arr = [1,2,3,4,5];
    let entriesGenerator = arr.entries();
    let myEntriesGenerator = myEntries(arr);

    test('next value', () => {
       expect(entriesGenerator.next()).toEqual(myEntriesGenerator.next());
    });
})