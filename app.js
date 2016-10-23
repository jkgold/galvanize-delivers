$(document).ready(function(){
    $('.parallax').parallax();
    // $('a').on('click', function() {
    // console.log("Yo mama's got a glass eye with a fish in it!");
    $("a").on('click',function(event) {
  var $target = $(event.target);
var $test = 'Jason';
var $addToOrder = $target.attr(".card-content")
var $oppCheck = $target.attr("class");
$("#sub").append($test);
$('a').on('click',(function(event) {
   $('#myTable tbody').append('<tr class=".card-content"><td>"name", "price"</td></tr>');
});

  });

  // });
  function addToOrder (name, price){
    td.text(name);
    td.text(price)
  // });
  });
