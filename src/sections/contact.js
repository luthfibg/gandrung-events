document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    
    // Simple validation
    if (!firstName || !lastName || !email || !phone || !message) {
        alert('Please fill in all fields before submitting.');
        return;
    }
    
    // In a real application, you would send this data to a server
    alert(`Thank you ${firstName} ${lastName}! Your message has been sent. We'll contact you at ${email} or ${phone} soon.`);
    
    // Reset the form (except for the pre-filled values)
    document.getElementById('message').value = '';
});