import { calcItemTotal } from '../cart/cart-utils.js';

export function renderLineItems(cart, album) {
    const quantity = cart.quantity;

    const tr = document.createElement('tr');
    const productTd = document.createElement('td');
    const quantityTd = document.createElement('td');
    const priceTd = document.createElement('td');

    productTd.textContent = album.name;
    quantityTd.textContent = quantity;
    priceTd.textContent = `$${calcItemTotal(quantity, album.price)}`;

    tr.append(productTd, quantityTd, priceTd);

    return tr;

}