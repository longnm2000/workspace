
let n = +prompt("input");
let result = '';
if (n > 0 && Number.isInteger(n)) {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            result += `${j} `;
        }
        result += '\n';
    }
    alert(result);
} else {
    alert("Invalid");
}