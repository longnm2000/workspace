let checkNumber = +prompt("Nhập số cần check");
function isPerfectSquare(n) {
  if (n > 0 && n < 1000000) {
    if (Number.isInteger(Math.sqrt(n))) {
      return true;
    }
  }
  return false;
}

console.log(isPerfectSquare(checkNumber));
