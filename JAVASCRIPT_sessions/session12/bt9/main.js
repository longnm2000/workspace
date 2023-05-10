let a = +prompt("a");
let b=+prompt("b");
let phepToan = prompt("Phep toan");
let result=0;
if (!isNaN(a)&&!isNaN(b)){
    switch (phepToan){
        case "+":
            result=a+b;
            break;
        case "-":
            result=a-b;
            break;
        case "*":
            result=a*b;
            break;
        case "/":
            result=a/b;
            break;
        default:
            result=NaN;
    }
    if (!isNaN(result)) {
        alert(`${a} ${phepToan} ${b} = ${result}`);
    } else {
        alert("Not vaild");
    }
}
else {
    alert("Not vaild");
}