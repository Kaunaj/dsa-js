// Practice Link: https://practice.geeksforgeeks.org/problems/kadanes-algorithm-1587115620/1?page=1&category[]=Arrays&sortBy=submissions

const { execute } = require("../test");

class KadaneAlgo {
  naive(arr, n) {
    let maxSum = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < n; i++) {
      let sum = arr[i];
      if (sum > maxSum) {
        maxSum = sum;
      }
      for (let j = i+1; j < n; j++) {
        sum += arr[j];
        if (sum > maxSum) {
          maxSum = sum;
        }
      }
    }
    return maxSum;
  }

  optimal(arr, n) {
    let globalMax = arr[0], currentMax = arr[0];
    for (let i = 1; i < n; i++) {
      currentMax = Math.max(arr[i], arr[i] + currentMax);
      globalMax = Math.max(globalMax, currentMax);
    }
    return globalMax;
  }
}

function main() {
  const solution = new KadaneAlgo();
  const inputs = [
    [[1,2,3,-2,5],5],
    [[-1,-2,-3,-4],4],
    [[-2],1]
  ];
  execute(solution, inputs);
}
main();
