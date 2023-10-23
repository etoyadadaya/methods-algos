// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values

const arr = [1,2,3,4,5];

function myValues (arr) {
    function* createGenerator() {
        for (let i = 0; i < arr.length; i++) {
            yield arr[i];
        }
    }
    return createGenerator();
}

const valuesGenerator = myValues(arr);
console.log(valuesGenerator.next());