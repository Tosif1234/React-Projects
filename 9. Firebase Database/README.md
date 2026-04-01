# 🚀 Inventory Dashboard

A modern and responsive **Inventory Management Dashboard** built using React, Redux Toolkit, Tailwind CSS, and Firebase Realtime Database.

This application allows you to **manage products in real-time**, track inventory, monitor stock levels, and visualize key insights with a clean UI.

---

## ✨ Features

* 🔄 Real-time data sync using Firebase Realtime Database
* ➕ Add, ✏️ Edit, ❌ Delete products
* 📊 Dashboard stats (Total Products, Inventory Value, Low Stock Alerts)
* ⚠️ Automatic low-stock detection (`<= 10 quantity`)
* ⚡ Fast state management with Redux Toolkit (Async Thunks)
* 📱 Fully responsive UI with Tailwind CSS
* 🎯 Clean and user-friendly interface

---

## 🛠️ Tech Stack

* ⚛️ React 19
* ⚡ Vite 7
* 🧠 Redux Toolkit
* 🔗 React Redux
* 🔥 Firebase Realtime Database
* 🎨 Tailwind CSS 4
* 🧩 Lucide React Icons

---

## 📂 Project Structure

```
src/
├── App.jsx
├── main.jsx
├── component/
│   ├── ProductForm.jsx
│   └── ProductTable.jsx
├── db/
│   └── Firebase.jsx
├── store/
│   ├── inventorySlice.js
│   └── store.js
```

---

## ⚙️ How It Works

* **ProductForm.jsx** → Handles product creation & updates
* **ProductTable.jsx** → Displays products & manages actions
* **inventorySlice.js** → Redux logic + Firebase async calls
* **Firebase.jsx** → Firebase setup & database connection
* **App.jsx** → Dashboard UI + stats overview

---

## 🚀 Getting Started

### 📌 Prerequisites

* Node.js (18+ recommended)
* npm
* Firebase account

---

### 📦 1. Install Dependencies

```
npm install
```

---

### 🔐 2. Setup Environment Variables

Create a `.env` file in root:

```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_DATABASE_URL=https://your-project-default-rtdb.firebaseio.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

---

### 🔥 3. Firebase Setup

1. Create project in Firebase Console
2. Add Web App
3. Enable **Realtime Database**
4. Paste config into `.env`

#### ⚠️ Development Rules (Only for testing)

```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

---

### ▶️ 4. Run Project

```
npm run dev
```

Open in browser:

```
http://localhost:5173
```

---

## 📊 Data Model

Each product is stored like this:

```json
{
  "name": "Wireless Mouse",
  "category": "Electronics",
  "quantity": 25,
  "price": 799
}
```

---

## 📈 Key Logic

* 💰 Inventory Value = `price × quantity`
* ⚠️ Low Stock = `quantity <= 10`
* 🔄 Real-time updates using `onValue()`

---

## 🧠 Future Improvements

* 🔐 Firebase Authentication
* 🛡️ Secure database rules
* 🔍 Search & filters
* 📊 Category analytics
* 📤 Export data (CSV / Excel)

---

## 💡 Learning Highlights

This project demonstrates:

* Real-time database integration
* Scalable state management with Redux Toolkit
* Clean component architecture
* Environment-based configuration (.env)
* Production-ready frontend practices

---

## 📄 License

This project is for **learning and personal use**.
Feel free to modify and improve 🚀

---

## 🙌 Author

Made with ❤️ by **Tosif**

---
