$(document).ready(function(){

  $("#addToList").click(function(e){
      addItems(e);
})

      var uncheck= "&#xe603;"
      var check= "&#xe600;"

	$("#item").keypress (function(e) {


        if (e.keyCode == 13) {
          addItems(e);

    		  };
       
       $(".unchecked").click(function() {
          // alert($(this));

          $(this).attr('data-icon', check).addClass('ui-icon-check');

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
              $("#list ul").append('<li class="notdone"><span aria-hidden="true" data-icon= '+ uncheck +' class="unchecked"></span><span class="list_item">'+ $('#item').val() + '</span><span aria-hidden="true" data-icon="&#xe601;" class="delete"></span></li>');              
              // clear input box
              $("#item").val("");
               };
        };

});