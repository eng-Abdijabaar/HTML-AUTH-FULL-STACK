# 🔐 HTML Auth - Authentication System

A full-stack authentication system built with **HTML, CSS, JavaScript (vanilla)** on the frontend and **Node.js + Express** on the backend.  
It includes **registration**, **login**, **JWT authentication**, **profile management**, and **image uploads**.

---

## 🛠️ Tools & Technologies

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
![bcrypt](https://img.shields.io/badge/bcrypt-004880?style=for-the-badge&logo=security&logoColor=white)
![Multer](https://img.shields.io/badge/Multer-1E90FF?style=for-the-badge&logo=upload&logoColor=white)
![dotenv](https://img.shields.io/badge/Dotenv-ECD53F?style=for-the-badge&logo=envato&logoColor=black)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)

---

## 📁 Folder Structure

```
html Auth/
│
├── backend/
│   ├── config/
│   │   └── dbConection.js
│   ├── controllers/
│   │   └── usreController.js
│   ├── middlewares/
│   │   ├── authmiddleware.js
│   │   └── uploadsMiddleware.js
│   ├── models/
│   │   └── User.js
│   ├── routers/
│   │   ├── authRoutes.js
│   │   └── profile.js
│   ├── uploads/
│   │   └── 1753024871284.png
│   ├── utils/
│   │   └── fileHandler.js
│   ├── .env
│   ├── package-lock.json
│   ├── package.json
│   └── server.js
│
└── frontend/
    ├── index.html
    ├── registration.html
    ├── profile.html
    ├── script.js
    └── styles.css
```

---

## 🚀 Features

- ✅ User registration & login
- 🔐 JWT-based authentication
- 👤 Profile page with auth middleware
- 🖼️ Profile image upload with Multer
- 🔒 Password hashing using bcrypt
- 📂 Clean and modular folder structure

---

## ⚙️ Setup Instructions

### 1. Clone the project
```bash
git clone https://github.com/yourusername/html-auth.git
cd html-auth/backend
```

### 2. Install backend dependencies
```bash
npm install
```

### 3. Create `.env` file
```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/authdb
JWT_SECRET=your_jwt_secret
```

### 4. Start the server
```bash
node server.js
```
Or with node --watch server:


### 5. Open the frontend
Open any of these HTML files directly in a browser:
- `index.html` – login
- `registration.html` – registration
- `profile.html` – user profile (after login)

---

## 🌐 API Routes

| Method | Endpoint        | Description              |
|--------|-----------------|--------------------------|
| POST   | `/register`     | Register a new user      |
| POST   | `/login`        | Login and get JWT token  |
| GET    | `/profile`      | Get authenticated profile|
| POST   | `/upload`       | Upload profile image     |

> 🔐 Protected routes require `Authorization: Bearer <token>`

---

## 🧪 Testing with Postman

**Register:**
```json
POST /api/auth/register
{
  "username": "testuser",
  "email": "test@example.com",
  "password": "123456"
}
```

**Login:**
```json
POST /api/auth/login
{
  "email": "test@example.com",
  "password": "123456"
}
```

**Get Profile (with token):**
```http
GET /api/profile
Authorization: Bearer <your_token>
```

---

## 🧑 Author

**eng Abdijabaar**  
GitHub: [@eng-Abdijabaar](https://github.com/eng-Abdijabaar)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
