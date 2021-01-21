import { cart } from '../cart/cart-data.js';
import { albums } from '../Products/album-data.js';
import { renderLineItems } from '../cart/render-line-items.js';
import { findByID, calcOrderTotal } from '../cart/cart-utils.js';

const tbody = document.querySelector('tbody');

for (const item of cart) {
    const album = findByID(albums, item.id);


    const tableRowInfo = renderLineItems(item, album);


    tbody.append(tableRowInfo);

}

const totalAmount = `$${calcOrderTotal(cart)}`;
const blankTd = document.createElement('td');
blankTd.textContent = `TOTAL`;
const blankTd2 = document.createElement('td')

tbody.append(blankTd, blankTd2, totalAmount);
