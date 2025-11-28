import blogs from "./data/blogs.js";

function extractFirstParagraph(htmlString) {
    // Create a temporary DOM element to safely parse the HTML
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlString;

    // Get the text inside the <p> tag
    const pTag = tempDiv.querySelector("p");
    if (!pTag) return "";

    // Split using <br><br> as paragraph separators
    const parts = pTag.innerHTML.split(/<br\s*\/?>\s*<br\s*\/?>/i);

    // Return the first paragraph, trimmed
    return parts.length > 0 ? parts[0].trim() : "";
}

document.addEventListener('DOMContentLoaded', () => {

    const blogsListContainer = document.getElementById('blogs-list-container');

    blogsListContainer.innerHTML = ''; // Clear existing content

    blogs.forEach(blog => {
        const firstParagraph = extractFirstParagraph(blog.description);

        const blogHTML = `
        <div class="item">
            <div class="thumb">
                <a href="blog-details.html?id=${blog.id}"><img src="${blog.images[0]}" alt="${blog.title}" style="max-height=300px; width: 100%; object-fit: cover;"></a>
                <div class="date"><strong>${blog.date.day}</strong> <span>${blog.date.month}, ${blog.date.year}</span></div>
            </div>
            <div class="info">
                <div class="meta">
                    <ul>
                        <li>
                            <a href="#">${blog.author}</a>
                        </li>
                    </ul>
                </div>
                <h2 class="title">
                    <a href="blog-details.html?id=${blog.id}">${blog.title}</a>
                </h2>
                <p>
                    ${firstParagraph}
                </p>
                <a class="btn mt-10 btn-md btn-theme secondary animation" href="blog-details.html?id=${blog.id}">Learn More</a>
            </div>
        </div>
        `;

        blogsListContainer.innerHTML += blogHTML;
    });
});