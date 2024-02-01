function mergeSort(array) {
  if (array.length === 1) {
    return array;
  } else {
    const sorted = [];
    const middle = array.length / 2; 
    const leftHalf = mergeSort(array.slice(0, middle)); 
    const rightHalf = mergeSort(array.slice(middle));

    let i = 0, j = 0, k = 0;
    while (i < leftHalf.length && j < rightHalf.length) {
      if (leftHalf[i] < rightHalf[j]) {
        sorted[k++] = leftHalf[i];
        i++;
      } else {
        sorted[k++] = rightHalf[j];
        j++;
      }
    }

    for (; i < leftHalf.length; i++) {
      sorted[k++] = leftHalf[i]; 
    }

    for (; j < rightHalf.length; j++) {
      sorted[k++] = rightHalf[j]; 
    }

    return sorted;
  }
}