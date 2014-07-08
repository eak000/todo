$(document).ready(function(){

  $("#addToList").on("click", function(e){
      addItems(e);
})

      var uncheck= "&#xe603;"
      var check= "&#xe600;"

	$("#item").on("keypress", function(e) {


        if (e.keyCode == 13) {
          addItems(e);

    		  };
       
       $(".checkmark").on("click", function() {
          // alert($(this));

          if ($(this).attr('data-icon') == '\ue603') {
            $(this).attr('data-icon', '\ue600').removeClass("notdone").addClass("done")
          }
          else {
            $(this).attr('data-icon', '\ue603').removeClass("done").addClass("notdone")
          };
        });
	 });
        var addItems =function(e) {
              e.preventDefault();

            //make sure the input isn't blank
            if($("#item").val()=='') {
                alert("please enter some sh!t to get done");
              }

            else {
              //add list item and give it notdone style
              $("#list ul").append('<li class="notdone"><span aria-hidden="true" data-icon= '+ uncheck +' class="checkmark undone"></span><span class="list_item">'+ $('#item').val() + '</span><span aria-hidden="true" data-icon="&#xe601;" class="delete"></span></li>');              
              // clear input box
              $("#item").val("");
               };
        };

});


