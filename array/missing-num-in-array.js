// Practice Link: https://practice.geeksforgeeks.org/problems/missing-number-in-array1416/1?page=1&category[]=Arrays&sortBy=submissions

const { execute } = require("../test");

class MissingNumInArray {
  optimal(arr, n) {
    let sum = (n * (n + 1)) / 2;
    for (let i = 0; i < n-1; i++) {
      sum -= arr[i];
    }
    return sum;
  }
}

function main() {
  const solution = new MissingNumInArray();
  const inputs = [
    [[1,2,3,5],5],
    [[6,1,2,8,3,4,7,10,5],10]
  ];
  execute(solution, inputs);
}
main();
