let dictionary = {
  agile:
    "Agile is an iterative approach to project management and software development",
  scrum:
    "Scrum is a lightweight framework that helps people, teams and organizations generate value through adaptive solutions for complex problems.",
  aws: "Aws stands for Amazon web services, a cloud solution for web development",
  pm: "The short version  of Project Manager, the person in charge of the final result of a project",
  "ui/ux":
    "UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels",
};

let isContinue = "";

do {
  let inputNumber = +prompt(
    "Nhập số 1 để tìm kiếm trong từ điển. Nhập 2 để thêm từ mới và ý nghĩa của nó vào từ điển. Nhập 3 để hiện thị thông tin chi tiết"
  );

  function isInclude(obj, n) {
    let check = false;
    for (let key in obj) {
      if (n === key) {
        check = true;
        break;
      }
    }
    return check;
  }
  switch (inputNumber) {
    case 1:
      let inputWord = prompt("Enter a keyword");
      if (!isInclude(dictionary, inputWord)) {
        alert("We could not find your keyword: " + inputWord);
      } else {
        alert(`${inputWord}\n${dictionary[inputWord]}`);
      }
      break;
    case 2:
      let addWord = prompt("Enter a keyword");
      if (!isInclude(dictionary, addWord)) {
        dictionary[addWord] = prompt("Enter a infomation");
        alert(`Đã thêm\n\n ${addWord} - ${dictionary[addWord]}`);
        console.log(dictionary);
      } else {
        alert("Invalid Keyword");
      }

      break;
    case 3:
      let result = "";
      for (let key in dictionary) {
        result += `${key} - ${dictionary[key]}\n\n`;
      }
      alert(result);
      break;
    default:
      alert("Invalid Value");
  }
  isContinue = prompt("Có tiếp tục không? yes/no");
} while (isContinue === "yes");
