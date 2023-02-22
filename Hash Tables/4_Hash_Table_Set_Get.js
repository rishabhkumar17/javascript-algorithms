// A Hash Table Class

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
}

/* 
    set
Accepts a key and a value
Hashes the key
Stores the key-value pair in the hash table array via separate chaining

    get
Accepts a key
hashes the key
Retieves the key-value pair in the hash table
If the key is not found, returns undefined
*/

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    let index = this._hash(key);
    let item = this.keyMap[index];
    if (item) {
      for (let i = 0; i < item.length; i++) {
        if (item[i][0] === key) {
          return item[i];
        }
      }
    }
    return undefined;
  }
}

let ht = new HashTable(4);
ht.set('spanish movie', 'Life is Beautiful');
ht.set('english movie', 'Interstellar');
ht.set('indian movie', 'RRR');
ht.set('japanese movie', 'Train to busan');
ht.get('spanish movie');

// let ht = new HashTable(4);
// ht.set('spanish movie', 'Life is Beautiful');
// ht.set('english movie', 'Interstellar');
// ht.set('indian movie', 'RRR');
// ht.set('japanese movie', 'Train to busan');
