// This script will take the 9 most recent images from imgs/gallery
// and display them in the gallery div.
// TODO: alt text? captions? links? stuff per image

function Image(src, alt, href) {
    this.src = src;
    this.alt = alt;
    this.href = href;
    this.display = function() {
        // element for the HTML?
    }
}

// First, it will need to sort the imgs in gallery by date.
var images;

// Then, it creates an img element for each one in turn.

// Finally, it locates the gallery div and appends each image
// to the div in order, with associated captions.
var galleryNode = document.getElementById('gallery');

function placeholder() {
    galleryNode.textContent = "Hello World!";
}
galleryNode.onload = placeholder;
