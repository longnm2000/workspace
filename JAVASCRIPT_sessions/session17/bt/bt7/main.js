let inputNumbers = prompt("Nhập dãy số").split(",");

console.log(inputNumbers);
let newArray = [];
for (let i = 0; i < inputNumbers.length; i++) {
  if (inputNumbers[i] % 2 == 1) {
    newArray.push(+inputNumbers[i]);
    console.log(newArray);
  }
}

alert(inputNumbers + " => " + newArray.join(","));
