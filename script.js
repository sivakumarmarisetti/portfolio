window.addEventListener('load', () => {
  const loading = document.getElementById('loading');
  setTimeout(() => {
    loading.style.display = 'none';
    document.body.classList.remove('loading');
  }, 3000); // Adjust the delay to match the animation duration
  document.body.classList.add('loading');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// JavaScript for scroll animations
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.1 }
);

sections.forEach((section) => {
  observer.observe(section);
});

// Store the animation interval ID
let animationInterval;

function createBackgroundScene() {
    const container = document.createElement('div');
    container.className = 'background-scene';
    document.getElementById('loading').appendChild(container);

    // Sample code snippets
    const codeSnippets = [
        'public class Main {',
        'SELECT * FROM users',
        'npm install',
        'git push origin',
        'AWS configure'
    ];

    function createElements() {
        // Create Server Racks
        for(let i = 0; i < 5; i++) {
            const server = document.createElement('div');
            server.className = 'server-rack';
            server.style.left = `${Math.random() * 90}%`;
            server.style.top = `${Math.random() * 90}%`;
            container.appendChild(server);
        }

        // Create Code Windows
        for(let i = 0; i < 3; i++) {
            const code = document.createElement('div');
            code.className = 'code-window';
            code.style.left = `${Math.random() * 80}%`;
            code.style.top = `${Math.random() * 80}%`;
            code.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
            container.appendChild(code);
        }

        // Create API Flow Points
        setInterval(() => {
            const api = document.createElement('div');
            api.className = 'api-flow';
            api.style.left = `${Math.random() * 90}%`;
            api.style.top = `${Math.random() * 90}%`;
            container.appendChild(api);
            setTimeout(() => api.remove(), 2000);
        }, 200);

        // Create Database Symbols
        for(let i = 0; i < 3; i++) {
            const db = document.createElement('div');
            db.className = 'database';
            db.style.left = `${Math.random() * 85}%`;
            db.style.top = `${Math.random() * 85}%`;
            container.appendChild(db);
        }
    }

    createElements();

    // Recreate elements periodically to keep the animation fresh
    setInterval(createElements, 5000);
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    createBackgroundScene();
});

