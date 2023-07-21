let numberInput = +prompt("Input");
function isTrue(n) {
  if (Number.isInteger(n) && n > 0) return true;
  else return false;
}

console.log(isTrue(numberInput));
