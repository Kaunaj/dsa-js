// Practice Link: [paste link here]

const { execute } = require("../test");

class MaxAvgSubarray {
  naive(nums, k) {
    // implement naive approach here
    if (k === 1) return Math.max(...nums);
    let averages = [];
    for (let l = nums.length, i = 0; i < l - k + 1; i++) {
      let sum = 0;
      for (let j = i; j < i + k; j++) {
        sum += nums[j];
      }
      averages.push(sum/k);
    }
    return Math.max(...averages);
  }

  optimal(nums, k) {
    // implement optimal approach here
    if (k === 1) return Math.max(...nums);
    let averages = [];
    let windowSum = 0;
    let windowStart = 0;
    for (let l = nums.length, i = 0; i < l; i++) {
      windowSum += nums[i];
      if (i >= k - 1) {
        averages.push(windowSum/k);
        windowSum -= nums[windowStart];
        windowStart++;
      }
    }
    return Math.max(...averages);
  }
}

function main() {
  const solution = new MaxAvgSubarray();
  const inputs = [
    // place inputs here
    // each input is an array consisting of all args passed to the method
    // eg: for a method accepting 2 args: an array 'arr' and an int 'n'
    // [[arrElem1, arrElem2, ...], n]
    [[1,12,-5,-6,50,3], 4],
    [[5], 1],
    [[0,1,1,3,3], 4],
    [[4,0,4,3,3], 5],
    [[9,7,3,5,6,2,0,8,1,9], 6]
  ];
  execute(solution, inputs);
}
main();
