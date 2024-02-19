jQuery(function(){
    $(".popular-game-slider  .game-box-slide").each(function(){
        var imgSrc = $(this).children().attr("src");
        console.log(imgSrc)
        $(this).append('<img class="bg-img" src="' + imgSrc +'"/> ');
        
    })


    $('.popular-game-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        arrows: true,
        slidesToShow: 1,
      });


      //Mobile Nav
    $(".burger-btn").click(function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $('.nav-menu').css({
                'height': '0',
                'width': '0'
            });
        }else{
            $(this).addClass('active');
            $('.nav-menu').animate({
                "width": "100%"
            }, 100).css("height", "auto");
        }
    })
});