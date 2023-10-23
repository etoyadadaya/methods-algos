// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values

export function myValues (arr) {
    function* createGenerator() {
        for (let i = 0; i < arr.length; i++) {
            yield arr[i];
        }
    }
    return createGenerator();
}