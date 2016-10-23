$(document).ready(function(){
    $('.parallax').parallax();
    // $('a').on('click', function() {
    // console.log("Yo mama's got a glass eye with a fish in it!");
    $("a").on('click',function(event) {
  var $target = $(event.target);
var $test = 'Jason';
// var $oppCheck = $target.attr("class");
$("tbody").append($test);
  });

  });
