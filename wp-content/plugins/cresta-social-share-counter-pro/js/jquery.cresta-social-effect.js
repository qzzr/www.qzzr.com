(function($) {
	"use strict";
	
	$(document).ready(function() {
		$("#crestashareicon .sbutton").each(function(index) {
			$(this).delay(150*index).fadeIn(500).addClass("animated "+ $("#crestashareicon .sbutton").attr('data-anim') );
		});
		$('#crestashareicon .sbutton').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
			$(this).removeClass("animated "+ $("#crestashareicon .sbutton").attr('data-anim') );
		});
		$('.cresta-the-button').click(function() {
			$('#crestashareicon .sbutton').fadeToggle(400);
			$('.cresta-the-button').html($('.cresta-the-button').html() == '<i class="c-icon-cresta-minus"></i>' ? '<i class="c-icon-cresta-plus"></i>' : '<i class="c-icon-cresta-minus"></i>');
		});
	});
	
})(jQuery);