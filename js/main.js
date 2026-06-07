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

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if(targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
            
            // Clean the URL without reloading
            history.replaceState(null, null, ' '); 
        }
    });
});
