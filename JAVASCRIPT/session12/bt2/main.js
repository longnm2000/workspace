let n = +prompt("Input n");
let x = +prompt("Input x");

if (n <= 0) {
    alert("not valid");
}
else {
    let middleNumber = Math.floor(n / 2);
    if (x >= 0 && x <= middleNumber) {
        alert(`${x} is in lower half of ${n}`);
    }
    else if (x > middleNumber && x <= n) {
        alert(`${x} is in higher half of ${n}`);
    } else {
        alert(`Not in [0;${n}]`);
    }
}