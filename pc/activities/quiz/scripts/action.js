/*var questArr = new Array(
	{
		question:"1.Which detail supports the idea that animals have behavioral adaptations?",
		choiceArr:[
		{
			label:"The black-tailed jackrabbit's oversized ears help it to stay cool.",
		},
		{
			label:'The kangaroo rat burrows underground to get out of the sun.',
		},
		{
			label:"The coloring of the blue morpho butterfly's wings tricks predators.",
		},
		{
			label:'Rainwater pours out of the grooved leaves of rainforest plants.',
		}
		],
		answer:1		
	},
	
	{
		question:"2.Which of the following is an example of a behavioral adaptation?",
		choiceArr:[
		{
			label:'grooved leaves',
		},
		{
			label:'oversized ears',
		},
		{
			label:'feeding on shrubs',
		},
		{
			label:'wing color',
		}
		],
		answer:3		
	},
	{
		question:"3.What evidence from the article supports the point that too much rain is not good for plants?",
		choiceArr:[
		{
			label:'it can cause overgrowth ',
		},
		{
			label:'the branches can become too strong',
		},
		{
			label:'the leave become too moist',
		},
		{
			label:"it can drown out the plant's roots",
		}
		],
		answer:4		
	},
	
	{
		question:"4.What evidence supports the point that structural adaptations help organisms survive in hot, dry climates? ",
		choiceArr:[
		{
			label:'The kangaroo rat burrows underground. ',
		},
		{
			label:'The grooved leaves of rainforest plants help to get rid of excess water. ',
		},
		{
			label:"The blood vessels in the jackrabbit's oversized ears help it maintain a low body temperature.",
		},
		{
			label:"The coloring on the underside of the blue morpho butterfly's wings helps it to blend in with plants.",
		}
		],
		answer:2		
	},
	{
		question:"5.What evidence does not support the author's point that organisms in rainforests have to deal with a lot of water?",
		choiceArr:[
		{
			label:'A tropical rainforest gets between 200–400 inches of rain per year.',
		},
		{
			label:'The blue morpho butterfly has brilliant blue wings that reflect sunlight. ',
		},
		{
			label:"Many rainforest plants have adaptations that allow them to get rid of rain. ",
		},
		{
			label:"Too much rain can cause tree branches to break under the weight of the water.",
		}
		],
		answer:2		
	}
)*/

var questArr = new Array();

var currentQuestion = 0;
var alpha_arr = new Array("A","B","C","D");
var selectedChoiceId = 0;
var submitClicked = false;
var totalQuestion = 0;
var xmlData = null;

function init(){
	totalQuestion = questArr.length;
	
	xmlData = getXmlData('xml/sample.xml')
	totalQuestion = (xmlData.getElementsByTagName('question').length);
	extractQuestions(xmlData);
	loadQuestion();
	document.getElementById('prevBtn').onclick = showPreviousQuestion;
	document.getElementById('nextBtn').onclick = showNextQuestion;
	document.getElementById('submitBtn').onclick = onSubmit;
}


function extractQuestions(xmlData){
	//questionArr
	
	for(var i = 0;i<totalQuestion;i++){
		var totalChild = xmlData.getElementsByTagName('question')[i].childNodes.length
		var childNodes = xmlData.getElementsByTagName('question')[i].childNodes;
		var questionObj = new Object();
		var choiceArr = new Array();
		var choiceCount = 0;
		var answer = 0;
		
		for(var j = 0;j<totalChild;j++){
			if(childNodes[j].nodeType == 1)
			{
				if(childNodes[j].nodeName == 'text'){
					questionObj.question = childNodes[j].childNodes[0].nodeValue;
				}
				else if(childNodes[j].nodeName == 'answer'){
					choiceCount++;
					choiceArr.push({label:childNodes[j].childNodes[0].nodeValue})
					
			        if(childNodes[j].getAttribute('correct') == "true"){
			        	answer = choiceCount;
			        }		
				}
			}
		}
		
		questionObj.answer = answer;
		questionObj.choiceArr = choiceArr; 
		questArr.push(questionObj)
	}
}

function loadQuestion(){
	resetStage();
	document.getElementById('quesCont').innerHTML = "<span class='quesText'>"+questArr[currentQuestion].question+"</span>";
	for(var i = 0;i<questArr[currentQuestion].choiceArr.length;i++){
		
		var _listCont = document.createElement('div');
		_listCont.setAttribute('class','listCont');
		document.getElementById('choiceCont').appendChild(_listCont);
		
		var _ack = document.createElement('div');
		_ack.setAttribute('class','ack');
		_ack.setAttribute('id','ack_'+(i+1));
		_listCont.appendChild(_ack);
		
		var _slno = document.createElement('div');
		_slno.setAttribute('class','slno');
		_slno.innerHTML = alpha_arr[i]+".";
		_listCont.appendChild(_slno);
		
		var _choice = document.createElement('div');
		_choice.setAttribute('id','choice_'+(i+1));
		_choice.setAttribute('class','choiceText');
		_choice.innerHTML = questArr[currentQuestion].choiceArr[i].label;
		_choice.onclick = selectChoice;
		_listCont.appendChild(_choice);
		
	}
	disableNavigation();
}

function resetStage(){
	selectedChoiceId = 0;
	submitClicked = false;
	document.getElementById('choiceCont').innerHTML = "";
}

function selectChoice(e){
	if(selectedChoiceId != 0){
		document.getElementById('choice_'+selectedChoiceId).style.backgroundColor = '#F4B000';
	}
	this.style.backgroundColor = '#00BA19';
	selectedChoiceId = this.id.split("_")[1];
}

function showPreviousQuestion(){
	if(currentQuestion > 0){
	  currentQuestion --;
	  loadQuestion();	
	}
	
}

function showNextQuestion(){
	if(currentQuestion < (totalQuestion-1)){
	  currentQuestion ++;
	  loadQuestion();	
	}
	
}

function onSubmit(e){
	if(selectedChoiceId != 0){
		submitClicked = true;
		if(questArr[currentQuestion].answer == selectedChoiceId){
		   document.getElementById('ack_'+selectedChoiceId).style.backgroundImage = "url('images/right.png')";	
		}
		else{
			document.getElementById('ack_'+selectedChoiceId).style.backgroundImage = "url('images/wrong.png')";	
			document.getElementById('ack_'+questArr[currentQuestion].answer).style.backgroundImage = "url('images/right.png')";	
		}
	}
	else{
		customAlert("select choice");
	}
}

function disableNavigation(){
	if(currentQuestion == 0){
		document.getElementById('prevBtn').style.opacity = 0.5;
		document.getElementById('prevBtn').style.cursor = 'default';
	}
	else if(currentQuestion == (totalQuestion-1)){
		document.getElementById('nextBtn').style.opacity = 0.5;
		document.getElementById('nextBtn').style.cursor = 'default';
	}
	else{
		document.getElementById('prevBtn').style.opacity = 1;
		document.getElementById('prevBtn').style.cursor = 'pointer';
		document.getElementById('nextBtn').style.opacity = 1;
		document.getElementById('nextBtn').style.cursor = 'pointer';

	}
}

function customAlert(msgStr){
	alert(msgStr);
}

function getXmlData(xmlPath){
	 if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
	xmlhttp.open("GET",xmlPath,false);
	xmlhttp.send();
	return xmlhttp.responseXML;
}
