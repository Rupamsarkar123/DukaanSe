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
