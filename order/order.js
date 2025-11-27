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

const orderName = document.body.querySelector("#order-name");
const orderPhone = document.body.querySelector("#order-phoneNum");
const orderAdd = document.body.querySelector("#order-address");

const orderBtn = document.body.querySelector("#submit-order");
const orderCancel = document.body.querySelector("a");

orderBtn.addEventListener("click", () => {
  const nameValue = orderName.value;
  const phoneValue = orderPhone.value;
  const addressValue = orderAdd.value;
  if (!nameValue) {
    alert("이름을 입력해 주세요.");
    return;
  }
  if (!phoneValue) {
    alert("전화번호를 입력해 주세요.");
    return;
  }
  if (!addressValue) {
    alert("주소를 입력해 주세요.");
    return;
  }

  alert(
    `주문자 이름: ${nameValue}\n전화번호: ${phoneValue}\n주소: ${addressValue}`
  );
  setTimeout(() => {
    window.location.href = "../index.html";
  }, 2000);
});

orderCancel.addEventListener("click", () => {
  alert("정말 주문을 취소하시겠습니까?");
});
