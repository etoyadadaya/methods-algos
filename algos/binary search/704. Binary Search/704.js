// Runtime 54ms(64%), Memory 45.2 MB(33%)
function search(nums, target) {
    let low = 0;
    let high = nums.length - 1;

    while (low < high) {
        let mid = low + Math.floor((high - low + 1) / 2);
        if (target < nums[mid]) {
            high = mid - 1;
        } else {
            low = mid;
        }
    }

    return nums[low] === target ? low : -1;
}