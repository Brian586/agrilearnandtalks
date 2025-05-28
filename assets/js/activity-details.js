import activities from "./data/activities.js";

document.addEventListener('DOMContentLoaded', () => {
    // Show loader
    const preloader = document.getElementById('preloader');
    preloader.style.display = 'block';

    // Get team member ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    let activityId = urlParams.get('id');

    activityId.replaceAll('#', ''); // Remove any '#' characters from the ID

    // Find the activity object
    const activity = activities.find(activity => activity.id === activityId);

    if (activity) {
        // Populate
        document.getElementById('activity-first-image').src = activity.images[0];
        document.getElementById('sidebar-activity-name').innerHTML = `<h4>Activity</h4> ${activity.title}`;
        document.getElementById('sidebar-activity-category').innerHTML = `<h4>Category</h4> ${activity.category}`;
        document.getElementById('activity-name').textContent = activity.title;
        document.getElementById('activity-description').innerHTML = activity.description;

        const activityImagesContainer = document.getElementById('activity-images-container');

        activityImagesContainer.innerHTML = ''; // Clear existing content

        activity.images.forEach((image) => {
            const activityImageHTML = `
                <div class="col-lg-6 col-md-6">
                    <img src="${image}" alt="Thumb" style="width: 100%; aspect-ratio: 1 / 1; object-fit: cover;">
                </div>
            `;
            activityImagesContainer.innerHTML += activityImageHTML;
        });

        const videosContainer = document.getElementById('videos-container');
        const videosList = document.getElementById('videos-list');

        // Check if the videos array is empty
        if (activity.videos.length === 0) {
            videosContainer.style.display = 'none'; // Hide the container
        } else {
            videosContainer.style.display = 'block'; // Show the container

            // Populate the videos list
            activity.videos.forEach(videoUrl => {
                const videoElement = document.createElement('video');
                videoElement.src = videoUrl;
                videoElement.controls = true; // Add video controls
                videoElement.style.width = '100%'; // Make the video responsive
                // videoElement.style.maxHeight = `${window.innerHeight}px`; // Ensure video height does not exceed screen height
                videoElement.style.borderRadius = '12px'; // Add border radius
                videosList.appendChild(videoElement);
            });
        }
    } else {
        console.error('Activity not found');
    }

    // Hide loader
    preloader.style.display = 'none';
});