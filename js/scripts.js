/* That script for star ratings*/
const starRatings = document.querySelectorAll('.star-rating');

starRatings.forEach(starRating => {
  const spans = starRating.querySelectorAll('.star');
  let rating = parseInt(starRating.getAttribute('data-rating'));

  spans.forEach((span, index) => {
    span.addEventListener('click', () => {
      rating = index + 1;
      updateStarRating(spans, rating);
    });

    if (index < rating) {
      span.classList.add('active');
    } else {
      span.classList.remove('active');
    }
  });
});

function updateStarRating(spans, rating) {
  spans.forEach(span => {
    if (parseInt(span.getAttribute('data-rating')) <= rating) {
      span.classList.add('active');
    } else {
      span.classList.remove('active');
    }
  });

  const parent = starRating.parentNode;
  parent.setAttribute('data-rating', rating);
}

/* That script for shopping cart */
$('.add-to-cart').on('click', function(e) {
  e.preventDefault();

  // Get the product ID
  var productId = $(this).closest('.card').data('product-id');

  // Update the cart count
  var cartCount = parseInt($('.my-cart_quantity').text());
  cartCount++;
  $('.my-cart_quantity').text(cartCount);

  /* This Script for Add product to the cart */
  var product = {
    id: productId,
    name: $(this).closest('.card').find('.card-title').text(),
    price: $(this).closest('.card').find('.card-text').text()
  };

  addToCart(product);
});

function addToCart(product) {
  // Get the current cart items
  var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  // If the cart is empty, delete any existing products
  if (cartItems.length === 0) {
    localStorage.removeItem('cartItems');
  }

  /*This Script for Add the product to the cart items */
  cartItems.push(product);

  // Save the cart items to local storage
  localStorage.setItem('cartItems', JSON.stringify(cartItems));

  // Display the cart items in the cart icon
  displayCartItems();
}

function displayCartItems() {
  // Get the cart items from local storage
  var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  // Display the cart count
  var cartCount = cartItems.length;
  $('.my-cart_quantity').text(cartCount);

  // Display the cart items
  var cartHtml = '';
  cartItems.forEach(function(item) {
    cartHtml += `<div class="cart-item">
                  <span class="cart-item-name">${item.name}</span>
                  <span class="cart-item-price">${item.price}</span>
                </div>`;
  });
  $('.my-cart_items').html(cartHtml);
}

function addToCart(product) {


  // If the cart is empty, delete any existing products
  if (cartItems.length === 0) {
    localStorage.removeItem('cartItems');
  }

  // Add the product to the cart items
  cartItems.push(product);

  // Save the cart items to local storage
  localStorage.setItem('cartItems', JSON.stringify(cartItems));

  // Display the cart items in the cart icon
  displayCartItems();
}

/*This Script for All heart at Imges */
const pictureHearts = document.querySelectorAll('.heart i');
const headerHeart = document.getElementById('header-heart');

let headerHeartClicked = false;

// Add an event listener to each heart icon
const heart = document.querySelectorAll('.heart');
heart.forEach(item => {
  item.addEventListener('click', () => {
    // Toggle the 'red' class for the clicked heart icon
    item.classList.toggle('red');

    // If the header heart icon hasn't been clicked before, toggle its 'red' class
    if (!headerHeartClicked) {
      headerHeart.classList.toggle('red');
      headerHeartClicked = true;
    }

    // Update the 'data-count' attribute of the header heart icon
    headerHeart.setAttribute('data-count', document.querySelectorAll('.heart.red i').length);

    // If there are no red heart icons, remove the 'red' class from the header heart icon
    if (document.querySelectorAll('.heart.red i').length === 0) {
      headerHeart.classList.remove('red');
      headerHeartClicked = false;
    }
  });

});
