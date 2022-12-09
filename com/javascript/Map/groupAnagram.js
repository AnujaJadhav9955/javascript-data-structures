
function groupAnagram(strArray) {
    let groupedAnagram = new Map();

    for(let i=0; i<strArray.length; i++) {
        const key = getKey(strArray[i]);
        if(groupedAnagram.has(key)) {
            existingValues = groupedAnagram.get(key);
            existingValues.push(strArray[i]) 
            groupedAnagram.set(key, existingValues);
        } else {
            groupedAnagram.set(key, [strArray[i]]);
        }       

    }
return groupedAnagram;
}
function getKey(str) {
    const arr = [];
    for(let i=0; i<26; i++) {
        arr[i] = 0;
    }
    for(let i=0; i<str.length; i++) {
      const  location = Number(str.charCodeAt(i) - 'a'.charCodeAt(0));
      arr[location]++;
    }
    const key = arr.join("");
    return key;

}
const strArray = ['abc', 'cat', 'bca', 'pqr', 'cba', 'tac'];
const groupedAnagram = groupAnagram(strArray);
groupedAnagram.forEach((value, key) => {
    console.log(`${key} => ${value}`);
})