$(function(){
	$('.j-Slider').slick({
		autoplay: true,
		adaptiveHeight:true,
		arrows : true,
		dots: true,
		responsive: [{
			breakpoint: 768,
			settings: {
			arrows : false
		}
		}, ]
	});
});

$(function(){
	$(".toggleMobMenu").on("click",function(){
		$(".menuContent").stop().slideToggle();
	});
});






$(window).resize(function(){


if ( $(window).width() > 768 ) {
        window.setTimeout('location.reload()');


        
    };



});