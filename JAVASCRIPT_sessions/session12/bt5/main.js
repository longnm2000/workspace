let toan = +prompt("Toán");
let ly=+prompt("Lý");
let hoa=+prompt("Hóa");
let van=+prompt("Văn");
let anh=+prompt("Anh");
let percentage = (toan+ly+hoa+van+anh)/50*100;
if (percentage<=100 &&percentage>=0){
    if(percentage>=90) {
        alert("Grand A");
    } else if (percentage>=80){
        alert("Grand B");
    } else if (percentage>=70) {
        alert("Grand C");
    } else if (percentage>=60) {
        alert("Grand D");
    } else if (percentage>=40){
        alert("Grand E");
    } else {
        alert("Grand F");
    }
}
else {
    alert("Not vaild");
}