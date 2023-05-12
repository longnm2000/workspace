let numberInput = prompt("Input number");
let numberArray = numberInput.split(",");
console.log(numberArray);
let result = +numberArray[0];
console.log(result);
for (let i = 1; i < numberArray.length; i++) {
  if (Number(numberArray[i]) < result) result = Number(numberArray[i]);
}
alert("The smallest number is " + result);
