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
       				$("#list ul").append('<li class="notdone"><span aria-hidden="true" data-icon="&#xe603;" class="unchecked"></span><span class="list_item">'+ $('#item').val() + '</span><span aria-hidden="true" data-icon="&#xe601;" class="delete"></span></li>');              
       				// clear input box
              $("#item").val("");
       		     };
    		  };
       
       $(".unchecked").click(function() {
          alert("you clicked the check!");
        });
	 });


});