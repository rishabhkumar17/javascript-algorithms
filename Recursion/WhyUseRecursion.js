/* 
What is recursion?
    A process (a function in our case) that calls itself
*/

/*  
Why do I need to know this?
It's EVERYWHERE!

    JSON.parse / JSON.stringify
    document.getElementById and DOM traversal algorithms
    Object traversal
    Very common with more complex algorithms
    It's sometimes a cleaner alternative to iteration
*/

/* 
How recursive functions work
    Invoke the same function with a different input until you reach your base case!

Base Case
    The condition when the recursion ends.
    This is the most important concept to understand 

Two essential parts of a recursive function!
    Base Case
    Different Input
*/

function countDown(num) {
  if (num === 0) {
    console.log('All Done');
    return;
  }

  console.log(num);
  num--;
  countDown(num);
}

countDown(5);
/* 
Output -> 
    5
    4
    3
    2
    1
    All Done
*/

function sumRange(num) {
  if (num === 1) {
    return 1;
  }
  return num + sumRange(num - 1);
}

sumRange(3); // 6
/* 
    sumRange(3)
            return 3 + sumRange(2)
                                return 2 + sumRange(1)
                                                    return 1
*/
