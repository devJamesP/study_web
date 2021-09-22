// HEADER
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  // Click Event Handler Logic
  searchInputEl.focus();
});


searchInputEl.addEventListener('focus', function () {
  // Focus Event Handler Logic
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () {
  // Blur Event Handler Logic
  searchEl.classList.remove('focused');
  searchInputEl.removeAttribute('placeholder')
});


// FOOTER
// 날짜 자동 계산
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 2021반환