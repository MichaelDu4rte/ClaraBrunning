
/* ----- MENU ----- */

function menuFunction() {
  var menuBtn = document.getElementById('nav-menu');
  var body = document.body;

  if (menuBtn.className === 'nav-menu responsive') {
      menuBtn.className = 'nav-menu';
  } else {
      menuBtn.className = 'nav-menu responsive';
  }
}

var menuLinks = document.querySelectorAll('#nav-menu a');

menuLinks.forEach(function(link) {
  link.addEventListener('click', function() {
      menuFunction();
  });
});



/* ----- SHADOW ----- */
window.onscroll = function() {headerShadow()};

function headerShadow() {
    
  const navHeader =document.getElementById("header");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}


/* ----- INPUT ----- */


var nameInput = document.getElementById("name");
var messageInput = document.getElementById("message");
var sendBtn = document.getElementById("sendBtn");

function checkInputs() {
  var name = nameInput.value.trim();
  var message = messageInput.value.trim();

  if (name !== "" && message !== "") {
    sendBtn.disabled = false;
    sendBtn.textContent = "Enviar Mensagem";

  } else {
    sendBtn.disabled = true;
    sendBtn.textContent = "Preencha o formulário ";
  }
}

nameInput.addEventListener("input", checkInputs);
messageInput.addEventListener("input", checkInputs);

document.getElementById("sendBtn").addEventListener("click", function() {
  var name = encodeURIComponent(nameInput.value);
  var message = encodeURIComponent(messageInput.value);
  var phoneNumber = "41998158000"; // Seu número de telefone

  var url = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=Olá, meu nome é " + name + ". " + message;

 
  window.open(url);
})





/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true     
})


sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})

/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 200})

sr.reveal('.top-header',{})

/* -- ABOUT INFO AND CONTACT INFO -- */
const srLeft = ScrollReveal({
origin: 'left',
distance: '80px',
duration: 2000,
reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

/* -- ABOUT SKILLS AND FORM BOX -- */
const srRight = ScrollReveal({
origin: 'right',
distance: '80px',
duration: 2000,
reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})



/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')
function scrollActive() {
const scrollY = window.scrollY;
sections.forEach(current =>{
const sectionHeight = current.offsetHeight,
  sectionTop = current.offsetTop - 50,
sectionId = current.getAttribute('id')
if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 
  document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
}  else {
document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
}
})
}
window.addEventListener('scroll', scrollActive)