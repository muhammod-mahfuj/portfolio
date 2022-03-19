/*==================== MENU SHOW Y HIDDEN ====================*/
const navmenu=document.querySelector('#nav-menu'),
      navtoggle=document.querySelector("#nav-toggle"),
      navclose=document.querySelector("#nav-close")

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navtoggle){
    navtoggle.addEventListener("click", () => {
        navmenu.classList.add('show_menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navclose){
    navclose.addEventListener('click', () =>{
        navmenu.classList.remove("show_menu")
    })
}

/*==================== REMOVE MENU MOBILE ====================*/


const navlink = document.querySelectorAll('.nav_link');   

function linkAction(){

  /*Active link*/

  navlink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/

  navmenu.classList.remove('show_menu')
}
navlink.forEach(n => n.addEventListener('click', linkAction));

/*==================== ACCORDION SKILLS ====================*/
const skillscontent = document.querySelectorAll(".skills_content"),
      skillsheader = document.querySelectorAll(".skills_header");


function toggleskills(){
    let itemclass = this.parentNode.className

    for(i = 0; i < skillscontent.length; i++ ){
        skillscontent[i].className = "skills_content skills_close"
    }
    if(itemclass === 'skills_content skills_close'){
        this.parentNode.className = "skills_content skills_open"
    }
}
skillsheader.forEach((element) =>{
  element.addEventListener( "click" , toggleskills )
})
/*==================== QUALIFICATION TABS ====================*/
const buttontabs = document.querySelectorAll("[data-target]"),
      tabcontents = document.querySelectorAll("[data-content]")

buttontabs.forEach(tab => {
    tab.addEventListener('click', () => {
       const target=document.querySelector(tab.dataset.target);

       tabcontents.forEach(tabcontent =>{
           tabcontent.classList.remove("qualification_active")
       })
       target.classList.add("qualification_active")

       buttontabs.forEach(tab =>{
           tab.classlist.remove("qualification_active")
       })
       tab.classList.add('qualification_active')
    })
})

/*==================== SERVICES MODAL ====================*/
const modelviews = document.querySelectorAll(".services_model"),
      modelbtns = document.querySelectorAll(".services_button"),
      modelcloses = document.querySelectorAll(".services_model-close")

let model = function(modelclick){
   modelviews[modelclick].classList.add("active-model")
}
modelbtns.forEach((modelbtn , i) => {
    modelbtn.addEventListener("click" , () =>{
        model(i)
    })
})
modelcloses.forEach((modelclose) => {
    modelclose.addEventListener("click", () => {
      modelviews.forEach((modelview) => {
         modelview.classList.remove("active-model")
      })  
    })
})

/*==================== PORTFOLIO SWIPER  ====================*/
let swiperprotfolio = new Swiper(".portfolio_contanier", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
  });

/*==================== TESTIMONIAL ====================*/
let swipertestimonial = new Swiper(".testimonial_container", {
    loop: true,
    grabCursor:true,
    spaceBetween:48,

    pagination: {
      el: ".swiper-pagination",
      clickable:true,
      dynamicBullets:true,
    },
    breakpoints:{
        568:{
            slidePerView : 2 ,
        }
    },
  });

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 

function scrollheader(){
   const nav = document.querySelector('#header')
   
   if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove("scroll-header")
}
window.addEventListener("scroll" , scrollheader)

/*==================== SHOW SCROLL UP ====================*/ 

function scrollup(){
   const scrollUp = document.querySelector(".scrollup")

   if(this.scrollY >= 560 ) scrollUp.classList.add("show-scrollbtn"); else scrollUp.classList.remove("show-scrollbtn")
}
window.addEventListener("scroll" , scrollup)

/*==================== DARK LIGHT THEME ====================*/ 

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})