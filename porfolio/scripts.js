// Get a reference to your navigation bar element
const navbar = document.querySelector('.header');

// Track the scroll position
let lastScrollPosition = 0;

// Function to check scroll position and apply/remove box shadow
function toggleNavbarShadow() {
    const currentScrollPosition = window.scrollY;

    // Check if the user has scrolled past the home page
    if (currentScrollPosition > lastScrollPosition) {
        navbar.classList.add('navbar-shadow');
    } else {
        navbar.classList.remove('navbar-shadow');
    }

    // Update the last scroll position
    lastScrollPosition = currentScrollPosition;
}

// animation, show sections
const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// Add an event listener to the window for scroll events
window.addEventListener('scroll', toggleNavbarShadow);

// Initial call to set the initial state
toggleNavbarShadow();
