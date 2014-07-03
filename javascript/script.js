$(document).ready(function(){

	$("#item").keypress (function(e) {
        if (e.keyCode == 13) {

            event.preventDefault();

            //make sure the input isn't blank
						if($("#item").val()=='') {
       					alert("please enter some sh!t to get done");
       				}

       			else {
              //add list item and give it notdone style
       				$("#list ul").append('<li class="notdone"><span class="list_item">'+ $('#item').val() + '</span></li>');              
       				// clear input box
              $("#item").val("");
       		     };
        
    		  };
 
	 });
});