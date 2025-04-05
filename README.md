<h1 align="center">🛗 Upliftment</h1>

<p align="center">
  <em>A Vibrant Lift Simulation Web App using Flask + JS + Bootstrap</em><br>
  <strong>Because Elevation Should Be Interactive</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Backend-Flask-blue?style=flat-square" />
  <img src="https://img.shields.io/badge/Frontend-Bootstrap-yellow?style=flat-square" />
  <img src="https://img.shields.io/badge/Language-Python-green?style=flat-square" />
  <img src="https://img.shields.io/badge/UI-Dynamic%20&%20Interactive-ff69b4?style=flat-square" />
</p>

<hr/>

<h2>🎯 About The Project</h2>

Upliftment is a lift simulation dashboard that allows users to configure floors (G, P, 1...N, T) and interact with a fully dynamic UI.
Think of it as a playful twist on real-life lift behavior – animated routing, queued floors, feedback on current location, and colorful transitions.

---

<h2>✨ Features</h2>

<ul>
  <li>🔢 Dynamic Floor Configuration (Terrace & Parking included)</li>
  <li>🎛️ Lift Panel with Queue System</li>
  <li>🎨 Animated Transitions Between Floors</li>
  <li>📊 Live Floor Indicator</li>
  <li>🧠 Smart Routing (Skips current floor if already there)</li>
</ul>

---

<h2>📸 Preview</h2>

<p><em>Demo GIF or screenshot placeholder (coming soon)</em></p>

---

<h2>⚙️ Tech Stack</h2>

<table>
  <tr>
    <td><strong>Frontend</strong></td>
    <td>HTML5, CSS3, Bootstrap 5, jQuery, Axios</td>
  </tr>
  <tr>
    <td><strong>Backend</strong></td>
    <td>Python 3, Flask, Jinja2</td>
  </tr>
  <tr>
    <td><strong>Extras</strong></td>
    <td>Custom Animations, Color Themes, Smart DOM Manipulation</td>
  </tr>
</table>

---

<h2>🧪 How to Run Locally</h2>

<ol>
  <li>📥 Clone this repo
    <pre><code>git clone https://github.com/YOUR_USERNAME/upliftment.git</code></pre>
  </li>
  <li>🐍 Create and activate virtual environment
    <pre><code>
cd upliftment
python -m venv env
source env/bin/activate  # Windows: env\Scripts\activate
    </code></pre>
  </li>
  <li>📦 Install dependencies
    <pre><code>pip install -r requirements.txt</code></pre>
  </li>
  <li>🚀 Run the app
    <pre><code>python app.py</code></pre>
    Then open <code>http://127.0.0.1:5000</code> in your browser.
  </li>
</ol>

---

<h2>📁 Project Structure</h2>

<pre>
upliftment/
├── static/
│   ├── css/
│   │   └── dashboard.css
│   ├── js/
│   │   ├── landing.js
│   │   └── dashboard.js
├── templates/
│   ├── index.html
│   └── dashboard.html
├── app.py
├── README.md
└── requirements.txt
</pre>

---

<h2>🧠 Logic Flow</h2>

- Users select desired floors using buttons.
- Floors are queued.
- On pressing <strong>Close Door (>|<)</strong>, the lift starts.
- Floor background changes on each move.
- UI simulates movement and resets on completion.

---

<h2>📜 License</h2>

<p>This project is licensed under the <strong>MIT License</strong>. Free to use, modify, and share.</p>

---

<h2>🤝 Contributing</h2>

<p>Pull requests, issues, and suggestions are welcome! Fork the repo and raise a PR 🛠️</p>

---

<h2>🧑‍💻 Made With ❤️ By</h2>

<p><strong><a href="https://github.com/satyanweshi11">Satyanweshi</a></strong></p>
<p><em>“Don't just elevate. Uplift.”</em></p>
