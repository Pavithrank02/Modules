//Importing modules
// import  { addToCart, totalPrice, totalQuantity } from "./shoppingCart.js";
console.log('importing modules');

// // addToCart('bread', 5);

// // console.log(totalPrice, totalQuantity);

// import * as ShoppingCart from './shoppingCart.js'

// // ShoppingCart.addToCart('bread', 5);
// // import add, { addToCart, totalPrice, totalQuantity } from './shoppingCart.js'

// // add('pizza', 2);
// // console.log(totalPrice)

import add, {cart} from './shoppingCart.js'

add('pizza', 2);
add('bread', 4) 
add('apple', 6);

console.log(cart)

import cloneDeep from 'lodash-es';

const state = {
    cart: [{
        product:'bread', quantity:5},
    {
        product:'pizza', quantity:6
    }
],
user: { loggedIn: true}
};

const stateClone = Object.assign({}, state);
console.log(stateClone);

if(module.hot) {
    module.hot.accept()
}
class Person {
    greeting = 'hey'
    constructor(name) {
        this.name = name;
        console.log(`${this.greeting} ${this.name}`)
    }
}
const pavi = new Person('pavi');

console.log('Jonas' ?? null)

console.log(cart.find(el=>el.qunatity>=2))