let inputNumber = +prompt("Nhập số cần kiểm tra");
function isIncreasingNumber(inputNumber) {
  if (inputNumber >= 10 && inputNumber < 1000000) {
    numberList = inputNumber.toString().split("");
    console.log(numberList);
    for (let i = 0; i < numberList.length - 1; i++) {
      if (parseInt(numberList[i]) + 1 !== parseInt(numberList[i + 1])) {
        console.log(parseInt(numberList[i]) + 1, parseInt(numberList[i + 1]));
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

console.log(isIncreasingNumber(inputNumber));
