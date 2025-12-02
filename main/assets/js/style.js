        // Theme Toggle
        const themeToggle = document.getElementById('theme-toggle');
        const body = document.body;

        // Check for saved theme preference
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme === 'dark') {
            body.classList.add('dark-theme');
            themeToggle.checked = true;
        } else {
            themeToggle.checked = false;
        }

        themeToggle.addEventListener('change', () => {
            body.classList.toggle('dark-theme');
            
            if(body.classList.contains('dark-theme')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
        });

        // Hamburger Menu Toggle
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.getElementById('nav-links');

        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });

        // Skills Data with Images
        const skills = [
            { name: 'HTML5', image: './assets/images/html5.png' },
            { name: 'CSS3', image: './assets/images/css3.png' },
            { name: 'Java Script', image: './assets/images/JS.png' },
            { name: 'Python', image: './assets/images/python.png' },
            { name: 'Java', image: './assets/images/java.png' },
            { name: 'React.js', image: './assets/images/react js.png' },
            { name: 'Node.js', image: './assets/images/node js.png' },
            { name: 'SQL', image: './assets/images/sql.png' },
        ];

        const tools = [
            { name: 'GitHub', image: './assets/images/git.png' },
            { name: 'AWS', image: './assets/images/aws.png' },
            { name: 'VS Code', image: './assets/images/vs-code.png' },
            // { name: 'Postman', image: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
            { name: 'Git', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
            { name: 'Figma', image: './assets/images/figma.png' },
            { name: 'Photo shop', image: './assets/images/PS.png' },
            { name: 'Canva', image: './assets/images/canva.png' },
            { name: 'Adobe XD', image: './assets/images/XD.png' },
        ];

        // Display Skills/Tools
        function displayItems(items) {
            const skillsDisplay = document.getElementById('skills-display');
            skillsDisplay.innerHTML = '';
            
            items.forEach(item => {
                const skillBox = document.createElement('div');
                skillBox.className = 'skill-box';
                skillBox.innerHTML = `
                    <img src="${item.image}" alt="${item.name}" class="skill-img">
                    <p>${item.name}</p>
                `;
                skillsDisplay.appendChild(skillBox);
            });
        }

        // Initialize with skills
        displayItems(skills);

        // Toggle between skills and tools
        document.getElementById('skills-btn').addEventListener('click', () => {
            displayItems(skills);
            document.getElementById('skills-btn').classList.add('active');
            document.getElementById('tools-btn').classList.remove('active');
        });

        document.getElementById('tools-btn').addEventListener('click', () => {
            displayItems(tools);
            document.getElementById('tools-btn').classList.add('active');
            document.getElementById('skills-btn').classList.remove('active');
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });