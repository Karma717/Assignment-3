// ====== MENU TOGGLE (Mobile) ======
const menuIcon = document.createElement('div');
menuIcon.classList.add('menu-icon');
menuIcon.innerHTML = '&#9776;'; // hamburger symbol
document.querySelector('header').appendChild(menuIcon);

const nav = document.querySelector('nav ul');

menuIcon.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuIcon.classList.toggle('open');
});

// ====== STICKY HEADER ======
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 50);
});

// ====== SMOOTH SCROLLING ======
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 60,
                behavior: 'smooth'
            });
        }
        nav.classList.remove('active');
        menuIcon.classList.remove('open');
    });
});

// ====== SCROLL REVEAL ANIMATIONS ======
const revealElements = document.querySelectorAll(
    '.benefit-box, .activity-grid img, .format-box, .join-box, .testimonial, form'
);

function revealOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;
    revealElements.forEach(el => {
        const boxTop = el.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            el.classList.add('show');
        } else {
            el.classList.remove('show');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // call on load
