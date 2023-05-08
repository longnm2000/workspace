let inputYear = +prompt("Input year");
if (!isNaN(inputYear)){
    if (inputYear%4===0&&inputYear%100!==0){
        alert("Năm nhuận");
    } else {
        alert("Không phải năm nhuận");
    }
} else {
    alert("Not vaild");
}