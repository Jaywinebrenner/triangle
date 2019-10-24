$(document).ready(function() {
  $("#triangleform").submit(function(event) {
      var sideAValue = parseInt($("#trianglea").val());
      var sideBValue = parseInt($("#triangleb").val());
      var sideCValue = parseInt($("#trianglec").val());

      if (sideAValue === sideBValue) {
        //  block of code to be executed if condition1 is true
      } else if (sideAValue === sideCValue) {
        //  block of code to be executed if the condition1 is false and condition2 is true
      } else {
       (sideBValue === sideCValue)
      };
      alert("equalateratlll!")



      event.preventDefault();
  });
});
