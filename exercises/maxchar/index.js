// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let cache = {};

    for (var i = 0; i < str.length; i++) {
        if (cache[str[i]]) {
            cache[str[i]]++;
        } else {
            cache[str[i]] = 1;
        }
    }

    return Object.keys(cache).sort()[0]
}

module.exports = maxChar;
