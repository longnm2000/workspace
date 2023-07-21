/**
 * Viết một đoạn script cho phép người dùng nhập vào 1 dãy tên ngăn cách nhau bởi dấu phẩy.
 * Tạo một mảng mới gồm các phần tử con trong mảng được bọc bởi dấu <>.
 * Sau đó sử dụng alert in ra chuỗi giống như demo bên dưới.
 */
let inputArray = prompt("Nhập danh sách các tên").split(",");
let newArray = [];
for (let i = 0; i < inputArray.length; i++) {
  newArray.push(`<${inputArray[i]}>`);
}
alert(inputArray + " => " + newArray);
