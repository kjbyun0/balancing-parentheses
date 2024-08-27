function balancingParentheses(string) {
  // type your code here
  let open = 0, close = 0;
  for (const ch of string) {
    if (ch === '(')
      open++;
    else {
      if (open > 0)
        open--;
      else
        close++;
    }
  }

  return open + close;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log(balancingParentheses('(()())'));

  console.log("");

  console.log("Expecting: 2");
  console.log(balancingParentheses('()))'));

  console.log("");
  console.log("Expecting: 1");
  console.log(balancingParentheses('('));

  console.log("");
  console.log("Expecting: 1");
  console.log(balancingParentheses(')'));

  console.log("");
  console.log("Expecting: 1");
  console.log(balancingParentheses('(()'));

  console.log("");
  console.log("Expecting: 1");
  console.log(balancingParentheses('())'));

  console.log("");
  console.log("Expecting: 2");
  console.log(balancingParentheses(')('));
}

module.exports = balancingParentheses;

// Please add your pseudocode to this file
// And a written explanation of your solution
