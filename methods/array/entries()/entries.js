// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries

export function myEntries (arr) {
    function* createGenerator() {
        for (let i = 0; i < arr.length; i++) {
            yield [i, arr[i]];
        }
    }
    return createGenerator();
}