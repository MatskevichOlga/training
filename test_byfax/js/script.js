
/*scroll animation*/

const animItems=document.querySelectorAll('.anim-items');
if(animItems.length>0){
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(){
        for(let index=0; index<animItems.length; index++){
            const animItem=animItems[index];
            const animItemHeight= animItem.offsetHeight;
            const animItemOffset= offset(animItem).top;
            const animStart=4;

            let animItemPoint=window.innerHeight-animItemHeight/animStart;
            if(animItemHeight>window.innerHeight){
                animItemPoint=window.innerHeight-window.innerHeight/animStart;

            }
            if((pageYOffset>animItemOffset-animItemPoint)&&pageYOffset<(animItemOffset+animItemHeight)){
                animItem.classList.add('animActive');
        
            } else{
                if(!animItem.classList.contains('anim-no-hidden')){
                animItem.classList.remove('animActive');
            }
        }
    }
}
    function offset(el){
        const rect=el.getBoundingClientRect(),
        scrollLeft=window.pageXOffset||document.documentElement.scrollLeft,
        scrollTop=window.pageYOffset||document.documentElement.scrollTop;
        return{top:rect.top+scrollTop, left:rect.left+scrollLeft}
    }
    setTimeout(()=>{
        animOnScroll();
    }, 300);
    
}


/*settings slick-slider*/
$(document).ready(function(){
    $('.slider').slick({
        arrows: false,
        dots: true,
        adaptiveHeight: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        easing: 'easy',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnDotsHover: true,
        centerMode: true,
        variableWidth: false,
        speed: 500,
        fade: true,

    });
    
});


/*burger handler*/
(function() {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header-menu');
    const menuCloseItem = document.querySelector('.header-nav-close');
    let menuItem = document.querySelector('.link1');
    let menuItem1 = document.querySelector('.link2');
    let menuItem2 = document.querySelector('.link3');
    let menuItem3 = document.querySelector('.link4');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header-menu-active');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header-menu-active');
    });
    menuItem.addEventListener('click', () => {
        menu.classList.remove('header-menu-active');
    });
    menuItem1.addEventListener('click', () => {
        menu.classList.remove('header-menu-active');
    });
    menuItem2.addEventListener('click', () => {
        menu.classList.remove('header-menu-active');
    });
    menuItem3.addEventListener('click', () => {
        menu.classList.remove('header-menu-active');
  });
  }());