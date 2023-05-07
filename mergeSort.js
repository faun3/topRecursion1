function merge(array1, array2) {
  let i = 0,
    j = 0;
  let result = [];
  while (i < array1.length && j < array2.length) {
    if (array1[i] <= array2[j]) {
      result.push(array1[i]);
      i++;
    } else {
      result.push(array2[j]);
      j++;
    }
  }
  for (; i < array1.length; i++) {
    result.push(array1[i]);
  }
  for (; j < array2.length; j++) {
    result.push(array2[j]);
  }
  return result;
}

function mergeSort(array) {
  //split the array as evenly as possible, going into subarrays
  //    the smaller array is always on the left
  if (array.length < 2) return array;
  else {
    let leftArr = array.toSpliced(
      array.length / 2,
      array.length - array.length / 2 + 1
    );
    let rightArr = array.toSpliced(0, array.length / 2);
    return merge(mergeSort(leftArr), mergeSort(rightArr));
  }
}

const array = [2, 1, 1, 2];
console.log(mergeSort(array));
