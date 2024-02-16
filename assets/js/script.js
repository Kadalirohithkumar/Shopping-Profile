// // Navigation
// // Responsive Toggle Navigation =============================================
// let menuIcon = document.querySelector('.menuIcon');
// let nav = document.querySelector('.overlay-menu');

// menuIcon.addEventListener('click', () => {
//     // Use getComputedStyle to get the applied style and check the transform value
//     const computedStyle = window.getComputedStyle(nav);
//     const transformValue = computedStyle.getPropertyValue('transform');

//     if (transformValue === 'matrix(1, 0, 0, 1, 0, 0)') {
//         nav.style.transform = 'translateX(0%)';
//         nav.style.transition = 'transform 0.2s ease-out';
//     } else {
//         nav.style.transform = 'translateX(-100%)';
//         nav.style.transition = 'transform 0.2s ease-out';
//     }
// });

// // Toggle Menu Icon ========================================
// let toggleIcon = document.querySelector('.menuIcon');

// toggleIcon.addEventListener('click', () => {
//     toggleIcon.classList.toggle('toggle');
// });

// function changeBg() {
//     var indi = document.getElementById("indi");
//     var scrollValue = window.scrollY;
//     if (scrollValue < 400) {
//         indi.style.display = "none";
//     } else if (scrollValue > 400) {
//         indi.style.display = "block";
//     }
// }
// changeBg();

// window.addEventListener("scroll", changeBg);

// function toggleMobileMenu() {
//     var mobileMenu = document.getElementById("menu");
//     mobileMenu.style.display = (mobileMenu.style.display === "block") ? "none" : "block";
// }




// // Fetching
