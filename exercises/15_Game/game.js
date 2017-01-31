

// var pear=['bartlet', 'bosc', 'comice']
// var country=['USA', 'Western Europe', 'Eastern Europe']

// // var pear="";
// // var country"";

// for (var i = 0; i < pear.length; i++) {
//   console.log(pear[i]);
  
//   for (var j = 0; j < country.length; j++){
//   	console.log(country[j]);
    
//     if (pear[i] === country[j]) {
//       console.log('YES!');
// 	} else {
// 	  console.log('NO!');
// 	}
//   }
// }

// 	var choice1="";
// 	var choice2="";

// $('container').click(function(){
// 		choice1 = $(this).attr('class');
// 		console.log(choice1);
// 	});

$(document).ready(function(){

	var choice1="";
	var choice2="";
	var score = 0;

	$('.pear').click(function(){
		choice1 = $(this).attr('id');
		console.log(choice1);
	});

	$('.country').click(function(){
		choice2 = $(this).attr('id');
		console.log(choice2);
		if(choice1===choice2){
	   		score++;
	   		$("#score").text(score);
	   		
	   		if (score===3){
	   			endGame();
	   		} else {
	   			console.log(score);
	   			console.log("correct");
	   			$("#message").finish().fadeIn("fast").text("yup!").delay(500).fadeOut("slow");
	   		}			   		
		}
	   	else {
	   			console.log("wrong");
	   			$("#message").finish().fadeIn("fast").text("nope").delay(500).fadeOut("slow");
	   	}	
		
	});

	function endGame(){
		console.log("end game");
	   	$("#message").finish().fadeIn("fast").text("Yay! You've beat the game").delay(500).fadeOut("slow");
	}
});