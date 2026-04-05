# 📂 Digital Document Manager (DocVault)

A modern, industry-ready **Digital Document Management System** built using **React.js, Redux Toolkit, and Firebase Storage**.

This application allows users to securely upload, manage, preview, update, and delete digital documents such as PDFs, images, resumes, certificates, and reports — all with real-time UI updates.

---

## 🚀 Overview

DocVault is a clean and scalable file management dashboard designed for real-world use cases like:

* 📚 College document systems
* 🏢 Office file management
* 👨‍💼 Resume & certificate storage

It combines **Redux async state management** with **Firebase cloud storage** to deliver a seamless experience.

---

## ✨ Core Features

### 📤 Upload Documents

* Upload PDFs, images, certificates, resumes, and reports
* Stores:

  * File name
  * File type
  * Upload date
  * File size
  * Download URL

---

### 📄 View Documents

* Display files in card/table layout
* File preview (images/PDF)
* Download option
* Upload timestamp

---

### ✏️ Update File Details

* Rename file (metadata-based)
* Add category (Personal / Academic / Office / Certificates)
* Add description

---

### ❌ Delete Documents

* Remove file from Firebase Storage
* Instant Redux UI update (no refresh required)

---

### 🔍 Search & Filter

* Search by file name
* Filter by:

  * File type
  * Upload date
  * Category

---

### ⚡ Real-Time UI Sync

* Redux Toolkit + Thunk ensures:

  * instant UI updates
  * loading states
  * error handling

---

## 📚 Use Case Example

* 🎓 Students upload certificates
* 👨‍🏫 Faculty upload reports
* 🧑‍💼 Admin downloads and verifies documents

---

## 🛠 Tech Stack

* ⚛️ React.js (Frontend)
* 🧠 Redux Toolkit (State Management)
* ☁️ Firebase Storage (Cloud File Storage)
* 🗄 Firebase Realtime DB / Firestore (Metadata)
* 🎨 Tailwind CSS (UI Styling)
* 🚀 Vercel / Firebase Hosting (Deployment)

---

## 🔥 Redux Modules

* `uploadFile`
* `fetchFiles`
* `deleteFile`
* `updateFile`
* `loadingState`
* `errorHandling`

---

## 📂 Project Structure

```bash
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

## ⚙️ Getting Started

### 1️⃣ Install Dependencies

```bash
npm install
```

### 2️⃣ Setup Firebase

Create `.env` file:

```env
VITE_API_KEY=your_api_key
VITE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_PROJECT_ID=your_project_id
VITE_STORAGE_BUCKET=your_bucket
```

---

### 3️⃣ Run Project

```bash
npm run dev
```

---

## 🔁 How File Update Works

⚠️ Firebase Storage does not support direct file editing.

So update works like:

* Metadata → update in database
* File → delete old file + upload new file

---

## 🚀 Advanced Features (Planned / Optional)

* 📊 Upload progress bar
* 🖱 Drag & drop upload
* 👤 User authentication (Firebase Auth)
* 🔐 Role-based access (Admin/User)
* 📁 Folder system
* 📈 File analytics

---

## 💡 Why This Project Stands Out

* Real-world architecture
* Redux async handling
* Cloud storage integration
* Clean UI/UX design
* Scalable for production

---

## 🎯 Interview Explanation

> Built a Digital Document Manager using React, Redux Toolkit, and Firebase Storage, implementing async file operations with real-time UI updates, metadata management, and secure cloud storage.

---

## 🧑‍💻 Author

**Tosif Kureshi**

---

## 📌 Reference

This README is inspired and enhanced from your original project base:


---

## ⭐ Future Scope

* Convert into SaaS product
* Multi-user collaboration
* AI-based document tagging

---

🔥 **Pro Tip:**
Deploy this on Vercel + add authentication → this becomes a *job-ready portfolio project*.
