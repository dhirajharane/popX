
# 🚀 **PopX**

Welcome to **PopX** — a **mobile-first React application** designed for seamless user onboarding and profile management. Built with **React**, **Vite**, and **Tailwind CSS**, PopX showcases clean UI/UX, protected routes, persistent authentication, and smooth transitions — all inside a mobile frame for a realistic device experience.

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4-blue?logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-ultra--fast-yellow?logo=vite)
![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)

---

## ✨ **Key Features**

- 🌟 **Landing Page:** Welcoming screen with options to create an account or log in.
- 🔒 **Protected Routes:** Only authenticated users can access the profile page.
- 📝 **Signup & Login:** Forms with smooth transitions, animations, and validation.
- 📱 **Mobile Frame:** All screens are wrapped in a mobile device frame for a realistic app preview.
- 🔑 **Persistent Auth:** Auth state stored in `localStorage` for session persistence.
- ⚡ **Ultra-fast Build:** Powered by Vite for lightning-fast development.
- 💻 **Responsive Design:** Pixel-perfect, mobile-first UI crafted with Tailwind CSS.

---

## 📂 **Project Structure**

```
src/
├── App.jsx                # App with routing setup
├── main.jsx               # Vite entry point
├── index.css              # Tailwind + global styles

├── Components/
│   ├── LandingScreen.jsx   # Welcome screen
│   ├── LoginScreen.jsx     # Login form
│   ├── SignupScreen.jsx    # Signup form
│   ├── Profile.jsx         # User profile
│   ├── ProtectedRoute.jsx  # Route guard
│   └── MobileFrame.jsx     # Mobile frame wrapper

└── utils/
    └── auth.js            # Auth helpers (login, logout, check)
```

---

## 🚀 **Getting Started**

### ⚙️ Prerequisites
- **Node.js** v18+
- **npm** or **yarn**

### 📦 Installation

```bash
git clone https://github.com/your-username/popx.git
cd popx
npm install
```

### ▶️ Running Locally

```bash
npm run dev
```

Visit: [http://localhost:5173](http://localhost:5173)

### 📦 Production Build

```bash
npm run build
npm run preview
```

---

## 🔐 **Authentication Flow**

1️⃣ **Signup/Login:** Auth state is saved in `localStorage` after form submission.  
2️⃣ **ProtectedRoute:** Checks auth status before rendering the profile page. Redirects to `/login` if not authenticated.  
3️⃣ **Logout:** (Extendable) Use `logoutUser()` in `utils/auth.js` to clear auth state.

---

## 🛠 **Tech Stack**

- React 19
- React Router DOM 7
- Tailwind CSS 4
- Vite
- ESLint (React Hooks + Refresh plugins)

---

## 📜 **NPM Scripts**

| Command | Description |
|----------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Lint the codebase |

---

## 🤝 **Contributing**

💡 **How to contribute:**  
- Fork the repository  
- Create a feature branch (`git checkout -b feature-name`)  
- Commit your changes (`git commit -m 'Add new feature'`)  
- Push to the branch (`git push origin feature-name`)  
- Open a Pull Request  

For major changes, please open an issue first to discuss what you'd like to change.

---

## 📄 **License**

This project is licensed under the MIT License.

---

## 🙏 **Acknowledgements**

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- Made with ❤️ for **Educase India**
