

$( document ).ready(function() {



  function removeInvalidChars() {
    return this.replace(/([\uE000-\uF8FF]|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF])/g, '');
  }

  var audio = {};

  for(var i = 0, len = 11; i < len; i++) {
      audio[i] = document.createElement("audio");
      audio[i].src = "audio/page-flip-" + i + ".mp3";
  }

  var marker = document.createElement("audio");
  marker.src = "audio/marker.mp3";

  // Setters - dot notation and square bracket
  // audio.p1 = "Hello!";
  // audio['p2'] = "Hello 2!";
  //
  // // Getters - dot notation and square bracket
  // alert(audio.p1); // alerts Hello!
  // alert(audio['p2']); // alerts Hello 2!

  // var p1 = document.createElement("audio");
  // p1.src = "audio/page-flip-1.mp3";
  // var p2 = document.createElement("audio");
  // p2.src = "audio/page-flip-2.mp3";
  // var p3 = document.createElement("audio");
  // p3.src = "audio/page-flip-3.mp3";
  // var p4 = document.createElement("audio");
  // p4.src = "audio/page-flip-4.mp3";
  // var p5 = document.createElement("audio");
  // p5.src = "audio/page-flip-5.mp3";
  // var p6 = document.createElement("audio");
  // p6.src = "audio/page-flip-6.mp3";
  // var p7 = document.createElement("audio");
  // p7.src = "audio/page-flip-7.mp3";
  // var p8 = document.createElement("audio");
  // p8.src = "audio/page-flip-8.mp3";
  // var p9 = document.createElement("audio");
  // p9.src = "audio/page-flip-9.mp3";
  // var p10 = document.createElement("audio");
  // p10.src = "audio/page-flip-10.mp3";

  // obj.volume = 0.1;
  // obj.autoPlay = false;
  // obj.preLoad = true;
  // obj.controls = true;



  $("#link-stack").click(function(){
    $(".page").toggleClass("stack");
    audio[7].play();
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
    audio[9].play();
    // $(".back").toggleClass("z");
    // $(".spine").toggleClass("z");
    // $(".cover").toggleClass("z");
  });

  $("#link-preview").click(function(){
    audio[10].play();
  });

  $("#link-buy").click(function(){
    audio[2].play();
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

    $(".buy-content").addClass("hide");
    $("#link-buy").removeClass("strike");
    $("#buy-link").removeClass("strike");
    $(".vector-preview").removeClass("hide");
    $(".dm-container").removeClass("hide");

    $(".buy-dets").removeClass("hide");
    // $("#link-buy").removeClass("hide");

    audio[1].play();
    marker.play();
  });

  $("#contrib-link").click(function(){
    $("#contributors").removeClass("contributors-z").addClass("current-z").removeClass("hidepages").removeClass("hide");
    $(".buy").addClass("hide-mobile");
    $("#buy-link").removeClass("hide");
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

    $(".buy-content").addClass("hide");
    $("#link-buy").removeClass("strike");
    $("#buy-link").removeClass("strike");
    $(".vector-preview").removeClass("hide");
    $(".dm-container").removeClass("hide");

    $(".buy-dets").removeClass("hide");

    audio[3].play();
    marker.play();
  });


  $("#ack-link").click(function(){
    $("#acknowledgements").removeClass("acknowledgements-z").addClass("current-z").removeClass("hidepages").removeClass("hide");
    $(".buy").addClass("hide-mobile");
    $("#buy-link").removeClass("hide");
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

    $(".buy-content").addClass("hide");
    $("#link-buy").removeClass("strike");
    $("#buy-link").removeClass("strike");
    $(".vector-preview").removeClass("hide");
    $(".dm-container").removeClass("hide");

    $(".buy-dets").removeClass("hide");

    audio[4].play();
    marker.play();
  });

  $("#cite-link").click(function(){
    $("#how-to-cite").removeClass("cite-z").addClass("current-z").removeClass("hidepages").removeClass("hide");
    $(".buy").addClass("hide-mobile");
    $("#buy-link").removeClass("hide");
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

    $(".buy-content").addClass("hide");
    $("#link-buy").removeClass("strike");
    $("#buy-link").removeClass("strike");
    $(".vector-preview").removeClass("hide");
    $(".dm-container").removeClass("hide");

    $(".buy-dets").removeClass("hide");

    audio[5].play();
    marker.play();
  });

  $("#read-link").click(function(){
    $("#public-readings").removeClass("read-z").addClass("current-z").removeClass("hidepages").removeClass("hide");
    $(".buy").addClass("hide-mobile");
    $("#buy-link").removeClass("hide");
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

    $(".buy-content").addClass("hide");
    $("#link-buy").removeClass("strike");
    $("#buy-link").removeClass("strike");
    $(".vector-preview").removeClass("hide");
    $(".dm-container").removeClass("hide");

    $(".buy-dets").removeClass("hide");

    audio[6].play();
    marker.play();
  });


  // $("#buy-link").click(function(){
  //   $(".buy-content").removeClass("hide");
  // });

  $("#link-buy").click(function(){
    marker.play();
    $(".buy-content").toggleClass("hide");
    $("#link-buy").toggleClass("strike");
    $(".vector-preview").toggleClass("hide");
    $(".dm-container").toggleClass("hide");
    $("#link-hide").addClass("hide");
    $("#link-stack").addClass("hide");
    $("#intro-link").removeClass("strike");
    $("#contrib-link").removeClass("strike");
    $("#ack-link").removeClass("strike");
    $("#cite-link").removeClass("strike");
    $("#read-link").removeClass("strike");
    $(".buy-dets").addClass("hide");
    $("#link-buy").toggleClass("hide-mobile");
    $("#buy-link").toggleClass("hide");
    $("#buy-link").toggleClass("strike");
  });

  $("#buy-link").click(function(){
    marker.play();
    $(".buy-content").toggleClass("hide");
    $("#buy-link").toggleClass("strike");
    $(".vector-preview").toggleClass("hide");
    $(".dm-container").toggleClass("hide");
    $("#link-hide").addClass("hide");
    $("#link-stack").addClass("hide");
    $("#intro-link").removeClass("strike");
    $("#contrib-link").removeClass("strike");
    $("#ack-link").removeClass("strike");
    $("#cite-link").removeClass("strike");
    $("#read-link").removeClass("strike");
    $(".buy-dets").addClass("hide");
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
      $("#" + val).toggleClass("hide").toggleClass("page-z");
      $("#link-" + val).toggleClass("active-link");
      $("#" + val).removeClass("stack").removeClass("hidepages");


      // if ($(window).width() > 769   {
      audio[randomNumberFromRange(1, 10)].play();
      // }
      marker.play();
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
