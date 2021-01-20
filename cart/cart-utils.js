export function findByID(array, ID) {
    for (const item of array) {
        if (ID === item.id) {
            return item;
        }
    }

}

export function calcItemTotal(cartQuantity, albumCost) {
    const result = cartQuantity * Number(albumCost.price);
    return result;
}