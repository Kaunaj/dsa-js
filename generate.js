const path = require("path");
const fse = require("fs-extra");

function generateFile() {
  try {
    const { filePath, args } = getArgs();
    fse.ensureFileSync(filePath);
    const fileName = filePath.split("/").pop().split(".")[0];
    const contents = createFileContents(fileName, args);
    fse.writeFileSync(filePath, contents);
  } catch (e) {
    console.log("error while generating file", e);
    process.exit();
  }
}

function createFileContents(fileName, args) {
  console.log("params in createFileContents", fileName, args);
  const className = createClassFromFileName(fileName);
  return `// Practice Link: [paste link here]

const { execute } = require("../test");

class ${className} {
  naive(${args}) {
    // implement naive approach here
  }

  optimal(${args}) {
    // implement optimal approach here
  }
}

function main() {
  const solution = new ${className}();
  const inputs = [
    // place inputs here
    // each input is an array consisting of all args passed to the method
    // eg: for a method accepting 2 args: an array 'arr' and an int 'n'
    // [[arrElem1, arrElem2, ...], n]
  ];
  execute(solution, inputs);
}
main();\n`;
}

function createClassFromFileName(fileName) {
  return fileName
    .split("-")
    .map(str => str[0].toUpperCase() + str.slice(1).toLowerCase())
    .join("");  
}

function getArgs() {
  let values = process.argv.slice(2);
  return {
    filePath: `${path.join(__dirname, values[0])}.js`,
    args: values[1] || ""
  };
}

(() => {
  generateFile();
})();
