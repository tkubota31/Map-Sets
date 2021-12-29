//Quick Question #1
//[1,2,3,4]

//Quick question #2
//['r', 'e', 'f',]
//["ref"]

//Quick Question #3
// 0:{Array(3) => true}
// 1:{Array(3) => false}

//hasDuplicate
//const hasDuplicate = arr => new Set(arr).size !== arr.length

//vowelCount
function vowelCount(str){
    let vowels = "aeiou";
    let newMap = new Map();
    let lowerStr = str.toLowerCase()
    for(let char of lowerStr){
        if (vowels.indexOf(char) !== -1){
            if (newMap.has(char)){
                newMap.set(char, newMap.get(char) +1);
            } else {
                newMap.set(char,1);
            }
        }
    }
    return newMap;
}
