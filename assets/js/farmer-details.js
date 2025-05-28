import farmers from "./data/farmers.js";

document.addEventListener('DOMContentLoaded', () => {
    // Show loader
    const preloader = document.getElementById('preloader');
    preloader.style.display = 'block';

    // Get farmer ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    let farmerId = urlParams.get('id');

    farmerId.replaceAll('#', ''); // Remove any '#' characters from the ID

    // Find the farmer object
    const farmer = farmers.find(farmer => farmer.id === farmerId);

    if (farmer) {
        // Populate the highlighted section
        document.getElementById('farmer-image').src = farmer.image;
        document.getElementById('farmer-name').textContent = farmer.name;
        document.getElementById('farmer-role').textContent = farmer.role;
        document.getElementById('farmer-description').textContent = farmer.description;
        document.getElementById('farmer-email').textContent = farmer.contact.email;
        document.getElementById('farmer-email').href = `mailto:${farmer.contact.email}`;
        document.getElementById('farmer-phone').textContent = farmer.contact.phone;
        document.getElementById('farmer-phone').href = `tel:${farmer.contact.phone}`;
        document.getElementById('farmer-phone-btn').href = `tel:${farmer.contact.phone}`;
        document.getElementById('farmer-social-facebook').href = farmer.contact.social.facebook;
        document.getElementById('farmer-social-twitter').href = farmer.contact.social.twitter;
        document.getElementById('farmer-social-instagram').href = farmer.contact.social.instagram;
        document.getElementById('farmer-social-linkedin').href = farmer.contact.social.linkedin;
    } else {
        console.error('Farmer not found');
    }

    // Hide loader
    preloader.style.display = 'none';
});