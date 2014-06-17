var reportCont;
var toCount = 0;
var reportThis1 = null;
var adding=true;
var mailshow=true;

//URL of image report.

var reportImageWrongURL = ''; 
var reportImageCorrectURL = '';

function emailReport(){
	reportImageWrongURL = SERVER_PATH+"images/theme1/wrong.png";
	reportImageCorrectURL = SERVER_PATH+"images/theme1/right.png";
	
    reportThis1 = this;
    
    this.hide = function(){
    	document.getElementById('reportCont').parentNode.removeChild(document.getElementById('reportCont'));
    }
    
    
    this.show = function(){
		
        toCount = 0;
        var _left = 50;
        var _top =  -115;
        document.getElementById('heading2').style.paddingTop = '35px';
        document.getElementById('modeType').style.paddingTop = '35px';
		
        reportCont = this.createObject('reportCont',{
            width:'99%',
            height:'400px',
            marginLeft:'-48px',
            position:'absolute',
            left:_left+'px',
            top:_top+'px',
            border:'1px solid #979898',
            boxShadow:'2px 2px 2px #888888'
        },'div');
		
        document.getElementById('questionCont').appendChild(reportCont);
		
        var reportHeader = this.createObject('reportHeader',{
            width:'99%',
            height:'20px',
            display:'table'
        },'div');
        reportHeader.innerHTML = "Email Report";
        reportHeader.setAttribute('class','emailReportHeader');
        reportCont.appendChild(reportHeader);
		
        /*var emailContent = this.createObject('reportHeader',{width:'99%',height:'33px',backgroundColor:'#fff',color:'black',padding:'5px 0px 0px 8px',fontFamily:'verdana',fontWeight:'bold',display:'table'},'div');
		
		reportCont.appendChild(emailContent);
		
		var emailStr = "<table id='emailTable'>";
		emailStr += "<tr><td>To :</td><td><input type='text' style='width:180px;height:20px' /></td><td>Subject :</td><td><input type='text' style='width:80px;height:20px' /></td></tr>";
		
		emailStr += "</table>";
		emailContent.innerHTML = emailStr;*/
		
        var reportClose = this.createObject('reportClose',{
            width:'18px',
            height:'18px',
            display:'table-cell',
            cssFloat:'right',
            marginRight:'10px',
            cursor:'pointer',
            color:'#696189',
            border:'1px solid #D8D8D8',
            marginTop:'0px',
            paddingLeft:'6px',
            backgroundColor:'#fff',
            fontWeight: 'bold'
        },'div');
        reportClose.innerHTML = 'X';
        reportClose.onclick = this.closeReport;
        reportHeader.appendChild(reportClose);
		
        var reportBody = this.createObject('reportBody',{
            width:'755px',
            height:'400px',
            backgroundColor:'#ffffff',
            marginLeft:'0px',
            overflow:'auto'
        },'div');
        reportCont.appendChild(reportBody);
		
        var reportFooter = this.createObject('reportFooter',{
            width:'99%',
            height:'10px',
            padding:'2px 4px 13px'
        },'div');
        reportCont.appendChild(reportFooter);
        reportFooter.setAttribute("class","emailReportFooter");
        var emailBtn = this.createObject('emailBtn',{
            width:'67px',
            height:'22px',
            cursor:'pointer',
            backgroundImage: 'url("images/'+themeSelected+'/btn_sendmail.png")',
            cssFloat:'right',
            marginRight:'5px'
        },'div');
        emailBtn.onclick = this.showEmailForm;
        emailBtn.setAttribute("class","emailBtn");

		
        reportFooter.appendChild(emailBtn);

        this.showReportTable();
    }
	
    this.showEmailForm = function(){
        if (mailshow){
        $("#emailBtn").attr("disabled",true);
        var mailSendForm = reportThis1.createObject('mailSendForm',{},'div');
        mailSendForm.setAttribute('class','mailSendForm');
        document.getElementById('reportCont').appendChild(mailSendForm);
		
        var mailForm = reportThis1.createObject('mailForm',{},'div');
        mailForm.setAttribute('class','mailForm');
        document.getElementById('reportCont').appendChild(mailForm);
		
        var mailHeader = reportThis1.createObject('mailHeader',{},'div');
        mailHeader.setAttribute('class','mailHeader');
//        width:'18px',
//            height:'18px',
//            display:'table-cell',
//            cssFloat:'right',
//            marginRight:'10px',
//            cursor:'pointer',
//            color:'#696189',
//            border:'1px solid #D8D8D8',
//            marginTop:'0px',
//            paddingLeft:'6px',
//            backgroundColor:'#fff'
        mailHeader.innerHTML = "Send Mail<span onclick='javascript:onMailClose(this);' style='width: 18px;height: 18px;display:table-cell;float: right;cursor: pointer;font-weight: bold;color: #E0E0E0;border:1px solid #D8D8D8;backgroundColor:#fff;'><center>X</center></span>";
        mailForm.appendChild(mailHeader);
		
        var mailSubject = reportThis1.createObject('mailSubject',{},"div");
        mailSubject.setAttribute('class','mailSubject');
        mailForm.appendChild(mailSubject);
		
        mailSubject.innerHTML = "<span class='mailFormLabel'>Subject :</span><input type='text' id='subject_txt' />";
		
        var mailTo = reportThis1.createObject('mailTo',{},"div");
        mailTo.setAttribute('class','mailTo');
        mailForm.appendChild(mailTo);
		
        reportThis1.addToField();
		
        var mailFooter = reportThis1.createObject('mailFooter',{},'div');
        mailFooter.setAttribute('class','mailFooter');
        mailForm.appendChild(mailFooter);
		
        var mailSendBtn = reportThis1.createObject('mailSendBtn',{},'div');
        mailSendBtn.setAttribute('class','mailSendBtn');
        mailSendBtn.onclick = sendMail;
        
        
        mailFooter.appendChild(mailSendBtn);
		
        var mailAddBtn = reportThis1.createObject('mailAddBtn',{},'div');
        mailAddBtn.setAttribute('class','mailAddBtn');

        mailAddBtn.onclick = reportThis1.addToField;
        mailFooter.appendChild(mailAddBtn);
        document.getElementById('subject_txt').value="Quiz";//dinesh
        mailshow=false;
    }
    }
    
    function sendMail(){
    	var subject = document.getElementById('subject_txt').value;
		$('#contentTable').append("<div id='loadingscreen' class='loadingtemplate' style='width: 745px;position:absolute;top:0px;height:550px;left:0px;background-color:black;opacity:0.2'></div><div class='loadingtemplate' style='width: 745px;position:absolute;top:0px;height:550px;left:0px;line-height:550px;text-align:center;'><img src='images/ajax-loader1.gif' /></div>");
    	var to = "";
    	for(var i = 0;i<toCount;i++){
    		if(i == (toCount-1))
    		to += document.getElementById('totext_'+i).value;
    		else
    		to += document.getElementById('totext_'+i).value+",";
    	}
       //
       //mailTable+
        var content = mailTable;//+document.getElementById('detReportBody').innerHTML;
		content = content.split("<table").join("<table cellpadding=0 cellspacing=0 style='font-family:sans-serif;font-size:13px;border:1px solid black' ");
		
		//content = content.split("<img src='images/theme1/wrong.png' style='margin-left:8px' />").join("<img src='"+reportImageWrongURL+"' style='margin-left:8px' />");
		//content = content.split("<img src='images/theme1/right.png' style='margin-left:8px' />").join("<img src='"+reportImageCorrectURL+"' style='margin-left:8px' />");
		
		content = content.split("<img src='images/theme1/wrong.png' style='margin-left:8px' />").join("<img src='"+reportImageWrongURL+"' style='margin-left:8px' />");
		content = content.split("<img src='images/theme1/right.png' style='margin-left:8px' />").join("<img src='"+reportImageCorrectURL+"' style='margin-left:8px' />");
		
		var joinStr = ('src="'+SERVER_PATH+'xml');
		content = content.split('src="xml').join(joinStr);
		
		content = content.split("<th").join("<th style='border:1px solid black;background-color:#E0E0E0;padding: 5px 10px;' ");
		content = content.split("<td").join("<td style='border:1px solid black;padding:5px 10px;' ");
		content = content.split("<td>").join("<td style='border:1px solid black;padding:5px 10px;'>");
		content = content.split("<th>").join("<th style='border:1px solid black;background-color:#E0E0E0;padding: 5px 10px;' ");

        var colorValueArr = new Array({hex:'#333333',rgb:'rgb(51,51,51)'},{hex:'#424963',rgb:'rgb(66,73,99)'},{hex:'#fff',rgb:'rgb(255,255,255)'},{hex:'#666666',rgb:'rbg(102,102,102)'},{hex:'#888888',rgb:'rgb(136,136,136)'},{hex:'#EBEBEB',rgb:'rgb(235,235,235)'},{hex:'#E0E0E0',rgb:'rgb(224,224,224)'});
     	
		for(var i = 0;i<colorValueArr.length;i++){
			content = content.split(colorValueArr[i].hex).join(colorValueArr[i].rgb);
		}
		
		content = content.split("#ff0000").join("red");
		content = content.split("97%").join("800px");
		content = content.replace(/\"/g,"'");
		
		
		
		 var content2 = document.getElementById('detReportBody').innerHTML;//+document.getElementById('detReportBody').innerHTML;
		
        var colorValueArr = new Array({hex:'#333333',rgb:'rgb(51,51,51)'},{hex:'#424963',rgb:'rgb(66,73,99)'},{hex:'#fff',rgb:'rgb(255,255,255)'},{hex:'#666666',rgb:'rbg(102,102,102)'},{hex:'#888888',rgb:'rgb(136,136,136)'},{hex:'#EBEBEB',rgb:'rgb(235,235,235)'});
     	
		for(var i = 0;i<colorValueArr.length;i++){
			content2 = content2.split(colorValueArr[i].hex).join(colorValueArr[i].rgb);
		}
				content2 = content2.split("#ff0000").join("red");
		content2 = content2.split("97%").join("800px");
		content2 = content2.replace(/\"/g,"'");

    	//var _content = "Mailexample/Default.aspx?to="+to+"&subject="+subject+"&content1="+content+"&content2=" + content2;
		//Score : 57% - 4/7***	: 1 out of 1***statement : 1 out of 1***Politics : 1 out of 1***Computer : 1 out of 1***Authoritarian Systems : 0 out of 1***	Grammar : 0 out of 1***What is Politics? : 0 out of 1~~~: 1 out of 1***	conceptual : 1 out of 3***Conceptual : 2 out of 3"; 
		//_content = _content.substring(0,11051);
		//alert(_content.length);
		//callMail(_content); 
		   	
			$.ajax({
    			type: 'POST',
   		 		url: 'Mailexample/Default.aspx',
    			data: { 
        			'to': to, 
       			 	'subject': subject,
					'content1': content,
					'content2': content2
   				},
    			success: function(msg){
		 				$(".loadingtemplate").remove();
        				alert("Mail Successfully Sent");
    			}
			});
    }
	
	function callMail(url)
	{
		 /*xmlhttp=GetXmlHttpObject();
		  if (xmlhttp==null)
		  {
		   alert ("Your browser does not support Ajax HTTP");
		   return;
		  }
		xmlhttp.open("POST",url,true);
			xmlhttp.onreadystatechange=getOutput;
			xmlhttp.send();*/
		
	}
	
	function getOutput()
	{
	  if (xmlhttp.readyState==4)
	  {
		   $(".loadingtemplate").remove();
			alert("Mail Successfully Sent");
	  }
	}
	
	function GetXmlHttpObject()
	{
		if (window.XMLHttpRequest)
		{
		   return new XMLHttpRequest();
		}
		if (window.ActiveXObject)
		{
		  return new ActiveXObject("Microsoft.XMLHTTP");
		}
	 return null;
	}
	
	
	
    this.addToField = function(){
        if (toCount>0 && toCount<10)
        {
            var est;
            for (var i=0;i<toCount;i++)
                if (document.getElementById('totext_'+i).value=="")
                {
                    if (i+parseInt(1)==1) est="st";
                    else if (i+parseInt(1)==2) est="nd";
                    else if (i+parseInt(1)==3) est="rd";
                    else if (i+parseInt(1)>3) est="th";
                    alert("Fill the "+(i+parseInt(1))+est+ " To Address");
                    return;
                }
        }
        if (adding)
        {
            var toBox = reportThis1.createObject('toBox_'+toCount,{},'div');
            toBox.setAttribute('class','toBox');
            if(toCount == 0)
                toBox.innerHTML = "<span class='mailFormLabel'>To : </span><input type='text' style='width:180px' id='totext_"+toCount+"' onblur='validateMultipleEmailsCommaSeparated(this)'/>";
            else
                toBox.innerHTML = "<span class='mailFormLabel'>To : </span><input type='text' style='width:180px' id='totext_"+toCount+"' onblur='validateMultipleEmailsCommaSeparated(this)'/>&nbsp;&nbsp;&nbsp;<span onclick='javascript:onDeleteTo(this);' class = 'deleteTo' id='deleteTo_"+toCount+"'>X</span>";
            document.getElementById('mailTo').appendChild(toBox);
            toCount++;
            if(toCount >=10)
                document.getElementById('mailAddBtn').style.visibility = 'hidden';
            adding=false;
        }
    }
	
    this.closeReport = function(e){
        document.getElementById('questionCont').removeChild(document.getElementById('reportCont'));
        document.getElementById('heading2').style.paddingTop = '0px';
        document.getElementById('modeType').style.paddingTop = '0px';
        toCount = 0;
        adding=true;
        mailshow=true;
    }
	
    this.showReportTable = function(){
        var rStr = "<table id='reportTable' cellpadding=0 cellspacing = 0><tr><th></th><th>Question</th><th>Question Type</th><th>Points</th><th>User Response</th><th>Correct Answer</th><th>Result</th></tr>";
		
        for(var i = 0;i<(no_of_questions+1);i++){
            var _score = user_choice[i].score;
            var _img = (_score == 0)?"<img src='images/theme1/wrong.png' style='margin-left:8px' />":"<img src='images/theme1/right.png' style='margin-left:8px' />";
			//console.log("tf01="+user_choice[i].identifier.toLowerCase());
            if(user_choice[i].identifier.toLowerCase() == 'tf01' || user_choice[i].identifier.toLowerCase() == 'choice'){
                if (user_choice[i].identifier=='tf01')var vacs='True/False';else if (user_choice[i].identifier=='choice')vacs='Multiple Choice';
                rStr += "<tr><td style='vertical-align:middle'>"+(i+1)+"</td><td class='reportQuestionColor'>"+user_choice[i].question+"</td><td>"+vacs+"</td><td style='color: #ff0000;font-weight:bold'>"+_score+"</td><td>"+user_choice[i].userAnswerValue+"</td><td>"+user_choice[i].correctAnswerValue+"</td><td>"+_img+"</td></tr>"
            }
            else{
                var _obj = user_choice[i].choicePlaced;
                var Carr = user_choice[i].correctAnswerValue;
				
				for(var k in _obj){
//					console.log("k="+k);
				}
				
                var question_str = "<table cellpadding = 0 cellspacing = 0>";
                var user_str = "<table cellpadding = 0 cellspacing = 0>";
                var answer_str = "<table cellpadding = 0 cellspacing = 0>";
                var k = 0;
                var alpha_arr = new Array("ChoiceA","ChoiceB","ChoiceC","ChoiceD")
				//var alpha_arr = new Array("A","B","C","D")
                //for(var j in _obj){
                for(var l = 0;l<alpha_arr.length;l++){
                    var j = alpha_arr[l];
					//console.log("j="+j);
                    var _arr = Carr[k].split(" ");
                    question_str += "<tr><td style='border:1px solid black;white-space:nowrap'><span>"+this.getValue(j,user_choice[i].question_arr)+'</span></td></tr>';
                    user_str += "<tr><td style='border:1px solid black;white-space:nowrap'><span>"+this.getValue(_obj[j].split("_")[1],user_choice[i].answer_arr)+'</span></td></tr>';
                    answer_str += "<tr><td style='border:1px solid black;white-space:nowrap'><span>"+this.getValue(_arr[1],user_choice[i].answer_arr)+'</span></td></tr>';
                    //reportStr += "<tr><td>"+this.getValue(j,user_choice[i].question_arr)+"</td><td>"+user_choice[i].identifier+"</td><td>"+this.getValue(_obj[j].split("_")[1],user_choice[i].answer_arr)+"</td></tr>";
                    k++;
                }
                question_str += "</table>";
                user_str += "</table>";
                answer_str += "</table>";
                if (user_choice[i].identifier=='match')vacs='Matching';
                rStr += "<tr><td>"+(i+1)+"</td><td class='reportQuestionColor'>"+question_str+"</td><td>"+vacs+"</td><td class='reportPointColor'>"+_score+"</td><td>"+user_str+"</td><td>"+answer_str+"</td><td>"+_img+"</td></tr>"
            }
        }
        rStr += "</table>"
        mailTable = rStr;
        document.getElementById('reportBody').innerHTML = rStr;
//        if (!mute)
//        {
//            goingtoread=document.getElementById('detReportHeader').textContent+", ."+document.getElementById('score_cont').textContent+", ."+"Section in Chapter , .";
//            for(i = 0;i<sectionArr.length;i++)
//                goingtoread=goingtoread+"Number , . "+(i+1)+", ."+document.getElementById('section_'+i).textContent+", .";
//            goingtoread=goingtoread+"Type of Question , ."
//            for(i = 0;i<sectionArr.length;i++)
//                goingtoread=goingtoread+"Number , . "+(i+1)+", ."+document.getElementById('section_'+i).textContent;
//            speak(goingtoread, {
//                amplitude: 200, 
//                wordgap: 1.5, 
//                pitch: 35, 
//                speed: 160
//            });
//        }
    }
	
    this.showReport = function(){
        for(var i = 0;i<(no_of_questions+1);i++){
            var reportCont = this.createObject('reportCont_'+i,{
                width:'98%',
                height:'auto',
                backgroundColor:'#ffffff',
                margin:'5px auto',
                border:'1px solid black'
            },'div');
            document.getElementById('reportBody').appendChild(reportCont);
            if(user_choice[i].identifier == 'tf01' || user_choice[i].identifier == 'choice'){
                var reportStr = "<table id='reportTable' cellspacing=5 cellpadding=5>";
                reportStr += "<tr><td style='color:#ff0000;fontWeight:bold'>Question "+(i+1)+"</td></tr>";
                reportStr += "<tr><td>"+user_choice[i].question+"</td></tr>";
                reportStr += "<tr><td style='color:#ff0000;fontWeight:bold'>Student Answer</td></tr>";
                reportStr += "<tr><td>"+user_choice[i].userAnswerValue+"</td></tr>";
                reportStr += "<tr><td style='color:#ff0000;fontWeight:bold'>Correct Answer</td></tr>";
                reportStr += "<tr><td>"+user_choice[i].correctAnswerValue+"</td></tr>";
                reportStr += "</table>";
				
            }
            else if(user_choice[i].identifier == 'match'){
                var reportStr = "<table id='reportTable' cellspacing=5 cellpadding=5>";
                reportStr += "<tr><td style='color:#ff0000;fontWeight:bold'>Question "+(i+1)+"</td></tr>";
                reportStr += "<tr><td>"+user_choice[i].question+"</td></tr>";
                reportStr += "<tr><td style='color:#ff0000;fontWeight:bold'>Student Answer</td></tr>";
                reportStr += "<tr><td><table id='userMatchTable'>";
                var _obj = user_choice[i].choicePlaced
                for(var j in _obj){
                    reportStr += "<tr><td>"+this.getValue(j,user_choice[i].question_arr)+"</td><td>"+this.getValue(_obj[j].split("_")[1],user_choice[i].answer_arr)+"</td></tr>";
                }
                reportStr += "</table></td></tr>";
                reportStr += "<tr><td style='color:#ff0000;fontWeight:bold'>Correct Answer</td></tr>";
                reportStr += "<tr><td><table id='correctMatchTable'>";
                var Carr = user_choice[i].correctAnswerValue;
                for(var j=0;j<Carr.length;j++){
                    var _arr = Carr[j].split(" ");
                    reportStr += "<tr><td>"+this.getValue(_arr[0],user_choice[i].question_arr)+"</td><td>"+this.getValue(_arr[1],user_choice[i].answer_arr)+"</td></tr>";
                }
                reportStr += "</table></td></tr></table>";
				
            }
			
			
            reportCont.innerHTML = reportStr;
        }
    }
	
	
    this.getValue = function (_id,_arr){
        for(var k = 0;k<_arr.length;k++){
            if(_arr[k].identifier == _id){
                return _arr[k].val;
            }
        }
        return "";
    }
	
    this.createObject = function(id,obj,type){
        var _obj = document.createElement(type);
        _obj.setAttribute('id',id);
        for(var i in obj){
            _obj.style[i] = obj[i]
        }
        return _obj;
    }
	
	
    this.showMailSendForm = function(){
        		
    }
}
function onDeleteTo(_this){
    var toId = _this.id.split("_")[1];
    toCount--;
    document.getElementById('mailTo').removeChild(document.getElementById('toBox_'+toId));
    document.getElementById('mailAddBtn').style.visibility = 'visible'; 
    adding=true;
}

function onMailClose(_this){
    document.getElementById('reportCont').removeChild(document.getElementById('mailSendForm'));
    document.getElementById('reportCont').removeChild(document.getElementById('mailForm'));
    toCount = 0;	
    adding=true;
//    $("#emailBtn").attr("disabled",false);
    mailshow=true;
}
function validateMultipleEmailsCommaSeparated(emailcntl) {
    var value = emailcntl.value;
    if (value != '') {
        var result = value.split(";");
        for (var i = 0; i < result.length; i++) {
            if (result[i] != '') {
                if (!validateEmail(result[i])) {
                    emailcntl.focus();
                    alert(result[i] + ' is Not a valid Address');
                    emailcntl.value="";
                    //                    document.getElementById("toaddress").focus();
                    adding=false;
                    return false;
                }
            }
        }
    }
    adding=true;
    return true;
}
function validateEmail(field) {
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
    return (regex.test(field)) ? true : false;
}