// Runtime 452ms(7%), Memory 42.8 MB(61%)
function twoSumIterate (numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {
                return [i+1, j+1];
            }
        }
    }
    return [];
}

// Runtime 56ms(56%), Memory 42.6 MB(79%)
function twoSumTwoPointers (numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while (left <= right) {
        if (numbers[left] + numbers[right] > target) right--;
        else if (numbers[left] + numbers[right] < target) left++;
        else return [left + 1, right + 1];
    }

    return [];
}