import activities from "./data/activities.js";

document.addEventListener('DOMContentLoaded', () => {
    const footerActivitiesContainer = document.getElementById('footer-recent-activities');

    footerActivitiesContainer.innerHTML = ''; // Clear existing content

    activities.slice(0, 2).forEach(activity => {
        const footerActivityHTML = `
            <li>
                <div class="thumb">
                    <a href="activity-details.html?id=${activity.id}">
                        <img src="${activity.images[0]}" alt="Thumb" style="aspect-ratio: 1 / 1; object-fit: cover;">
                    </a>
                </div>
                <div class="info">
                    <div class="meta-title">
                        <span class="post-date">${activity.category}</span>
                    </div>
                    <h5><a href="activity-details.html?id=${activity.id}">${activity.title}</a></h5>
                </div>
            </li>
        `;
        footerActivitiesContainer.innerHTML += footerActivityHTML;
    });
});