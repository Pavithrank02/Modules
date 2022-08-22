//Importing modules
// import  { addToCart, totalPrice, totalQuantity } from "./shoppingCart.js";
console.log('importing modules');

// addToCart('bread', 5);

// console.log(totalPrice, totalQuantity);

// import * as ShoppingCart from './shoppingCart.js'

// ShoppingCart.addToCart('bread', 5);
// import add, { addToCart, totalPrice, totalQuantity } from './shoppingCart.js'

// add('pizza', 2);
// console.log(totalPrice)

import add, {cart} from './shoppingCart.js'

add('pizza', 2);
add('bread', 4) 
add('apple', 6);

console.log(cart)
