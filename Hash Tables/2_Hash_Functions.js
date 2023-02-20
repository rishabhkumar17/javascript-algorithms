/*
What makes a good hash? (not a cryptographically secure one)

Fast(constant time)
Doesn't cluster outputs at specific indices, but distributes uniformly
Deterministic(same input yields same output)
*/

// function hash(key, arrayLen) {
//     let total = 0;
//     for(let char of key) {
//         let value = char.charCodeAt(0) - 96;
//         total = (total + value) % arrayLen;
//     }
//     return total;
// }

function hash(key, arrayLen) {
  let total = 0;
  for (let char of key) {
    let value = char.charCodeAt(0) - 96;
    total = total + value;
  }
  return total % arrayLen;
}

hash('pink', 10); // 0
hash('orangered', 10); // 7
hash('cyan', 10); // 3

/* 
Problems with current hash function
    Only hashes strings(we won't worry about this)
    Nat constant time - liner in key length
    Could be a little more random
*/

/* 
Prime numbers in the hash is helpful in spreading out the keys
more uniformly
It is also helpful if the array thay you're putting values into has a prime length.
*/
function hash(key, arrayLen) {
  let total = 0;
  let WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
}
