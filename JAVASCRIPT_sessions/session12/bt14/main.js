let a = +prompt("a");
let b = +prompt("b");
let c = +prompt("c");
let result=false;
if(!isNaN(a)&&!isNaN(b)&&!isNaN(c) && a>0&&b>0&&c>0){
    if (a+b>c &&a+c>b&&b+c>a) {
        result=true;
    }
    if (result===true){
        alert("Đây là hình tam giác");
    }else{
        alert("Đây không phải hình tam giác")
    }
}else{
    alert("Invalid value");
}

