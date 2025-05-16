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

### ✨ Features

- ✅ User Registration and Login (JWT based)  
- ✅ Product Create, Update, Delete  
- ✅ Braintree payment gateway integration  
- ✅ SEO-friendly URLs using Slugify  
- ✅ Notifications using Toasts  
- ✅ Secure password hashing with Bcrypt  
- ✅ Clean UI with Ant Design


## 📸 Screenshots


### 🏠 Home Page  
![Home Page](https://github.com/user-attachments/assets/cad52d15-84c6-4c6a-ba76-a6fcf167c5f9) 
![Home Page](https://github.com/user-attachments/assets/62fd40c4-b3c1-4476-a16c-8fb4b0fa4b46)

### 🧾 Products Filtering 
![Filtering](https://github.com/user-attachments/assets/1421e441-ba65-4a18-a169-868b34f0d1bf)
![Filtering](https://github.com/user-attachments/assets/11ec7bb0-dc8d-426d-9176-98a195562973)

### 🔍 Searching Products
![Searching](https://github.com/user-attachments/assets/e1fe194b-14c6-4f0a-a62f-34ac409ba743)

### 📝 Product Details
![details of product](https://github.com/user-attachments/assets/c9651ff2-c312-40c8-b0f2-af644c20b842)


### 🗂️ All Categories
![all categories](https://github.com/user-attachments/assets/dc191c72-6009-4aa8-82d8-6a035577c966)


### 📦 Category Products
![Categories](https://github.com/user-attachments/assets/61f32c24-34ed-4d5a-9c83-e8d1d02131fe)


### 👤 Login User
![Login](https://github.com/user-attachments/assets/4c654f67-cc8b-435c-8a3c-8b4f0d880fe5)

### 👤✏️ Update User details
![update](https://github.com/user-attachments/assets/c92212c4-8e06-481c-9437-f1a0a06086ab)

###  ➕🛒  Add to Cart
![add to cart](https://github.com/user-attachments/assets/aea1b03a-086a-447a-a001-bbd5aa33cc42)

###  🛒 Cart
![cart](https://github.com/user-attachments/assets/679328ff-7b26-4e75-a235-565ce71e8a5e)

###  🧑‍💼📋 Admin Dashboard
![admin](https://github.com/user-attachments/assets/5ac1de2d-9cf5-4569-9259-07a7c080080d)

###  ➕📦 Admin Create Product
![admin](https://github.com/user-attachments/assets/17f0df7d-4ed8-44e8-8287-aa4b38bb6da9)


###  📦📋 Admin All products
![admin products](https://github.com/user-attachments/assets/bcb35e33-4227-4c89-b6cf-4dcbbdbcb21c)

### ℹ️ About Us
![about](https://github.com/user-attachments/assets/05c0b510-3925-47f8-993f-c4785b338ce2)

### 📞 Contact Us
![Contact](https://github.com/user-attachments/assets/d6f5f57a-1475-47b9-9481-a8f9bbe836c6)

### 📝 Policies
![Policies](https://github.com/user-attachments/assets/374ae9c4-8169-4b47-8265-7cc2dcfa8a75)

### Responsive for Mobile Users
























