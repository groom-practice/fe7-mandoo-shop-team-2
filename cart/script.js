// 로컬스토리지 가져와서 데이터바인딩
const cartUlEl = document.querySelector(".cart-container");

const cartItems = JSON.parse(localStorage.getItem("products"));

function displayCarts() {
  if (!cartItems) {
    cartUlEl.innerHTML = "장바구니에 담긴 상품이 없습니다.";
    return;
  }

  cartItems.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `<input type="checkbox" id="${item.productName}" /><label for="${item.productName}">${item.productName}</label>`;
    cartUlEl.appendChild(li);
  });
}
displayCarts();

// 선택삭제
const deleteButton = document.querySelector(".delete-button");

deleteButton.addEventListener("click", () => {
  // 삭제누르면 새롭게 반영된 장바구니 데이터 가져오기
  const cartItems = JSON.parse(localStorage.getItem("products"));

  const checkboxes = document.querySelectorAll(
    ".cart-container input[type='checkbox']:checked"
  );
  const checkedIds = Array.from(checkboxes).map((checkbox) => checkbox.id);

  const updatedCart = cartItems.filter(
    (item) => !checkedIds.includes(item.productName)
  );

  if (updatedCart.length === 0) {
    localStorage.removeItem("products");
    cartUlEl.innerHTML = "장바구니에 담긴 상품이 없습니다.";
    return;
  }

  localStorage.setItem("products", JSON.stringify(updatedCart));

  cartUlEl.innerHTML = "";
  updatedCart.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `<input type="checkbox" id="${item.productName}" /><label for="${item.productName}">${item.productName}</label>`;
    cartUlEl.appendChild(li);
  });
});

//전체삭제
const deleteAllBtn = document.querySelector(".delete-all-button");

deleteAllBtn.addEventListener("click", () => {
  localStorage.removeItem("products");
  location.reload();
});
