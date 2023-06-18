// Practice Link: [paste link here]

const { execute } = require("../test");

class FindDuplicates {
  naive(arr, n) {
    // implement naive approach here
    let duplicates = {};
    for (let i = 0; i < n; i++) {
      if (duplicates[arr[i]]) {
        duplicates[arr[i]]++;
      } else {
        duplicates[arr[i]] = 1;
      }
    }
    let result = [];
    Object.entries(duplicates).forEach(([key, value]) => {
      if (value > 1) {
        result.push(key);
      }
    });
    return result.length ? result.sort((a, b) => a - b) : -1;
  }

  optimal(arr, n) {
    // implement optimal approach here
    let duplicates = [];
    for (let i = 0; i < n; i++) {
      duplicates.push(0);
    }
  }
}

function main() {
  const solution = new FindDuplicates();
  const inputs = [
    // place inputs here
    // each input is an array consisting of all args passed to the method
    // eg: for a method accepting 2 args: an array 'arr' and an int 'n'
    // [[arrElem1, arrElem2, ...], n]
    [[0,3,1,2],4],
    [[2,3,1,2,3],5]
  ];
  execute(solution, inputs);
}
main();
