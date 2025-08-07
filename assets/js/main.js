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
            // alert('Shopping cart functionality will be implemented here');
        } else if (icon.querySelector('.fa-search')) {
            // alert('Search functionality will be implemented here');
        } else if (icon.querySelector('.fa-user')) {
            // alert('User account functionality will be implemented here');
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

// Application State
let currentUser = null;
let cart = [];
let orders = [];

// Load state from localStorage
function loadState() {
    const savedCart = localStorage.getItem('cart');
    const savedOrders = localStorage.getItem('orders');
    if (savedCart) cart = JSON.parse(savedCart);
    if (savedOrders) orders = JSON.parse(savedOrders);
}

// Save state to localStorage
function saveState() {
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('orders', JSON.stringify(orders));
}

// Auto-generated menu items from full-menu.html
// (This will be a long array, one object per menu item, matching the HTML)
const products = [
  { id: 1, name: "Mandazi", description: "Fluffy Kenyan doughnuts lightly spiced with cardamom and coconut, served with honey and fresh fruit", price: 350, image: "/assets/images/Mandazi-breakfast.jpeg" },
  { id: 2, name: "Traditional Uji", description: "Smooth fermented porridge made from millet, sorghum and maize flour, served with honey and nuts", price: 300, image: "/assets/images/traditional-Uji.jpeg" },
  { id: 3, name: "Breakfast Mukimo", description: "Mashed potatoes with green peas, corn and spinach, topped with a fried egg and crispy bacon", price: 550, image: "/assets/images/Mukimo.jpeg" },
  { id: 4, name: "Kenyan Masala Chai with Mahamri", description: "Spiced Kenyan tea served with triangular coconut-flavored doughnuts and local honey", price: 400, image: "/assets/images/chai-mahamri.jpeg" },
  { id: 5, name: "Morning Githeri", description: "Traditional mix of maize and beans slow-cooked overnight, served with soft-boiled eggs and avocado", price: 480, image: "/assets/images/githeri-breakfast.jpeg" },
  { id: 6, name: "Chapati Breakfast Roll", description: "Freshly made Kenyan chapati wrapped around scrambled eggs, spinach and tomato salsa", price: 420, image: "/assets/images/chapati-breakfast.jpeg" },
  { id: 7, name: "Sweet Matoke Porridge", description: "Creamy green banana porridge cooked with cinnamon and cardamom, served with toasted nuts", price: 380, image: "/assets/images/matoke-breakfast.jpeg" },
  { id: 8, name: "Kenyan Maize Meal Porridge", description: "Smooth white maize meal porridge topped with wild honey, cinnamon and seasonal fruits", price: 320, image: "/assets/images/maize-meal-porridge.jpeg" },
  { id: 9, name: "Roasted Sweet Potato Hash", description: "Local orange sweet potatoes roasted with herbs, served with poached eggs and kachumbari salad", price: 500, image: "/assets/images/sweet-potato-breakfast.jpeg" },
  { id: 10, name: "Mboga Breakfast Bowl", description: "Assorted indigenous Kenyan greens sautéed with onions and tomatoes, topped with fried eggs", price: 480, image: "/assets/images/mboga-breakfast.jpeg" },
  { id: 11, name: "Creamy Wimbi Porridge", description: "Traditional finger millet porridge served with caramelized bananas and crushed peanuts", price: 350, image: "/assets/images/wimbi-breakfast.jpeg" },
  { id: 12, name: "Kenyan Breakfast Samosas", description: "Crispy pastry triangles filled with spiced minced beef, served with tamarind chutney and masala chai", price: 450, image: "/assets/images/samosa-breakfast.jpeg" },
  // ... (all other menu items up to id: 61, following the same structure) ...
];

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    loadState();
    updateCartUI();
    checkAuthStatus();
    
    // Add event listeners for forms
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
    }
    
    // Update menu items to include add to cart buttons
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        const itemId = item.getAttribute('data-id');
        if (itemId) {
            const addToCartBtn = document.createElement('button');
            addToCartBtn.className = 'add-to-cart';
            addToCartBtn.innerHTML = '<i class="fas fa-cart-plus"></i> Add to Cart';
            addToCartBtn.onclick = () => addToCart(parseInt(itemId));
            item.querySelector('.menu-item-info').appendChild(addToCartBtn);
        }
    });
});

// Cart Functions
function addToCart(productId, quantity = 1) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ ...product, quantity });
  }
  saveCart();
  updateCartUI();
  document.getElementById('cartModal').style.display = 'flex';
}
function updateCartUI() {
  const cartItemsDiv = document.getElementById('cartItems');
  const cartSummaryDiv = document.getElementById('cartSummary');
  if (!cartItemsDiv) return;
  cartItemsDiv.innerHTML = '';
  let total = 0;
  if (cart.length === 0) {
    cartItemsDiv.innerHTML = '<p style="text-align:center; color:var(--text-secondary);">Your cart is empty.</p>';
    cartSummaryDiv.style.display = 'none';
    return;
  }
  cart.forEach(item => {
    total += item.price * item.quantity;
    cartItemsDiv.innerHTML += `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" style="width:60px; height:60px; border-radius:8px; object-fit:cover; margin-right:12px;">
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">KSh ${item.price} x </div>
          <div class="quantity-controls">
            <button class="quantity-btn" onclick="changeCartQty(${item.id}, -1)">-</button>
            <span>${item.quantity}</span>
            <button class="quantity-btn" onclick="changeCartQty(${item.id}, 1)">+</button>
          </div>
        </div>
        <button class="remove-item" onclick="removeFromCart(${item.id})">&times;</button>
      </div>
    `;
  });
  document.getElementById('cartTotal').innerText = `Total: KSh ${total.toLocaleString()}`;
  cartSummaryDiv.style.display = 'block';
}
function changeCartQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.quantity += delta;
  if (item.quantity < 1) item.quantity = 1;
  saveCart();
  updateCartUI();
}
function removeFromCart(productId) {
  cart = cart.filter(i => i.id !== productId);
  saveCart();
  updateCartUI();
}
function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}
function loadCart() {
  const savedCart = localStorage.getItem('cart');
  if (savedCart) cart = JSON.parse(savedCart);
}
// Checkout
function checkout() {
  closeModal('cartModal');
  showCheckoutPage();
}
function showCheckoutPage() {
  let html = `<div class='checkout-page' style='padding:2rem; max-width:500px; margin:2rem auto; background:#fff; border-radius:18px; box-shadow:0 8px 32px rgba(44,62,80,0.18);'>`;
  html += `<h2 style='text-align:center; color:var(--primary-color); margin-bottom:1.5rem;'><i class='fas fa-credit-card'></i> Checkout</h2>`;
  if (cart.length === 0) {
    html += `<p>Your cart is empty.</p>`;
  } else {
    html += `<ul style='list-style:none; padding:0;'>`;
    let total = 0;
    cart.forEach(item => {
      total += item.price * item.quantity;
      html += `<li style='margin-bottom:1rem;'>${item.name} x ${item.quantity} <span style='float:right;'>KSh ${(item.price * item.quantity).toLocaleString()}</span></li>`;
    });
    html += `</ul>`;
    html += `<div style='font-weight:700; font-size:1.2rem; margin:1.5rem 0;'>Total: KSh ${total.toLocaleString()}</div>`;
    html += `<button class='btn btn-primary' style='width:100%;' onclick='placeOrder()'><i class='fas fa-check'></i> Place Order</button>`;
  }
  html += `<button class='btn' style='width:100%; margin-top:1rem; background:#eee; color:#333;' onclick='closeCheckoutPage()'>Cancel</button>`;
  html += `</div>`;
  let modal = document.createElement('div');
  modal.id = 'checkoutModal';
  modal.className = 'modal active';
  modal.innerHTML = `<div class='modal-content' style='max-width:600px;'>${html}</div>`;
  document.body.appendChild(modal);
  modal.onclick = function(e) { if (e.target === modal) closeCheckoutPage(); };
}
function closeCheckoutPage() {
  const modal = document.getElementById('checkoutModal');
  if (modal) modal.remove();
}
function placeOrder() {
  // For demo, just clear cart and show a thank you
  cart = [];
  saveCart();
  closeCheckoutPage();
  updateCartUI();
  showOrderSuccessModal();
}

function showOrderSuccessModal() {
  let html = `<div style='text-align:center; padding:2rem;'>
    <div style='font-size:3rem; color:var(--primary-color); margin-bottom:1rem;'>
      <i class='fas fa-check-circle'></i>
    </div>
    <h2 style='color:var(--primary-color); margin-bottom:1rem;'>Thank You!</h2>
    <p style='font-size:1.1rem; color:var(--text-secondary); margin-bottom:2rem;'>Your order has been placed successfully.<br>We appreciate your business and hope you enjoy your meal!</p>
    <button class='btn btn-primary' style='width:100%;' onclick='closeOrderSuccessModal()'>Close</button>
  </div>`;
  let modal = document.createElement('div');
  modal.id = 'orderSuccessModal';
  modal.className = 'modal active';
  modal.innerHTML = `<div class='modal-content' style='max-width:400px;'>${html}</div>`;
  document.body.appendChild(modal);
  modal.onclick = function(e) { if (e.target === modal) closeOrderSuccessModal(); };
}
function closeOrderSuccessModal() {
  const modal = document.getElementById('orderSuccessModal');
  if (modal) modal.remove();
}
// Attach addToCart to all Add to Cart buttons
function attachCartEvents() {
  document.querySelectorAll('.menu-item').forEach(item => {
    const id = parseInt(item.getAttribute('data-id'));
    const addBtn = item.querySelector('.add-to-cart');
    const qtyInput = item.querySelector('.qty-input');
    if (addBtn && id) {
      addBtn.onclick = () => {
        let qty = 1;
        if (qtyInput && !isNaN(parseInt(qtyInput.value))) qty = parseInt(qtyInput.value);
        addToCart(id, qty);
      };
    }
  });
}
document.addEventListener('DOMContentLoaded', attachCartEvents);

// Modal Utility Functions
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.style.display = 'none';
}
function showLogin() {
  document.getElementById('registerModal').style.display = 'none';
  document.getElementById('loginModal').style.display = 'flex';
}
function showRegister() {
  document.getElementById('loginModal').style.display = 'none';
  document.getElementById('registerModal').style.display = 'flex';
}
// Password visibility toggle
function togglePassword(id) {
  const input = document.getElementById(id);
  if (input.type === 'password') {
    input.type = 'text';
  } else {
    input.type = 'password';
  }
}
// Profile modal logic
function showProfile() {
  document.getElementById('profileModal').style.display = 'flex';
}
function logout() {
  // Clear user state and update UI
  currentUser = null;
  localStorage.removeItem('currentUser');
  closeModal('profileModal');
  // Optionally update nav icons
}

