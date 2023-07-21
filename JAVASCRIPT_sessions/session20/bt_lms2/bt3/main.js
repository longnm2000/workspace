let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function check(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j && i + j == 10) {
        console.log(i, j);
      }
    }
  }
}
check(arr);
