$(document).ready(function()
{
	//$('#banner', this).remove();
	var c=0;
	var pos=0;
	var b=document.getElementById('bird');
	 setInterval(function() {
        pos++;
		pos++;
		b.style.top=(pos*10)+"px";
		if(pos<0)
		pos=0;
	if(pos>48)
		pos=48;
     }, 500);
	$("#banner").click(function(){
    pos--;
	b.style.top=(pos*10)+"px";
	if(pos<0)
		pos=0;
	if(pos>48)
		pos=48;
});
var pos1=0;
var elem1=document.getElementById('bri1');
  var pos2=50;
var elem2=document.getElementById('bri2');
setInterval(function() {
	 if (pos1 == 1300) {
	  $("#bri1").hide();
	  pos1=0;
	  elem1.style.right = pos1 + 'px';
	  $("#bri1").show();
    }
      pos1++; 
      elem1.style.right = pos1 + 'px'; 
	  
	  
    if (pos2 == 1300) {
	  $("#bri2").hide();
	  c++;
	  pos2=0;
	  elem2.style.rigth = pos2 + 'px';
	  $("#bri2").show();
    }
      pos2++; 
      elem2.style.right = pos2 + 'px'; 
    
	 if((pos1==1000)||(pos2==1092)){
		 if((pos>=17 && pos<=25)||(pos==48)){
		 }else{
	  alert("Game Over Score="+c);
	  $("body").hide();
	  $("body").css("backgroundColor","red");
		 }
	 }
  },5);
  
 
	 
});