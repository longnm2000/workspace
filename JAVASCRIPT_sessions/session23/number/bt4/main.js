let checkNumber = +prompt("Nhập số cần kiểm tra");

function isPrime(n) {
  if ((n > 0 && n, 1000000)) {
    if (n === 1) {
      return false;
    } else if (n === 2) {
      return true;
    } else {
      for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
          console.log(n, i);
          return false;
        }
      }
    }
    return true;
  } else {
    return false;
  }
}

console.log(isPrime(checkNumber));
