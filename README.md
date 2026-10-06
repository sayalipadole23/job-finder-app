# JobFinder - Modern Job Portal Web Application

JobFinder is a lightweight, responsive React web application designed for browsing, searching, and applying for job openings. Built with modern React 18 and Vite for high performance and smooth developer experience.

---

## 🚀 Features

- **Job Listing & Cards**: Display available positions with key details (Company, Salary, Experience, Location, Skills).
- **Instant Search & Filtering**: Real-time filtering by keyword (company, job title, skills) and location.
- **Detailed Job View**: Deep dive into job descriptions, requirements, and responsibilities.
- **Application Form**: Interactive modal/form allowing users to apply for positions with validation and submission feedback.
- **Responsive UI**: Styled with clean custom CSS, optimized for mobile and desktop screens.

---

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite 5
- **Styling**: Modern CSS3
- **Language**: JavaScript (ES6+ / JSX)

---

## 📂 Project Structure

```
Job Portal Task/ (or root project directory)
├── src/
│   ├── components/
│   │   ├── JobCard.jsx       # Individual job posting card
│   │   ├── JobDetails.jsx    # Full job details & application form
│   │   ├── JobList.jsx       # Grid list of active job cards
│   │   ├── Navbar.jsx        # Top header navigation
│   │   └── SearchBar.jsx     # Search & filter input bar
│   ├── App.jsx               # Main application component & state
│   ├── App.css               # Main application styles
│   └── main.jsx              # Application entry point
├── index.html                # HTML entry template
├── package.json              # Project dependencies & scripts
├── package-lock.json         # Dependency lockfile
├── vite.config.js            # Vite configuration
├── .env.example              # Environment variables template
└── .gitignore                # Git ignore configuration
```

---

## 💻 Prerequisites

- **Node.js**: v16.x or higher
- **npm**: v8.x or higher (comes with Node.js)

---

## 🔧 Environment Variables

Optional environment configuration template is provided in `.env.example`.

To use custom environment variables:
1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
2. Edit `.env` as required for your environment.

---

## 🏃 Getting Started (Local Setup)

### 1. Install Dependencies
Open a terminal in the project directory and run:
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
The application will launch locally at:
👉 `http://localhost:5173`

### 3. Build for Production
To test or build the production distribution:
```bash
npm run build
```
The production bundle will be generated inside the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📦 Setting Up Git & Deployment (For your own repository)

This codebase has been cleaned of previous Git repository history and platform-specific configs.

When you are ready to publish to GitHub and deploy:

1. **Initialize Git repository**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Connect to your GitHub Repository**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

3. **Deployment**:
   - You can deploy the static output (`dist/`) directly to Vercel, Netlify, Render, or GitHub Pages.
