$(document).ready(function(){
	var c=0;
	$("#art1").click(function(){
		c++;
	document.getElementById('pt').innerHTML=c;
	});
var ele=document.getElementById('art1');
var ele1=document.getElementById('art2');
var xpos=100;
var ypos=150;
function up(){
		setInterval(function(){
	if(ypos<=150){
	start();
	}
	else{
		ypos--;
		ele.style.left=xpos+"px";
	ele.style.top=ypos+"px";
}
	},1000);
}
function left(){
	setInterval(function(){
	if(xpos<=100){
	//clearInterval();
	up();
	}
	else{
		xpos--;
		ele.style.left=xpos+"px";
	ele.style.top=ypos+"px";}
	},100);
}
function down(){
	setInterval(function(){
		if(ypos>=350)
			{
	//clearInterval();
	left();
	}else{
		ypos++;
		ele.style.left=xpos+"px";
	ele.style.top=ypos+"px";
	}
			
		},1000);
}
function start(){
	setInterval(function(){
	if(xpos>=300){
	//clearInterval();
	down();
	}
	else{
		xpos++;
		ele.style.left=xpos+"px";
	ele.style.top=ypos+"px";}
	
},1);
}
setInterval(function(){
	if(xpos>=300){
	//clearInterval();
	down();
	}
	else{
		xpos++;
		ele.style.left=xpos+"px";
	ele.style.top=ypos+"px";}
	
},1);
});