# 🎓 CollegeUtils

A collection of handy utility tools for college students — built by students, for students!

---

## 🚀 Quick Start

### View the Website
Simply open `index.html` in your browser to see all available tools.

### Run Locally
```bash
# Clone the repo
git clone https://github.com/princexpoddar/college-utils.git

# Open in browser
cd college-utils
start index.html   # Windows
open index.html    # Mac
```

---

## 🛠️ Available Tools

| # | Tool | What it Does | Difficulty |
|---|------|--------------|------------|
| 1 | **CGPA Calculator** | Calculate your semester GPA | 🟢 Easy |
| 2 | **Attendance Tracker** | Track and calculate attendance % | 🟡 Medium |
| 3 | **Timetable Manager** | Manage your weekly class schedule | 🟡 Medium |
| 4 | **Quick Notes** | Save quick notes and reminders | 🟢 Easy |
| 5 | **To-Do List** | Manage your tasks and assignments | 🟢 Easy |
| 6 | **Countdown Timer** | Set timers for exams/deadlines | 🟢 Easy |
| 7 | **Unit Converter** | Convert between units (length, weight, etc.) | 🟡 Medium |
| 8 | **Expense Tracker** | Track your daily expenses | 🟡 Medium |
| 9 | **Password Strength** | Check if your password is strong | 🟢 Easy |
| 10 | **Typing Speed Test** | Test your typing speed (WPM) | 🟡 Medium |
| 11-20 | **Idea Slots** | Build your own tool! | ⭐ Your Choice |

---

## 📁 Project Structure

```
college-utils/
├── index.html              # Home page (lists all tools)
├── css/
│   └── style.css           # All styling goes here
├── pages/
│   ├── cgpa.html           # CGPA Calculator page
│   ├── attendance.html     # Attendance Tracker page
│   ├── timetable.html      # Timetable Manager page
│   ├── notes.html          # Quick Notes page
│   ├── todo.html           # To-Do List page
│   ├── countdown.html      # Countdown Timer page
│   ├── converter.html      # Unit Converter page
│   ├── expenses.html       # Expense Tracker page
│   ├── password.html       # Password Strength page
│   ├── typing-test.html    # Typing Speed Test page
│   ├── idea1.html          # Idea slot 1
│   ├── ...                 # More idea slots
│   └── contributing.html   # Contribution guidelines
└── assets/
    └── images/             # Images and icons
```

---

## 💻 Tech Stack

| Technology | What For |
|------------|----------|
| **HTML5** | Page structure |
| **CSS3** | Styling & animations |
| **JavaScript** | Logic & interactivity |

> ⚠️ **No frameworks required!** Pure HTML, CSS, and JS only.

---

## 🎯 How to Contribute

### Step 1: Fork & Clone
```bash
# Fork the repo on GitHub, then:
git clone https://github.com/YOUR-USERNAME/college-utils.git
cd college-utils
```

### Step 2: Create an Issue (Claim Your Tool)

> ⚠️ **Important:** You need to create an issue first before starting work!

1. Go to the [Issues](https://github.com/princexpoddar/college-utils/issues) tab
2. Click **"New Issue"**
3. Choose a template:
   - **🛠️ Build a Tool** — For existing tools (CGPA, Attendance, etc.)
   - **💡 Propose a New Idea** — For Idea slots (build your own tool!)
4. Fill in the template and submit
5. Wait for a maintainer to assign you

**Why create an issue?**
- Prevents duplicate work (no two people building the same tool)
- Maintainers can guide you if needed
- Your contribution gets tracked properly

### Step 3: Create a Branch
```bash
git checkout -b feature/your-tool-name
```

### Step 4: Build Your Tool
- Open the tool's page file (e.g., `pages/cgpa.html`)
- Write your HTML, CSS, and JavaScript
- Test it in your browser

### Step 5: Submit
```bash
git add .
git commit -m "feat: Add CGPA Calculator"
git push origin feature/your-tool-name
```
Then create a Pull Request on GitHub!

---

## 📝 Coding Guidelines

### Do's ✅
- Write **clean, readable code**
- Add **comments** to explain your logic
- Make it **responsive** (works on mobile)
- Follow the existing **dark theme** style
- Test thoroughly before submitting

### Don'ts ❌
- Don't use frameworks (React, Vue, Angular)
- Don't copy-paste without understanding
- Don't submit without testing

---

## 📂 File Structure for Each Tool

Every tool page follows this structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Tool Name - CollegeUtils</title>
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>
    <!-- Navbar (already included) -->
    
    <main>
        <h1 class="page-title">Tool Name</h1>
        
        <!-- YOUR CODE GOES HERE -->
        <div class="card">
            <!-- Add your form, inputs, buttons, etc. -->
        </div>
    </main>

    <!-- Your JavaScript -->
    <script>
        // Your logic here
    </script>
</body>
</html>
```

---

## ❓ FAQ

**Q: I'm new to coding. Can I still contribute?**  
A: Absolutely! Pick an "Easy" tool and start learning!

**Q: Can I use external CSS libraries like Bootstrap?**  
A: No, we use our own `style.css`. Keep it simple!

**Q: Can I add a new tool not in the list?**  
A: Yes! Claim an Idea slot (Idea 1-10) and propose your idea.

**Q: How do I know if a tool is already taken?**  
A: Check the Issues tab. Assigned issues will show the assignee.

**Q: My code isn't working. Where do I get help?**  
A: Ask in the Issues section or reach out to mentors.

---

## 📜 License

This project is licensed under the MIT License.

---

**Happy Coding! 🎉**
