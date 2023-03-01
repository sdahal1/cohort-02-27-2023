/*
  Write each function according to the instructions.
  
  When a function's parameters reference `cart`, it references an object that looks like the one that follows.
  {
    "Gold Round Sunglasses": { quantity: 1, priceInCents: 1000 },
    "Pink Bucket Hat": { quantity: 2, priceInCents: 1260 }
  }
*/

function calculateCartTotal(cart) {
  console.log("cart is this", cart)
  for(const key in cart){
    console.log(key)
  }
}

const cart1 = {
  "Canvas Tote Bag": { quantity: 2, priceInCents: 1800 },
  "Black and White Chuck On Dress": { quantity: 1, priceInCents: 4400 },
  "Natural Straw Wide Brim Hat": { quantity: 1, priceInCents: 2250 },
  "Blue Stripe Casual Shirt": { quantity: 3, priceInCents: 2000 },
};

calculateCartTotal(cart1)

function printCartInventory(cart) {}

module.exports = {
  calculateCartTotal,
  printCartInventory,
};
