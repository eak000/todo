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
       				$("#list ul").append('<li><span class="list_item"></span></li>');              // $(".list_item").
       				$(".list_item").text(new_task);
              $(".list_item").addClass("notdone");
              
       			};
        
    		 };
 
	});
});