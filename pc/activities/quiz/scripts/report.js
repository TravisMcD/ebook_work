var typeArr = new Array();
var totalQuestion = 0;//dinesh
var scoreTotal = 0;//dinesh
function report(){
    this.show = function(){
		
        document.getElementById('questionBread').style.visibility = 'hidden';
        document.getElementById('heading2').innerHTML = "";
        if (nav=='Windows'){
            document.getElementById('heading2').style.paddingTop = '35px';
            document.getElementById('modeType').style.paddingTop = '35px';
            document.getElementById('breadCrumbTable').style.visibility = 'hidden';
        }
        else if (nav=='Iphone'){
           // document.getElementById('heading1').innerHTML = "";
            document.getElementById('questionBread').style.visibility = 'hidden';
            document.getElementById('heading2').style.height = '0px';   
            $("#questionCont").css({
                "min-height": "264px"
            });
            $("#questionCont").css({
                "display": "table !important"
            });
        }
        if (orientation1=='portrait'&& nav=='Iphone')
        {
            var wds='286px',mar="61px auto";
            $("#audioBtn").css({
                "margin-top":"-41px"
            });
        }
        else{
            wds="385px",mar="100px auto"
        }
        var reportDiv = this.createObject('reportDiv',{
            width:wds,
            height:'auto',
            margin:mar,
            position:'relative',
            display:'table',
            padding:'5px'
        },'div');
        document.getElementById('questionCont').appendChild(reportDiv);
        
       
        
        typeArr = new Array();
        this.calculateScore();
        var perct = this.getScore();
		
		
        var scoreBoard = document.createElement('div');
        scoreBoard.setAttribute('class','scoreBoard');
        scoreBoard.setAttribute('id','scoreBoard');
        scoreBoard.innerHTML = "Score : "+perct+"% - "+scoreTotal+"/"+totalQuestion;

        reportDiv.appendChild(scoreBoard);

		
		
        var startagainBtn = document.createElement('div');
        startagainBtn.setAttribute('class','ctrlBtn1');
        startagainBtn.setAttribute('id','start_again');
        startagainBtn.innerHTML = "Start Again";
        startagainBtn.style.backgroundImage  = "url('images/"+themeSelected+"/startAgain.png')";
        startagainBtn.style.backgroundPosition= '4px 4px';
        startagainBtn.style.width = '107px';
        startagainBtn.onclick = reloadPage;
        reportDiv.appendChild(startagainBtn);
        
        
		
        var reviewBtn = document.createElement('div');
        reviewBtn.setAttribute('class','ctrlBtn1');
        reviewBtn.setAttribute('id','review');
        reviewBtn.innerHTML = "Review";
        reviewBtn.onclick = reviewModeOn;
        reviewBtn.style.backgroundImage  = "url('images/"+themeSelected+"/startAgain.png')";
        reviewBtn.style.backgroundPosition= '4px 4px';
        reviewBtn.style.width = '79px';
        reviewBtn.style.backgroundImage  = "url('images/"+themeSelected+"/reviewBtn.png')";
        reportDiv.appendChild(reviewBtn);
		
        var emailBtn = document.createElement('div');
        emailBtn.setAttribute('class','ctrlBtn1');
        emailBtn.setAttribute('id','report');
        emailBtn.innerHTML = "Report";
        emailBtn.onclick = this.sendEmail;
        emailBtn.style.backgroundImage  = "url('images/"+themeSelected+"/startAgain.png')";
        emailBtn.style.backgroundPosition= '4px 4px';
        emailBtn.style.width = '76px';
        emailBtn.style.backgroundImage  = "url('images/"+themeSelected+"/emailBtn.png')";
        reportDiv.appendChild(emailBtn);
		
    //		if(MODE == "summarized" && !REVIEW_MODE){
    //			var eReport = new emailReport();
    //			eReport.show();
    //		}
        
            
    }
	
    this.sendEmail = function(){

        /* var detReport = new detailReport();
        detReport.show();*/
//		alert(nav)
        if (nav=='Ipad'||nav=='Windows'){
            var eReport = new emailReport();
            eReport.show();	
            var detReport = new detailReport();
            detReport.show();
        }
        else
        {
		   
		    var eReport = new emailReport();
            eReport.show();	
            eReport.hide();
            	
           eReport = new mobileemailReport();
           eReport.show();	
			
             var detReport = new mobdetailReport();
            detReport.show();

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
	
    this.calculateScore = function(){
        for(var i = 0;i<user_choice.length;i++){
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
    }
	
    this.newObject = function(_arr,_name){
        for(var j = 0;j<_arr.length;j++){
			
            if(_name == _arr[j].name){
                return false;
            }
        }
        return true;
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
	
}