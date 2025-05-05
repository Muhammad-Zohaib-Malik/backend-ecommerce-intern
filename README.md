
# Backend for E-commerce Application

## Overview

This backend provides the necessary APIs for the E-commerce application, including user authentication, product management, and pagination features. It is built using Node.js, Express, MongoDB, and JWT for secure authentication.

## Features

- **User Authentication**: Sign up, login, and JWT-based authentication.
- **Product Management**: CRUD operations for products with search and category filters.
- **Pagination**: Pagination for product listing with dynamic page size.
- **Security**: JWT token for secure access to protected routes.

## Technologies Used

- Node.js
- Express
- MongoDB
- JWT (JSON Web Tokens)

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Muhammad-Zohaib-Malik/backend-ecommerce-intern
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:

   - **JWT_SECRET**: Secret key used to sign JWT tokens.
   - **MONGODB_URI**: MongoDB connection URL.

   Create a `.env` file in the root directory and add the following:

   ```bash
   JWT_SECRET=your_secret_key
   MONGODB_URL=mongodb://localhost:27017/ecommerce
   ```

4. Start the backend server:
   ```bash
   npm run dev
   ```



