const bakery = ["chocolate", "marshmallow", "cookies", "chips"];
const cart = [];
let isContinue = "";
do {
  let products = "";

  for (let i = 0; i < bakery.length; i++) {
    products += `${i + 1}. ${bakery[i]}\n`;
  }
  alert(products);
  let productBuy = prompt("Nhập tên sản phẩm muốn mua");
  if (bakery.includes(productBuy)) {
    let count = 0;
    let isInCart = false;
    let quantity = prompt("Nhập số lượng muốn mua");
    for (let i = 0; i < cart.length; i++) {
      if (cart[i][0] == productBuy) {
        isInCart = true;
        count = i;
        console.log(count);
        break;
      }
    }
    if (isInCart == false) {
      cart.push([productBuy, +quantity]);
    } else {
      cart[count][1] += +quantity;
    }
    console.log(cart);
  } else {
    alert("We don't have that item");
  }
  console.log(cart);
  isContinue = prompt("Bạn có tiếp tục mua không");
} while (isContinue == "yes");
