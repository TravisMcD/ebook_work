var selectedTool = "";
var higInitX = 0;
var higInitY = 0;
var drawHightLight = false;
var hightLight_mc = null;
var isIpad = false;
var isTablet = false;
var dummy_arr = [];
var page2 = null;
var selectedSpan = null;
var spanColor = "#33CCFF";
var _pageId = 0;
var isIe = false;
var _mouseX = 0;
var _mouseY = 0;
var pageLeftX = 0;
var pageRightX = 0;


function hightLightInit(){
	
	
	//document.getElementById('high').onclick = onHightLight;
	//document.getElementById('contentFrame').contentWindow.document.body.onmousedown = iframeMouseDown;
	//document.getElementById('contentFrame').onmouseup = iframeMouseUp;
	document.getElementById('red_btn').onclick = colorChange;
	document.getElementById('green_btn').onclick = colorChange;
	document.getElementById('blue_btn').onclick = colorChange;
	document.getElementById('orange_btn').onclick = colorChange;
	document.getElementById('delete_btn').onclick = deleteSpan;
	document.getElementById('close_btn').onclick = closeHighlight;
}

function onHightLight(e){
	selectedTool = 'highlight';
	document.body.style.cursor = "pointer";
}

function highLightMouseDown(e){
	
   
 }

function highLightMouseUp(e){
       if(selectedTool == 'highlight')
	   {
		        
		        _pageId = this.getAttribute('pageId');
				var _iframe = document.getElementById('page'+_pageId).getElementsByTagName('iframe')[0];
				
				var sel = _iframe.contentWindow.getSelection ? _iframe.contentWindow.getSelection() : _iframe.contentWindow.document.selection.createRange(); // FF : IE
				
				if( String(sel).length == 0 || (isIe && String(sel.text).length == 0))
				return;
				
				
				if(!isIe){
					var range = sel.getRangeAt(0);
			        var newNode = document.createElement("span");
					newNode.setAttribute('id','span_'+_pageId);
					//newNode.setAttribute('style', 'background: red');
					newNode.style.backgroundColor = spanColor;
					newNode.onclick  = removeSpan;
					range.surroundContents(newNode);
					//highLight_arr[pageIndex].push({txt:range,color:spanColor});
				}
				else
				{
					//highLight_arr[pageIndex].push({txt:sel.text,color:spanColor});
			    	sel.pasteHTML("<label style='background-color:#eaff00' id='sspan'>"+sel.text+"</label>")
					_iframe.contentWindow.document.getElementById('sspan').onclick = removeSpan
				}
				
			
			 document.body.style.cursor = "default";
			 
			 if(!isIe){
				 if (_iframe.contentWindow.getSelection() && _iframe.contentWindow.getSelection().getRangeAt(0))
					_iframe.contentWindow.getSelection().removeAllRanges();
				 else if (_iframe.contentWindow.document.selection && _iframe.contentWindow.document.selection.createRange().text) 
					_iframe.contentWindow.document.selection.empty();
			 }
			 
			 disableHighlight();
	   }
	
}


/*function createHightLightCloseBtn(id,_parent){
	var _close = document.createElement('div');
	_close.setAttribute('id','close-'+id);
	_close.style.width = '10px';
	_close.style.height = '10px';
	_close.style.backgroundColor = '#ff00ff';
	_close.style.position = 'absolute';
	
	_parent.appendChild(_close);
	_close.style.left  = (hightLight_mc.offsetWidth-10)+'px';
	_close.style.top  = '0px';
	_close.style.cursor = 'pointer';
	_close.style.visibility = 'hidden';
	_close.onclick = removeHightLight;
}

function removeHightLight(e){

	var higId = this.id.split('-')[1];
	deleteHighLight(higId);
	var higMc = document.getElementById('contentFrame').contentWindow.document.getElementById(higId);
	document.getElementById('contentFrame').contentWindow.document.body.removeChild(higMc);
}

function iframeMouseMove(e){
	if(drawHightLight){
		
		var mouse = mousePos(e);
		var _width =  mouse.x - higInitX;
		var _height = mouse.y - higInitY;
		
		hightLight_mc.style.width = _width+'px';
		hightLight_mc.style.height = _height+'px';
		
	}
}

function createHighLight(w,h,x,y,id,fromId){
	var _div = document.createElement('div');
	
	
	_div.setAttribute('id',id);
	_div.style.width = w+'px';
	_div.style.height = h+'px';
	_div.style.backgroundColor = '#ffccff';
	_div.style.position = 'absolute';
	_div.style.left = x+'px';
	_div.style.top = y+'px';
	_div.style.opacity = 0.5;
    _div.onmouseover = showClose;
	_div.onmouseout = hideClose;
	hightLight_mc = _div;
	
	document.getElementById('contentFrame').contentWindow.document.body.appendChild(_div);
	//document.getElementById('swf_mask').appendChild(_div);
	if(fromId == 1){
		createHightLightCloseBtn(id,_div);
	}
	
}

function showClose(e){
	 document.getElementById('contentFrame').contentWindow.document.getElementById('close-'+this.id).style.visibility = 'visible';
}

function hideClose(e){
	 document.getElementById('contentFrame').contentWindow.document.getElementById('close-'+this.id).style.visibility = 'hidden';
}


function mousePos(evt){
	
	if(isIpad == true || isTablet==true){
		var coors = {
				x: (evt.targetTouches[0].pageX + window.pageXOffset),
				y: (evt.targetTouches[0].pageY + window.pageYOffset)
			};
			//alert(coors.x+":"+coors.y);
			return coors;
	}
	else{
		var coors = {
				x:  (evt.clientX + window.pageXOffset) - document.getElementById('contentFrame').offsetLeft,
				y:  (evt.clientY + window.pageYOffset) - document.getElementById('contentFrame').offsetTop
			};
			return coors;
	}
}

function deleteHighLight(id){
	for(var i = 0;i<highlight_arr[pageIndex].length;i++){

		if(highlight_arr[pageIndex][i].id == id){
			highlight_arr[pageIndex].splice(i,1);
			break;
		}
	}
}*/

function createHighLightBox(){

	 var ss = "";
	 var sel = document.getElementById('contentFrame').contentWindow.document.body.innerHTML;

	for(var i = 0;i<highLight_arr[pageIndex].length;i++){
		
        ss ="<span style='background-color:"+highLight_arr[pageIndex][i].color+"' onclick ='parent.removeSpan(this)'>"+highLight_arr[pageIndex][i].txt+"</span>";
		sel=sel.replace(highLight_arr[pageIndex][i].txt,ss);
	}
  
	document.getElementById('contentFrame').contentWindow.document.body.innerHTML = sel;
}

function removeSpan(e){
    
	_mouseX = e.clientX;
	_mouseY = e.clientY;
    
	var _span = null;
    if(!isIe){
		
		if(e.type == 'click'){
			_span = this;
		}
		else{
			_span = e;
		}
	}else{
		
		_span = this;
		
	}
	selectedSpan = _span;

	if(selectedSpan.style.backgroundColor == 'transparent')
	return;
	
	showPallete(_span);
}

function showPallete(obj){
	var pal = document.getElementById('higPallate');
	var xyObject = new Object();
	
	var pos = GetTopLeft(obj);
	//alert(pos.Top+","+pos.Left);
	var iframeId = obj.id.split("_")[1];
	//alert(document.getElementById('page'+iframeId).offsetLeft);
	var iframeX = ((iframeId%2)==0) ? pageRightX : pageLeftX;
	pal.style.left = (_mouseX+iframeX)+'px';// pos.Left+'px';
	pal.style.top = (_mouseY+document.getElementById('page'+iframeId).offsetTop)+'px';//(pos.Top-45)+'px';
	
	//alert(obj.offsetLeft+","+obj.offsetTop);

	pal.style.visibility = 'visible';
}

 function GetTopLeft(elm)
{

	var x, y = 0;
	
	//set x to elm's offsetLeft
	x = elm.offsetLeft;
	
	//set y to elm's offsetTop
	y = elm.offsetTop;
	
	//set elm to its offsetParent
	elm = elm.offsetParent;
	
	//use while loop to check if elm is null
	// if not then add current elm's offsetLeft to x
	//offsetTop to y and set elm to its offsetParent
	
	while(elm != null)
	{
	
	x = parseInt(x) + parseInt(elm.offsetLeft);
	y = parseInt(y) + parseInt(elm.offsetTop);
	elm = elm.offsetParent;
	}
	
	//here is interesting thing
	//it return Object with two properties
	//Top and Left
	
	x += document.getElementById('page'+_pageId).offsetLeft;
	y += document.getElementById('page'+_pageId).offsetTop;
	
	
	
	return {Top:y, Left: x};

}

function colorChange(e){
 if(selectedSpan != null){
	  var _id = this.id.split("_")[0];
	  //alert(selectedSpan);
	  if(_id == "red"){
		  selectedSpan.style.backgroundColor = "#eaff00";
		  spanColor = "#eaff00";
	  }
	  else if(_id == "green"){
		  selectedSpan.style.backgroundColor = "#00ff00";
		  spanColor = "#00ff00";
	  }
	  else if(_id == "blue"){
		  selectedSpan.style.backgroundColor = "#3CF";
		  spanColor = "#3CF";
	  }
	  else{
		  selectedSpan.style.backgroundColor = "#F60";
		  spanColor = "#F60";
	  }
	 
	 /*for(var i = 0;i<highLight_arr[pageIndex].length;i++){
		 if(highLight_arr[pageIndex][i].txt == selectedSpan.innerHTML){
			 highLight_arr[pageIndex][i].color = spanColor;
			 break;
		 }
	 }*/
	 
  }
}

function deleteSpan(e){
	selectedSpan.style.backgroundColor = 'transparent';
	selectedSpan.onclick = function(){return false};
	//selectedSpan.parentNode.removeChild(selectSpan);
	//removeHigArray(selectedSpan.innerHTML);
	closeHighlight();
	selectedSpan = null;
}

function removeHigArray(str){
	for(var i = 0;i<highLight_arr[pageIndex].length;i++){
		if(str == highLight_arr[pageIndex][i].txt){
			highLight_arr[pageIndex].splice(i,1);
			break;
		}
	}
}

function closeHighlight(e){
	document.getElementById('higPallate').style.visibility = 'hidden';
}
