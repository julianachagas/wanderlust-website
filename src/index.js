import './styles/main.scss';

// Import the Bootstrap components we need
import 'bootstrap/js/dist/modal';
import 'bootstrap/js/dist/carousel';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/tab';
import Tooltip from 'bootstrap/js/dist/tooltip';

// Import ScrollReveal
import ScrollReveal from 'scrollreveal';

// initialize bootstrap tooltips
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
tooltipTriggerList.forEach(tooltip => new Tooltip(tooltip));

// initialize ScrollReveal
ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(
  '#home, #benefits header, .benefits-item, #quote p, #quote figcaption, #faq header, #faq .content, #main-footer'
);

// Back to the top button: main page
const backToTopButton = document.getElementById('backToTopButton');
if (backToTopButton) {
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0 });
  });

  window.addEventListener('scroll', () => {
    backToTopButton.classList.toggle('invisible', window.scrollY < 500);
  });
}
