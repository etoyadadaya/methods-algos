// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys

export function myKeys (arr) {
    function* createGenerator () {
        for (let i = 0; i < arr.length; i++) {
            yield i;
        }
    }
    return createGenerator();
}