# 🛒 E-commerce Backend API

A powerful and secure backend for an E-commerce application built with **Node.js**, **Express**, **MongoDB**, and **JWT** for authentication. It supports full product management, user authentication, and pagination capabilities.

---

## 📚 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [License](#license)

---

## 🔍 Overview

This backend provides RESTful APIs to handle users, authentication, and products for an E-commerce platform. It's designed with scalability and security in mind, including protected routes for admin access and JWT-based user authentication.

---

## ✨ Features

- 🔐 **User Authentication**  
  - Register and login using email & password  
  - JWT-based protected routes  
  - Admin-only access to sensitive routes  

- 🛍️ **Product Management**  
  - CRUD operations for products  
  - Individual product detail fetch  
  - Featured products API  

- 📄 **Pagination & Filters**  
  - Paginated product listings  
  - Search and category-based filters  

- 🛡️ **Security**  
  - JWT authentication  
  - Role-based access (admin vs user)  
  - Environment variable support

---

## 📦 API Endpoints

### 🔑 Auth (`/api/auth`)
| Method | Endpoint     | Description           |
|--------|--------------|-----------------------|
| POST   | `/register`  | Register a new user   |
| POST   | `/login`     | Authenticate a user   |

### 👤 Users (`/api/users`)
| Method | Endpoint      | Middleware     | Description         |
|--------|---------------|----------------|---------------------|
| GET    | `/profile`    | `protect`      | Get logged-in user's profile |

### 🛍️ Products (`/api/products`)
| Method | Endpoint        | Middleware           | Description              |
|--------|-----------------|----------------------|--------------------------|
| GET    | `/`             | None                 | Get all products (paginated) |
| GET    | `/featured`     | None                 | Get featured products    |
| GET    | `/:id`          | None                 | Get single product by ID |
| POST   | `/`             | `protect`, `admin`   | Create a new product     |
| PUT    | `/:id`          | `protect`, `admin`   | Update product by ID     |
| DELETE | `/:id`          | `protect`, `admin`   | Delete product by ID     |

---

## 🧰 Technologies Used

- **Node.js** – JavaScript runtime
- **Express** – Web framework
- **MongoDB** – NoSQL database
- **Mongoose** – ODM for MongoDB
- **JWT** – Authentication and authorization
- **dotenv** – Environment variable support

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Muhammad-Zohaib-Malik/backend-ecommerce-intern
cd backend-ecommerce-intern
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create a `.env` file in the root directory and add the following:

```env
JWT_SECRET=your_secret_key
MONGODB_URL=mongodb://localhost:27017/ecommerce
```

### 4. Start the Server

```bash
npm run dev
```

The server will run at `http://localhost:5000`.

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).
