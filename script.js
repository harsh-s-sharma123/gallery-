document.addEventListener("DOMContentLoaded", function() {
    const imageContainer = document.getElementById("image-container");

    // Path to your image folder
    const imagePath = "media/";

    // Fetch images from the folder
    fetchImages(imagePath);

    function fetchImages(path) {
        fetch(path)
            .then(response => response.text())
            .then(data => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(data, "text/html");
                const images = Array.from(doc.querySelectorAll("a"))
                    .filter(link => link.href.match(/\.(jpe?g|png|gif)$/))
                    .map(link => link.href);

                displayImages(images);
            });
    }

    function displayImages(images) {
        images.forEach(image => {
            const imgElement = document.createElement("img");
            imgElement.src = image;
            imageContainer.appendChild(imgElement);
        });
    }
});
