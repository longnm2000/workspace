/**
 * Viết một đoạn mã cho phép người dùng nhập vào một số nguyên dương n. Tiến hành
kiểm tra xem đó có phải là một số hợp lệ hay không. Nếu đó là số hợp lệ, tiến hành
kiểm tra xem số đó có phải là số nguyên tố hay không và in ra màn hình kết quả
 */

let n = +prompt("Input");
let result = true;
if (n > 0 && Number.isInteger(n)) {
    if (n == 1) {
        alert(`1 không là số nguyên tố`);
    } else if (n == 2) {
        alert(`2 là số nguyên tố`);
    } else {
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) {
                result = false;
                break;
            }
        }
        result = true ? alert(`${n} là số nguyên tố`) : alert(`${n} không là số nguyên tố`);
    }
    
} else {
    alert("Invalid");
}