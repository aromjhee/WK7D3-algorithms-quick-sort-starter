// function quickSort(array) {
//   // if the length of the array is 0 or 1, return the array
//   if (array.length <= 1) return array;

//   // set the pivot to the first element of the array
//   // remove the first element of the array
//   let pivot = array[0];
//   array.shift();

//   // put all values less than the pivot value into an array called left
//   // put all values greater than the pivot value into an array called right
//   let leftArr = [];
//   let rightArr = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] < pivot) leftArr.push(array[i]);
//     else rightArr.push(array[i]);
//   }

//   // call quick sort on left and assign the return value to leftSorted
//   // call quick sort on right and assign the return value to rightSorted
//   let leftSorted = quickSort(leftArr);
//   let rightSorted = quickSort(rightArr);

//   // return the concatenation of leftSorted, the pivot value, and rightSorted
//   return leftSorted.concat([pivot]).concat(rightSorted);
// }

function quickSort(array) {
  if (array.length <= 1) return array;
  let pivot = array.shift();
  let leftArr = array.filter(el => el < pivot);
  let rightArr = array.filter(el => el > pivot);

  let leftSorted = quickSort(leftArr);
  let rightSorted = quickSort(rightArr);

  return [ ...leftSorted, pivot, ...rightSorted ];
}


module.exports = {
  quickSort
};
