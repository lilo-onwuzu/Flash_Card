//Methods in javascript are events that operate variables
//Variable(Argument).method()
//JQuery("p").click(function(){alert(...)})
//JQuery finds all "p" strings within html and they all become the variable. When you perform a method or event on the variable (click), it implements th function "alert"
//$ is used to define the function JQuery
//add or remove class to add new interactive elements (change DOM)e.g add background
//Include comments using (append, prepend, before or after elements)
///show/hide/toggle() to show or hide interactive elements
//toggle allows continous clicking. If you use "show" or "hide" it will show or hide only after the first click but will be unresponsive by the second click
//The argument ("Argument") callback follows the same name order as in the css page

$(document).ready(function(){
  $(".showTerms").click(function(){
    $(".marketing").show(); //shows the row section when you click.Toggle not needed in this case because the hide term button takes care of the next click
    $(".hideTerms").show(); //shows the hidden "Click to hide" button
    $(".showTerms").hide(); //hides the "Click to learn" after you click on it
  });
  $("p.hideTerms").click(function(){
    $(".marketing").hide(); //shows & hides the row section when you click
    $(".hideTerms").hide(); //hides the "Click to Hide" after you click on it
    $(".showTerms").show(); //displays the "Click to Show" again
  });
  $(".Javascript .clickable").click(function(){
    $("#javascript").fadeToggle(); //click on Javascript "clickable" element to display more info in id "javascript" element
  });
  $(".JQuery .clickable").click(function(){
    $("#jQuery").fadeToggle();
  });
  $(".NaN .clickable").click(function(){
    $("#nan").slideToggle();
  });
  $(".Alert .clickable").click(function(){
    $("#alert").slideToggle();
  });
  $(".lightBackground").click(function(){
    $("body").removeClass();
    $("body").addClass("lightPage");
    //add and remove class can do interactive styling or make interactive changes
  });
  $(".darkBackground").click(function(){
    $("body").removeClass();
    $("body").addClass("darkPage");
  });
  $(".active").click(function(){
    $("body").removeClass();
    $("body").addClass("defaultPage");
  });
  $(".col-lg-6 p").click(function(){
    $(this).toggleClass("boxText");
  });

  $(".operator").click(function(){
        $(".col-lg-6").append("Operator");
  });
});
