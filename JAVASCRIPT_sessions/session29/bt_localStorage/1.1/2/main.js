let bookmarks = JSON.parse(localStorage.bookmarks);
const main = document.querySelector(".main");
const addBtn = document.querySelector("#add-btn");
const modalAdd = document.querySelector(".modal-add");
const closeModalAddBtn = document.querySelector(".close-btn");
const mainForm = document.getElementById("main-form");

function renderBookmark() {
  main.innerHTML = "";
  bookmarks.forEach((e) => {
    let bookmarkItem = `
            <div id="${e.id}" class="bookmark-item">
                <a href="${e.url}" target="_blank" rel="noopener noreferrer">${e.title}</a>
                <span class=""><i class="bi bi-x-lg delete-btn"></i></span>
            </div>
        `;
    main.insertAdjacentHTML("beforeend", bookmarkItem);
  });
}

renderBookmark();
addBtn.addEventListener("click", () => {
  modalAdd.style.display = "block";
});
closeModalAddBtn.addEventListener("click", () => {
  modalAdd.style.display = "none";
});

mainForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Hello World");
  bookmarks.push({
    id: bookmarks.length + 1,
    title: mainForm.web.value,
    url: mainForm.url.value,
  });
  console.log(bookmarks);
  localStorage.bookmarks = JSON.stringify(bookmarks);
  renderBookmark();
  mainForm.web.value = "";
  mainForm.url.value = "";
});

main.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    let findIndex = bookmarks.findIndex((element) => {
      return e.target.parentElement.parentElement.id == element.id;
    });
    bookmarks.splice(findIndex, 1);
    localStorage.bookmarks = JSON.stringify(bookmarks);
    renderBookmark();
  }
});

//FORM
/**
 * Form HTML dùng thể thu thập thông tin người dùng nhập vào trong các ô input
 * Sau đó form sẽ tiến hành gửi các thông tin đó đến 1 địa chỉ tại server để
 * lưu trữ thông tin trong các ô input
 * Mặc định form có 2 attribute
 * - method = ["POST","GET"]
 * - action = "địa chỉ thông tin được gửi đến"
 * Định nghĩa ra 1 địa chỉ trên server thông tin từ form có thể gửi đến được
 * Khi không khai báo gì trong action thì mặc định thông tin sẽ được gửi đến
 * địa chỉ là host đang host trang web của mình
 */
