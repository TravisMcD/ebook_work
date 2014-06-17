var loginType = "";
$(document).ready(function(){
	$('#teacherLogin').click(closeLogin);
	$('#studentLogin').click(closeLogin);
});

function closeLogin(){
		//
		loginType = $(this).attr('id');
		document.getElementById('bookself').src = (loginType == 'teacherLogin')?'images/cover/frontcover1.jpg':'images/cover/frontcover.jpg';
		$('#loginDiv').animate({opacity:0},1000,function(){
			$('#loginDiv').css('display','none');
			$('#loginPageContent').css('display','block');
		});
	}
	
function selectBook(e)
{
	
	$('#loginPageContent').animate({opacity:0},1000,function(){
		$('#loginPageContent').css('display','none');
		$('#ebookContainer').css({display:'block'});
		setTimeout(function()
		{			
			location.href=(loginType == 'teacherLogin')?'teacher_content.html':'student_content.html';
		},500);
	});
}