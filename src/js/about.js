const container = document.querySelector('.about-easy-steps');
const items = container.querySelectorAll('.about-easy-steps-item');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            items.forEach((item) => {
                item.classList.add('animate__animated');
                item.classList.add('animate__pulse');
            });
        } else {
            items.forEach((item) => {
                item.classList.remove('animate__animated');
                item.classList.remove('animate__pulse');
            });
        }
    });
});

observer.observe(container);