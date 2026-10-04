::: {align="center"}
# 🛍️ MERN E-Commerce Platform

### A full-stack e-commerce application built with React, Express, MongoDB, PayPal and Cloudinary.

```{=html}
<p>
```
`<strong>`{=html}Customer storefront`</strong>`{=html} ·
`<strong>`{=html}Admin dashboard`</strong>`{=html} ·
`<strong>`{=html}Product management`</strong>`{=html} ·
`<strong>`{=html}Cart & checkout`</strong>`{=html} ·
`<strong>`{=html}Orders`</strong>`{=html} ·
`<strong>`{=html}Reviews`</strong>`{=html} · `<strong>`{=html}PayPal
payments`</strong>`{=html}
```{=html}
</p>
```
:::

------------------------------------------------------------------------

## 📌 Overview

**MERN E-Commerce Platform** is a full-stack shopping application
designed around a modern online-store workflow.

The project contains two primary experiences:

-   **Shopping application** for customers to browse products, search
    and filter inventory, manage addresses, add items to a cart,
    checkout, pay with PayPal, and review products.
-   **Admin dashboard** for managing products, product images, orders,
    order status, and feature/banner images.

The application follows a separated frontend/backend architecture:

``` text
┌─────────────────────────────────────────────────────────────────────┐
│                         React Frontend                              │
│              Vite + Redux Toolkit + Tailwind CSS                   │
└───────────────────────────────┬─────────────────────────────────────┘
                                │ HTTP / JSON / Cookies
                                ▼
┌─────────────────────────────────────────────────────────────────────┐
│                         Express API                                │
│       Auth • Products • Cart • Address • Orders • Reviews          │
└──────────────┬───────────────────────────────┬──────────────────────┘
               │                               │
               ▼                               ▼
       ┌───────────────┐                ┌───────────────┐
       │   MongoDB     │                │  3rd Parties  │
       │   Mongoose    │                │ PayPal /      │
       │               │                │ Cloudinary    │
       └───────────────┘                └───────────────┘
```

------------------------------------------------------------------------

## ✨ Key Features

### 🛒 Customer Experience

-   User registration and login
-   Cookie-based JWT authentication
-   Product browsing
-   Product category filtering
-   Brand filtering
-   Price and title sorting
-   Product search
-   Product detail pages
-   Product reviews and ratings
-   Shopping cart
-   Cart quantity updates
-   Saved delivery addresses
-   Checkout workflow
-   PayPal payment flow
-   Order creation and payment capture
-   Order history
-   Order details
-   Payment success / return pages
-   Responsive shopping UI

### 🧑‍💼 Admin Experience

-   Admin dashboard
-   Product listing
-   Add products
-   Edit products
-   Delete products
-   Product image upload
-   Cloudinary image handling
-   Order management
-   View all customer orders
-   View order details
-   Update order status
-   Feature/banner image management

### 🔐 Authentication & Security

-   Password hashing with `bcryptjs`
-   JWT authentication
-   HTTP-only authentication cookie
-   Cookie parser
-   CORS configuration
-   Role field on user accounts
-   Protected frontend routes
-   Auth state restored on application startup

------------------------------------------------------------------------

# 🧰 Tech Stack

## Frontend

  Technology         Purpose
  ------------------ -----------------------------------------
  React 18           UI development
  Vite               Frontend tooling and development server
  React Router DOM   Client-side routing
  Redux Toolkit      Application state management
  React Redux        Redux integration
  Tailwind CSS       Styling
  Radix UI           Accessible UI primitives
  Lucide React       Icons
  Axios              HTTP requests
  PayPal React SDK   PayPal client integration

## Backend

  Technology        Purpose
  ----------------- -------------------------------
  Node.js           JavaScript runtime
  Express.js        REST API framework
  MongoDB           Database
  Mongoose          MongoDB ODM
  JWT               Authentication tokens
  bcryptjs          Password hashing
  cookie-parser     Authentication cookie parsing
  CORS              Cross-origin API access
  Multer            File upload handling
  Cloudinary        Image storage
  PayPal REST SDK   Payment processing
  dotenv            Environment variables
  Nodemon           Development server reload

------------------------------------------------------------------------

# 🏗️ Project Architecture

``` text
E-commerce-final-main/
│
├── client/                         # React frontend
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
│   │   │   ├── not-found/
│   │   │   ├── shopping-view/
│   │   │   └── unauth-page/
│   │   ├── store/
│   │   │   ├── admin/
│   │   │   ├── auth-slice/
│   │   │   ├── common-slice/
│   │   │   └── shop/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
│
└── server/                         # Express backend
    ├── controllers/
    │   ├── admin/
    │   ├── auth/
    │   ├── common/
    │   └── shop/
    ├── helpers/
    │   ├── cloudinary.js
    │   └── paypal.js
    ├── models/
    │   ├── Address.js
    │   ├── Cart.js
    │   ├── Feature.js
    │   ├── Order.js
    │   ├── Product.js
    │   ├── Review.js
    │   └── User.js
    ├── routes/
    │   ├── admin/
    │   ├── auth/
    │   ├── common/
    │   └── shop/
    ├── server.js
    └── package.json
```

------------------------------------------------------------------------

# 🗄️ Database Models

The backend currently contains **7 Mongoose models**.

## 1. User

**File:** `server/models/User.js`

Stores customer/admin account information.

  Field        Type         Required Notes
  ------------ ---------- ---------- -------------------------
  `_id`        ObjectId         Auto MongoDB identifier
  `userName`   String            Yes Unique username
  `email`      String            Yes Unique email
  `password`   String            Yes Stored as a bcrypt hash
  `role`       String             No Defaults to `user`

### Relationships

``` text
User
 ├── Cart
 ├── Address
 ├── Order
 └── ProductReview
```

------------------------------------------------------------------------

## 2. Product

**File:** `server/models/Product.js`

Stores products displayed in the storefront.

  Field             Type         Required Notes
  ----------------- ---------- ---------- -----------------------------------------
  `_id`             ObjectId         Auto Product identifier
  `image`           String             No Product image URL
  `title`           String             No Product title
  `description`     String             No Product description
  `category`        String             No Men, Women, Kids, Accessories, Footwear
  `brand`           String             No Nike, Adidas, Puma, Levi, Zara, H&M
  `price`           Number             No Regular price
  `salePrice`       Number             No Discounted price
  `totalStock`      Number             No Available inventory
  `averageReview`   Number             No Average rating
  `createdAt`       Date             Auto Mongoose timestamp
  `updatedAt`       Date             Auto Mongoose timestamp

------------------------------------------------------------------------

## 3. Cart

**File:** `server/models/Cart.js`

Stores a user's active shopping cart.

  Field               Type         Required Notes
  ------------------- ---------- ---------- ----------------------
  `_id`               ObjectId         Auto Cart identifier
  `userId`            ObjectId          Yes References `User`
  `items`             Array             Yes Cart items
  `items.productId`   ObjectId          Yes References `Product`
  `items.quantity`    Number            Yes Minimum `1`
  `createdAt`         Date             Auto Mongoose timestamp
  `updatedAt`         Date             Auto Mongoose timestamp

### Relationship

``` text
Cart
 └── userId ──────► User
 └── items[].productId ──────► Product
```

------------------------------------------------------------------------

## 4. Address

**File:** `server/models/Address.js`

Stores customer delivery addresses.

  Field         Type         Required Notes
  ------------- ---------- ---------- ---------------------------
  `_id`         ObjectId         Auto Address identifier
  `userId`      String             No User identifier
  `address`     String             No Street / delivery address
  `city`        String             No City
  `pincode`     String             No Postal code
  `phone`       String             No Contact number
  `notes`       String             No Delivery notes
  `createdAt`   Date             Auto Mongoose timestamp
  `updatedAt`   Date             Auto Mongoose timestamp

------------------------------------------------------------------------

## 5. Order

**File:** `server/models/Order.js`

Stores checkout and payment information.

  Field                     Type         Required Notes
  ------------------------- ---------- ---------- --------------------------------
  `_id`                     ObjectId         Auto Order identifier
  `userId`                  String             No Customer identifier
  `cartId`                  String             No Source cart
  `cartItems`               Array              No Snapshot of purchased products
  `cartItems.productId`     String             No Product identifier
  `cartItems.title`         String             No Product title at purchase time
  `cartItems.image`         String             No Product image at purchase time
  `cartItems.price`         String             No Product price snapshot
  `cartItems.quantity`      Number             No Purchased quantity
  `addressInfo`             Object             No Shipping information
  `addressInfo.addressId`   String             No Address identifier
  `addressInfo.address`     String             No Delivery address
  `addressInfo.city`        String             No City
  `addressInfo.pincode`     String             No Postal code
  `addressInfo.phone`       String             No Phone
  `addressInfo.notes`       String             No Delivery notes
  `orderStatus`             String             No Current order state
  `paymentMethod`           String             No Payment method
  `paymentStatus`           String             No Payment state
  `totalAmount`             Number             No Order total
  `orderDate`               Date               No Order creation date
  `orderUpdateDate`         Date               No Last order update
  `paymentId`               String             No PayPal/payment identifier
  `payerId`                 String             No PayPal payer identifier

### Order lifecycle

``` text
Cart
  │
  ▼
Create Payment
  │
  ▼
Create Order
  │
  ▼
PayPal Approval
  │
  ▼
Capture Payment
  │
  ├── paymentStatus = paid
  ├── orderStatus = confirmed
  ├── product stock reduced
  └── cart removed
```

------------------------------------------------------------------------

## 6. ProductReview

**File:** `server/models/Review.js`

Mongoose model name: `ProductReview`

Stores product ratings and customer comments.

  Field             Type         Required Notes
  ----------------- ---------- ---------- -----------------------
  `_id`             ObjectId         Auto Review identifier
  `productId`       String             No Reviewed product
  `userId`          String             No Reviewer
  `userName`        String             No Reviewer display name
  `reviewMessage`   String             No Review text
  `reviewValue`     Number             No Rating value
  `createdAt`       Date             Auto Mongoose timestamp
  `updatedAt`       Date             Auto Mongoose timestamp

------------------------------------------------------------------------

## 7. Feature

**File:** `server/models/Feature.js`

Stores feature/banner image records.

  Field         Type         Required Notes
  ------------- ---------- ---------- --------------------
  `_id`         ObjectId         Auto Feature identifier
  `image`       String             No Image URL
  `createdAt`   Date             Auto Mongoose timestamp
  `updatedAt`   Date             Auto Mongoose timestamp

------------------------------------------------------------------------

# 🔗 Entity Relationship Overview

``` text
                       ┌──────────────┐
                       │     User     │
                       └──────┬───────┘
                              │
          ┌───────────────────┼───────────────────┐
          │                   │                   │
          ▼                   ▼                   ▼
     ┌─────────┐        ┌──────────┐        ┌──────────┐
     │  Cart   │        │ Address  │        │  Order   │
     └────┬────┘        └──────────┘        └────┬─────┘
          │                                      │
          │                                      │
          ▼                                      ▼
     ┌──────────┐                          ┌──────────┐
     │ Product  │◄─────────────────────────│ CartItem │
     └────┬─────┘                          └──────────┘
          │
          ▼
   ┌───────────────┐
   │ ProductReview │
   └───────────────┘

   ┌───────────┐
   │  Feature  │
   └───────────┘
```

------------------------------------------------------------------------

# 🔌 REST API Reference

Base URL:

``` text
http://localhost:5000/api
```

For production, use the deployed backend URL configured in the frontend
environment.

------------------------------------------------------------------------

## 🔐 Authentication API

### Register

``` http
POST /api/auth/register
```

Request:

``` json
{
  "userName": "john",
  "email": "john@example.com",
  "password": "your-password"
}
```

### Login

``` http
POST /api/auth/login
```

Request:

``` json
{
  "email": "john@example.com",
  "password": "your-password"
}
```

The server creates an HTTP-only `token` cookie.

### Logout

``` http
POST /api/auth/logout
```

### Check authentication

``` http
GET /api/auth/check-auth
```

------------------------------------------------------------------------

# 📦 Product API

## Admin Products

### Upload product image

``` http
POST /api/admin/products/upload-image
```

Form-data field:

``` text
my_file=<image>
```

### Add product

``` http
POST /api/admin/products/add
```

Example:

``` json
{
  "image": "https://...",
  "title": "Classic Sneaker",
  "description": "Comfortable everyday sneaker",
  "category": "footwear",
  "brand": "nike",
  "price": 99,
  "salePrice": 79,
  "totalStock": 25,
  "averageReview": 0
}
```

### Get all products

``` http
GET /api/admin/products/get
```

### Edit product

``` http
PUT /api/admin/products/edit/:id
```

### Delete product

``` http
DELETE /api/admin/products/delete/:id
```

------------------------------------------------------------------------

## 🛍️ Shopping Products

### Get filtered products

``` http
GET /api/shop/products/get
```

Supported query parameters:

``` text
category
brand
sortBy
```

Examples:

``` text
/api/shop/products/get?category=men
/api/shop/products/get?brand=nike
/api/shop/products/get?sortBy=price-lowtohigh
/api/shop/products/get?sortBy=price-hightolow
/api/shop/products/get?sortBy=title-atoz
/api/shop/products/get?sortBy=title-ztoa
```

### Get product details

``` http
GET /api/shop/products/get/:id
```

------------------------------------------------------------------------

# 🔎 Search API

### Search products

``` http
GET /api/shop/search/:keyword
```

Example:

``` text
GET /api/shop/search/sneaker
```

------------------------------------------------------------------------

# 🛒 Cart API

### Add item to cart

``` http
POST /api/shop/cart/add
```

Request:

``` json
{
  "userId": "USER_ID",
  "productId": "PRODUCT_ID",
  "quantity": 1
}
```

### Get cart

``` http
GET /api/shop/cart/get/:userId
```

### Update cart quantity

``` http
PUT /api/shop/cart/update-cart
```

Request:

``` json
{
  "userId": "USER_ID",
  "productId": "PRODUCT_ID",
  "quantity": 2
}
```

### Remove cart item

``` http
DELETE /api/shop/cart/:userId/:productId
```

------------------------------------------------------------------------

# 📍 Address API

### Add address

``` http
POST /api/shop/address/add
```

Request:

``` json
{
  "userId": "USER_ID",
  "address": "123 Main Street",
  "city": "Delhi",
  "pincode": "110001",
  "phone": "9876543210",
  "notes": "Leave at the door"
}
```

### Get user addresses

``` http
GET /api/shop/address/get/:userId
```

### Update address

``` http
PUT /api/shop/address/update/:userId/:addressId
```

### Delete address

``` http
DELETE /api/shop/address/delete/:userId/:addressId
```

------------------------------------------------------------------------

# 📦 Order API

### Create PayPal order

``` http
POST /api/shop/order/create
```

Creates a PayPal payment and creates the corresponding application
order.

### Save order

``` http
POST /api/shop/order/save
```

Stores an order and, when `paymentStatus` is `paid`, reduces product
stock and removes the cart.

### Capture payment

``` http
POST /api/shop/order/capture
```

Request:

``` json
{
  "paymentId": "PAYMENT_ID",
  "payerId": "PAYER_ID",
  "orderId": "ORDER_ID"
}
```

### Get user orders

``` http
GET /api/shop/order/list/:userId
```

### Get order details

``` http
GET /api/shop/order/details/:id
```

------------------------------------------------------------------------

# 🧑‍💼 Admin Order API

### Get all orders

``` http
GET /api/admin/orders/get
```

### Get order details

``` http
GET /api/admin/orders/details/:id
```

### Update order status

``` http
PUT /api/admin/orders/update/:id
```

Request:

``` json
{
  "orderStatus": "delivered"
}
```

------------------------------------------------------------------------

# ⭐ Review API

### Add review

``` http
POST /api/shop/review/add
```

A review contains:

``` json
{
  "productId": "PRODUCT_ID",
  "userId": "USER_ID",
  "userName": "John",
  "reviewMessage": "Great product!",
  "reviewValue": 5
}
```

The controller checks whether the user has an order containing the
product before allowing the review.

### Get product reviews

``` http
GET /api/shop/review/:productId
```

------------------------------------------------------------------------

# 🖼️ Feature Image API

### Add feature image

``` http
POST /api/common/feature/add
```

Request:

``` json
{
  "image": "https://..."
}
```

### Get feature images

``` http
GET /api/common/feature/get
```

------------------------------------------------------------------------

# 🖥️ Frontend Routes

## Authentication

  Route              Page
  ------------------ --------------
  `/auth/login`      Login
  `/auth/register`   Registration

## Shopping

  Route                     Page
  ------------------------- ------------------
  `/shop/home`              Store homepage
  `/shop/listing`           Product listing
  `/shop/search`            Product search
  `/shop/checkout`          Checkout
  `/shop/account`           Customer account
  `/shop/paypal-return`     PayPal return
  `/shop/payment-success`   Payment success

## Admin

  Route                Page
  -------------------- ---------------------------
  `/admin/dashboard`   Admin dashboard
  `/admin/products`    Product management
  `/admin/orders`      Order management
  `/admin/features`    Feature/banner management

------------------------------------------------------------------------

# 🧠 Frontend State Management

Redux Toolkit is organized into feature-specific slices.

``` text
client/src/store/
│
├── store.js
│
├── auth-slice/
│   └── index.js
│
├── common-slice/
│   └── index.js
│
├── admin/
│   ├── order-slice/
│   └── products-slice/
│
└── shop/
    ├── address-slice/
    ├── cart-slice/
    ├── order-slice/
    ├── products-slice/
    ├── review-slice/
    └── search-slice/
```

### Main application state areas

-   Authentication
-   Admin products
-   Admin orders
-   Store products
-   Shopping cart
-   Customer addresses
-   Customer orders
-   Product reviews
-   Product search
-   Shared/common state

------------------------------------------------------------------------

# 🔐 Authentication Flow

The current backend authentication flow is:

``` text
Register
   │
   ▼
bcrypt password hash
   │
   ▼
MongoDB User
   │
   ▼
Login
   │
   ▼
Password verification
   │
   ▼
JWT generated
   │
   ▼
HTTP-only "token" cookie
   │
   ▼
Frontend calls /check-auth
   │
   ▼
Authenticated user restored
```

The JWT contains:

``` json
{
  "id": "USER_ID",
  "role": "user",
  "email": "user@example.com",
  "userName": "username"
}
```

------------------------------------------------------------------------

# 💳 PayPal Integration

The application uses PayPal for checkout.

Payment flow:

``` text
Customer Cart
      │
      ▼
Checkout
      │
      ▼
POST /api/shop/order/create
      │
      ▼
PayPal payment creation
      │
      ▼
Customer approval
      │
      ▼
PayPal return
      │
      ▼
POST /api/shop/order/capture
      │
      ├── mark payment as paid
      ├── confirm order
      ├── reduce product stock
      └── remove cart
```

The server-side PayPal helper reads:

``` env
PAYPAL_MODE=
PAYPAL_CLIENT_ID=
PAYPAL_CLIENT_SECRET=
```

The frontend reads:

``` env
VITE_PAYPAL_CLIENT_ID=
```

------------------------------------------------------------------------

# ☁️ Cloudinary Image Upload

Product images are uploaded through:

``` text
Multer
   │
   ▼
Memory Buffer
   │
   ▼
Base64 data URI
   │
   ▼
Cloudinary
   │
   ▼
Image URL
   │
   ▼
Product.image
```

Backend helper:

``` text
server/helpers/cloudinary.js
```

Admin upload endpoint:

``` http
POST /api/admin/products/upload-image
```

Multipart field:

``` text
my_file
```

------------------------------------------------------------------------

# ⚙️ Environment Variables

## Frontend

Create:

``` text
client/.env
```

Example:

``` env
VITE_API_URL=http://localhost:5000
VITE_PAYPAL_CLIENT_ID=your_paypal_client_id
```

For production:

``` env
VITE_API_URL=https://your-backend-domain.com
VITE_PAYPAL_CLIENT_ID=your_paypal_client_id
```

## Backend

Create:

``` text
server/.env
```

Example:

``` env
PORT=5000

MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/ecommerce

NODE_ENV=development

FRONTEND_URL=http://localhost:5173

PAYPAL_MODE=sandbox
PAYPAL_CLIENT_ID=your_paypal_client_id
PAYPAL_CLIENT_SECRET=your_paypal_client_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

> **Important:** Never commit `.env` files or API credentials to GitHub.

------------------------------------------------------------------------

# 🚀 Local Development

## Prerequisites

Install:

-   Node.js 18+
-   npm
-   MongoDB / MongoDB Atlas account
-   PayPal developer account for payments
-   Cloudinary account for image uploads

------------------------------------------------------------------------

## 1. Clone the repository

``` bash
git clone <your-repository-url>
cd E-commerce-final-main
```

------------------------------------------------------------------------

## 2. Install frontend dependencies

``` bash
cd client
npm install
```

------------------------------------------------------------------------

## 3. Install backend dependencies

Open another terminal:

``` bash
cd server
npm install
```

------------------------------------------------------------------------

## 4. Configure backend environment

Create:

``` text
server/.env
```

Add your MongoDB, PayPal and Cloudinary credentials.

------------------------------------------------------------------------

## 5. Configure frontend environment

Create/update:

``` text
client/.env
```

Example:

``` env
VITE_API_URL=http://localhost:5000
VITE_PAYPAL_CLIENT_ID=your_paypal_client_id
```

------------------------------------------------------------------------

## 6. Start backend

``` bash
cd server
npm run dev
```

Backend:

``` text
http://localhost:5000
```

------------------------------------------------------------------------

## 7. Start frontend

In another terminal:

``` bash
cd client
npm run dev
```

Frontend:

``` text
http://localhost:5173
```

------------------------------------------------------------------------

# 📜 Available Scripts

## Frontend

### Development

``` bash
npm run dev
```

### Production build

``` bash
npm run build
```

### Preview production build

``` bash
npm run preview
```

### Lint

``` bash
npm run lint
```

## Backend

### Development

``` bash
npm run dev
```

### Production/start

``` bash
npm start
```

------------------------------------------------------------------------

# 🧪 Recommended Development Checklist

Before deploying:

-   [ ] Configure MongoDB connection
-   [ ] Configure PayPal sandbox/production credentials
-   [ ] Configure Cloudinary credentials
-   [ ] Configure frontend API URL
-   [ ] Configure production frontend URL
-   [ ] Verify CORS origins
-   [ ] Test registration/login
-   [ ] Test product CRUD
-   [ ] Test image upload
-   [ ] Test cart operations
-   [ ] Test address CRUD
-   [ ] Test PayPal checkout
-   [ ] Test payment capture
-   [ ] Verify inventory reduction
-   [ ] Test order status updates
-   [ ] Test product reviews
-   [ ] Run frontend production build
-   [ ] Run lint checks
-   [ ] Remove secrets from source code

------------------------------------------------------------------------

# 🛡️ Production Security Notes

This repository is suitable as a full-stack project, but several areas
should be hardened before using it for a real production store.

### 1. Move the JWT secret to an environment variable

The current authentication controller uses a hard-coded JWT secret:

``` text
CLIENT_SECRET_KEY
```

Production configuration should use something like:

``` env
JWT_SECRET=replace-with-a-long-random-secret
```

### 2. Protect admin API routes

The current server route files expose admin endpoints without attaching
the authentication middleware directly.

For production, add authentication and role authorization middleware to:

``` text
/api/admin/products/*
/api/admin/orders/*
```

### 3. Protect user-owned resources

User IDs are currently supplied through request bodies/URLs for several
shopping APIs.

Production APIs should derive the authenticated user from the verified
JWT where possible instead of trusting a client-provided `userId`.

### 4. Configure Cloudinary through environment variables

The Cloudinary helper should read:

``` env
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

rather than storing credentials in source code.

### 5. Validate incoming data

For production, add request validation for:

-   email
-   password
-   product prices
-   stock
-   quantities
-   review values
-   MongoDB IDs
-   addresses
-   payment values

### 6. Add rate limiting

Authentication endpoints should have rate limiting to reduce brute-force
attempts.

### 7. Never trust client-side prices

The backend should calculate order totals from server-side product data
rather than trusting `totalAmount` sent by the browser.

------------------------------------------------------------------------

# 📊 Product Categories

The frontend currently provides:

``` text
Men
Women
Kids
Accessories
Footwear
```

# 🏷️ Supported Brands

``` text
Nike
Adidas
Puma
Levi's
Zara
H&M
```

# ↕️ Sorting Options

``` text
Price: Low to High
Price: High to Low
Title: A to Z
Title: Z to A
```

------------------------------------------------------------------------

# 📁 Important Backend Files

``` text
server/
│
├── server.js
│
├── controllers/
│   ├── auth/auth-controller.js
│   ├── admin/products-controller.js
│   ├── admin/order-controller.js
│   ├── common/feature-controller.js
│   └── shop/
│       ├── products-controller.js
│       ├── cart-controller.js
│       ├── address-controller.js
│       ├── order-controller.js
│       ├── product-review-controller.js
│       └── search-controller.js
│
├── models/
│   ├── User.js
│   ├── Product.js
│   ├── Cart.js
│   ├── Address.js
│   ├── Order.js
│   ├── Review.js
│   └── Feature.js
│
├── routes/
│   ├── auth/
│   ├── admin/
│   ├── common/
│   └── shop/
│
└── helpers/
    ├── paypal.js
    └── cloudinary.js
```

------------------------------------------------------------------------

# 📁 Important Frontend Files

``` text
client/src/
│
├── App.jsx
├── main.jsx
│
├── components/
│   ├── admin-view/
│   ├── auth/
│   ├── common/
│   ├── shopping-view/
│   └── ui/
│
├── pages/
│   ├── admin-view/
│   ├── auth/
│   ├── shopping-view/
│   ├── not-found/
│   └── unauth-page/
│
└── store/
    ├── auth-slice/
    ├── common-slice/
    ├── admin/
    └── shop/
```

------------------------------------------------------------------------

# 🔄 Request Flow

A typical customer request follows this architecture:

``` text
React Component
      │
      ▼
Redux Slice / Axios
      │
      ▼
Express Route
      │
      ▼
Controller
      │
      ▼
Mongoose Model
      │
      ▼
MongoDB
      │
      ▼
Controller Response
      │
      ▼
Redux State
      │
      ▼
React UI
```

------------------------------------------------------------------------

# 🛍️ Example Shopping Flow

``` text
1. Register / Login
        ↓
2. Browse products
        ↓
3. Search / filter
        ↓
4. Open product details
        ↓
5. Add product to cart
        ↓
6. Update quantity
        ↓
7. Select / create address
        ↓
8. Checkout
        ↓
9. Create PayPal payment
        ↓
10. Approve payment
        ↓
11. Capture payment
        ↓
12. Confirm order
        ↓
13. Reduce stock
        ↓
14. Clear cart
        ↓
15. View order history
        ↓
16. Leave product review
```

------------------------------------------------------------------------

# 🧑‍💼 Admin Workflow

``` text
Admin Login
    │
    ├── Dashboard
    │
    ├── Products
    │    ├── Upload image
    │    ├── Add product
    │    ├── Edit product
    │    └── Delete product
    │
    ├── Orders
    │    ├── View all orders
    │    ├── View details
    │    └── Update status
    │
    └── Features
         ├── Add feature image
         └── View feature images
```

------------------------------------------------------------------------

# 🖼️ Screenshots

Add your actual screenshots here after uploading them to the repository.

Recommended structure:

``` text
docs/
├── home.png
├── products.png
├── product-details.png
├── cart.png
├── checkout.png
├── admin-dashboard.png
├── admin-products.png
└── admin-orders.png
```

Then update this section:

``` markdown
## Screenshots

### Storefront
![Storefront](docs/home.png)

### Products
![Products](docs/products.png)

### Checkout
![Checkout](docs/checkout.png)

### Admin Dashboard
![Admin Dashboard](docs/admin-dashboard.png)
```

------------------------------------------------------------------------

# 🌐 Deployment

The project is structured so the frontend and backend can be deployed
independently.

### Frontend

Recommended platforms:

-   Vercel
-   Netlify
-   Cloudflare Pages

### Backend

Recommended platforms:

-   Render
-   Railway
-   Fly.io
-   AWS

### Database

Recommended:

-   MongoDB Atlas

### Media

Recommended:

-   Cloudinary

### Payments

Use:

-   PayPal Sandbox for development
-   PayPal Live credentials for production

------------------------------------------------------------------------

# 🧭 Roadmap

Potential improvements for future versions:

-   [ ] Server-side role-based authorization middleware
-   [ ] Server-side request validation
-   [ ] Product pagination
-   [ ] Product variants and sizes
-   [ ] Wishlist
-   [ ] Coupon / discount system
-   [ ] Inventory alerts
-   [ ] Email order confirmations
-   [ ] Password reset
-   [ ] Refresh-token authentication
-   [ ] Better order status workflow
-   [ ] Admin analytics
-   [ ] Sales reports
-   [ ] Payment webhook verification
-   [ ] Automated tests
-   [ ] API documentation with OpenAPI / Swagger
-   [ ] Docker support
-   [ ] CI/CD pipeline

------------------------------------------------------------------------

# 🤝 Contributing

Contributions are welcome.

### 1. Fork the repository

``` bash
git fork <repository-url>
```

### 2. Create a feature branch

``` bash
git checkout -b feature/your-feature
```

### 3. Make your changes

Keep changes focused and follow the existing project structure.

### 4. Test your changes

``` bash
cd client
npm run lint
npm run build
```

Also test the backend and affected API flows.

### 5. Commit

``` bash
git add .
git commit -m "feat: add your feature"
```

### 6. Push

``` bash
git push origin feature/your-feature
```

### 7. Open a Pull Request

Describe:

-   What changed
-   Why it changed
-   How it was tested
-   Any configuration changes required

------------------------------------------------------------------------

# 📝 License

This project currently uses the **ISC License** as specified in the
backend `package.json`.

If this repository is intended for public distribution, add a dedicated
`LICENSE` file containing the complete license text.

------------------------------------------------------------------------

# 👨‍💻 Author

**Sangam Mukherjee**

Backend package metadata identifies the project author as Sangam
Mukherjee.

------------------------------------------------------------------------

# ⭐ Support

If this project helped you, consider giving the repository a ⭐ on
GitHub.

------------------------------------------------------------------------

::: {align="center"}
### Built with the MERN Stack ❤️

**React · Node.js · Express · MongoDB · PayPal · Cloudinary**
:::
