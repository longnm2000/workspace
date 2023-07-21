let money = +prompt("Money");
let m500 = 0;
let m200 = 0;
let m100 = 0;
let m50 = 0;
let result = "";
if (money > 0 && !isNaN(money) && money % 50000 == 0) {
    while (money >= 500000) {
        m500++;
        money -= 500000;
    }
    while (money >= 200000) {
        m200++;
        money -= 200000;
    }
    while (money >= 100000) {
        m100++;
        money -= 100000;
    }
    while (money >= 50000) {
        m50++;
        money -= 50000;
    }
    if (m500 != 0) {
        result += `500.000 - ${m500}\n`;
    }
    if (m200 != 0) {
        result += `200.000 - ${m200}\n`;
    }
    if (m100 != 0) {
        result += `100.000 - ${m100}\n`;
    }
    if (m50 != 0) {
        result += `50.000 - ${m50}`;
    }
    alert(result);
} else {
    alert("Số tiền bạn rút phải là bội số của 50.000");
}