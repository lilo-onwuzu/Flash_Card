//Methods in javascript are events that operate variables
//Variable(Argument).method()
//JQuery("p").click(function(){alert(...)})
//JQuery finds all "p" strings within html and they all become the variable. When you perform a method or event on the variable (click), it implements th function "alert"
//$ is used to define the function JQuery
//add or remove class to add new interactive elements (change DOM)e.g add background
// include comments using (append, prepend, before or after elements)
///show/hide/toggle() to show or hide interactive elements

$(document).ready(function(){

  $("#list").click(function(){
    $(".marketing").toggle();
    $("#unlist").toggle();
    $("#list").toggle();
  });

  $("#unlist").click(function(){
    $(".marketing").toggle();
    $("#unlist").toggle();
    $("#list").toggle();
  });

  $(".clickable").hover(function(){
    $("ul").append("p");
  });

});
