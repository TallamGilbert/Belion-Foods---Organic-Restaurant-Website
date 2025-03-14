 // Form Submission
 const bookingForm = document.getElementById('booking-form');
 const newsletterForm = document.querySelector('.newsletter-form');
 
 bookingForm.addEventListener('submit', (e) => {
    
     e.preventDefault();
     alert('Thank you for your reservation! We will confirm your booking shortly.');
     bookingForm.reset();
 });
 
 newsletterForm.addEventListener('submit', (e) => {
     e.preventDefault();
     alert('Thank you for subscribing to our newsletter!');
     newsletterForm.reset();
 });