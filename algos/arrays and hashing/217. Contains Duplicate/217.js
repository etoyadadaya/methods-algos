// Runtime 2893ms(14%), Memory 49 MB(98%)
function containsDuplicate (nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) return true;
        }
    }
    return false;
}

// Runtime 71ms(92%), Memory 54,5 MB(72%)
function containsDuplicateSet (nums) {
    let set = new Set(nums);
    return set.size !== nums.length;
}
