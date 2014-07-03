$(document).ready(function(){

	$("#item").keypress (function(e) {
        if (e.keyCode == 13) {
            // alert("Enter pressed");
            event.preventDefault();

						if($("#item").val()=='') {
       					alert("please enter some sh!t to get done");
       				}
       			else {

       				// var new_task = $('#item').val();
       				// var new_item = $("#list ul").append('<li class="notdone"><span class="list_item"></span></li>');
           //    var new_content = $(".list_item").text(new_task);

       				$("#list ul").append('<li class="notdone"><span class="list_item">'+ $('#item').val() + '</span></li>');              
       				// $("new_item").text(new_task);
              
       		     };
        
    		  };
 
	 });
});