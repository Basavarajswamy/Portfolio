// Smooth scrolling
// document.querySelector('.cta-btn').addEventListener('click', function () {
//     document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
// });

// Smooth scrolling for links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Project hover effects (could be replaced with a more robust animation library like GSAP)
document.querySelectorAll('.project-item').forEach(function (item) {
    item.addEventListener('mouseover', function () {
        item.style.transform = 'scale(1.05)';
    });
    item.addEventListener('mouseout', function () {
        item.style.transform = 'scale(1)';
    });
});
// Scroll animation for fade-in sections
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.5,
    rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        appearOnScroll.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});
