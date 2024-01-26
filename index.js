let imgindex = 1;
showimg(imgindex);

function plusdivs(n) {
  imgindex = imgindex + n;
  showimg(imgindex);
}

function showimg(n) {
  let i;
  let img = document.querySelectorAll(".slideimg"); // Add dot before "slideimg"
  
  if (n > img.length) {
    imgindex = 1;
  }
  
  if (n < 1) {
    imgindex = img.length;
  }
  
  for (i = 0; i < img.length; i++) {
    img[i].style.display = "none";
  }
  
  img[imgindex - 1].style.display = "block";
}