function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener('DOMContentLoaded', (event) => {
  const htmlElement = document.documentElement;
  const switchElement = document.getElementById('darkModeSwitch');
  const moonIcon = document.querySelector('.bi-moon');
  const sunIcon = document.querySelector('.bi-sun-fill');

  // Set the default theme to dark if no setting is found in local storage
  const currentTheme = localStorage.getItem('bsTheme') || 'dark';
  htmlElement.setAttribute('data-bs-theme', currentTheme);
  switchElement.checked = currentTheme === 'dark';
  toggleIcons(currentTheme);

  switchElement.addEventListener('change', function () {
      if (this.checked) {
          htmlElement.setAttribute('data-bs-theme', 'dark');
          localStorage.setItem('bsTheme', 'dark');
          toggleIcons('dark');
      } else {
          htmlElement.setAttribute('data-bs-theme', 'light');
          localStorage.setItem('bsTheme', 'light');
          toggleIcons('light');
      }
  });

  function toggleIcons(theme) {
      if (theme === 'dark') {
          moonIcon.style.display = 'inline';
          sunIcon.style.display = 'none';
      } else {
          moonIcon.style.display = 'none';
          sunIcon.style.display = 'inline';
      }
  }
});