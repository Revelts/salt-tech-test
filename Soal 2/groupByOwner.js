/*

Running : node uniqueName.js

*/

//Object Native;
const groupByOwners = (data) => {
    const output = {};
    for(const prop in data) {
        if(output[data[prop]] == null) {
            output[data[prop]] = [prop];
            continue;
        } 
        output[data[prop]].push(prop);
    }
    return output
};

//Object Key with Map Constructor
const groupByOwnerMap = (data) => {
    const output = new Map();
    for(const prop in data) {
        const value = output.get(data[prop]);
        if(value == null) { // == null means (Null or undefined)
            output.set(data[prop], [prop]);
            continue;
        } 
        value.push(prop); // Value is checked already above, if its null, create if its not then push new value.
    }
    return output
};



const data = {
    'input.txt': 'Randy',
    'code.py': 'Stan',
    'output.txt': 'Randy'
};

const returnValueNative = groupByOwners(data);
const returnValueMap = groupByOwnerMap(data);

console.log(returnValueNative);
console.log(returnValueMap);