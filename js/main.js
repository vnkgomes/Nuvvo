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

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible'); 
        observer.unobserve(entry.target); 
      }
    });
  }, {
    // A slightly lower threshold ensures top-of-page items trigger immediately
    threshold: 0.05 
  });

  // Watch all items
  const elements = document.querySelectorAll('.cascade-item');
  elements.forEach((el) => {
    observer.observe(el);
    
    // Fallback: If the element is already inside the viewport on load, trigger it immediately
    const rect = el.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
      el.classList.add('is-visible');
      observer.unobserve(el);
    }
  });
});