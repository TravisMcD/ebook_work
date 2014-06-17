var uid;//dinesh
function feedback()
{
    _this = this;
    this.init = function()
    {
        this.xmlDoc = null;
        this.identifer = "";
        this.title = "";
        this.correctAnswer = "";
        this.mapping_arr = new Array();
        this.question_arr = new Array();
        this.choiceArr = new Array();
        this.no_of_choice = 0;
		
        this._score = 0;
        this.showAnswerVisible = true;
        this.sampleAns_arr = new Array();
        this.correctDivId = "";
		
        this.questionId = 0;
        this.attempt = false;
        this.userChoice = 0;
        this.submitEnabled = false;
		
        this.alphabetArr = new Array("A","B","C","D","E","F","G","H","I","J","K","L");
        
    //        alert("feed init");
    }

    this.createQuestion= function(xmlObj,questId)
    {
        this.questionId = questId;
        this.getActivityDetails(xmlObj);
        this.correctValue = xmlDoc.getElementsByTagName('correctResponse')[currentQuestion].childNodes;
        this.getCorrectResponse(this.correctValue);
        this.questValue = xmlDoc.getElementsByTagName('itemBody')[currentQuestion].childNodes;
        this.getQuestValue(this.questValue);
        this.buildQuestion();
		
		
        user_choice[this.questionId].correctAnswerValue = this.getCorrectValue(this.correctAnswer);
        //alert("xxx="+this.question_arr[0].quest);
        user_choice[this.questionId].question = this.question_arr[0].quest;
        this.createFeedback();
    //        alert("working")
		
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
//            var qStatus = document.getElementById('heading1').innerHTML;
//            document.getElementById('heading1').innerHTML = qStatus+" - "+this.location+" - "+this.learningObject;
//        }
//        else{
//            document.getElementById('heading2').innerHTML = this.location;
//            document.getElementById('lobject').innerHTML = " - "+this.learningObject;
//        }

        var lO = (this.learningObject == "")?"":" - "+this.learningObject;
 		var loc = (this.location == "")?"":" - "+this.location;
 
        if(nav == 'Ipad' || nav =='Iphone')
            document.getElementById('questionBread').innerHTML =document.getElementById('questionBread').innerHTML +lO+loc;
            else{
            document.getElementById('heading2').innerHTML = this.location;
            document.getElementById('questionBread').innerHTML =document.getElementById('questionBread').innerHTML +lO;
        }
    }

    this.getCorrectResponse = function(correctNode){
        for(var i =0;i<correctNode.length;i++){
            if(correctNode[i].nodeType == 1){
                //this.correctResponse.push(correctNode[i].childNodes[0].nodeValue);
                this.correctAnswer = correctNode[i].childNodes[0].nodeValue;
				
            }
        }
    }
	
    this.getCorrectValue = function(correctAnsId){
        for(var i = 1;i<=this.no_of_choice;i++){
			
            if(this.question_arr[0]['choice_'+i][1] == correctAnsId){
                return this.question_arr[0]['choice_'+i][0];
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

    this.getQuestValue = function(parentNode){
        var choiceCount = 0;
        var questObj = new Object();
		
        for(var k = 0;k<parentNode.length;k++){
            if(parentNode[k].nodeType == 1){
                var questNode = parentNode[k].childNodes;
                for(var i = 0;i<questNode.length;i++){
					
                    if(questNode[i].nodeType == 1)
                    {
                        if(questNode[i].nodeName == "prompt"){
							
                            var _str = this.XMLtoString(questNode[i]);
                            _str = _str.replace("</prompt>","");
                            var sInd = _str.indexOf('>');
                            _str = _str.substr(sInd+1);
							
                            questObj.quest = _str;//questNode[i].childNodes[0].nodeValue;
                        }
                        else if(questNode[i].nodeName == 'simpleChoice'){
                            choiceCount ++;
                            questObj['choice_'+choiceCount] = new Array(questNode[i].childNodes[0].nodeValue,questNode[i].getAttribute('identifier') );
                            var childNode = questNode[i].childNodes;
                            for(var j = 0;j<childNode.length;j++){
                                if(childNode[j].nodeType == 1){
									
                                    questObj['choice_'+choiceCount].push(childNode[j].childNodes[0].nodeValue)
                                }
                            }
                        }
                    }
                }
                this.no_of_choice = choiceCount
                this.question_arr.push(questObj);
                questObj = new Object();
                choiceCount = 0;
            }
        }
    }

    this.XMLtoString = function(elem){
		
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
	
    //Question creation...
	
	
    this.buildQuestion = function(){
        for(var i = 0;i<this.question_arr.length;i++)
        {
            var _cont = this.createObject('cont_'+i,{
                position:'relative',
                width:'100%',
                height:'auto'
            },'div');
            document.getElementById('questionCont').appendChild(_cont);
			
            var quest_Div = this.createObject('quest_'+i,{
                position:'relative',
                paddingBottom:'10px',
                width:'auto',
                'height':'auto',
                cssFloat:'left',
                display:'table',
                marginTop:'0px'
            },'div');

            _cont.appendChild(quest_Div);
            quest_Div.setAttribute('holdId','')
			
            var quest = this.createObject('question_'+i,{
                position:'relative',
                width:'auto',
                height:'auto',
                fontSize:'16px',
                fontFamily:'sans-serif',
                padding:'10px',
                marginLeft:'15px',
                fontWeight:'bold'
            },'div');
			
            quest.innerHTML = this.question_arr[i].quest;
            quest_Div.appendChild(quest);
			
            var maxWidth = 0;
            for(var j = 0;j<this.no_of_choice;j++){
                var idn = this.question_arr[i]['choice_'+(j+1)][1];
				
                var choiceCont = this.createObject('choiceCont_'+j,{
                    position:'relative',
                    marginTop:'30px',
                    marginLeft:'15px',
                    width:'auto',
                    height:'30px',
                    display:'table'
                },'div');
                quest_Div.appendChild(choiceCont);
				
                var slno_div = this.createObject('sno_'+i,{
                    position:'relative',
                    paddingBottom:'5px',
                    cssFloat:'left',
                    width:'23px',
                    height:'29px',
                    backgroundRepeat:'no-repeat',
                    marginTop:'0px',
                    fontFamily:'sans-serif',
                    padding:'3px 3px 0 8px',
                    cursor:'default',
                    fontWeight:'bold'
                },'div');
                slno_div.innerHTML = this.alphabetArr[j]+".";
                slno_div.setAttribute('class','slno');
                choiceCont.appendChild(slno_div);
				
                var  choiceBox = this.createObject('choiceBox_'+j,{
                    position:'relative',
                    width:'auto',
                    height:'28px',
                    cssFloat:'left',
                    borderRadius:'3px',
                    padding:'5px',
                    cursor:'pointer'
                },'div');
				
                choiceBox.setAttribute('class','choiceBox');
                choiceBox.setAttribute('choiceName',idn)
                choiceCont.appendChild(choiceBox);
				
				
				
                if(!REVIEW_MODE){
                    //choiceBox.onclick = this.changeChoice;
                    //choiceBox.addEventListener(_mousedown,this.removeShadow);
                    //                    choiceBox.addEventListener(_mouseup,this.changeChoice);
                    choiceBox.onclick = this.changeChoice;
                }
				
                choiceBox.onmousedown = function(){
                    return false
                };
                /*var choice = this.createObject('choice_'+j,{position:'relative',backgroundImage:"url('images/"+themeSelected+"/"+themeSelected+"/'+themeSelected+'/choice.png')",backgroundRepeat:'no-repeat',marginLeft:'25px',width:'19px',height:'19px',fontSize:'16px',fontFamily:'arial',cssFloat:'left',cursor:'pointer',display:'table-cell'},'div');
				
				choiceBox.appendChild(choice);*/
                //choice.onclick = this.changeChoice;
                var trueText = this.createObject('trueText_'+j,{
                    position:'relative',
                    marginLeft:'10px',
                    width:'auto',
                    height:'auto',
                    fontSize:'16px',
                    fontFamily:'arial',
                    cssFloat:'left',
                    display:'table-cell',
                    marginTop:'3px'
                },'div');

                trueText.innerHTML = this.question_arr[i]["choice_"+(j+1)][0]; 
                choiceBox.appendChild(trueText);
				
                /* var ack = this.createObject('ack_'+j,{position:'relative',width:'19px',backgroundRepeat:'no-repeat',cssFloat:'left',display:'table-cell',backgroundColor:"",borderRadius:'3px',height:'40px',marginLeft:'-5px',backgroundPosition:'0px 12px'},'div')*/
			   
                var ack = this.createObject('ack_'+j,{
                    position:'relative',
                    width:'35px',
                    cssFloat:'left',
                    display:'table-cell',
                    backgroundColor:"",
                    borderRadius:'3px',
                    height:'40px',
                    marginLeft:'-2px',
                    marginTop:'-1px',
                    visibility:'hidden'
                },'div');
				
                ack.innerHTML = "<img style='margin-top:6px;margin-left:5px' src='' />";
				  
                choiceCont.appendChild(ack);
				
                this.choiceArr.push(choice)
                if(maxWidth < choiceBox.offsetWidth){
                    maxWidth = choiceBox.offsetWidth;
                }
            }
			
            for(j = 0;j<this.no_of_choice;j++){
                document.getElementById('choiceBox_'+j).style.width = maxWidth+'px';
            }
			
            var feedBack = this.createObject('feedback_'+i,{
                position:'relative',
                width:'auto',
                height:'auto',
                padding:'10px',
                paddingLeft:'45px',
                fontFamily:'sans-serif',
                fontSize:'14px',
                fontWeight:'bold'
            },'div');
            quest_Div.appendChild(feedBack);
        }
    }
	
    this.removeShadow = function(e){
        if(MODE == "summarized" && user_choice[_this.questionId].userAnswer)
            return;
        this.style.boxShadow = '2px 2px 1px #E0E0E0';
        this.setAttribute('class','btnNormal');
    }
	
    this.changeChoice = function(e){

        if(MODE == "immediate" && summ_arr[_this.questionId] == 1)
            return;
		
        if(_this.submitEnabled && MODE == "immediate")
            return;
		
		
        var choiceId = this.id.split("_")[1];
		
        _this.userChoice = choiceId;
		
        for(var i = 0;i<_this.no_of_choice;i++){
			
            document.getElementById("choiceBox_"+i).style.color = '#333333';
            document.getElementById("choiceBox_"+i).setAttribute('class','btnNormal');
        }
		
        user_choice[_this.questionId].userAnswer = "choiceBox_"+choiceId
		
		
		
        document.getElementById("choiceBox_"+choiceId).style.color = '#ffffff';
        //document.getElementById("choiceBox_"+choiceId).style.backgroundImage = "url('images/"+themeSelected+"/bg_strip1.png')";
        document.getElementById("choiceBox_"+choiceId).setAttribute('class','btnSelect');
        user_choice[_this.questionId].userAnswerValue = document.getElementById('trueText_'+choiceId).innerHTML;
        _this.attempt = true;
        _this.correctDivId = _this.getDivId(_this.correctAnswer)
        if (nav=='Iphone'&&!REVIEW_MODE){
            $("#questionCont").unbind('scroll');//new
            document.getElementById('nextBtn').style.visibility='visible';
            document.getElementById('submitBtn').style.visibility='visible';
            document.getElementById('prevBtn').style.visibility='visible';
        }
    }
	
    this.showUserData = function(){
        if( user_choice[this.questionId].userAnswer.split("_")[1] == (_this.getDivId(_this.correctAnswer)).split("_")[1]){
            user_choice[this.questionId].score = 1;
            document.getElementById('feedBody').style.display = 'none';
            this.showFeedback("Correct",document.getElementById('choiceBox_'+this.userChoice),1);
            this.submitEnabled = true;
            $('#choiceBox_'+this.userChoice).attr("class","btnSelect");//dinesh
            $('#choiceBox_'+this.userChoice).css("color","white");
            summ_arr[_this.questionId] = 1;
            //            this.showCorrectAnswer();
            return true;
        }
        else{
            user_choice[this.questionId].score = 0;
            document.getElementById('feedBody').style.display = 'block';
            var cid=(_this.getDivId(_this.correctAnswer)).split("_")[1];
            //var cid = this.correctDivId.split("_")[1];
            this.showFeedback("sorry but correct answer was <span style='font-weight:bold'>"+this.alphabetArr[cid]+"</span>",document.getElementById('choiceBox_'+this.userChoice),0);
            this.submitEnabled = true;
            $('#choiceBox_'+this.userChoice).attr("class","btnSelect");//dinesh
            $('#choiceBox_'+this.userChoice).css("color","white");
            document.getElementById('ack_'+this.userChoice).style.visibility = 'hidden';//dinesh
            summ_arr[_this.questionId] = 1;
            if (MODE=='summarized'&&REVIEW_MODE)
            {
                document.getElementById('ack_'+cid).style.visibility = 'visible';
                document.getElementById('ack_'+cid).getElementsByTagName('img')[0].src = "images/"+themeSelected+"/right.png";
            }
            //            this.showCorrectAnswer();
            return false;
        }
    }
	
    this.createObject = function(id,obj,type){
        var _obj = document.createElement(type);
        _obj.setAttribute('id',id);
        for(var i in obj){
            _obj.style[i] = obj[i]
        }
        return _obj;
    }
	
    this.showUserAnswer = function(){
        if (MODE=='immediate'){
            if(user_choice[this.questionId].userAnswer != undefined)
            {
                //document.getElementById(user_choice[this.questionId].userAnswer).style.backgroundImage = "url('images/"+themeSelected+"/choice1.png')"
			
			
                this.correctDivId = this.getDivId(this.correctAnswer);
                uid = user_choice[this.questionId].userAnswer.split("_")[1];
                var cid = this.correctDivId.split("_")[1];
                this.userChoice=uid;//dinesh
                /*if( user_choice[this.questionId].userAnswer == this.correctDivId){
				
				document.getElementById('ack_'+uid).style.backgroundImage = "url('images/"+themeSelected+"/right.png')";
				document.getElementById('showanswer').style.display = 'none';
			}
			else{
				
				document.getElementById('ack_'+uid).style.backgroundColor = '#09B1E2';
				document.getElementById('ack_'+uid).style.backgroundImage = "url('images/"+themeSelected+"/wrong.png')";
			}*/
			
                //document.getElementById('ack_'+uid).style.visibility = 'visible';//dinesh
                if( user_choice[this.questionId].userAnswer.split("_")[1] == this.correctDivId.split("_")[1]){
				
                    user_choice[this.questionId].score = 1;
                    document.getElementById('ack_'+uid).getElementsByTagName('img')[0].src = "images/"+themeSelected+"/right.png";
                    document.getElementById('showanswer').style.display = 'none';
                //                    return true;
                }
                else{
                    quizObj.showCorrectAnswer();
                    return false;
                //	document.getElementById('ack_'+uid).getElementsByTagName('img')[0].src = "images/"+themeSelected+"/wrong.png";//dinesh
                }
            //                if(byId == 1){
            //                    document.getElementById('choiceBox_'+uid).style.backgroundColor = '#434C69';
            //                    document.getElementById('choiceBox_'+uid).style.color = '#fff';
            //                               
            //                }
            }
        }
        else//dinesh
        {
            if (user_choice[this.questionId].userAnswer != undefined)
            {
                uid = user_choice[this.questionId].userAnswer.split("_")[1];
                this.userChoice=uid;//dinesh
                //                document.getElementById('choiceBox_'+uid).style.backgroundColor = '#434C69';
                document.getElementById('choiceBox_'+uid).style.color = '#fff';
                document.getElementById("choiceBox_"+uid).setAttribute('class','btnSelect');
                quizObj.attempt=true;
                
            }
        //                    if (REVIEW_MODE)
        //                        quizObj.showCorrectAnswer();
        } //dinesh
    }
	
    this.getDivId = function(idf){
        for(var i = 0;i<this.no_of_choice;i++){
            if(document.getElementById('choiceBox_'+i).getAttribute('choiceName') == idf){
                return 'choice_'+i;
            }
        }
        return "";
    }
	
    /*this.showCorrectAnswer = function(){
		document.getElementById('ack_'+this.correctDivId.split("_")[1]).style.backgroundColor = document.getElementById('choiceBox_'+this.correctDivId.split("_")[1]).style.backgroundColor;
	    document.getElementById('ack_'+this.correctDivId.split("_")[1]).style.backgroundImage = "url('images/"+themeSelected+"/right.png')";	
		document.getElementById('ack_'+this.correctDivId.split("_")[1]).style.boxShadow = '5px 5px 2px #888888';
	}
	
	this.hideCorrectAnswer = function(){
		document.getElementById('ack_'+this.correctDivId.split("_")[1]).style.backgroundColor = "";
	    document.getElementById('ack_'+this.correctDivId.split("_")[1]).style.backgroundImage = "";	
		document.getElementById('ack_'+this.correctDivId.split("_")[1]).style.boxShadow = '';
	}*/
	
    this.showCorrectAnswer = function(){
        //document.getElementById('ack_'+this.correctDivId.split("_")[1]).style.backgroundColor = document.getElementById('choiceBox_'+this.correctDivId.split("_")[1]).style.backgroundColor;
        //document.getElementById('ack_'+this.correctDivId.split("_")[1]).style.backgroundImage = "url('images/"+themeSelected+"/right.png')";	
		
        document.getElementById('ack_'+this.correctDivId.split("_")[1]).style.visibility = 'visible';
        //        document.getElementById('ack_'+_this.getDivId(_this.correctAnswer).split("_")[1]).style.visibility = 'visible';
        document.getElementById('ack_'+this.correctDivId.split("_")[1]).getElementsByTagName('img')[0].src = "images/"+themeSelected+"/right.png";
    //        document.getElementById('ack_'+_this.getDivId(_this.correctAnswer).split("_")[1]).getElementsByTagName('img')[0].src = "images/"+themeSelected+"/right.png";
    }
    this.hideCorrectAnswer = function(){
        document.getElementById('ack_'+this.correctDivId.split("_")[1]).style.visibility = 'hidden';
        document.getElementById('ack_'+this.correctDivId.split("_")[1]).getElementsByTagName('img')[0].src = "";	
    //document.getElementById('ack_'+this.correctDivId.split("_")[1]).style.backgroundColor = "";
    //document.getElementById('ack_'+this.correctDivId.split("_")[1]).style.backgroundImage = "";	
	
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
            width:'180px',
            height:'30px',
            margin:'15px auto 0 19px',
            position:'absolute',
            textAlign:'center',
            paddingTop:'5px',
            fontFamily:'arial',
			fontSize:'12px'
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
        
        if (nav!='Iphone'){
            document.getElementById('feedBody').innerHTML = str;
        }
        else if  (MODE=='immediate'||REVIEW_MODE){
            document.getElementById('mobilefeedbackcont').innerHTML="<center>"+str+"</center>";
            document.getElementById('feedBody').style.visibility="hidden";
           // $("#mobilefeedbackcont").slideDown("slow");
            document.getElementById('mobilefeedbackcont').style.display = 'block';
            var mtops=$("#controls").offset().top-parseInt(17);
            $("#mobilefeedbackcont").css({
               "top": "20px"
            });
        }
        _this = document.getElementById('choiceCont_'+(_this.id.split("_")[1]));
        document.getElementById('feedbackCont').style.left = (_this.offsetLeft + _this.offsetWidth-30)+'px';
        document.getElementById('feedbackCont').style.top =  (_this.offsetTop+10)+'px';
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