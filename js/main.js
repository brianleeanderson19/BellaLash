 function hideFunction()
  {
        var div = document.getElementById("wholeSlideIn");
 if (div.style.display !== "none") {
     div.style.display = "none";
 }
 else {
     div.style.display = "block";
 }
  }

$(function()
  {
     $("li#messages").click(function()
                         {
                            $("#wholeSlideIn").slideToggle();
                            return false;
                         });
  });
