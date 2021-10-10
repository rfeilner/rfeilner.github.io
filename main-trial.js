// Adjust parallax scrolling height.
adjustHeight = function( obj, newHeight ) {
  $( obj ).height( newHeight )
};
$( document ).ready( function() {
  adjustHeight( ".parallax", $( window ).height() );
});
$( window ).resize( function() {
  adjustHeight( ".parallax", $( window ).height() );
});

// Change gallery thumbnail images upon hover/mouse-over
//$.fn.thumbnail_hover_changer=function(element, image_mouseout, image_mouseover){
//	$(document).ready(function(){
//		$(element).mouseover(function(){
//			$(this).attr("src", image_mouseover);
//		});
//		$(element).mouseout(function(){
//			$(this).attr("src", image_mouseout);
//		});
//	});
//};
//// 3D Animated Music Videos
//$.fn.thumbnail_hover_changer("#animation img", "Multimedia Art Portfolio/1. 3D Animated Music Video Clips/a. Pyromaniac Symphony Image.png", "a. Pyromaniac Symphony Image-600x600-darkened.png");


//$.fn.thumbnail_hover_changer=function(){
//	$(document).ready(function(){
//		// 3D Animated Music Videos
//		$("#animation img").mouseover(function(){
//			$(this).attr("src", "Gallery Images/animation - Pyromaniac Symphony Image-600x600-darkened.png");
//		});
//		$("#animation img").mouseout(function(){
//			$(this).attr("src", "Gallery Images/animation - Pyromaniac Symphony Image.png");
//		});
//	});
//});
//$.fn.thumbnail_hover_changer();

// Fade images in and out to show changes
//$.fn.fade_cycle=function(){
//	$(document).ready(function(){
//		$("#fade_cycled_picture_overlay").fadeIn(3000, function() {
//			$("#fade_cycled_picture_overlay").fadeOut(3000, function() {
//				$.fn.fade_cycle()
//			});
//		});
//	});
//};
//$.fn.fade_cycle()
