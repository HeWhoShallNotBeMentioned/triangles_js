var triangle = function(side1, side2, side3) {
  var sides = [side1, side2, side3].sort();

  if ((sides[0] + sides[1]) >= sides[2]) {
    if (sides[0] === sides [2]) {
      return "equilateral";
    } else if (sides[0] === sides[1] || sides[1] === sides[2]) {
      return "isosceles";
    } else {
      return "scalene";
    }
  } else {
    return false;
  }
};

$(document).ready(function() {

  $("form#sides").submit(function(event) {

    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val());
    var user_triangle = triangle(side1, side2, side3);

    $(".triangle").text(side1 + ", " + side2 + ", " + side3);
      if (!user_triangle) {
        $(".not").text("not");
        $(".type").text("");
      } else {
        $(".not").text("");
        $(".type").text(user_triangle);
      };
    $("#result").show();
    event.preventDefault();
  });
});
