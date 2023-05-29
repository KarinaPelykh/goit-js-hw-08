// Add imports above this line

import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const listGallery = document.querySelector(".gallery");

const galleryFoto = galleryItems.map(({ preview, original, description }) => {
return `  <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
    
    
});listGallery.insertAdjacentHTML("beforeend", galleryFoto.join(''))
new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250
});