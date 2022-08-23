
$(document).ready(function(){
	$('.slider').slick({
		arrows:false,
		dots:false,
		slidesToShow:1,
		autoplay:true,
		speed:1000,
		autoplaySpeed:800,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});

$('body').on('change',".radios",  function() {
	var rudionBut = $(this).attr('data-id');
		$('#'+rudionBut).empty();
		$('#'+rudionBut).append('<img class="activeRadio" src="res/active.png">');
		$(this).attr('data-active', '1');
		$(this).attr('class', 'd-flex radios underline');
});

