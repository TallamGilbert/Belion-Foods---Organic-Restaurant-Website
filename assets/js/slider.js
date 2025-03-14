   // Testimonial Slider
   const testimonialsContainer = document.querySelector('.testimonials-container');
   const testimonials = document.querySelectorAll('.testimonial');
   const prevArrow = document.querySelector('.prev-arrow');
   const nextArrow = document.querySelector('.next-arrow');
   
   let currentIndex = 0;
   
   function showTestimonial(index) {
       testimonialsContainer.style.transform = `translateX(-${index * 100}%)`;
   }
   
   prevArrow.addEventListener('click', () => {
       currentIndex = (currentIndex > 0) ? currentIndex - 1 : testimonials.length - 1;
       showTestimonial(currentIndex);
   });
   
   nextArrow.addEventListener('click', () => {
       currentIndex = (currentIndex < testimonials.length - 1) ? currentIndex + 1 : 0;
       showTestimonial(currentIndex);
   });
   
   // Auto-slide testimonials
   setInterval(() => {
       currentIndex = (currentIndex < testimonials.length - 1) ? currentIndex + 1 : 0;
       showTestimonial(currentIndex);
   }, 6000);