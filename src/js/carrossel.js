window.addEventListener("load", ()=>{
    $('.carousel').slick({
        dots: true,
        slidesToShow: 3,
        centerMode: true,
        arrows: false,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 800,
            settings: {
              slidesToShow: 1,
              centerMode: false,
              slidesToScroll: 1
            }
        }]
    })
})