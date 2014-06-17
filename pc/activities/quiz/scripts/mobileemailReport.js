var reportCont;
function mobileemailReport(){
	
	this.show = function(){
		
		
		var _left = 50;
		var _top =  -115;
		//document.getElementById('questionCont').removeChild(document.getElementById('detReportCont'))
		reportCont = this.createObject('reportCont',{},'div');
//		reportCont.setAttribute('class','reportCont')
		reportCont.style.overflow = 'auto';
		document.getElementById('questionCont').appendChild(reportCont);
        
         		
		var reportHeader = this.createObject('reportHeader',{},'div');
		reportHeader.setAttribute('class','reportHeader1')
		reportHeader.innerHTML = "Quiz Report";
		reportCont.appendChild(reportHeader);
		
		var emailContent = this.createObject('reportHeader',{},'div');
		reportCont.appendChild(emailContent);
		emailContent.setAttribute('class','reportHeader')
		
		var emailStr = "<table id='emailTable'>";
		emailStr += "<tr><td>To :</td><td><input type='text' style='width:180px;height:20px' id='mailTo_txt' /></td></tr>";
		emailStr += "<tr><td>Subject :</td><td><input type='text' style='width:80px;height:20px' id='mailSubject_txt' /></td></tr>";
		emailStr += "</table>";
		emailContent.innerHTML = emailStr;
		
		
//		width:'18px',
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
		var reportClose = this.createObject('reportClose',{width:'18px',border:'1px solid #D8D8D8',paddingLeft:'6px',marginTop:'0px',backgroundColor:'#fff',height:'18px',display:'table-cell',cssFloat:'right',marginRight:'10px',cursor:'pointer',color:'#696189'},'div');
		reportClose.innerHTML = '<center>X</center>';
		reportClose.onclick = this.closeReport;
		reportHeader.appendChild(reportClose);
		
		var reportBody = this.createObject('reportBody',{},'div');
		reportBody.setAttribute('class','reportBody')
		reportBody.style.overflow = 'scroll';
		reportCont.appendChild(reportBody);
		
		var reportFooter = this.createObject('reportFooter',{},'div');
		reportFooter.setAttribute('class','reportFooter')
		reportCont.appendChild(reportFooter);
		//reportFooter.appendChild(emailBtn);
		
		this.showReport();
		
	}
	
	this.closeReport = function(e){
		
		document.getElementById('questionCont').removeChild(document.getElementById('reportCont'));
		
	}
	
	this.showReport = function(){
		
		for(var i = 0;i<(no_of_questions+1);i++){
			var reportCont = this.createObject('reportCont_'+i,{width:'98%',height:'auto',backgroundColor:'#ffffff',margin:'5px auto',border:'1px solid #000000'},'div');
			document.getElementById('reportBody').appendChild(reportCont);
			
			if(user_choice[i].identifier == 'tf01' || user_choice[i].identifier == 'choice'){
				var reportStr = "<table id='reportTable' cellspacing=5 cellpadding=5>";
				reportStr += "<tr><td style='border:1px solid #ccc;color:#ff0000;font-weight:bold'>Question "+(i+1)+"</td></tr>";
				reportStr += "<tr><td style='border:1px solid #ccc;'>"+user_choice[i].question+"</td></tr>";
				reportStr += "<tr><td style='border:1px solid #ccc;color:#ff0000;font-weight:bold'>Student Answer</td></tr>";
				reportStr += "<tr><td style='border:1px solid #ccc;'>"+user_choice[i].userAnswerValue+"</td></tr>";
				reportStr += "<tr><td style='border:1px solid #ccc;color:#ff0000;font-weight:bold'>Correct Answer</td></tr>";
				reportStr += "<tr><td style='border:1px solid #ccc;'>"+user_choice[i].correctAnswerValue+"</td></tr>";
				reportStr += "</table>";
				
			}
			else if(user_choice[i].identifier == 'match'){
				var reportStr = "<table id='reportTable' cellspacing=5 cellpadding=5>";
				reportStr += "<tr><td style='border:1px solid #ccc;color:#ff0000;fontWeight:bold'>Question "+(i+1)+"</td></tr>";
				reportStr += "<tr><td style='border:1px solid #ccc;'>"+user_choice[i].question+"</td></tr>";
				reportStr += "<tr><td style='border:1px solid #ccc;color:#ff0000;font-weight:bold'>Student Answer</td></tr>";
				reportStr += "<tr><td style='border:1px solid #ccc;'><table id='userMatchTable'>";
				var _obj = user_choice[i].choicePlaced
				for(var j in _obj){
					reportStr += "<tr><td style='border:1px solid #ccc;'>"+this.getValue(j,user_choice[i].question_arr)+"</td><td style='border:1px solid #ccc;'>"+this.getValue(_obj[j].split("_")[1],user_choice[i].answer_arr)+"</td></tr>";
				}
				reportStr += "</table></td></tr>";
				reportStr += "<tr><td style='border:1px solid #ccc;color:#ff0000;font-weight:bold'>Correct Answer</td></tr>";
				reportStr += "<tr><td style='border:1px solid #ccc;'><table id='correctMatchTable'>";
				var Carr = user_choice[i].correctAnswerValue;
				for(j=0;j<Carr.length;j++){
					var _arr = Carr[j].split(" ");
					reportStr += "<tr><td style='border:1px solid #ccc;'>"+this.getValue(_arr[0],user_choice[i].question_arr)+"</td><td>"+this.getValue(_arr[1],user_choice[i].answer_arr)+"</td></tr>";
				}
				reportStr += "</table></td></tr></table>";
				
			}
			
			//mailTable += reportStr;
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
}