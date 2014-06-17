var widthmax=0;
var counts=0;
var firstcome=true;
function match(){
	
    //Variable declaration...
    var _this = this;
    this.init = function(){	
        this.identifer = "";
        this.title = "";
        this.correctResponse_arr = new Array();
        this.mapping_arr = new Array();
        this.question_arr = new Array();
        this.answer_arr = new Array();
        this.promptStr = "";
		
        this.takenDiv = null;
		
        this.divName_arr = new Array();

        this.questionId = 0; 
		
        this.allCorrect = true;
        this.ack_arr = new Array();
        this.catch_arr = new Array();
        this.dupDiv_arr = new Array();
		
        this.attempt = false;
        this.dummyAns_arr = new Array();
		
        this.submitEnabled = false;		
        this.backgo=false;
    }
	
    //Retrieve data...
	
    this.createQuestion = function(xmlObj,questId){
        //document.getElementById('questionCont').style.marginTop = '-56px';
        this.questionId = questId;
        this.allCorrect = true;
        this.catch_arr = new Array();
        this.dupDiv_arr = new Array();
		
        this.getActivityDetails(xmlObj);
        var correctValue = xmlObj.getElementsByTagName('correctResponse')[0].childNodes;
        this.getCorrectResponse(correctValue);
       // var mapValue =  xmlObj.getElementsByTagName('mapping')[0].childNodes; //changed... suresh
        //this.getMapValue(mapValue);
        var questValue = xmlObj.getElementsByTagName('matchInteraction')[0].childNodes;
        this.getQuestValue(questValue);
       // document.getElementById('heading2').innerHTML = promptStr;
		
		
        this.buildQuestions();
        this.createFeedback();
		
        user_choice[this.questionId].question = this.title;
        user_choice[this.questionId].correctAnswerValue = this.correctResponse_arr;
        user_choice[this.questionId].question_arr = this.question_arr;
        user_choice[this.questionId].answer_arr = this.answer_arr;
        user_choice[this.questionId].userAttend = false;
		
    }
	
    this.getActivityDetails = function(actNode){
        this.identifer = (actNode.getAttribute('identifier')).toUpperCase();
        this.title = (actNode.getAttribute('title'));
        //document.getElementById('heading1').innerHTML = this.identifer;
        document.getElementById('heading2').innerHTML = this.title;
		if(actNode.getElementsByTagName('learningObjective')[0] != undefined){
			if(actNode.getElementsByTagName('learningObjective')[0].childNodes.length > 0){
				this.learningObject = actNode.getElementsByTagName('learningObjective')[0].childNodes[0].nodeValue;
			}
			else{
				this.learningObject = "";
			}
		}
        else{
        	this.learningObject = "";
        }
		
		if(actNode.getElementsByTagName('location')[0] != undefined){
			if(actNode.getElementsByTagName('location')[0].childNodes.length > 0){
				this.location = actNode.getElementsByTagName('location')[0].childNodes[0].nodeValue;
			}
			else{
				this.location = "";
			}
		}
        else{
        	this.location = "";
        }
		
		
		
        user_choice[this.questionId].section =  this.location;
        user_choice[this.questionId].type =  this.learningObject;
		
        //document.getElementById('heading2').innerHTML = this.location;
        //document.getElementById('lobject').innerHTML = " - "+this.learningObject;
        
        //        if(nav == 'Iphone' || nav == 'Ipad'){
        //         var qStatus = document.getElementById('heading1').innerHTML;
        //	   	 document.getElementById('heading1').innerHTML = qStatus+" - "+this.location+" - "+this.learningObject;
        //	    }
        //	    else{
        //	    	document.getElementById('heading2').innerHTML = this.location;
        //        	document.getElementById('lobject').innerHTML = " - "+this.learningObject;
        //	    }
        
         var lO = (this.learningObject == "")?"":" - "+this.learningObject;
 		var loc = (this.location == "")?"":" - "+this.location;
 		
        if(nav == 'Ipad' || nav =='Iphone')
            document.getElementById('questionBread').innerHTML =document.getElementById('questionBread').innerHTML +lO+loc;
        else{
            document.getElementById('heading2').innerHTML = this.location;
            document.getElementById('questionBread').innerHTML =document.getElementById('questionBread').innerHTML +lO;
        }
		
    /*this.learningObject = actNode.getElementsByTagName('learningObjective')[0].childNodes[0].nodeValue;
		this.location = actNode.getElementsByTagName('location')[0].childNodes[0].nodeValue; 
		document.getElementById('heading2').innerHTML = this.location;
		document.getElementById('lobject').innerHTML = " - "+this.learningObject;*/
		
    }
	
    this.getCorrectResponse = function(correctNode){
        for(var i =0;i<correctNode.length;i++){
            if(correctNode[i].nodeType == 1){
				
                this.correctResponse_arr.push(correctNode[i].childNodes[0].nodeValue);
            }
        }
    }
	
    this.getMapValue = function(mapNode){
        for(var i =0;i<mapNode.length;i++){
            if(mapNode[i].nodeType == 1){
                this.mapping_arr.push({
                    mapKey:mapNode[i].getAttribute('mapKey'),
                    mapValue:mapNode[i].getAttribute('mappedValue')
                });
            }
        }
    }
	
    this.getQuestValue = function(questNode){
        var questCount = -1;
        var questObj = new Object();
        var _type = 'question';
	
        for(var i = 0;i<questNode.length;i++){
			
			
            if(questNode[i].nodeType == 1)
            {
                if(questNode[i].nodeName == "prompt"){
                    var _str = this.XMLtoString(questNode[i]);
                    _str = _str.replace("</prompt>","");
                    var sInd = _str.indexOf('>');
                    _str = _str.substr(sInd+1).replace("<p>","").replace("</p>","");//changes v1.17
                    promptStr = _str;
					
                   // promptStr = questNode[i].childNodes[0].nodeValue;
                }
                else if(questNode[i].nodeName == "simpleMatchSet")
                {
                    var _childNode = questNode[i].childNodes;
                    if(_type == 'question'){
                        for(var j = 0;j<_childNode.length;j++){
                            if(_childNode[j].nodeType == 1){
								
                                this.answer_arr.push({
                                    identifier:_childNode[j].getAttribute('identifier'),
                                    val:_childNode[j].childNodes[0].nodeValue
                                });
                            }
                        }
                        _type = "answer";
                    }
                    else{
                        for(j = 0;j<_childNode.length;j++){
                            if(_childNode[j].nodeType == 1){
								
                                this.question_arr.push({
                                    identifier:_childNode[j].getAttribute('identifier'),
                                    val:_childNode[j].childNodes[0].nodeValue
                                });
                            }
                        }
                        _type = "question";
                    } 
                }
            }
        }
    }
	
    this.XMLtoString = function(elem)
    {
		
        var serialized;
		
        try {
            // XMLSerializer exists in current Mozilla browsers
            serializer = new XMLSerializer();
            serialized = serializer.serializeToString(elem);
        } 
        catch (e) {
            // Internet Explorer has a different approach to serializing XML
            serialized = elem.xml;
        }
		
        return serialized;
    }
	
    // Question creation...
	
    this.buildQuestions = function(){
        var _width = 13;
        var _left = 0;
        var _top = 10;
        var _height = 0;
        var totalHeight = 0;
        var vSpace = 0;
        var maxWidth = 0;
		
        //        if(MODE != "immediate"){//dinesh
        //            if(!REVIEW_MODE)
        //                user_choice[this.questionId].choicePlaced = new Object();
        //        }
        //        else{
        if(!user_choice[this.questionId].choicePlaced){
				   
            user_choice[this.questionId].choicePlaced = new Object();
        }
        //        }
		
		
        var quest_Div = this.createObject('question',{
            width:'auto',
            height:'auto',
            fontSize:'16px',
            fontFamily:'arial',
            marginTop:'0px',
            paddingLeft:'24px'
        },'div');
        quest_Div.innerHTML = promptStr;
        document.getElementById('questionCont').appendChild(quest_Div);
        
        _top = Number(quest_Div.offsetTop) + Number(quest_Div.offsetHeight) + 10;
        
        
        	
        for(var i = 0;i<this.answer_arr.length;i++)
        {
		    
			
			
            //document.getElementById('ansCont').offsetTop + 5;
            _left = _width ;
			
            if(_left > 580){
				
                _top += 50;
                _left = 13;
                vSpace = 40;
            }
            
            var ans_div = this.createObject('ans_'+this.answer_arr[i].identifier,{
                position:'absolute',
                left:_left+'px',
                top:_top+'px',
                width:'auto',
                height:'auto',
                marginLeft:'10px',
                fontSize:'14px',
                fontFamily:'sans-serif',
                padding:'9px 5px 5px',
                cursor:'pointer',
                zIndex:300
            },'div')
			
			
            //            ans_div.setAttribute('class','match_ans');
            ans_div.setAttribute('sleft',_left+'px');
			
			ans_div.setAttribute('sstop',_top+'px');
            //ans_div.setAttribute('class','answerBox');
            ans_div.setAttribute('class','answerBox');
            this.divName_arr[this.answer_arr[i].identifier] = 'ans_'+this.answer_arr[i].identifier;
            ans_div.innerHTML = this.answer_arr[i].val;
            document.getElementById('questionCont').appendChild(ans_div);
            _width = ans_div.offsetLeft + ans_div.offsetWidth + 10;
            ans_div.setAttribute('initX',_left+'px');
            ans_div.setAttribute('initY',(_top)+'px');
            ans_div.setAttribute('index',0);
            ans_div.setAttribute('zindex',300);
            ans_div.setAttribute('fit',false);
            ans_div.setAttribute('_id',('ans_'+this.answer_arr[i].identifier))
            ans_div.setAttribute('_width',ans_div.offsetWidth-10);
			
            if(ans_div.offsetWidth > maxWidth){
                maxWidth = ans_div.offsetWidth;
            }
			
            if(!REVIEW_MODE)
                $('#ans_'+this.answer_arr[i].identifier).draggable({
                    start:this.createDiv,
                    stop:this.checkDi,
                    revert:true,
                    containment: "parent"
                });
			
            _height = Number(ans_div.offsetHeight);
        }
		
        //document.getElementById('questionCont').style.height = _height+'px';
		
        var _questHeight = 0;
        _height += 40;
        var maxLeft = 0;
        var initTop = _top;
        
        for(i = 0;i<this.question_arr.length;i++){
            _left = 13;
            if(browser.android || browser.blackberry || browser.iphone)
            _top = ((i * (_questHeight + 40))+(_height+vSpace))+initTop; 
			else
			_top = ((i * (_questHeight + 40))+(_height+vSpace));
           
            if(user_choice[this.questionId].choicePlaced[this.question_arr[i].identifier] == "undefined"){
					
                user_choice[this.questionId].choicePlaced[this.question_arr[i].identifier] = "empty";
            }
            //            }
			
			// alert("top="+_top)
			
			
            _left = _left + 10;
			
            var slno_div = this.createObject('sno_'+i,{
                position:'absolute',
                paddingBottom:'5px',
                left:_left+'px',
                top:_top+'px',
                width:'23px',
                height:'29px',
                backgroundRepeat:'no-repeat',
                marginTop:'17px',
                fontFamily:'sans-serif',
                padding:'3px 3px 0 8px',
                cursor:'default',
                fontWeight:'bold'
            },'div');
            slno_div.setAttribute('class','slno');
			
            //document.getElementById('questionCont').appendChild(slno_div);
			
            //slno_div.innerHTML = (i+1);
			
            //_left = _left+35;
			
            var quest_div = this.createObject('quest_'+i,{
                position:'absolute',
                left:_left+'px',
                top:_top+'px',
                width:'auto',
                height:'auto',
                marginTop:'15px',
                fontSize:'16px',
                fontFamily:'arial',
                padding:'5px',
                cursor:'default'
            },'div');
            quest_div.setAttribute('class', 'match_quest')
            quest_div.innerHTML = this.question_arr[i].val;
			
            document.getElementById('questionCont').appendChild(quest_div);
			
            _questHeight = quest_div.offsetHeight;
			
            if(maxLeft < (_left + quest_div.offsetWidth))
                maxLeft = (_left + quest_div.offsetWidth);
			
            _left = _left + 150;
            var blank_div = this.createObject('blank_'+this.question_arr[i].identifier,{
                position:'absolute',
                left:_left+'px',
                top:_top+'px',
                width:maxWidth+'px',
                height:'28px',
                backgroundRepeat:'repeat-x',
                marginTop:'15px',
                fontSize:'20px',
                fontFamily:'arial',
                padding:'5px',
                cursor:'default'
            },'div');
            widthmax=maxWidth;
            blank_div.setAttribute('class','blankBox');
            blank_div.setAttribute('ondrop','');
            document.getElementById('questionCont').appendChild(blank_div);
			
            blank_div.setAttribute('holdId','')
            $('#blank_'+this.question_arr[i].identifier).droppable({
                drop:this.onDrop
            });
			
            _left = _left + blank_div.offsetWidth + 10;
            var ack_div = this.createObject("ack_"+this.question_arr[i].identifier,{
                position:'absolute',
                left:_left+'px',
                top:(_top-1)+'px',
                width:'25px',
                height:'25px',
                marginTop:'18px',
                cursor:'default',
                padding:'2px 3px 3px 0px',
                visibility:'hidden'
            },'div')
            ack_div.setAttribute('class', 'acknowledge')
            ack_div.innerHTML = "<img src='' width='100%' height='100%' />";
            document.getElementById('questionCont').appendChild(ack_div);
            this.ack_arr.push(ack_div);
			
            totalHeight = quest_div.offsetTop + quest_div.offsetHeight;
			
			
        }
		
        for(i = 0;i<this.question_arr.length;i++){
            document.getElementById('blank_'+this.question_arr[i].identifier).style.left = (maxLeft+10)+'px';
        }
		
		
        document.getElementById('questionCont').style.height = totalHeight+'px';
		
		
    }
    
    this.dragDiv = function(_div){
        
        if(_div.attr('fit')=='true'){
            //            if (nav=='Ipad'||nav=='Iphone')//new
            goingtoremove(document.getElementById(_div.attr('id')) ,"no");
        }
    }
	
    this.createDiv = function(e,ui){
        
    //	e.preventDefault();
		
    //        var _left = this.getAttribute('initX');
    //        var _top = this.getAttribute('initY');
    //        var _width = (Number(this.getAttribute('_width')) + 5)+'px';
    //        var _height = this.offsetHeight+'px';
    //        var _txt = this.innerHTML;
    //        var _index = Number(this.getAttribute('index'))+1;
    //        var _id = this.id.split("_")[1];
    //        var _zindex = Number(this.getAttribute('zindex'))-1;
		
    //this.divName_arr[this.id.split("_")[1]] = this.id+"_"+_index;
    //		var dummyDiv = _this.createObject(this.id+"_"+_index,{position:'absolute',left:_left,top:_top,width:_width,height:'26px',backgroundRepeat:'repeat-x',marginLeft:'10px',fontSize:'16px',fontFamily:'arial',padding:'5px',cursor:'pointer',paddingTop:'7px',zIndex:_zindex},'div')
    //		dummyDiv.setAttribute('class','answerBox');
    //		
    //		dummyDiv.innerHTML = _txt;
    //		dummyDiv.setAttribute('initX',_left);
    //			dummyDiv.setAttribute('initY',_top);
    //			dummyDiv.setAttribute('index',_index);
    //			dummyDiv.setAttribute('_width',this.getAttribute('_width'));
    //			dummyDiv.setAttribute('zindex',_zindex);
    //			dummyDiv.setAttribute('fit',false)
    //			dummyDiv.setAttribute('_id',this.getAttribute("_id"));
    //		document.getElementById('questionCont').appendChild(dummyDiv);
    //		_this.dummyAns_arr.push(this.id+"_"+_index);
		
    //		$("#"+this.id+"_"+_index).draggable({start:_this.createDiv,stop:_this.checkDiv,revert:true});
		
    }
    
    this.onDrop = function(event,ui){
        firstcome=true;
        if(this.getAttribute('holdId') == ''){
            var src_div = document.getElementById(ui.draggable.attr('id'));
            var dest_div = this;
            src_div.style.left = (document.getElementById(dest_div.id).style.left);
            document.getElementById(dest_div.id).style.visibility='collapse';//collapse
            src_div.style.top = (Number(dest_div.offsetTop))+'px';
            $("#"+src_div.id).css({
                "margin-left":"0px"
            });//new
            src_div.style.zIndex = 10;
            dest_div.style.width = (src_div.offsetWidth - 20)+'px';
            dest_div.style.height = '22px';
            if (nav=='Iphone'&&orientation1=='portrait')
                $("#"+src_div.id).css({
                    "max-width":"120px"
                })
            var id = dest_div.id.split("_")[1];
            document.getElementById('ack_'+id).style.left = (dest_div.offsetLeft + dest_div.offsetWidth + 10) + 'px';
            //            if (nav=='Windows')
            //			 var _wid =  document.getElementById(ui.draggable.attr('id')).offsetWidth; 
            //			 document.getElementById(ui.draggable.attr('id')).innerHTML=document.getElementById(ui.draggable.attr('id')).innerHTML+"<div  src='images/wrong3.png' width=20 height=19 onclick='goingtoremove(this,\"yes\");' id='"+dest_div.id+"__1' setid="+dest_div.id+" style='visibility: visible;z-index: 500;width:"+_wid+"px;height:35px;position:absolute;left:0px;top:0px'></div>";
			 
            /* document.getElementById(ui.draggable.attr('id')).innerHTML=document.getElementById(ui.draggable.attr('id')).innerHTML+"<input type=image src='images/wrong3.png' width=20 height=19 onclick='goingtoremove(this,\"yes\");' id='"+dest_div.id+"__1' setid="+dest_div.id+" style='visibility: visible;z-index: 500'>";*///dinesh
            //  $("#"+src_div.id).draggable('disable');
            //document.getElementById(src_div.id).setAttribute('onclick', 'alert("working")')
            //            document.getElementById(dest_div.id+"__1").addEventListener("touchstart", goingtoremove, false);
            //ui.draggable.remove();
            //            if (nav=='Windows')
            //                $('#'+src_div.id).draggable('disable')
            //            $('#'+src_div.id).click(function(){alert("click");});
            document.getElementById(src_div.id).setAttribute('class','answerBox');
            document.getElementById(src_div.id).setAttribute('setid',dest_div.id);
            //            document.getElementById(src_div.id).setAttribute('onkeypress', 'calls(this)');
            //            if (nav!='Windows')
            document.getElementById(src_div.id).setAttribute('ondragstart', "calls($(this))");
            //                            $('#'+src_div.id).bind('dragstart', function(event) {
            //                                _this.dragDiv($(this));
            //                                event.preventDefault();
            //                            });
            dest_div.setAttribute('divIid',src_div.id);
            dest_div.setAttribute('holdId',src_div.id.split("_")[1])
            $('#'+src_div.id).draggable({
                revert:false
            })
           
            src_div.setAttribute('fit',true)

            _this.catch_arr.push(src_div);
            var identifier = dest_div.id.split("_")[1];
            
            user_choice[_this.questionId].choicePlaced[identifier] = src_div.getAttribute('_id');
            /*if( _this.matchCorrect(identifier,user_choice[_this.questionId].choicePlaced[identifier])){
				_this.showFeedback("Correct",this,1);
			}
			else{
				_this.showFeedback("Wrong",this,0);
			}*/
			
            counts++;
            _this.allFilled();
        //$('#'+src_div.id).draggable("destroy")
        }
    }
	
    this.allFilled = function(){
        for(var i = 0;i<this.question_arr.length;i++){
            if(document.getElementById('blank_'+this.question_arr[i].identifier).getAttribute('holdId') == ""){
                this.attempt = false;
                return;
            }
        }
        var allMatch = true;
        var ansObj = user_choice[this.questionId].choicePlaced;
        for(i in ansObj){
            if(ansObj[i] != "empty"){
                if( ! this.matchCorrect(i,ansObj[i]) ){
                    allMatch = false;
                }
            }
        }
		
        if(allMatch){
            user_choice[this.questionId].score = 1;
        }
		
        this.attempt = true;
		
        for(i =0 ;i<this.dummyAns_arr.length;i++){
            $('#'+this.dummyAns_arr[i]).draggable({
                disabled:true
            });
        }
    }
	
    this.checkDiv = function(e,ui)
    {
    //		if(this.getAttribute('fit') == 'false' || this.getAttribute('fit') == false)
    //		{
    //			document.getElementById('questionCont').removeChild(this);
    //		}
    //		else
    //		{
    //			$('#'+this.id).draggable({disabled:true});
    //		}
    }
	
    this.createObject = function(id,obj,type){
        var _obj = document.createElement(type);
        _obj.setAttribute('id',id);
        for(var i in obj){
            _obj.style[i] = obj[i]
        }
        return _obj;
    }
	
    this.showUserAnswer = function(byId){
        var ansObj = user_choice[this.questionId].choicePlaced;
        var totCount = 0;
        for(var i in ansObj){
            if(ansObj[i] != "empty"){
                totCount++;
                this.createDup(document.getElementById('blank_'+i),document.getElementById(ansObj[i]),0);
                document.getElementById('blank_'+i).style.visibility='collapse';//collapse
                document.getElementById('ack_'+i).style.visibility = 'visible';
                if( this.matchCorrect(i,ansObj[i]) ){
                    //document.getElementById('ack_'+i).style.backgroundImage = "url('images/"+themeSelected+"/right.png')";
                    document.getElementById('ack_'+i).getElementsByTagName('img')[0].src = 'images/'+themeSelected+'/right.png';
                }
                else{
                    this.allCorrect = false;
                    //document.getElementById('ack_'+i).style.backgroundImage = "url('images/"+themeSelected+"/wrong.png')";
                    document.getElementById('ack_'+i).getElementsByTagName('img')[0].src = 'images/'+themeSelected+'/wrong.png';
                }
            }
        }
		
        if(this.allCorrect){
			
            document.getElementById('showanswer').style.display = 'none';
			
        }
        if((byId == 1 && totCount == 4)||MODE=='immediate'||REVIEW_MODE){
            for(i =0 ;i<this.answer_arr.length;i++){
                //                $('#ans_'+this.answer_arr[i].identifier).draggable({
                //                    disabled:true
                //                });
                $('#ans_'+this.answer_arr[i].identifier).css({
                    "visibility":"hidden"
                });//dinesh
            }
        }
    }
	
    this.showUserData = function(){
        if (MODE=='immediate'){
            var ansObj = user_choice[this.questionId].choicePlaced;
            for(var i in ansObj){
                if(ansObj[i] != "empty")
                {
                    document.getElementById('ack_'+i).style.visibility = 'visible';
                    if( this.matchCorrect(i,ansObj[i]) ){
                        //document.getElementById('ack_'+i).style.backgroundImage = "url('images/"+themeSelected+"/right.png')";
                        document.getElementById('ack_'+i).getElementsByTagName('img')[0].src = 'images/'+themeSelected+'/right.png';
                    }
                    else{
                        this.allCorrect = false;
                        //document.getElementById('ack_'+i).style.backgroundImage = "url('images/"+themeSelected+"/wrong.png')";
                        document.getElementById('ack_'+i).getElementsByTagName('img')[0].src = 'images/'+themeSelected+'/wrong.png';
                    }
                }
            }
            this.submitEnabled = true;
        }
        quizObj.showUserAnswer();
    }
		
	
    this.createDup = function(mc1,mc2,byId){
        //	e.preventDefault();
		
        var _left = (mc1.offsetLeft-8)+'px';
        var _top = (mc1.offsetTop)+'px';
        var _width = mc2.offsetWidth + 'px';
        var _height = (mc2.offsetHeight - 10) + 'px';
        var _txt = mc2.innerHTML;
		
        var _id = mc2.id.split("_")[1];
        var blankId = mc1.id.split("_")[1];
		
        var _index = Number(mc1.getAttribute('index'))+1;
		
        var _zindex = 2;//Number(mc2.getAttribute('zindex'))-1;
		
		 
        var dummyDiv = _this.createObject(_id+"_"+_index,{
            position:'absolute',
            left:_left,
            top:_top,
            width:_width,
            height:'auto',
            backgroundRepeat:'repeat-x',
            marginLeft:'10px',
            fontSize:'14px',
            fontFamily:'arial',
            padding:'5px',
            cursor:'pointer',
            paddingTop:'7px',
            zIndex:_zindex
        },'div');
		 
        dummyDiv.setAttribute('class','answerBox');
        /* 
		var dummyDiv = this.createObject(mc1.id+"_"+_index+"_",{position:'absolute',left:_left,top:_top,width:_width,height:'20px',color:'#fff',backgroundImage:"url('images/"+themeSelected+"/btnbgstrip1.png')",backgroundRepeat:'repeat-x',marginLeft:'10px',fontSize:'13px',fontFamily:'verdana',padding:'5px',cursor:'pointer',paddingTop:'7px',fontWeight:'bold',zIndex:_zindex},'div')*/
		
        dummyDiv.innerHTML = _txt;
        dummyDiv.setAttribute('initX',_left);
        dummyDiv.setAttribute('initY',_top);
        dummyDiv.setAttribute('index',_index);
        dummyDiv.setAttribute('_width',mc2.getAttribute('_width'));
        dummyDiv.setAttribute('zindex',_zindex);
        dummyDiv.setAttribute('fit',false)
        document.getElementById('questionCont').appendChild(dummyDiv);
        this.dupDiv_arr.push(dummyDiv);

        mc1.style.width = _width;
        mc1.style.height = _height;
        document.getElementById('ack_'+blankId).style.left = (mc1.offsetLeft + mc1.offsetWidth+5)+'px';
        
    }
	
    this.matchCorrect = function(ques,ans){
        for(var i = 0;i<this.correctResponse_arr.length;i++){
            var splitArr = this.correctResponse_arr[i].split(" ");
            if(ques == splitArr[0] && ans.split("_")[1] == splitArr[1]){
                return true;
            }
        }
        return false;
    }
	
    this.showCorrectAnswer = function(){
        this.resetWorkspace();
        //        for(var i = 0;i<this.correctResponse_arr.length;i++){
        //            var splitArr = this.correctResponse_arr[i].split(" ");
        //            this.createDup(document.getElementById('blank_'+splitArr[0]),document.getElementById('ans_'+splitArr[1]),1);
        //        }
        var ansObj = user_choice[this.questionId].choicePlaced;
        var totCount = 0;
        var f=65;
        for(var i in ansObj){
            var ss=String.fromCharCode(f);
            if(ansObj[i] != "empty"){
                totCount++;
                if(document.getElementById("blank_"+ss).getAttribute('holdId') == ''){
                    
                    var src_div = document.getElementById(ansObj[i]);
                    var dest_div = document.getElementById("blank_"+ss);
                    document.getElementById("blank_"+ss).style.visibility="collapse";//collapse
                    src_div.style.left = (dest_div.offsetLeft - 15)+'px';
			
                    src_div.style.top = (Number(dest_div.offsetTop))+'px';
                    src_div.style.zIndex = 10;
                    dest_div.style.width = (src_div.offsetWidth - 20)+'px';
                    dest_div.style.height = '22px';
			
                    var id = dest_div.id.split("_")[1];
                    document.getElementById('ack_'+id).style.left = (dest_div.offsetLeft + dest_div.offsetWidth + 10) + 'px';
                    //                    if (nav=='Windows'){
                    //                        document.getElementById(ansObj[i]).innerHTML=document.getElementById(ansObj[i]).innerHTML+"<input type=image src='images/wrong3.png' width=20 height=19 onclick='goingtoremove(this,\"yes\");' id='"+dest_div.id+"__1' setid="+dest_div.id+" style='visibility: visible'>";//dinesh
                    //                        $("#"+src_div.id).draggable( 'disable');
                    //                    }
                    document.getElementById(src_div.id).setAttribute('class','answerBox');
                   
                    document.getElementById(src_div.id).style.height = 'auto';
                    document.getElementById(src_div.id).setAttribute('setid','blank_'+ss);
                    //                    if (nav!='Windows')
                    document.getElementById(src_div.id).setAttribute('ondragstart', "calls($(this))");
                    dest_div.setAttribute('divIid',src_div.id);
                    dest_div.setAttribute('holdId',src_div.id.split("_")[1])
                    $('#'+src_div.id).draggable({
                        revert:false
                    })
                    src_div.setAttribute('fit',true)

                    _this.catch_arr.push(src_div);
                    var identifier = dest_div.id.split("_")[1];
			
                    user_choice[_this.questionId].choicePlaced[identifier] = src_div.getAttribute('_id');
                    _this.allFilled();
                }
            }
            f++;
        }
        counts=4;
    }
	
    this.resetWorkspace = function(){
        for(var i = 0;i<this.catch_arr.length;i++){
            this.catch_arr[i].parentNode.removeChild(this.catch_arr[i]);
        }
        for(i = 0;i<this.dupDiv_arr.length;i++){
			
            this.dupDiv_arr[i].parentNode.removeChild(this.dupDiv_arr[i]);
        }
        this.catch_arr = new Array();
        this.dupDiv_arr = new Array();
        for(i = 0;i<this.ack_arr.length;i++){
            //this.ack_arr[i].style.backgroundImage = "";
            this.ack_arr[i].getElementsByTagName('img')[0].src = "";
            this.ack_arr[i].style.visibility = 'hidden';
        }
    }
	
    this.hideCorrectAnswer = function(){
        this.resetWorkspace();
        this.showUserAnswer();
    }
	
    this.createFeedback = function(){
        var feedbackCont = this.createObject('feedbackCont',{
            width:'240px',
            height:'80px',
            visibility:'hidden',
            position:'absolute'
        },'div');
        document.getElementById('questionCont').appendChild(feedbackCont);
		
		
        var feedbackBody = this.createObject('feedBody',{
            width:'171px',
            height:'30px',
            margin:'15px auto 0 19px',
            position:'absolute',
            textAlign:'center',
            paddingTop:'5px',
            fontFamily:'arial'
        },'div');
		
        feedbackBody.setAttribute('class','feedBody');
		
        feedbackCont.appendChild(feedbackBody);
		
        var feedHeader = this.createObject('feedHeader',{
            width:'30px',
            height:'30px',
            backgroundRepeat:'no-repeat',
            position:'absolute'
        },'div');
        feedbackCont.appendChild(feedHeader); 
		
    }
	
    this.showFeedback = function(str,_this,imageId){
        document.getElementById('feedbackCont').style.visibility = 'visible';
        document.getElementById('feedBody').innerHTML = str;
	
        document.getElementById('feedbackCont').style.left = (_this.offsetLeft + _this.offsetWidth + 10)+'px';
        document.getElementById('feedbackCont').style.top =  (_this.offsetTop)+'px';
        if(imageId == 0){
            document.getElementById('feedHeader').style.backgroundImage = "url('images/"+themeSelected+"/wrong.png')";
        }
        else{
            document.getElementById('feedHeader').style.backgroundImage = "url('images/"+themeSelected+"/right.png')";
        }
    //setTimeout(this.hideFeedback,1000);
    }
	
    this.hideFeedback = function(){
        document.getElementById('feedbackCont').style.visibility = 'hidden';
    }
	
}
function goingtoremove(_getthis,vas)
{
	
    if (vas=='yes'){
        var ids=$(_getthis).parent().attr('id');
        var swidth=$(_getthis).parent().attr('sleft');
		var sstop = $(_getthis).parent().attr('sstop');
        var ssid=$(_getthis).attr('setid');
    }
    else if (vas=='no'){
        ssid=document.getElementById(_getthis.id).getAttribute('setid');
        //        alert(ssid);
        ids=$(_getthis).attr('id');
		var sstop = $(_getthis).attr('sstop');
        swidth=$(_getthis).attr('sleft');
    }


    for(var i = 0;i<quizObj.answer_arr.length;i++)
    {
        var sid=ids.split("_")[1];
        if (quizObj.answer_arr[i].identifier==sid){
            txt=document.getElementById("ans_"+quizObj.answer_arr[i].identifier).textContent;
	
            var ans_div = "<div id='ans_"+quizObj.answer_arr[i].identifier+ "' style=\'position:absolute;left:"+swidth+";top:"+sstop+";zIndex:300;cursor:pointer;font-family:sans-serif; padding:9px 5px 5px;width:auto;height:auto;font-size:14px;margin-left:10px;' class=answerBox initX="+swidth+" fit=false zindex=300 index=0 initY="+10+"px _id='ans_"+quizObj.answer_arr[i].identifier+"' sleft="+swidth+" sstop="+sstop+">"+txt+"</div>";
            $("#ans_"+quizObj.answer_arr[i].identifier).remove();
            document.getElementById('questionCont').innerHTML=document.getElementById('questionCont').innerHTML+ans_div;
            var bid=_getthis.getAttribute("setid");
            document.getElementById('ans_'+quizObj.answer_arr[i].identifier).style.fontSize = '14px';
        }
    }
	
	
	
    for(i = 0;i<quizObj.answer_arr.length;i++)
    {
        $('#ans_'+quizObj.answer_arr[i].identifier).draggable({
            start: this.createDiv,
            stop:this.checkDi,
            revert:true,
            containment: "parent"
        });
        $('#blank_'+quizObj.answer_arr[i].identifier).droppable({
            drop:quizObj.onDrop
        });
    }
    document.getElementById(ssid).style.visibility='visible';
    document.getElementById(bid).setAttribute('holdId','');
    $("#"+bid).width(widthmax+"px");
    counts--;
    this.attempt=false;
    firstcome=true;
}
function calls(getthis)
{
    quizObj.dragDiv(getthis);
    event.preventDefault();
}