	var loop = "";

for (var i = 0; i < 7; i++) {
  // console.log("1st console.log " + loop);
  loop = loop+"x";
  console.log(loop);
}


var cereal = ['cheerios', 'lucky charms', 'cocoa puffs',  'cinnamon toast crunch', 'oatmeal', 'kashi', 'raisin bran', 'kix', 'puffins', 'granola'];

console.log(' ');

console.log('Types of Cereal');

// console.log("Number of items in my cereal array is " + cereal.length);




$(document).ready(function(){

	for (var i = 0; i < cereal.length; i++) {
	  console.log(cereal[i]);
	  $('.printCereal').append(cereal[i] + "<br>");
	}

});