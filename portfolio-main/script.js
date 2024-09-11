document.addEventListener('DOMContentLoaded',function(){
    const menuToggel=document.querySelector(".navbar-menu-toggle");
    const navbarLink=document.querySelector(".navbar-links");
    const navbarSocial=document.querySelector('.navbar-social');
    const hamburgerIcon=document.querySelector('.fa-bars');
    const colseIcon=document.querySelector('.fa-xmark');

    menuToggel.addEventListener('click',function (){
        navbarLink.classList.toggle('active');
        navbarSocial.classList.toggle('active');
        hamburgerIcon.style.display=navbarLink.classList.contains('active')?'none':'block';
        colseIcon.style.display=navbarLink.classList.contains('active')?'block':'none';
    })

    window.addEventListener('scroll',function(){
        var scrollToTop=this.document.getElementById('scrollToTop');
        if(window.pageYOffset>300){
            scrollToTop.classList.add('show');
        }
        else{
            scrollToTop.classList.remove('show');
        }
    })
    document.getElementById('scrollToTop').addEventListener('click',function(){
        window.scrollTo({top:0,behavior:'smooth'});
    })

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
    
})