# 📝 Task Manager App (React + Redux Toolkit)

A modern and responsive Task Manager application built using **React**, **Redux Toolkit**, and **Tailwind CSS**.  
It allows users to add, toggle, and delete tasks with persistent storage using **LocalStorage**.

---

## 🚀 Features

- ➕ Add new tasks  
- ✅ Mark tasks as completed / uncompleted  
- 🗑 Delete tasks  
- 💾 Persistent storage using LocalStorage  
- 📊 Progress indicator (completed vs total tasks)  
- 🎨 Beautiful UI with Tailwind CSS & Glassmorphism  
- ⚡ Fast performance with Redux Toolkit  

---

## 🛠 Tech Stack

- React JS  
- Redux Toolkit  
- React Redux  
- Tailwind CSS  
- JavaScript (ES6+)  
- LocalStorage API  

---

## 📂 Project Structure

```
src/
│
├── components/
│   └── task/
│       ├── Task.jsx
│       ├── taskSlice.js
│       └── localStorage.js
│
├── app/
│   └── store.js
│
├── index.js
└── App.js
```

---

## ⚙️ Installation & Setup

1. Clone the repository
```
git clone https://github.com/your-username/task-manager.git
```
2. Navigate to project folder  
```
cd task-manager
```
3. Install dependencies
```
npm install
```
4. Start development server
```
npm start
```

---

## 🧠 How It Works

- Redux store manages all tasks  
- `taskSlice` handles:
  - addTask  
  - toggleTask  
  - deleteTask  
- Tasks are saved to LocalStorage whenever state changes  
- On reload, tasks are loaded from LocalStorage  

---

## 📸 Screenshots

### 🏠 Home Page
![Home](./assets/1.png)

### ✅ Task List View
![Tasks](./assets/2.png)

---

## 📈 Future Enhancements

- Edit task feature  
- Due dates & reminders  
- Categories / Labels  
- Dark mode  
- Drag & drop reordering  

---

## 👨‍💻 Author

**Tosif Kureshi**  
Frontend Developer (React JS)

---

## ⭐ If you like this project

Give it a ⭐ on GitHub and share it with others!




