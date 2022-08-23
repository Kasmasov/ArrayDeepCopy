let arr = [1, 2, [0,-1], 4, 5, [10, 11, 12, [20, 21, 22]], 6, 7];

const deepCopyArray = function (array) {
  let copiedArray = [];
  array.forEach((element) => {
    if (!Array.isArray(element)) {
       return copiedArray = [...copiedArray, element];
    } else if (Array.isArray(element)){
        deepCopyArray(element)
       return copiedArray = [...copiedArray, deepCopyArray(element)]
    }
  });
  return copiedArray
};

console.log('deepCopyArray(arr);: ', deepCopyArray(arr));
let newArray = deepCopyArray(arr);

console.log('arr[2]===newArray[2]: ', arr[2]===newArray[2]);
console.log('arr[5][3]===newArray[5][3]: ', arr[5][3]===newArray[5][3]);

