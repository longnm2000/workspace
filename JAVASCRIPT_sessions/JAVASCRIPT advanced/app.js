/**
 * 1. Map
 * Thực hiện 1 hàm callback (()=>), duyệt qua các phần tử và tạo ra 1 mảng mới
 * Map nhận 3 tham số: 1 là element, 2 là index, 3 là array
 *
 */
// let numbers = [1, 2, 3, 4, 5];
// let newNumbers = numbers.map((number) => number * 2);
// console.log(newNumbers);

/**
 * 2. forEach
 * Thực hiện 1 hàm callback, duyệt qua các phần tử và không tạo ra mảng mới
 * forEach nhận 3 tham số: 1 là element, 2 là index, 3 là array
 */

/**
 * 3. find
 * Duyệt qua các phần tử trong mảng và trả về phần tử đầu tiên thỏa mãn điều kiện
 */

/**
 * 4. filter
 * Duyệt qua các phần tử trong mảng và trả về 1 mảng các phần tử thỏa mãn điều kiện
 */

/**
 * 5. Arrow function
 *
 */

/**
 * 6. Destructuring
 *
 */
// Array
// let numbers = [1, 2, 3];
// let [a, b] = numbers;
// console.log(a, b);
//Object
// let obj = { name: "dwadwa", age: 18, address: "dawdwa ddwa" };
// let { name, address } = obj;
// console.log(name, address);

/**
 * 7. Enhanced object literals
 * Định nghĩa key : value cho object
 * Định nghĩa biến cho object
 */

// let name = "Long";
// let age = 20;
// let course = "newCourse";

// let student = {
//   name,
//   age,
//   [course]: "Js",
// };
// console.log(student);

/**
 * 8. Rest Parameters
 * Trả về tham số nhận được
 * Khi sử dụng với Destructuring
 */

// function logNumber(a, ...rest) {
//   console.log(a);
//   console.log(rest);
// }
// logNumber(1, 2, 4);

/**
 * 9. Spread
 */

// let course = ["PHP", "Java", "ExpressJs"];
// let course2 = ["ReactJs", "AngularJs", "VueJs"];
// let newCourse = [...course, ...course2];
// console.log(newCourse);
