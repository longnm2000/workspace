function hasEasyFrontend(arr) {
  if (arr.includes("frontend") && arr.includes("easy")) {
    return true;
  }
  for (let item of arr) {
    if (item.includes("frontend") && item.includes("easy")) {
      return true;
    }
  }
  return false;
}
console.log(hasEasyFrontend(["easy frontend"]));
