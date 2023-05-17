let a = +prompt("Nhập số");
function soNguyenTo(n) {
  if (n === 1 || isNaN(n) || n === 0) {
    console.log("Không phải số nguyên tố");
  } else if (n === 2) {
    console.log("Số nguyên tố");
  } else {
    let isSnt = true;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        isSnt = false;
        break;
      }
    }
    isSnt === true
      ? console.log("Số nguyên tố")
      : console.log("Số không phải số nguyên tố");
  }
}

soNguyenTo(a);
