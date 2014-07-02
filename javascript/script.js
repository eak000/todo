$(document).ready(function(){

	$("#item").keypress (function(e) {
        if (e.keyCode == 13) {
            // alert("Enter pressed");

						if($("#item").val()=='') {
       					alert("please enter some shit to get done");
       				}
       			else {

       				var new_task = $('#item').val();
       				alert(new_task);
       				$("#list ul").append('<li><input type="text"></li>').val(new_task)
       				// $("this").addClass(".notdone")
       			};
        
    		 };
 
	});
});