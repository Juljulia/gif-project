// This file should handle your application's 
//logic such as adding images to the gallery.

import giphySearch from "./giphy";

const searchButton = document.querySelector(".search__button");

searchButton.addEventListener("click", event => {
    event.preventDefault();

    giphySearch();

})

console.log('Hello Rollup');