export function renderAlbums(album) {

    const li = document.createElement('li');
    li.classList.add('album-item');

    const h2 = document.createElement('h2');
    h2.classList.add('album-name');
    h2.textContent = album.name;
    li.append(h2);

    const img = document.createElement('img');
    img.classList.add('album-cover');
    img.src = `../assets/${album.image}`;
    li.append(img);


    const pDescription = document.createElement('p');
    pDescription.classList.add('description');
    pDescription.textContent = album.description;
    li.append(pDescription);

    const pCategory = document.createElement('p');
    pCategory.classList.add('category');
    pCategory.textContent = album.category;
    li.append(pCategory);

    const pPrice = document.createElement('p');
    pPrice.classList.add('price');
    pPrice.textContent = `$${album.price}`;
    li.append(pPrice);

    const addToCartButton = document.createElement('button');
    addToCartButton.classList.add('add-to-cart');
    addToCartButton.textContent = `ADD TO CART`;
    li.append(addToCartButton);

    return li;
}
