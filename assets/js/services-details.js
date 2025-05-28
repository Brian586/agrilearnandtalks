import services from "./data/services.js";

document.addEventListener('DOMContentLoaded', () => {
    // Show loader
    const preloader = document.getElementById('preloader');
    preloader.style.display = 'block';

    // Get team member ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    let serviceId = urlParams.get('id');

    serviceId.replaceAll('#', ''); // Remove any '#' characters from the ID

    // Find the service object
    const service = services.find(service => service.id === serviceId);

    if (service) {
        // Populate the highlighted section
        document.getElementById('service-first-image').src = service.images[0];
        document.getElementById('service-title').textContent = service.title;
        document.getElementById('service-description').textContent = service.description;

        const faqsContainer = document.getElementById('faqAccordion');

        faqsContainer.innerHTML = ''; // Clear existing content

        // Populate the FAQs
        service.faqs.forEach((faq, index) => {
            const faqHTML = `
            <div class="accordion-style-two">
                <h2 class="accordion-header" id="heading${index}">
                    <button class="accordion-button ${index === 0 ? '' : 'collapsed'}" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapse${index}" aria-expanded="${index === 0 ? 'true' : 'false'}"
                        aria-controls="collapse${index}">
                        ${faq.question}
                    </button>
                </h2>
                <div id="collapse${index}" class="accordion-collapse collapse ${index === 0 ? 'show' : ''}"
                    aria-labelledby="heading${index}" data-bs-parent="#faqAccordion">
                    <div class="accordion-body">
                        <p>${faq.answer}</p>
                    </div>
                </div>
            </div>
        `;
            faqsContainer.innerHTML += faqHTML;
        });

        // Show other services
        const otherServicesContainer = document.getElementById('services-list-container');

        otherServicesContainer.innerHTML = ''; // Clear existing content

        services.forEach(service => {
            const isCurrentService = service.id === serviceId;

            const serviceHTML = `<li class="${isCurrentService ? 'current-item' : ''}"><a href="services-details.html?id=${service.id}">${service.title}</a></li>`;

            otherServicesContainer.innerHTML += serviceHTML;
        });

    }
    else {
        console.error('Service not found');
    }

    // Hide loader
    preloader.style.display = 'none';
});