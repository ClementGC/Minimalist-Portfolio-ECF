const toggleMenu = document.querySelector('.main-nav__toggler');
const menu = document.querySelector('.main-nav-list');

toggleMenu.addEventListener('click', function () {
  const open = JSON.parse(toggleMenu.getAttribute('aria-expanded'));
  toggleMenu.setAttribute('aria-expanded', !open);
  menu.hidden = !menu.hidden;
});