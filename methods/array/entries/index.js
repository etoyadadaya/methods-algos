// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries

const arr = [1,2,3,4,5];

function myEntries (arr) {
    function* createGenerator() {
        for (let i = 0; i < arr.length; i++) {
            yield [i, arr[i]];
        }
    }
    return createGenerator();
}

const entriesGenerator = myEntries(arr);
console.log(entriesGenerator.next());