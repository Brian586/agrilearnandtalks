import services from "./data/services.js";
import testimonials from "./data/testimonials.js";

function separateLastWord(text) {
    const words = text.split(' '); // Split the string into an array of words
    const lastWord = words.pop(); // Remove and get the last word
    const restOfText = words.join(' '); // Join the remaining words back into a string
    return { restOfText, lastWord };
}


document.addEventListener('DOMContentLoaded', () => {
    const servicesContainer = document.getElementById('alt-services-list');

    servicesContainer.innerHTML = ''; // Clear existing content

    services.forEach(service => {
        const { restOfText, lastWord } = separateLastWord(service.title);

        const serviceHTML = `
            <div class="col-lg-4 col-md-6 service-one-single">
                <div class="service-style-one-item">
                    <div class="thumb">
                        <img src="${service.images[0]}" alt="${service.title}" style="width: 100%; border-radius: 6px; object-fit: cover;">
                    </div>
                    <div class="info">
                        <div class="top">
                            <h4><a href="services-details.html?id=${service.id}">${restOfText} <span>${lastWord}</span></a></h4>
                        </div>
                        <p>
                            ${service.description}
                        </p>
                    </div>
                    <a href="services-details.html?id=${service.id}" class="btn-angle"><i class="fas fa-arrow-right"></i></a>
                </div>
            </div>
        `;
        servicesContainer.innerHTML += serviceHTML;
    });

    const testimonialsContainer = document.getElementById('testimonials-list-container');

    testimonialsContainer.innerHTML = ''; // Clear existing content

    testimonials.forEach(testimonial => {
        const testimonialHTML = `
        <div class="swiper-slide">
            <div class="testimonial-style-two">
                <div class="item-info">
                    <div class="rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                    </div>
                    <p>
                        “${testimonial.quote}”
                    </p>
                </div>
                <div class="provider">
                    <div class="thumb">
                        <img src="${testimonial.image}" alt="${testimonial.name}" style="aspect-ratio: 1 / 1; object-fit: cover;">
                        <div class="quote">
                            <img src="assets/img/shape/quote.png" alt="${testimonial.name}">
                        </div>
                    </div>
                    <div class="info">
                        <div class="content">
                            <h4>${testimonial.name}</h4>
                            <span>${testimonial.role}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;

        testimonialsContainer.innerHTML += testimonialHTML;
    });
});