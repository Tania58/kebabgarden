var menuClick = document.querySelectorAll(".menuBlock");
var menuItems = document.querySelectorAll(".PopupClass");
for(var i=0;i<menuClick.length;i++){
  menuClick[i].addEventListener("click",function(){
    menuClick.forEach(function(menuBtn){
      menuBtn.classList.remove("active");
    })
this.classList.add("active");
var menuBtn_value=this.getAttribute("data-li");
menuItems.forEach(function(hide)
{
hide.style.display="none";
})//by clicking menuBtn PopupClass display eill be none

 // alert("menuBtn_value");
  //
if(menuBtn_value==="kebabGardenMains"){
 
  document.querySelector("."+ menuBtn_value).style.display="block";
}
else if(menuBtn_value=="tandooriKaKhajana"){
  
  document.querySelector("."+ menuBtn_value).style.display="block";
}
else{
  console.log("");
}
  });
}