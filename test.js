function getInstanceMethodNames(obj) {
  return Object
    .getOwnPropertyNames(Object.getPrototypeOf(obj))
    .filter(name => (name !== 'constructor' && typeof obj[name] === 'function'));
}

function demarcate() {
  console.log("===================================================");
}

module.exports = {
  execute: function(solution, inputs) {
    demarcate();
    console.log(`Executing test cases for ${solution.constructor.name}`);
    demarcate();
    for (let l = inputs.length, i = 0; i < l; i++) {
      const args = inputs[i];
      const methods = getInstanceMethodNames(solution);
      console.log(`\nTest case ${i+1}\n`);
      for (const method of methods) {
        console.log(`Result of ${solution.constructor.name}.${method} = ${solution[method](...args)}\n`);
      }
      demarcate();
    }
  }
}
