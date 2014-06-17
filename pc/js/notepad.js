	var notesPress = false;
	var newNotePin = null;
	var swfDivBoundries = new Object();
	var noteClicked = false;
	var arr = new Array();
	var pin_arr = new Array();
	var pinClicked = null;
    var pinCount = 0;	
	var notes_arr = new Array();
	var currentPageId = 0;
    function init_notepad()
	{
		document.onmousemove = bodyMouseMove;
		document.getElementById('notepad_close').onmousedown = hideNodes;
		document.getElementById('notepad_delete').onmousedown = deleteNodes;
		document.getElementById('notepad_save').onmousedown = saveNodes;
	}

	function bodyMouseMove(e)
	{
		e = e||window.event;
		
		if(noteClicked == true)
		{
			if (e.pageX || e.pageY) {
			posx = e.pageX;
			posy = e.pageY;
			}
			else if (e.clientX || e.clientY) {
					posx = e.clientX + document.body.scrollLeft
							+ document.documentElement.scrollLeft;
					posy = e.clientY + document.body.scrollTop
							+ document.documentElement.scrollTop;
			}
			
			pinClicked.style.left = (posx-5)+"px";//(evt.pageX - 5)+"px";
			pinClicked.style.top = (posy-5)+"px";//(evt.pageY - 5)+"px";
			
		}
	}
	
	function createNotesPin(e)
	{
		    currentPageId = $.wowBook("#features").currentPage; 
	    	noteClicked = true;
			pinCount++;
			document.getElementById('mask').style.visibility = 'visible';
			pinClicked = getPinDiv("pin_"+pinCount,'create');
			
			if(e.pageX)
			{
				posx = e.pageX;
				posy = e.pageY;
			}
			else if(e.clientX)
			{
				posx = e.clientX + document.body.scrollLeft+ document.documentElement.scrollLeft;
				posy = e.clientY + document.body.scrollTop+ document.documentElement.scrollTop;
			}
			
			pinClicked.style.left = posx+'px';
			pinClicked.style.top = posy+'px';
	}
	
	function getPinDiv(pinId,type)
	{
		var pin = document.createElement('div');
		pin.setAttribute('id',pinId);
		pin.style.width = '27px';
		pin.style.height = '25px';
		pin.style.position = 'absolute';
		pin.style.backgroundImage = "url(images/book/ic_pin.png)";
		pin.style.backgroundSize = '100%';
		pin.style.backgroundRepeat = 'no-repeat';
		pin.style.cursor = 'pointer';
		pin.style.zIndex = 200;
		pin.onmouseup = pinInSwf;
		document.body.appendChild(pin);
		return pin;
	}
	
	function pinInSwf(e)
	{

		if(noteClicked == true)
		{
			var posx = 0;
			var posy = 0;
			e = e||window.event;
			
			if(e.pageX)
			{
				posx = e.pageX;
				posy = e.pageY;
			}
			else if(e.clientX)
			{
				posx = e.clientX + document.body.scrollLeft+ document.documentElement.scrollLeft;
				posy = e.clientY + document.body.scrollTop+ document.documentElement.scrollTop;
			}
			
		   	if(insideSwf(posx,posy))
			{
				pin_arr.push(pinClicked);
				setLeftTop(pinClicked);
				showNotes(pinClicked);
			}
			else
			{
				//removeNodes(pinClicked);
				document.body.removeChild(pinClicked);
				pinClicked = null;
			}
			noteClicked = false;
			document.getElementById('mask').style.visibility = 'hidden';
		}
		else
		{
			if(this.style.border == '')
			{
				if(pinClicked != null)
				{
					pinClicked.style.border = '';
				}
				pinClicked = this;
				showNotes(pinClicked);
			}
			else
			{
				pinClicked = this;
				hideNodes();
			}
		}
	}
	
	function getPin(e)
	{
		if(noteClicked == false)
		{
		   	if(insideSwf(e.pageX,e.pageY))
			{
				pinClicked = null;
			}
			else
			{
				document.body.removeChild(pinClicked);
				pinClicked = null;
			}
		}
	}
	
	function insideSwf(xx,yy)
	{
		var _mask = document.getElementById('mask');
		if( (xx > _mask.offsetLeft && xx < (_mask.offsetLeft+_mask.offsetWidth)) && (yy > _mask.offsetTop && yy < (_mask.offsetTop+_mask.offsetHeight)) ){
			return true;
		}
		return false;
	}
	
	function showNotes(_pinClicked)
	{
		document.getElementById('notepad').style.display = 'block';
		document.getElementById('notepad').style.left = Number(_pinClicked.offsetLeft)+10+"px";
		document.getElementById('notepad').style.top = Number(_pinClicked.offsetTop)+10+"px";
		document.getElementById('notepad').style.zIndex = 999;
		document.getElementById('notepad_txt').value = notes_arr[currentPageId][_pinClicked.getAttribute('arrayIndex')].text;//getPinNodes(currentPageId,_pinClicked.id,'text');
		_pinClicked.style.border = ' #ff0000';
	}
	
	function hideNodes()
	{
		document.getElementById('notepad').style.display = 'none';
		pinClicked.style.border = '';
	}
	
	function getPinNodes(pageId,pinId,type)
	{
		return notes_arr[pageId].length;
	}
	
	
	function deleteNodes()
	{
		document.getElementById('notepad').style.display = 'none';
		removeNodes(pinClicked);
		deletePin(pinClicked);
		document.body.removeChild(pinClicked);
		pinClicked = null;
	}
	
	function saveNodes()
	{
		var arrIndex = pinClicked.getAttribute('arrayIndex');//getPinNodes(pageIndex,pinClicked.id,'index');
		notes_arr[currentPageId][arrIndex].text = document.getElementById('notepad_txt').value;
		document.getElementById('notepad').style.display = 'none';
	}
	
    function removeNodes(pinDiv)
    {
    	var arrIndex = pinDiv.getAttribute('arrayIndex');
		notes_arr[currentPageId].splice(arrIndex,1);
    }
	
    function setLeftTop(pinDiv)
    {
	   var arrIndex = getPinNodes(currentPageId,pinDiv.id,'index');
	   pinDiv.setAttribute('arrayIndex',arrIndex);
	   notes_arr[currentPageId][arrIndex] = {left:0,top:0,text:''};
	   notes_arr[currentPageId][arrIndex].left = pinDiv.offsetLeft;
	   notes_arr[currentPageId][arrIndex].top = pinDiv.offsetTop;
    }
    
    function createPagePins()
    {
		
       for(var i = 0;i<notes_arr[pageIndex].length;i++)
        {
			var pin = getPinDiv(notes_arr[pageIndex][i].id,'recreate')
            pin.style.left = notes_arr[pageIndex][i].left+'px';
            pin.style.top = notes_arr[pageIndex][i].top+'px';
        }
    }
    
    function clearPagePins()
    {
    	for(var i = 0;i<pin_arr.length;i++)
    	{
			console.log("i="+i);
    		document.body.removeChild(pin_arr[i]);
    	}
		document.getElementById('notepad').style.display = 'none';
    	pin_arr = new Array();
		//setTimeout(recreateNotePin,1000);
    }
    function deletePin(pinDiv)
    {
    	for(var i = 0;i<pin_arr.length;i++)
    	{
    		if(pin_arr[i].id == pinDiv.id)
    		{
    			pin_arr.splice(i,1);
    			break;
    		}
    	}
    }
    
   function recreateNotePin(){
	   currentPageId = Number($.wowBook("#features").currentPage);
	 //  alert(currentPageId);
	   for(var i = 0;i<notes_arr[currentPageId].length;i++){
		   console.log(notes_arr[currentPageId][i].left+","+notes_arr[currentPageId][i].top+","+notes_arr[currentPageId][i].text);
		   var pinDiv = getPinDiv(i,'');
		   pinDiv.setAttribute('arrayIndex',i);
		   pinDiv.style.left = notes_arr[currentPageId][i].left+'px';
		   pinDiv.style.top = notes_arr[currentPageId][i].top+'px';
		   pin_arr.push(pinDiv);
	   }
   }
    
