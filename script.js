
// Function to simulate starting the chat
function startChat() {
    alert('Chat started! Feel free to interact with the AI.');
}

// Handle the contact form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from submitting normally

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simulate form submission success
    if (name && email && message) {
        alert('Thank you, ' + name + '! Your message has been sent successfully.');
        document.getElementById('contactForm').reset();  // Reset the form
    } else {
        alert('Please fill in all fields before submitting.');
    }
});
