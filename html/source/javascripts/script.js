//= require_tree .

$(function() {

  $(".ball").bind("click", function(){
    $(this).toggleClass("big");
    var w = $(document).width() - $(this).width();
    //$(this).css("left", w/2);
  })

  $(".ball")
    .not(".mute")
    .each(function(i) {
      if (i != 0) { 
        $("#sound")
          .clone()
          .attr("id", "sound" + i)
          .appendTo($(this)); 
      }
      $(this).data("rollover1", i);
    })
    .mouseenter(function() {
      $("#sound" + $(this).data("rollover1"))[0].play();
    });
  $("#sound").attr("id", "sound0");

});