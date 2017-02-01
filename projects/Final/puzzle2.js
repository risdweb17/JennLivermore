
// $(document).ready(function(){
// 	$('h1').bind('click', function(){
// 	$('#one').scrollLeft(500)
// 	$('h1').unbind('click');
// 	});
// });

$(document).ready(function() {
    $('body').fadeIn(2000);
});

$(document).ready(function(){
	$('#one').scrollLeft(500)
	});

$(document).ready(function(){
	$('h1').click(function(){
	$('#one').scrollLeft(100)
	$('#one').scrollTop(100)
	$('h1').css('text-decoration', 'underline')
	});
});

// $(document).ready(function(){
// 	if 
// 		$('h1').click(function(){
// 		$('h1').css('text-decoration', 'underline')
// 	// else
// 	// 	$('h1').css('text-decoration', 'none');
// 		});
// 	});

	// $('h1').css('text-decoration', 'underline')


	//  $('input[name="textStyle"]').change(function(){
 //        if ($(this).val() == 'bold'){
 //            if ($(this).is(':checked')) $('input[name="styledText"]').css('font-weight', 'bold');
 //            else $('input[name="styledText"]').css('font-weight', 'normal');
 //        }
 //        else if ($(this).val() == 'italic'){
 //            if ($(this).is(':checked')) $('input[name="styledText"]').css('font-style', 'italic');
 //            else $('input[name="styledText"]').css('font-style', 'normal');
 //        }
 //        else if ($(this).val() == 'underline'){
 //            if ($(this).is(':checked')) $('input[name="styledText"]').css('text-decoration', 'underline');
 //            else $('input[name="styledText"]').css('text-decoration', 'none');
 //        }
 //    });