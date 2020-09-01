$( document ).ready(function() {

  var pages = ["poetic-computation", "zoom", "dark-matter"];

  $("#link-stack").click(function(){
    $(".page").addClass("stack");
    $(".link-unstack").removeClass("hide");
    $(".link-stack").addClass("hide");
  });

  $("#link-unstack").click(function(){
    $(".page").removeClass("stack");
    $(".link-unstack").addClass("hide");
    $(".link-stack").removeClass("hide");
  });

  $("#link-hide").click(function(){
    $(".page").toggleClass("hidepages");
  });

  $("#intro-link").click(function(){
    $("#introduction").removeClass("introduction-z").addClass("current-z").removeClass("hidepages").removeClass("hide");
    $("#contributors").addClass("contributors-z").removeClass("current-z");
    $("#acknowledgements").addClass("acknowledgements-z").removeClass("current-z");
  });

  $("#contrib-link").click(function(){
    $("#contributors").removeClass("contributors-z").addClass("current-z").removeClass("hidepages").removeClass("hide");
    $("#introduction").addClass("introduction-z").removeClass("current-z");
    $("#acknowledgements").addClass("acknowledgements-z").removeClass("current-z");
  });


  $("#ack-link").click(function(){
    $("#acknowledgements").removeClass("acknowledgements-z").addClass("current-z").removeClass("hidepages").removeClass("hide");
    $("#contributors").addClass("contributors-z").removeClass("current-z");
    $("#introduction").addClass("introduction-z").removeClass("current-z");
  });

  $("#link-poetic-computation").click(function(){
    $("#poetic-computation").toggleClass("hide");
    $("#link-poetic-computation").toggleClass("active-link");
    $("#poetic-computation").removeClass("stack").removeClass("hidepages");
  });

  $("#link-zoom").click(function(){
    $("#zoom").toggleClass("hide");
    $("#link-zoom").toggleClass("active-link");
    $("#zoom").removeClass("stack").removeClass("hidepages");
  });

  $("#link-dark-matter").click(function(){
    $("#dark-matter").toggleClass("hide");
    $("#link-dark-matter").toggleClass("active-link");
    $("#dark-matter").removeClass("stack").removeClass("hidepages");
  });

  $(function() {
      $( ".page" ).draggable();
    });

});
