# 🏠 Smart Home Landing Page (Tailwind CSS)

A modern and responsive **Smart Home Landing Page** built using **HTML, Tailwind CSS, and JavaScript**.
This project demonstrates a clean UI layout with a responsive navigation bar, animated mobile menu, blur effects, and multiple landing sections.

The page is designed to showcase a smart home product with sections for features, partners, contact form, and social media links.

---

## 🚀 Features

* 📱 Fully responsive design
* 🍔 Mobile hamburger navigation menu
* ✨ Smooth sliding mobile sidebar
* 🌫️ Background blur effect when menu opens
* 🎨 Modern UI using Tailwind CSS
* 🧭 Multiple sections (Hero, Partners, Connect, Footer)
* 🔗 Social media icons integration
* ⚡ Lightweight JavaScript interaction

---

## 🛠️ Technologies Used

* HTML5
* Tailwind CSS
* JavaScript (Vanilla JS)
* Font Awesome Icons
* Normalize.css

---

## 📂 Project Structure

```
Smart-Home-Landing/
│
├── src/
│   ├── index.html
│   ├── input.css
│   └── script.js
│
├── assets/
│   ├── logo.svg
│   ├── couch.png
│   ├── table.png
│   ├── lamp.png
│   ├── partner1.svg
│   └── ...
│
├── tailwind.config.js
├── output.css
└── README.md
```

---

## ⚙️ How It Works

### 1️⃣ Responsive Navigation

The navigation bar contains:

* Home
* Contact
* Login
* Sign Up

On smaller screens, the navigation switches to a **hamburger menu**.

JavaScript toggles the mobile menu using:

```
menu.classList.add("open");
```

---

### 2️⃣ Mobile Menu Animation

CSS transitions create a **slide-in menu effect**.

```
.menu-slide {
    transform: translateX(100%);
}

.menu-slide.open {
    transform: translateX(0);
}
```

This makes the mobile menu smoothly slide from the right side.

---

### 3️⃣ Background Blur Effect

When the menu opens, the main page content becomes blurred.

```
.blur-active {
    filter: blur(4px);
}
```

This improves focus on the mobile menu.

---

### 4️⃣ Page Sections

The landing page contains multiple sections:

**Home Section**

* Hero image and smart home app illustration

**Features Section**

* Highlights product efficiency and benefits

**Partners Section**

* Displays companies partnered with the product

**Connect Section**

* Contact form for user interaction

**Footer**

* Social media links and copyright

---

## ▶️ How to Run the Project

1. Clone or download the repository

```
git clone https://github.com/your-username/smart-home-landing-page.git
```

2. Navigate to the project folder.

3. Open `index.html` in your browser.

---

## 🖼️ Screenshot

Add a screenshot of your landing page here.

```
screenshot.png
```

Example:

![Smart Home Landing Page](screenshot.png)

---

## 🎯 What I Learned

* Building responsive layouts with Tailwind CSS
* Creating mobile navigation menus
* Adding UI animations with CSS transitions
* Manipulating DOM with JavaScript
* Structuring landing pages for products
* Working with icons and UI components

---

## 📌 Future Improvements

* Add dark mode
* Improve mobile animations
* Add form validation
* Deploy on GitHub Pages
* Add interactive product demos
* Improve accessibility

---

## 👨‍💻 Author

Takunda Gorogodo

Frontend Developer | Web Design Enthusiast

---
⭐ If you find this project helpful, please consider giving it a star!
---

## 📄 License

This project is open-source and created for learning and educational purposes.
---
