document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const fname = document.getElementById('fname').value.trim();
    const email = document.getElementById('email').value.trim();
	const lname = document.getElementById('lname').value.trim();

    if (fname === '') {
        alert('First Name is required.');
        return;
    }

    if (email === '') {
        alert('Email is required.');
        return;
    }
	
	if (lname === '') {
        alert('Last Name is required.');
        return;
    }
	
	

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    alert('Form submitted successfully!');
    // You can proceed with form submission here
});