document.addEventListener('DOMContentLoaded', () => {
  const burgerCheckbox = document.querySelector('.burger-menu input[type="checkbox"]');
  const mobileNavLinks = document.querySelectorAll('#mobilenav a');

  if (!burgerCheckbox || mobileNavLinks.length === 0) {
    return;
  }

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      burgerCheckbox.checked = false;
    });
  });
});
