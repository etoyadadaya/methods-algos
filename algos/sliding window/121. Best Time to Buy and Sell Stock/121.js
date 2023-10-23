// Runtime 70ms(67%), Memory 51.5 MB(58%)
function maxProfitSlidingWindow (prices) {
    let left = 0;
    let right = 1;
    let profit = 0;

    while (right < prices.length) {
        if (prices[left] > prices[right]) {
            left = right;
        } else if (profit < prices[right] - prices[left]) {
            profit = prices[right] - prices[left];
        }
        right++;
    }

    return profit;
}