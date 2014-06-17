

$(window).resize(setSize);
$(document).ready(init);
var video = ["TOC", "note", "glossary", "bookmark", "highlight", "", "", "Search", ""];
var img_icon = ["img_toc", "img_note", "img_glossary", "img_bm", "img_h1", "img_plus", "img_minus", "img_search", "img_help"];

function init(){
	setSize();
	setListener();
}

function setListener(){
	$('.imgs').click(function(){
		if(this.id != "img_minus" && this.id != "img_help"){
			$('#jp_container_1').css({display:'block'});
			$("#jquery_jplayer_1").jPlayer('stop');
			var videoStr = this.id.split("_")[1];
			 document.getElementById('preloader').style.display = 'block';
			$("#jquery_jplayer_1").jPlayer("setMedia", {
				m4v: "video/"+ videoStr +".mp4",
				webmv: "video/"+ videoStr +".webm"
			}).jPlayer("play");		
		}
	});
	$('.close-bt').click(function(){
		$('#jp_container_1').css({display:'none'});
	});
}

function setSize(){
	var containerWidth = $('#container').width();
	var containerHeight = $('#container').height();
	
	var font2 = (2 * containerWidth) / 100;
	$('.font2').css({fontSize: font2});
	
	/*var videoWidth = (80 * containerWidth) / 100;;
	var videoHeight = (40 * containerHeight) / 100;;
	$("#jquery_jplayer_1").jPlayer({size: {
			width: videoWidth + "px",
			height: videoHeight + "px"//,
			//cssClass: "jp-video-360p"
		}
	});*/
}