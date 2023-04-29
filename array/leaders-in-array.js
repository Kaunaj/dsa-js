// Practice Link: https://practice.geeksforgeeks.org/problems/leaders-in-an-array-1587115620/1?page=1&category[]=Arrays&sortBy=submissions

const { execute } = require("../test");

class LeadersInArray {
  naive(arr, n) {
    // implement naive approach here
    let leaders = [arr[n-1]], currentLeader = arr[n-1];
    for (let i = n-2; i >= 0; i--) {
      if (arr[i] >= currentLeader) {
        currentLeader = arr[i];
        leaders.unshift(arr[i]);
      }
    }
    return leaders;
  }

  optimal(arr, n) {
    // implement optimal approach here
    let leaders = [arr[n-1]], currentLeader = arr[n-1];
    for (let i = n-2; i >= 0; i--) {
      if (arr[i] >= currentLeader) {
        currentLeader = arr[i];
        leaders.push(arr[i]);
      }
    }
    return leaders.reverse();
  }
}

function main() {
  const solution = new LeadersInArray();
  const inputs = [
    // place inputs here
    // each input is an array consisting of all args passed to the method
    // eg: for a method accepting 2 args: an array 'arr' and an int 'n'
    // [[arrElem1, arrElem2, ...], n]
    [[16,17,4,3,5,2],6],
    [[1,2,3,4,0],5]
  ];
  execute(solution, inputs);
}
main();
