
function isValidAnagram(str1, str2) {
if(str1.length !== str2.length) {
    return "Not Anagram"
}
const map1 = new Map();
const map2 = new Map();

for (let i=0; i<str1.length; i++) {
    if(map1.has(str1[i])) {
        map1.set(str1[i], map1.get(str1[i]) + 1)
    } else {
        map1.set(str1[i], 1);
    }
    if(map2.has(str2[i])) {
        map2.set(str2[i], map2.get(str2[i]) + 1)
    } else {
        map2.set(str2[i], 1);
    }
}

for(let char in str1) {
    if(map1[char] !== map2[char]) {
        return "Not An Anagram";
    }
}
return "Both Are Anagram";
}

const str1 = "anagra";
const str2 = "ramgana";

const areAnagram = isValidAnagram(str1, str2);
console.log(`are ${str1} and ${str2} both anagram ? => `, areAnagram )