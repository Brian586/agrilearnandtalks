import blogs from "./data/blogs.js";

document.addEventListener('DOMContentLoaded', () => {
    // Show loader
    const preloader = document.getElementById('preloader');
    preloader.style.display = 'block';

    // Get farmer ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    let blogId = urlParams.get('id');

    blogId.replaceAll('#', '');

    // Find the blog object
    const blog = blogs.find(blog => blog.id === blogId);

    if (blog) {
        document.getElementById('blog-title').textContent = blog.title;
        document.getElementById('blog-image').src = blog.images[0];
        document.getElementById('blog-author').innerHTML = `<i class="fas fa-user-circle"></i> ${blog.author}`;
        document.getElementById('blog-date').innerHTML = `<strong>${blog.date.day}</strong> <span>${blog.date.month}, ${blog.date.year}</span>`;
        document.getElementById('blog-description').innerHTML = blog.description;
    } else {
        console.error('Blog not found');
    }

    // Hide loader
    preloader.style.display = 'none';
}); 