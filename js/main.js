// < ============== NavBar Menu =============== >
function toggele() {
    document.getElementById('menu').classList.toggle('d-none');
    document.getElementById('close').classList.toggle('d-none');
    document.querySelector('.navbar-nav').classList.toggle('end-0');
};
// < ============== Button Scroll =============== >
let btnScroll = document.getElementById('btnScroll');
btnScroll.onclick = () => scroll({ top: 0 });
onscroll = () => btnScroll.classList.toggle('bottom-0', window.scrollY >= 250);
/* < ================== FEATURED SWIPER ================= > */
let swiperFeatured = new Swiper('.Annonce_annonce', {
    loop: true,
    spaceBetween: 16,
    grabCursor : true,
    slidesPerView : 'auto',
    centeredSlides : 'auto',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    breakpoints: {
        991: {
            slidesPerView : 3,
            centeredSlides : false,
        },
        576: {
            slidesPerView : 2,
            centeredSlides : false,
        },
        390: {
            slidesPerView : 1,
            centeredSlides : false,
        }
    }
});
/* < ================== GALERIE SWIPER ================= > */
// selecte the principale image
let img_home = document.getElementById('img_home');
function change(source) {
    img_home.src = source
}
// swiper image
let GalerieSwiper = new Swiper('.Galerie_swiper', {
    loop: true,
    spaceBetween: 0,
    grabCursor : true,
    slidesPerView : 'auto',
    centeredSlides : 'auto',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    breakpoints: {
        320: {
            slidesPerView : 4,
            centeredSlides : false,
        },
    }
});
