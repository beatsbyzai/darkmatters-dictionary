$( document ).ready(function() {


});

$(function() {
    $( "#introduction" ).draggable();
  } );

$("#intro-link").click(function(){
  $("#introduction").addClass("current-z");
});

$("#contrib-link").click(function(){
  $("#contributiors").addClass("current-z").removeClass("contributiors-z").;
});


$("#ack-link").click(function(){
  $("#acknowledgements").addClass("current-z");
});
