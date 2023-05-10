let date = +prompt("Date");
let month = +prompt("Month");
let result = "";
if (!isNaN(date) && !isNaN(month)) {
    switch (month) {
        case 1:
            if (1 <= date && date <= 19) {
                result = "Ma Kết";
            }
            else if (date > 19 && date <= 31) {
                result = "Bảo Bình";
            }
            else {
                result = NaN;
            }
            break;
        case 2:
            if (1 <= date && date <= 18) {
                result = "Bảo Bình";
            }
            else if (date > 18 && date <= 29) {
                result = "Song Ngư";
            }
            else {
                result = NaN;
            }
            break;
        case 3:
            if (1 <= date && date <= 20) {
                result = "Song Ngư";
            }
            else if (date > 20 && date <= 31) {
                result = "Bạch Dương";
            }
            else {
                result = NaN;
            }
            break;
        case 4:
            if (1 <= date && date <= 19) {
                result = "Bạch Dương";
            }
            else if (date > 19 && date <= 30) {
                result = "Kim Ngưu";
            }
            else {
                result = NaN;
            }
            break;
        case 5:
            if (1 <= date && date <= 20) {
                result = "Kim Ngưu";
            }
            else if (date > 20 && date <= 31) {
                result = "Song Tử";
            }
            else {
                result = NaN;
            }
            break;
        case 6:
            if (1 <= date && date <= 21) {
                result = "Song Tử";
            }
            else if (date > 21 && date <= 30) {
                result = "Cự Giải";
            }
            else {
                result = NaN;
            }
            break;
        case 7:
            if (1 <= date && date <= 22) {
                result = "Cự Giải";
            }
            else if (date > 22 && date <= 31) {
                result = "Sư Tử";
            }
            else {
                result = NaN;
            }
            break;
        case 8:
            if (1 <= date && date <= 22) {
                result = "Sư Tử";
            }
            else if (date > 22 && date <= 31) {
                result = "Xử Nữ";
            }
            else {
                result = NaN;
            }
            break;
        case 9:
            if (1 <= date && date <= 22) {
                result = "Xử Nữ";
            }
            else if (date > 22 && date <= 30) {
                result = "Thiên Bình";
            }
            else {
                result = NaN;
            }
            break;
        case 10:
            if (1 <= date && date <= 23) {
                result = "Thiên Bình";
            }
            else if (date > 23 && date <= 31) {
                result = "Hồ Cáp";
            }
            else {
                result = NaN;
            }
            break;
        case 11:
            if (1 <= date && date <= 21) {
                result = "Hồ Cáp";
            }
            else if (date > 21 && date <= 30) {
                result = "Nhân Mã";
            }
            else {
                result = NaN;
            }
            break;
        case 12:
            if (1 <= date && date <= 21) {
                result = "Nhân Mã";
            }
            else if (date > 21 && date <= 31) {
                result = "Ma Kết";
            }
            else {
                result = NaN;
            }
            break;
        default:
            result = NaN;
    }
    if (!isNaN(result)) {
        alert(`Ngày ${date} tháng ${month} là cung ${result}`);
    } else {
        alert("Invalid value");
    }
} else {
    alert("Invalid value");
}