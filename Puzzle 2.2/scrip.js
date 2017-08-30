$(document).ready(function(){
	var bx1=document.getElementById('box1');
	var bx2=document.getElementById('box2');
	var bx3=document.getElementById('box3');
	var bx4=document.getElementById('box4');
	function move(bx1){
		 var pos=0;
	 var lpos=0;
	 document.onkeydown=function(e)
	 {
		 //alert(pos+" "+lpos);
		 
		// alert(e.keyCode);
		switch(e.keyCode){
		case 38:
		if(pos==-98)
			pos=-98;
		else
			 pos--;
			 bx1.style.top=pos+"px";
			 break;
		case 40:
		if(pos==398)
			pos=398;
		else
			 pos++;
			 bx1.style.top=pos+"px";
			 break;
	    case 39:
			if(lpos==495)
			 lpos=495;
		 else
		    lpos++;
		if(lpos<0)
			lpos=0;
			bx1.style.left=lpos+"px";
		break;
		case 37:
		if(lpos==495)
			 lpos=495;
		 else
			 lpos--;
		 if(lpos<0)
			lpos=0;
		bx1.style.left=lpos+"px";
		break;
		
		 }
	 }
	}
$("#box1").click(function(){	
	$("#box4").css("border"," 2px solid gray");
	$("#box2").css("border"," 2px solid gray");
	$("#box3").css("border"," 2px solid gray");
	 $("#box1").css("border"," 2px solid blue");
	move(bx1);
	 
});
$("#box2").click(function(){
	$("#box1").css("border"," 2px solid gray");
	$("#box4").css("border"," 2px solid gray");
	$("#box3").css("border"," 2px solid gray");
	 $("#box2").css("border"," 2px solid blue");
	move(bx2);
	 
});
$("#box3").click(function(){
	$("#box1").css("border"," 2px solid gray");
	$("#box2").css("border"," 2px solid gray");
	$("#box4").css("border"," 2px solid gray");
	 $("#box3").css("border"," 2px solid blue");
	move(bx3);
	 
});
$("#box4").click(function(){
	$("#box1").css("border"," 2px solid gray");
	$("#box2").css("border"," 2px solid gray");
	$("#box3").css("border"," 2px solid gray");
	 $("#box4").css("border"," 2px solid blue");
	move(bx4);
	 
});
});