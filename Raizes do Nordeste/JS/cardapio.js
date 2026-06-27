

const productsContainer =
  document.getElementById("products-container");

const cartItems =
  document.getElementById("cart-items");

const totalText =
  document.getElementById("total");

let cart = [];

/* Navegação */
const links = document.querySelectorAll(".menu a");

links.forEach(link => {
    link.addEventListener("click", () => {

        document
            .querySelector(".menu a.active")
            ?.classList.remove("active");

        link.classList.add("active");

        console.log("Página:", link.dataset.page);
    });
});

/* PRODUTOS */

const products = [

  /* PRATOS PRINCIPAIS */

  {
    name: "Cuscuz Nordestino",
    category: "Pratos Principais",
    price: 24.90,
    image: "img/cuscuz.jpg"
  },

  {
    name: "Baião de Dois",
    category: "Pratos Principais",
    price: 29.90,
    image: "img/Baião.jpg"
  },

  {
    name: "Carne de Sol",
    category: "Pratos Principais",
    price: 36.90,
    image: "img/Carne de sol.jpg"
  },

  /* BEBIDAS */

  {
    name: "Suco de Acerola",
    category: "Bebidas",
    price: 8.90,
    image: "img/suco acerola.jpg"
  },

  {
    name: "Café Nordestino",
    category: "Bebidas",
    price: 6.90,
    image: "img/café nordestino.jpg"
  },

  {
    name: "Caldo de Cana",
    category: "Bebidas",
    price: 9.90,
    image: "img/caldo cana.jpg"
  },

  /* SOBREMESAS */

  {
    name: "Pudim de Leite",
    category: "Sobremesas",
    price: 11.90,
    image: "img/Pudim leite.jpg"
  },

  {
    name: "Cartola",
    category: "Sobremesas",
    price: 13.90,
    image: "img/cartola.jpg"
  },

  {
    name: "Bolo de Macaxeira",
    category: "Sobremesas",
    price: 14.90,
    image: "img/bolo macaxeira.jpg"
  },

  /* COMBOS */

  {
    name: "Combo Café da Manhã",
    category: "Combos",
    price: 32.90,
    image: "img/café manhã.jpg"
  },

  {
    name: "Combo Nordestino",
    category: "Combos",
    price: 42.90,
    image: "img/combos nordestino.jpg"
  }

];

/* RENDERIZA PRODUTOS */

function renderProducts(productsList) {

  productsContainer.innerHTML = "";

  productsList.forEach(product => {

    const card = document.createElement("div");

    card.classList.add("product-card");

    card.innerHTML = `

  <img src="${product.image}" alt="${product.name}">

  <div class="product-body">

    <h3>${product.name}</h3>


    <span class="category">
      ${product.category}
    </span>

    <div class="price-cart">

      <strong>
        R$ ${product.price.toFixed(2)}
      </strong>

      <button
        onclick="addToCart('${product.name}', ${product.price})"
      >
        +
      </button>

    </div>

  </div>

`;

    productsContainer.appendChild(card);
  });
}

/* FILTRO */

function filterProducts(category) {

  const buttons =
    document.querySelectorAll(".category-btn");

  buttons.forEach(btn => {

    btn.classList.remove("active");

    if(btn.textContent.includes(category) ||
       (category === "Todos" &&
        btn.textContent.includes("Todos"))) {

      btn.classList.add("active");
    }
  });

  if(category === "Todos") {

    renderProducts(products);
    return;
  }

  const filtered = products.filter(
    product => product.category === category
  );

  renderProducts(filtered);
}

/* CARRINHO */

function addToCart(name, price) {

  cart.push({
    name,
    price
  });

  renderCart();
}

function renderCart() {

  cartItems.innerHTML = "";

  let total = 0;
  if(cart.length === 0){

    cartItems.innerHTML = `
        <div class="empty-cart">
            <div class="empty-icon">🛒</div>
            <h3>Seu carrinho está vazio</h3>
            <p>Adicione alguns sabores nordestinos!</p>
        </div>
    `;

    totalText.innerText = "Total: R$ 0,00";
    cartCount.innerText = 0;

    return;
  }

  cart.forEach((item, index) => {

    total += item.price;

    const div = document.createElement("div");

    div.classList.add("cart-item");

    div.innerHTML = `

      <div class="cart-item-info">

        <div>

          <p class="cart-name">
            ${item.name}
          </p>

          <span class="cart-price">
            R$ ${item.price.toFixed(2)}
          </span>

        </div>

        <button
          class="remove-btn"
          onclick="removeFromCart(${index})"
        >
          ✕
        </button>

      </div>

    `;

    cartItems.appendChild(div);
  });

  totalText.innerText =
    `Total: R$ ${total.toFixed(2)}`;

  /* CONTADOR */

  cartCount.innerText = cart.length;
}


const cartSidebar =
  document.getElementById("cartSidebar");

const cartCount =
  document.getElementById("cart-count");
  function toggleCart(){

  cartSidebar.classList.toggle("active");
}
function removeFromCart(index){

  cart.splice(index, 1);

  renderCart();
}

const modal =
document.getElementById("successModal");

function irParaPagamento() {

    if(cart.length === 0){

        const mensagem =
            document.getElementById("mensagemCarrinho");

        mensagem.classList.add("mostrar");

        setTimeout(() => {
            mensagem.classList.remove("mostrar");
        }, 3000);

        return;
    }

    window.location.href = "pagamento.html";
}

function closeModal(){

    modal.classList.remove("active");

    cart = [];

    renderCart();
}



/* INICIAR */

renderProducts(products);