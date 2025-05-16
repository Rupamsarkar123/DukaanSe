# 🛒 DukaanSe

**DukaanSe** is a full-stack e-commerce web application built with the MERN stack, powered by Vite and styled with Ant Design. It includes essential e-commerce features like product management, secure payment integration, user authentication, and real-time notifications.

---

## 📦 Tech Stack

### 🔙 Backend (Node.js + Express + MongoDB)

- **Node.js** – JavaScript runtime
- **Express.js** – Web framework for building RESTful APIs
- **MongoDB** – NoSQL database
- **Mongoose** – ODM for MongoDB
- **Braintree** – Payment gateway for processing transactions
- **bcrypt** – For hashing passwords securely
- **jsonwebtoken (JWT)** – For secure authentication
- **dotenv** – For environment variable management
- **cors** – To handle Cross-Origin Resource Sharing
- **morgan** – HTTP request logger middleware
- **slugify** – To create SEO-friendly slugs
- **express-formidable** – Middleware for parsing form data

### 🖥️ Frontend (React + Vite)

- **Vite** – Fast development and build tool
- **React** – Component-based UI library
- **Ant Design (antd)** – UI components library
- **axios** – For making API requests
- **react-router-dom v7** – For client-side routing
- **braintree-web-drop-in-react** – For embedding Braintree payment UI
- **react-hot-toast** – For elegant toast notifications
- **react-toastify** – Another toast notification library (optional)
- **react-helmet** – To manage document head
- **moment** – For date/time formatting

---

## 🛠️ Getting Started

### 🚨 Prerequisites

- Node.js v20+
- MongoDB (local or Atlas)
- npm

### 🔧 Backend Setup

```bash
git clone https://github.com/your-username/dukaanse.git
cd dukaanse
npm install
npm run server
```
Make sure to create a .env file in the root with the following:

```bash
PORT=8080
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
BRAINTREE_MERCHANT_ID=your_id
BRAINTREE_PUBLIC_KEY=your_public_key
BRAINTREE_PRIVATE_KEY=your_private_key
```
### ⚙️ Frontend Setup

```bash

cd client
npm install
npm run dev
```
This will start the frontend at http://localhost:5173 and proxy API requests to http://localhost:8080.

## ✨ Features

- ✅ User Registration and Login (JWT based)  
- ✅ Product Create, Update, Delete  
- ✅ Braintree payment gateway integration  
- ✅ SEO-friendly URLs using Slugify  
- ✅ Notifications using Toasts  
- ✅ Secure password hashing with Bcrypt  
- ✅ Clean UI with Ant Design


## 📸 Screenshots   

### 🏠 Home Page  
![Home Page](screenshots/home.png)

### 🔐 Login Page  
![Login Page](screenshots/login.png)

### 💳 Checkout Page  
![Checkout](screenshots/checkout.png)






