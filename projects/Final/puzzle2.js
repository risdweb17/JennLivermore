$(document).ready(function(){

// UNDERLINE TEXT / ALT TEXT ON CLICK ///////////////////////////////////
	$('.text, .truth').click(function(){
		console.log('click');
		$('.text, .truth').css('text-decoration', 'underline');
		$('.alttext, .alttruth').css('text-decoration', 'none');	
		});


	$('.alttext, .alttruth').click(function(){
		$('.alttext, .alttruth').css('text-decoration', 'underline');
		$('.text, .truth').css('text-decoration', 'none');
		});

// FADE INTRO ///////////////////////////////////
	$('strong, .normal, .highlight, .intro a').fadeTo( "fast", .01, function() {});
	$('.arrow').hide();

	$('.alttext').click(function() {
		$('strong, .normal, .highlight, .intro a').fadeTo("slow", .01, function() {});
	});
	$('.text').click(function() {
		$('strong, .normal, .highlight, .intro a').fadeTo("slow", 1, function() {});
		$('.arrow').show();
	});
});

// SLIDE IN ON SCROLL DIVS///////////////////////////////////
(function($) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };
    
})(jQuery);

$(window).scroll(function(event) {
  
  $(".box.slide").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in"); 
    } 
  });
 });

// SLIDE IN ON LOAD DIV///////////////////////////////////
$(document).ready(function(event) {
  $(".ag").addClass("come-in"); 
  });

// SCROLL IMAGES ON LOAD ///////////////////////////////////
	$(window).load(function(){

	$('#one').scrollTop(1);
	$('#one').scrollLeft(1);

	$('#two').scrollTop(50);
	$('#two').scrollLeft(500);

	$('#three').scrollTop(1);
	$('#three').scrollLeft(300);

	$('#four').scrollTop(500);
	$('#four').scrollLeft(305);

	$('#five').scrollTop(160);
	$('#five').scrollLeft(1);

	$('#six').scrollTop(1);
	$('#six').scrollLeft(1);

	$('#seven').scrollTop(1);
	$('#seven').scrollLeft(1);

	$('#eight').scrollTop(200);
	$('#eight').scrollLeft(460);

	$('#nine').scrollTop(130);
	$('#nine').scrollLeft(370);

	$('#ten').scrollTop(600);
	$('#ten').scrollLeft(600);

	$('#eleven').scrollTop(70);
	$('#eleven').scrollLeft(170);

	$('#twelve').scrollTop(1);
	$('#twelve').scrollLeft(160);

	$('#thirteen').scrollTop(1);
	$('#thirteen').scrollLeft(1);

	$('#fourteen').scrollTop(1);
	$('#fourteen').scrollLeft(130);

	$('#fifteen').scrollTop(1);
	$('#fifteen').scrollLeft(480);

	$('#sixteen').scrollTop(300);
	$('#sixteen').scrollLeft(660);

	$('#seventeen').scrollTop(1);
	$('#seventeen').scrollLeft(1);

	$('#eighteen').scrollTop(500);
	$('#eighteen').scrollLeft(400);
	});

// SCROLL ON CLICK ///////////////////////////////////
$(document).ready(function(){
	$('.truth').click(function(){
		$('#one').animate({ scrollTop: 280, scrollLeft: 500 }, 1000);
		$('#two').animate({ scrollTop: 400, scrollLeft: 1 }, 1000); /*first*/
		$('#three').animate({ scrollTop: 1, scrollLeft: 50 }, 1000);
		$('#four').animate({ scrollTop: 60, scrollLeft: 380 }, 1000); /*first*/
		$('#five').animate({ scrollTop: 60, scrollLeft: 355 }, 1000);
		$('#six').animate({ scrollTop: 300, scrollLeft: 730 }, 1000);
		$('#seven').animate({ scrollTop: 150, scrollLeft: 500 }, 1000);
		$('#eight').animate({ scrollTop: 40, scrollLeft: 400 }, 1000); 
		$('#nine').animate({ scrollTop: 200, scrollLeft: 570 }, 1000);
		$('#ten').animate({ scrollTop: 190, scrollLeft: 300 }, 1000);
		$('#eleven').animate({ scrollTop: 0, scrollLeft: 700 }, 1000);
		$('#twelve').animate({ scrollTop: 230, scrollLeft: 100 }, 1000);
		$('#thirteen').animate({ scrollTop: 260, scrollLeft: 380 }, 1000);
		$('#fourteen').animate({ scrollTop: 260, scrollLeft: 650 }, 1000);
		$('#fifteen').animate({ scrollTop: 100, scrollLeft: 160 }, 1000);
		$('#sixteen').animate({ scrollTop: 300, scrollLeft: 80 }, 1000);	
		$('#seventeen').animate({ scrollTop: 600, scrollLeft: 300 }, 1000);
		$('#eighteen').animate({ scrollTop: 290, scrollLeft: 175 }, 1000);
	});
});

$(document).ready(function(){
	$('.alttruth').click(function(){
		$('#one').animate({ scrollTop: 1, scrollLeft: 1 }, 1000);
		$('#two').animate({ scrollTop: 50, scrollLeft: 500 }, 1000); /*first*/
		$('#three').animate({ scrollTop: 1, scrollLeft: 300 }, 1000);
		$('#four').animate({ scrollTop: 500, scrollLeft: 305 }, 1000); /*first*/
		$('#five').animate({ scrollTop: 160, scrollLeft: 1 }, 1000);
		$('#six').animate({ scrollTop: 1, scrollLeft: 1 }, 1000);
		$('#seven').animate({ scrollTop: 1, scrollLeft: 1 }, 1000);
		$('#eight').animate({ scrollTop: 200, scrollLeft: 460 }, 1000); 
		$('#nine').animate({ scrollTop: 130, scrollLeft: 370 }, 1000);
		$('#ten').animate({ scrollTop: 600, scrollLeft: 600 }, 1000);
		$('#eleven').animate({ scrollTop: 70, scrollLeft: 170 }, 1000);
		$('#twelve').animate({ scrollTop: 1, scrollLeft: 160 }, 1000);
		$('#thirteen').animate({ scrollTop: 1, scrollLeft: 1 }, 1000);
		$('#fourteen').animate({ scrollTop: 1, scrollLeft: 130 }, 1000);
		$('#fifteen').animate({ scrollTop: 1, scrollLeft: 480 }, 1000);
		$('#sixteen').animate({ scrollTop: 300, scrollLeft: 660 }, 1000);	
		$('#seventeen').animate({ scrollTop: 1, scrollLeft: 1 }, 1000);
		$('#eighteen').animate({ scrollTop: 500, scrollLeft: 400 }, 1000);
	});
});

// NAV SCROLL ///////////////////////////////////
$(document).ready(function(){
	$('.down').click(function(){
		$('body').animate({ scrollTop: '+=790'}, 1000);
	});
	$('.up').click(function(){
		$('body').animate({ scrollTop: 0}, 1000);
	});
});

$(document).ready(function(){
	$(window).scroll(function() {

	   if($(window).scrollTop() + $(window).height() == $(document).height()) {
	       console.log("we at the bottom");
	       $('.down').hide();
		   $('.up').show();
	   }else{
	   	   $('.down').show();
	   	   $('.up').hide();
	   }
	});
});

// JQUERY GRAVEYARD ///////////////////////////////////

// SCROLL INTRO ON LOAD ///////////////////////////////////
// $(document).ready(function(){
// 	$('#bigContainer').scrollTop(680);
// });

// SCROLL INTRO ON CLICK ///////////////////////////////////
// $(document).ready(function(){
// 	$('.alttext').click(function(){
// 		$('#bigContainer').animate({ scrollTop: 680}, 1000);
// 	});
// });

// $(document).ready(function(){
// 	$('.text').click(function(){
// 		$('#bigContainer').animate({ scrollTop: 0}, 1000);
// 	});
// });

// SWITCH UNDERLINED TITLE ON SCROLL ///////////////////////////////////
// $(document).ready(function(){
// $('#bigContainer').scroll(function(){
//     if($('#bigContainer').scrollTop() > 500)
//     {   
//         $('.alttext').css('text-decoration', 'underline');
// 		$('.text').css('text-decoration', 'none');
//     }

//     else if($('#bigContainer').scrollTop() < 500)
//     {   
//         $('.text').css('text-decoration', 'underline');
// 		$('.alttext').css('text-decoration', 'none');
//     }
// 	});
// });