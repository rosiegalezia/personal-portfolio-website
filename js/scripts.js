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



// // Select all SVG paths with the class 'reverse'
// const reversePaths = document.querySelectorAll('svg path.reverse');

// // Loop through each path
// reversePaths.forEach(path => {
//     // Get the current path data
//     const pathData = path.getAttribute('d');
    
//     // Split the path data into individual commands
//     const commands = pathData.split(/(?=[A-Z])/);
    
//     // Reverse the array of commands
//     const reversedCommands = commands.reverse();
    
//     // Join the reversed commands back into a string
//     const reversedPathData = reversedCommands.join('');
    
//     // Set the 'd' attribute of the path element to the reversed path data
//     path.setAttribute('d', reversedPathData);
// });

// function animateHandwriting() {
//     const path = document.getElementById('l');
//     const length = path.getTotalLength();

//     // Set up the animation
//     path.style.transition = path.style.WebkitTransition =
//         'none';
//     path.style.strokeDasharray = length + ' ' + length;
//     path.style.strokeDashoffset = length;
//     path.getBoundingClientRect(); // Trigger reflow

//     // Draw from bottom to top
//     path.style.transition = path.style.WebkitTransition =
//         'stroke-dashoffset 1s ease-in-out';
//     path.style.strokeDashoffset = '0';
// }

// // Trigger the animation when the window loads
// window.onload = function () {
//     animateHandwriting();
// };


// let paths = document.querySelectorAll('path')

// writeName()

// function writeName() {
//     for (let i = 0; i < paths.length; i++) {
//         let path = paths[i];
//         let pathLength = path.getTotalLength();
//         let negativePathLength = -pathLength;
//         let isReversed = path.classList.contains('reverse');

//         console.log(pathLength, negativePathLength)

//         if (isReversed) {
//             path.setAttribute("stroke-dasharray", pathLength + " " + pathLength);
//             path.setAttribute("stroke-dashoffset", pathLength);
//         } else {
//             path.setAttribute("stroke-dasharray", pathLength);
//             path.setAttribute("stroke-dashoffset", pathLength);
//         }

//         // Calculate the animation duration based on the path length
//         let animationDuration = 0.9 ; // Set your desired duration in seconds
//         path.innerHTML = `<animate attributeName="stroke-dashoffset" begin="${i * animationDuration}s" dur="${animationDuration}s" to="0" fill="freeze"/>`;
//     }
// }