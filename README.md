
# 🛒 E-Commerce Backend API

This is a backend API for a multi-role e-commerce platform built with **Node.js** and **Express**, using **MongoDB** as the database.  
The system is designed for **Admins**, **Managers**, and **Customers**, supporting product management, order processing, and user feedback.

---

## 🚀 Features

- 🔐 **Authentication**: JWT-based login system for secure access
- 👥 **Role Management**: Admin, Manager, Customer separation
- 🛍️ **Product Management**: Managers can create, update, and delete products
- 🗂️ **Category Management**: Admins can manage categories
- 📦 **Order Management**: Customers can place and manage orders
- 💬 **Feedback System**: Users can leave ratings and comments
- 🧰 Modular architecture with controllers, middleware, and models

---

## 📚 API Endpoints

### 👤 User Routes
- `POST /customer/register`
- `POST /customer/login`
- `GET /customer/profile`
- `PATCH /customer`
- `DELETE /customer`

### 🛒 Manager Routes
- `POST /product`
- `PATCH /product/:id`
- `DELETE /product/:id`
- `GET /orders`

### 👑 Admin Routes
- `POST /category`
- `PATCH /category/:id`
- `DELETE /category/:id`
- `GET /users`

### 💼 Customer Order & Feedback
- `POST /order`
- `GET /order`
- `POST /feedback/:jobId`

---

## ⚙️ Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB (Mongoose)**
- **Passport.js (JWT Strategy)**
- **dotenv**
- **bcrypt**, **jsonwebtoken**

---

## 🧠 Author

Created by **Edgar (EdgarHovakimyan)**  
GitHub: [github.com/EdgarHovakimyan](https://github.com/EdgarHovakimyan)

---

## 📄 License

This project is licensed under the **MIT License**.

```
MIT License

Copyright (c) 2025 Edgar

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights  
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell  
copies of the Software, and to permit persons to whom the Software is  
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in  
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR  
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,  
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE  
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER  
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING  
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS  
IN THE SOFTWARE.
```
