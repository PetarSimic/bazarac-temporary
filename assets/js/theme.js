$(document).ready(function(){

    //fake checkbox
    $(".fake-checkbox .checkbox").on("change", function(){
        $(this).siblings("label").toggleClass("active");
    });

    //custom dropdown
    function customDropdown(){
        $(".drop-trigger").on("click", function(){
            if($(this).hasClass("open")){
                $(this).closest(".drop-holder").find(".drop-content-holder").removeClass("open").slideUp();
                $(this).removeClass("open");
            }else{
                $(".drop-content-holder").removeClass("open").slideUp();
                $(".drop-trigger").removeClass("open");
                $(this).closest(".drop-holder").find(".drop-content-holder").addClass("open").slideDown();
                $(this).addClass("open");
            }
        });
    }
    customDropdown();

    //custom dropdown close on click outside
    $(document).click(function(e) {
        if (!($(e.target).is(".drop-trigger, .drop-trigger *, .drop-content-holder, .drop-content-holder *"))) {
            $(".drop-content-holder").slideUp().removeClass("open");
            $(".drop-trigger").removeClass("open");
        }
    });


    //image positioning
    function imagePositioning(){
        $('.js-cover-img').delay(10).queue(function(  ) {

            var image = $(this),
                imageHolder = $(this).closest('.js-cover-img-holder');
            image.src = $(this).attr("src");
            var imageHeight = image.get(0).naturalHeight,
                imageWidth = image.get(0).naturalWidth,
                imageHolderHeight = imageHolder.height(),
                imageHolderWidth = imageHolder.width();

            //console.log(imageHolderHeight);
            //console.log(imageHolderWidth);

            var imgProp = imageHeight/imageWidth,
                imgHolderProp = imageHolderHeight/imageHolderWidth;
            if( imgProp > imgHolderProp ) {
                $(this).addClass('align-width');
            }else{
                $(this).addClass('align-height');
            }
        });
    };


    $('.main-slider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        speed: 1000,
        arrows: false,
        //speed: 500,
        //fade: true,
        //cssEase: 'linear',
        pauseOnHover: false,
        pauseOnFocus: false
    });


    $('.slick-type2').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1700,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });


    $('.slick-type3').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });


    $('.slick-type4').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });




    imagePositioning();

    var resizeTimer;
    $(window).on('resize', function(e) {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            wHelper =  $("#js_width-helper").width();

            imagePositioning();

        }, 10);
    });

});