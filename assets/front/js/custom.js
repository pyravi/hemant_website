$(document).ready(function(){
  
  var mousePos = {};

 function getRandomInt(min, max) {
   return Math.round(Math.random() * (max - min + 1)) + min;
 }
  
  $(window).mousemove(function(e) {
    mousePos.x = e.pageX;
    mousePos.y = e.pageY;
  });
  
  $(window).mouseleave(function(e) {
    mousePos.x = -1;
    mousePos.y = -1;
  });
  
  var draw = setInterval(function(){
	var elemnt = '.mousehovereffect'
	var elepos = $(elemnt).position();
	// console.log(elepos.top)
    if(elepos && mousePos.x > elepos.left && mousePos.y > elepos.top){
      
      var range = 10;
      
      var color = "background: rgb("+getRandomInt(0,255)+","+getRandomInt(0,255)+","+getRandomInt(0,255)+");";
      
      var sizeInt = getRandomInt(5, 8);
      size = "height: " + sizeInt + "px; width: " + sizeInt + "px;";
      
      var left = "left: " + getRandomInt(mousePos.x-elepos.left-range-sizeInt, mousePos.x-elepos.left+range) + "px;";
      
      var top = "top: " + getRandomInt(mousePos.y-elepos.top-range-sizeInt, mousePos.y-elepos.top+range) + "px;"; 

      var style = left+top+color+size;
      $("<div class='ball' style='" + style + "'></div>").appendTo(elemnt).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){$(this).remove();}); 
    }
	
  }, 1);
});
