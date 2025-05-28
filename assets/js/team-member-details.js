import team from "./data/team.js";


document.addEventListener('DOMContentLoaded', () => {
    // Show loader
    const preloader = document.getElementById('preloader');
    preloader.style.display = 'block';

    // Get team member ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    let teamMemberId = urlParams.get('id');

    teamMemberId.replaceAll('#', ''); // Remove any '#' characters from the ID

    // Find the team member object
    const teamMember = team.find(member => member.id === teamMemberId);

    if (teamMember) {
        // Populate the highlighted section
        document.getElementById('team-member-image').src = teamMember.image;
        document.getElementById('team-member-name').textContent = teamMember.name;
        document.getElementById('team-member-role').textContent = teamMember.role;
        document.getElementById('team-member-description').textContent = teamMember.description;
        document.getElementById('team-member-email').textContent = teamMember.contact.email;
        document.getElementById('team-member-email').href = `mailto:${teamMember.contact.email}`;
        document.getElementById('team-member-phone').textContent = teamMember.contact.phone;
        document.getElementById('team-member-phone').href = `tel:${teamMember.contact.phone}`;
        document.getElementById('team-member-phone-btn').href = `tel:${teamMember.contact.phone}`;
        document.getElementById('team-member-social-facebook').href = teamMember.contact.social.facebook;
        document.getElementById('team-member-social-twitter').href = teamMember.contact.social.twitter;
        document.getElementById('team-member-social-instagram').href = teamMember.contact.social.instagram;
        document.getElementById('team-member-social-linkedin').href = teamMember.contact.social.linkedin;
    } else {
        console.error('Team Member not found');
    }

    // Hide loader
    preloader.style.display = 'none';
});