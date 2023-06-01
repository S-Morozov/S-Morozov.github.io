$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    let typed1 = new Typed(".typing", {
        strings: ["Front-end developer", "IT-support specialist", "Software engineer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    let typed = new Typed(".typing-2", {
        strings: ["Front-end developer", "IT-support specialist", "Software engineer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });


});

// form submit

function sendEmail(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the form fields
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;

    // Create an XMLHttpRequest object
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'mail.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    // Set up the callback function
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                // Email sent successfully
                window.location.href = 'thankyoumail.html'; // Redirect to the thank you page
            } else {
                // Failed to send email
                console.error('An error occurred while sending the email.');
            }
        }
    };

    // Prepare the form data
    let formData = 'name=' + encodeURIComponent(name) +
        '&email=' + encodeURIComponent(email) +
        '&subject=' + encodeURIComponent(subject) +
        '&message=' + encodeURIComponent(message);

    // Send the request
    xhr.send(formData);
}

