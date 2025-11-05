# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# 🎨 SlotSwapper Frontend

This is the **frontend** of the SlotSwapper application — a smart slot and event management platform.  
It allows users to **sign up, log in, manage events, and swap schedules** seamlessly with others.

---

## ⚡️ Tech Stack

- **React (Vite)** — fast frontend framework  
- **Tailwind CSS** — for modern, responsive UI  
- **React Router** — for navigation between pages  
- **Deployed on Vercel**  

---

## 🧠 Features

✅ User authentication (Signup & Login)  
✅ Event dashboard  
✅ Create, delete, and mark events as “Swappable”  
✅ Send & Accept swap requests  
✅ Protected routes (only logged-in users access dashboard)  
✅ Connected with live backend API  

---

## 🔗 Live Links

🌐 **Frontend (Vercel):** [https://slot-swapper-frontend-xi.vercel.app](https://slot-swapper-frontend-xi.vercel.app/)
⚙️ **Backend (Render):** [https://slotswapper-backend-6214.onrender.com](https://slotswapper-backend-6214.onrender.com)

---

## ⚙️ Setup Instructions (For Local Development)

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/adityakasera123/SlotSwapper-Frontend.git
cd SlotSwapper-Frontend

2️⃣ Install Dependencies
npm install

3️⃣ Create .env file in root directory
VITE_API_URL=https://slotswapper-backend-6214.onrender.com

📁 Folder Structure
src/
 ┣ components/
 ┃ ┣ InputField.jsx
 ┃ ┣ EventCard.jsx
 ┃ ┗ Navbar.jsx
 ┣ pages/
 ┃ ┣ Login.jsx
 ┃ ┣ Signup.jsx
 ┃ ┗ Dashboard.jsx
 ┣ api/
 ┃ ┗ index.js
 ┣ App.jsx
 ┗ main.jsx

💡 Developer Info
👨‍💻 Aditya Kasera
🎓 B.Tech Student | 💻 Full Stack Developer
🌐 Passionate about building modern web solutions
