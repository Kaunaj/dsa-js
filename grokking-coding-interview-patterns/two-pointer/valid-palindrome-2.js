// Practice Link: [paste link here]

const { execute } = require("../../test");

class ValidPalindrome2 {
  naive(s) {
    // implement naive approach here
  }

  optimal(s) {
    // implement optimal approach here
    function isPalindromeInRange(s, start, end) {
      while (start < end) {
        if (s[start] !== s[end]) return false;
        start++;
        end--;
      }
      return true;
    }

    let start = 0, end = s.length - 1;
    let mismatches = 0;

    while (start < end) {
      if (mismatches > 1) return false;

      if (s[start] !== s[end]) {
        mismatches++;
        const isPalinSkippingStart = isPalindromeInRange(s, start + 1, end);
        const isPalinSkippingEnd = isPalindromeInRange(s, start, end - 1);
        // console.log(`isPalinSkippingStart: ${isPalinSkippingStart}, isPalinSkippingEnd: ${isPalinSkippingEnd}`);

        return (isPalinSkippingStart || isPalinSkippingEnd);
      } else {
        start++;
        end--;
      }
    }
    // console.log('mismatches:', mismatches);

    return true;
  }
}

function main() {
  const solution = new ValidPalindrome2();
  const inputs = [
    // place inputs here
    // each input is an array consisting of all args passed to the method
    // eg: for a method accepting 2 args: an array 'arr' and an int 'n'
    // [[arrElem1, arrElem2, ...], n]
    ["madame"],
    ["raceacar"],
    ["abcdef"]
  ];
  execute(solution, inputs);
}
main();
