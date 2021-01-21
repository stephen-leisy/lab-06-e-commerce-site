// import functions and grab DOM elements
import { albums } from './album-data.js';
import { renderAlbums } from './render-albums.js';
// initialize state

// set event listeners to update state and DOM
const list = document.getElementById('list');

for (const album of albums) {

    const albumElement = renderAlbums(album);

    list.append(albumElement);
}