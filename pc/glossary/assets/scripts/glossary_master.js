var selAlpha = "#";
var selLang = "english";
var selTerm = "";
var selDef = "";
var selAudio = "audio/en-002";
var selAnim = "";
var relTerms = "";



var englishTerm="Default English Term";
var spanishTerm="Default Spanish Term";
var englishDef="Default English Definition";
var spanishDef="Default Spanish Definition";
var replayAnimation = 0;
var oneTime = true;

var sourceData;
var glossaryData;
var glossaryResources;
var alphaData;
var alphabets = new Array("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");
var dataLoaded = false;

var ltrBtn;
var cnt = 0;
var X = 6;
var Y = 5;
var btnWid = 22.4;
var alphaDiv;
var listBox;
var termDiv;
var definitionDiv;
var seealsoDiv;
var animationDiv;
var audioBtn;
var languageCB;
var goTop;
var searchTxt;
var searchBtn;
var replayBtn;
var soundObj;
var soundDiv;
var isPlayingAudio = false;
var isAudioLoaded = false;
var tgtTerm="";
var termListContainer;
var termOption;
var languageListContainer;
var langOption1;
var langOption2;

var langBtn;

var isIe = false;
var spElement;
var spApi;
var hasAllTerms = true;

var termList = new Array();
var termInd;



function initDocument(){
	$(document).ready(function(){
		
		/*$.ajax({
				url: "assets/jsondata/gloss_resource.json",
				dataType: "json",
				success:getJsonData,
				error: err
		});*/
		
	})
	
	alphaDiv = document.getElementById("alphabetArea");
	
	animationDiv = document.getElementById("animation");
	listBox = document.getElementById("pane2");
	
	termDiv = document.getElementById("term");
	definitionDiv = document.getElementById("definition");
	//seealsoDiv = document.getElementById("seealso");
	//languageCB = document.getElementById("pane2");
	searchTxt = document.getElementById("searchTxt");
	searchBtn = document.getElementById("searchBtn");
//	audioBtn = document.getElementById("audioBtn");
	soundDiv = document.getElementById("audioDiv");
	//soundDiv.innerHTML = "<audio id='glossaryAudio' autoplay='none'></audio>";
	soundObj = document.getElementById("glossaryAudio");
	langBtn = document.getElementById("languageBox");
//	languageListContainer = document.getElementById("languageListContainer");
//	langOption1 = document.getElementById("englishOption");
//	langOption2 = document.getElementById("spanishOption");
	replayBtn = document.getElementById("replay");
	/*soundObj.addEventListener("ended",onAudioComplete);
	listBox.addEventListener("change", showSelectedTerm)
	languageCB.addEventListener("change", changeLanguage);
	searchBtn.addEventListener("click", searchContent);
	*/
//	audioBtn.onclick = playAudio;

	//listBox.onchange = showSelectedTerm;
	//languageCB.onchange = changeLanguage;
//	langOption1.onclick = changeLanguage;
//	langOption2.onclick = changeLanguage;
	searchBtn.onclick = searchContent;
	searchTxt.onfocus=clearDefaultInput;
//	langBtn.onclick=openLanguageBox;
	replayBtn.onclick = doReplay;
	//languageListContainer.onclick = openLanguageBox;

	searchTxt.onkeyup = searchContent;
	searchTxt.value = "Search";
//	languageListContainer.style.visibility = "hidden";
	isIe = navigator.appName == 'Microsoft Internet Explorer' ? true : false;
//	activateReplayBtn();//from animationSource.js
	//initialise();//from animation_functions.js
	initAudio(selAudio);
	
	getJsonData(glossdata);
}


function getJsonData(data){
	sourceData = data;
	glossaryData = $(data.glossary);
	glossaryResources = $(glossaryData.resources);
	dataLoaded = true;
	createAlphabets();
}



function err(xhr, reason, ex)
{
	alert(reason+":::FILE COULD NOT be LOADED");
//  ('#output').append(reason);
}

function createAlphabets(){
	for(var i=0; i<alphabets.length; i++){
		ltrBtn = document.createElement("div");
		ltrBtn.setAttribute("id",alphabets[i]);
		alphaData = $(sourceData.glossary.resources[alphabets[i]]);
		
		if(alphabets[i] == "#" || alphaData.length>0){
			ltrBtn.setAttribute("class","alphaBtn");
		}else{
			ltrBtn.setAttribute("class","disabledAlphaBtn");
		}
		ltrBtn.style.left = X+"px";
		ltrBtn.style.top = Y+"px";
		X += btnWid-5.5;
		ltrBtn.innerHTML = "<b>"+alphabets[i].toUpperCase()+"</b>";
		//ltrBtn.addEventListener("click",openContents);
		ltrBtn.onclick = openContents;
		
		alphaDiv.appendChild(ltrBtn);
	}
	
	$(function(){
		
		spElement = $('#pane2').jScrollPane({autoReinitialise:true, showArrows:true, scrollbarWidth: 15, arrowSize: 15});
		//var api = $('#pane2').jScrollPane().data('jsp');
		
		//alert(api+">>>>>>"+spElement.data);
		showAllContent();		
	});
	document.getElementById("definitionArea").style.visibility = "visible";
	showRelatedTerms()
}


function openContents(evt){
	resetContents();
	clearContent();
	var itemLabel;
	var newOption;
	var lastIndex = 0;//listbox.options.length-1;
	//evt.target.setAttribute("class","alphaBtnSelected");
	//this.setAttribute("class","alphaBtnSelected");
	this.style.color = "#FFED08";//"#DEDA19";
	//this.setAttribute("class","alphaBtnSelected");

	//selAlpha = evt.target.innerHTML.toLowerCase();
	//selAlpha = isIe ? this.innerText.toLowerCase() : evt.target.innerHTML.toLowerCase();
	selAlpha = this.id;
	alphaData = $(sourceData.glossary.resources[selAlpha]);
	if(hasAllTerms){
		$('#pane2')[0].scrollTo("#go_"+selAlpha);
	}else{
		showAllContent();
		$('#pane2')[0].scrollTo("#go_"+selAlpha);
	}
	/*
	clearListBox();
	if(selAlpha != "#"){*/
		//lastIndex = listBox.options.length;
		/*itemLabel = new Option(selAlpha.toUpperCase()); 
		console.log(selAlpha.toUpperCase());
		itemLabel.setAttribute("class","disabledItem");
		listBox.options[listBox.options.length] = itemLabel;
		
		for(var i=0; i<alphaData.length; i++){
			listBox.options[listBox.options.length] = new Option(alphaData[i].termEnglish);
			console.log(alphaData[i].termEnglish+":::"+i);
		}*/
		/*itemLabel = document.createElement( "div" );
		itemLabel.setAttribute("class","disabledItem");
		itemLabel.innerHTML = selAlpha.toUpperCase();
		itemLabel.onclick = showSelectedTerm;
		listBox.appendChild(itemLabel);
//		addOption(itemLabel,lastIndex);
		for(var i=0; i<alphaData.length; i++){
			termOption = document.createElement( "div" );
			termOption.setAttribute("class","listBoxItem");
			termOption.innerHTML = alphaData[i].termEnglish;
			termOption.onclick = showSelectedTerm;
			termOption.onmouseover = onRollOver;
			termOption.onmouseout = onRollOut;
			listBox.appendChild(termOption);
			//addOption(newOption,lastIndex);
			//listBox.options[listBox.options.length] = new Option(alphaData[i].termEnglish);
			
		}
		$(function(){
			$('#pane2').jScrollPane({showArrows:true, scrollbarWidth: 15, arrowSize: 15});
			
		});
		
	}else{
		showAllContent();
	}*/
}




function showAllContent(){
	var curAlpha = "";
	var itemLabel;
	var newOption;
	var lastIndex=0;
	var tcnt=0;
	hasAllTerms = true;
	termList = new Array();
	for(var i=0; i<alphabets.length; i++){
		curAlpha = alphabets[i];
		alphaData = $(sourceData.glossary.resources[curAlpha]);
		if(alphaData.length>0){
			//lastIndex = listBox.options.length;
			
			itemLabel = document.createElement( "div" );
			itemLabel.setAttribute("class","disabledItem");
			itemLabel.setAttribute("id","go_"+curAlpha);
			//itemLabel.text = curAlpha.toUpperCase();
			itemLabel.innerHTML = curAlpha.toUpperCase();
			itemLabel.onclick = showSelectedTerm;
			listBox.appendChild(itemLabel);
			
			for(var j=0; j<alphaData.length; j++){
				termOption = document.createElement( "div" );
				termOption.setAttribute("class","listBoxItem");
				termOption.innerHTML = alphaData[j].termEnglish;
				termOption.onclick = showSelectedTerm;
				termOption.onmouseover = onRollOver;
				termOption.onmouseout = onRollOut;
				listBox.appendChild(termOption);
				termList.push(alphaData[j].termEnglish); //storing all terms
				tcnt++;
			}
		}
	}
	
	$(function(){
		$('#pane2').jScrollPane({showArrows:true, scrollbarWidth: 15, arrowSize: 15, animateTo:true});
	});
	
	//spApi.scrollToY(45,true);
	//alert("termcnt="+tcnt);
	
}
function populateTerms(){
	var termSet = $(glossaryData.resources[selAlpha]);
}

function clearListBox(){
	/*for(var i=listBox.options.length-1; i>=0; i--){
		listBox.options.remove(i);	
	}
	
	for(var i=0;i<listBox.getElementsByTagName("div").length; i++){
		var liItem = listBox.getElementsByTagName("div")[i];
		console.log(liItem);
		listBox.removeChild(liItem);
	}*/
	
	listBox.innerHTML = "";
	$('#pane2').jScrollPane({reinitialise:true});
	hasAllTerms = false;
}

function showSelectedTerm(evt){
	document.getElementById("definitionArea").style.visibility = "visible";
	document.getElementById("welcome").style.visibility = "hidden";
	resetContents();

	if(this.className != "disabledItem"){
		
		setDefaultClass();
		this.className = "listboxSelectedItem";
		selTerm = this.innerHTML;
		oneTime = true;
		updateTermDef();
	}else{
		//alert(api.currentScrollPosition);
		$('#pane2')[0].scrollTo(0);
	}
	
	
}
function openLanguageBox(evt){
//	document.getElementById("languageListContainer").style.visibility = "visible";	
}
function changeLanguage(evt){
	resetContents();
	langBtn.innerHTML = this.innerHTML;
	selLang = this.innerHTML.toLowerCase();
//	languageListContainer.style.visibility = "hidden";
	
	/*for(var i=0; i<this.options.length; i++){
		if(this.options[i].selected){
			selLang = (this.options[i].text).toLowerCase();	
		}
	}*/
	//showDefinition();
	updateTermDef();
	
}

function showDefinition(){
	tgtTerm = "";
	var reltermArr = [];
	var relStr = "";
	
	selAlpha = selTerm.substr(0,1).toLowerCase() != " " ? selTerm.substr(0,1).toLowerCase() : selTerm.substr(1,1).toLowerCase();
	alphaData = $(sourceData.glossary.resources[selAlpha]);
	
	for(var i=0; i<alphaData.length; i++){
		var compareTerm = alphaData[i].termEnglish.indexOf("(")>=0 ? alphaData[i].termEnglish.substr(0,alphaData[i].termEnglish.indexOf("(")-1) : alphaData[i].termEnglish;
		
		if(selLang == "english" && compareTerm == selTerm){
			//console.log("compareterm="+compareTerm+"::");
			tgtTerm = alphaData[i].termEnglish; 
			selDef = alphaData[i].defEnglish;
			/*termInd = getTermIndex(tgtTerm);
			selAudio = getAudioPath(termInd,"en");*/
			getAudioUrl();
			
			relTerms = alphaData[i].relatedTerms;
			selAnim = alphaData[i].animationId;
			englishTerm = tgtTerm;
			englishDef = selDef;
			
		
		}else if(selLang == "spanish" && compareTerm == selTerm){
			tgtTerm = alphaData[i].termSpanish; 
			selDef = alphaData[i].defSpanish;
			/*termInd = getTermIndex(tgtTerm);
			selAudio = getAudioPath(termInd,"sp");*/
			getAudioUrl();
			relTerms = alphaData[i].relatedTerms;
			selAnim = alphaData[i].animationId;
			spanishTerm = tgtTerm;
			spanishDef = selDef;
		}
		
	}
	
	reltermArr = relTerms.split(",");
	
	termDiv.innerHTML = tgtTerm;
	definitionDiv.innerHTML = selDef;
	relStr = "See related terms: ";
	for(var i=0; i<reltermArr.length; i++){
		relStr += "<a class=\"yellow\" href=\"javascript:callanchor('"+reltermArr[i]+"');\">"+reltermArr[i]+"</a>,";
	}
	relStr = relStr.substr(0,relStr.length-1);
	//seealsoDiv.innerHTML = relStr;
	tgtTerm = truncateSpace(tgtTerm);
	tgtTerm = tgtTerm == "function" ? "myfunction" : tgtTerm
	//console.log("function name = "+tgtTerm);
	clearContent(); //from animationSources.js
	//alert("selterm>"+selTerm+"::tgtTerm="+tgtTerm);
	//eval("("+tgtTerm+")(0)"); //call corresponding function from animationSources.js
	tgtTerm=tgtTerm.toLowerCase();
//	console.log("from showdef..tgtTerm="+tgtTerm+"::");
	if(eval("typeof "+tgtTerm+"== 'function'")){
		eval("("+tgtTerm+")(0)"); //call corresponding function from animationSources.js
		replayAnimation = 0; //hide replay btn
		showTermDefinition();//from animationSources.js
	}else{
		alert("Corresponding Animation is not available.");	
	}
	
loadAudioFile(selAudio); ////LOAD AUDIO;
}




function updateTermDef(){
	tgtTerm = selTerm.toLowerCase();
	if(selLang == "english"){
		termDiv.innerHTML = englishTerm;
		definitionDiv.innerHTML = englishDef;
		//termInd = getTermIndex(tgtTerm);
		//selAudio = getAudioPath(termInd,"en");

	}else if(selLang == "spanish"){
		termDiv.innerHTML = spanishTerm;
		definitionDiv.innerHTML = spanishDef;
		//termInd = getTermIndex(tgtTerm);
		//selAudio = getAudioPath(termInd,"sp");

	}
	getAudioUrl();
	selAlpha = tgtTerm.substr(0,1);
//	console.log("selAudio="+selAudio);
	document.getElementById(selAlpha).style.color = "#FFED08";
//	clearContent(); //from animationSources.js
	tgtTerm = truncateSpace(tgtTerm);
	tgtTerm = tgtTerm == "function" ? "myfunction" : tgtTerm
	//console.log("function name = "+tgtTerm);
	getRelatedTerms();
	
	reltermArr = relTerms.split(",");
	relStr = "See related terms: ";
	for(var i=0; i<reltermArr.length; i++){
		relStr += "<a class=\"yellow\" href=\"javascript:callanchor('"+reltermArr[i]+"');\">"+reltermArr[i]+"</a>,";
	}
	relStr = relStr.substr(0,relStr.length-1);
	//seealsoDiv.innerHTML = relStr;

	replayAnimation = 0; //hide replay btn
	if(eval("typeof "+tgtTerm+"== 'function'")){
		eval("("+tgtTerm+")(0)"); //call corresponding function from animationSources.js
		showTermDefinition();//from animationSources.js
	}else{
		alert("Corresponding Animation is not available.");	
	}
	
	loadAudioFile(selAudio); ////LOAD AUDIO;
	
}

function getRelatedTerms(){
	selAlpha = selTerm.substr(0,1).toLowerCase() != " " ? selTerm.substr(0,1).toLowerCase() : selTerm.substr(1,1).toLowerCase();
	alphaData = $(sourceData.glossary.resources[selAlpha]);
	for(var i=0; i<alphaData.length; i++){
		if(alphaData[i].termEnglish == selTerm){
			relTerms = alphaData[i].relatedTerms;
		}
	}
}

function doReplay(evt){
	if(tgtTerm == "equivalent_rates"){
		oneTime = false;	
	}
	clearContent();
	eval("("+tgtTerm+")(0)");
}
function truncateSpace(_str){
	var new_str = _str.split(" ").join("_");
	new_str = new_str.split("-").join("_");
	var ind = _str.indexOf("(",0);
	if(ind >= 0){
		new_str = new_str.substr(0,(ind-1));
	}
	return new_str;
	
}
function callanchor(_this){
	
	selTerm = _this.substr(0,1)==" " ? _this.substr(1,_this.length) : _this;
	selAlpha = selTerm.substr(0,1).toLowerCase();
	relTerms = "";
	
	//console.log("selterm="+_this+"::selterm="+selTerm+"::selalpha="+selAlpha);
	
	showRelatedTerms();
	showDefinition();
	setTargetTerm();
	
	for(var i=0; i<alphabets.length; i++){
		document.getElementById(alphabets[i]).style.color = "#ffffff";
	}
	document.getElementById(selAlpha).style.color = "#FFED08";
	//alert(_this);
	//makeTermSelection();
	
}


function searchContent(evt){
	
	var itemLabel;
	var termStr = "";
	var compareStr="";
	var tgtTerm = searchTxt.value;
	clearListBox();
	
	if(tgtTerm.length <1){
		selAlpha = "#";
		showAllContent();
		searchBtn.style.pointerEvents = "none";
		//searchBtn.style.opacity = "0.5";
	}else{
		searchBtn.style.pointerEvents = "auto";
		searchBtn.style.opacity = "1";
		selAlpha = tgtTerm.substr(0,1).toLowerCase();
		compareStr = tgtTerm.toLowerCase();
		alphaData = $(sourceData.glossary.resources[selAlpha]);
		itemLabel = document.createElement("div");
		itemLabel.setAttribute("class","disabledItem");
		itemLabel.innerHTML = selAlpha.toUpperCase(); 
		itemLabel.onclick = showSelectedTerm;
		listBox.appendChild(itemLabel);
		for(var i=0; i<alphaData.length; i++){
			termStr = alphaData[i].termEnglish.toLowerCase();
			if(termStr.substr(0,compareStr.length) == compareStr){
				termOption = document.createElement( "div" );
				termOption.setAttribute("class","listBoxItem");
				termOption.innerHTML = alphaData[i].termEnglish;
				termOption.onclick = showSelectedTerm;
				termOption.onmouseover = onRollOver;
				termOption.onmouseout = onRollOut;
				listBox.appendChild(termOption);
			}
			
		}
		
	}
}
function clearDefaultInput(evt){
	if(this.value == "Search"){
		this.value = "";
	}
	
}
function makeTermSelection(){
	for(var i=listBox.options.length-1; i>=0; i--){
		if(listBox.options[i].value == selTerm){
			listBox.selectedIndex = i;
			listBox.options[i].selected = true;
 
		}
	}	
}

function playAudio(evt){
	
	if(!isPlayingAudio){
		$("#jquery_jplayer").jPlayer("play");
//		console.log("playing.."+selAudio);
		isPlayingAudio = true;
//		audioBtn.style.backgroundImage = "url(assets/images/btn_play_off.png)";
	}else if(isPlayingAudio){
		$("#jquery_jplayer").jPlayer("pause");
		isPlayingAudio = false;
//		audioBtn.style.backgroundImage = "url(assets/images/btn_play.png)";
		//$("#jquery_jplayer").jPlayer("playHeadTime",(Number(sValue) * 1000));

	}
	//alert("selAudio="+selAudio);
	/*var audioPath = selAudio;
	soundObj.pause();
	soundObj.removeEventListener("ended", onEnded);
	soundDiv.innerHTML = "<audio id='glossaryAudio' autoplay='none'></audio>";
	soundDiv = document.getElementById("audioDiv");
	soundObj = document.getElementById("glossaryAudio");
	
	if(!isPlayingAudio){
		soundObj.innerHTML = "<source src='"+audioPath+".mp3'></source><source src='"+audioPath+".ogg'></source>";
		soundObj.play();
		soundObj.addEventListener("ended", onEnded);
		isPlayingAudio = true;
		audioBtn.style.backgroundImage = "url(assets/images/btn_play_off.png)";
	}else if(isPlayingAudio){
		isPlayingAudio = false;
		audioBtn.style.backgroundImage = "url(assets/images/btn_play.png)";
		soundObj.pause();
		soundObj.innerHTML = "";
		
	}*/
}

function onAudioComplete(evt){
	resetContents();
}
function resetContents(){
	
	searchTxt.value = "";
	selAudio = "";
	isPlayingAudio = false;
	isAudioLoaded = false;
//	audioBtn.style.backgroundImage = "url(assets/images/btn_play.png)";
	
	//soundObj.pause();
	
	for(var i=0; i<alphabets.length; i++){
		document.getElementById(alphabets[i]).style.color = "#ffffff";
		/*if(document.getElementById(alphabets[i]).className=="alphaBtnSelected"){
			document.getElementById(alphabets[i]).className=="alphaBtn";
		}*/
		
		//document.getElementById(alphabets[i]).className = "alphaBtn";
		//console.log(document.getElementById(alphabets[i]).style.color+">>");
	}
//	languageListContainer.style.visibility = "hidden";
}


function onRollOver(evt){
	
	if(this.className == "listBoxItem" && this.className != "listboxSelectedItem"){
		this.className = "listboxOverItem";
	}
}

function onRollOut(evt){
	if(this.className == "listboxOverItem"){
		this.className = "listBoxItem";
	}
}

function setDefaultClass(){
	//var opLen = spane.getElementsByClassName("spOption").length;
	var opLen = listBox.getElementsByTagName("div").length;
	for(var i=0;i<opLen; i++){
		if(listBox.getElementsByTagName("div")[i].className != "listBoxItem" && listBox.getElementsByTagName("div")[i].className != "disabledItem" ){
			listBox.getElementsByTagName("div")[i].className = "listBoxItem";
		}
	}
}

function setTargetTerm(){
	//var opLen = spane.getElementsByClassName("spOption").length;
	var opLen = listBox.getElementsByTagName("div").length;
	var selTruncTerm = selTerm.indexOf("(")>=0 ? selTerm.substr(0,selTerm.indexOf("(")-1) : selTerm;
	for(var i=0;i<opLen; i++){
		if(listBox.getElementsByTagName("div")[i].className != "listBoxItem" && listBox.getElementsByTagName("div")[i].className != "disabledItem" ){
			listBox.getElementsByTagName("div")[i].className = "listBoxItem";
		}
		var innerTerm = listBox.getElementsByTagName("div")[i].innerHTML;
		innerTerm = innerTerm.indexOf("(")>=0 ? innerTerm.substr(0,innerTerm.indexOf("(")-1) : innerTerm;
		if(innerTerm==selTruncTerm){
			listBox.getElementsByTagName("div")[i].className = "listboxSelectedItem";
		}
	}
	$('#pane2')[0].scrollTo("#go_"+selAlpha);
}

function getTermIndex(_term){
	var id = -1;
	for(var i=0; i<termList.length; i++){
		if(_term == termList[i]){
			id = i;
			break;
		}
	}
	return id;
}

function getAudioPath(id,atype){
	var aStr = "";
	if(id==""){
		return aStr;
	}
	id = id+2;
	if(id<10){
		aStr = "/assets/audio/"+atype+"-00"+id;
	}else if(id>=10 && id<100){
		aStr = "/assets/audio/"+atype+"-0"+id;
	}else{
		aStr = "/assets/audio/"+atype+"-"+id;
	}
	
	return aStr;
}

function getAudioUrl(){
	selAudio = "";
	selAlpha = selTerm.substr(0,1).toLowerCase() != " " ? selTerm.substr(0,1).toLowerCase() : selTerm.substr(1,1).toLowerCase();
	alphaData = $(sourceData.glossary.resources[selAlpha]);
	var selTruncTerm = selTerm.indexOf("(")>=0 ? selTerm.substr(0,selTerm.indexOf("(")-1) : selTerm;
	for(var i=0; i<alphaData.length; i++){
		var compareTerm = alphaData[i].termEnglish.indexOf("(")>=0 ? alphaData[i].termEnglish.substr(0,alphaData[i].termEnglish.indexOf("(")-1) : alphaData[i].termEnglish;
		
		//console.log("compareTerm="+compareTerm+"::selTerm="+selTerm);
		if(selLang == "english" && compareTerm == selTruncTerm && compareTerm != ""){
			
			selAudio = "assets/audio/en-"+alphaData[i].audioEnglish;
		}else if(selLang == "spanish" && compareTerm == selTruncTerm && compareTerm != ""){
			selAudio = "assets/audio/sp-"+alphaData[i].audioEnglish;
		}
	}
	
//	console.log("selAudio="+selAudio);
}

function initAudio(_url){

	$("#jquery_jplayer").jPlayer({
		ready: function () {
			this.element.jPlayer("setFile", _url+".mp3", _url+".ogg");
			isAudioLoaded = true;
		},
		volume: 50,
		oggSupport: true,
		preload: 'none'
	}).jPlayer("play").jPlayer("onProgressChange",onTimeUpdate)
	.jPlayer("onSoundComplete",onEnded);	
}
function loadAudioFile(_url)
{
	if(selAudio == ""){
		alert("Audio is not available for this term.");
		return;
	}
	
	//var jpPlayTime = $("#jplayer_play_time");
	var jpTotalTime = $("#jplayer_total_time");
	
	$("#jquery_jplayer").jPlayer("setFile", _url+".mp3", _url+".ogg").jPlayer("play");
	isPlayingAudio = true;
//	audioBtn.style.backgroundImage = "url(assets/images/btn_play_off.png)";
}

function onEnded(evt){
//	audioBtn.style.backgroundImage = "url(assets/images/btn_play.png)";
	//soundObj.pause();
	//soundObj.removeEventListener("ended", onEnded);
	//soundDiv.innerHTML = "";
	isPlayingAudio = false;
}

function onTimeUpdate(loadPercent, playedPercentRelative, playedPercentAbsolute, playedTime, totalTime){
  
   currentTime = Number(playedTime)/1000;
  
}