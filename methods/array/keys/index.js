// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys

const arr = [1,2,3,4,5];

function myKeys (arr) {
    function* createGenerator () {
        for (let i = 0; i < arr.length; i++) {
            yield i;
        }
    }
    return createGenerator();
}

const keysGenerator = myKeys(arr);
console.log(keysGenerator.next());