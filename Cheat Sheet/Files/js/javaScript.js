let hassan = ()=>{
    let a = document.querySelectorAll("p");
    let b = document.body;
    let c = document.querySelectorAll(".output");
    let d = document.querySelectorAll("li");
    let bgscroll= document.getElementsByClassName("::-webkit-scrollbar");
    for (i = 0; i < a.length; i++) {
        a[i].classList.toggle('darkmode');
    }

      for (i = 0; i < c.length; i++) {
        c[i].style.color = 'black';
      }
      for (i = 0; i < d.length; i++) {
        a[i].classList.toggle('darkmode');
      }

      b.classList.toggle('darkmode');
      
      for (i = 0; i < bgscroll.length; i++) {
        a[i].setAttribute('style','background-color:black;');
      }
      console.log(bgscroll);
      
      

      let syntax = document.querySelectorAll(".syntax");
      for (i = 0; i < syntax.length; i++) {
        syntax[i].style.color = 'black';
      }

      let dark = document.getElementById('btn-dark');
      if(dark.innerHTML == "Dark Mode OFF"){
          dark.innerHTML = "Dark Mode ON";
          dark.style.backgroundColor = "white";
          dark.style.color = "black";
      }else{
          dark.innerHTML = "Dark Mode OFF";
          dark.style.backgroundColor = "red";
          dark.style.color = "white";
      }

 

}



var mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// prespective demo of 3D transform
function changePersp(value)
{
document.getElementById('perspective-1').style.perspective=value + "px";
document.getElementById('perspective-1').style.webkitPerspective=value + "px";
document.getElementById('persp').innerHTML=value;
}

function changeOrgPersp()
{
var x=document.getElementById('operspx').value;
var y=document.getElementById('operspy').value;
document.getElementById('perspective-1').style.perspectiveOrigin=x + '% ' + y + '%';
document.getElementById('perspective-1').style.webkitPerspectiveOrigin=x + '% ' + y + '%';
document.getElementById('opersp').innerHTML=x + "% " + y + "%";      
}
