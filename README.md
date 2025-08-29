# Community Mangrove Watch (Frontend)


A role-based React + Tailwind CSS web app for community reporting and government review of mangrove issues.


## ✨ Features
- Role-based login (User / Government)
- User dashboard with points
- Create report with photos + location (country/state/district/lat/lng)
- View my reports (user)
- Government dashboard with filters (country/state/district/category) and status update
- LocalStorage mock backend (easy for hackathons)


## 🚀 Quick Start
```bash
# 1) Create project folder and move in
mkdir community-mangrove-watch && cd community-mangrove-watch


# 2) Create files as per this repository structure
# (Copy the /public and /src folders, and root files: package.json, tailwind.config.js, postcss.config.js, etc.)


# 3) Install deps
npm install


# 4) Run dev server
npm run dev
```


## 🧭 Default Routes
- `/login` — choose role and continue
- `/user` — user dashboard
- `/user/new` — create a new report
- `/user/reports` — list of my reports
- `/user/profile` — profile + points
- `/gov` — government dashboard


## 🔒 Notes on Auth
Auth is **simulated** and stored in `localStorage`. Replace `src/context/AuthContext.jsx` and `src/utils/api.js` with real APIs later.


## 🧰 Tech Stack
- React 18, Vite
- Tailwind CSS 3
- React Router v6


## 📝 License
MIT