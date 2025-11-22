---

# 📌 Student Management API

A simple Node.js + Express + MongoDB REST API with JWT authentication.
This project includes:

* User registration & login
* Password hashing (bcrypt)
* JWT token authentication
* Protected routes
* CRUD operations for Student model
* MongoDB connection using Mongoose

---

## 🚀 Features

### 🔐 Authentication

* Register new user
* Login user
* Generates JWT token
* Protects routes using `authMiddleware`

### 🎓 Student Module

* Create student
* Get all students
* Get student by ID
* Update student
* Delete student

---

## 📁 Project Structure

```
.
├── controllers
│   ├── student.controller.js
│   └── users.controller.js
├── middleware
│   └── auth.js
├── models
│   ├── student.model.js
│   └── users.model.js
├── routes
│   ├── student.route.js
│   └── user.route.js
├── server.js
└── package.json
```

---

## 🛠️ Installation & Setup

### 1️⃣ Clone the repo

```sh
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
```

### 2️⃣ Install dependencies

```sh
npm install
```

### 3️⃣ Create `.env` file

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

### 4️⃣ Start the server

```sh
npm start
```

Server will run at:
👉 [http://localhost:5000](http://localhost:5000)

---

## 🔐 Authentication Endpoints

### **Register**

```
POST /api/users/register
```

Body:

```json
{
  "name": "John",
  "email": "john@example.com",
  "password": "123456"
}
```

### **Login**

```
POST /api/users/login
```

Response:

```json
{
  "message": "Login successful",
  "token": "your-jwt-token"
}
```

---

## 🎓 Student API (Protected)

🔒 Requires JWT token in headers:

```
Authorization: Bearer <your-token>
```

### **Create Student**

```
POST /api/students/
```

### **Get All Students**

```
GET /api/students/
```

### **Get Student by ID**

```
GET /api/students/:id
```

### **Update Student**

```
PUT /api/students/:id
```

### **Delete Student**

```
DELETE /api/students/:id
```

---

## 🧪 Test API Using Postman

Import the endpoints and add JWT token in Authorization header.

---

## 📜 License

This project is open-source and free to use.

---
