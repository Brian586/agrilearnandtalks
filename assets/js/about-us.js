import farmers from "./data/farmers.js";

document.addEventListener('DOMContentLoaded', () => {
    const farmersContainer = document.getElementById('about-us-farmers-list');

    farmersContainer.innerHTML = ''; // Clear existing content

    farmers.forEach(farmer => {
        const farmerHTML = `
            <div class="swiper-slide">
                <div class="farmer-style-one-item">
                    <div class="thumb">
                        <img src="${farmer.image}" alt="Image Not Found" style="width: 100%; height: 400px; object-fit: cover;">
                        <div class="social">
                            <i class="fas fa-share-alt"></i>
                            <ul>
                                <li class="facebook">
                                    <a href="${farmer.contact.social.facebook}" target="_blank">
                                        <i class="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li class="twitter">
                                    <a href="${farmer.contact.social.twitter}" target="_blank">
                                        <i class="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li class="instagram">
                                    <a href="${farmer.contact.social.instagram}" target="_blank">
                                        <i class="fab fa-instagram"></i>
                                    </a>
                                </li>
                                <li class="linkedin">
                                    <a href="${farmer.contact.social.linkedin}" target="_blank">
                                        <i class="fab fa-linkedin-in"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="info">
                        <span>${farmer.role}</span>
                        <h4><a href="farmer-details.html?id=${farmer.id}">${farmer.name}</a></h4>
                    </div>
                </div>
            </div>
        `;
        farmersContainer.innerHTML += farmerHTML;
    });
});