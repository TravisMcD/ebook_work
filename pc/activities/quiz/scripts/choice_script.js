function choice(){
	
    var _this = this;
    this.init = function(){	
        this.identifer = "";
        this.title = "";
        this.correctAnswer = "";
        this.mapping_arr = new Array();
        this.question_arr = new Array();
        this.choice_arr = new Array();
	
        this.no_of_choice = 0;
        var _this = this;
        this.questionId = 0;
        this.correctDivId = "";
		
        this.userChoice = 0;
        this.attempt = false;
        this.learningObject = "";
        this.location = "";
        this.submitEnabled = false;
		
        this.alphabetArr = new Array("A","B","C","D","E","F","G","H","I","J","K","L");
    }
	
    this.createQuestion = function(xmlObj,questId){
        this.questionId = questId;
        this.createFeedback();
        this.getActivityDetails(xmlObj);
        var correctValue = xmlObj.getElementsByTagName('correctResponse')[0].childNodes;
        this.getCorrectResponse(correctValue);
        var questValue = xmlObj.getElementsByTagName('choiceInteraction')[0].childNodes;
        this.getQuestValue(questValue);
        this.buildQuestion();
		
		
        user_choice[this.questionId].correctAnswerValue = this.getCorrectValue(this.correctAnswer);
        user_choice[this.questionId].question = this.question_arr[0].quest;
		
    }
	
    this.getActivityDetails = function(actNode){
		
        this.identifer = (actNode.getAttribute('identifier')).toUpperCase();
        this.title = (actNode.getAttribute('title'));
        //document.getElementById('heading1').innerHTML = this.identifer;
		
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
 
        if(nav == 'Ipad' || nav =='Iphone'){
            document.getElementById('questionBread').innerHTML =document.getElementById('questionBread').innerHTML +lO+loc;
            document.getElementById('breadCrumbTable').style.display='block';
        }
        else{
            document.getElementById('heading2').innerHTML = this.location;
           
            document.getElementById('questionBread').innerHTML =document.getElementById('questionBread').innerHTML +lO;
        }
		
    }
	
    this.getCorrectResponse = function(correctNode){
        for(var i =0;i<correctNode.length;i++){
            if(correctNode[i].nodeType == 1){
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
	
    this.getQuestValue = function(questNode){
        var choiceCount = 0;
        var questObj = new Object();
	   
        for(var i = 0;i<questNode.length;i++){
            if(questNode[i].nodeType == 1)
            {
                if(questNode[i].nodeName == "prompt"){
                    var _str = this.XMLtoString(questNode[i]);
					
                    _str = _str.replace("</prompt>","");
                    var sInd = _str.indexOf('>');
                    _str = _str.substr(sInd+1);
                    questObj.quest = _str;
                }
                else if(questNode[i].nodeName == 'simpleChoice'){
                    choiceCount ++;
					
                    questObj['choice_'+choiceCount] = [this.XMLtoString(questNode[i]),questNode[i].getAttribute('identifier') ];
                }
            }
			
        /*if(questObj.quest != undefined && questObj.choice_1 != undefined && questObj.choice_2 != undefined  && questObj.quest != undefined && questObj.choice_3 != undefined  ){
				question_arr.push(questObj);
				questObj = new Object();
				choiceCount = 0;
			}*/
			
        }
        this.no_of_choice = choiceCount;
        this.question_arr.push(questObj);
        questObj = new Object
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
	
    //Question creation ...
	
	
	
	
    this.buildQuestion = function()
    {
		
        for(var i = 0;i<this.question_arr.length;i++)
        {
			
            var quest_div = this.createObject('quest_'+i,{
                position:'relative',
                //                width:'950px',
                height:'auto',
                marginTop:'0px'
            },'div');
            document.getElementById('questionCont').appendChild(quest_div);
			
			
			
            var questCont = this.createObject('questCont_'+i,{
                position:'relative',
                width:'97%',
                height:'100%',
                float:'left',
                marginLeft:'10px'
            },'div');
            quest_div.appendChild(questCont);
            questCont.setAttribute('choiceId','')
			
            var quest = this.createObject("question_"+i,{
                postion:'relative',
                width:'100%',
                height:'auto'
            },'div');
            questCont.appendChild(quest);
			
			
			
            var txtDiv = this.createObject('qTxt_'+i,{
                position:'relative',
                width:'100%',
                height:'auto',
                fontFamily:'sans-serif',
                fontSize:'16px',
                padding:'10px',
                fontWeight:'bold'
            },'div');
            txtDiv.setAttribute('class', 'questions')
            quest.appendChild(txtDiv);
            txtDiv.innerHTML = this.question_arr[i].quest;

            var maxWidth = 0;
            var _marginTop = '';
			
            for(var j =0;j<this.no_of_choice;j++)
            {
                (j == 0)?_marginTop = '15px':_marginTop = '8px';
					
                var choiceCont = this.createObject('choiceCont_'+j,{
                    position:'relative',
                    width:'auto',
                    height:'auto',
                    padding:'12px',
                    display:'table',
                    paddingLeft:'0px'
                },'div')
                choiceCont.setAttribute('class', 'choicecont')
                questCont.appendChild(choiceCont);
				
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
                    height:'auto',
                    cssFloat:'left',
                    borderRadius:'3px',
                    padding:'5px',
                    cursor:'pointer'
                },'div');
                choiceBox.setAttribute('class','choiceBox');
                choiceBox.setAttribute('choiceName',this.question_arr[i]['choice_'+(j+1)][1])
                choiceCont.appendChild(choiceBox);
				
                if(!REVIEW_MODE){
                    //choiceBox.onclick = this.changeChoice;
                    //choiceBox.addEventListener(_mousedown,this.removeShadow);
                    //choiceBox.addEventListener(_mouseup,this.changeChoice);
                    choiceBox.onclick = this.changeChoice;
                }
				
                choiceBox.onmousedown = function(){
                    return false
                };
                this.choice_arr.push(choiceBox)
                /*var choice = this.createObject('choice_'+j,{position:'relative',width:'19px',height:'25px',backgroundImage:"url('images/"+themeSelected+"/choice.png')",backgroundRepeat:'no-repeat',cursor:'pointer',display:'table-cell',backgroundPosition:'bottom'},'div');
				choiceBox.appendChild(choice);*/
				
                //choice.setAttribute('choiceName',this.question_arr[i]['choice_'+(j+1)][1]);
				
                var choiceTxt = this.createObject('choiceTxt_'+j,{
                    position:'relative',
                    width:'auto',
                    height:'auto',
                    fontFamily:'sans-serif',
                    fontSize:'14px',
                    paddingLeft:'10px',
                    display:'table-cell'
                },'div');
                choiceTxt.setAttribute('class', 'choicetext')
                choiceBox.appendChild(choiceTxt)
                choiceTxt.innerHTML = this.question_arr[i]['choice_'+(j+1)][0];//choice_arr[j];
				
                var ack = this.createObject('ack_'+j,{
                    position:'relative',
                    width:'35px',
                    cssFloat:'left',
                    backgroundColor:"",
                    borderRadius:'3px',
                    height:'40px',
                    marginLeft:'6px',
                    marginTop:'0px',
                    padding:'0px',
                    visibility:'hidden'                    
                },'div');
                
                ack.innerHTML = "<img style='margin-top:6px' alt='' src='' style='visibility: hidden'/>"; //images/"+themeSelected+"/wrong.png
                choiceCont.appendChild(ack);
				
                if(maxWidth < choiceBox.offsetWidth){
                    maxWidth = choiceBox.offsetWidth;
                }
            }
            if(maxWidth > 475)
                maxWidth = 475;
			
            for(var j = 0;j<this.no_of_choice;j++){
                document.getElementById('choiceBox_'+j).style.width = maxWidth+'px';
            }
        }
      
    }
	
    this.removeShadow = function(e){
		
        //this.style.backgroundImage = "url('images/"+themeSelected+"/bg_strip.png')";
        this.setAttribute('class','btnNormal');
    }
	
    this.changeChoice = function(e){
        if(MODE == "immediate" && user_choice[_this.questionId].userAnswer && summ_arr[_this.questionId] ==1)
            return;
		
        if(_this.submitEnabled && MODE == "immediate"){
                   
            return;
        }
		
        var choiceId = this.id.split("_")[1];
        _this.userChoice = choiceId;
		
        for(var i = 0;i<_this.no_of_choice;i++){
            //document.getElementById("choice_"+i).style.backgroundImage = "url('images/"+themeSelected+"/choice.png')";
            document.getElementById("choiceBox_"+i).style.color = '#333333';
            //document.getElementById("choiceBox_"+i).style.backgroundColor = '#EBEBEB';
			
            //document.getElementById("choiceBox_"+i).style.backgroundImage = "url('images/"+themeSelected+"/bg_strip.png')";
            document.getElementById("choiceBox_"+i).setAttribute('class','btnNormal');
        }
		
        user_choice[_this.questionId].userAnswer = "choiceBox_"+choiceId
		
        //document.getElementById('quest_'+contId).setAttribute("holdId",this.getAttribute('choiceName')+"__"+this.id.split("_")[2]);
        //document.getElementById("choice_"+choiceId).style.backgroundImage = "url('images/"+themeSelected+"/choice1.png')"
		
        document.getElementById("choiceBox_"+choiceId).style.color = '#ffffff';
        //document.getElementById("choiceBox_"+choiceId).style.backgroundImage = "url('images/"+themeSelected+"/bg_strip1.png')";
        document.getElementById("choiceBox_"+choiceId).setAttribute('class','btnSelect');
        _this.attempt = true;
        this.style.marginLeft = '-2px';
        user_choice[_this.questionId].userAnswerValue = document.getElementById('choiceTxt_'+choiceId).innerHTML;
		
        _this.correctDivId = _this.getDivId(_this.correctAnswer);
		
        /*if( user_choice[_this.questionId].userAnswer.split("_")[1] == _this.correctDivId.split("_")[1]){
				user_choice[_this.questionId].score = 1;
				_this.showFeedback('Correct',this,1);
		}
		else{
			user_choice[_this.questionId].score = 0;
			_this.showFeedback('Wrong',this,0);
		}*/
        if (nav=='Iphone'&&!REVIEW_MODE){
            $("#questionCont").unbind('scroll');//new
            document.getElementById('nextBtn').style.visibility='visible';
            document.getElementById('submitBtn').style.visibility='visible';
            document.getElementById('prevBtn').style.visibility='visible';
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
	
	
    this.showUserAnswer = function(byId){
        if (MODE=='immediate'){
            if(user_choice[this.questionId].userAnswer != undefined)
            {
                //document.getElementById(user_choice[this.questionId].userAnswer).style.backgroundImage = "url('images/"+themeSelected+"/choice1.png')"
			
                this.correctDivId = this.getDivId(this.correctAnswer);
                var uid = user_choice[this.questionId].userAnswer.split("_")[1];
                this.userChoice=uid;//dinesh
                var cid = this.correctDivId.split("_")[1];
                document.getElementById('ack_'+uid).style.visibility = 'visible';
                if( user_choice[this.questionId].userAnswer.split("_")[1] == this.correctDivId.split("_")[1]){
				
                    user_choice[this.questionId].score = 1;
                    //document.getElementById('ack_'+uid).getElementsByTagName('img')[0].src = "images/"+themeSelected+"/right.png";//dinesh
				
                    document.getElementById('showanswer').style.display = 'none';
                    return true;
                }
                else{
                    //document.getElementById('ack_'+uid).getElementsByTagName('img')[0].src = "images/"+themeSelected+"/wrong.png";//dinesh
                    quizObj.showCorrectAnswer();
                    return false;
                }
			
                if(byId == 1){
                    document.getElementById('choiceBox_'+uid).style.backgroundColor = '#434C69';
                    document.getElementById('choiceBox_'+uid).style.color = '#fff';
                               
                }
			
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
	
    this.showCorrectAnswer = function(){
        //document.getElementById('ack_'+this.correctDivId.split("_")[1]).style.backgroundColor = document.getElementById('choiceBox_'+this.correctDivId.split("_")[1]).style.backgroundColor;
        //document.getElementById('ack_'+this.correctDivId.split("_")[1]).style.backgroundImage = "url('images/"+themeSelected+"/right.png')";	
        //document.getElementById('ack_'+this.correctDivId.split("_")[1]).style.boxShadow = '5px 5px 2px #E0E0E0';
        
        document.getElementById('ack_'+this.correctDivId.split("_")[1]).style.visibility = 'visible';
        //        document.getElementById('ack_'+(parseInt(this.correctDivId.split("_")[1])+parseInt(1))).style.visibility = 'hidden';//dinesh
        document.getElementById('ack_'+this.correctDivId.split("_")[1]).getElementsByTagName('img')[0].src = "images/"+themeSelected+"/right.png";
    }
    this.hideCorrectAnswer = function(){
        document.getElementById('ack_'+this.correctDivId.split("_")[1]).style.visibility = 'hidden';
        document.getElementById('ack_'+this.correctDivId.split("_")[1]).getElementsByTagName('img')[0].src = "";	
        //document.getElementById('ack_'+this.correctDivId.split("_")[1]).style.backgroundColor = "";
        //document.getElementById('ack_'+this.correctDivId.split("_")[1]).style.backgroundImage = "";	
        document.getElementById('ack_'+this.correctDivId.split("_")[1]).style.boxShadow = '';
    }
	
    this.showUserData = function(){
        this.correctDivId = this.getDivId(this.correctAnswer);	
        if( user_choice[this.questionId].userAnswer.split("_")[1] == this.correctDivId.split("_")[1]){
            user_choice[this.questionId].score = 1;
            document.getElementById('feedBody').style.display = 'none';
            this.showFeedback("Correct",document.getElementById('choiceBox_'+this.userChoice),1);
            this.submitEnabled = true;
            $('#choiceBox_'+this.userChoice).attr("class","btnSelect");//dinesh
            $('#choiceBox_'+this.userChoice).css("color","white");
            document.getElementById('ack_'+this.userChoice).style.visibility = 'hidden';//dinesh
            //            if (nav=='Iphone'){
            //                document.getElementById('mobilefeedbackcont').innerHTML="Correct";
            //                $("#mobilefeedbackcont").slideDown("slow");
            //            }
            return true;
        }
        else{
            document.getElementById('feedBody').style.display = 'block';
            user_choice[this.questionId].score = 0;
            var cid = this.correctDivId.split("_")[1];
            // alert("correctDiv="+this.correctDivId)
            this.showFeedback("Sorry but correct answer was <span style='font-weight:bold'>"+this.alphabetArr[cid]+"</span>",document.getElementById('choiceBox_'+this.userChoice),0);
            $('#choiceBox_'+this.userChoice).attr("class","btnSelect");//dinesh
            $('#choiceBox_'+this.userChoice).css("color","white");
            document.getElementById('ack_'+this.userChoice).style.visibility = 'hidden';//dinesh
            if (MODE=='summarized'&&REVIEW_MODE)
            {
                document.getElementById('ack_'+cid).style.visibility = 'visible';
                document.getElementById('ack_'+cid).getElementsByTagName('img')[0].src = "images/"+themeSelected+"/right.png";
            }
            this.submitEnabled = true;
            return false;
        }
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
            height:'23px',
            margin:'15px auto 0 19px',
            position:'absolute',
            textAlign:'center',
            paddingTop:'5px',
            fontFamily:'sans-serif',
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
        else if (MODE=='immediate'||REVIEW_MODE){
            var mtops=$("#controls").offset().top-parseInt(17);
            
            $("#mobilefeedbackcont").css({
                "top": "20px"
            });
            
            document.getElementById('mobilefeedbackcont').innerHTML="<center>"+str+"</center>";
            document.getElementById('feedBody').style.visibility="hidden";
            //$("#mobilefeedbackcont").slideDown("slow");
            document.getElementById('mobilefeedbackcont').style.display = 'block';

        }
        _this = document.getElementById('choiceCont_'+(_this.id.split("_")[1]));
        
        if(nav != 'Iphone'){
            document.getElementById('feedbackCont').style.left = (_this.offsetLeft + _this.offsetWidth-33)+'px';
            document.getElementById('feedbackCont').style.top =  (_this.offsetTop + 15)+'px';
        }
        else{
            document.getElementById('feedbackCont').style.left = (_this.offsetLeft + _this.offsetWidth-48)+'px';
            document.getElementById('feedbackCont').style.top =  (_this.offsetTop + 15)+'px';
        	
        }
        
		
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