
---

# 🎬 Netflix Clone – Movie Streaming UI with TMDB API

A sleek and responsive **Netflix-style movie browsing interface** built using **React** and integrated with the **TMDB (The Movie Database) API**. Browse movies by genre, view posters, and **watch trailers directly in a popup modal** — all in one beautiful frontend experience.

---

## 📌 Overview

This project simulates a simplified version of Netflix’s frontend UI:

* Fetches and displays movies by genre from **TMDB API**
* Allows users to browse via visually rich movie posters
* Clicking a poster opens a **modal popup with the movie trailer**
* Fully responsive layout for desktop, tablet, and mobile

---

## ✨ Features

* 🎞️ **Posters fetched live** from TMDB’s database
* 🗂 **Grouped by Genre** (e.g., Action, Comedy, Horror)
* ▶️ **Click-to-play trailer** inside a modal popup
* 📱 Fully responsive and smooth UI
* 🌐 Uses `axios` for API calls and `react-youtube` for video embedding

---

## 🔧 Tech Stack

* **Frontend**: React, CSS Modules or Tailwind
* **API**: TMDB ([https://www.themoviedb.org/](https://www.themoviedb.org/))
* **Libraries**:

  * `axios` – for data fetching
  * `react-youtube` – for embedding YouTube trailers
  * `react-modal` or custom modal – for trailer popup

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/SuryaNarayananDev/Netflix-Clone-With-TMDB-API.git
cd Netflix-Clone-With-TMDB-API
```

### 2. Install Dependencies

```bash
npm install
```

### 3. TMDB API Key Setup

src/components/constants/constant.js

```
export const API_Key = your_key;
export const Base_Url= your_url;
export const imageurl= your_url;

```

Get your TMDB key from: [https://www.themoviedb.org/settings/api](https://www.themoviedb.org/settings/api)

### 4. Start the Development Server

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---
---

## 🎯 Future Enhancements

* 🔐 Add user login and profiles
* 💾 Save favorite movies to localStorage or DB
* 📺 Play full-length videos from another source
* 🌙 Add dark/light theme toggle
* 🤖 Add ChatGPT for movie suggestions

---

## 🤝 Contributions

Want to improve the app, add genres, or enhance UI? Contributions are welcome!

1. Fork the repo
2. Create your feature branch
3. Submit a pull request 🚀

---

## 📄 License

This project is licensed under the **MIT License**.
Free to use and modify for personal or educational projects.

---

Let me know if you want to include images or deploy this on Vercel/Netlify with routing!
