let inputNumber = +prompt("Nhap so");
if (!isNaN(inputNumber)) {
    if (inputNumber >= 0 && Number.isInteger(Math.sqrt(inputNumber))) {
        alert(`${inputNumber} la so chinh phuong`);
    }
    else {
        alert(`${inputNumber} khong phai so chinh phuong`);
    }
} else {
    alert("Not vaild");
}