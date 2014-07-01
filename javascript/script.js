$(document).ready(function(){
		alert("hi");
	// $('input').keydown(function(e) {
 //  if (e.keyCode == 13) {
 //  $(this).closest('form').submit(function(){
 //  	alert("hi");
 //  });
 //  }
// });

	// $("#item").submit(function() {
	// 	alert("hello world");
	// });
$("#item").keypress (function(e) {
        if (e.keyCode == 13) {
            alert("Enter pressed");
        };
	});
});