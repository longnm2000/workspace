let characterInput = +prompt("Nhập ký tự");
function isNumber(n) {
  if (isNaN(n)) return false;
  else return true;
}

console.log(isNumber(characterInput));
