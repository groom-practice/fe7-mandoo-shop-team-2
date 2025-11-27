// 로컬스토리지 가져와서 데이터바인딩
const cartUlEl = document.querySelector(".cart-container");

function displayCarts() {
  const cartItems = JSON.parse(localStorage.getItem("products"));

  if (!cartItems || cartItems.length === 0) {
    cartUlEl.innerHTML = "장바구니에 담긴 상품이 없습니다.";
    return;
  }

  // 기존 내용 지우고 다시 그리기
  cartUlEl.innerHTML = "";
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
  const cartItems = JSON.parse(localStorage.getItem("products"));

  if (!cartItems || cartItems.length === 0) {
    alert("장바구니에 삭제할 상품이 없습니다.");
    return;
  }

  const checkboxes = document.querySelectorAll(
    ".cart-container input[type='checkbox']:checked"
  );

  if (checkboxes.length === 0) {
    alert("삭제할 상품을 선택해주세요.");
    return;
  }

  const checkedIds = Array.from(checkboxes).map((checkbox) => checkbox.id);

  const updatedCart = cartItems.filter(
    (item) => !checkedIds.includes(item.productName)
  );

  if (updatedCart.length === 0) {
    localStorage.removeItem("products");
  } else {
    localStorage.setItem("products", JSON.stringify(updatedCart));
  }

  displayCarts();
});

// 전체삭제
const deleteAllBtn = document.querySelector(".delete-all-button");

deleteAllBtn.addEventListener("click", () => {
  const cartItems = JSON.parse(localStorage.getItem("products"));

  if (!cartItems || cartItems.length === 0) {
    alert("장바구니에 삭제할 상품이 없습니다.");
    return;
  }

  if (confirm("장바구니의 모든 상품을 삭제하시겠습니까?")) {
    localStorage.removeItem("products");
    displayCarts();
  }
});
