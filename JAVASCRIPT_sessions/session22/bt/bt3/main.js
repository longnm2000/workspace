//Viết một chương trình xóa các phần tử trùng của một mảng và in ra kết quả.
let Arr = [
  "one",
  "two",
  "three",
  "one",
  "one",
  "four",
  "five",
  "four",
  "five",
  "five",
];
function removeElement(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(removeElement(Arr));
