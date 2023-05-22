let inputNumber = +prompt("Nhập số cần kiểm tra");
let n = +prompt("Nhập khoảng cách");
function isIncreasingNumberByDistance(inputNumber, n) {
  if (inputNumber >= 10 && inputNumber < 1000000 && n >= 0) {
    numberList = inputNumber.toString().split("");
    console.log(numberList);
    for (let i = 0; i < numberList.length - 1; i++) {
      if (parseInt(numberList[i]) + n !== parseInt(numberList[i + 1])) {
        console.log(parseInt(numberList[i]) + 1, parseInt(numberList[i + 1]));
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

console.log(isIncreasingNumberByDistance(inputNumber, n));
