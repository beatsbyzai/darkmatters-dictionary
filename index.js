

$( document ).ready(function() {



  function removeInvalidChars() {
    return this.replace(/([\uE000-\uF8FF]|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF])/g, '');
  }


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

  // if ($(window).width() < 769   {
  //   $("#intro-link").click(function(){
  //     $(".buy").addClass("hide");
  //
  //   });
  // }





  $("#intro-link").click(function(){
    $("#introduction").removeClass("introduction-z").addClass("current-z").removeClass("hidepages").removeClass("hide");
    $(".buy").addClass("hide-mobile");
    $("#buy-link").removeClass("hide");
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


  var minTop = -1;
  var maxTop = 10;
  var minRight = 2;
  var maxRight = 12;
  var minDeg = -5;
  var maxDeg = 5

  var randomTop = randomNumberFromRange(minTop, maxTop);
  var randomRight = randomNumberFromRange(minRight, maxRight);
  var randomDeg = randomNumberFromRange(minDeg, maxDeg);

  function randomNumberFromRange(min,max)
  {
      return Math.floor(Math.random()*(max-min+1)+min);
  };



    var numclicks = 0;
    //  (function () {
    //     $('#introduction').click(function () {
    //     numclicks += 1;
    //   });
    // })();





  var pages = ["poetic-computation", "zoom", "dark-matter", "study", "surveillance", "racial-gaze", "sousveillance", "software", "ideology", "obfuscation",
  "black-gooey-universe", "interface", "racial-capitalism", "debt-state", "colonialism", "white-racial-frame", "panoptic", "reckoning", "predatory-state",
  "anti-blackness", "communal-ethic", "peoples-dictionary", "abundance", "transparency", "human"];

  jQuery.each( pages, function(i, val) {


    // $("#introduction").click(function () {
    // numclicks += 1;
    // });
    //
    // if (numclicks == 2) {
    //   // come code
    //   $('.navigation').addClass('hide');
    // }


    var $body = $('body');
    $body.on('mousedown', function (evt) {
      $body.on('mouseup mousemove', function handler(evt) {
        numclicks += 1;
        // if (numclicks == 5) {
        //   $('.navigation').addClass('hide');
        // }

        if (evt.type === 'mouseup') {
          // click
        } else {
          // drag
        }
        $body.off('mouseup mousemove', handler);
      });
    });



    $("#" + val).css({"z-index": "100" + numclicks, "position": "fixed", "top": randomNumberFromRange(minTop, maxTop) + "vw", "right": randomNumberFromRange(minRight, maxRight) + "vw", "transform":"rotate(" + randomNumberFromRange(minDeg, maxDeg) + "deg)"});




    $("#link-" + val).click(function(){
      $("#" + val).toggleClass("hide");
      $("#link-" + val).toggleClass("active-link");
      $("#" + val).removeClass("stack").removeClass("hidepages");
    });

  });


  // $("#link-poetic-computation").click(function(){
  //   $("#poetic-computation").toggleClass("hide");
  //   $("#link-poetic-computation").toggleClass("active-link");
  //   $("#poetic-computation").removeClass("stack").removeClass("hidepages");
  // });
  //
  // $("#link-zoom").click(function(){
  //   $("#zoom").toggleClass("hide");
  //   $("#link-zoom").toggleClass("active-link");
  //   $("#zoom").removeClass("stack").removeClass("hidepages");
  // });
  //
  // $("#link-dark-matter").click(function(){
  //   $("#dark-matter").toggleClass("hide");
  //   $("#link-dark-matter").toggleClass("active-link");
  //   $("#dark-matter").removeClass("stack").removeClass("hidepages");
  // });

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
