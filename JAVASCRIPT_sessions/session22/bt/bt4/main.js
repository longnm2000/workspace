//Viết một chương sắp xếp các phần tử là số ở trong mảng theo thứ tự tăng dần.
let Arr = [5, 2, 3, 4, 1];
function sortDes(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        let tg = arr[i];
        arr[i] = arr[j];
        arr[j] = tg;
      }
    }
  }
  return arr;
}
console.log(sortDes(Arr));
