// Shared interactions for the SN Tech Solutions website and portfolio page.
const menuToggle = document.querySelector('#menuToggle');
const navList = document.querySelector('#navList');

if (menuToggle && navList) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navList.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    menuToggle.innerHTML = isOpen
      ? '<i class="fa-solid fa-xmark"></i>'
      : '<i class="fa-solid fa-bars"></i>';
  });

  navList.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navList.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open navigation');
      menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
  });
}

const year = document.querySelector('#currentYear');
if (year) year.textContent = new Date().getFullYear();

const enquiryForm = document.querySelector('#enquiryForm');
if (enquiryForm) {
  enquiryForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.querySelector('#customerName').value.trim();
    const phone = document.querySelector('#customerPhone').value.trim();
    const service = document.querySelector('#serviceType').value;
    const details = document.querySelector('#details').value.trim() || 'No additional details provided';
    const message = [
      'Hello SN Tech Solutions,', '', `My name is ${name}.`,
      `My phone number is ${phone}.`, `Service required: ${service}.`,
      `Details: ${details}`, '', 'Please contact me about this enquiry.'
    ].join('\n');
    window.open(`https://wa.me/918431161859?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  });
}
