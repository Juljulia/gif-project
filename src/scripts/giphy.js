//This file should only handle 
//the API calls against Giphy's API and return data.

const input = document.querySelector("input");
const gallery = document.querySelector(".gallery");

const giphySearch = function() {
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=YgmD4R9tFKiWIIe0UinPpSOpYhxH8nyG&q=${input.value}`)
        .then(response => response.json())
        .then(json => {
            const images = json.data; 
            images.forEach(image => {
                const url = image.images.downsized.url;
                const galleryItem = `<a class="gallery__item"><img class="gallery__item__image" src="${url}"></a>`;
                gallery.innerHTML += galleryItem;
            });
        });
};

export default giphySearch;