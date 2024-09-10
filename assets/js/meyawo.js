/*!
=========================================================
* Meyawo Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// Wait for the DOM content to fully load
document.addEventListener('DOMContentLoaded', function () {
    // Add event listener to the anchor link
    document.querySelector('.scroll-link').addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default jump behavior

        // Calculate the target position for the scroll
        const targetSection = document.querySelector('#portfolio');
        const targetPosition = targetSection.offsetTop;

        // Smooth and slow scroll implementation
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});


// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});