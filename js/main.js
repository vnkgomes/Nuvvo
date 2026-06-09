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

// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         const targetId = this.getAttribute('href').substring(1);
//         const targetElement = document.getElementById(targetId);
        
//         if(targetElement) {
//             targetElement.scrollIntoView({ behavior: 'smooth' });
            
//             // Clean the URL without reloading
//             history.replaceState(null, null, ' '); 
//         }
//     });
// });

// window.addEventListener('hashchange', function() {
//     history.replaceState(null, "", location.pathname + location.search);
// });

// function removeHashAndProcess() {
//             // Check if there's a hash in the URL
//             if (window.location.hash) {
//                 // Store the hash value
//                 const hash = window.location.hash;
                
//                 // Remove the hash from URL (this is your original code)
//                 history.replaceState(null, "", location.pathname + location.search);
                
//                 // Process the hash - scroll to the section
//                 const elementId = hash.substring(1);
//                 if (elementId) {
//                     const element = document.getElementById(elementId);
//                     if (element) {
//                         // Small delay to ensure page layout is stable
//                         setTimeout(() => {
//                             element.scrollIntoView({ behavior: 'smooth' });
//                         }, 100);
//                     }
//                 }
//             }
//         }
        
//         // Handle hash changes (clicking links while on the page)
//         window.addEventListener('hashchange', removeHashAndProcess);
        
//         // Handle initial page load (coming from another page with #)
//         if (document.readyState === 'loading') {
//             document.addEventListener('DOMContentLoaded', removeHashAndProcess);
//         } else {
//             // Script loads after DOM is ready
//             removeHashAndProcess();
//         }

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