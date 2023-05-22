let str = prompt("Nhập chuỗi").toLowerCase().split("");
console.log(str);
function statisticsCharacters(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      str[i] = "space";
    }
  }
  let obj = {};
  let checkedList = [];
  for (let i = 0; i < str.length; i++) {
    if (!checkedList.includes(str[i])) {
      checkedList.push(str[i]);
      let count = 0;
      for (let j = i; j < str.length; j++) {
        if (str[i] === str[j]) {
          count++;
        }
      }
      obj[str[i]] = count;
    }
  }
  console.log(obj);
  console.log(str);
}
statisticsCharacters(str);
