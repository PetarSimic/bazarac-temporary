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


    $('.main-slider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        speed: 1000,
        //speed: 500,
        //fade: true,
        //cssEase: 'linear',
        pauseOnHover: false,
        pauseOnFocus: false
    });


    $('.slick-type2').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
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

});