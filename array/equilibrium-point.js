// Practice Link: https://practice.geeksforgeeks.org/problems/equilibrium-point-1587115620/1?page=1&category[]=Arrays&sortBy=submissions

const { execute } = require("../test");

class EquilibriumPoint {
  naive(arr, n) {
    // implement naive approach here
    function sum(nums) {
      return nums.reduce((total, curr) => total + curr, 0);
    }
    for (let i = 0; i < n; i++) {
      if (sum(arr.slice(0, i)) === sum(arr.slice(i+1, n))) {
        return i + 1;
      }
    }
    return -1;
  }

  optimal(arr, n) {
    // implement optimal approach here
    let leftSum = 0, rightSum = 0;
    let sum = arr.reduce((total, curr) => total + curr, 0);
    for (let i = 0; i < n; i++) {
      rightSum = sum - leftSum - arr[i];
      if (leftSum === rightSum) {
        return i + 1;
      }
      leftSum += arr[i];
    }
    return -1;
  }
}

function main() {
  const solution = new EquilibriumPoint();
  const inputs = [
    // place inputs here
    // each input is an array consisting of all args passed to the method
    // eg: for a method accepting 2 args: an array 'arr' and an int 'n'
    // [[arrElem1, arrElem2, ...], n]
    [[1,3,5,2,2],5],
    [[1],1]
  ];
  execute(solution, inputs);
}
main();
