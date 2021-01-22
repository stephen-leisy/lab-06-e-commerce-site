const CART = 'CART';
const initialCart = [];
import { findByID } from './cart/cart-utils.js';

export function getCart() {
    const stringyCart = localStorage.getItem(CART);

    if (stringyCart) {
        const parceCart = JSON.parce(stringyCart);
        return parceCart;
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
    localStorage.setItem(stringyCart);
}

export function addToCart(id) {
    const cart = getCart();
    const newItem = findByID(cart, id);
    if (newItem) {
        newItem.quantity++;
    } else {
        const newItem = {
            id: id,
            quantity: 1

        };
        cart.push(newItem);
    }
    setCart(newItem);
}