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

function removeHashAndProcess() {
    if (window.location.hash) {
        const hash = window.location.hash;
        
        // Remove both hash AND /index.html from URL
        let cleanPath = location.pathname;
        
        // Remove /index.html if present
        if (cleanPath.endsWith('/index.html')) {
            cleanPath = cleanPath.slice(0, -10); // Remove 'index.html'
        }
        
        // Remove trailing slash if present (optional)
        if (cleanPath.endsWith('/')) {
            cleanPath = cleanPath.slice(0, -1);
        }
        
        // If path is empty, use '/' or keep empty
        if (!cleanPath) {
            cleanPath = '/';
        }
        
        // Update URL without hash and clean path
        history.replaceState(null, "", cleanPath + location.search);
        
        // Process the hash
        const elementId = hash.substring(1);
        if (elementId) {
            const element = document.getElementById(elementId);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }
}

window.addEventListener('hashchange', removeHashAndProcess);

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', removeHashAndProcess);
} else {
    removeHashAndProcess();
}