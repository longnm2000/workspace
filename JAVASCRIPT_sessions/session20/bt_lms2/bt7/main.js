let inputYear = +prompt("Nhập vào năm cần kiểm tra");
function checkYear(n) {
  if (Number.isInteger(n) && n > 0) {
    if (n % 4 == 0 && n % 100 != 0) console.log("Năm nhuận");
    else console.log("Không phải năm nhuận");
  } else {
    console.log("Invalid Value");
  }
}
