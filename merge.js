function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }
  else {
    const left = mergeSort(array.slice(0, Math.floor((array.length / 2))))
    const right = mergeSort(array.slice(Math.floor((array.length / 2))))
    const sorted = []
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        sorted.push(left[i])
        i++;
      }
      else {
        sorted.push(right[j])
        j++;
      }
    }
    sorted.push(...left.slice(i))
    sorted.push(...right.slice(j))
    return sorted
  }
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]))