let mass = +prompt("Your weight in kg?");
let height = (+prompt("Your height in cm?")) / 100;
let bmi = mass / (height * height);
if (bmi < 16) {
    alert("Mày là bộ xương à");
} else if (bmi <= 18.5) {
    alert("Mày là idol hàn quốc à");
} else if (bmi <= 25) {
    alert("Mày đẹp zai đấy");
} else if (bmi <= 30) {
    alert("Mày béo quá rồi đấy");
} else if (bmi>30) {
    alert("Thôi ông không cần giảm nữa đâu");
} else {
    alert("Not vaild");
}
console.log(bmi);