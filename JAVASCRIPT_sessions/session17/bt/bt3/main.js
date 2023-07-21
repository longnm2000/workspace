let number = prompt("input number");
let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 10, 11, 12, 13, 14, 15, 16];
let numberIndex = NaN;
if (Number.isInteger(+number)) {
  for (let i = 0; i < numberArray.length; i++) {
    if (+number === Number(numberArray[i])) {
      numberIndex = i;
    }
  }
  if (isNaN(numberIndex)) {
    alert(number + " is NOT found in my array");
  } else {
    alert("Index = " + numberIndex);
  }
} else {
  alert("Invalid Number");
}
