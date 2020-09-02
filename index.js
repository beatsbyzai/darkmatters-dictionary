

$( document ).ready(function() {



  var pages = ["poetic-computation", "zoom", "dark-matter"];

  $("#link-stack").click(function(){
    $(".page").toggleClass("stack");
    // $(".link-unstack").removeClass("hide");
    // $(".link-stack").addClass("hide");
  });

  // $("#link-unstack").click(function(){
  //   $(".page").removeClass("stack");
  //   $(".link-unstack").addClass("hide");
  //   $(".link-stack").removeClass("hide");
  // });

  $("#link-hide").click(function(){
    $(".page").toggleClass("hidepages");
    // $(".back").toggleClass("z");
    // $(".spine").toggleClass("z");
    // $(".cover").toggleClass("z");
  });

  $("#intro-link").click(function(){
    $("#introduction").removeClass("introduction-z").addClass("current-z").removeClass("hidepages").removeClass("hide");
    $("#contributors").addClass("contributors-z").removeClass("current-z");
    $("#acknowledgements").addClass("acknowledgements-z").removeClass("current-z");
    $("#how-to-cite").addClass("cite-z").removeClass("current-z");
    $("#public-readings").addClass("read-z").removeClass("current-z");
    $("#link-hide").removeClass("hide");
    $("#link-stack").removeClass("hide");

    $("#intro-link").addClass("strike");
    $("#contrib-link").removeClass("strike");
    $("#ack-link").removeClass("strike");
    $("#cite-link").removeClass("strike");
    $("#read-link").removeClass("strike");
  });

  $("#contrib-link").click(function(){
    $("#contributors").removeClass("contributors-z").addClass("current-z").removeClass("hidepages").removeClass("hide");
    $("#introduction").addClass("introduction-z").removeClass("current-z");
    $("#acknowledgements").addClass("acknowledgements-z").removeClass("current-z");
    $("#public-readings").addClass("read-z").removeClass("current-z");
    $("#how-to-cite").addClass("cite-z").removeClass("current-z");
    $("#link-hide").removeClass("hide");
    $("#link-stack").removeClass("hide");

    $("#intro-link").removeClass("strike");
    $("#contrib-link").addClass("strike");
    $("#ack-link").removeClass("strike");
    $("#cite-link").removeClass("strike");
    $("#read-link").removeClass("strike");
  });


  $("#ack-link").click(function(){
    $("#acknowledgements").removeClass("acknowledgements-z").addClass("current-z").removeClass("hidepages").removeClass("hide");
    $("#contributors").addClass("contributors-z").removeClass("current-z");
    $("#introduction").addClass("introduction-z").removeClass("current-z");
    $("#public-readings").addClass("read-z").removeClass("current-z");
    $("#how-to-cite").addClass("cite-z").removeClass("current-z");
    $("#link-hide").removeClass("hide");
    $("#link-stack").removeClass("hide");

    $("#intro-link").removeClass("strike");
    $("#contrib-link").removeClass("strike");
    $("#ack-link").addClass("strike");
    $("#cite-link").removeClass("strike");
    $("#read-link").removeClass("strike");
  });

  $("#cite-link").click(function(){
    $("#how-to-cite").removeClass("cite-z").addClass("current-z").removeClass("hidepages").removeClass("hide");
    $("#introduction").addClass("introduction-z").removeClass("current-z");
    $("#acknowledgements").addClass("acknowledgements-z").removeClass("current-z");
    $("#contributors").addClass("contributors-z").removeClass("current-z");
    $("#public-readings").addClass("read-z").removeClass("current-z");
    $("#link-hide").removeClass("hide");
    $("#link-stack").removeClass("hide");

    $("#intro-link").removeClass("strike");
    $("#contrib-link").removeClass("strike");
    $("#ack-link").removeClass("strike");
    $("#cite-link").addClass("strike");
    $("#read-link").removeClass("strike");
  });

  $("#read-link").click(function(){
    $("#public-readings").removeClass("read-z").addClass("current-z").removeClass("hidepages").removeClass("hide");
    $("#introduction").addClass("introduction-z").removeClass("current-z");
    $("#acknowledgements").addClass("acknowledgements-z").removeClass("current-z");
    $("#contributors").addClass("contributors-z").removeClass("current-z");
    $("#how-to-cite").addClass("cite-z").removeClass("current-z");
    $("#link-hide").removeClass("hide");
    $("#link-stack").removeClass("hide");

    $("#intro-link").removeClass("strike");
    $("#contrib-link").removeClass("strike");
    $("#ack-link").removeClass("strike");
    $("#cite-link").removeClass("strike");
    $("#read-link").addClass("strike");
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


    // if ($(".page").visible()) {
    //   $("#link-hide").removeClass("hide");
    //   $("#link-stack").removeClass("hide");
    // } else {
    //   $("#link-hide").addClass("hide");
    //   $("#link-stack").addClass("hide");
    // }


});
