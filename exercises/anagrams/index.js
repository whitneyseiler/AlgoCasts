// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {

    let objA = cacheString(stringA);
    let objB = cacheString(stringB);

    for (var key in objA) {
        if (!objB[key] || objA[key] !== objB[key]) {
            return false;
        }
    }
    return true;
}

function cacheString(string) {
    let obj = {};

    for (var i = 0; i < string.length; i++) {
        if (obj[string[i]]) {
            obj[string[i]]++;
        } else {
            obj[string[i]] = 1;
        }
    }

    return obj;
}

module.exports = anagrams;
