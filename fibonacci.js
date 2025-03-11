function fibs(number, arr=[]) {
  for (let i = 0; i < number; i++) {
    if (i === 0) {
      arr.push(0);
    }
    else if (i === 1) {
      arr.push(1);
    }
    else {
      const value = arr[i - 2] + arr[i - 1];
      arr.push(value);
    }
  }
  return arr;
}

console.log(fibs(8));

function fibsRec(number, arr=[0, 1], i = 2) {
  if (i === number) {
    return arr
  }
  return 
}