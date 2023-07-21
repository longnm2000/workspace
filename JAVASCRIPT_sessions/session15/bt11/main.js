/**
 * Yêu nhau cau sáu bổ ba
 * Ghét nhau cau sáu bổ ra làm mười
 * Mỗi người một miếng trăm người
 * Có mười bảy quả hỏi người ghét yêu
 */


for (let i = 1; i < 17; i++) {
    if (3 * i + 10 * (17 - i) == 100) {
        console.log("yeu: ", i * 3, "ghet: ", 100 - 3 * i);
    }
}
