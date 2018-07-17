function slideFunction()
 {
       var div = document.getElementById("wholeSlideIn");
if (div.style.display !== "block") {
    div.style.display = "block";
}
else {
    div.style.display = "none";
}
 }

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
