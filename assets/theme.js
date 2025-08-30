/*!
 * theme.js - Theme toggler
 * Copyright (c) 2025 alexbraadworst
 * Licensed under the MIT License (MIT)
 * https://opensource.org/licenses/MIT
 */
const toggle = document.getElementById('theme-toggle');
const body = document.body;

// Load saved theme on page load
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  body.classList.add('light-theme');
  toggle.checked = true;
}

// Listen for changes
toggle.addEventListener('change', () => {
  if (toggle.checked) {
    body.classList.add('light-theme');
    localStorage.setItem('theme', 'light'); // save choice
  } else {
    body.classList.remove('light-theme');
    localStorage.setItem('theme', 'dark'); // save choice
  }
});
