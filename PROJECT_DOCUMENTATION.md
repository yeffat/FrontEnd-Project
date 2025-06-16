# Project Documentation

This document provides an overview and description of the key files and folders in the project.

## Top-level Files

- **App.jsx**  
  The main React application component. Sets up routing, context providers, and common layout components like Navbar and Footer.

- **index.css**  
  Global CSS styles applied throughout the application.

- **main.jsx**  
  The entry point for the React application. Renders the App component into the DOM.

## Folders

### assets/  
Contains static assets such as images, icons, and other media files used in the application.

### components/  
Reusable UI components used across multiple pages. Examples include:  
- `ProductCard.jsx`: Displays individual product information in a card layout.  
- `Button.jsx`: Custom button component.  
- `Brand.jsx`, `Footer.jsx`: Branding and footer components.

### containers/  
Container components that manage layout and structure for specific parts of the app. For example:  
- `Navbar/Navbar.jsx`: The navigation bar component displayed on all pages.

### context/  
React Context providers for managing global state and functionality:  

- `CartContext.jsx`: Manages shopping cart state and actions.  
  - Holds the list of cart items with quantities.  
  - Provides functions to add items, remove items, clear the cart.  
  - Calculates total price and total item count for the cart.  

- `AlertContext.jsx`: Provides alert/notification functionality across the app.  
  - Allows components to show alert messages to users.  
  - Manages alert visibility and content state.  


### pages/  
Page components representing different routes in the app:  
- `ProductDetails/ProductDetails.jsx`: Displays detailed information about a single product.  
- `Products/Products.jsx`: Lists all products in a grid layout.  
- `Cart.jsx`: Shopping cart page showing added products and checkout options.  
- `Login.jsx`: User login page.  
- `UpdateProduct/UpdateProduct.jsx`: Page to update product details.  
- `home/Home.jsx`: Homepage of the application.  
- `index.js`: Exports all page components for easy import.

### store/  
Redux store slices and state management files:  
- `slices/productSlice.js`: Redux slice managing product-related state. It uses Redux Toolkit to handle asynchronous fetching of product lists and single product details from an external API. The slice manages loading states and stores fetched products in the Redux store for global access across the app. This helps centralize product data management and simplifies state updates in the UI.


### utils/  
Utility functions and helpers used throughout the application.

---

This documentation provides a high-level overview of the project structure and the purpose of each key file and folder. For detailed implementation, please refer to the source code files.
