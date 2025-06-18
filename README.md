PopX
Welcome to PopX – a modern, mobile-first React application for user onboarding and profile management. This project demonstrates clean UI/UX, smooth transitions, and protected routing, all styled with Tailwind CSS and built using Vite for an ultra-fast development experience.

✨ Features
Landing Page: Welcoming screen with options to create an account or log in.
Signup & Login: Animated forms with validation and smooth transitions.
Profile Page: Displays user profile with a modern card layout.
Protected Routes: Only authenticated users can access the profile page.
Mobile Frame: All screens are wrapped in a mobile device frame for a realistic preview.
Persistent Auth: Authentication state is stored in localStorage.
Responsive Design: Built with Tailwind CSS for pixel-perfect mobile responsiveness.

project structure:
src/
│
├── App.jsx                # Main app with routing
├── main.jsx               # Entry point
├── index.css              # Tailwind and global styles
│
├── Components/
│   ├── LandingScreen.jsx      # Welcome screen
│   ├── LoginScreen.jsx        # Login form
│   ├── SignupScreen.jsx       # Signup form
│   ├── Profile.jsx            # User profile page
│   ├── ProtectedRoute.jsx     # Route guard for auth
│   └── MobileFrame.jsx        # Mobile device frame wrapper
│
└── utils/
    └── auth.js            # Auth helpers (login, logout, check)


 Getting Started
Prerequisites
Node.js (v18+ recommended)
npm or yarn
Installation
git clone https://github.com/your-username/popx.git
cd popx
npm install

Running the App
npm run dev

Open http://localhost:5173 in your browser.

🛠️ Tech Stack
React 19
React Router DOM 7
Tailwind CSS 4
Vite
ESLint (with React Hooks and Refresh plugins)

 Authentication Flow
Signup/Login: On successful form submission, the user is marked as authenticated in localStorage.
ProtectedRoute: Checks authentication before rendering the profile page. If not authenticated, redirects to /login.
Logout: (Extendable) Use the logoutUser function in utils/auth.js to clear authentication.

📦 Scripts
npm run dev – Start development server
npm run build – Build for production
npm run preview – Preview production build
npm run lint – Lint code with ESLint

🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

📄 License
MIT

🙏 Acknowledgements
React
Vite
Tailwind CSS
React Router
Made with ❤️ for Educase India
