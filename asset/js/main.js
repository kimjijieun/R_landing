$(function(){
    $(window).on('scroll', function (){
        curr = $(this).scrollTop();
        workHeight = $('.sc-about').outerHeight();
    
        // let rolling = gsap.timeline({})
    
    
        if (curr > workHeight) {
            $('.header .logo-wrap, .btn-menu').addClass('on');
        } else {
            $('.header .logo-wrap, .btn-menu').removeClass('on');
        }
    })

    // $('.header .btn-menu, .link-nav:last-child').click(function(e){
    //     e.preventDefault();

    //     $('.header .btn-menu').toggleClass('active');
    //     $('.header .menu-wrap').toggleClass('active');

    //     // $('.link-nav:last-child').toggleClass('show');
        
    //     // if ($(window).scrollTop() == 0) {
    //     //     if ($('.header .btn-menu').hasClass('on')) {
    //     //         $('.header .btn-menu').removeClass('on');
    //     //     }else {
    //     //     $('.header .btn-menu').addClass('on');
    //     //     }
    //     // } 

        
    // });
});