//var appWidth = document.getElementById('all').offsetWidth;
//var appHeight = document.getElementById('all').offsetHeight;


var appWidth = $('#all').width();
var appHeight = $('#all').height();


var isWebkit = 'webkitRequestAnimationFrame' in window;
var scale = 0;

window.onresize = function(){
	resizeApp();
}

function resizeApp(){

	var parentDiv = document.body.getElementsByTagName('div')[0];
	var winHeight = window.innerHeight;
	var winWidth = window.innerWidth;
	var appWidth = parentDiv.offsetWidth;
    var appHeight = parentDiv.offsetHeight;
	
	winWidth = $(window).width(); //retrieve current window width
	winHeight = $(window).height(); //retrieve current window height
		
		
	//scale = ((appWidth/winWidth)<(appHeight/winHeight))?(appWidth/winWidth):(appHeight/winHeight);
	
	scale = ((winWidth/appWidth)<(winHeight/appHeight))?(winWidth/appWidth):(winHeight/appHeight);
	
	//scale = scale * 1.02;
	
	
	 var ua = window.navigator.userAgent
      var msie = ua.indexOf ( "MSIE " )
    
	
   
	if(msie>0){
		document.body.style.zoom = scale;
	}else{
		
		
		parentDiv.style.webkitTransformOrigin = '0 0';	
		parentDiv.style.webkitTransform = "scale("+scale+")";
		parentDiv.style.MozTransformOrigin = '0 0';	
		parentDiv.style.MozTransform = "scale("+scale+")";
	}
	
	var appWidth = parentDiv.offsetWidth * scale;
	parentDiv.style.left = ((winWidth - appWidth )/2)+'px';
	//updateWindowSize();
	
}

function getDeviceInfo()
{
	var ua = navigator.userAgent;
	//alert(ua);
	return /iPad/i.test(ua) || /iPhone OS 3_1_2/i.test(ua) || /iPhone OS 3_2_2/i.test(ua) || /Android/i.test(ua);
}

resizeApp();
