/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*LOADING*/
window.addEventListener('load', function() {
    var loadingOverlay = document.getElementById('loading-overlay');
    loadingOverlay.style.display = 'none';
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 


document.addEventListener('DOMContentLoaded', function() {
    var notification = document.querySelector('.notification');
    var notification1 = document.querySelector('.notification1');
    var notificationSound = document.getElementById('notification-sound');

    // Display the notification
    setTimeout(function() {
    notification.style.display = 'block';
    }, 2000);

    // Play the notification sound
    setTimeout(function() {
        notificationSound.play().catch(function(error) {
            // newFunction(error)
        });
    }, 2000);

    // Display the notification
    setTimeout(function() {
        notification1.style.display = 'block';
        }, 4000);
    
        // Play the notification sound
        setTimeout(function() {
            notificationSound.play().catch(function(error) {
                // newFunction(error)
            });
        }, 4000);

    // Hide the notification after 5 seconds
    setTimeout(function() {
        notification.style.display = 'none';
    }, 5000);
    setTimeout(function() {
        notification1.style.display = 'none';
    }, 7000);
});

function newFunction(error) {
    alert("Playback failed:", error)
}
