# Belion Foods - Organic Restaurant Website

A modern, responsive website for an organic food restaurant in Kenya. 
The website features a clean, green-themed design with a focus on showcasing organic dishes and providing a seamless user experience.

you can try live here 
https://belion-foods-organic-restaurant.vercel.app/

## Features

- **Responsive Design**: Fully responsive layout that works on all devices from mobile phones to desktop computers
- **Modern UI**: Clean, modern interface with a green color scheme reflecting the organic theme
- **Interactive Elements**: Animations, sliders, and interactive components to enhance user engagement
- **Online Reservation**: Table booking system with form validation
- **Menu Display**: Categorized menu with filtering options
- **Testimonials**: Customer reviews carousel
- **Newsletter Subscription**: Email signup form for marketing
- **Location Map**: Restaurant location map integration
- **Material Design Icons**: Search, user account, and cart functionality with material design icons

## Technologies Used

- **HTML5**: Semantic markup for structure
- **CSS3**: Modern styling with flexbox and grid layouts
- **JavaScript**: Interactive elements and functionality
- **Font Awesome**: Icon library for visual elements
- **Google Fonts**: Typography with Poppins font family

## Getting Started

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/Belion Foods.git
   ```

2. Navigate to the project directory:
   ```
   cd Belion Foods
   ```

3. Open `index.html` in your browser to view the website

## Project Structure

The project follows a clean, organized structure:

- `index.html`: Main HTML file
- `assets/css/`: CSS stylesheets
- `assets/js/`: JavaScript files
- `assets/images/`: Image assets

## Customization

### Changing Colors

The color scheme is defined using CSS variables in the `:root` selector. To change the theme colors, modify these variables in the `style.css` file:

```css
:root {
    --primary-color: #4CAF50;
    --primary-dark: #388E3C;
    --primary-light: #C8E6C9;
    --accent-color: #8BC34A;
    --text-primary: #212121;
    --text-secondary: #757575;
    --white: #FFFFFF;
    --grey-light: #F5F5F5;
    --grey: #EEEEEE;
}
```

### Adding Menu Items

To add new menu items, follow the structure in the HTML file:

```html
<div class="menu-item fade-in" data-category="category-name">
    <img src="path/to/image.jpg" alt="Menu Item Name" class="menu-item-img">
    <div class="menu-item-info">
        <h3 class="menu-item-title">Item Name</h3>
        <p class="menu-item-description">Item description</p>
        <div class="menu-item-price">KSh Price</div>
    </div>
</div>
```


# TO REMEMBER SYSTEM PREFERENCE, DARK MODE / LIGHT MODE 

```JS

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


  ```


## Browser Support

The website is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## Future Enhancements

- Online ordering system
- Integration with payment gateways
- User account management
- Admin panel for content management
- Menu item search functionality
- Social media integration

## License


## Contact

For any inquiries or support, please contact:
- Email: info@harvesthaven.co.ke
- Phone: +254 712 345 678



# Belion Foods - Organic Restaurant Website File Structure

```
Belion Foods/
├── README.md
├── index.html
├── full-menu.html
├── assets/
│   ├── css/
│   │   ├── style.css
│   │   ├── responsive.css
│   │   └── animations.css
│   ├── js/
│   │   ├── main.js
│   │   ├── slider.js
│   │   └── form-validation.js
│   ├── images/
│   │   ├── logo.png
│   │   ├── hero-bg.jpg
│   │   ├── reservation-bg.jpg
│   │   ├── dishes/
│   │   │   ├── dish-1.jpg
│   │   │   ├── dish-2.jpg
│   │   │   └── dish-3.jpg
│   │   ├── menu/
│   │   │   ├── menu-1.jpg
│   │   │   ├── menu-2.jpg
│   │   │   └── menu-3.jpg
│   │   └── testimonials/
│   │       ├── person-1.jpg
│   │       ├── person-2.jpg
│   │       └── person-3.jpg
│   └── fonts/
│       └── (custom fonts if needed)
└── favicon.ico
```

## File Structure Explanation

- **index.html**: Main HTML file containing the entire website structure
- **assets/**: Directory containing all website assets
  - **css/**: CSS files for styling
    - **style.css**: Main stylesheet
    - **responsive.css**: Media queries for responsive design
    - **animations.css**: CSS animations and transitions
  - **js/**: JavaScript files for functionality
    - **main.js**: Main JavaScript file with core functionality
    - **slider.js**: Testimonial slider and other carousel functionality
    - **form-validation.js**: Form validation for reservation and newsletter
  - **images/**: Image assets organized by category
    - **logo.png**: Restaurant logo
    - **hero-bg.jpg**: Hero section background image
    - **reservation-bg.jpg**: Reservation section background image
    - **dishes/**: Images of popular dishes
    - **menu/**: Images of menu items
    - **testimonials/**: Customer testimonial profile images
  - **fonts/**: Custom font files if needed
- **favicon.ico**: Website favicon
