let elements = document.getElementsByClassName("links");

var myFunction = function() {
}


Array.from(elements).forEach(function(element) {
    element.addEventListener('click', myFunction);
  });

