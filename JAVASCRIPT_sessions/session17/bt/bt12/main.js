let inputNumber = +prompt("Nhập số từ 100 đến 999");
let numberArray = [
  [1, "một"],
  [2, "hai"],
  [3, "ba"],
  [4, "bốn"],
  [5, "năm"],
  [6, "sáu"],
  [7, "bảy"],
  [8, "tám"],
  [9, "chín"],
];
if (Number.isInteger(inputNumber) && inputNumber >= 100 && inputNumber <= 999) {
  //chu so hang tram
  let a = Math.floor(inputNumber / 100);
  console.log(a);
  //Chữ số hàng chục
  let b = Math.floor((inputNumber - a * 100) / 10);
  console.log(b);
  //Chữ số hàng đơn vị
  let c = Math.floor(inputNumber - a * 100 - b * 10);
  console.log(c);
  let result = "";
  for (let i = 0; i < numberArray.length; i++) {
    if (a == numberArray[i][0]) {
      result += `${numberArray[i][1]} trăm `;
      break;
    }
  }
  for (let i = 0; i < numberArray.length; i++) {
    if (b == numberArray[i][0]) {
      result += `${numberArray[i][1]} mươi `;
      break;
    } else if (c != 0 && c == numberArray[i][0]) {
      result += "linh ";
      break;
    }
  }
  for (let i = 0; i < numberArray.length; i++) {
    if (c == 5) {
      result += "lăm";
      break;
    } else if (c == numberArray[i][0]) {
      result += numberArray[i][1];
      break;
    }
  }

  console.log(result);
  alert(result);
} else {
  alert("Invalid Value");
}
