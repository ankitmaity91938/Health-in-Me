let slideindex = 1;
showDivs(slideindex);

function plusdivs(n) {
    showDivs(slideindex += n);
  }
  
  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slideimg");
    if (n > x.length) {slideindex = 1}
    if (n < 1) {slideindex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    x[slideindex-1].style.display = "block";  
}