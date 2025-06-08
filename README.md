---

# 📄 Resume Builder

Live Demo: [resume-builder-red-ten.vercel.app](https://resume-builder-red-ten.vercel.app/)

A dynamic, single-page React application that allows users to build and download a professional résumé.

![Resume Builder Screenshot](https://github.com/Soham-Powar/Resume-builder/blob/main/src/assets/projectScreenshot.png)

---

## ✨ Features

* 🧑 Add personal details (name, email, address, and bio)
* 💼 Add, edit, and delete experiences
* 🎓 Add, edit, and delete educational background
* 📝 Live preview of the resume
* 📥 Download as a well-formatted PDF

---

## 🔧 Tech Stack

* ⚛️ React (Functional Components + Hooks)
* 💨 Tailwind CSS
* 🖼️ html2pdf.js for PDF generation
* ⚙️ Vite (for fast development build)

---

## 📁 Project Structure

```
src/
├── components/
│   ├── PersonalInfoForm.jsx
│   ├── ExperienceForm.jsx
│   ├── EducationForm.jsx
│   ├── ResumePreview.jsx
│   └── ...
├── App.jsx
└── main.jsx
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/resume-builder.git
cd resume-builder
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the app locally

```bash
npm run dev
```

---

## 📦 Build for production

```bash
npm run build
```

Then deploy the `dist/` folder using Vercel, Netlify, or your preferred platform.

---