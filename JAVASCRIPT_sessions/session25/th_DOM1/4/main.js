const liList = document.getElementsByTagName("li");
console.log(liList);
console.log(liList[0]);
for (let i = 0; i < liList.length; i++) {
  console.log(liList[i].textContent);
}
