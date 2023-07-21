let inputNumber = +prompt("Input number");
if (inputNumber >= 0 && inputNumber <= 4) {
    alert("Lower half of 9");
} else if (inputNumber >= 5 && inputNumber <= 9) {
    alert("Higher half of 9");
} else {
    alert("not in [0;9]");
}