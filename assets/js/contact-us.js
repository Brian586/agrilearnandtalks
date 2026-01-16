document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.contact-form');
    const submitBtn = document.getElementById('submit');
    const submitText = document.getElementById('submit-text');
    const messageDiv = document.getElementById('message');
    // Error spans
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const phoneError = document.getElementById('phone-error');
    const commentsError = document.getElementById('comments-error');

    function validateEmail(email) {
        // Simple email regex
        return /^\S+@\S+\.\S+$/.test(email);
    }

    form.addEventListener('submit', async function (e) {
        e.preventDefault();
        // Clear previous errors
        nameError.textContent = '';
        emailError.textContent = '';
        phoneError.textContent = '';
        commentsError.textContent = '';
        messageDiv.textContent = '';

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const comments = document.getElementById('comments').value.trim();

        let valid = true;
        if (!name) {
            nameError.textContent = 'Name is required.';
            valid = false;
        }
        if (!email) {
            emailError.textContent = 'Email is required.';
            valid = false;
        } else if (!validateEmail(email)) {
            emailError.textContent = 'Invalid email address.';
            valid = false;
        }
        if (!phone) {
            phoneError.textContent = 'Phone is required.';
            valid = false;
        }
        if (!comments) {
            commentsError.textContent = 'Message is required.';
            valid = false;
        }

        if (!valid) return;

        // Disable button and show sending
        submitBtn.disabled = true;
        submitText.textContent = 'Sending...';

        try {
            const endpoint = 'https://us-central1-betheyoucommunity.cloudfunctions.net/sendContactEmail';
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    phone: phone,
                    message: comments
                })
            });
            if (response.ok) {
                messageDiv.textContent = 'Message sent successfully!';
                form.reset();
            } else {
                messageDiv.textContent = 'Failed to send message. Please try again later.';
            }
        } catch (err) {
            messageDiv.textContent = 'An error occurred. Please try again.';
        } finally {
            submitBtn.disabled = false;
            submitText.textContent = 'Get in Touch';
        }
    });
});