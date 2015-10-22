"use strict";

var logicComparison = (function(){
  var compare = function(prep1, prep2, a, b, c) {
    return (eval(prep1) == eval(prep2));
  };

  var calc = function(prep1, prep2) {
    return (
      compare(prep1, prep2, true, true, true) &&
      compare(prep1, prep2, true, true, false) &&
      compare(prep1, prep2, true, false, true) &&
      compare(prep1, prep2, true, false, false) &&
      compare(prep1, prep2, false, true, true) &&
      compare(prep1, prep2, false, true, false) &&
      compare(prep1, prep2, false, false, true) &&
      compare(prep1, prep2, false, false, false)
    );
  };

  return {
    calc: calc
  }
})()

$(".logcomp_submit").on("click", function() {
  event.preventDefault();
  var prep1 = $(".logcomp_firstinput").val();
  var prep2 = $(".logcomp_secondinput").val();
  var result = logicComparison.calc(prep1, prep2);
  $(".logcomp_result").text(result);
});
