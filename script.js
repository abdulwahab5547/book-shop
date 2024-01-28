const viewCartBtn = document.getElementById('view-cart');
const theCart = document.getElementById('cart');
const closeCartBtn = document.getElementById('closeCartBtn');
const cartTotal = document.getElementById('cartTotal');
const cartItems = document.getElementById('cartItems');


let totalPrice = 0;
let cart = [];

let atomicPrice = 5;
let nowPrice = 3;
let alchemistPrice = 6;
let deepPrice = 2;
let rulesPrice = 7;
let thinkPrice = 8;

let atomic = document.getElementById('atomic');
atomic.addEventListener('click', function() {
    addToCart(atomicName, atomicPrice);
});

const atomicName = 'Atomic Habits';

let now = document.getElementById('now');
now.addEventListener('click', function() {
    addToCart(nowName, nowPrice);
});

const nowName = 'The Power of Now';

let alchemist = document.getElementById('alchemist');
alchemist.addEventListener('click', function() {
    addToCart(alchemistName, alchemistPrice);
});

const alchemistName = 'The Alchemist';



let deep = document.getElementById('deep');
deep.addEventListener('click', function() {
    addToCart(deepName, deepPrice);
});

const deepName = 'Deep Work';

let rules = document.getElementById('rules');
rules.addEventListener('click', function() {
    addToCart(rulesName, rulesPrice);
});

const rulesName = 'Forty rules of love';

let think = document.getElementById('think');
think.addEventListener('click', function() {
    addToCart(thinkName, thinkPrice);
});

const thinkName = 'Think and Grow Rich';



function addToCart(book, bookPrice) {
    const existingCartItem = cart.find(item => item.name === book);

    if (existingCartItem) {
        existingCartItem.quantity += 1;
    } else {
        cart.push({ name: book, price: bookPrice, quantity: 1 });
    }

    totalPrice += bookPrice;
    cartTotal.innerHTML = totalPrice.toFixed(2);

    updateCartItemsDisplay();
}

function removeFromCart(bookName) {
    const existingCartItemIndex = cart.findIndex(item => item.name === bookName);

    if (existingCartItemIndex !== -1) {
        const existingCartItem = cart[existingCartItemIndex];
        existingCartItem.quantity -= 1;

        if (existingCartItem.quantity <= 0) {
            // Remove the item from the cart if the quantity is zero or negative
            cart.splice(existingCartItemIndex, 1);
        }

        totalPrice -= existingCartItem.price; // Subtract the price when removing
        cartTotal.innerHTML = totalPrice.toFixed(2);
    }

    updateCartItemsDisplay();
}

function increaseQuantity(bookName) {
    const existingCartItem = cart.find(item => item.name === bookName);

    if (existingCartItem) {
        existingCartItem.quantity += 1;
        totalPrice += existingCartItem.price; // Add the price when increasing
        cartTotal.innerHTML = totalPrice.toFixed(2);
    }

    updateCartItemsDisplay();
}

function updateCartItemsDisplay() {
    // Clear existing cart items
    cartItems.innerHTML = "";

    // Populate cart items from the array
    cart.forEach(function (item) {
        const li = document.createElement('p');
        li.className = 'cart-item';
        li.textContent = `${item.name} - $${item.price.toFixed(2)} x${item.quantity}`;

        // Create a remove button for each item
        const removeButton = document.createElement('button');
        removeButton.innerHTML = '<i class="fa-solid fa-minus"></i>';
        removeButton.className = 'cart-button-style';
        removeButton.addEventListener('click', function () {
            removeFromCart(item.name);
        });

        // Increase button
        const increaseButton = document.createElement('button');
        increaseButton.innerHTML = '<i class="fa-solid fa-plus"></i>';
        increaseButton.className = 'cart-button-style';
        increaseButton.addEventListener('click', function () {
            increaseQuantity(item.name);
        });

        li.appendChild(removeButton);
        li.appendChild(increaseButton);
        cartItems.appendChild(li);
    });
}



// View cart

viewCartBtn.addEventListener('click', function() {
    theCart.style.right = '0';
});

// Close cart

closeCartBtn.addEventListener('click', function() {
    theCart.style.right = '-400px';
});


// Displaying alert

// const addAlertBtn = document.querySelectorAll('.add-alert');

// addAlertBtn.forEach(function(addAlertBtn) {
//     addAlertBtn.addEventListener('click', function() {
//       alert('Added to cart');
//     });
//   });

document.querySelectorAll('.add-alert').forEach(function(button) {
    button.addEventListener('click', function() {
      displayMessage('This is a non-intrusive message!');
    });
  });

  // Add event listener to the "cross-icon" element
  document.getElementById('cross-icon').addEventListener('click', function() {
    // Hide the "added-bar" element
    document.getElementById('added-bar').style.display = 'none';
  });

  function displayMessage(message) {
    // Show the element with id "added-bar"
    document.getElementById('added-bar').style.display = 'block';

    // Set a timeout to hide the element after a certain duration (e.g., 3 seconds)
    setTimeout(function() {
      // Hide the element with id "added-bar"
      document.getElementById('added-bar').style.display = 'none';
    }, 6000); // 3000 milliseconds = 3 seconds
}