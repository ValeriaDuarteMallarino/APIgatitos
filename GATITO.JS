const API_GATITOS = "https://api.thecatapi.com/v1/images/search";

document.addEventListener('DOMContentLoaded', function() {
    const botonDeGatito = document.getElementById('kittyButton');
    const kittyImgContainer = document.getElementById('kittyImg');

    botonDeGatito.addEventListener('click', function() {
        // Elimina la imagen anterior
        while (kittyImgContainer.firstChild) {
            kittyImgContainer.removeChild(kittyImgContainer.firstChild);
        }

        fetch(API_GATITOS)
            .then(response => response.json())
            .then(data => {
                const imageUrl = data[0].url;
                const img = document.createElement('img');
                img.src = imageUrl;
                kittyImgContainer.appendChild(img);
            })
            .catch(error => {
                console.error('No eres un gatito :(', error);
            });
    });
});


