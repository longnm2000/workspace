let numberInput = prompt("Input number");
let numberArray = numberInput.split(",");
console.log(numberArray);
let result = 0;
for (let i = 0; i < numberArray.length; i++) {
  result += Number(numberArray[i]);
}
alert("The sum of them is " + result);
