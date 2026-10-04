🛍️ E-Commerce Platform

A modern, full-stack e-commerce application built with React, Node.js, Express, and MongoDB. The platform provides a complete shopping experience for customers and a dedicated administration area for managing products and orders.

✨ Features

🛒 Customer Experience

User registration and login

Protected authentication flow

Product browsing and search

Product filtering by category and brand

Product sorting by price and title

Product details and reviews

Shopping cart management

Address management

Checkout flow

PayPal payment integration

Order history and order details

Responsive shopping interface

👨‍💼 Admin Dashboard

Protected admin area

Dashboard

Product management

Product image uploads

Inventory/stock management

Order management

Order details

Featured product/content management

🔐 Security & Backend

JWT-based authentication

Password hashing with bcryptjs

HTTP-only cookie-based authentication

Role-based route protection

CORS configuration

MongoDB data persistence

Cloudinary integration for image handling

PayPal integration for payments

🧰 Tech Stack

Frontend

Technology

Purpose

React 18

UI development

Vite

Frontend tooling and development server

React Router

Client-side routing

Redux Toolkit

Application state management

Axios

API communication

Tailwind CSS

Styling

Radix UI

Accessible UI primitives

Lucide React

Icons

PayPal React SDK

PayPal checkout integration

Backend

Technology

Purpose

Node.js

Runtime

Express.js

REST API

MongoDB

Database

Mongoose

MongoDB ODM

JWT

Authentication

bcryptjs

Password hashing

Cloudinary

Image management

Multer

File uploads

PayPal SDK

Payment processing

CORS

Cross-origin requests

Cookie Parser

Cookie handling

📁 Project Structure

E-commerce-final-main/
│
├── client/                         # React + Vite frontend
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── admin-view/
│   │   │   ├── auth/
│   │   │   ├── common/
│   │   │   ├── shopping-view/
│   │   │   └── ui/
│   │   ├── config/
│   │   ├── lib/
│   │   ├── pages/
│   │   │   ├── admin-view/
│   │   │   ├── auth/
│   │   │   ├── shopping-view/
│   │   │   └── not-found/
│   │   ├── store/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
└── server/                         # Node.js + Express backend
    ├── controllers/
    │   ├── admin/
    │   ├── auth/
    │   ├── common/
    │   └── shop/
    ├── helpers/
    ├── models/
    ├── routes/
    │   ├── admin/
    │   ├── auth/
    │   ├── common/
    │   └── shop/
    ├── server.js
    └── package.json

🚀 Getting Started

Prerequisites

Make sure you have the following installed:

Node.js 18+

npm

MongoDB database

Cloudinary account

PayPal Developer account

📦 Installation

Clone the repository and move into the project:

git clone <YOUR_REPOSITORY_URL>
cd E-commerce-final-main

1. Install frontend dependencies

cd client
npm install

2. Install backend dependencies

Open another terminal:

cd server
npm install

⚙️ Environment Variables

Create a .env file inside the server directory.

Server .env

PORT=5000

MONGO_URI=your_mongodb_connection_string

FRONTEND_URL=http://localhost:5173

NODE_ENV=development

PAYPAL_MODE=sandbox
PAYPAL_CLIENT_ID=your_paypal_client_id
PAYPAL_CLIENT_SECRET=your_paypal_client_secret

Create/update the frontend environment file at client/.env:

VITE_API_URL=http://localhost:5000
VITE_PAYPAL_CLIENT_ID=your_paypal_client_id

Important: Never commit real API keys, database credentials, PayPal secrets, or other sensitive environment variables to GitHub.

▶️ Running the Application

You need to run both the frontend and backend.

Start the backend

cd server
npm run dev

The API server will run on:

http://localhost:5000

Start the frontend

In another terminal:

cd client
npm run dev

The Vite development server will normally run on:

http://localhost:5173

Open the frontend URL in your browser.

🧪 Production Build

Frontend

cd client
npm run build

To preview the production build:

npm run preview

Backend

cd server
npm start

🔌 API Overview

The backend exposes REST API endpoints grouped by responsibility.

Authentication

/api/auth

Handles:

User registration

User login

Authentication checks

Logout

Admin

/api/admin/products
/api/admin/orders

Handles:

Product creation and management

Product updates/deletion

Order management

Admin operations

Shopping

/api/shop/products
/api/shop/cart
/api/shop/address
/api/shop/order
/api/shop/search
/api/shop/review

Handles:

Products

Cart

Addresses

Orders

Product search

Product reviews

Common

/api/common/feature

Handles common/featured content used by the storefront.

🗃️ Data Models

The backend uses MongoDB with Mongoose models for:

User

Product

Cart

Address

Order

Review

Feature

💳 Payment Integration

The application includes PayPal payment support.

For local development, use the PayPal Sandbox environment:

PAYPAL_MODE=sandbox

Configure the corresponding PayPal client ID and secret in the backend environment variables.

🖼️ Image Management

Product images are handled through Cloudinary.

Make sure your Cloudinary credentials and upload configuration are correctly configured before using product image upload functionality.

🔒 Authentication Flow

The application protects authenticated routes on both the client and server.

The general flow is:

User
  │
  ├── Register / Login
  │
  ▼
Authentication API
  │
  ▼
JWT + Secure Cookie
  │
  ▼
Protected Routes
  │
  ├── Customer Store
  │
  └── Admin Dashboard

🧑‍💻 Available Scripts

Client

Command

Description

npm run dev

Start Vite development server

npm run build

Create production build

npm run preview

Preview production build

npm run lint

Run ESLint

Server

Command

Description

npm run dev

Start backend with Nodemon

npm start

Start backend with Node.js

🌐 Main Application Routes

Customer

/auth/login
/auth/register

/shop/home
/shop/listing
/shop/search
/shop/checkout
/shop/account
/shop/payment-success
/shop/paypal-return

Admin

/admin/dashboard
/admin/products
/admin/orders
/admin/features

📸 Screenshots

Add screenshots of your application here to make the repository more attractive and easier to understand.

Example:

![Home Page](./screenshots/home.png)
![Products](./screenshots/products.png)
![Admin Dashboard](./screenshots/admin-dashboard.png)

🛣️ Roadmap

Potential improvements for future versions:

Wishlist functionality

Product pagination

Advanced analytics dashboard

Email notifications

Coupon and discount system

Multiple payment providers

Order tracking

Product recommendations

Automated testing

Docker support

CI/CD pipeline

🤝 Contributing

Contributions are welcome.

Fork the repository.

Create a feature branch.

git checkout -b feature/your-feature

Make your changes.

Commit your changes.

git commit -m "feat: add your feature"

Push the branch.

git push origin feature/your-feature

Open a Pull Request.

🐛 Issues

If you find a bug or have a feature request, please open an issue with:

A clear description

Steps to reproduce the problem

Expected behavior

Actual behavior

Relevant screenshots or logs

📄 License

This project is currently licensed under the ISC License, as specified in the server package configuration.

👨‍💻 Author

Sangam Mukherjee

Built with ❤️ using React, Node.js, Express, MongoDB, and modern web technologies.

⭐ Support

If you find this project useful, consider giving it a ⭐ on GitHub.

Note: Replace <YOUR_REPOSITORY_URL> and the screenshot paths with your actual repository URL and screenshots before publishing.
