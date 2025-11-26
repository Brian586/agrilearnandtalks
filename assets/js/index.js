import services from "./data/services.js";
import activities from "./data/activities.js";
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

    const activitiesContainer = document.getElementById('recent-activities-swiper');

    activitiesContainer.innerHTML = ''; // Clear existing content

    activities.forEach(activity => {
        const activityHTML = `
            <div class="swiper-slide">
                <div class="gallery-style-one">
                    <img src="${activity.images[0]}" alt="${activity.title}" style="width: 100%; height: 100%; object-fit: cover;">
                    <div class="overlay">
                        <p>${activity.category}</p>
                        <h4><a href="activity-details.html?id=${activity.id}">${activity.title}</a></h4>
                    </div>
                </div>
            </div>
        `;
        activitiesContainer.innerHTML += activityHTML;
    });

    const testimonialsContainer = document.getElementById('testimonials-list-container');

    testimonialsContainer.innerHTML = ''; // Clear existing content

    testimonials.forEach(testimonial => {
        const testimonialHTML = `
            <div class="swiper-slide">
                <div class="testimonial-style-one">
                    <div class="thumb">
                        <img src="${testimonial.image}" alt="${testimonial.name}" style="aspect-ratio: 1 / 1; object-fit: cover;">
                    </div>
                    <div class="info">
                        <img src="assets/img/shape/quote-big.png" alt="Image Not Found">
                        <p>
                            “${testimonial.quote}”
                        </p>
                        <div class="provider">
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