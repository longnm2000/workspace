let checkNumber = +prompt("Nhập số cần kiểm tra");
function isPerfectNumber(n) {
  if (n > 1 && n < 1000) {
    let list = [1];
    let sqrtN = Math.sqrt(n);
    for (let i = 2; i < sqrtN; i++) {
      if (n % i === 0) {
        list.push(i, n / i);
      }
    }
    if (Number.isInteger(sqrtN)) {
      list.push(sqrtN);
    }
    console.log(list);
    let result = 0;
    for (let i = 0; i < list.length; i++) {
      result += list[i];
    }
    if (result === n) {
      return true;
    }
  }
  return false;
}

console.log(isPerfectNumber(checkNumber));
