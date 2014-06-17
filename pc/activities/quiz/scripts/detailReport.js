var detReportCont;
var reportThis = null;
var sectionArr = new Array();
var typeArr = new Array();
var totalQuestion = 0;//dinesh
var scoreTotal = 0;//dinesh
function detailReport(){
    reportThis = this;
    this.show = function()
    {
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
            width:'705px',
            height:'20px',
            display:'table',
			marginLeft:'13px'
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
            width:'732px',
            height:'auto',
            backgroundColor:'#ffffff',
            marginLeft:'3px',
            overflow:'auto'
        },'div');
        reportCont.appendChild(reportBody);
        if (nav=='Windows'||(nav=='Ipad'))
            $("#detReportBody").css({
                "width":"734px"
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

        this.showDetailReportTable();
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
        var detTable = "<table id='detReportTable' style=\"color:#333333;font-family:sans-serif;width:97%;margin-left:10px;\">";
        var totalScore = this.getScore()+"%";
        detTable += "<tr><td colspan=2 style=\"text-align:center;\"><div style=\"font-size: 19px;font-weight: bold;\" id='score_cont'>Score : "+totalScore+" - "+scoreTotal+"/"+totalQuestion+"</div></td></tr>";//dinesh
        detTable +="<tr><td colspan=2  style=\"background-color:#424963;color:#fff;font-size:18px;padding:5px;\">Section in Chapter</td></tr>"
        for(i = 0;i<sectionArr.length;i++){
            detTable += "<tr><td style=\"width:10px;\">"+(i+1)+".</td><td id='section_"+i+"'  style=\"padding:3px;border:2px dotted #666666;background-color:#EBEBEB;box-shadow:1px 1px 1px #888888;\">"+sectionArr[i].name+" : "+sectionArr[i].score+" out of "+sectionArr[i].count+"</td></tr>"
        //console.log("sec="+sectionArr[i].name+",score="+sectionArr[i].score+"cnt="+sectionArr[i].count)
        }
        detTable += "<tr><td  colspan=2 style=\"background-color:#424963;color:#fff;font-size:18px;padding:5px;\">Type of Question</td></tr>"
        for(i = 0;i<typeArr.length;i++){
            detTable += "<tr><td style=\"width:10px;\">"+(i+1)+".</td><td id='type_"+i+"' style=\"padding:3px;border:2px dotted #666666;background-color:#EBEBEB;box-shadow:1px 1px 1px #888888;\">"+typeArr[i].name+" : "+typeArr[i].score+" out of "+typeArr[i].count+"</td></tr>"
        //console.log("type="+typeArr[i].name+",score="+typeArr[i].score+"cnt="+typeArr[i].count)
        }
        detTable += "</table>";
        
        mailBody = detTable;
        
        document.getElementById('detReportBody').innerHTML = detTable;
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