var swiper = new Swiper('.mySwiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
  navigation: {
    nextEl: '#next',
    prevEl: '#prev',
  },
});

const cartIcon = document.querySelector('.cartIcon');
const cartTab = document.querySelector('.cartTab');
const closeBtn = document.querySelector('.closeBtn');
const cardList = document.querySelector('.cardList');
const cartList = document.querySelector('.cartList');
const cartTotal = document.querySelector('.cartTotal');
const cartValue = document.querySelector('.cartValue');
const food = document.querySelector('.food');
const mobileMenu = document.querySelector('.mobileMenu');
const bars = document.querySelector('.fa-bars');
g


cartIcon.addEventListener('click', () => {
  cartTab.classList.add('cartTabActive');
})

closeBtn.addEventListener('click', () => {
  cartTab.classList.remove('cartTabActive');
})

food.addEventListener('click', () => {
  mobileMenu.classList.toggle('mobileMenuActive');
})

food.addEventListener('click', () => {
  bars.classList.toggle('fa-xmark');
})


let productList = [];
let cartProduct = [];

const updateTotals =
    () => {
      let totalPrice = 0;
      let totalQuantity = 0;

      document.querySelectorAll('.item').forEach(item => {
        const quantity =
            parseInt(item.querySelector('.quantityValue').textContent);
        const price = parseFloat(
            item.querySelector('.itemTotal').textContent.replace('₹', ''))
        totalPrice += price;
        totalQuantity += quantity;
      });
      cartTotal.textContent = `₹${totalPrice.toFixed(2)}`;
      cartValue.textContent = totalQuantity;
    }

const showCards = () => {
  productList.forEach(product => {
    const orderCard = document.createElement('div');
    orderCard.classList.add('orderCard');

    orderCard.innerHTML = `
    <div class="cardImage">
    <img src="${product.image}">
    </div>
    <h4>${product.name}</h4>
    <h4 class="price">${product.price}</h4>
    <a href="#" class="btn3 cardBtn"> Add to Cart</a>
    `;
    cardList.appendChild(orderCard);

    const cardBtn = orderCard.querySelector('.cardBtn');
    cardBtn.addEventListener('click', (e) => {
      e.preventDefault();
      addToCart(product);
    })
  })
};

const addToCart = (product) => {
  const existingProduct = cartProduct.find(item => item.id == product.id);
  if (existingProduct) {
    alert(`Item already in your cart`);
    return;
  }

  cartProduct.push(product);

  let quantity = 1;
  let price = parseFloat(product.price.replace('₹', ''));

  const cartItem = document.createElement('div');
  cartItem.classList.add('item');

  cartItem.innerHTML = `
  <div class="itemImage">
    <img src="${product.image}" alt="">
  </div>
  <div class="detail">
    <h4>${product.name}</h4>
    <h4 class="itemTotal" id="${product.id}">${product.price}</h4>
  </div>
  <div class="flex">
    <a href="#" class="quantityBtn minus">
      <i class="fa-solid fa-minus"></i>
    </a>
    <h4 class="quantityValue">${quantity}</h4>
    <a href="#" class="quantityBtn plus">
      <i class="fa-solid fa-plus"></i>
    </a>
  </div>
`;

  cartList.appendChild(cartItem);
  updateTotals();

  const plusBtn = cartItem.querySelector('.plus');
  const quantityValue = cartItem.querySelector('.quantityValue');
  const itemTotal = cartItem.querySelector('.itemTotal');


  plusBtn.addEventListener('click', (e) => {
    e.preventDefault();
    quantity++;
    quantityValue.textContent = quantity;
    itemTotal.textContent = `₹${(price * quantity).toFixed(2)}`;
    updateTotals();
  });

  const minusBtn = cartItem.querySelector('.minus');
  minusBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (quantity > 1) {
      quantity--;
      quantityValue.textContent = quantity;
      itemTotal.textContent = `₹${(price * quantity).toFixed(2)}`;
      updateTotals();
    } else {
      cartItem.classList.add('slideOut');
      setTimeout(() => {
        cartItem.remove();
        cartProduct = cartProduct.filter(item => item.id !== product.id);
        updateTotals();
      }, 300)
    }
  });
};



const initApp = () => {
  fetch('products.json')
      .then(response => {return response.json()})
      .then(data => {
        productList = data;
        showCards();
      })
};
initApp();


const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
});
backToTop.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({top: 0, behavior: 'smooth'});
});