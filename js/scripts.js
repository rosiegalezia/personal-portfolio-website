/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// let paths = document.querySelectorAll('path')

// writeName()

// function writeName() {
//     for (let i = 0; i < paths.length; i++) {
//         let path = paths[i];
//         let pathLength = path.getTotalLength();
//         let isReversed = path.classList.contains('reverse');

//         if (isReversed) {
//             path.setAttribute("stroke-dasharray", pathLength + " " + pathLength);
//             path.setAttribute("stroke-dashoffset", pathLength);
//         } else {
//             path.setAttribute("stroke-dasharray", pathLength);
//             path.setAttribute("stroke-dashoffset", pathLength);
//         }

//         // Calculate the animation duration based on the path length
//         let animationDuration = 0.5 ; // Set your desired duration in seconds
//         path.innerHTML = `<animate attributeName="stroke-dashoffset" begin="${i * animationDuration}s" dur="${animationDuration}s" to="0" fill="freeze"/>`;
//     }
// }