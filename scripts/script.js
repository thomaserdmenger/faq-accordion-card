const faq = document.querySelectorAll('.faq__element');

faq.forEach((faq, index) => {
  faq.addEventListener('click', () => {
    if (!faq.classList.contains('active')) {
      faq.classList.add('active');
    } else {
      faq.classList.remove('active');
    }
    compareIndex(index);
  });
});

function compareIndex(index) {
  faq.forEach((item, idx) => {
    if (index !== idx) {
      item.classList.remove('active');
    }
  });
}
