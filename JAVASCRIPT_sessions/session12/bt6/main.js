let inputYear = +prompt("Input year");
if (Number.isInteger(inputYear) && inputYear > 0) {
    if (inputYear % 4 === 0 && inputYear % 100 !== 0) {
        alert("Năm nhuận");
    } else {
        alert("Không phải năm nhuận");
    }
} else {
    alert("Not vaild");
}