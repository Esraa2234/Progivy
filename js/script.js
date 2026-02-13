
// ===== Preloader =====
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }, 2000);
});

// ===== Theme Toggle =====
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// Check for saved theme preference or default to 'light'
const currentTheme = localStorage.getItem('theme') || 'light';
htmlElement.setAttribute('data-theme', currentTheme);

themeToggle.addEventListener('click', () => {
    const theme = htmlElement.getAttribute('data-theme');
    const newTheme = theme === 'light' ? 'dark' : 'light';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

   document.getElementById('contactBtn').addEventListener('click', () => {
                                const contactSection = document.getElementById('contact');
                                contactSection.scrollIntoView({ behavior: 'smooth' });
                            });

// ===== Navigation =====
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const navbar = document.getElementById('navbar');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

const langToggle = document.getElementById("langToggle");

if (langToggle) {
  langToggle.addEventListener("click", () => {
    if (document.documentElement.lang === "en") {
      window.location.href = "index-ar.html";
    } else {
      window.location.href = "index.html";
    }
  });
}


// Close menu when clicking nav links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');

function highlightNav() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(`.nav-link[href*=${sectionId}]`)?.classList.add('active');
        } else {
            document.querySelector(`.nav-link[href*=${sectionId}]`)?.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', highlightNav);

// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});



// FAQ accordion toggle
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    question.addEventListener("click", () => {
        // Close all other answers
        faqItems.forEach(otherItem => {
            if(otherItem !== item){
                otherItem.querySelector(".faq-answer").style.display = "none";
            }
        });

        // Toggle this answer
        if(answer.style.display === "block"){
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const pairs = document.querySelectorAll(".motivational-carousel .motivation-pair");
    let index = 0;

    function showNextPair() {
        pairs.forEach((pair) => pair.classList.remove("active"));
        index = (index + 1) % pairs.length;
        pairs[index].classList.add("active");
    }

    // كل 4 ثواني يظهر الزوج التالي
    setInterval(showNextPair, 4000);
});


// ================= Scroll To Top Button =================
const scrollTopBtn = document.getElementById('scrollTop');

if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('active');
        } else {
            scrollTopBtn.classList.remove('active');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ================= Contact Form =================
const contactForm = document.getElementById('contactForm');

window.addEventListener('pageshow', () => {
        document.getElementById('contactForm').reset();
    });

// ================= Simple AOS (Animate On Scroll) =================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const aosObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
        }
    });
}, observerOptions);

document.querySelectorAll('[data-aos]').forEach(el => {
    aosObserver.observe(el);
});

// ================= Floating Cards Parallax =================
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.floating-card');
    if (!cards.length) return;

    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    cards.forEach((card, index) => {
        const speed = (index + 1) * 5;
        const xMove = (x - 0.5) * speed;
        const yMove = (y - 0.5) * speed;

        card.style.transform = `translate(${xMove}px, ${yMove}px)`;
    });
});

// ================= Lazy Loading Images =================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ================= Debounce (Performance) =================
function debounce(func, wait = 10) {
    let timeout;
    return function () {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, arguments), wait);
    };
}

// ================= Navbar Active Link (لو عندك function) =================
window.addEventListener('scroll', debounce(() => {
    if (typeof highlightNav === 'function') {
        highlightNav();
    }
}));

// ================= Easter Egg  =================
const konamiCode = [
    'ArrowUp', 'ArrowUp',
    'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight',
    'ArrowLeft', 'ArrowRight',
    'b', 'a'
];

let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            activateEasterEgg();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

function activateEasterEgg() {
    document.body.style.animation = 'rainbow 2s linear infinite';
    setTimeout(() => {
        document.body.style.animation = '';
    }, 4000);
}

const style = document.createElement('style');
style.textContent = `
@keyframes rainbow {
    0% { filter: hue-rotate(0deg); }
    100% { filter: hue-rotate(360deg); }
}`;
document.head.appendChild(style);



                const form = document.getElementById('contactForm');

                form.addEventListener('submit', function(e) {
                    e.preventDefault(); // تمنع الفورم من إعادة التحميل
                    const formData = new FormData(form);

                    fetch(form.action, {
                    method: 'POST',
                    body: formData,
                    headers: { 'Accept': 'application/json' }
                    }).then(response => {
                    if (response.ok) {
                        window.location.href = 'thankyou.html'; // يحول للصفحة بعد الإرسال
                    } else {
                        alert("Oops! There was a problem submitting your form.");
                    }
                    }).catch(error => {
                    alert("Oops! There was a problem submitting your form.");
                    });
                });
            
