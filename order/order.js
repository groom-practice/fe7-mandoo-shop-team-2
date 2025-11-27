// const orderItem = JSON.parse(sessionStorage.getItem("order"));

const orderItem = [
  {
    id: 0,
    productName: "포토카드",
    productPrice: 10000,
    productImgFileName: "photoCard-01.png",
  },
];

const orderContainer = document.body.querySelector(".order-container");

const productImg = document.createElement("img");
productImg.src = `../imgs/${orderItem[0].productImgFileName}`;
productImg.alt = orderItem[0].productName;

const productName = document.createElement("p");
productName.innerText = orderItem[0].productName;

const productPrice = document.createElement("p");
productPrice.innerText = orderItem[0].productPrice;

orderContainer.appendChild(productImg);
orderContainer.appendChild(productName);
orderContainer.appendChild(productPrice);
