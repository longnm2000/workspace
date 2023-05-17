let inputCharaters = prompt("Nhập Chuỗi Ký Tự");
function checkCharacter(n) {
  let chacracterList = n.split("");
  let checkedList = [];
  for (let i = 0; i < chacracterList.length; i++) {
    let count = 0;
    // console.log(checkedList);
    if (!checkedList.includes(chacracterList[i])) {
      for (let j = 0; j < chacracterList.length; j++) {
        if (chacracterList[i] == chacracterList[j]) {
          count++;
        }
      }
      checkedList.push(chacracterList[i]);
      console.log(`Ký tự ${chacracterList[i]} xuất hiện ${count} lần`);
    }
  }
}
console.log(checkCharacter(inputCharaters));
