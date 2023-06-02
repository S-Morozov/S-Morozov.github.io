// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

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

function validateForm() {
    let formData = {
        'name': $('input[name=name]').val(),
        'email': $('input[name=email]').val(),
        'subject': $('input[name=subject]').val(),
        'message': $('textarea[name=message]').val()
    };

    $.ajax({
        url: "mail.php",
        type: "POST",
        data: formData,
        success: function (data) {
            document.querySelector('.status').innerHTML = data.message;
            if (data.code) //If mail was sent successfully, reset the form.
                document.getElementById("contact-form").reset();
        }});
}


// Initialize Firebase
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBrG5xaOm6JVrgfzWbDz7gxiIIqvjsZjgU",
    authDomain: "resume-web-post.firebaseapp.com",
    projectId: "resume-web-post",
    storageBucket: "resume-web-post.appspot.com",
    messagingSenderId: "852768862776",
    appId: "1:852768862776:web:7e49215fb55715379f2ccd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Reference messages collection
const messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
    e.preventDefault();

    //Get value
    const name = getInputVal('name');
    const email = getInputVal('email');
    const subject = getInputVal('subject');
    const message = getInputVal('message');

    // Save message
    saveMessage(name, email, subject, message);

    // Show alert
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    },3000);

    // Clear form
    document.getElementById('contactForm').reset();
}

// Function to get form value
function getInputVal(id){
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, subject, message){
    let newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        subject: subject,
        message: message
    });
}








// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries




