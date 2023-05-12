/**
 * Cho mảng số tự nhiên bất kỳ 
const numbers = [32, 52, 1, 9, -1, 8, 4, 3, 10];
Tìm số lớn nhất có ở trong mảng và in ra màn hình console
Tìm số bé nhất có ở trong mảng và in ra màn hình console
Tính tổng toàn bộ phần tử có ở trong mảng và in ra màn hình console
Tính tích toàn bộ phần tử có ở trong mảng và in ra màn hình console
Tính trung bình cộng toàn bộ phần tử có trong mảng và in ra màn hình console
In ra toàn bộ số có ở trong mảng theo chiều thuận và nghịch
Sắp xếp toàn bộ các phần tử trong mảng theo thứ tự tăng dần (Google search “Array sort in JS”)

 */

const numbers = [32, 52, 1, 9, -1, 8, 4, 3, 10];
let min = numbers[0],
  max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (min < numbers[i]) min = numbers[i];
}
console.log("Min: ", min);
for (let i = 1; i < numbers.length; i++) {
  if (max > numbers[i]) max = numbers[i];
}
console.log("Max: ", max);
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log("Tổng: ", sum);
let times = 1;
for (let i = 0; i < numbers.length; i++) {
  times *= numbers[i];
}
console.log("Tích: ", times);
console.log("Trung bình cộng: ", sum / numbers.length);
numbers.sort((a, b) => a - b);
let sortNumber = "";
for (let i = 0; i < numbers.length; i++) {
  sortNumber += `${numbers[i]}  `;
}
console.log("Sắp xếp tăng dần: ", sortNumber);
numbers.reverse();
sortNumber = "";
for (let i = 0; i < numbers.length; i++) {
  sortNumber += `${numbers[i]}  `;
}
console.log("Sắp xếp giảm dần: ", sortNumber);
