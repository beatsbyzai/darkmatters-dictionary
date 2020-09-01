$( document ).ready(function() {

  $("#intro-link").click(function(){
    $("#introduction").removeClass("introduction-z").addClass("current-z");
    $("#contributors").addClass("contributors-z").removeClass("current-z");
    $("#acknowledgements").addClass("acknowledgements-z").removeClass("current-z");
  });

  $("#contrib-link").click(function(){
    $("#contributors").removeClass("contributors-z").addClass("current-z");
    $("#introduction").addClass("introduction-z").removeClass("current-z");
    $("#acknowledgements").addClass("acknowledgements-z").removeClass("current-z");
  });


  $("#ack-link").click(function(){
    $("#acknowledgements").removeClass("acknowledgements-z").addClass("current-z");
    $("#contributors").addClass("contributors-z").removeClass("current-z");
    $("#introduction").addClass("introduction-z").removeClass("current-z");
  });

  $(function() {
      $( ".page" ).draggable();
    });

});
