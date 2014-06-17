var detReportCont;
var reportThis = null;
var sectionArr = new Array();
var typeArr = new Array();
var totalQuestion = 0;//dinesh
var scoreTotal = 0;//dinesh

var reportImageWrongURL = ''; 
var reportImageCorrectURL = '';

function mobdetailReport(){
	
	
	
    reportThis = this;
    this.show = function()
    {
		
		reportImageWrongURL = SERVER_PATH+"images/theme1/wrong.png";
	reportImageCorrectURL = SERVER_PATH+"images/theme1/right.png";
        sectionArr = new Array();
        typeArr = new Array();
        totalQuestion = 0;
        scoreTotal=0;
        toCount = 0;
        var _left = 50;
        var _top =  -115;
        //        
        if (nav=='Iphone'){
            if (orientation1!='portrait')
                var het='180px';
            else
                het='240px'
            _top=0;
        }
        else if (nav=='Windows'||nav=='Ipad'){
            het='400px';
            document.getElementById('heading2').style.paddingTop = '35px';
            document.getElementById('modeType').style.paddingTop = '35px';
        }
        reportCont = this.createObject('detReportCont',{
            //            width:'99%',
            height:'auto',
            position:'relative',
			marginTop:'10px'
           
        //            border:'1px solid #979898',browser
        //            boxShadow:'2px 2px 2px #888888'browser
        },'div');
	    
	   
	   
	    
        document.getElementById('reportBody').appendChild(reportCont);
        
        var reportHeader = this.createObject('detReportHeader',{
            width:'99%',
            height:'20px',
            display:'table'
        },'div');
        reportHeader.innerHTML = "Detailed Report";
        reportHeader.setAttribute('class','emailReportHeader');
        reportCont.appendChild(reportHeader);
		

		
        var reportClose = this.createObject('detReportClose',{
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
            backgroundColor:'#fff'
        },'div');
        reportClose.innerHTML = 'X';
        reportClose.onclick = this.closeReport;
       // reportHeader.appendChild(reportClose);
	   
        if (nav=='Iphone'){
            if (orientation1=='portrait')
                var hets='309px'
            else
                hets='472px'
        }
        else if (nav=='Windows')
            hets='auto'
        var reportBody = this.createObject('detReportBody',{//iphone width
            width:'295px',
            height:'auto',
            backgroundColor:'#ffffff',
            marginLeft:'3px',
            overflow:'auto'
        },'div');
        reportCont.appendChild(reportBody);
        if (nav=='Windows'||(nav=='Ipad'))
            $("#detReportBody").css({
                "width":"945px"
            });
			
		
			
        var reportFooter = this.createObject('detReportFooter',{
//                        width:'99%',
            height:'10px',
            padding:'2px 4px 13px'
        },'div');
        reportCont.appendChild(reportFooter);
        reportFooter.setAttribute("class","emailReportFooter");
		
        /*var emailBtn = this.createObject('emailBtn',{
            width:'105px',
            height:'18px',
            textAlign:'center',
            fontFamily:'sans-serif',
            color:'#333333',
            cursor:'pointer',
            backgroundColor:'#fff',
            cssFloat:'right',
            marginRight:'5px',
            paddingTop:'3px',
            borderRadius:'3px'
        },'div');
        emailBtn.innerHTML = "Email Report";
        emailBtn.onclick = this.showEmailReport;*/

        $("#questionCont").css({
            "min-height": "264px !important"
        });
       // reportFooter.appendChild(emailBtn);
       
       
       var emailBtn = this.createObject('emailBtn',{},'div');
		emailBtn.setAttribute('class','emailBtnReport')
		emailBtn.innerHTML = "Send";
		emailBtn.onclick = this.showEmailForm;
		//emailBtn.onclick = sendMail;//
		reportFooter.appendChild(emailBtn);

        this.showDetailReportTable();
		
    }
    
     this.showEmailForm = function(){
     	
        if (mailshow){
        $("#emailBtn").attr("disabled",true);
        var mailSendForm = reportThis.createObject('mailSendForm',{},'div');
        mailSendForm.setAttribute('class','mailSendForm');
        document.getElementById('reportCont').appendChild(mailSendForm);
		
        var mailForm = reportThis.createObject('mailForm',{},'div');
        mailForm.setAttribute('class','mailForm');
        document.getElementById('reportCont').appendChild(mailForm);
		
        var mailHeader = reportThis.createObject('mailHeader',{},'div');
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
		
        var mailSubject = reportThis.createObject('mailSubject',{},"div");
        mailSubject.setAttribute('class','mailSubject');
        mailForm.appendChild(mailSubject);
		
        mailSubject.innerHTML = "<span class='mailFormLabel'>Subject :</span><input type='text' id='subject_txt' />";
		
        var mailTo = reportThis.createObject('mailTo',{},"div");
        mailTo.setAttribute('class','mailTo');
        mailForm.appendChild(mailTo);
		
        reportThis.addToField();
		
        var mailFooter = reportThis.createObject('mailFooter',{},'div');
        mailFooter.setAttribute('class','mailFooter');
        mailForm.appendChild(mailFooter);
		
        var mailSendBtn = reportThis.createObject('mailSendBtn',{},'div');
        mailSendBtn.setAttribute('class','mailSendBtn');
         mailFooter.appendChild(mailSendBtn);
        mailSendBtn.onclick = sendMail;
		
        var mailAddBtn = reportThis.createObject('mailAddBtn',{},'div');
        mailAddBtn.setAttribute('class','mailAddBtn');

       
        mailAddBtn.onclick = reportThis.addToField;
        mailFooter.appendChild(mailAddBtn);
        document.getElementById('subject_txt').value="Quiz";//dinesh
        mailshow=false;
    }
    }
	
	function sendMail(){
		$('#contentTable').append("<div id='loadingscreen' class='loadingtemplate' style='width: 320px;position:absolute;top:0px;height:400px;left:0px;background-color:black;opacity:0.2'></div><div class='loadingtemplate' style='width: 320px;position:absolute;top:0px;height:400px;left:0px;line-height:50px;text-align:center;'><img style='margin-top:100px;' src='images/ajax-loader1.gif' /></div>");
    	//var subject = document.getElementById('mailSubject_txt').value;
    	var subject = document.getElementById('subject_txt').value;
    	var to = "";
		
		
    	for(var i = 0;i<toCount;i++){
    		if(i == (toCount-1))
    		to += document.getElementById('totext_'+i).value;
    		else
    		to += document.getElementById('totext_'+i).value+",";
    	}
		
	
     	//var body = "<html><head></head><body>"+mailBody+"</body></html>"
    	//var data = "&address="+ to +"&subject="+subject+"&message="+body;
    	
    	
/*    	jQuery.ajax({
		     type: "POST",
		     url: "http://marinawebhosting.com/emailtest/email.php",
		     data: data,
		     success: function(data){
		          //alert(data)
		     }
		});   */  
		
		
		
		var content = mailTable;//+document.getElementById('detReportBody').innerHTML;
		content = content.split("<table").join("<table cellpadding=0 cellspacing=0 style='font-family:sans-serif;font-size:13px;border:1px solid black' ");
		
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

      //  alert("to="+to)
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
        	
            var toBox = reportThis.createObject('toBox_'+toCount,{},'div');
            toBox.setAttribute('class','toBox');
            if(toCount == 0)
                toBox.innerHTML = "<span class='mailFormLabel'>To : </span><input type='text' style='width:170px' id='totext_"+toCount+"' onblur='validateMultipleEmailsCommaSeparated(this)'/>";
            else
                toBox.innerHTML = "<span class='mailFormLabel'>To : </span><input type='text' style='width:170px' id='totext_"+toCount+"' onblur='validateMultipleEmailsCommaSeparated(this)'/>&nbsp;&nbsp;&nbsp;<span onclick='javascript:onDeleteTo(this);' class = 'deleteTo' id='deleteTo_"+toCount+"'>X</span>";
            document.getElementById('mailTo').appendChild(toBox);
            toCount++;
            if(toCount >=10)
                document.getElementById('mailAddBtn').style.visibility = 'hidden';
            adding=false;
        }
    }
	
    this.showDetailReportTable = function(){
		
        for(var i = 0;i<user_choice.length;i++){
            //console.log(user_choice[i].section+"---"+user_choice[i].type+"---"+user_choice[i].score)
            if(this.newObject(sectionArr,user_choice[i].section)){
                sectionArr.push({
                    name:user_choice[i].section,
                    score:user_choice[i].score,
                    count:1
                });
            }
            else{
                this.update(sectionArr,user_choice[i].section,user_choice[i].score)
            }
			
            if(this.newObject(typeArr,user_choice[i].type)){
                typeArr.push({
                    name:user_choice[i].type,
                    score:user_choice[i].score,
                    count:1
                });
            }
            else{
                this.update(typeArr,user_choice[i].type,user_choice[i].score)
            }
        }
		
        var detTable = "<table id='detReportTable' style='color:#333333;font-family:sans-serif;width:100%'>";
        var totalScore = this.getScore()+"%";
        detTable += "<tr><td colspan=2 style='text-align:center'><div style='font-size: 19px;font-weight: bold' id='score_cont'>Score : "+totalScore+" - "+scoreTotal+"/"+totalQuestion+"</div></td></tr>";//dinesh
        detTable +="<tr><td colspan=2  style='background-color:#424963;color:#fff;font-size:18px;padding:5px'>Section in Chapter</td></tr>"
        for(i = 0;i<sectionArr.length;i++){
            detTable += "<tr><td style='width:10px'>"+(i+1)+".</td><td id='section_"+i+"'  style='padding:3px;border:2px dotted #666666;background-color:#EBEBEB;box-shadow:1px 1px 1px #888888'>"+sectionArr[i].name+" : "+sectionArr[i].score+" out of "+sectionArr[i].count+"</td></tr>"
        //console.log("sec="+sectionArr[i].name+",score="+sectionArr[i].score+"cnt="+sectionArr[i].count)
        }
        detTable += "<tr><td  colspan=2 style='background-color:#424963;color:#fff;font-size:18px;padding:5px'>Type of Question</td></tr>"
        for(i = 0;i<typeArr.length;i++){
            detTable += "<tr><td style='width:10px'>"+(i+1)+".</td><td id='type_"+i+"' style='padding:3px;border:2px dotted #666666;background-color:#EBEBEB;box-shadow:1px 1px 1px #888888'>"+typeArr[i].name+" : "+typeArr[i].score+" out of "+typeArr[i].count+"</td></tr>"
        //console.log("type="+typeArr[i].name+",score="+typeArr[i].score+"cnt="+typeArr[i].count)
        }
        detTable += "</table>";
         mailBody = detTable;
        document.getElementById('detReportBody').innerHTML = detTable;
		
		
    
    }
	
    this.getScore = function(){
        totalQuestion = 0;
        scoreTotal=0;
        for(var i = 0;i<typeArr.length;i++){
            totalQuestion += Number(typeArr[i].count);
            scoreTotal += Number(typeArr[i].score);
        }
        return Math.round((scoreTotal/totalQuestion)*100);
    }
	
    this.update = function(_arr,secName,_score){
        for(var k = 0;k<_arr.length;k++){
            if(_arr[k].name == secName){
                _arr[k].score = Number(_arr[k].score) + _score;
                _arr[k].count = Number(_arr[k].count)+1;
            }
        }
    }
	
    this.newObject = function(_arr,_name){
        for(var j = 0;j<_arr.length;j++){
			
            if(_name == _arr[j].name){
                return false;
            }
        }
        return true;
    }
	
    this.showEmailReport=function(){
        if (nav!='Iphone'){
            var eReport = new emailReport();
            eReport.show();	
        }
        else
        {
            eReport = new mobileemailReport();
            eReport.show();	
        }
    }
	
    this.closeReport = function(){
        document.getElementById('questionCont').removeChild(document.getElementById('detReportCont'))
    }
	
    this.createObject = function(id,obj,type)
    {
        var _obj = document.createElement(type);
        _obj.setAttribute('id',id);
//        console.log(_obj+"--"+id)
        for(var i in obj){
//            console.log("type="+type+"i="+i);
            _obj.style[i] = obj[i];
        }
        return _obj;
    }
	
	
}