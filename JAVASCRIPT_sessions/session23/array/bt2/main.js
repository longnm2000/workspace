function hasOddNumberDivisibleBy3(numberList) {
  for (let item of numberList) {
    if (item % 2 === 1 && item % 3 === 0) {
      console.log(item);
      return true;
    }
  }
  return false;
}
console.log(hasOddNumberDivisibleBy3([1, 2, 3, 4, 5, 6, 7]));
