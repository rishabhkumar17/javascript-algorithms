/* 
    keys
Loops through the hash table array and 
returns an array of keys in the table

    values
Loops through the hash table array and 
returns an array of values in the table
*/

keys() {
    let keysArr = [];
    for(let i=0; i<this.keyMap.length; i++) {
        if(this.keyMap[i]) {
            for(let j=0; j<this.keyMap[i].length; j++) {
                keysArr.push(this.keyMap[i][j][0]);    
            }
        }
    }
    return keysArr;
}

values() {
    let valuesArr = [];
    for(let i=0; i<this.keyMap.length; i++) {
        if(this.keyMap[i]) {
            for(let j=0; j<this.keyMap[i].length; j++) {
                if(!valuesArr.includes(this.keyMap[i][j][1])) {
                    valuesArr.push(this.keyMap[i][j][1]);    
                }
            }
        }
    }
    return valuesArr;
}