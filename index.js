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

  $("#link-poetic-computation").click(function(){
    $("#poetic-computation").toggleClass("hide");
    $("#link-poetic-computation").toggleClass("active-link");
    // $("#poetic-computation").addClass("z");
  });

  $("#link-zoom").click(function(){
    $("#zoom").toggleClass("hide");
    $("#link-zoom").toggleClass("active-link");
    // $("#zoom").addClass("z");
  });

  $("#link-dark-matter").click(function(){
    $("#dark-matter").toggleClass("hide");
    $("#link-dark-matter").toggleClass("active-link");
    // $("#dark-matter").addClass("z");
  });

  $(function() {
      $( ".page" ).draggable();
    });

});
