 // Mobile Menu Toggle
 const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Scroll Animation
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    fadeElements.forEach(element => {
        fadeInObserver.observe(element);
    });
    
  // Menu Category Filter
const menuCategories = document.querySelectorAll('.menu-category');
const menuItems = document.querySelectorAll('.menu-item');

// Function to filter menu items
function filterItems(selectedCategory) {
    menuItems.forEach(item => {
        if (item.getAttribute('data-category') === selectedCategory) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}

// Add click event listeners to each category
menuCategories.forEach(category => {
    category.addEventListener('click', () => {
        // Remove active class from all categories
        menuCategories.forEach(cat => cat.classList.remove('active'));
        
        // Add active class to clicked category
        category.classList.add('active');
        
        const selectedCategory = category.getAttribute('data-category');
        filterItems(selectedCategory);
    });
});

// Set default category (breakfast) when page loads
if (menuCategories.length > 0) {
    // Select the first category by default (assuming it's breakfast)
    const defaultCategory = menuCategories[0];
    defaultCategory.classList.add('active');
    filterItems(defaultCategory.getAttribute('data-category'));
}
    
         
    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Close mobile menu if open
                if (navLinks.classList.contains('active')) {
                    hamburger.classList.remove('active');
                    navLinks.classList.remove('active');
                }
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Sticky Header
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
    });
    
    // Map Initialization (placeholder)
    function initMap() {
        // This would be replaced with actual Google Maps API code
        console.log('Map initialized');
    }
    
    // Cart functionality
    const cartIcons = document.querySelectorAll('.nav-icon');
    
    cartIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            if (icon.querySelector('.fa-shopping-cart')) {
                alert('Shopping cart functionality will be implemented here');
            } else if (icon.querySelector('.fa-search')) {
                alert('Search functionality will be implemented here');
            } else if (icon.querySelector('.fa-user')) {
                alert('User account functionality will be implemented here');
            }
        });
    });

     // Dark Mode Toggle
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

// Check for saved theme preference in localStorage
if (localStorage.getItem('darkMode') === 'enabled') {
body.classList.add('dark-mode');
themeToggle.querySelector('i').classList.remove('fa-moon');
themeToggle.querySelector('i').classList.add('fa-sun');
}

// Toggle dark mode
themeToggle.addEventListener('click', () => {
body.classList.toggle('dark-mode');

// Toggle icon
const icon = themeToggle.querySelector('i');
if (body.classList.contains('dark-mode')) {
  icon.classList.remove('fa-moon');
  icon.classList.add('fa-sun');
  localStorage.setItem('darkMode', 'enabled');
} else {
  icon.classList.remove('fa-sun');
  icon.classList.add('fa-moon');
  localStorage.setItem('darkMode', 'disabled');
}
});

/* Add this to your existing JavaScript
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark-mode');
  }
  
  // Listen for changes in system preference
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    if (event.matches) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  });*/