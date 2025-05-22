let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')
let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')
let themeButton = document.querySelector('.theme-button')
let body = document.body

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY
        let offset = sec.offsetTop - 100
        let height = sec.offsetHeight
        let id = sec.getAttribute('id')

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active')
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })
        }
    })

    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')
}

ScrollReveal({
    reset: true,
    distance: '15px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.left', {origin: 'left'})
ScrollReveal().reveal('.right', {origin: 'right'})
ScrollReveal().reveal('.top', {origin: 'top'})
ScrollReveal().reveal('.bottom', {origin: 'bottom'})


const typed = new Typed('.multiple-text', {
    strings: ['Data Analyst', 'Data Engineer', 'Data Scientist', 'BI Analyst', 'AI Enthusiast'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

// Function to determine if it's nighttime (between 6PM and 6AM)
function isNightTime() {
    const hours = new Date().getHours();
    return hours < 6 || hours >= 18; // Before 6AM or after 6PM
}

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');

// Apply theme based on preference or time
function applyTheme() {
    // If there's a saved preference, apply it
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        body.classList.remove('light-theme');
    } else if (savedTheme === 'light') {
        body.classList.add('light-theme');
        body.classList.remove('dark-theme');
    } else {
        // No saved preference, use time-based theme
        if (isNightTime()) {
            body.classList.add('dark-theme');
            body.classList.remove('light-theme');
        } else {
            body.classList.add('light-theme');
            body.classList.remove('dark-theme');
        }
    }
    
    // Update icons if they exist
    updateThemeIcons();
}

// Update the theme icons based on current theme
function updateThemeIcons() {
    const darkModeIcon = document.querySelector('.dark-mode');
    const lightModeIcon = document.querySelector('.light-mode');
    
    if (darkModeIcon && lightModeIcon) {
        if (body.classList.contains('dark-theme')) {
            darkModeIcon.style.display = 'none';
            lightModeIcon.style.display = 'block';
        } else {
            darkModeIcon.style.display = 'block';
            lightModeIcon.style.display = 'none';
        }
    }
}

// Apply theme on page load
applyTheme();

// Toggle theme when button is clicked
themeButton.addEventListener('click', () => {
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
    }
    
    // Update icons after theme change
    updateThemeIcons();
});

// Skills Carousel functionality
document.addEventListener('DOMContentLoaded', function() {
    const skillsTrack = document.querySelector('.skills-track');
    
    // Optional: Add pause on hover functionality
    if (skillsTrack) {
        const skillsSlider = document.querySelector('.skills-slider');
        
        skillsSlider.addEventListener('mouseenter', () => {
            skillsTrack.style.animationPlayState = 'paused';
        });
        
        skillsSlider.addEventListener('mouseleave', () => {
            skillsTrack.style.animationPlayState = 'running';
        });
        
        // Optional: Add touch support for mobile
        skillsSlider.addEventListener('touchstart', () => {
            skillsTrack.style.animationPlayState = 'paused';
        }, {passive: true});
        
        skillsSlider.addEventListener('touchend', () => {
            skillsTrack.style.animationPlayState = 'running';
        }, {passive: true});
    }
});

// Optional: Add a function to dynamically create slides
function createSkillSlides() {
    const skills = [
        { name: 'Python', icon: './assets/icons/python.png' },
        { name: 'SQL', icon: './assets/icons/sql.png' },
        { name: 'AWS', icon: './assets/icons/aws.png' },
        { name: 'Tableau', icon: './assets/icons/tableau.png' },
        { name: 'Power BI', icon: './assets/icons/powerbi.png' },
        { name: 'dbt', icon: './assets/icons/dbt.png' },
        { name: 'Redshift', icon: './assets/icons/redshift.png' },
        { name: 'BigQuery', icon: './assets/icons/bigquery.png' }
    ];
    
    const skillsTrack = document.querySelector('.skills-track');
    if (!skillsTrack) return;
    
    // Clear existing content
    skillsTrack.innerHTML = '';
    
    // Add original slides
    skills.forEach(skill => {
        const slide = document.createElement('div');
        slide.className = 'skills-slide';
        slide.innerHTML = `
            <img src="${skill.icon}" alt="${skill.name}">
            <span>${skill.name}</span>
        `;
        skillsTrack.appendChild(slide);
    });
    
    // Add duplicate slides for infinite effect
    skills.slice(0, Math.min(4, skills.length)).forEach(skill => {
        const slide = document.createElement('div');
        slide.className = 'skills-slide';
        slide.innerHTML = `
            <img src="${skill.icon}" alt="${skill.name}">
            <span>${skill.name}</span>
        `;
        skillsTrack.appendChild(slide);
    });
}


const $tabQualification = document.querySelectorAll(".qualification-button")
let $tabActive = document.querySelector(".qualification-button.-active")

function selectQualification(e) {
   e.preventDefault();
   let $tabClicked = this;
   
   // Remove active class from current tab
   $tabActive.classList.remove("-active");
   $tabClicked.classList.add("-active");
   $tabActive = $tabClicked;

   // Hide all content sections
   document.querySelectorAll(".qualification-content").forEach(content => {
       content.classList.remove("-active");
   });

   // Show the selected content
   let idContent = $tabClicked.getAttribute("href");
   let $targetContent = document.querySelector(idContent);
   $targetContent.classList.add("-active");
}

$tabQualification.forEach((tabItem) => {
   tabItem.addEventListener("click", selectQualification)
})

// Scroll up button functionality - Fixed version
document.addEventListener('DOMContentLoaded', function() {
    // Create the scroll up button element dynamically
    const scrollUpBtn = document.createElement('div');
    scrollUpBtn.className = 'scroll-up-btn';
    scrollUpBtn.innerHTML = '<i class="bx bx-up-arrow-alt"></i>';
    document.body.appendChild(scrollUpBtn);

    // Show/hide button based on scroll position and current section
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        const homeSection = document.querySelector('#home');
        
        // Get height of home section (if it exists)
        const homeSectionHeight = homeSection ? homeSection.offsetHeight : 0;
        
        // Show button if scrolled beyond home section
        if (scrollPosition > homeSectionHeight) {
            scrollUpBtn.classList.add('show');
        } else {
            scrollUpBtn.classList.remove('show');
        }
    });

    // Scroll to top when button is clicked
    scrollUpBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// // Bottom Navigation Bar functionality
// document.addEventListener('DOMContentLoaded', function() {
//     // Create the bottom nav bar elements
//     const bottomNav = document.createElement('div');
//     bottomNav.className = 'bottom-nav';
//     bottomNav.innerHTML = `
//         <a href="#home" class="bottom-nav-logo">Mirav</a>
//         <div class="bottom-menu-icon">
//             <i class="bx bx-menu"></i>
//         </div>
//     `;
//     document.body.appendChild(bottomNav);
    
//     // Create mobile menu panel
//     const mobileMenu = document.createElement('div');
//     mobileMenu.className = 'mobile-menu';
    
//     // Clone the navigation links from your main navbar
//     const mainNavLinks = document.querySelectorAll('.navbar a');
//     let menuHTML = '';
//     mainNavLinks.forEach(link => {
//         menuHTML += `<a href="${link.getAttribute('href')}">${link.textContent}</a>`;
//     });
//     mobileMenu.innerHTML = menuHTML;
//     document.body.appendChild(mobileMenu);
    
//     // Show/hide bottom bar based on scroll position
//     window.addEventListener('scroll', () => {
//         const scrollPosition = window.scrollY;
//         const homeSection = document.querySelector('#home');
        
//         // Get height of home section (if it exists)
//         const homeSectionHeight = homeSection ? homeSection.offsetHeight - 100 : 0;
        
//         // Show bar if scrolled beyond home section
//         if (scrollPosition > homeSectionHeight) {
//             bottomNav.classList.add('show');
//         } else {
//             bottomNav.classList.remove('show');
//             // Also hide mobile menu if we're back at home section
//             mobileMenu.classList.remove('active');
//         }
//     });
    
//     // Toggle mobile menu when menu icon is clicked
//     const menuIcon = bottomNav.querySelector('.bottom-menu-icon');
//     menuIcon.addEventListener('click', () => {
//         mobileMenu.classList.toggle('active');
//         menuIcon.querySelector('i').classList.toggle('bx-menu');
//         menuIcon.querySelector('i').classList.toggle('bx-x');
//     });
    
//     // Close mobile menu when a link is clicked
//     const mobileMenuLinks = mobileMenu.querySelectorAll('a');
//     mobileMenuLinks.forEach(link => {
//         link.addEventListener('click', () => {
//             mobileMenu.classList.remove('active');
//             menuIcon.querySelector('i').classList.add('bx-menu');
//             menuIcon.querySelector('i').classList.remove('bx-x');
//         });
//     });
// });