Here is your **complete README.md** in one place.
You can copy-paste this directly into your GitHub repo.

---

# 🎟️ Online Event Booking Management System (MERN Stack)

A full-stack **Online Event Booking Management System** built using the **MERN stack (MongoDB, Express.js, React.js, Node.js)**.
This web application allows users to browse events and book tickets, organizers to manage their events, and admins to control the entire platform.

The system supports **three roles**:

* 👤 User
* 🧑‍💼 Organizer
* 🛠️ Admin

---

## 🚀 Project Overview

This platform is designed to simplify event ticket booking and event management.
Users can explore events and reserve tickets, organizers can create and manage events, and admins can monitor and manage the entire system.

---

## ✨ Features

### 👤 User

* Register & login
* Browse all events
* View event details
* Book event tickets
* View booking history
* Cancel bookings
* Responsive UI

### 🧑‍💼 Organizer

* Organizer login/signup
* Create events
* Update event details
* Delete events
* View bookings for their events
* Manage ticket availability

### 🛠️ Admin

* Admin dashboard
* Manage all users
* Manage organizers
* Approve/reject events
* View all bookings
* Delete inappropriate events
* Full system control

---

## 🧱 Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* CSS / Bootstrap / Tailwind

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcrypt.js

### Tools & Platforms

* Git & GitHub
* Postman
* VS Code

---

## 📁 Project Structure

```
online-booking-management-system
│
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   └── App.js
│
├── server/                 # Node/Express backend
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   ├── config/
│   └── server.js
│
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/Rajesh-nakka/online-booking-management-system.git
cd online-booking-management-system
```

---

### 2️⃣ Backend Setup

```bash
cd server
npm install
```

Create `.env` file in **server** folder:

```
PORT=5000
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret_key
```

Run backend:

```bash
npm run dev
```

or

```bash
npm start
```

---

### 3️⃣ Frontend Setup

```bash
cd client
npm install
npm start
```

Frontend runs on:

```
http://localhost:3000
```

Backend runs on:

```
http://localhost:5000
```

---

## 🔐 Authentication & Roles

* JWT based login system
* Role-based access control
* Protected routes
* Password hashing using bcrypt

Roles:

* User
* Organizer
* Admin

---

## 🌐 API Endpoints

### Auth

```
POST   /api/auth/register
POST   /api/auth/login
GET    /api/auth/profile
```

### Events

```
GET    /api/events
GET    /api/events/:id
POST   /api/events          (organizer/admin)
PUT    /api/events/:id      (organizer/admin)
DELETE /api/events/:id      (admin)
```

### Bookings

```
POST   /api/bookings
GET    /api/bookings/user
GET    /api/bookings/event/:id
DELETE /api/bookings/:id
```

### Admin

```
GET    /api/admin/users
GET    /api/admin/events
GET    /api/admin/bookings
DELETE /api/admin/user/:id
```

---

## 💻 Screenshots

Add screenshots here after uploading images to repo.

```
/screenshots/home.png
/screenshots/events.png
/screenshots/dashboard.png
/screenshots/booking.png
```

---

## 🚀 Future Enhancements

* Online payment integration (Razorpay/Stripe)
* Email notifications
* QR code ticket system
* Event search & filters
* Seat selection
* Analytics dashboard
* Deployment on cloud

---

## 🌍 Deployment

### Frontend

* Vercel
* Netlify

### Backend

* Render
* Railway
* AWS

Build frontend:

```bash
npm run build
```

---

## 🤝 Contributing

Contributions are welcome.
Fork the repo and submit a pull request.

---

## 👨‍💻 Author

**Rajesh Nakka**
GitHub: [https://github.com/Rajesh-nakka](https://github.com/Rajesh-nakka)
---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub
