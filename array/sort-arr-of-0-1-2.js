// Practice Link: https://practice.geeksforgeeks.org/problems/sort-an-array-of-0s-1s-and-2s4231/1?page=1&category[]=Arrays&sortBy=submissions

const { execute } = require("../test");

class SortArrOf012 {
  naive(arr, n) {
    // implement naive approach here
    return arr.sort((a, b) => a - b);
  }

  initialApproach(arr, n) {
    let count = [0, 0, 0];
    for (let i = 0; i < n; i++) {
      count[arr[i]]++;
    }
    for (let i = 0; i < count[0]; i++) {
      arr[i] = 0;
    }
    for (let i = count[0]; i < count[0] + count[1]; i++) {
      arr[i] = 1;
    }
    for (let i = count[0] + count[1]; i < count[0] + count[1] + count[2]; i++) {
      arr[i] = 2;
    }
    return arr;
  }

  optimal(arr, n) {
    // implement optimal approach here
    function swap(arr, i1, i2) {
      const temp = arr[i1];
      arr[i1] = arr[i2];
      arr[i2] = temp;
    }
    let low = 0, mid = 0, high = n - 1;
    while (mid <= high) {
      if (arr[mid] === 0) {
        swap(arr, low, mid);
        low++;
        mid++;
      } else if (arr[mid] === 1) {
        mid++;
      } else if (arr[mid] === 2) {
        swap(arr, mid, high);
        high--;
      }
    }
    return arr;
  }
}

function main() {
  const solution = new SortArrOf012();
  const inputs = [
    // place inputs here
    // each input is an array consisting of all args passed to the method
    // eg: for a method accepting 2 args: an array 'arr' and an int 'n'
    // [[arrElem1, arrElem2, ...], n]
    [[0,2,1,2,0],5],
    [[0,1,0],3]
  ];
  execute(solution, inputs);
}
main();
