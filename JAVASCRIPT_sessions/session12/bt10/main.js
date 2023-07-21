let a = +prompt("a");
let b = +prompt("b");
let c = +prompt("c");
let min = a;
let max = a;


if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
    if (min > b) {
        min = b;
    }
    if (min > c) {
        min = c;
    }
    if (max < b) {
        max = b;
    }
    if (max < c) {
        max = c;
    }
    console.log(`"Max la - ${max}" "Min la - ${min}"`);
}
else {
    alert("Not vaild");
}