/**
 * Một tam giác vuông như sau:
 */
let n = +prompt("input");
let result = '';
if (!isNaN(n) && n > 0 && Number.isInteger(n)) {
    for (let i = 1; i <= n; i++) {
        for (let j = n; j >= i; j--) {
            result += "* ";
        }
        result += '\n';
    }
    alert(result);
} else {
    alert("Invalid");
}