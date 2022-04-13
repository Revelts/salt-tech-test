/*

Running : node uniqueName.js

*/


const getUniqueArray = (arrValue) => {
    let arr = arrValue.concat();
    for(let index = 0; index < arr.length; ++index) {
        for(let zIndex = index + 1; zIndex < arr.length; ++zIndex) {
            if(arr[index] === arr[zIndex]) {
                arr.splice(zIndex--, 1);
            }
        }
    }
    return arr;
}

const parseUniqueName = (arrInput, arrTarget) => {    
    if(!Array.isArray(arrInput)) {
        return "Input is not an array!"
    }

    if(!Array.isArray(arrTarget)) {
        return "Target input is not an array!"
    }

    return getUniqueArray(arrInput.concat(arrTarget));
};

const value = parseUniqueName(['Ava', 'Emma', 'Olivia'], ['Olivia', 'Sophia','Emma']);
console.log(value);