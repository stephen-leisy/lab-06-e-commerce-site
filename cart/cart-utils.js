import { albums } from '../Products/album-data.js';

export function findByID(array, ID) {
    for (const item of array) {
        if (ID === item.id) {
            return item;
        }
    }

}

export function calcItemTotal(cartQuantity, albumCost) {
    const result = cartQuantity * albumCost;
    return result;
}

export function calcOrderTotal(cartArray) {

    let orderTotal = 0;

    for (const item of cartArray) {
        const album = findByID(albums, item.id);
        const someTotal = calcItemTotal(item.quantity, album.price);
        orderTotal = orderTotal + someTotal;
    }

    return orderTotal;

}