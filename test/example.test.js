// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderAlbums } from '../Products/render-albums.js';
import { findByID, calcItemTotal, calcOrderTotal } from '../cart/cart-utils.js';
import { renderLineItems } from '../cart/render-line-items.js';
import { clearCart, getCart, setCart } from '../cart.utils.js';



const test = QUnit.test;

test('should take in an album and return a li', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const album = {
        id: 1,
        name: 'Sun Ra: Space Is The Place',
        image: 'sun-ra.png',
        description: `an excellent introduction to Sun Ra's vast and free-form jazz catalog`,
        category: 'Jazz',
        price: 20,
    };

    const expected = `<li class="album-item"><h2 class="album-name">Sun Ra: Space Is The Place</h2><img class="album-cover" src="../assets/sun-ra.png"><p class="description">an excellent introduction to Sun Ra's vast and free-form jazz catalog</p><p class="category">Jazz</p><p class="price">$20</p><button class="add-to-cart">ADD TO CART</button></li>`;


    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderAlbums(album);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('should take in album and 3 and return Kate Bush: Hounds of Love', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const album = [
        {
            id: 1,
            name: 'Sun Ra: Space Is The Place',
            image: 'sun-ra.png',
            description: `an excellent introduction to Sun Ra's vast and free-form jazz catalog`,
            category: 'jazz',
            price: 20,
        },
        {
            id: 2,
            name: 'Os Mutantes: s/t',
            image: 'osmutantes.png',
            description: `the debut eponymous album by the Brazilian tropicalia band Os Mutantes`,
            category: 'tropicalia',
            price: 18,
        },
        {
            id: 3,
            name: 'Kate Bush: Hounds Of Love',
            image: 'kate-bush.png',
            description: `the fifth studio album by English singer-songwriter and musician Kate Bush`,
            category: 'art pop',
            price: 22,
        },
        {
            id: 4,
            name: 'Beach Boys: Pet Sounds',
            image: 'beach-boys.png',
            description: `Maybe the best record ever recorded?`,
            category: 'pop',
            price: 21,
        },
        {
            id: 5,
            name: 'Sam Cooke: Live At The Harlem Square Club',
            image: 'sam-cooke.png',
            description: `the second live album by the American singer-songwriter Sam Cooke`,
            category: 'soul',
            price: 24,
        },
        {
            id: 6,
            name: 'Duster: Stratosphere',
            image: 'duster.png',
            description: `the debut studio album by American space-rock band Duster`,
            category: 'slowcore',
            price: 23,
        },
        {
            id: 7,
            name: 'WITCH: Lazy Bones',
            image: 'witch.png',
            description: `One of the defining albums from the zam-rock movement`,
            category: 'zam-rock',
            price: 21,
        },
        {
            id: 8,
            name: 'The Cure: The Head On The Door',
            image: 'cure.png',
            description: `the Cure's first truly pop record`,
            category: 'new-wave',
            price: 18,
        },
    ];

    const expected = {
        id: 3,
        name: 'Kate Bush: Hounds Of Love',
        image: 'kate-bush.png',
        description: `the fifth studio album by English singer-songwriter and musician Kate Bush`,
        category: 'art pop',
        price: 22
    };


    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findByID(album, 3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('should take in 2 and 22 and return 44', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const album = {
        id: 3,
        name: 'Kate Bush: Hounds Of Love',
        image: 'kate-bush.png',
        description: `the fifth studio album by English singer-songwriter and musician Kate Bush`,
        category: 'art pop',
        price: 22,
    };
    const expected = 44;


    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calcItemTotal(2, album.price);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('should take in the cart and album data and return td', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const cart = {
        id: 3,
        quantity: 2

    };
    const album = {
        id: 3,
        name: 'Kate Bush: Hounds Of Love',
        image: 'kate-bush.png',
        description: `the fifth studio album by English singer-songwriter and musician Kate Bush`,
        category: 'art pop',
        price: 22,

    };

    const expected = `<tr><td>Kate Bush: Hounds Of Love</td><td>2</td><td>$44</td></tr>`;


    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderLineItems(cart, album);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('should take number of items in cart and price of each item and return the total', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const cart = [
        {
            id: 3,
            quantity: 2

        },
        {
            id: 7,
            quantity: 1
        },
        {
            id: 5,
            quantity: 3
        },
    ];
    const albums = [
        {
            id: 1,
            name: 'Sun Ra: Space Is The Place',
            image: 'sun-ra.png',
            description: `an excellent introduction to Sun Ra's vast and free-form jazz catalog`,
            category: 'jazz',
            price: 20,
        },
        {
            id: 2,
            name: 'Os Mutantes: s/t',
            image: 'osmutantes.png',
            description: `the debut eponymous album by the Brazilian tropicalia band Os Mutantes`,
            category: 'tropicalia',
            price: 18,
        },
        {
            id: 3,
            name: 'Kate Bush: Hounds Of Love',
            image: 'kate-bush.png',
            description: `the fifth studio album by English singer-songwriter and musician Kate Bush`,
            category: 'art pop',
            price: 22,
        },
        {
            id: 4,
            name: 'Beach Boys: Pet Sounds',
            image: 'beach-boys.png',
            description: `Maybe the best record ever recorded?`,
            category: 'pop',
            price: 21,
        },
        {
            id: 5,
            name: 'Sam Cooke: Live At The Harlem Square Club',
            image: 'sam-cooke.png',
            description: `the second live album by the American singer-songwriter Sam Cooke`,
            category: 'soul',
            price: 24,
        },
        {
            id: 6,
            name: 'Duster: Stratosphere',
            image: 'duster.png',
            description: `the debut studio album by American space-rock band Duster`,
            category: 'slowcore',
            price: 23,
        },
        {
            id: 7,
            name: 'WITCH: Lazy Bones',
            image: 'witch.png',
            description: `One of the defining albums from the zam-rock movement`,
            category: 'zam-rock',
            price: 21,
        },
        {
            id: 8,
            name: 'The Cure: The Head On The Door',
            image: 'cure.png',
            description: `the Cure's first truly pop record`,
            category: 'new-wave',
            price: 18,
        },
    ];

    const expected = 137;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calcOrderTotal(cart, albums);
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('if cart is empty function should return []', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const cart = [];


    const expected = (cart, []);


    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getCart(cart);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('if cart has items it should return the item ID and quantity', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const staticCart = [
        {
            id: 3,
            quantity: 2

        },
        {
            id: 7,
            quantity: 1
        },
    ];

    const stringCart = JSON.stringify(staticCart);
    localStorage.setItem('CART', stringCart);


    //Act 
    // Call the function you're testing and set the result to a const
    const cart = getCart();

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(cart, staticCart);
});

test('setCart should push items to local storage', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const Cart = [{ id: 3, quantity: 2 }, { id: 7, quantity: 1 }];
    setCart(Cart);
    const stringyCart = JSON.stringify(Cart);
    // localStorage.setItem('CART', stringyCart);






    //Act 
    // Call the function you're testing and set the result to a const


    const actual = localStorage.getItem('CART');


    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, stringyCart);
});

test('clearCart should clear all cart items', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const staticCart = [{ id: 3, quantity: 2 }, { id: 7, quantity: 1 }];

    const stringyCart = JSON.stringify(staticCart);
    localStorage.setItem('CART', stringyCart);
    clearCart();


    const expected = JSON.stringify([]);
    const actual = localStorage.getItem('CART');




    //Act 
    // Call the function you're testing and set the result to a const
    // const actual = localStorage.getItem('CART');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});
