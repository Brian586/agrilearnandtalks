import team from "./data/team.js";

document.addEventListener('DOMContentLoaded', () => {
    const teamMembersContainer = document.getElementById('team-members-list');

    teamMembersContainer.innerHTML = ''; // Clear existing content

    team.forEach(teamMember => {
        const teamMemberHTML = `
            <div class="col-lg-4 col-md-6 farmer-stye-one">
                <div class="farmer-style-one-item">
                    <div class="thumb">
                        <img src="${teamMember.image}" alt="Image Not Found" style="width: 100%; height: 400px; object-fit: cover;">
                        <div class="social">
                            <i class="fas fa-share-alt"></i>
                            <ul>
                                <li class="facebook">
                                    <a href="${teamMember.contact.social.facebook}" target="_blank">
                                        <i class="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li class="twitter">
                                    <a href="${teamMember.contact.social.twitter}" target="_blank">
                                        <i class="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li class="instagram">
                                    <a href="${teamMember.contact.social.instagram}" target="_blank">
                                        <i class="fab fa-instagram"></i>
                                    </a>
                                </li>
                                <li class="linkedin">
                                    <a href="${teamMember.contact.social.linkedin}" target="_blank">
                                        <i class="fab fa-linkedin-in"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="info">
                        <span>${teamMember.role}</span>
                        <h4><a href="team-member-details.html?id=${teamMember.id}">${teamMember.name}</a></h4>
                    </div>
                </div>
            </div>
        `;
        teamMembersContainer.innerHTML += teamMemberHTML;
    });
});