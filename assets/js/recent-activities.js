import activities from './data/activities.js';

document.addEventListener('DOMContentLoaded', () => {
    const activitiesContainer = document.getElementById('gallery-masonary');

    activitiesContainer.innerHTML = ''; // Clear existing content

    activities.forEach(activity => {
        const activityHTML = `
            <div class="gallery-item">
                <div class="gallery-style-one">
                    <img src="${activity.images[0]}" alt="${activity.title}" style="height: 600px; width: 100%; object-fit: cover;">
                    <div class="overlay">
                        <p>${activity.category}</p>
                        <h4><a href="activity-details.html?id=${activity.id}">${activity.title}</a></h4>
                    </div>
                </div>
            </div>
        `;
        activitiesContainer.innerHTML += activityHTML;
    });

});