$(document).ready(function(){

  // function to use add list items
  $("#addToList").on("click", function(e){
      addItems(e);
  })

      var uncheck= "&#xe603;"
      var check= "&#xe600;"

  // function to use enter key
	$("#item").on("keypress", function(e) {


        if (e.keyCode == 13) {
          addItems(e);

    		  };
    });         
       
      
        // toggles checkmark 

        $('.list').on("click", '.checkmark', function () {
            // alert($(this));

            var isDone = $(this).hasClass("done");
            $(this).attr('data-icon', isDone ? '\ue603' : '\ue600').toggleClass("notdone", isDone).toggleClass("done", !isDone)

            $(this).next().toggleClass("grayedout", !isDone)

        });

        $('.list').on("click", '.delete', function () {
            // alert("delete me!");
            $(this).closest("li").remove();
        });


        var addItems =function(e) {
              e.preventDefault();

            //make sure the input isn't blank
            if($("#item").val()=='') {
                alert("please enter some sh!t to get done");
              }

            else {
              //add list item 
              $("#list ul").append('<li><span aria-hidden="true" data-icon= '+ uncheck +' class="checkmark"></span><span class="list_item">'+ $('#item').val() + '</span><span aria-hidden="true" data-icon="&#xe601;" class="delete"></span></li>');              
              // clear input box
              $("#item").val("");
               };
        };

});


