// Menu Show
const showMenu = (toogleId, navId) =>{
    const toogle =document.getElementById(toogleId),
    nav = document.getElementById(navId)

    if(toogle&&nav){
        toogle.addEventListener('click',()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toogle','nav-menu')

// ACTIVE and REMOVE Menu
const navLink = document.querySelectorAll('.nav_link')

function linkAction() {
    // Active Link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    // Remove menu Mobile
    const navMenu = document.getElementById('nav_menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

//Portfolio Slider
$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });