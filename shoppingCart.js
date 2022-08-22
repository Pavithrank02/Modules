//Exporting modules
console.log('Exporting modules');

const shippingCost = 10;
export const cart = [];

export const addToCart = function(product, quantity) {
    cart.push({product, quantity});
    console.log(`${quantity} ${product} added to cart`)
}

const totalPrice = 238; 
const totalQuantity = 6;

export {totalPrice, totalQuantity};

export default function(product, quantity) {
    cart.push({product, quantity});
    console.log(`${quantity} ${product} added to cart`)
}

