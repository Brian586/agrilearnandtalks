import galleryImages from "./data/gallery-images.js";

document.addEventListener('DOMContentLoaded', () => {
    const galleryContainer = document.getElementById('gallery-masonary');

    galleryContainer.innerHTML = ''; // Clear existing content

    galleryImages.forEach(image => {
        const imageHTML = `
            <div class="gallery-item ${image.fullWidth ? 'width' : ''}">
                <div class="gallery-style-one">
                    <img src="${image.src}" alt="${image.alt}" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
            </div>
        `;
        galleryContainer.innerHTML += imageHTML;
    });
});