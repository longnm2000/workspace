//Viết một đoạn mã cho phép người dùng nhập vào một số n. Tiến hành kiểm tra xem đó
//có phải là một số nguyên hợp lệ hay không. Nếu đó là số hợp lệ, tiến hành tính kết quả
//của biểu thức A = 0 + 1 + 2 + … + n

let n = +prompt("input n");
// console.log(isNaN(n));
let sum = 0;
if (n >= 0 && Number.isInteger(n)) {
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    alert(`Tong bang: ${sum}`);
} else {
    alert("Invalid");
}