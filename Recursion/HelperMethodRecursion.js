// HELPER METHOD RECURSION
function outer(input) {
  var outerScopedVariable = [];

  function helper(helperInput) {
    // modify the outerScopedVariable
    helper(helperInput--);
  }

  helper(input);

  return outerScopedVariable;
}

// Example
function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  }

  helper(arr);

  return result;
}

/* 
Pure Recursion Tips
    For arrays, use methods like slice, the spread operator, and concat that make copies of arrays so you do not mutate them
    Remember that strings are immutable so you will need to use methods like slice, substr, or substring to make copies of strings
    To make copies of objects use Object.assign, or the spread operator
*/

function collectOddValues(arr) {
  let newArr = [];

  if (arr.length === 0) return newArr;

  if (arr[0] % 2 !== 0) newArr.push(arr[0]);

  newArr = newArr.concat(collectOddValues(arr.slice(1)));

  return newArr;
}
collectOddValues([1, 2, 3, 4, 5]); // [1, 3, 5]
/* 
[1].concat(collectOddValues([2,3,4,5])) -> [1,3,5]
    [].concat(collectOddValues([3,4,5])) -> [3,5]
        [3].concat(collectOddValues([4,5])) -> [3,5]
            [].concat(collectOddValues([5])) ->  [5]
                [5].concat(collectOddValues([])) -> [5]
                    []
*/
