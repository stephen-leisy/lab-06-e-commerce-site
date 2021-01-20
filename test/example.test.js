// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderAlbums } from '../Products/render-albums.js';

const test = QUnit.test;

test('should take in an album and return a li', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const album = {
        id: 1,
        name: 'Sun Ra: Space Is The Place',
        image: 'sun-ra.png',
        description: `an excellent introduction to Sun Ra's vast and free-form jazz catalog`,
        category: 'jazz',
        price: 20,
    };

    const expected = `<li class="album-item">
    <h2 class="album-name">Sun Ra: Space Is The Place</h2>
    <img class="album-cover" src="../assets/sun-ra.png">


    <p class="description">an excellent introduction to Sun Ra's vast and free-form jazz catalog</p>
    <p class="category">Jazz</p>
    <p class="price">$20</p>
    <button class="add-to-cart">ADD TO CART</button>
</li>`;


    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderAlbums(album);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
