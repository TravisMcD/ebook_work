// JavaScript Document
//var iFrame = document.getElementById("contentIFrame");
//var iFrameBody;
//var MyApp_SearchResultCount = 0;

function loadXMLDoc(docName)
{
	  if (window.XMLHttpRequest)
	  {
		xhttp=new XMLHttpRequest();
	  }
	  else
	  {
		xhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
	xhttp.open("GET",docName,false);
	xhttp.send();
	return xhttp.responseXML;
} 
function xmlTextSearch(txt)
{
	if(txt.length >0){
		searchWord = txt;
		
		var xmlDoc= loadXMLDoc("xml/search/search.xml"); 
		
		var x=xmlDoc.getElementsByTagName("content");

		var divText="";

		for (var i=0;i<x.length;i++)
		{
			y=xmlDoc.getElementsByTagName("content")[i].firstChild;	
			
			if(y !=null)
			{
				var dispStr="";
				str=y.nodeValue;
				console.log("str="+str);
				pos=str.search(new RegExp(txt,"gi"));
				//if( i == 0)
				//continue;
				if(pos != -1)
				{					
					pageNo=xmlDoc.getElementsByTagName("content")[i].getAttribute("PageNo");	
					actualpage = xmlDoc.getElementsByTagName("content")[i].getAttribute("actualPage");	
					count=1;
					while(pos != -1 && count < 4)
					{	 	
						subStr=str.substring(pos-50,pos+50);
						strRep= subStr.replace(new RegExp(txt,"gi"),"<span style='color:#fff;background-color:#FF0000;'>"+txt+"</span>");						
						dispStr+= "<br />..."+strRep+"...<br />";							
						str=str.substring(pos+51,str.length);						
						pos=str.indexOf(txt);//str.search(new RegExp(txt,"gi"));						
						count++;
					} // while
							
					divText+= "<div><A HREF='javascript:gotoChapter(\""+actualpage+"\");'>PageNo:"+pageNo+"</A><br/>"+dispStr+"...</div>";
					//dispStr = "Page "+pageNo;			
					//divText+= "<div onclick='javascript:gotoChapter(\""+pageNo+"\");'>PageNo:"+actualpage+"</div>";
							
			    } //inner if	
									
					y=y.nextSibling;					
			  } //outer if	
			  
		} // for
		
		if(divText.length==0)
		divText="<span style='cursor:pointer;' onclick='javascript:hideSearchContent()'>No Result Found.</span>";
		
		console.log(divText);
		document.getElementById('searchListDiv').innerHTML=divText;
	}else{
		highlightTerm = false;	
	}//if
	
	
	//---------------------
	
	doTextHighlight(txt);
	
	
}//function close

function closeSearchDiv()
{
	//document.getElementById("searchDiv").style.display= "none";
}

function hideSearchContent(){
	document.getElementById('searchContent').style.display = 'none';
}

function gotoChapter(no)
{
	no = no-1;
	if($.wowBook("#features").currentPage != no){
		searchBoxView = false;
		pagePinClear();
		 $.wowBook("#features").jump(Number(no));
	}
	document.getElementById('searchContent').style.display = 'none'
	 //doTextHighlight(document.getElementById('searchTxt').value);	
}

function doTextHighlight(searchTerm){
	//var searchTerm = searchWord;
	if(searchTerm.length>1)
	{
		console.log(searchTerm);
		doSearchAndHighlight(searchTerm);
		//
	}
}

// helper function, recursively searches in elements and their child nodes
function MyApp_HighlightAllOccurencesOfStringForElement(element,keyword) {
  if (element) {
	 
    if (element.nodeType == 3) 
	{        // Text node
      while (true) {
        var value = element.nodeValue;  // Search for keyword in text node
        var idx = value.toLowerCase().indexOf(keyword);

        if (idx < 0) break;             // not found, abort

        var span = document.createElement("span");
        var text = document.createTextNode(value.substr(idx,keyword.length));
        span.appendChild(text);
        span.setAttribute("class","MyAppHighlight");
        span.style.backgroundColor="yellow";
        span.style.color="black";
        text = document.createTextNode(value.substr(idx+keyword.length));
        element.deleteData(idx, value.length - idx);
        var next = element.nextSibling;
        element.parentNode.insertBefore(span, next);
        element.parentNode.insertBefore(text, next);
        element = text;
		//span.scrollIntoView();
        MyApp_SearchResultCount++;	// update the counter
      }
    } else if (element.nodeType == 1) { // Element node
	  
      if (element.style.display != "none" && element.nodeName.toLowerCase() != 'select') {
        for (var i=element.childNodes.length-1; i>=0; i--) {
          MyApp_HighlightAllOccurencesOfStringForElement(element.childNodes[i],keyword);
        }
      }
    }
  }
}

// the main entry point to start the search
function doSearchAndHighlight(keyword) {
	for(var i = 1;i<=no_of_pages;i++){
		iFrame1 = document.getElementById("page"+i).getElementsByTagName('iframe')[0];
		   if ( iFrame1.contentDocument ) 
		   { // FF
			 iFrameBody1 = iFrame1.contentDocument.getElementsByTagName('body')[0];
		   }
		   else if ( iFrame1.contentWindow ) 
		   { // IE
			 iFrameBody1 = iFrame1.contentWindow.document.getElementsByTagName('body')[0];
		   }
	 
	  MyApp_RemoveAllHighlights();
	  MyApp_HighlightAllOccurencesOfStringForElement(iFrameBody1, keyword.toLowerCase());
  }
}

// helper function, recursively removes the highlights in elements and their childs
function MyApp_RemoveAllHighlightsForElement(element) {
  if (element) {
    if (element.nodeType == 1) {
      if (element.getAttribute("class") == "MyAppHighlight") {
        var text = element.removeChild(element.firstChild);
        element.parentNode.insertBefore(text,element);
        element.parentNode.removeChild(element);
        return true;
      } else {
        var normalize = false;
        for (var i=element.childNodes.length-1; i>=0; i--) {
          if (MyApp_RemoveAllHighlightsForElement(element.childNodes[i])) {
            normalize = true;
          }
        }
        if (normalize) {
          element.normalize();
        }
      }
    }
  }
  return false;
}

// the main entry point to remove the highlights

function MyApp_RemoveAllHighlights() {
  MyApp_SearchResultCount = 0;
  MyApp_RemoveAllHighlightsForElement(iFrameBody1);

}

function removeAllHighLight(){
	for(var i = 1;i<=no_of_pages;i++){
		iFrame1 = document.getElementById("page"+i).getElementsByTagName('iframe')[0];
		   if ( iFrame1.contentDocument ) 
		   { // FF
			 iFrameBody1 = iFrame1.contentDocument.getElementsByTagName('body')[0];
		   }
		   else if ( iFrame1.contentWindow ) 
		   { // IE
			 iFrameBody1 = iFrame1.contentWindow.document.getElementsByTagName('body')[0];
		   }
	 
	  MyApp_RemoveAllHighlightsForElement(iFrameBody1);
    }
}
