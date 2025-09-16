# 🍔 Foodie Buddie - Food Delivery App

<div align="center">
  <img src="images/delivery-boy.png" alt="Foodie Buddie Logo" width="200"/>
  
  <p><strong>Enjoy Your Delicious Food with Fast Delivery</strong></p>
  
  [![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
  [![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
  [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  [![Swiper](https://img.shields.io/badge/Swiper-6332F6?style=for-the-badge&logo=swiper&logoColor=white)](https://swiperjs.com/)
</div>

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Screenshots](#screenshots)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)

## 🎯 About

**Foodie Buddie** is a modern, responsive food delivery web application that provides users with an intuitive interface to browse, select, and order delicious food items. The app features a clean design, smooth animations, and a fully functional shopping cart system.

### Key Highlights
- 🚀 **Fast & Responsive** - Optimized for all devices
- 🛒 **Smart Cart System** - Add, remove, and manage items seamlessly
- 📱 **Mobile-First Design** - Perfect experience on mobile devices
- ⭐ **Customer Reviews** - Interactive testimonial slider
- 🎨 **Modern UI/UX** - Beautiful and intuitive interface

## ✨ Features

### 🍽️ Food Menu
- Browse through a variety of delicious food items
- High-quality food images with detailed descriptions
- Real-time pricing in Indian Rupees (₹)

### 🛒 Shopping Cart
- Add items to cart with one click
- Quantity management (increase/decrease)
- Real-time total calculation
- Remove items from cart
- Persistent cart state

### 📱 Responsive Design
- Mobile-first approach
- Tablet and desktop optimized
- Touch-friendly interface
- Smooth animations and transitions

### 👥 Customer Reviews
- Interactive testimonial slider using Swiper.js
- Star ratings display
- Customer profile images
- Smooth navigation between reviews

### 🎨 Modern UI Components
- Custom CSS variables for consistent theming
- Font Awesome icons
- Google Fonts integration
- Smooth hover effects and animations

## 📸 Screenshots

<div align="center">
  <img src="images/burger.png" alt="Food Items" width="150"/>
  <img src="images/pizza.png" alt="Food Items" width="150"/>
  <img src="images/fried-chicken.png" alt="Food Items" width="150"/>
</div>

*Sample food items available in the app*

## 🛠️ Technologies Used

### Frontend
- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with CSS Grid and Flexbox
- **JavaScript (ES6+)** - Interactive functionality and DOM manipulation
- **Swiper.js** - Touch slider for customer reviews
- **Font Awesome** - Icon library for UI elements
- **Google Fonts** - Typography (Roboto Condensed, Ubuntu, Varela Round)

### Design Features
- CSS Custom Properties (Variables)
- Responsive Grid Layout
- CSS Animations and Transitions
- Mobile-First Design Approach
- Cross-browser Compatibility

## 🚀 Installation

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for development)

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/foodie-buddie.git
   cd foodie-buddie
   ```

2. **Open the project**
   - Option 1: Open `index.html` directly in your browser
   - Option 2: Use a local server (recommended for development)
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (if you have live-server installed)
     npx live-server
     
     # Using PHP
     php -S localhost:8000
     ```

3. **Access the application**
   - Open your browser and navigate to `http://localhost:8000` (if using a server)
   - Or simply open `index.html` in your browser

## 📖 Usage

### Browsing Food Items
1. Open the application in your browser
2. Scroll down to the "Our Menu" section
3. Browse through available food items
4. Each item displays name, price, and image

### Adding Items to Cart
1. Click the "Add to Cart" button on any food item
2. The item will be added to your cart
3. Click the cart icon in the header to view your cart

### Managing Cart Items
1. In the cart sidebar, you can:
   - Increase quantity using the "+" button
   - Decrease quantity using the "-" button
   - Remove items by decreasing quantity to 0
2. View real-time total calculation
3. Close the cart or proceed to checkout

### Mobile Navigation
1. On mobile devices, tap the hamburger menu (☰) icon
2. Navigate through different sections
3. Tap the X to close the mobile menu

## 📁 Project Structure

```
foodie-buddie/
├── 📄 index.html          # Main HTML file
├── 🎨 style.css           # Main stylesheet
├── ⚡ main.js             # JavaScript functionality
├── 📦 package.json        # Project metadata
├── 🍕 products.json       # Food items data
├── 📸 images/             # Image assets
│   ├── burger.png
│   ├── pizza.png
│   ├── fried-chicken.png
│   ├── chicken-roll.png
│   ├── sandwich.png
│   ├── lasagna.png
│   ├── spaghetti.png
│   ├── spring-roll.png
│   ├── delivery-boy.png
│   ├── delivery-boy-with-phone.png
│   ├── mobile-app.png
│   ├── easy-to-order.png
│   ├── fast-delivery.png
│   ├── best-quality.png
│   ├── profile1.jpeg
│   ├── profile2.jpeg
│   └── profile3.jpeg
└── 📄 README.md           # Project documentation
```

## 🔧 API Reference

### Products Data Structure
The app uses a JSON file (`products.json`) to store food item data:

```json
{
  "id": 1,
  "name": "Double Chicken Burger",
  "price": "₹459.00",
  "image": "images/burger.png"
}
```

### JavaScript Functions

#### `showCards()`
Displays all food items from the products array on the page.

#### `addToCart(product)`
Adds a product to the shopping cart with quantity management.

#### `updateTotals()`
Calculates and updates the total price and quantity in the cart.

#### `initApp()`
Initializes the application by fetching product data and displaying cards.

## 🤝 Contributing

We welcome contributions to improve Foodie Buddie! Here's how you can help:

### How to Contribute
1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
5. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request**

### Areas for Contribution
- 🐛 Bug fixes
- ✨ New features
- 📱 Mobile responsiveness improvements
- 🎨 UI/UX enhancements
- 📚 Documentation updates
- 🧪 Testing improvements

## 📄 License

This project is licensed under the ISC License - see the [package.json](package.json) file for details.

## 📞 Support

If you have any questions or need help with the project:

- 📧 Email: your-email@example.com
- 🐛 Issues: [GitHub Issues](https://github.com/yourusername/foodie-buddie/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/yourusername/foodie-buddie/discussions)

## 🙏 Acknowledgments

- [Swiper.js](https://swiperjs.com/) for the testimonial slider
- [Font Awesome](https://fontawesome.com/) for the icon library
- [Google Fonts](https://fonts.google.com/) for typography
- All the amazing food images used in the project

---

<div align="center">
  <p>Made with ❤️ by <strong>Your Name</strong></p>
  <p>⭐ Star this repository if you found it helpful!</p>
</div>
