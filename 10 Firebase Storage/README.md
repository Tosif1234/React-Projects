# 📂 Digital Document Manager (DocVault)

A modern and fully functional **Document Management System** built using React, Redux Toolkit, Tailwind CSS, and Firebase Storage.

This project demonstrates a complete file management workflow including **upload, preview, update, delete, search, and filtering**, all wrapped in a clean and responsive dashboard UI.

---

## ✨ Features

* 📤 Upload documents (PDF, images, resumes, certificates)
* 📄 View files in dashboard layout
* 👀 File preview (images & PDFs)
* 🔗 Download files instantly
* ✏️ Update file metadata (name, category, description)
* ❌ Delete files with real-time UI update
* 🔍 Search files by name
* 🎯 Filter by file type & category
* ⚡ Real-time UI sync using Redux Toolkit
* 📱 Fully responsive UI (Tailwind CSS)

---

## 🛠️ Tech Stack

* ⚛️ React 19
* ⚡ Vite 7
* 🧠 Redux Toolkit (Thunk Middleware)
* ☁️ Firebase Storage
* 🗄 Firebase Realtime DB / Firestore (for metadata)
* 🎨 Tailwind CSS 4

---

## 📂 Project Structure

```bash id="d7a2kf"
src/
├── app/
│   └── store.js
├── features/
│   └── fileSlice.js
├── components/
│   ├── UploadFile.jsx
│   ├── FileList.jsx
│   ├── FileCard.jsx
│   └── SearchFilter.jsx
├── firebase/
│   └── firebaseConfig.js
└── pages/
    └── Dashboard.jsx
```

---

## 📸 Screenshots

### 📤 Upload & Dashboard

![Dashboard](./src/assets/Dashboard.png)

---


## 🚀 Getting Started

### 📌 Prerequisites

* Node.js (v18+ recommended)
* npm
* Firebase account

---

### 📦 1. Install Dependencies

```bash id="r2m9df"
npm install
```

---

### 🔥 2. Firebase Setup

1. Go to Firebase Console
2. Create a new project
3. Enable **Storage**
4. (Optional) Enable Realtime Database / Firestore

---

### 🔐 3. Environment Variables

Create `.env` file:

```env id="k92fla"
VITE_API_KEY=your_api_key
VITE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_PROJECT_ID=your_project_id
VITE_STORAGE_BUCKET=your_bucket
```

---

### ▶️ 4. Run the App

```bash id="h3k9ds"
npm run dev
```

Open in browser:

```bash id="x7s9ka"
http://localhost:5173
```

---

## 🔄 File Management Flow

1. User uploads a file 📤
2. File stored in Firebase Storage ☁️
3. Metadata saved in database 🗄
4. Redux updates UI instantly ⚡
5. User can preview, download, update or delete

---

## 🔁 File Update Logic

⚠️ Firebase limitation:

❌ Direct file editing not possible

✅ Solution used:

* Metadata → updated in database
* File → delete old + upload new

---

## 📦 Available Scripts

```bash id="n4l9dp"
npm run dev      # Start development server
npm run build    # Production build
npm run preview  # Preview build
npm run lint     # Run ESLint
```

---

## 🧠 Learning Highlights

This project showcases:

* Redux Toolkit async operations
* Firebase Storage integration
* Real-time UI updates
* File handling in React
* Scalable project architecture
* Clean dashboard UI design

---

## ⚠️ Notes

* Firebase Storage must be enabled
* Metadata storage required for advanced features
* File update requires re-upload (Firebase limitation)

---

## 🙌 Author

Made with ❤️ by **Tosif**

---

