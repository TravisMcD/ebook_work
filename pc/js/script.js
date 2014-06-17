/* Author: 

*/
 	var wid=window.innerWidth;
	var hei=window.innerHeight;
	
	var pixelsHei = (75 / 100) * hei;
	var pixelsWid = pixelsHei * 1.5;
	
	var bookmarkOpen = false;
	var bookmarkListOpen = false;
	var bookmark_arr = new Array();
	
	var jumpMenuShow = false;
	var highDepth = 2147483647;
	
	var currentPage = 0;
	
	var mainTop = 12;
	
	var zoomInitialWidth = 0;
	
	var zoomLevel = 1;
	
	var bookPages_arr = new Array('page1.html','page2.html','page3.html','page4.html','page5.html','page6.html','page7.html','page8.html','page9.html','page10.html','page11.html','page12.html','page13.html','page14.html','page15.html','page16.html','page17.html','page18.html','page19.html','page20.html','page21.html','page22.html','page23.html','page24.html','page25.html','page26.html','page27.html','page28.html','page29.html','page30.html','page31.html','page32.html','page33.html','page34.html','page35.html','page36.html','page37.html','page38.html','page39.html','page40.html','page41.html','page42.html','page43.html','page44.html','page45.html','page46.html','page47.html','page48.html','page49.html','page50.html','page51.html','page52.html','page53.html','page54.html','page55.html','page56.html','page57.html','page58.html','page59.html','page60.html','page61.html','page62.html','page63.html','page64.html','page65.html','page66.html','page67.html','page68.html','page69.html','page70.html','page71.html','page72.html','page73.html','page74.html','page75.html','page76.html','page77.html','page78.html','page79.html','page80.html','page81.html','page82.html','page83.html','page84.html','page85.html','page86.html','page87.html','page88.html','page89.html','page90.html','page91.html','page92.html','page93.html','page94.html','page95.html','page96.html','page97.html','page98.html','page99.html','page100.html','page101.html','page102.html','page103.html','page104.html','page105.html','page106.html','page107.html','page108.html','page109.html','page110.html','page111.html','page112.html','page113.html','page114.html','page115.html','page116.html','page117.html','page118.html','page119.html','page120.html','page121.html','page122.html','page123.html','page124.html','page125.html','page126.html','page127.html','page128.html','page129.html','page130.html','page131.html','page132.html','page133.html','page134.html','page135.html','page136.html','page137.html','page138.html','page139.html','page140.html','page141.html','page142.html','page143.html','page144.html','page145.html','page146.html','page147.html','page148.html','page149.html','page150.html','page151.html','page152.html','page153.html','page154.html','page155.html','page156.html','page157.html','page158.html','page159.html','page160.html','page161.html','page162.html','page163.html','page164.html','page165.html','page166.html','page167.html','page168.html','page169.html','page170.html','page171.html','page172.html','page173.html','page174.html','page175.html','page176.html','page177.html','page178.html','page179.html','page180.html','page181.html','page182.html','page183.html','page184.html','page185.html','page186.html','page187.html','page188.html','page189.html','page190.html','page191.html','page192.html','page193.html','page194.html','page195.html','page196.html','page197.html','page198.html','page199.html','page200.html','page201.html','page202.html','page203.html','page204.html','page205.html','page206.html','page207.html','page208.html','page209.html','page210.html','page211.html','page212.html','page213.html','page214.html','page215.html','page216.html','page217.html','page218.html','page219.html','page220.html','page221.html','page222.html','page223.html','page224.html','page225.html','page226.html','page227.html','page228.html','page229.html','page230.html','page231.html','page232.html','page233.html','page234.html','page235.html','page236.html','page237.html','page238.html','page239.html','page240.html','page241.html','page242.html','page243.html','page244.html','page245.html','page246.html','page247.html','page248.html','page249.html','page250.html','page251.html','page252.html','page253.html','page254.html','page255.html','page256.html','page257.html','page258.html','page259.html','page260.html','page261.html','page262.html','page263.html','page264.html','page265.html','page266.html','page267.html','page268.html','page269.html','page270.html','page271.html','page272.html','page273.html','page274.html','page275.html','page276.html','page277.html','page278.html','page279.html','page280.html','page281.html','page282.html','page283.html','page284.html','page285.html','page286.html','page287.html','page288.html','page289.html','page290.html','page291.html','page292.html','page293.html','page294.html','page295.html','page296.html','page297.html','page298.html','page299.html','page300.html','page301.html','page302.html','page303.html','page304.html','page305.html','page306.html','page307.html','page308.html','page309.html','page310.html','page311.html','page312.html','page313.html','page314.html','page315.html','page316.html','page317.html','page318.html','page319.html','page320.html','page321.html','page322.html','page323.html','page324.html','page325.html','page326.html','page327.html','page328.html','page329.html','page330.html','page331.html','page332.html','page333.html','page334.html','page335.html','page336.html','page337.html','page338.html','page339.html','page340.html','page341.html','page342.html','page343.html','page344.html','page345.html','page346.html','page347.html','page348.html','page349.html','page350.html','page351.html','page352.html','page353.html','page354.html','page355.html','page356.html','page357.html','page358.html','page359.html','page360.html','page361.html','page362.html','page363.html','page364.html','page365.html','page366.html','page367.html','page368.html','page369.html','page370.html','page371.html','page372.html','page373.html','page374.html','page375.html','page376.html','page377.html','page378.html','page379.html','page380.html','page381.html','page382.html','page383.html','page384.html','page385.html','page386.html','page387.html','page388.html','page389.html','page390.html','page391.html','page392.html','page393.html','page394.html','page395.html','page396.html','page397.html','page398.html','page399.html','page400.html','page401.html','page402.html','page403.html','page404.html','page405.html','page406.html','page407.html','page408.html','page409.html','page410.html','page411.html','page412.html','page413.html','page414.html','page415.html','page416.html','page417.html','page418.html','page419.html','page420.html','page421.html','page422.html','page423.html','page424.html','page425.html','page426.html','page427.html','page428.html','page429.html','page430.html','page431.html','page432.html','page433.html')
	
	var activityArr = new Array();
	activityArr.push({pageId:6,width:710,height:500,src:'activities/quiz/index.html',closeLeft:-24,closeTop:5});
	activityArr.push({pageId:6,width:580,height:483,src:'games/waterdropgame/index.html',closeLeft:-23,closeTop:6});
	activityArr.push({pageId:6,width:827,height:410,src:'games/puzzledrag/index.html',closeLeft:-25,closeTop:6});
	activityArr.push({pageId:6,width:529,height:679,src:'student_pages/polar/index.html',closeLeft:-15,closeTop:1});
	activityArr.push({pageId:6,width:650,height:781,src:'help/index.html',closeLeft:-30,closeTop:14});
	
	activityArr.push({pageId:6,width:800,height:600,src:'http://cartridges.esciencelabs.com/HowToUseAMicroscope.swf',closeLeft:-20,closeTop:4});
	activityArr.push({pageId:6,width:500,height:400,src:'http://cartridges.esciencelabs.com/HowBigIsIt.swf',closeLeft:-20,closeTop:4});
	activityArr.push({pageId:6,width:800,height:600,src:'http://www.udel.edu/biology/ketcham/microscope/newscope.swf',closeLeft:-20,closeTop:4});
	
	
	
	var checkBoxArr = new Array();

	var selectedTool = "";
	
	var tocOpen = false;
	var searchBoxView = false; 	 
	
	var no_of_pages = 26;
	
	var prevDefBox = null;
	var glossaryWindowShow = false;
	var prevWordBox = null;
	var vocTimerId = 0;
	
	var tocArr = null;
	
	var loadPerct = 0;
	
	var toolTipMessage = new Object();
	toolTipMessage.tocBtn = "Table of Content";
	toolTipMessage.notesBtn = "Notes";
	toolTipMessage.glossaryBtn = "Glossary";
	toolTipMessage.bookmarkBtn = "Bookmark";
	toolTipMessage.highLightBtn = "Highlight";
	toolTipMessage.zoomInBtn = "Zoom In";
	toolTipMessage.zoomOutBtn = "Zoom Out";
	toolTipMessage.searchBtn = "Search";
	toolTipMessage.helpBtn = "Help";
	toolTipMessage.activityBtn = "Activities";
	toolTipMessage.nextButton = "Next";
	toolTipMessage.backButton = "Back";
	
	
	var defarr = new Array(
		{
			word:'survive',
			def:'to continue to live'
		},
		{
			word:'tolerate',
			def:'to not be bothered by'
		},
		{
			word:'hydrated',
			def:'having had enough water'
		},
		{
			word:'accumulate',
			def:'to grow in amount'
		},
		{
			word:'grooved',
			def:'having a long, narrow dent in the surface'
		},
		{
			word:'predators',
			def:'hunters'
		}
		
	);
	
	//["to continue to live","to continue to live","to not be bothered by","having had enough water"];
	
	$(document).ready(function() {
	
	  // loadPerct = document.getElementById('loadingBar').offsetWidth / bookPages_arr.length;
	  // document.getElementById('loadingBar').width = '0px';
	   
		$('#features').wowBook({
			 height : pixelsHei
			,width  : pixelsWid
			,centeredWhenClosed : true
			,hardcovers : true
			,turnPageDuration : 1000
			,numberedPages : [1,-2]
			,progressEvent:updateProgress
			,onLoadComplete:onBookLoaded
			,controls : {
					zoomIn    : '#zoomin',
					zoomOut   : '#zoomout',
					next      : '#next',
					back      : '#back',
					first     : '#first',
					last      : '#last',
					slideShow : '#slideshow',
					flipSound : '#flipsound',
					jumpPage  : '#jumpPage'
				}
		}).css({'display':'black', 'margin':'0 auto'}).fadeIn(1000);
		
		$("#searchCloseBtn").click(closeSearchPanel);
	});
	
	
	
	
	function showHelp(){
		showActivity(4);
	}
	
	function showQuiz(){
		showActivity(0);
	}
	
	function getToc(){
	  if(loginType == 'teacher'){
		tocArr = new Array(
			{
				label:'Simple Machines and Sports ',
				pageNo:4
			},
			{
				label:'Why were the Pyramids Built?',
				pageNo:6
			},
			{
				label:'Great Pyramid Facts',
				pageNo:10
			},
			{
				label:'Wedges Big and Small',
				pageNo:14
			},
			{
				label:'Living in Tornado Alley',
				pageNo:16
			},
			{
				label:'Oymyakon',
				pageNo:18
			},
			{
				label:'A Vist to Turpan',
				pageNo:22
			}
		  );
	  }
	  else{
		  tocArr = new Array(
			{
				label:"Introduction",
				pageNo:25,
				subToc:[
				   {
					   label:"Lab 1 Introduction to Science",
					   pageNo:25
				   },
				   {
					   label:"Lab 2 General Lab Safety",
					   pageNo:49
				   },
				   {
					   label:"Lab 3 Chemical Bonding Fundamentals",
					   pageNo:61
				   },
					{
						label:"Lab 4 Introduction to the Microscope",
						pageNo:79
					}
				]
			},
			{
				label:'Cellular Fundamentals',
				pageNo:87,
				subToc:[
						{
						label:"Lab 5    The Chemistry of Life ",
						pageNo:91
						},
						{
						label:"Lab 6    Diffusion and Osmosis ",
						pageNo:103
						},
						{
						label:"Lab 7    Enzyme Catalysis ",
						pageNo:127
						},
						{
						label:"Lab 8    Metabolism ",
						pageNo:143
						}
				]
				
			},
			{
				label:'Genetic and Biological Processes',
				pageNo:155,
				subToc:[
							{
							label:"Lab 9    Hierarchies of Life ",
							pageNo:159
							},
							{
							label:"Lab 10   Unicellular Organisms  ",
							pageNo:171
							},
							{
							label:"Lab 11   Mitosis and Meiosis ",
							pageNo:187
							},
							{
							label:"Lab 12   Transcription and Translation ",
							pageNo:221
							},
							{
							label:"Lab 13   Genetics of Organisms ",
							pageNo:231
							},
							{
							label:"Lab 14   Biomolecular Techniques ",
							pageNo:249
							}
				]
			},
			{
				label:'Plant Kingdom',
				pageNo:267,
				subToc:[
							{
							label:"Lab 15   Plant Pigments and Photosynthesis ",
							pageNo:271
							},
							{
							label:"Lab 16   Plant Transpiration ",
							pageNo:291
							},
							{
							label:"Lab 17   Plant Reproduction ",
							pageNo:309
							}
				]
			},
			{
				label:'Animal Kingdom',
				pageNo:321,
				subToc:[
							{
							label:"Lab 18   Mammalian Homeostasis ",
							pageNo:325
							},
							{
							label:"Lab 19    Invertebrates ",
							pageNo:343
							},
							{
							label:"Lab 20    Vertebrates ",
							pageNo:359
							},
							{
							label:"Lab 21    Animal Behavior and Zoology ",
							pageNo:373
							}
				]
			},
			{
				label:'Environmental Biology',
				pageNo:381,
				subToc:[
							{
							label:"Lab 22   Ecology of Organisms ",
							pageNo:385
							},
							{
							label:"Lab 23   Ecological Interactions ",
							pageNo:397
							},
							{
							label:"Lab 24   Environmental Succession ",
							pageNo:415
							}
					]
			},
			{
				label:'Appendix',
				pageNo:423,
				subToc:[
					  {
							label:"Good Lab Techniques",
							pageNo:423
					  }
					  ]
			}
			)
			
	  }
	}
	
	
	function showGlossaryWindow(){
	   if(!glossaryWindowShow){
		   $('#glossaryCloseBtn').css('display','none');
		   document.getElementById('glossaryPopup').style.display = 'block';
		   glossaryWindowShow = true;
		   document.getElementById('glossaryLoader').src="glossary/index.html";//'http://61.16.160.43:8383/HTML5Application/index.html'
		   document.getElementById('glossaryLoader').onload = glossaryLoaded;
	   }
	   else{
		   document.getElementById('glossaryPopup').style.display = 'none';
		   glossaryWindowShow = false;
	   }
	}
	
	function glossaryLoaded(){
		 $('#glossaryCloseBtn').css('display','block');
	}
	
	function closeGlossary(){
		document.getElementById('glossaryPopup').style.display = 'none';
		glossaryWindowShow = false;
	}
	
	function showSearchBox(e){
		if(!searchBoxView){
			document.getElementById('searchContent').style.display = 'block';
			searchBoxView = true;
		}
		else{
    	  	document.getElementById('searchContent').style.display = 'none';
			searchBoxView = false;
		}
	}
	
	function onHighLightSelect(e){
		if(selectedTool == ""){
			enableHighlight();
		}
		else{
			disableHighlight();
		}
	}
	
	function disableHighlight(){
			selectedTool = '';
			document.getElementById('highLightBtn').style.backgroundImage  = "url('images/book/highlight1.png')";
	}
	
	function enableHighlight(){
			selectedTool = 'highlight';
			document.getElementById('highLightBtn').style.backgroundImage  = "url('images/book/highlight.png')";
	}
	
	function onOverDelete(e){
		if(checkBoxArr.length > 0)
		$(this).css('color','#fff');
	}
	
	function onOutDelete(e){
		$(this).css('color','#000');
	}
	
	function onEnterBookMarkText(event){
		if(event.which == 13){
			if(!bookmarkNotExit($.wowBook("#features").currentPage)){
				bookmark_arr.push({label:document.getElementById('bookmarkText').value,pageId:$.wowBook("#features").currentPage});
				addExitBookmark();
				document.getElementById('bookmarkCont').style.display = 'none';
				bookmarkOpen = false;
			}
		}
	}
	
	function zoomInPage(e){
		
		$.wowBook("#features").zoomIn();
		changeZoomText();
		$('.wowbook-zoomwindow').css({top:0});
		
	}
	
	function zoomOutPage(e){
		$.wowBook("#features").zoomOut();
		changeZoomText();
		$('.wowbook-zoomwindow').css({top:0});
		
		
	}
	
	function changeZoomText(){
		var zoomLevel = $.wowBook("#features").zoomLevel;
		//document.getElementById('zoomTxt').innerHTML = Math.round((zoomLevel*100))+"%";
	}
	
	function updateProgress(loadPage,totalPages){
	   var perct = (loadPage/totalPages)*100;
	   //document.getElementById('totPage').innerHTML = totalPages;
	   //document.getElementById('lodPage').innerHTML = loadPage;
	   document.getElementById('progressLabel').innerHTML = "Loading Book : "+Math.round(perct)+"%";
	   document.getElementById('loadingBar').style.width = perct+"%";
	}
	
	//window.onload = function()
	function onBookLoaded()
	{
	    document.getElementById('progressCont').style.display = 'none';
	    getToc();
		no_of_pages = bookPages_arr.length;

		var pageDivArr = document.getElementById('features').getElementsByTagName('div');
		
		//$('#loadbar').css({display:'none'});
		$('#all').css({display:'block'});
		currentPage = $.wowBook("#features").currentPage;
		$('#container').animate({opacity:1});
		
		setTimeout(function(){
			$('#header').animate({top:0},500,function(){
				//(loginType == 'teacher')?$.wowBook("#features").jump(4):$.wowBook("#features").jump(8);
			});
            
			buildToc();
			addHightLightListener();
			hightLightInit();
			init_notepad();
			
			
		},500);
		
		resizeWindow();
	
		$("#cover").click(function(){
			$.wowBook("#features").advance();
		});
		
		$("#jumpPage").click(function(){
			$.wowBook("#features").jump(6);
		});
		
		$('#bookmarkBtn').click(showBookmarkMenu);
		$('#deleteBookmark').click(deleteBookmarkList);
		$('#deleteBookmark').mouseover(onOverDelete);
		$('#deleteBookmark').mouseout(onOutDelete);
		$('#showBookmarkBtn').click(showBookmarkList);
		$('#addBookmark').click(addToBookmarkList);
		$('#bookmarkText').keyup(onEnterBookMarkText);
		
		$('#jumpMenu').click(showJumpMenu);
		$('#jumpBtn').click(onPageJump);
		
		$('#nextButton').click(nextPage);
		$('#backButton').click(prevPage);
		$('#searchText').keyup(onSearchText);
		
		$('#highLightBtn').click(onHighLightSelect);
		
		addExitBookmark();
		
		$('#activityBlacker,#acitivityCloseBtn').click(closeActivityPopup);
		
		$('#zoomInBtn').click(zoomInPage);
		$('#zoomOutBtn').click(zoomOutPage);
		
		$('#notesBtn').click(createNotesPin);
		$('#tocBtn').click(showToc);
		
		$('.btns').mouseover(function(){
			if($(this).attr("id") == "glossaryBtn")return;
			showToolTip($(this),toolTipMessage[$(this).attr('id')]);
			
			if($(this).attr("id") == "backButton" || $(this).attr("id") == "nextButton") 
				$(this).animate({marginTop:20},300);
			else
				$(this).animate({marginTop:-8},300);
			//??
			
		});
		
		$('.btns').mouseout(function(){
			if($(this).attr("id") == "glossaryBtn")return;
			if($(this).attr("id") == "backButton" || $(this).attr("id") == "nextButton") 
				$(this).animate({marginTop:26},300);
			else
				$(this).animate({marginTop:0},300);
			hideToolTip();
		});
		
		$('#searchBtn').click(showSearchBox);
		
        //$('#glossaryBtn').click(showGlossaryWindow);
		$('#glossaryBlacker,#glossaryCloseBtn').click(closeGlossary);
		
		$('#helpBtn').click(showHelp);
		$('#activityBtn').click(showQuiz);
		
		
		if(deviceType == 'ipad'){	
		   	  if(window.orientation == 0 || window.orientation == 180){
		   	  	 document.getElementById('all').style.display = 'none';
		   	  	 document.getElementById('ipadMsg').style.display = 'block';
		   	  }
		   	  else{
		   	  	document.getElementById('all').style.display = 'block';
		   	  	document.getElementById('ipadMsg').style.display = 'none';
		   	  }
	   	  }
	   	  else if(deviceType == 'android'){
	   	  	
		   	  if(window.orientation == 90 || window.orientation == -90){
		   	  	 document.getElementById('all').style.display = 'none';
		   	  	 document.getElementById('ipadMsg').style.display = 'block';
		   	  }
		   	  else{
		   	  	document.getElementById('all').style.display = 'block';
		   	  	document.getElementById('ipadMsg').style.display = 'none';
		   	  }
	   	  	
	   	  }
	}
	
	function showToolTip(_this,msg){
		$('#toolTipMsg').css({display:'block'});
		$('#toolTipMsg').html(msg);
		var _left = document.getElementById('header').offsetLeft + document.getElementById(_this.attr('id')).offsetLeft - (($('#toolTipMsg').width() - _this.width())/2);
		/*if(_this.attr("id") == "nextButton" || _this.attr("id") == "backButton"){
			var _top = Number(document.getElementById(_this.attr('id')).offsetTop)+30;
		}
		else{
			var _top = Number(document.getElementById(_this.attr('id')).offsetTop)+88;
		}*/
		var _top = Number(document.getElementById("header").offsetTop)+Number(document.getElementById("header").offsetHeight)+15;
		$('#toolTipMsg').css({left:_left,top:_top,opacity:0})
		$('#toolTipMsg').animate({top:(_top-10),opacity:1});
	}
	
	function hideToolTip(){
		$('#toolTipMsg').css({display:'none'});
	}
	
	function addHightLightListener(){
		notes_arr[0] = new Array();
		for(var i = 1;i<no_of_pages;i++){
            console.log("i="+i);
			var _iframe = document.getElementById('page'+i).getElementsByTagName('iframe')[0];
			_iframe.contentWindow.document.body.setAttribute('pageId',i);
			_iframe.contentWindow.document.body.onmousedown = highLightMouseDown;
			_iframe.contentWindow.document.body.onmouseup = highLightMouseUp;
			notes_arr[i] = new Array();
		}
	}
	
    window.onresize = resizeWindow;
	
	function nextPage(){
		$.wowBook("#features").advance();
		pagePinClear();
	}
	function prevPage(){	
		if($.wowBook("#features").currentPage == 4){
			//$.wowBook("#features").currentPage = 2
		}	
		$.wowBook("#features").back();

//		alert($.wowBook("#features").currentPage);
		pagePinClear();
	}
	
	function pagePinClear(){
		if($.wowBook("#features").currentPage != 0 && $.wowBook("#features").currentPage != ($.wowBook("#features").pages.length-1)){
			clearPagePins();
		}
	}
	
	
	function resizeWindow(){
		var wid=window.innerWidth;
		var hei=window.innerHeight;
		
		pixelsHei = (80 / 100) * hei;
		pixelsWid = pixelsHei * 1.5;
	
		$('#header').css({left: ((window.innerWidth - $('#header').width())/2) });
		$('#jumpCont').css({left:(window.innerWidth - $('#jumpCont').width()-190)});
		
		
		$('#glossaryLoader').css({left:(window.innerWidth - $('#glossaryLoader').width())/2,top:(window.innerHeight - $('#glossaryLoader').height())/2});
		$('#glossaryCloseBtn').css({left:((window.innerWidth - $('#glossaryLoader').width())/2)+$('#glossaryLoader').width()-30,top:((window.innerHeight - $('#glossaryLoader').height())/2)+3});
//		$('#glossaryLoader').css({top:(window.innerHeight - $('#glossaryLoader').height())/2});
		
		$('#container').css({
			height : pixelsHei
			,width  : pixelsWid
		});
		pageRightX = pixelsWid/2;
		
		//alert($('#main').offset().left+","+$('#main').offset().top);
		
		$('#mask').css({
			left : $('#main').offset().left,
			top : $('#main').offset().top,
			height : pixelsHei
			,width  : pixelsWid
		});
		
		/*$('#nextButton').css({
			//top:(hei/2)-(34/2),
			left:(wid-80)
		});
		$('#backButton').css({
			//top:(hei/2)-(34/2),
			left:20
		});*/
	    pixelsHei = pixelsHei * 0.97;
		$.wowBook("#features").resizePage(pixelsWid,pixelsHei);
		
		zoomInitialWidth = $('.wowbook-zoomwindow').width();
		console.log("zoomInitialWidth="+zoomInitialWidth);
	}

function showBookmarkMenu(e){
	if(!bookmarkOpen){
		$('#bookmarkCont').css('display','block');
		document.getElementById('bookmarkText').value = "";
		bookmarkOpen = true;
	}
	else{
		$('#bookmarkCont').css('display','none');
		bookmarkOpen = false;
	}
}

function showBookmarkList(e){
	
	if(!bookmarkListOpen){
		$('#bookmarkList').animate({height:100});
		bookmarkListOpen = true;
	}
	else{
		$('#bookmarkList').animate({height:0});
		bookmarkListOpen = false;
	}
}

function deleteBookmarkList(e){
	if(checkBoxArr.length == 0)return;
	document.getElementById('bookmarkText').value = "";
	
	for(var i = 0;i<checkBoxArr.length;i++){
		if(checkBoxArr[i].checked){
			pageId = checkBoxArr[i].id.split("_")[1];
			checkBoxArr[i].parentNode.parentNode.removeChild(checkBoxArr[i].parentNode);
			checkBoxArr.splice(i,1);
			for(var j = 0;j<bookmark_arr.length;j++){
				if(bookmark_arr[j].pageId == pageId){
					bookmark_arr.splice(j,1);
				}
			}
			 //bookmark_arr
			
			
		}
	}
	if(checkBoxArr.length == 0){
		disableBookmarkDeleteBtn();
	}
	else{
		enableBookmarkDeleteBtn();
	}
}

function disableBookmarkDeleteBtn(){
	document.getElementById('deleteBookmark').style.opacity = 0.5;
	document.getElementById('deleteBookmark').style.cursor = 'default';
}

function enableBookmarkDeleteBtn(){
	document.getElementById('deleteBookmark').style.opacity = 1;
	document.getElementById('deleteBookmark').style.cursor = 'pointer';
}


function addToBookmarkList(e){
	if(!bookmarkNotExit($.wowBook("#features").currentPage)){
		bookmark_arr.push({label:document.getElementById('bookmarkText').value,pageId:$.wowBook("#features").currentPage});
		addExitBookmark();
		document.getElementById('bookmarkCont').style.display = 'none';
		bookmarkOpen = false;
	}
}

function bookmarkNotExit(pageId){
	for(var i = 0;i<bookmark_arr.length;i++){
		if(bookmark_arr[i].pageId == pageId){
			return true;
		}
	}
	return false;
}

function addExitBookmark(){
	document.getElementById('bookmarkList').innerHTML = "";
	for(var i = 0;i<bookmark_arr.length;i++){
		
		var _parentDiv = document.createElement('div');
		document.getElementById('bookmarkList').appendChild(_parentDiv);
		
		
		var _check = document.createElement('input');
		_check.setAttribute('type','checkbox');
		_check.setAttribute('id','check_'+bookmark_arr[i].pageId);
		_check.style.cssFloat = 'left';
		_check.style.margin = '6px 5px';
	
		_parentDiv.appendChild(_check);
		checkBoxArr.push(_check);
		
		var _div = document.createElement('div');
 		_div.setAttribute('id','book_'+bookmark_arr[i].pageId);
        _div.setAttribute('class','exitBookmarkList');
		_div.innerHTML = bookmark_arr[i].label;
		_div.onclick = jumpToPage1;
		_parentDiv.appendChild(_div);
	}
	if(checkBoxArr.length == 0){
		disableBookmarkDeleteBtn();
	}
	else{
		enableBookmarkDeleteBtn();
	}
}

function jumpToPage1(){
	var val=this.id.split("_")[1];
	if($.wowBook("#features").currentPage != val){
		pagePinClear();
		$.wowBook("#features").jump(Number(val));
	}
	
}

function showJumpMenu(e){
	highDepth++;
	if(!jumpMenuShow){
		$('#jumpCont').animate({top:0});
		jumpMenuShow = true;
	}
	else{
	  	$('#jumpCont').animate({top:-38});
		jumpMenuShow = false;
	}
}

function onPageJump(e){
	var pageId = document.getElementById('jumpText').value;
	$.wowBook("#features").jump(pageId);
}

function hideOtherMenus(){
	  	$('#jumpCont').css({display:'none'});
		$('#bookmarkCont').css({display:'none'});
}

function showOtherMenus(){
		$('#jumpCont').css({display:'block'});
		$('#bookmarkCont').css({display:'block'});
}

function onPageStop(e){
	/*setTimeout(function(){
         if(currentPage != $.wowBook("#features").currentPage){
			 currentPage = $.wowBook("#features").currentPage
			 var activityId = pageContainActivity(currentPage);
			
			 if(activityId != -1)
			 {
				 showActivity(activityId);
			 }
		 }
	},1000);*/
}

function pageContainActivity(pageId){
	for(var i = 0;i<activityArr.length;i++){
		//console.log(pageId +"=="+ activityArr[i].pageId);
		if(pageId == activityArr[i].pageId){
			return i;
		}
	}
	return -1;
}

function showActivity(actId){

	document.getElementById('activityLoader').setAttribute('src','activities/blank.html');
	document.getElementById('activityPopup').style.display = 'block';
	$('#activityLoader').css('opacity',0);
	document.getElementById('activityLoader').style.width = activityArr[actId].width+'px';
	document.getElementById('activityLoader').style.height = activityArr[actId].height+'px';
	document.getElementById('activityLoader').setAttribute('src',activityArr[actId].src);
	document.getElementById('activityLoader').onload = activityLoad;
	
	document.getElementById('activityLoader').style.left = ((document.getElementById('activityBlacker').offsetWidth/2) - (activityArr[actId].width/2))+'px';
	document.getElementById('activityLoader').style.top = ((document.getElementById('activityBlacker').offsetHeight/2) - (activityArr[actId].height/2))+'px';
	
	$('#acitivityCloseBtn').css('opacity',0);
	document.getElementById('acitivityCloseBtn').style.left = ((document.getElementById('activityLoader').offsetLeft + document.getElementById('activityLoader').offsetWidth)+activityArr[actId].closeLeft)+'px';
	document.getElementById('acitivityCloseBtn').style.top = (document.getElementById('activityLoader').offsetTop+activityArr[actId].closeTop)+'px';
	//document.getElementById('activityClose').style.left = (document.getElementById('activityLoader').offsetLeft + document.getElementById('activityLoader').offsetWidth)+'px';
	//document.getElementById('activityClose').style.top = (document.getElementById('activityLoader').offsetTop - 20)+'px'; 
}

function activityLoad(){
	
	$('#activityLoader').animate({opacity:1});
	$('#acitivityCloseBtn').animate({opacity:1});
}

function closeActivityPopup(){
	
	document.getElementById('activityPopup').style.display = 'none';
}

function onSearchText(event){
	if(event.which == 13){
		xmlTextSearch(document.getElementById('searchText').value);
		document.getElementById('searchContent').style.display = 'block';
	}
	if(this.value == ""){
		removeAllHighLight();
		document.getElementById('searchContent').style.display = 'none';
		searchBoxView = false;
	}
}

function onPageBeforeUpdate(){
	/*if($.wowBook("#features").currentPage != 0 && $.wowBook("#features").currentPage != ($.wowBook("#features").pages.length-1)){
		clearPagePins();
	}*/
}

function onPageAfterUpdate()
{
//	document.getElementById('dummyTxt').value = $.wowBook("#features").currentPage;
	
	if($.wowBook("#features").currentPage != 0 && $.wowBook("#features").currentPage != ($.wowBook("#features").pages.length-1)){
		recreateNotePin();
	}
	//pageHasActivity();
}

function pageHasActivity(){


if(currentPage != $.wowBook("#features").currentPage){
	 currentPage = $.wowBook("#features").currentPage
	 var activityId = pageContainActivity(currentPage);
	 if(activityId != -1)
	 {
		 showActivity(activityId);
	 }
 }
}

function dispActivity(id){
	showActivity(id);
}

function buildToc(){
	for(var i = 0;i<tocArr.length;i++){
		var _div = document.createElement('div');
		_div.setAttribute('class','tocList');
		_div.innerHTML = tocArr[i].label;
		_div.setAttribute('pageNo',tocArr[i].pageNo);
		_div.setAttribute("arrayId",i);
		_div.onclick = onTocListClick;
		_div.onmouseover = onShowSubToc;
		_div.onmouseout = onHideSubToc;
		var subArr = tocArr[i].subToc;
		for(var j = 0;j<subArr.length;j++){
			var _subDiv = document.createElement("div");
			_subDiv.setAttribute("class","subToc");
			_subDiv.onclick = onTocListClick;
			_subDiv.innerHTML = subArr[j].label;
			_subDiv.setAttribute("pageNo",subArr[j].pageNo);
			_div.appendChild(_subDiv);
		}
		
		document.getElementById('tocListContent').appendChild(_div);
		_div.setAttribute("fullHeight",(j*35));
		
	}
}

function onShowSubToc(){
	var _height = this.getAttribute("fullHeight");
	this.style.height = _height+"px";
}

function onHideSubToc(){
	this.style.height = "3px";
}

function onTocListClick(e){
	document.getElementById('tocContent').style.display = 'none';
	tocOpen = false;
	$.wowBook("#features").jump(Number(this.getAttribute('pageNo')-3));
}


function showToc(e){
	//alert(tocOpen)
	if(!tocOpen){
		document.getElementById('tocContent').style.display = 'block';
		tocOpen = true;
	}
	else{
	   	document.getElementById('tocContent').style.display = 'none';
		tocOpen = false;
 	
	}
}

function spanClick(_span,e,pageId,parentNode){
	clearTimeout(vocTimerId);
	
    if(prevDefBox != null){
		prevDefBox.parentNode.removeChild(prevDefBox);
	}
	
		_span.setAttribute('show',1);
		var defDiv = document.createElement('div');
		defDiv.style.width = '100px';
		defDiv.style.maxHeight = '200px'
		defDiv.style.height = 'auto';
		defDiv.style.backgroundColor = '#FFFF66';
		defDiv.style.position = 'absolute';
		defDiv.style.padding = '10px';
		defDiv.style.left = _span.offsetLeft+'px';
		prevDefBox = defDiv;
		defDiv.innerHTML = getDefinition(_span.innerHTML);
		parentNode.appendChild(defDiv);
		defDiv.style.top = (_span.offsetTop-defDiv.offsetHeight-10)+'px';
        vocTimerId = setTimeout(function(){
			prevDefBox.parentNode.removeChild(prevDefBox);
			prevDefBox = null;
		},3000);
        //??  	
		
}

function getDefinition(word){
	console.log("*"+word+"*");
	for(var i = 0;i<defarr.length;i++){
		if(defarr[i].word == word){
			return defarr[i].def;
		}
	}
	return '';
}

function clsgloss(){
  glossaryWindowShow = false;
  document.getElementById('glossaryPopup').style.display = 'none';	
}

function jumpToPage(pageNo){
  $.wowBook("#features").jump(pageNo);
  pagePinClear();
}

function closeSearchPanel(){
		document.getElementById('searchContent').style.display = 'none';
			searchBoxView = false;
}
