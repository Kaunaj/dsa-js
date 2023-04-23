// Practice Link: https://practice.geeksforgeeks.org/problems/subarray-with-given-sum-1587115621/1?page=1&category[]=Arrays&sortBy=submissions

const { execute } = require("../test");

class FindSubarrayWithSum {
  naive(arr, n, s) {
    for (let i = 0; i < n; i++) {
      let sum = arr[i];
      if (sum === s) return [i+1, i+1];
      else if (sum > s) continue;
      for (let j = i + 1; j < n; j++) {
        sum += arr[j];
        if (sum === s) return [i+1, j+1];
        else if (sum > s) break;
      }
    }
    return [-1];
  }

  optimal(arr, n, s ) {
    if (s <= 0) return [-1];
    let left = 0, right = 0, sum = 0;
    while (left <= n && right <= n) {
      if (sum === s) {
        return [left+1, right];
      } else if (sum < s) {
        sum += arr[right];
        right++;
      } else {
        sum -= arr[left];
        left++;
      }
    }
    return [-1];
  }
}

function main() {
  const solution = new FindSubarrayWithSum();
  const inputs = [
    [[20,1,2,3,7,5], 5, 12],
    [[1,2,3,4,5,6,7,8,9,10], 10, 15],
    [[1,2,3], 3, 6],
    [[20,1,2,3,7,5],6,12],
    [[135, 101, 170, 125, 79, 159, 163, 65, 106, 146, 82, 28, 162, 92, 196, 143, 28, 37, 192, 5, 103, 154, 93, 183, 22, 117, 119, 96, 48, 127, 172, 139, 70, 113, 68, 100, 36, 95, 104, 12, 123, 134],42,468],
    [[1,2,3,4],4,0]
  ];
  execute(solution, inputs);
}
main();
