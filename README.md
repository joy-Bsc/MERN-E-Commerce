﻿# MERN-E-Commerce

 ## Overview
This project is a full-stack e-commerce application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The application allows users to browse products, manage their profiles, and place orders. Users must be authenticated to place an order.

# Preview:
![Screenshot (18)](https://github.com/user-attachments/assets/0e948ce3-59b8-400a-a5b0-ec5dab11ed52)
![Screenshot (19)](https://github.com/user-attachments/assets/a3483160-2cb4-4b1b-b93f-67906aea2243)
![Screenshot (20)](https://github.com/user-attachments/assets/57a507a1-3ac4-4c81-b4b9-af00e04793cb)
![Screenshot (21)](https://github.com/user-attachments/assets/7f51f53e-9758-44b6-b05b-49bf9d4c4a7a)
![Screenshot (22)](https://github.com/user-attachments/assets/93b5bcd6-58c7-449c-be6d-d2aa0d85d97e)
![Screenshot (23)](https://github.com/user-attachments/assets/d2f53273-8298-4340-b7b8-fc7331d34614)
![Screenshot (24)](https://github.com/user-attachments/assets/3192503c-0385-4ec1-bc1f-d940280315c3)
![Screenshot (25)](https://github.com/user-attachments/assets/7644e228-6cf5-48ca-bd3b-702f01542268)
![Screenshot (26)](https://github.com/user-attachments/assets/103537a8-d394-4eaf-8f81-59f2d388af5e)
![Screenshot (27)](https://github.com/user-attachments/assets/734d714c-06cc-408b-aabc-ec01adf486d6)
![Screenshot (28)](https://github.com/user-attachments/assets/eb98cf32-2911-4df1-a0b8-6f26f4ba64ff)
![Screenshot (29)](https://github.com/user-attachments/assets/86c274e6-48f5-4d11-8ad2-13b9d52daba9)
![Screenshot (30)](https://github.com/user-attachments/assets/14e03fab-a251-43ea-b448-a269629eeb65)
![Screenshot (31)](https://github.com/user-attachments/assets/f2f43c81-eb4c-4db6-ae0f-f5c5297a94fb)

https://github.com/user-attachments/assets/31a02979-8f12-4453-9557-6ec955f88c2e

ser-attachments/assets/b7cee65c-4268-4e38-8280-2cf6532c8d3f)







## Features
- User Authentication: Users can sign up, log in, and log out.
- Profile Management: Users can update and save their profile information (personal details and shipping details).
- Product Browsing: Users can view and search for products.
- Order Placement: Users must sign in to place an order.
- Responsive Design: The application is fully responsive and works on all devices.

  ## Project Structure
  ```
  root
  │
  ├── client               # Frontend (React.js)
  │   ├── public           # Public assets
  │   └── src              # React.js source code
  │       ├── components   # Reusable components (e.g., Navbar, ProductList, ProfileForm)
  │       ├── pages        # Pages (e.g., Login, Register, ProductPage, ProfilePage)
  │       ├── context      # Context API for state management
  │       ├── App.js       # Main React component
  │       ├── index.js     # Entry point for React
  │       └── ...
  │
  |            # Backend (Node.js, Express.js)
  ├── config           # Configuration files (e.g., database connection)
  ├── controllers      # Route controllers (e.g., auth, product, order)
  ├── models           # Mongoose models (User, Product, Order)
  ├── routes           # API routes (e.g., auth, products, orders)
  ├── middleware       # Custom middleware (e.g., authMiddleware)
  ├── server.js        # Entry point for Node.js server
  └── ...
  │
  ├── .env                 # Environment variables
  ├── .gitignore           # Files and directories to ignore in Git
  ├── package.json         # NPM dependencies and scripts
  └── README.md            # Project documentation
  ```
# Installation
## Prerequisites
- Node.js (v14 or later)
- MongoDB (local or cloud-based)
## Steps
- Clone the repository:
  ```
  git clone https://github.com/yourusername/mern-ecommerce.git
   cd mern-ecommerce
  ```
- Install server dependencies:
```
cd server
npm install
```
- Install client dependencies:
  ```
  cd ../client
  npm install
  ```
  - Set up environment variables:
 Create a .env file in the server directory and add the following:
```
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
PORT=5000
```
- Run the application:
  -- Backend (Express.js):
  ```
  cd server
  npm run dev
  ```
- Frontend (Vite+React.js):
  ```
  cd ../client
  npm run dev
  ```
  - Open your browser:
   - Visit http://localhost:5173 to view the application.
# Usage
## Authentication
- Sign up: Create a new account.
- Login: Log in to access restricted features.
- Logout: Log out of the application.
- Profile Management
- Save Profile: Users can update and save their profile information.
- View Profile: View saved profile information.
## Product Browsing
- View Products: Browse the list of available products.
- Search Products: Search for specific products using keywords.
- Order Placement
-Place an Order: Users must sign in before they can place an order. Clicking "Order Now" will prompt users to log in if they aren't already authenticated.
# Deployment
## Deploying to Vercel (Backend)
- upload code to vercel
## Deploying to Netlify (Frontend)
- Build the Vite+React app:
 ```
cd client
npm run build
```
- Deploy to Netlify:
Drag and drop the build folder to the Netlify dashboard.

# Contributing
- Fork the repository.
- Create a new branch (git checkout -b feature/your-feature-name).
- Commit your changes (git commit -m 'Add some feature').
- Push to the branch (git push origin feature/your-feature-name).
- Open a pull request.

# License
This project is licensed under the MIT License. See the LICENSE file for details.

#Acknowledgements
- MongoDB
- Express.js
- Vite+React.js
- Node.js
- Zusstand
