//This file should only handle 
//the API calls against Giphy's API and return data.

const input = document.querySelector("input");
//input value is what we type in searchfield

const giphySearch = function() {
fetch(`https://api.giphy.com/v1/gifs/search?api_key=YgmD4R9tFKiWIIe0UinPpSOpYhxH8nyG&q=${input.value}`)
    .then(response => response.json())
    .then(response => {
        const images = response.data; 
        images.forEach(image => {
            const image = new Image();
              image.src = response.data[0].images.downsized.url;
              // Add the image to the body.
              document.body.appendChild(image);
        });
            
    
              
            
    });

}

export default giphySearch;