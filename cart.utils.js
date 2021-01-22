const CART = 'CART';
const initialCart = [];
import { findByID } from './cart/cart-utils.js';

export function getCart() {
    const stringyCart = localStorage.getItem(CART);
    if (stringyCart) {
        const parseCart = JSON.parse(stringyCart);
        return parseCart;

    } else {
        const stringyDefaultCart = JSON.stringify(initialCart);
        localStorage.setItem(CART, stringyDefaultCart);
        return initialCart;
    }

}

export function clearCart() {
    const stringyDefaultCart = JSON.stringify(initialCart);
    localStorage.setItem(CART, stringyDefaultCart);

}
export function setCart(cart) {
    const stringyCart = JSON.stringify(cart);
    localStorage.setItem(CART, stringyCart);
}

export function addToCart(id, input) {
    const cart = getCart();
    const existItem = findByID(cart, id);
    const addQuantity = input;
    console.log(addQuantity);
    if (existItem) {
        existItem.quantity++;
    } else {
        const newItem = {
            id: id,
            quantity: addQuantity

        };

        cart.push(newItem);

    }

    setCart(cart);
}