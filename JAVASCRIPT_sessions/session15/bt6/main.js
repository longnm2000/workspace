/**
 * Viết một đoạn mã cho phép người dùng nhập vào một số n. Tiến hành kiểm tra xem đó
có phải là một số nguyên dương hợp lệ hay không. Nếu đó là số hợp lệ, tiến hành in ra
màn hình console dãy số fibonacci n phần tử
 */

let n = +prompt("input");
let a = 0;
let b = 1;
let c = 0;
let result = "";
let count =0;
if (n>0 && Number.isInteger(n)){
    while (n > 0) {
        result += `${a} `;
        c = b;
        b = a + b;
        a = c;
        n--;
        console.log(result);
        count++;
    }
    console.log(count);
    alert(result);
}else{
    alert("invalid");
}