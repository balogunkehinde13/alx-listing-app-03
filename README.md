# Airbnb Clone Listing Page

## Project Description

This project is a modern web application that recreates the core functionality of Airbnb's property listing page. The goal is to create an intuitive, responsive interface where users can browse property listings, view detailed information, and interact with booking features. The application demonstrates modern web development practices and provides a seamless user experience similar to the original Airbnb platform.

## Project Structure

The project follows a well-organized directory structure designed for scalability and maintainability:

### Directory Overview

- **`components/`** - Contains all reusable React components organized by functionality. This includes UI elements like property cards, navigation bars, modals, forms, and other interactive components that can be reused throughout the application.

- **`interfaces/`** - Houses TypeScript interface definitions and type declarations. These files define the data structures for properties, users, bookings, API responses, and other entities used throughout the application, ensuring type safety and better code documentation.

- **`constants/`** - Stores application-wide constants, configuration values, API endpoints, route definitions, and other static data. This centralized approach makes it easy to manage and update shared values across the entire project.

- **`public/assets/`** - Contains static assets including images, icons, fonts, and other media files that are served directly by the web server. This directory is publicly accessible and optimized for fast loading.

## Local Development Setup

Follow these instructions to run the project on your local development environment:

### Installation Steps

1. **Clone the repository to your local machine**
   ```bash
   git clone <repository-url>
   cd airbnb-clone
   ```

2. **Install project dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Access the application**
   Open your web browser and navigate to `http://localhost:3000` to view the running application.

The development server includes hot reloading, so any changes you make to the code will automatically refresh the browser and reflect your updates in real-time.

