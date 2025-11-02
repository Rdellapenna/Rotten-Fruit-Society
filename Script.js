// Rotten Fruit Society — small site script

// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('nav-menu');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.style.display === 'flex';
    navMenu.style.display = isOpen ? 'none' : 'flex';
    navToggle.setAttribute('aria-expanded', String(!isOpen));
  });
}

// Auto-update copyright year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Simple email subscribe placeholder (non-functional)
function subscribe(e) {
  e.preventDefault();
  const email = document.getElementById('email')?.value.trim();
  const msg = document.getElementById('form-msg');
  if (!email) return false;
  msg.textContent = "Thanks! You're on the list.";
  return false;
}
