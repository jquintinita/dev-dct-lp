jQuery(function(){
  var acc = document.getElementsByClassName("accordion"); var i; for (i = 0; i < acc.length; i++) { acc[i].addEventListener("click", function() { this.classList.toggle("active"); var panel = this.nextElementSibling; if (panel.style.display === "block") { panel.style.display = "none"; } else { panel.style.display = "block"; } }); }


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



      $('.promo-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
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