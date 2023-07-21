/**
 * Vừa gà vừa chó
 * Bó lại cho tròn
 * Ba mươi sáu con
 * Một trăm chân chẵn
 */
for (let i = 1; i < 36; i++) {
    if (2 * i + 4 * (36 - i) == 100) {
        console.log("ga: ", i, "cho: ", 36 - i);
    }
}
