const response = await fetch("../db.json");
const data = await response.json();

console.log(data);

const ul = document.querySelector("ul");

let currentPage = 1;
const postsPerPage = 5;

let posts = [];

async function fetchPosts() {
  const response = await fetch("../db.json");
  posts = await response.json();
  console.log(posts);
  displayPosts();
}

function displayPosts() {
  const getCartItems = JSON.parse(localStorage.getItem("products"));
  let cartIds = [];
  if (getCartItems) cartIds = getCartItems.map((item) => item.id);

  const container = document.getElementById("product-container");
  const start = (currentPage - 1) * postsPerPage;
  const end = currentPage * postsPerPage;
  const currentPosts = posts.slice(start, end);

  currentPosts.forEach((post) => {
    const postElement = document.createElement("li");
    postElement.classList.add("show", "hidden");
    postElement.innerHTML = `
      <img src="/imgs/${post.productImgFileName}" />
      <div>
      <h2>${post.productName}</h2>
      <p>${post.productPrice}</p>

      <button id="cart-${post.id}" class="addCartBtn" 
      ${cartIds.includes(post.id) ? "disabled" : ""}>Cart</button>
      <button id="order-${post.id}" class="orderBtn">Order</button>
      </div>
    `;
    container.appendChild(postElement);

    setTimeout(() => {
      postElement.classList.remove("hidden");
    }, 100);
  });

  currentPage++;

  setObserver();
}

function setObserver() {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);

        if (currentPage <= Math.ceil(posts.length / postsPerPage)) {
          displayPosts();
        }
      }
    });
  }, options);

  const lastPost = document.querySelector(".show:last-child");
  if (lastPost) {
    observer.observe(lastPost);
  }
}

fetchPosts();

ul.addEventListener("click", (e) => {
  const productId = e.target.id.split("-").pop();

  if (e.target.className === "addCartBtn") {
    const getCartItems = JSON.parse(localStorage.getItem("products"));

    let newCart = [];
    if (getCartItems) {
      newCart = [...getCartItems, posts[productId]];
    } else {
      newCart.push(posts[productId]);
    }

    localStorage.setItem("products", JSON.stringify(newCart));
    e.target.disabled = true;
    return;
  }

  if (e.target.className === "orderBtn") {
    sessionStorage.setItem("order", JSON.stringify(posts[productId]));
    const isConfirm = confirm(
      `${posts[productId].productName}을 주문하시겠습니까?`
    );
    if (isConfirm) location.href = "/order/index.html";
    return;
  }
});
