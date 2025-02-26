document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;
    const navLinks = document.querySelectorAll("nav ul li a");
    const currentPage = window.location.pathname.split("/").pop();
    const links = document.querySelectorAll('.contact-link');


//document.addEventListener("contextmenu", function (event) {
//    event.preventDefault();
//});
    
    // Dark Mode
    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
        themeToggle.textContent = "☀️";
    }

    themeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", "enabled");
            themeToggle.textContent = "☀️";
        } else {
            localStorage.setItem("dark-mode", "disabled");
            themeToggle.textContent = "🌙";
        }
    });

    // NavBar
    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage || 
            (currentPage === "" && link.getAttribute("href") === "index.html")) {
            link.classList.add("active");
        }

        link.addEventListener("click", function () {
            navLinks.forEach(nav => nav.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // Contact Icon
    links.forEach(link => {
        const icon = link.querySelector('.icon'); // Get the icon within the link
        const originalSrc = icon.src; // Store the original image source

        link.addEventListener('mouseover', () => {
            icon.src = icon.getAttribute('data-hover'); // Change to hover image
        });

        link.addEventListener('mouseout', () => {
            icon.src = originalSrc; // Change back to original image
        });
    });
});