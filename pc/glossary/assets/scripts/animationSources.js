var timer_1;

/*
 var englishTerm="defaEngTerm";
 var spanishTerm="defaSpanishTerm";
 var englishDef="defaEngDef";
 var spanishDef="defaSpanishDef";
 */
function clearContent() {

	if(timer_1 != undefined) {
		document.getElementById("animation").innerHTML = "";
		clearTimeout(timer_1);
		//alert(englishTerm+"::"+spanishTerm);
	}
}

function activateReplayBtn() {
	if(replayAnimation == 0) {
		document.getElementById("replay").style.visibility = "hidden";
	} else {
		document.getElementById("replay").style.visibility = "visible";
	}
}

function showTermDefinition() {
	if(selLang == "english") {
		termDiv.innerHTML = englishTerm;
		definitionDiv.innerHTML = englishDef;
	} else if(selLang == "spanish") {
		termDiv.innerHTML = spanishTerm;
		definitionDiv.innerHTML = spanishDef;
	}
	showRelatedTerms();
	activateReplayBtn();
}

function showRelatedTerms() {
	reltermArr = relTerms.split(",");
	relStr = "See related terms: ";
	if(relTerms.length<107)
	{
		for(var i = 0; i < reltermArr.length; i++) {
			relStr += "<a class=\"yellow\" href=\"javascript:callanchor('"+ reltermArr[i] + "');\">" + reltermArr[i] + "</a>, ";
		}
	}
	else{
		for(var i = 0; i < reltermArr.length; i++) {
			relStr += "<a class=\"yellow_small\" href=\"javascript:callanchor('"+ reltermArr[i] + "');\">" + reltermArr[i] + "</a>, ";
		}
	}
	relStr = relStr.substr(0, relStr.length - 2);
	//seealsoDiv.innerHTML = relStr;
}


function acute_angle(e) {
	//alert("calling");
}


/*absolute_value_of_a_number Begins*/
function absolute_value_of_a_number(a) {

	if(a == 0) {
		englishTerm = "absolute value of a number";
		spanishTerm = "valor absoluto de un número";
		englishDef = "the distance from zero to that number on a number line; the symbol for absolute value is | |";
		spanishDef = "la distancia desde el cero hasta un número en una recta numérica; el símbolo del valor absoluto es | |";
		replayAnimation = 1;
		showTermDefinition();
	}
	//timer_1 = setTimeout("absolute_value_of_a_number_extd(" + a + ")", 1200)
}
function absolute_value_of_a_number_extd(e) {
	var count = parseInt(e);
		
	if(count < 9) {
		document.getElementById('animation').innerHTML = "<div class='absolute_value'><img src='assets/images/abs_images/002_absolutevalue" +  parseInt(count+1) + ".png' width:50px height:50px></div>";
	} 
	else if(count ==9)
	{
		if(selLang == "english") {
			document.getElementById('animation').innerHTML = "<div class='absolute_value'><img src='assets/images/abs_images/002_absolutevalue10.png' width:50px height:50px></div>";
		} 
		else if(selLang == "spanish") 
		{
			document.getElementById('animation').innerHTML = "<div class='absolute_value'><img src='assets/images/abs_images/002_absolutevaluesp10.png' width:50px height:50px></div>";	
		}
	}
	count++;
	absolute_value_of_a_number(count);
	
}

/*absolute_value_of_a_number Ends*/


/*acute_angle Begins*/
function acute_angle(a) {

	if(a == 0) {
		englishTerm = "acute angle";
		spanishTerm = "ángulo agudo";
		englishDef = "an angle whose measure is less than 90°";
		spanishDef = "un ángulo cuya medida es menor que 90°";
		showTermDefinition();
	}
	//timer_1 = setTimeout("acute_angle_extd(" + a + ")", 1500)
}

function acute_angle_extd(e) {
	var count = parseInt(e);
	var div_id = document.getElementById("animation");
	var degree = "&#176;";
	count++;
	if(count == 1) {
		div_id.innerHTML = "<img class='acuteangle_image' src='assets/images/acute_angle_images/003_acuteangle1.png'/>";
	} else if(count == 2) {
		div_id.innerHTML = "<img class='acuteangle_image' src='assets/images/acute_angle_images/003_acuteangle2.png'/>";
	} else if(count == 3) {
		div_id.innerHTML = "<img class='acuteangle_image' src='assets/images/acute_angle_images/003_acuteangle3.png'/>";
	} else if(count == 4) {
		div_id.innerHTML = "<img class='acuteangle_image' src='assets/images/acute_angle_images/003_acuteangle4.png'/>";
	} else if(count == 5) {
		div_id.innerHTML = "<img class='acuteangle_image' src='assets/images/acute_angle_images/003_acuteangle5.png'/>";
	} else if(count == 6) {
		div_id.innerHTML = "<img class='acuteangle_image' src='assets/images/acute_angle_images/003_acuteangle6.png'/>";
	} else if(count == 7) {
		div_id.innerHTML = "<img class='acuteangle_image' src='assets/images/acute_angle_images/003_acuteangle7.png'/>";
	} else if(count == 8) {
		div_id.innerHTML = "<img class='acuteangle_image' src='assets/images/acute_angle_images/003_acuteangle8.png'/>";
	} else if(count == 9) {
		div_id.innerHTML = "<img class='acuteangle_image' src='assets/images/acute_angle_images/003_acuteangle9.png'/>";
	} else if(count == 10) {
		div_id.innerHTML = "<img class='acuteangle_image' src='assets/images/acute_angle_images/003_acuteangle8.png'/>";
	} else if(count == 11) {
		div_id.innerHTML = "<img class='acuteangle_image' src='assets/images/acute_angle_images/003_acuteangle7.png'/>";
	} else if(count == 12) {
		div_id.innerHTML = "<img class='acuteangle_image' src='assets/images/acute_angle_images/003_acuteangle6.png'/>";
	} else if(count == 13) {
		div_id.innerHTML = "<img class='acuteangle_image' src='assets/images/acute_angle_images/003_acuteangle5.png'/>";
	} else if(count == 14) {
		div_id.innerHTML = "<img class='acuteangle_image' src='assets/images/acute_angle_images/003_acuteangle4.png'/>";
	} else if(count == 15) {
		div_id.innerHTML = "<img class='acuteangle_image' src='assets/images/acute_angle_images/003_acuteangle3.png'/>";
	} else if(count == 16) {
		div_id.innerHTML = "<img class='acuteangle_image' src='assets/images/acute_angle_images/003_acuteangle2.png'/>";
	} else if(count == 17) {
		div_id.innerHTML = "<img class='acuteangle_image' src='assets/images/acute_angle_images/003_acuteangle1.png'/>";
	} else {
		count = 0;
		div_id.innerHTML = "";
	}
	acute_angle(count);
}

/*acute_angle Ends*/


/*acute_triangle Begins*/
function acute_triangle(a) {

	if(a == 0) {
		englishTerm = "acute triangle";
		spanishTerm = "triángulo acutángulo";
		englishDef = "a triangle with each angle measuring less than 90°";
		spanishDef = "un triángulo en el que cada ángulo mide menos de 90°";
		showTermDefinition();
	}
	//timer_1 = setTimeout("acute_triangle_extd(" + a + ")", 1200)
}

function acute_triangle_extd(e) {
	var count = parseInt(e);
	var div_id = document.getElementById("animation")
	count++;
	if(count<8)
	{
		div_id.innerHTML = "<div id='acute_triangle'><img  src='assets/images/acute_tri_images/004_acute triangle"+count+".png' /></div>"; 
	}
	else {
		count = 0;
		div_id.innerHTML = "";
	}
	acute_triangle(count);
}

/*acute_triangle Ends*/

/*add Begins*/
function add(a) {

	if(a == 0) {
		englishTerm = "add";
		spanishTerm = "sumar";
		englishDef = "to join two or more numbers to get one number";
		spanishDef = "juntar dos o más números para obtener un solo número";
		showTermDefinition();
	}
	//timer_1 = setTimeout("add_extd(" + a + ")", 1200)
}

function add_extd(e) {
	var count = parseInt(e);
	var div_id = document.getElementById("animation")
	count++;
	if(count == 1) {
		div_id.innerHTML = "<img src='assets/images/add_images/add_counter_1.png' class='add_img'/>";
	} else if(count == 2) {
		div_id.innerHTML = "<img src='assets/images/add_images/add_counter_2.png' class='add_img'/>"
	} else if(count == 3) {
		div_id.innerHTML = "<img src='assets/images/add_images/add_counter_3.png' class='add_img'/>"
	} else {
		count = 0;
		div_id.innerHTML = "";
	}

	add(count);
}

/*add Ends*/


/* addend Begins*/
function addend(a) {

	if(a == 0) {
		englishTerm = "addend";
		spanishTerm = "sumando";
		englishDef = "a number to be added in an addition problem";
		spanishDef = "un número que se le agrega a otro número en un problema de suma";
		showTermDefinition();
	}
	//timer_1 = setTimeout("addend_extd(" + a + ")", 800);
}

function addend_extd(e) {
	var count = parseInt(e);
	count++;
	if(count == 1) {
		document.getElementById('animation').innerHTML = "<div class='addend'><img src='assets/images/addend_images/006_addend1.png'></div>";

	} else if(count == 2) {
		document.getElementById('animation').innerHTML = "<div class='addend'><img src='assets/images/addend_images/006_addend2.png'></div>";
	}
	else if(count == 3) {
		document.getElementById('animation').innerHTML = "<div class='addend'><img src='assets/images/addend_images/006_addend1.png'></div>";
	 }
	 else if(count == 4) {
		document.getElementById('animation').innerHTML = "<div class='addend'><img src='assets/images/addend_images/006_addend3.png'></div>";
	 } 
	 else if(count == 5) {
		 document.getElementById('animation').innerHTML  = "";
	 } 
	 else {
		count = 0;
	 }
	addend(count);
}

/* addend Ends*/

/*------ Addition sentence --------*/
function addition_sentence(a) {
	if(a == 0) {
		englishTerm = "addition sentence";
		spanishTerm = "enunciado de suma";
		englishDef = "a statement using + and = that shows how many in all";
		spanishDef = "enunciado que utiliza el signo + y el signo = para mostrar cuánto hay en total";
		showTermDefinition();
	}
	//timer_1 = setTimeout("addition_sentence_extd(" + a + ")", 1000)
}

function addition_sentence_extd(e) {
	var cnt = parseInt(e);
	var get_div = document.getElementById("animation");
	cnt++;
	if(cnt == 1) {
		get_div.innerHTML = "<img class='addsentence_image' src='assets/images/addition sentence_images/007_addition-sentence1.png'/>"
	} 
	else if(cnt == 2) {
		get_div.innerHTML = "<img class='addsentence_image' src='assets/images/addition sentence_images/007_addition-sentence2.png'/>"
	} 
	else if(cnt == 3) {
		get_div.innerHTML = "<img class='addsentence_image' src='assets/images/addition sentence_images/007_addition-sentence3.png'/>"
	} 
	else if(cnt == 4) {
		get_div.innerHTML = "<img class='addsentence_image' src='assets/images/addition sentence_images/007_addition-sentence4.png'/>"
	} 
	else if(cnt == 5) {
		get_div.innerHTML = "<img class='addsentence_image' src='assets/images/addition sentence_images/007_addition-sentence5.png'/>"
	} 
	else if(cnt == 6) {
		get_div.innerHTML = "<img class='addsentence_image' src='assets/images/addition sentence_images/007_addition-sentence6.png'/>"
	} 
	
	else if(cnt == 7) {
		get_div.innerHTML = "<img class='addsentence_image' src='assets/images/addition sentence_images/007_addition-sentence_last.png'/>"
	} 
	
	 else {
		cnt = 0;
		get_div.innerHTML = '';
	}
	addition_sentence(cnt)
}
/*---end---*/
/* adjacent angle startds */
function adjacent_angles(a) {
	if(a == 0) {
		englishTerm = "adjacent angles";
		spanishTerm = "ángulos adyacentes";
		englishDef = "two angles that share a vertex and a common side and do not overlap";
		spanishDef = "dos ángulos que comparten un vértice y un lado común y que no se intersecan";
		showTermDefinition();
	}
	//if(a == 6)
		//timer_1 = setTimeout("adjacent_angles_extd(" + a + ")", 1500);
	//else
		//timer_1 = setTimeout("adjacent_angles_extd(" + a + ")", 1000);
}

function adjacent_angles_extd(e) {
	var cont = parseInt(e);
	if(cont < 6)
	{
		document.getElementById('animation').innerHTML = '<div class="adjacent_angle_img"><img src="assets/images/adjacent_angles_images/008_adjacentangles'+parseInt(cont+1)+'.png"/></div>';
	}
	else
	{
		document.getElementById('animation').innerHTML = "";
		e=-1;
	}
	cont = parseInt(e) + 1;
	adjacent_angles(cont);
}
/* adjacent angle ends */

/* after*/
function after(a) {
	if(a == 0) {
		englishTerm = "after";
		spanishTerm = "después";
		englishDef = "a number greater than a given number or to the right of a given number on the number line";
		spanishDef = "un número mayor que otro número cuya posición sobre la recta numérica está a la derecha de ese número ";
		showTermDefinition();
	}
	/*if(a != 6) {
		//timer_1 = setTimeout("after_extd(" + a + ")", 900);
	} else {
		//timer_1 = setTimeout("after_extd(" + a + ")", 1000);
	}*/
}

function after_extd(e) {

	var cont = parseInt(e);

	if(e == 0) {
		document.getElementById('animation').innerHTML = "<img src='assets/images/after_images/009_after_1.png'>";
	} else if(e == 1) {
		document.getElementById('animation').innerHTML = "<img src='assets/images/after_images/009_after_2.png'>";
	} else if(e == 2) {
		document.getElementById('animation').innerHTML = "<img src='assets/images/after_images/009_after_3.png'>";
	} else if(e == 3) {
		document.getElementById('animation').innerHTML = "<img src='assets/images/after_images/009_after_4.png'>";
	} else if(e == 4) {
		document.getElementById('animation').innerHTML = "<img src='assets/images/after_images/009_after_5.png'>";
	} else if(e == 5) {
		document.getElementById('animation').innerHTML = "<img src='assets/images/after_images/009_after_6.png'>";
	} else if(e == 6) {
		document.getElementById('animation').innerHTML = "<img src='assets/images/after_images/009_after_7.png'>";s
	} else if(e == 7) {
		document.getElementById('animation').innerHTML = "<img src='assets/images/after_images/009_after_8.png'>";
	} else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	cont = parseInt(e) + 1;

	after(cont);
}

/* ALGEBRARIC EXPRESSION */
function algebraic_expression(a) {
	if(a == 0) {
		englishTerm = "algebraic expression";
		spanishTerm = "expresión algebraica";
		englishDef = "a number sentence that contains one or more numerals, one or more variables, and one or more operations";
		spanishDef = "enunciado numérico que contiene un numeral o más, una o más variables y una o más operaciones";
		showTermDefinition();
	}
	/*if(a != 5) {
		//timer_1 = setTimeout("algebraic_expression_extd(" + a + ")", 1000);
	} else {
		//timer_1 = setTimeout("algebraic_expression_extd(" + a + ")", 1500);
	}*/

}

function algebraic_expression_extd(e) {
	var cnt = parseInt(e);
	var algebraric_div = document.getElementById('animation');
	
	
	cnt++;
	if(cnt == 1) {
		algebraric_div.innerHTML = "<img src='assets/images/algebraic expression/010_algebraic-expression1.png'/>";
	}
	else if(cnt == 2) {
		algebraric_div.innerHTML = "<img src='assets/images/algebraic expression/010_algebraic-expression2.png'/>";
	}
	else if(cnt == 3) {
		algebraric_div.innerHTML = "<img src='assets/images/algebraic expression/010_algebraic-expression3.png'/>";
	}
	else if(cnt == 4) {
		algebraric_div.innerHTML = "<img src='assets/images/algebraic expression/010_algebraic-expression4.png'/>";
	}
	else if(cnt == 5) {
		cnt = 0;
		algebraric_div.innerHTML = '';
	}

	algebraic_expression(cnt);
}

/* END */


/* alternate_exterior_angles begins */
function alternate_exterior_angles(a) {
	if(a == 0) {
		englishTerm = "alternate exterior angles";
		spanishTerm = "ángulos alternos externos";
		englishDef = "a pair of angles formed by two lines that are cut by a transversal; both angles are exterior angles on opposite sides of the transversal at different vertices";
		spanishDef = "un par de ángulos formados por dos rectas cortadas por una transversal; ambos ángulos son ángulos externos en lados opuestos de la transversal en vértices diferentes";
		showTermDefinition();
	}
	//timer_1 = setTimeout("alternate_exterior_angles_extd(" + a + ")", 1500);
}

function alternate_exterior_angles_extd(e) {
	
	var cont = parseInt(e);

	if(e == 0) {
		document.getElementById('animation').innerHTML = "<div class='alternate_exterior_angles_images_img'><img src='assets/images/alternate_exterior_angles_images/011_alternateexteriorangles1.png'/></div>";

	} else if(e == 1) {
	
		if(selLang == "english") {
			document.getElementById('animation').innerHTML = "<div class='alternate_exterior_angles_images_img'><img src='assets/images/alternate_exterior_angles_images/011_alternateexteriorangles2.png'/></div><br/>";
		} else {
			document.getElementById('animation').innerHTML = "<div class='alternate_exterior_angles_images_img'><img src='assets/images/alternate_exterior_angles_images/011_alternateexterioranglessp2.png'/></div><br/>";
		}
	} else if(e == 2) {
	
		if(selLang == "english") {
			document.getElementById('animation').innerHTML = "<div class='alternate_exterior_angles_images_img'><img src='assets/images/alternate_exterior_angles_images/011_alternateexteriorangles3.png'/></div><br/>";
		} else {
			document.getElementById('animation').innerHTML = "<div class='alternate_exterior_angles_images_img'><img src='assets/images/alternate_exterior_angles_images/011_alternateexterioranglessp3.png'/></div><br/>";
		}
	} else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	cont = parseInt(e) + 1;

	alternate_exterior_angles(cont);
}
/* alternate_exterior_angles ends */

/* alternate interior angles  starts  */
function alternate_interior_angles_extd(e) {
	var display = new Array();
	
	if(e == 0) {
		document.getElementById('animation').innerHTML = "<div class='alternate_interior_angles_sub'><img src='assets/images/alternate_interior_angles_images/395_alternateinteriorangles1.png'/></div>";
	}
	else if(e == 1) {
		if(selLang == "english") {
			document.getElementById('animation').innerHTML = "<div class='alternate_interior_angles_sub'><img src='assets/images/alternate_interior_angles_images/395_alternateinteriorangles2.png'/></div>";
		}
		else 
		{
			document.getElementById('animation').innerHTML = "<div class='alternate_interior_angles_sub'><img src='assets/images/alternate_interior_angles_images/395_alternateinterioranglessp2.png'/></div>";
		}
	} 	
	else if(e == 2) {
		if(selLang == "english") {
			document.getElementById('animation').innerHTML = "<div class='alternate_interior_angles_sub'><img src='assets/images/alternate_interior_angles_images/395_alternateinteriorangles3.png'/></div>";
		}
		else 
		{
			document.getElementById('animation').innerHTML = "<div class='alternate_interior_angles_sub'><img src='assets/images/alternate_interior_angles_images/395_alternateinterioranglessp3.png'/></div>";
		}
	} else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	cont = parseInt(e) + 1;
	alternate_interior_angles(cont);
}

function alternate_interior_angles(a) {
	var a = parseInt(a);
	if(a == 0) {
		englishTerm = "alternate interior angles";
		spanishTerm = "ángulos internos alternos ";
		englishDef = "a pair of angles formed by two lines that are cut by a transversal; both angles are interior angles on opposite sides of the transversal at different vertices";
		spanishDef = "un par de ángulos formados por dos rectas cortadas por una transversal; ambos ángulos son ángulos internos en lados opuestos de la transversal en vértices diferentes";
		showTermDefinition();
	}
	//timer_1 = setTimeout("alternate_interior_angles_extd(" + a + ")", 2000);
}

/* alternate interior angles ends  */

/*analog clock */
function analog_clock(a) {
	if(a == 0) {
		englishTerm = "analog clock";
		spanishTerm = "reloj analógico";
		englishDef = "a tool used to measure time displayed with an hour hand and a minute hand";
		spanishDef = "una herramienta que se usa para medir el tiempo y lo muestra con una manecilla horaria y un minutero";
		showTermDefinition();
	}
	//timer_1 = setTimeout("analog_clock_extd(" + a + ")", 1500);
}

function analog_clock_extd(e) {
	var cnt = parseInt(e);
	cnt++;
	var analog_div = document.getElementById('animation');
	if(selLang == "english") {
		if(cnt == 1) {
			analog_div.innerHTML = "<img src='assets/images/analogclock_images/012_analog_clock2.png' width='360' height='234'/>";
		} else if(cnt == 2) {
			analog_div.innerHTML = "<img src='assets/images/analogclock_images/012_analog_clock1.png' width='360' height='234' />";
		} else if(cnt == 3) {
			analog_div.innerHTML = "<img src='assets/images/analogclock_images/012_analog_clock.png' width='360' height='234' />";
		}else {
			cnt = 0;
			analog_div.innerHTML = '';
		}
	}
	else  if(selLang == "spanish")
	{
		if(cnt == 1) {
			analog_div.innerHTML = "<img src='assets/images/analogclock_images/012_analog_clock2.png' width='360' height='234'/>";
		} else if(cnt == 2) {
			analog_div.innerHTML = "<img src='assets/images/analogclock_images/012_analog_clock1_s.png' width='360' height='234' />";
		} else if(cnt == 3) {
			analog_div.innerHTML = "<img src='assets/images/analogclock_images/012_analog_clock_s.png' width='360' height='234' />";
		}else {
			cnt = 0;
			analog_div.innerHTML = '';
		}
	}
	analog_clock(cnt);
}

/* end */
/* angle starts*/
function angle(a) {
	if(a == 0) {
		englishTerm = "angle";
		spanishTerm = "ángulo";
		englishDef = "the figure formed by two rays that share a common endpoint";
		spanishDef = "figura formada por dos rayos que comparten un extremo";
		showTermDefinition();
	}
	//timer_1 = setTimeout("angle_extd(" + a + ")", 1500);
}

function angle_extd(e) {
	var cont = parseInt(e);

	if(cont == 0)
		document.getElementById('animation').innerHTML = '<img class="angle_image" src="assets/images/angle_images/013_angle1.png" />';
	else if(e == 1)
	{
		if(selLang == "english") {
			document.getElementById('animation').innerHTML = '<img class="angle_image" src="assets/images/angle_images/013_angle2.png" />';
		} else {
			document.getElementById('animation').innerHTML = '<img class="angle_image" src="assets/images/angle_images/013_angle2s.png" />';
		}
		
	} else if(e == 2)
	{
		if(selLang == "english") {
			document.getElementById('animation').innerHTML = '<img class="angle_image" src="assets/images/angle_images/013_angle3.png" />';
		} else {
			document.getElementById('animation').innerHTML = '<img class="angle_image" src="assets/images/angle_images/013_angle3s.png" />';
		}
	}  else if(e == 3)
	{
		if(selLang == "english") {
			document.getElementById('animation').innerHTML = '<img class="angle_image" src="assets/images/angle_images/013_angle4.png" />';
		} else {
			document.getElementById('animation').innerHTML = '<img class="angle_image" src="assets/images/angle_images/013_angle4s.png" />';
		}
	}  else if(e == 4)
	{
		if(selLang == "english") {
			document.getElementById('animation').innerHTML = '<img class="angle_image" src="assets/images/angle_images/013_angle5.png" />';
		} else {
			document.getElementById('animation').innerHTML = '<img class="angle_image" src="assets/images/angle_images/013_angle5s.png" />';
		}
	} else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	cont = parseInt(e) + 1;
	angle(cont);
}

/* angle ends */
/*area Begins*/
function area(a) {

	if(a == 0) {
		englishTerm = "area";
		spanishTerm = "área";
		englishDef = "the number of square units a figure covers";
		spanishDef = "número de unidades cuadradas que cubre una figura";
		showTermDefinition();
	}
	/*if(a != 26) {
		//timer_1 = setTimeout("area_extd(" + a + ")", 500)
	} else {
		//timer_1 = setTimeout("area_extd(" + a + ")", 1500)
	}*/

}

function area_extd(e) {
	var count = parseInt(e);
	var get_id = document.getElementById("animation");
	
	if(count <= 24) {
		get_id.innerHTML = "<img src='assets/images/area_images/014_area_new" + count + ".png'/>";
	}
	else if(count == 25 ) {
	
		if(selLang == "english") {
			get_id.innerHTML =  "<img src='assets/images/area_images/014_area_new25.png'/>";
		} else {
			get_id.innerHTML = "<img src='assets/images/area_images/014_area_new25_s.png'/>";
		}
	} else if(count == 26) {
		get_id.innerHTML = "";
		count = -1;
	} else if(count > 26) {
	
	}
	count++;
	area(count);
}

/*area Ends*/
/*Array 015 */

function array_extd(e) {
	if(selLang == "english") {
	if(e == 0) {
		document.getElementById('animation').innerHTML = '<img src="assets/images/array_images/015_array_1.png" />';
	} else if(e == 1) {
		document.getElementById('animation').innerHTML = '<img src="assets/images/array_images/015_array_2.png" />';
	} else if(e == 2) {
		document.getElementById('animation').innerHTML = '<img src="assets/images/array_images/015_array_3.png" />';
	} else if(e == 3) {
		document.getElementById('animation').innerHTML = '<img src="assets/images/array_images/015_array_4.png" />';
	} else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	}
	else
	{
		if(e == 0) {
		document.getElementById('animation').innerHTML = '<img src="assets/images/array_images/015_array_1.png" />';
	} else if(e == 1) {
		document.getElementById('animation').innerHTML = '<img src="assets/images/array_images/015_array_2s.png" />';
	} else if(e == 2) {
		document.getElementById('animation').innerHTML = '<img src="assets/images/array_images/015_array_3s.png" />';
	} else if(e == 3) {
		document.getElementById('animation').innerHTML = '<img src="assets/images/array_images/015_array_4s.png" />';
	} else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	}
	e++;
	array(e);
}

function array(a) {
	if(a == 0) {
		englishTerm = "array";
		spanishTerm = "arreglo";
		englishDef = "a group of objects or numbers arranged in rows and columns";
		spanishDef = "conjunto de objetos o números organizados en filas y columnas";
		showTermDefinition();

	}
	//timer_1 = setTimeout("array_extd(" + a + ")", 1500);
}

/*---end---*/
/*ASA Begins*/
function asa(a) {

	if(a == 0) {
		englishTerm = "ASA";
		spanishTerm = "ALA";
		englishDef = "angle-side-angle; a rule that states that if two angles and the side between the angles of one triangle are congruent to two angles and the side between the angles of another triangle, the triangles are congruent";
		spanishDef = "ángulo-lado-ángulo; esta regla indica  que si dos ángulos y el lado entre los ángulos de un triángulo son congruentes con los dos ángulos y el lado entre los ángulos de otro triángulo, entonces los triángulos son congruentes";
		showTermDefinition();
	}
	if(a != 6) {
		//timer_1 = setTimeout("asa_extd(" + a + ")", 1200)
	} else {
		//timer_1 = setTimeout("asa_extd(" + a + ")", 1600)
	}

}
function asa_extd(e) {
	var count = parseInt(e);
	var get_id = document.getElementById("animation")
	count++;
	if(selLang == "english") {
		if(count == 1) {
		get_id.innerHTML = "<img  class='asa_image' src='assets/images/ASA_images/016_ASA_base.png'/>";
	}
	else if(count == 2) {
		get_id.innerHTML = "<img  class='asa_image' src='assets/images/ASA_images/016_ASA2.png'/>";
	}
	else if(count == 3) {
		get_id.innerHTML = "<img  class='asa_image' src='assets/images/ASA_images/016_ASA3.png'/>";
	}
	else if(count == 4) {
		get_id.innerHTML = "<img  class='asa_image' src='assets/images/ASA_images/016_ASA.png'/>";
	}
	else  {
		count = 0;
		get_id.innerHTML= '';
	}
	}
	 else if(selLang == "spanish") {
		if(count == 1) {
		get_id.innerHTML = "<img  class='asa_image' src='assets/images/ASA_images/016_ASA_base.png'/>";
	}
	else if(count == 2) {
		get_id.innerHTML = "<img  class='asa_image' src='assets/images/ASA_images/016_ASA_span2.png'/>";
	}
	else if(count == 3) {
		get_id.innerHTML = "<img  class='asa_image' src='assets/images/ASA_images/016_ASA_span3.png'/>";
	}
	else if(count == 4) {
		get_id.innerHTML = "<img  class='asa_image' src='assets/images/ASA_images/016_ASA_span.png'/>";
	}
	else  {
		count = 0;
		get_id.innerHTML = '';
	}
	}

	asa(count);
}

/*ASA Ends*/
/* associative_property_of_multiplication starts*/
function associative_property_of_multiplication(a) {
	if(a == 0) {
		englishTerm = "Associative Property of Multiplication";
		spanishTerm = "Propiedad asociativa de la multiplicación";
		englishDef = "a property that states that the grouping of the factors can be changed without affecting the product";
		spanishDef = "propiedad que establece que la agrupación de los factores puede cambiarse sin afectar el producto";
		showTermDefinition();
	}
	//timer_1 = setTimeout("associative_property_of_multiplication_extd(" + a + ")", 1200);
}

function associative_property_of_multiplication_extd(e) {
	
	var cont = parseInt(e);
	if(e == 0)
		document.getElementById('animation').innerHTML += "<img class='asso_image' src='assets/images/associative property of multiplication/018_associative-property-of-multiplication1.png'/>";
	else if(e == 1)
		document.getElementById('animation').innerHTML = "<img class='asso_image' src='assets/images/associative property of multiplication/018_associative-property-of-multiplication2.png'/>";
	else if(e == 2)
		document.getElementById('animation').innerHTML = "<img class='asso_image' src='assets/images/associative property of multiplication/018_associative-property-of-multiplication3.png'/>";
	else if(e == 3)
		document.getElementById('animation').innerHTML = "<img class='asso_image' src='assets/images/associative property of multiplication/018_associative-property-of-multiplication4.png'/>";
	else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	cont = parseInt(e) + 1;

	associative_property_of_multiplication(cont);
}
/* associative_property_of_multiplication ends */
/* associative_property_of_addition starts*/
function associative_property_of_addition(a) {
	if(a == 0) {
		englishTerm = "Associative Property of Addition";
		spanishTerm = "propiedad asociativa de la suma";
		englishDef = "a property that states that the grouping of the addends can be changed without affecting the sum";
		spanishDef = "propiedad de las sumas que establece que la agrupación de los sumandos puede cambiarse sin afectar el resultado de la suma";
		showTermDefinition();
	}
	//timer_1 = setTimeout("associative_property_of_addition_extd(" + a + ")", 1200);
}

function associative_property_of_addition_extd(e) {
	
	var cont = parseInt(e);
	if(e == 0)
		document.getElementById('animation').innerHTML += "<img class='asso_image' src='assets/images/associative property of addition/017_associative-property-of-addition1.png'/>";
	else if(e == 1)
		document.getElementById('animation').innerHTML = "<img class='asso_image' src='assets/images/associative property of addition/017_associative-property-of-addition2.png'/>";
	else if(e == 2)
		document.getElementById('animation').innerHTML = "<img class='asso_image' src='assets/images/associative property of addition/017_associative-property-of-addition3.png'/>";
	else if(e == 3)
		document.getElementById('animation').innerHTML = "<img class='asso_image' src='assets/images/associative property of addition/017_associative-property-of-addition4.png'/>";
	else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	cont = parseInt(e) + 1;
	associative_property_of_addition(cont);
}
/* associative_property_of_addition ends */
/* bar_graph Begins*/
function bar_graph(a) {

	if(a == 0) {
		englishTerm = "bar graph";
		spanishTerm = "gráfica de barras";
		englishDef = "a graph that uses bars to show and compare data";
		spanishDef = "gráfica que utiliza barras para mostrar y comparar datos";
		replayAnimation = 1;
		showTermDefinition();
	}
	//timer_1 = setTimeout("bar_graph_extd(" + a + ")", 1500)
}

function bar_graph_extd(e) {
	var count = parseInt(e);
	var get_id = document.getElementById("animation");
	count++;
	if(selLang == "english") {
	if(count == 1) {
		get_id.innerHTML = "<div id='bar_graph'></div>";
	} else if(count == 2) {
		stopCount();
		get_id.innerHTML = "<div id='bar_graph'><div id='bar_holder'><div id='bar1' class='bar_ball'></div></div>";
		bar_graph_timer(103, 161, 36, "bar1", "#1688C6");
	} else if(count == 3) {
		stopCount();
		var divTag = document.createElement("div");
		divTag.id = "bar2";
		divTag.className = "bar_ball";
		document.getElementById("bar_holder").appendChild(divTag);
		document.getElementById("bar2").style.cssText = 'background-color: #A258A7;margin-top: 135px;margin-left: 15px;';
		bar_graph_//timer(85, 161, 8, "bar2", "#A258A7");

	} else if(count == 4) {
		stopCount();
		var divTag = document.createElement("div");
		divTag.id = "bar3";
		divTag.className = "bar_ball";
		document.getElementById("bar_holder").appendChild(divTag);
		document.getElementById("bar3").style.cssText = 'background-color: #EBA03B;margin-top: 155px;margin-left: 15px;';
		bar_graph_//timer(122, 161, 8, "bar3", "#EBA03B");
	} else if(count == 5) {
		stopCount();
		var divTag = document.createElement("div");
		divTag.id = "bar4";
		divTag.className = "bar_ball";
		document.getElementById("bar_holder").appendChild(divTag);
		document.getElementById("bar4").style.cssText = 'background-color: #2CBB62;margin-top: 150px;margin-left: 15px;';
		bar_graph_//timer(70, 161, 8, "bar4", "#2CBB62");
		return false;
	}
	}
	else
	{
		if(count == 1) {
		get_id.innerHTML = "<div id='bar_graph1'></div>";
	} else if(count == 2) {
		stopCount();
		get_id.innerHTML = "<div id='bar_graph1'><div id='bar_holder'><div id='bar1' class='bar_ball'></div></div>";
		bar_graph_//timer(103, 161, 36, "bar1", "#1688C6");
	} else if(count == 3) {
		stopCount();
		var divTag = document.createElement("div");
		divTag.id = "bar2";
		divTag.className = "bar_ball";
		document.getElementById("bar_holder").appendChild(divTag);
		document.getElementById("bar2").style.cssText = 'background-color: #A258A7;margin-top: 135px;margin-left: 15px;';
		bar_graph_//timer(85, 161, 8, "bar2", "#A258A7");

	} else if(count == 4) {
		stopCount();
		var divTag = document.createElement("div");
		divTag.id = "bar3";
		divTag.className = "bar_ball";
		document.getElementById("bar_holder").appendChild(divTag);
		document.getElementById("bar3").style.cssText = 'background-color: #EBA03B;margin-top: 155px;margin-left: 15px;';
		bar_graph_//timer(122, 161, 8, "bar3", "#EBA03B");
	} else if(count == 5) {
		stopCount();
		var divTag = document.createElement("div");
		divTag.id = "bar4";
		divTag.className = "bar_ball";
		document.getElementById("bar_holder").appendChild(divTag);
		document.getElementById("bar4").style.cssText = 'background-color: #2CBB62;margin-top: 150px;margin-left: 15px;';
		bar_graph_//timer(70, 161, 8, "bar4", "#2CBB62");
		return false;
	}
	}
	bar_graph(count);
}

function stopCount() {
	clearTimeout(timer_1);
}

function bar_graph_timer(end, start, margin_left, bar, color) {
	var start = parseInt(start);
	/*timer_2 = setTimeout(function() {
		bar_graph_timer_extd(end, start, margin_left, bar, color);
	}, 15);*/
}

function bar_graph_timer_extd(end, start, margin_left, bar, color) {
	var margin_top;
	if(start < end) {
		clearTimeout(timer_2);
	} else {
		margin_top = start;
		margin_left = margin_left;
		document.getElementById(bar).style.cssText = 'background-color: ' + color.toString() + ';margin-top: ' + margin_top.toString() + "px" + ';margin-left: ' + margin_left.toString() + "px" + ';';
		cont = parseInt(start) - 2;
		bar_graph_timer(end, cont, margin_left, bar, color);
	}
}

/*bar_graph Ends*/
/* base 020 */
function base_ext(e) {
	var d = parseInt(e);
	if(e == 0)
		document.getElementById('animation').innerHTML = "<img src='assets/images/base_images/base1.png'/>";
	else if(e == 1)
		document.getElementById('animation').innerHTML = "<img src='assets/images/base_images/base2.png'/>";
	else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	d = parseInt(e) + 1;
	base(d);
}

function base(a) {
	var s = parseInt(a);
	if(a == 0) {
		englishTerm = "base";
		spanishTerm = "base";
		englishDef = "the number used as a factor in repeated multiplication";
		spanishDef = "el número que se utiliza como factor en una multiplicación repetida";
		showTermDefinition();
	}
	//timer_1 = setTimeout("base_ext(" + a + ")", 1000);
	 
}

/*end base*/
/* base of a parallelogram starts*/
function base_of_a_parallelogram(a) {
	if(a == 0) {
		englishTerm = "base of a parallelogram";
		spanishTerm = "base de un paralelogramo";
		englishDef = "a side of a parallelogram that is perpendicular to the height; any side can be a base";
		spanishDef = "uno de los lados de un paralelogramo que es perpendicular a la altura; cualquiera de los lados puede ser una base";
		showTermDefinition();
	}
	/*if(a == 2)
		//timer_1 = setTimeout("base_of_a_parallelogram_extd(" + a + ")", 1500);
	else
		//timer_1 = setTimeout("base_of_a_parallelogram_extd(" + a + ")", 800);*/

}

function base_of_a_parallelogram_extd(e) {
	var cont = parseInt(e);
	if(cont == 0)
		document.getElementById('animation').innerHTML = '<img src="assets/images/base_parallelogram_images/parallelogram1.png" />';
	
else if(e == 1) {
		if(selLang == "english") {
			document.getElementById('animation').innerHTML = '<img src="assets/images/base_parallelogram_images/parallelogram2.png" />';
		} else if(selLang == "spanish") {
			document.getElementById('animation').innerHTML = '<img src="assets/images/base_parallelogram_images/parallelogram3.png" />';
		}
	} else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	cont = parseInt(e) + 1;
	base_of_a_parallelogram(cont);
}

/* base of a parallelogram  ends */
/* base of a triangle starts*/
function base_of_a_triangle(a) {
	if(a == 0) {
		englishTerm = "base of a triangle";
		spanishTerm = "base de un triángulo";
		englishDef = "a side of a triangle that is perpendicular to the height; any side can be a base";
		spanishDef = "el lado de un triángulo que es perpendicular a la altura; cualquier lado puede ser una base";
		showTermDefinition();
	}
	/*if(a == 2)
		//timer_1 = setTimeout("base_of_a_triangle_extd(" + a + ")", 1500);
	else
		//timer_1 = setTimeout("base_of_a_triangle_extd(" + a + ")", 800);*/

}

function base_of_a_triangle_extd(e) {
	var cont = parseInt(e);

	if(cont == 0)
		document.getElementById('animation').innerHTML = '<img src="assets/images/base_triangle_images/triangle1.png" />';
	
else if(e == 1) {
		if(selLang == "english") {
			document.getElementById('animation').innerHTML = '<img src="assets/images/base_triangle_images/triangle2.png" />';
		} else if(selLang == "spanish") {
			document.getElementById('animation').innerHTML = '<img src="assets/images/base_triangle_images/triangle3.png" />';
		}
	} else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	cont = parseInt(e) + 1;
	base_of_a_triangle(cont);
}

/* base of a triangle  ends */
/*_pieces Begins*/
function _pieces(a) {

	if(a == 0) {
		englishTerm = "base-10 pieces";
		spanishTerm = "piezas de base 10";
		englishDef = "blocks used to model numbers";
		spanishDef = "bloques que sirven para representar números";
		showTermDefinition();
	}
	if(a != 3) {
		//timer_1 = setTimeout("_pieces_extd(" + a + ")", 1000)
	} else {
		//timer_1 = setTimeout("_pieces_extd(" + a + ")", 1500)
	}

}

function _pieces_extd(e) {
	var count = parseInt(e);
	var get_id = document.getElementById("animation")
	count++;
	if(selLang == "english") {
		if(count == 1) {
			get_id.innerHTML = "<img src='assets/images/base10_images/023_base-10_pieces.png' width='360' height='234'/>";
		} else if(count == 2) {
			get_id.innerHTML = "<img src='assets/images/base10_images/023_base-10_pieces1.png' width='360' height='234'/>";
		} else if(count == 3) {

			get_id.innerHTML = "<img src='assets/images/base10_images/023_base-10_pieces2.png' width='360' height='234'/>";
		} else {
			count = 0;
			get_id.innerHTML = "";
		}
	} else if(selLang == "spanish") {
		if(count == 1) {
			get_id.innerHTML = "<img src='assets/images/base10_images/023_base-10_pieces_s.png' width='360' height='234'/>";
		} else if(count == 2) {
			get_id.innerHTML = "<img src='assets/images/base10_images/023_base-10_pieces1_s.png' width='360' height='234'/>";
		} else if(count == 3) {

			get_id.innerHTML = "<img src='assets/images/base10_images/023_base-10_pieces2_s.png' width='360' height='234'/>";
		} else {
			count = 0;
			get_id.innerHTML = "";
		}
	}

	_pieces(count);
}

/*_pieces Ends*/

/* bases of a trapezoid starts*/
function bases_of_a_trapezoid(a) {
	if(a == 0) {
		englishTerm = "bases of a trapezoid";
		spanishTerm = "bases de un trapecio";
		englishDef = "the parallel sides of the trapezoid";
		spanishDef = "los lados paralelos de un trapecio";
		showTermDefinition();
	}
	/*if(a == 2)
		//timer_1 = setTimeout("bases_of_a_trapezoid_extd(" + a + ")", 1500);
	else
		//timer_1 = setTimeout("bases_of_a_trapezoid_extd(" + a + ")", 800);*/

}

function bases_of_a_trapezoid_extd(e) {
	var cont = parseInt(e);

	if(cont == 0)
		document.getElementById('animation').innerHTML = '<img src="assets/images/base_trapezoid_images/trapezoid.png" />';
	
else if(e == 1) {
		if(selLang == "english") {
			document.getElementById('animation').innerHTML = '<img src="assets/images/base_trapezoid_images/trapezoid1.png" />';
		} else if(selLang == "spanish") {
			document.getElementById('animation').innerHTML = '<img src="assets/images/base_trapezoid_images/trapezoid2.png" />';
		}
	} else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	cont = parseInt(e) + 1;
	bases_of_a_trapezoid(cont);
}

/* bases of a trapezoid  ends */
/* Begins*/
function before(a) {

	if(a == 0) {
		englishTerm = "before";
		spanishTerm = "antes";
		englishDef = "a number less than a given number or to the left of a given number on the number line";
		spanishDef = "un número menor que otro número y cuya posición sobre la recta numérica está a la izquierda de ese número ";
		showTermDefinition();
	}
	//timer_1 = setTimeout("before_extd(" + a + ")", 1500);
}

function before_extd(e) {
	var count = parseInt(e);
	var div_id = document.getElementById("animation")
	count++;
	if(selLang == "english") {
	if(count == 1) {
		div_id.innerHTML = "<img src='assets/images/before_images/025_before_1.png' />";
	} else if(count == 2) {
		div_id.innerHTML = "<img src='assets/images/before_images/025_before_2.png' />";
	} else if(count == 3) {
		div_id.innerHTML = "<img src='assets/images/before_images/025_before_3.png' />";
	} else if(count == 4) {
		div_id.innerHTML = "<img src='assets/images/before_images/025_before_4.png' />";
	} else if(count == 5) {
		div_id.innerHTML = "<img src='assets/images/before_images/025_before_5.png' />";
	} else if(count == 6) {
		div_id.innerHTML = "<img src='assets/images/before_images/025_before_6.png' />";
	} else if(count == 7) {
		div_id.innerHTML = "<img src='assets/images/before_images/025_before_7.png' />";
	} else if(count == 8) {
		div_id.innerHTML = "<img src='assets/images/before_images/025_before_8.png' />";
	} else if(count == 9) {
		div_id.innerHTML = "<img src='assets/images/before_images/025_before_9.png' />";
	} else {
		count = 0;
		div_id.innerHTML = "";
	}
	}
	else
	{
		if(count == 1) {
		div_id.innerHTML = "<img src='assets/images/before_images/025_before_1.png' />";
	} else if(count == 2) {
		div_id.innerHTML = "<img src='assets/images/before_images/025_before_2.png' />";
	} else if(count == 3) {
		div_id.innerHTML = "<img src='assets/images/before_images/025_before_3s.png' />";
	} else if(count == 4) {
		div_id.innerHTML = "<img src='assets/images/before_images/025_before_4s.png' />";
	} else if(count == 5) {
		div_id.innerHTML = "<img src='assets/images/before_images/025_before_5s.png' />";
	} else if(count == 6) {
		div_id.innerHTML = "<img src='assets/images/before_images/025_before_6s.png' />";
	} else if(count == 7) {
		div_id.innerHTML = "<img src='assets/images/before_images/025_before_7s.png' />";
	} else if(count == 8) {
		div_id.innerHTML = "<img src='assets/images/before_images/025_before_8s.png' />";
	} else if(count == 9) {
		div_id.innerHTML = "<img src='assets/images/before_images/025_before_9s.png' />";
	} else {
		count = 0;
		div_id.innerHTML = "";
	}
	}

	before(count);
}

/*before Ends*/

/* benchmark */
function benchmark(a) {
	if(a == 0) {
		englishTerm = "benchmark";
		spanishTerm = "referencia";
		englishDef = "a known object that is used to help estimate the measurement of another object";
		spanishDef = "un objeto conocido que se utiliza como apoyo para estimar la medida de otro objeto";
		showTermDefinition();
	}
	if(a != 4) {
		//timer_1 = setTimeout("benchmark_extd(" + a + ")", 1500);
	} else {
		//timer_1 = setTimeout("benchmark_extd(" + a + ")", 2000);
	}
}

function benchmark_extd(e) {
	var cnt = parseInt(e);
	var benchmark_div = document.getElementById('animation');
	cnt++;
	if(cnt==1)
	{
		benchmark_div.innerHTML = "<div class='benchmark'><img  src='assets/images/benchmark_image/026_1_benchmark1.png'  /></div>";
	}
	else if(cnt==2)
	{
		if(selLang == 'english') 
		{
			benchmark_div.innerHTML = "<div class='benchmark'><img  src='assets/images/benchmark_image/026_1_benchmark2.png'  /></div>";
		} 
		else 
		{
			benchmark_div.innerHTML = "<div class='benchmark'><img src='assets/images/benchmark_image/026_1_benchmarksp2.png' /></div>";
		}
	}
	else if(cnt==3)
	{
		benchmark_div.innerHTML = "<div class='benchmark2'><img  src='assets/images/benchmark_image/026_2_benchmark1.png'  /></div>";
	}
	else if(cnt==4)
	{
		if(selLang == 'english') 
		{
			benchmark_div.innerHTML = "<div class='benchmark2'><img  src='assets/images/benchmark_image/026_2_benchmark2.png'  /></div>";
		} 
		else 
		{
			benchmark_div.innerHTML = "<div class='benchmark2'><img src='assets/images/benchmark_image/026_2_benchmarksp2.png' /></div>";
		}
	}
	else if(cnt == 5) {	
		cnt = 0;
		benchmark_div.innerHTML = '';
	}
	benchmark(cnt);
}

/* 	END */

/*   box_whisker_plot   */
function box_and_whisker_plot(a) {
	if(a == 0) {
		englishTerm = "box-and-whisker plot";
		spanishTerm = "gráfica de frecuencias acumuladas";
		englishDef = "a graphic way of showing a summary of data using the median, quartiles, lower extreme, and upper extreme of a data set";
		spanishDef = "representación gráfica que sirve para resumir una serie de datos a través de la mediana, los cuartiles, el extremo inferior y el extremo superior de un conjunto de datos";
		replayAnimation = 1;
		showTermDefinition();
	}
	//timer_1 = setTimeout("box_and_whisker_plot_extd(" + a + ")", 1200);
}

function box_and_whisker_plot_extd(e) {
	var box_whisker_div = document.getElementById('animation');
	var cnt = parseInt(e) + 1;
	if(cnt==1 || cnt==2)
	{
		box_whisker_div.innerHTML = "<div class='box_and_whisker_class'><img src='assets/images/box_whisker_plot/028_box_and_whisker_plot"+cnt+".png' /></div>"; 
	}
	else if(cnt==3 || cnt==4)
	{
		if(selLang == 'english') 
		{
			box_whisker_div.innerHTML = "<div class='box_and_whisker_class'><img src='assets/images/box_whisker_plot/028_box_and_whisker_plot"+cnt+".png' /></div>"; 
		}
		else
		{
			box_whisker_div.innerHTML = "<div class='box_and_whisker_class'><img src='assets/images/box_whisker_plot/028_box_and_whisker_plotsp"+cnt+".png' /></div>"; 
		}
	}
	box_and_whisker_plot(cnt);
}

/* box_whisker_plot end */


/* broken scale */
function broken_scale(a) {
	if(a == 0) {
		englishTerm = "broken scale";
		spanishTerm = "escala interrumpida";
		englishDef = "a scale of a graph that has a range of numbers omitted";
		spanishDef = "la escala de una gráfica con un rango de números omitidos";
		showTermDefinition();
	}
	if(a != 3) {
		//timer_1 = setTimeout("broken_scale_extd(" + a + ")", 1000);
	} else {
		//timer_1 = setTimeout("broken_scale_extd(" + a + ")", 1500);
	}
}

function broken_scale_extd(e) {
	var cnt = parseInt(e);
	var broken_scale_div = document.getElementById('animation');
	cnt++;
	if(cnt == 1) {
		broken_scale_div.innerHTML = "<img class='broken_scale_img' src='assets/images/broken_scal_image/029_broken_scale.jpg' width=200px; />";
	} else if(cnt == 2) {
		broken_scale_div.innerHTML = "<img class='broken_scale_img' src='assets/images/broken_scal_image/029_broken_scale_circle.jpg' width=200px; />";
	} else if(cnt == 3) {
		broken_scale_div.innerHTML = "<img class='broken_scale_img' src='assets/images/broken_scal_image/029_broken_scale_circle.jpg' width=200px; />" + "<div id='broken_scale_zoom'><img src='assets/images/broken_scal_image/zoom_1 copy.png' /></div>"
	} else if(cnt == 4) {
		cnt = 0;
		broken_scale_div.innerHTML = '';
	}
	broken_scale(cnt);
}

/* broaken scale END */
/* between starts*/
function between(a) {
	if(a == 0) {
		englishTerm = "between";
		spanishTerm = "entre";
		englishDef = "a number that is greater than the first given number and less than the second given number";
		spanishDef = "un número que es mayor que un número determinado y menor que un segundo número determinado";
		showTermDefinition();
	}
	//timer_1 = setTimeout("between_extd(" + a + ")", 1000);
}

function between_extd(e) {
	var cont = parseInt(e);
	if(cont == 0)
		document.getElementById('animation').innerHTML = "<img  src='assets/images/between_images/027_between_1.png'>";
	else if(cont == 1) {
		document.getElementById('animation').innerHTML = "<img  src='assets/images/between_images/027_between_2.png'>";
	} else if(cont == 2) {
		if(selLang == "english") {
			document.getElementById('animation').innerHTML = "<img  src='assets/images/between_images/027_between_3.png'>";
		} else if(selLang == "spanish") {
			document.getElementById('animation').innerHTML = "<img  src='assets/images/between_images/027_between_3s.png'>";
		}

	} else if(cont == 3) {
		if(selLang == "english") {
			document.getElementById('animation').innerHTML = "<img  src='assets/images/between_images/027_between_4.png'>";
		} else if(selLang == "spanish") {
			document.getElementById('animation').innerHTML = "<img  src='assets/images/between_images/027_between_4s.png'>";
		}

	} else if(cont == 4) {
		if(selLang == "english") {
			document.getElementById('animation').innerHTML = "<img  src='assets/images/between_images/027_between_5.png'>";
		} else if(selLang == "spanish") {
			document.getElementById('animation').innerHTML = "<img  src='assets/images/between_images/027_between_5s.png'>";
		}
	} else if(cont == 5) {
		if(selLang == "english") {
			document.getElementById('animation').innerHTML = "<img  src='assets/images/between_images/027_between_6.png'>";
		} else if(selLang == "spanish") {
			document.getElementById('animation').innerHTML = "<img  src='assets/images/between_images/027_between_6s.png'>";
		}
	} else if(cont == 6) {
		if(selLang == "english") {
			document.getElementById('animation').innerHTML = "<img  src='assets/images/between_images/027_between_7.png'>";
		} else if(selLang == "spanish") {
			document.getElementById('animation').innerHTML = "<img  src='assets/images/between_images/027_between_7s.png'>";
		}
	} else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	cont = parseInt(e) + 1;
	between(cont);
}

/* between  ends */
/*--------------cube------------------*/
function cube(a) {
	if(a == 0) {
		englishTerm = "cube";
		spanishTerm = "cubo";
		englishDef = "a solid figure with 6 congruent square faces";
		spanishDef = "una figura sólida con 6 caras cuadradas congruentes";
		showTermDefinition();
	}
	//timer_1 = setTimeout("cube_extd(" + a + ")", 800);
}// JavaScript Document

function cube_extd(e) {
	var cont = parseInt(e);
	if(cont == 0)
		document.getElementById('animation').innerHTML = '<img src="assets/images/cube_images/068_cube_1.png" />';
	else if(cont == 1)
		document.getElementById('animation').innerHTML = '<img src="assets/images/cube_images/068_cube_2.png" />';
	else if(cont == 2)
		document.getElementById('animation').innerHTML = '<img src="assets/images/cube_images/068_cube_3.png" />';
	else if(cont == 3)
		document.getElementById('animation').innerHTML = '<img src="assets/images/cube_images/068_cube_4.png" />';
	else if(cont == 4)
		document.getElementById('animation').innerHTML = '<img src="assets/images/cube_images/068_cube_5.png" />';
	else if(cont == 5)
		document.getElementById('animation').innerHTML = '<img src="assets/images/cube_images/068_cube_6.png" />';
	else if(cont == 6)
		document.getElementById('animation').innerHTML = '<img src="assets/images/cube_images/068_cube_7.png" />';

	if(cont == 7) {
		document.getElementById('animation').innerHTML = ''
		cont = 0;
	} else
		cont++;
	cube(cont);

}

/*--------------end------------------*/
/*--------------consecutive angles------------------*/
function consecutive_angles(a) {
	if(a == 0) {
		englishTerm = "consecutive angles";
		spanishTerm = "ángulos consecutivos";
		englishDef = "angles that share a common side";
		spanishDef = "ángulos que comparten un lado común";
		showTermDefinition();
	}
	//timer_1 = setTimeout("consecutive_angles_extd(" + a + ")", 1500)

}

function consecutive_angles_extd(e) {
	var cnt = parseInt(e);
	var consec_ang_div = document.getElementById('animation');
	cnt++;
	if(selLang=="english"){
	if(cnt == 1) {
		consec_ang_div.innerHTML = "<img class='consecutive_ang1' src='assets/images/consecutive_angles_images/057_consecutiveangles0.png'/>";
	} else if(cnt == 2) {
		consec_ang_div.innerHTML = "<img class='consecutive_ang1' src='assets/images/consecutive_angles_images/057_consecutiveangles1.png'/>";
	} else if(cnt == 3) {
		consec_ang_div.innerHTML = "<img class='consecutive_ang1' src='assets/images/consecutive_angles_images/057_consecutiveangles2.png'/>";
	} else if(cnt == 4) {
		consec_ang_div.innerHTML = "<img class='consecutive_ang1' src='assets/images/consecutive_angles_images/057_consecutiveangles3.png'/>";
	} else if(cnt == 5) {
		cnt = 0;
		consec_ang_div.innerHTML = '';
	}
	}
	else{
		if(cnt == 1) {
		consec_ang_div.innerHTML = "<img class='consecutive_ang1' src='assets/images/consecutive_angles_images/057_consecutiveangles0.png'/>";
	} else if(cnt == 2) {
		consec_ang_div.innerHTML = "<img class='consecutive_ang1' src='assets/images/consecutive_angles_images/057_consecutiveangles1.png'/>";
	} else if(cnt == 3) {
		consec_ang_div.innerHTML = "<img class='consecutive_ang1' src='assets/images/consecutive_angles_images/057_consecutiveanglessp2.png'/>";
	} else if(cnt == 4) {
		consec_ang_div.innerHTML = "<img class='consecutive_ang1' src='assets/images/consecutive_angles_images/057_consecutiveanglessp3.png'/>";
	} else if(cnt == 5) {
		cnt = 0;
		consec_ang_div.innerHTML = '';
	}
	}
	consecutive_angles(cnt);
}


/*--------------end------------------*/
/* coloumn */
function column(a) {

	if(a == 0) {
		englishTerm = "column";
		spanishTerm = "columna";
		englishDef = "information that goes up and down in a table";
		spanishDef = "información que va hacia arriba y hacia abajo en una mesa";
		showTermDefinition();
	}
	//timer_1 = setTimeout("column_extd(" + a + ")", 1000);
}

function column_extd(e) {
	var cnt = parseInt(e);
	var column_div = document.getElementById('animation');
	cnt++;
	if(cnt == 1) {
		column_div.innerHTML = "<div class='column_image_class'><img src='assets/images/column_images/tally-table.png' /></div>"
	}
	else if(cnt == 2) {
		column_div.innerHTML = "<div class='column_image_class'><img src='assets/images/column_images/tally-table1.png' /></div>"
	}
	else if(cnt == 3) {
		column_div.innerHTML = "<div class='column_image_class'><img src='assets/images/column_images/tally-table.png' /></div>"
	}
	else if(cnt == 4) {
		column_div.innerHTML = "<div class='column_image_class'><img src='assets/images/column_images/tally-table2.png' /></div>"
	}
	else if(cnt == 5) {
		column_div.innerHTML = "<div class='column_image_class'><img src='assets/images/column_images/tally-table.png' /></div>"
	}else {
		cnt = 0;
		column_div.innerHTML = "";
	}
	column(cnt);
}
/* column ends */


/* centimetre */
function centimeter(a) {
	if(a == 0) {
		englishTerm = "centimeter";
		spanishTerm = "centímetro";
		englishDef = "a metric unit that measures length";
		spanishDef = "unidad métrica que mide longitud";
		showTermDefinition();
	}
	if(a != 3) {
		//timer_1 = setTimeout("centimeter_extd(" + a + ")", 1500);
	} else {
		//timer_1 = setTimeout("centimeter_extd(" + a + ")", 2000);
	}

}

function centimeter_extd(e) {
	var centimeter_div = document.getElementById('animation');
	var cnt = parseInt(e);
	cnt++;
	if(cnt == 1) {
		centimeter_div.innerHTML = "<div class='centimeter_ruler'><img  src='assets/images/centimetre_image/033_centimeter_ruler1.png'/></div>";
	} else if(cnt == 2) {
		centimeter_div.innerHTML = "<div class='centimeter_ruler'><img  src='assets/images/centimetre_image/033_centimeter_ruler2.png'/></div>";
	} else if(cnt == 3) {
		centimeter_div.innerHTML = "<div class='centimeter_ruler'><img src='assets/images/centimetre_image/033_centimeter_ruler4.png'/></div>";
	} else if(cnt == 4) {
		cnt = 0;
		centimeter_div.innerHTML = '';
	}
	centimeter(cnt);

}

/* centimetre end */


/* centimetre ruler */
function centimeter_ruler(a) {
	if(a == 0) {
		englishTerm = "centimeter ruler";
		spanishTerm = "regla de centímetros";
		englishDef = "a measuring tool marked in centimeters";
		spanishDef = "herramienta de medición marcada con centímetros";
		showTermDefinition();
	}
	//timer_1 = setTimeout("centimeter_ruler_extd(" + a + ")", 500);
}

function centimeter_ruler_extd(e) {
	var cnt = parseInt(e);
	var centimeter_ruler_div = document.getElementById('animation');
	cnt++;
	if(cnt == 1) {
		centimeter_ruler_div.innerHTML = "<img class='centimeter_ruler_id' src='assets/images/centimetre_ruler_image/033_centimeter_ruler.jpg' />";
	} else if(cnt == 2) {
		centimeter_ruler_div.innerHTML = "<img class='centimeter_ruler_id' src='assets/images/centimetre_ruler_image/033_centimeter_ruler_0.jpg' />";
	} else if(cnt == 3) {
		centimeter_ruler_div.innerHTML = "<img class='centimeter_ruler_id' src='assets/images/centimetre_ruler_image/033_centimeter_ruler_1.jpg' />";
	} else if(cnt == 3) {
		centimeter_ruler_div.innerHTML = "<img class='centimeter_ruler_id' src='assets/images/centimetre_ruler_image/033_centimeter_ruler_2.jpg' />";
	} else if(cnt == 4) {
		centimeter_ruler_div.innerHTML = "<img class='centimeter_ruler_id' src='assets/images/centimetre_ruler_image/033_centimeter_ruler_3.jpg' />";
	} else if(cnt == 5) {
		centimeter_ruler_div.innerHTML = "<img class='centimeter_ruler_id' src='assets/images/centimetre_ruler_image/033_centimeter_ruler_4.jpg' />";
	} else if(cnt == 6) {
		centimeter_ruler_div.innerHTML = "<img class='centimeter_ruler_id' src='assets/images/centimetre_ruler_image/033_centimeter_ruler_5.jpg' />";
	} else if(cnt == 7) {
		centimeter_ruler_div.innerHTML = "<img class='centimeter_ruler_id' src='assets/images/centimetre_ruler_image/033_centimeter_ruler_6.jpg' />";
	} else if(cnt == 8) {
		centimeter_ruler_div.innerHTML = "<img class='centimeter_ruler_id' src='assets/images/centimetre_ruler_image/033_centimeter_ruler_7.jpg' />";
	} else if(cnt == 9) {
		centimeter_ruler_div.innerHTML = "<img class='centimeter_ruler_id' src='assets/images/centimetre_ruler_image/033_centimeter_ruler_8.jpg' />";
	} else if(cnt == 10) {
		centimeter_ruler_div.innerHTML = "<img class='centimeter_ruler_id' src='assets/images/centimetre_ruler_image/033_centimeter_ruler_9.jpg' />";
	} else if(cnt == 11) {
		centimeter_ruler_div.innerHTML = "<img class='centimeter_ruler_id' src='assets/images/centimetre_ruler_image/033_centimeter_ruler_10.jpg' />";
	} else if(cnt == 12) {
		cnt = 0;
		centimeter_ruler_div.innerHTML = '';
	}
	centimeter_ruler(cnt);
}

/* centimetre ruler END */

/* circle graph */
function circle_graph(a) {
	if(a == 0) {
		englishTerm = "circle graph";
		spanishTerm = "gráfica circular";
		englishDef = "a graph in which data are represented as parts of a circle";
		spanishDef = "gráfica en la que los datos se representan como partes de un círculo";
		showTermDefinition();
	}
	if(a != 5) {
		//timer_1 = setTimeout("circle_graph_extd(" + a + ")", 1000);
	} else {
		//timer_1 = setTimeout("circle_graph_extd(" + a + ")", 1500);
	}

}

function circle_graph_extd(e) {
	var cnt = parseInt(e);
	var circle_graph_div = document.getElementById('animation');
	cnt++;
	if(cnt == 1) {
		circle_graph_div.innerHTML = "<img class='circle_graph_id' src='assets/images/circle_graph_image/038_circle-graph1.png' />";
	} else if(cnt == 2) {
		circle_graph_div.innerHTML = "<img class='circle_graph_id' src='assets/images/circle_graph_image/038_circle-graph2.png' />";
	} else if(cnt == 3) {
		circle_graph_div.innerHTML = "<img class='circle_graph_id' src='assets/images/circle_graph_image/038_circle-graph3.png' />";
	} else if(cnt == 4) {
		circle_graph_div.innerHTML = "<img class='circle_graph_id' src='assets/images/circle_graph_image/038_circle-graph4.png' />";
	} else if(cnt == 5) {
		circle_graph_div.innerHTML = "<img class='circle_graph_id' src='assets/images/circle_graph_image/038_circle-graph5.png' />";
	} 
	
	else if(cnt == 7) {
		cnt = 0;
		circle_graph_div.innerHTML = '';
	}
	circle_graph(cnt);
}

/* circle graph END */

/* coordiante plane */
function coordinate_plane(a) {
	if(a == 0) {
		englishTerm = "coordinate plane";
		spanishTerm = "plano de coordenadas";
		englishDef = "a plane formed by two number lines intersecting at right angles";
		spanishDef = "plano formado por dos rectas numéricas que se intersectan en ángulo recto";
		showTermDefinition();
	}
	//timer_1 = setTimeout("coordinate_plane_extd(" + a + ")", 1200);
}

function coordinate_plane_extd(e) {
	var cnt = parseInt(e);
	var coordinate_plane_div = document.getElementById('animation');
	cnt++;
	if(cnt == 1) {
		coordinate_plane_div.innerHTML = "<img class='coordinate_plane_image' src='assets/images/coordinate_plane_image/060_coordinate-plane1.png' />";
	} else if(cnt == 2) {
		if(selLang == "english") {
			coordinate_plane_div.innerHTML = "<img class='coordinate_plane_image' src='assets/images/coordinate_plane_image/060_coordinate-plane2.png' />";
		} else {
			coordinate_plane_div.innerHTML = "<img class='coordinate_plane_image' src='assets/images/coordinate_plane_image/060_coordinate-plane_span2.png' />";
		}
	}  else if(cnt == 3) {
		if(selLang == "english") {
			coordinate_plane_div.innerHTML = "<img class='coordinate_plane_image' src='assets/images/coordinate_plane_image/060_coordinate-plane3.png' />";
		} else {
			coordinate_plane_div.innerHTML = "<img class='coordinate_plane_image' src='assets/images/coordinate_plane_image/060_coordinate-plane_span3.png' />";
		}
	} else if(cnt == 4) {
		if(selLang == "english") {
			coordinate_plane_div.innerHTML = "<img class='coordinate_plane_image' src='assets/images/coordinate_plane_image/060_coordinate-plane4.png' />";
		} else {
			coordinate_plane_div.innerHTML = "<img class='coordinate_plane_image' src='assets/images/coordinate_plane_image/060_coordinate-plane_span4.png' />";
		}
	} else if(cnt == 5) {
		cnt = 0;
		coordinate_plane_div.innerHTML = '';
	}
	coordinate_plane(cnt);
}


/* capacity */
function capacity(a) {
	if(a == 0) {
		englishTerm = "capacity";
		spanishTerm = "capacidad";
		englishDef = "the amount a container can hold when filled with liquid";
		spanishDef = "la cantidad de líquido que puede contener un recipiente";
		showTermDefinition();
	}
	if(a != 5) {
		//timer_1 = setTimeout("capacity_extd(" + a + ")", 800);
	} else {
		//timer_1 = setTimeout("capacity_extd(" + a + ")", 1400);
	}
}

function capacity_extd(e) {
	var cnt = parseInt(e);
	var capacity_div = document.getElementById('animation');
	cnt++;
	if(cnt == 1) {
		capacity_div.innerHTML = "<img class='capacity_img' src='assets/images/capacity_image/030_capacity1.png' />";
	} else if(cnt == 2) {
		capacity_div.innerHTML = "<img class='capacity_img' src='assets/images/capacity_image/030_capacity2.png' />";
	} else if(cnt == 3) {
		capacity_div.innerHTML = "<img class='capacity_img' src='assets/images/capacity_image/030_capacity3.png' />";
	} else if(cnt == 4) {
		capacity_div.innerHTML = "<img class='capacity_img' src='assets/images/capacity_image/030_capacity4.png' />";
	} else if(cnt == 5) {
		capacity_div.innerHTML = "<img class='capacity_img' src='assets/images/capacity_image/030_capacity5.png' />";
	} else if(cnt == 6) {
		cnt = 0;
		capacity_div.innerHTML = '';
	}
	capacity(cnt);
}
/* cup starts*/
function cup(a) {
	if(a == 0) {
		englishTerm = "cup";
		spanishTerm = "taza";
		englishDef = "a customary unit that measures capacity";
		spanishDef = "unidad estándar para medir capacidad";
		showTermDefinition();
	}

	/*if(a == 2)
		//timer_1 = setTimeout("cup_extd(" + a + ")", 2000);
	else
		//timer_1 = setTimeout("cup_extd(" + a + ")", 1000);*/
}

function cup_extd(e) {
	var cont = parseInt(e);

	if(cont == 0)
		document.getElementById('animation').innerHTML = '<div class="cup_img"><div class="cup_fill"></div></div>';
	else if(e == 1) {
			document.getElementById('animation').innerHTML = '<div class="cup_img1"><div class="cup_fill"></div>';
		

		$('.cup_fill').animate({
			top : 22,
			height : 45
		}, function() {
			$('.cup_arrow').css('display', 'block');
		});
	} else if(e == 2) {
		if(selLang == "english") {
			document.getElementById('animation').innerHTML = '<div class="cup_img2"><div class="cup_fill"></div></div>';
		} else if(selLang == "spanish") {
			document.getElementById('animation').innerHTML = '<div class="cup_imgsp2"><div class="cup_fill"></div></div>';
		}
	}
	else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	cont = parseInt(e) + 1;
	cup(cont);
}

/* cup ends */
/*  customary units */
function customary_units(a) {
	if(a == 0) {
		englishTerm = "customary units";
		spanishTerm = "unidades estándar";
		englishDef = "the units of measure used in the United States, such as inch, yard, cup, gallon, and pound";
		spanishDef = "las unidades de medida que se usan en los Estados Unidos, como la pulgada, la yarda, la taza, el galón y la libra";
		showTermDefinition();
	}
	//timer_1 = setTimeout("customary_units_extd(" + a + ")", 1200);
}

function customary_units_extd(e) {
	var cnt = parseInt(e);
	var customary_units_div = document.getElementById('animation');
	cnt++;
	if(cnt == 1) {
		if(selLang == "english") {
			customary_units_div.innerHTML = "<img class='customaryunits_image' src='assets/images/customary_units_img/paper_weight.png'/>";
		} else if(selLang == "spanish") {
			customary_units_div.innerHTML = "<img class='customaryunits_image' src='assets/images/customary_units_img/paper_weight_sp1.png'/>";
		}
		
	} else if(cnt == 2) {
		if(selLang == "english") {
			customary_units_div.innerHTML = "<img class='customaryunits_image' src='assets/images/customary_units_img/yard.png'/>";
		} else if(selLang == "spanish") {
			customary_units_div.innerHTML = "<img class='customaryunits_image' src='assets/images/customary_units_img/yard_sp.png'/>";
		}
		
	} else if(cnt == 3) {
		if(selLang == "english") {
			customary_units_div.innerHTML = "<img class='customaryunits_image' src='assets/images/customary_units_img/cup.png'/>";
		} else if(selLang == "spanish") {
			customary_units_div.innerHTML = "<img class='customaryunits_image' src='assets/images/customary_units_img/cup_sp.png'/>";
		}
		
	} else if(cnt == 4) {
		if(selLang == "english") {
			customary_units_div.innerHTML = "<img class='customaryunits_image' src='assets/images/customary_units_img/pound.png'/>";
		} else if(selLang == "spanish") {
			customary_units_div.innerHTML = "<img class='customaryunits_image' src='assets/images/customary_units_img/pound_sp.png'/>";
		}
		
	} else if(cnt == 5) {
		cnt = 0;
		customary_units_div.innerHTML = '';
	}
	customary_units(cnt);
}


/* coefficient starts*/
function coefficient(a) {
	if(a == 0) {
		englishTerm = "coefficient";
		spanishTerm = "coeficiente";
		englishDef = "the numeric factor of a term; the number that a variable is multiplied by";
		spanishDef = "el factor numérico de un término; el número que multiplica a una variable";
		showTermDefinition();
	}
	/*if(a == 2 || a == 5)
		//timer_1 = setTimeout("coefficient_extd(" + a + ")", 1500);
	else
		//timer_1 = setTimeout("coefficient_extd(" + a + ")", 1000);*/
}

function coefficient_extd(e) {
	var cont = parseInt(e);
	if(e == 0)
		document.getElementById('animation').innerHTML = "<div class='coefficient_iindent'><img src='assets/images/coefficient_images/040_coefficient1.png'></div>";
	else if(e == 1) {
		if(selLang == "english") {
			document.getElementById('animation').innerHTML = "<div class='coefficient_iindent'><img src='assets/images/coefficient_images/040_coefficient2.png'></div>";
		} else if(selLang == "spanish") {
			document.getElementById('animation').innerHTML = "<div class='coefficient_iindent'><img src='assets/images/coefficient_images/040_coefficientsp2.png'></div>";
		}

	} 
	else if(e == 2)
		document.getElementById('animation').innerHTML = "";
	else if(e == 3)
	{
		document.getElementById('animation').innerHTML = "<div class='coefficient_iindent'><img src='assets/images/coefficient_images/040_coefficient3.png'></div>";
	}
	else if(e == 4) {
		if(selLang == "english") {
			document.getElementById('animation').innerHTML = "<div class='coefficient_iindent'><img src='assets/images/coefficient_images/040_coefficient4.png'></div>";
		} else if(selLang == "spanish") {
			document.getElementById('animation').innerHTML = "<div class='coefficient_iindent'><img src='assets/images/coefficient_images/040_coefficientsp4.png'></div>";
		}
	} 
	else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	cont = parseInt(e) + 1;
	coefficient(cont);
}

/* coefficient ends */

/* compare starts*/
function compare(a) {
	if(a == 0) {
		englishTerm = "compare";
		spanishTerm = "comparar";
		englishDef = "to tell whether numbers are equal to, less than, or greater than each other";
		spanishDef = "determinar si un número es igual a, menor que o mayor que otro número";
		showTermDefinition();
	}
	//timer_1 = setTimeout("compare_extd(" + a + ")", 858);
}

function compare_extd(e) {
	
	var cont = parseInt(e);
	if(e == 0)
		document.getElementById('animation').innerHTML += "<img class='compare_image' src='assets/images/compare_images/046_compare1.png'/>";
	
	else if(e == 1) {
		if(selLang == "english")
			document.getElementById('animation').innerHTML = "<img class='compare_image' src='assets/images/compare_images/046_compare2.png'/>";
		else if(selLang == "spanish")
			document.getElementById('animation').innerHTML = "<img class='compare_image' src='assets/images/compare_images/046_compare_span_2.png'/>";
	} 
	else if(e == 2) {
		if(selLang == "english")
			document.getElementById('animation').innerHTML = "<img class='compare_image' src='assets/images/compare_images/046_compare3.png'/>";
		else if(selLang == "spanish")
			document.getElementById('animation').innerHTML = "<img class='compare_image' src='assets/images/compare_images/046_compare_span_3.png'/>";
	} 
	else if(e == 3) {
		if(selLang == "english")
			document.getElementById('animation').innerHTML = "<img class='compare_image' src='assets/images/compare_images/046_compare4.png'/>";
		else if(selLang == "spanish")
			document.getElementById('animation').innerHTML = "<img class='compare_image' src='assets/images/compare_images/046_compare_span_4.png'/>";
	} 
	
	else if(e == 4) {
		if(selLang == "english")
			document.getElementById('animation').innerHTML = "<img class='compare_image' src='assets/images/compare_images/046_compare5.png'/>";
		else if(selLang == "spanish")
			document.getElementById('animation').innerHTML = "<img class='compare_image' src='assets/images/compare_images/046_compare_span_5.png'/>";
	}
	else if(e == 5) {
		if(selLang == "english")
			document.getElementById('animation').innerHTML = "<img class='compare_image' src='assets/images/compare_images/046_compare6.png'/>";
		else if(selLang == "spanish")
			document.getElementById('animation').innerHTML = "<img class='compare_image' src='assets/images/compare_images/046_compare_span_6.png'/>";
	}
	else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	cont = parseInt(e) + 1;
	compare(cont);
}

/* compare ends */


/* center begins */

function center(a) {
	if(a == 0) {
		englishTerm = "center";
		spanishTerm = "centro";
		englishDef = "a point inside a circle that is the same distance from any point on the circle";
		spanishDef = "un punto dentro de un círculo que está a la misma distancia de cualquier punto del círculo";
		showTermDefinition();
	}
	//timer_1 = setTimeout("center_extd(" + a + ")", 1000);
}

function center_extd(e) {
	

	var cont = parseInt(e);

	if(e == 0) {
		document.getElementById('animation').innerHTML = "<img  src='assets/images/center_images/031_center.png'>";

	} else if(e == 1) {
		if(selLang == "english") {
			document.getElementById('animation').innerHTML = "<img  src='assets/images/center_images/031_center1.png'>";
		} else if(selLang == "spanish") {
			document.getElementById('animation').innerHTML = "<img  src='assets/images/center_images/031_center2.png'>";
		}
		

	} else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	cont = parseInt(e) + 1;

	center(cont);
}

/* center ends */

/* compatible_numbers begins */

function compatible_numbers(a) {
	if(a == 0) {
		englishTerm = "compatible numbers";
		spanishTerm = "números compatibles";
		englishDef = "numbers that can be divided easily without a remainder";
		spanishDef = "números que pueden dividirse fácilmente sin residuo";
		showTermDefinition();
	}
	//timer_1 = setTimeout("compatible_numbers_extd(" + a + ")", 1500);
}

function compatible_numbers_extd(e) {
	var cont = parseInt(e);

	if(e == 0) {
		document.getElementById('animation').innerHTML = "<img  src='assets/images/compatible_numbers_images/047_compatible-numbers_1.png'>";
	} else if(e == 1) {
		document.getElementById('animation').innerHTML = "<img  src='assets/images/compatible_numbers_images/047_compatible-numbers_2.png'>";
	} else if(e == 2) {
		document.getElementById('animation').innerHTML = "<img  src='assets/images/compatible_numbers_images/047_compatible-numbers_3.png'>";
	} else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	cont = parseInt(e) + 1;

	compatible_numbers(cont);
}

/* compatible_numbers ends */




/* congruent_segments begins */

function congruent_segments(a) {
	if(a == 0) {
		englishTerm = "congruent segments";
		spanishTerm = "segmentos congruentes";
		englishDef = "line segments having the same length";
		spanishDef = "segmentos de recta que tienen la misma longitud";
		showTermDefinition();
	}
	//timer_1 = setTimeout("congruent_segments_extd(" + a + ")", 1500);
}

function congruent_segments_extd(e) {

	var cont = parseInt(e);
	cont++;
	if(e >= 0 &&  e<4) {
		document.getElementById('animation').innerHTML = "<div class='congruent_segments'><img src='assets/images/congruent_segments_images/056_congruentsegments" + cont + ".png'>";

	} else {
		document.getElementById('animation').innerHTML = "";
		e = -1;

	}
	cont = parseInt(e) + 1;
	congruent_segments(cont);
}

/* congruent_segments ends */



/*  certain starts  */
function certain_extd(e) {
	var cnt = parseInt(e);	
	if(selLang == "english") {
		if(cnt < 4) {
			document.getElementById('animation').innerHTML = "<div class='certain_sub'><img src='assets/images/certain_images/035_certain"+parseInt(cnt+1)+".png' /></div>";
		}
	} else if(selLang == "spanish") {
		if(e < 4) {
			document.getElementById('animation').innerHTML = "<div class='certain_sub'><img src='assets/images/certain_images/035_certainsp"+parseInt(cnt+1)+".png' /></div>";
		} 
	}
	cont = parseInt(e) + 1;
	certain(cont);
}

function certain(a) {
	var a = parseInt(a);
	if(a == 0) {
		englishTerm = "certain";
		spanishTerm = "seguro";
		englishDef = "an event that will always happen";
		spanishDef = "un evento que ocurre siempre";
		replayAnimation = 1;
		showTermDefinition();
	}
	//timer_1 = setTimeout("certain_extd(" + a + ")", 1000);
}

/* certain ends  */

/* common factor Begins*/
function common_factor(a) {

	if(a == 0) {
		englishTerm = "common factor";
		spanishTerm = "factor común";
		englishDef = "a number that is a factor of two or more numbers";
		spanishDef = "un número que es el factor de dos números o más";
		replayAnimation = 1;
		showTermDefinition();
	}
	if(a <= 15 && a!=1 && a!=7 && a!=8) {
		//timer_1 = setTimeout("common_factor_extd(" + a + ")", 150);
	}
	else {
		//timer_1 = setTimeout("common_factor_extd(" + a + ")", 1000);
	}

}

function common_factor_extd(e) {
	var count = parseInt(e);
	
	if(count < 20) {
		if(selLang == "english") {
			document.getElementById('animation').innerHTML = "<div class='common_factor'><img src='assets/images/common_factor_images/042_commonfactor" +  parseInt(count+1) + ".png'></div>";
		} else if(selLang == "spanish") {
			document.getElementById('animation').innerHTML = "<div class='common_factor'><img src='assets/images/common_factor_images/042_commonfactorsp" + parseInt(count+1) + ".png'></div>";	
		}
	}
	count++;
	common_factor(count);
}
/* common factor ends  */

/* common multiple starts  */

function common_multiple(a) {

	if(a == 0) {
		englishTerm = "common multiple";
		spanishTerm = "múltiplo común";
		englishDef = "A number that is a multiple of two or more numbers";
		spanishDef = "Un número que es múltiplo de dos números o más";
		replayAnimation = 1;
		showTermDefinition();
	}
	if(a <= 16 && a!=1 && a!=9 && a!=10 ) {
		//timer_1 = setTimeout("common_multiple_extd(" + a + ")", 150)
	} else {
		//timer_1 = setTimeout("common_multiple_extd(" + a + ")", 1000)
	}

}

function common_multiple_extd(e) {
	var count = parseInt(e);
	
	if(count < 19) {
		if(selLang == "english") { 
			document.getElementById('animation').innerHTML = "<div class='common_multiple'><img src='assets/images/common_multiple_images/043_common-multiple" +  parseInt(count+1) + ".png'></div>";
		} else if(selLang == "spanish") { 
			document.getElementById('animation').innerHTML = "<div class='common_multiple'><img src='assets/images/common_multiple_images/043_commonmultiplesp" + parseInt(count+1) + ".png'></div>";	
		}
	}
	count++;
	common_multiple(count);
}

/* common multiple ends  */

/* count back starts  */

function count_back_extd(e) {

	var cont = parseInt(e);

	if(e == 0)
		document.getElementById('animation').innerHTML = "<img class='countback_images' src='assets/images/countback_images/064_count-back1.png'/>";
	else if(e == 1)
		document.getElementById('animation').innerHTML = "<img class='countback_images' src='assets/images/countback_images/064_count-back2.png'/>";
	else if(e == 2)
		document.getElementById('animation').innerHTML = "<img class='countback_images' src='assets/images/countback_images/064_count-back3.png'/>";
	else if(e == 3)
		document.getElementById('animation').innerHTML = "<img class='countback_images' src='assets/images/countback_images/064_count-back4.png'/>";
	else if(e == 4)
		document.getElementById('animation').innerHTML = "<img class='countback_images' src='assets/images/countback_images/064_count-back5.png'/>";
	else if(e == 5)
		document.getElementById('animation').innerHTML = "<img class='countback_images' src='assets/images/countback_images/064_count-back6.png'/>";
	
	else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	cont = parseInt(e) + 1;
	
	count_back(cont);
}

function count_back(a) {
	var a = parseInt(a);
	if(a == 0) {
		englishTerm = "count back";
		spanishTerm = "contar hacia atrás";
		englishDef = "to start from a number and count back by 1";
		spanishDef = "comenzar desde un número y contar de uno en uno hacia atrás";
		showTermDefinition();
	}
	//timer_1 = setTimeout("count_back_extd(" + a + ")", 571);
}

/* count back ends  */

/* counting principle starts */
function counting_principle(a) {
	var a = parseInt(a);
	if(a == 0) {
		englishTerm = "counting principle";
		spanishTerm = "principio de conteo";
		englishDef = "a method used to calculate the number of possible outcomes";
		spanishDef = "método que sirve para calcular el número de resultados posibles";
		replayAnimation = 1;
		showTermDefinition();
	}
	//timer_1 = setTimeout("counting_principle_extd(" + a + ")", 1000);
}

function counting_principle_extd(e) {
	var cont = parseInt(e);

	if(e == 0)
		document.getElementById('animation').innerHTML += "<img class='principle_images' src='assets/images/counting principle_images/065_counting-principle1.png'/>";
	else if(e == 1)
		document.getElementById('animation').innerHTML = "<img class='principle_images' src='assets/images/counting principle_images/065_counting-principle2.png'/>";
	else if(e == 2)
		document.getElementById('animation').innerHTML = "<img class='principle_images' src='assets/images/counting principle_images/065_counting-principle3.png'/>";
	else if(e == 3)
		document.getElementById('animation').innerHTML = "<img class='principle_images' src='assets/images/counting principle_images/065_counting-principle4.png'/>";
	else if(e == 4)
		document.getElementById('animation').innerHTML = "<img class='principle_images' src='assets/images/counting principle_images/065_counting-principle5.png'/>";
	
	
	cont = parseInt(e) + 1;

	
	counting_principle(cont);
}

/* counting principle ends  */


/* cross_multiplication  starts  */
function cross_multiplication_extd(e) {

	var cont = parseInt(e);
	
	if(e < 4) {
		document.getElementById('animation').innerHTML = "<div class='cross_multiplication_sub'><img src='assets/images/cross_multiplication_images/066_cross multiplication" +  parseInt(cont+1) + ".png'></div>";
	}
	cont = parseInt(e) + 1;
	cross_multiplication(cont);
}

function cross_multiplication(a) {
	var a = parseInt(a);
	if(a == 0) {
		englishTerm = "cross multiplication";
		spanishTerm = "multiplicación cruzada";
		englishDef = "a process used to find the cross products of two fractions in a proportion";
		spanishDef = "proceso que sirve para hallar los productos cruzados de dos fracciones";
		replayAnimation = 1;
		showTermDefinition();
	}
	//timer_1 = setTimeout("cross_multiplication_extd(" + a + ")", 2000);
}

/* cross_multiplication  ends  */

/* cross_products  starts  */
function cross_products_extd(e) {

	var cont = parseInt(e);
		if(e < 4) {
		document.getElementById('animation').innerHTML = "<div class='cross_multiplication_sub'><img src='assets/images/cross_products_images/066_cross multiplication" +  parseInt(cont+1) + ".png'></div>";
	}
	cont = parseInt(e) + 1;
	cross_products(cont);
}

function cross_products(a) {
	var a = parseInt(a);
	if(a == 0) {
		englishTerm = "cross products";
		spanishTerm = "productos cruzados";
		englishDef = "the result of multiplying the numerator of the first fraction by the denominator of the second fraction and the denominator of the first fraction by the numerator of the second fraction";
		spanishDef = "el resultado de multiplicar el numerador de la primera fracción por el denominador de la segunda fracción y el denominador de la primera fracción por el numerador de la segunda fracción";
		replayAnimation = 1;
		showTermDefinition();
	}
	//timer_1 = setTimeout("cross_products_extd(" + a + ")", 1333);
}

/* cross_products  ends  */


function corresponding_angles(a) {
	if(a == 0) {
		englishTerm = "corresponding angles";
		spanishTerm = "ángulos correspondientes";
		englishDef = "a pair of angles formed by two lines that are cut by a transversal; one angle is an interior angle and the other an exterior angle on the same side of the transversal at different vertices";
		spanishDef = "un par de ángulos formados por dos rectas que están cortadas por una transversal; un ángulo es interior y el otro es un ángulo exterior en el mismo lado de la transversal en vértices diferentes";
		showTermDefinition();
	}
	//timer_1 = setTimeout("corresponding_angles_extd(" + a + ")", 1300);
}

function corresponding_angles_extd(e) {
	var cnt = parseInt(e);
	var corres_ang_div = document.getElementById('animation');
	cnt++;
	if(selLang=="english"){
	if(cnt == 1) {
		corres_ang_div.innerHTML = "<img class='corres_angle1' src='assets/images/corresponding_angl_img/062_alternate-exterior-angles1.png'/>";
	} else if(cnt == 2) {
		corres_ang_div.innerHTML = "<img class='corres_angle1' src='assets/images/corresponding_angl_img/062_alternate-exterior-angles2.png'/>";
	} else if(cnt == 3) {
		corres_ang_div.innerHTML = "<img class='corres_angle1' src='assets/images/corresponding_angl_img/062_alternate-exterior-angles3.png'/>";
	} else if(cnt == 4) {
		corres_ang_div.innerHTML = "<img class='corres_angle1' src='assets/images/corresponding_angl_img/062_alternate-exterior-angles4.png'/>";
	} else if(cnt == 5) {
		corres_ang_div.innerHTML = "<img class='corres_angle1' src='assets/images/corresponding_angl_img/062_alternate-exterior-angles5.png'/>";
	}  else if(cnt == 6) {
		cnt = 0;
		corres_ang_div.innerHTML = '';
	}
	}
	else{
		if(cnt == 1) {
		corres_ang_div.innerHTML = "<img class='corres_angle2' src='assets/images/corresponding_angl_img/062_alternate-exterior-angles1.png'/>";
	} else if(cnt == 2) {
		corres_ang_div.innerHTML = "<img class='corres_angle2' src='assets/images/corresponding_angl_img/062_alternate-exterior-anglessp2.png'/>";
	} else if(cnt == 3) {
		corres_ang_div.innerHTML = "<img class='corres_angle2' src='assets/images/corresponding_angl_img/062_alternate-exterior-anglessp3.png'/>";
	} else if(cnt == 4) {
		corres_ang_div.innerHTML = "<img class='corres_angle2' src='assets/images/corresponding_angl_img/062_alternate-exterior-anglessp4.png'/>";
	} else if(cnt == 5) {
		corres_ang_div.innerHTML = "<img class='corres_angle2' src='assets/images/corresponding_angl_img/062_alternate-exterior-anglessp5.png'/>";
	} else if(cnt == 6) {
		cnt = 0;
		corres_ang_div.innerHTML = '';
	}
	}
	corresponding_angles(cnt);
}
/*central angle Begins*/
function central_angle(a) {

	if(a == 0) {
		englishTerm = "central angle";
		spanishTerm = "ángulo central";
		englishDef = "an angle whose vertex is the center of a circle";
		spanishDef = "un ángulo cuyo vértice es el centro de un círculo";
		showTermDefinition();
	}
	//timer_1 = setTimeout("central_angle_extd(" + a + ")", 1000);
}

function central_angle_extd(e) {
	var count = parseInt(e);
	var div_id = document.getElementById("animation");
	count++;
	if(count == 1) {
		div_id.innerHTML = "<div id='central_marked'></div>";
	} else if(count == 2) {
		div_id.innerHTML = "<div id='central_horiz_seg'></div>"
	} else if(count == 3) {
		div_id.innerHTML = "<div id='central_angle0'></div>";
	} else if(count == 4) {
		div_id.innerHTML = "<div id='central_angle1'></div>";
	} else if(count == 5) {
		div_id.innerHTML = "<div id='central_angle2'></div>";
	} else if(count == 6) {
		div_id.innerHTML = "<div id='central_angle3'></div>";
	} else if(count == 7) {
		div_id.innerHTML = "<div id='central_angle4'></div>";
	} else if(count == 8) {
		div_id.innerHTML = "<div id='central_angle5'></div>";
	} else {
		count = 0;
		div_id.innerHTML = "";
	}
	central_angle(count);
}

/*central angle Ends*/

/*complement_of_an_event Begins*/
function complement_of_an_event(a) {

	if(a == 0) {
		englishTerm = "complement of an event";
		spanishTerm = "complemento de un evento";
		englishDef = "all outcomes different from the favorable outcome; the sum of the probability of an event and the probability of its complement is 1";
		spanishDef = "todos los resultados que son diferentes al resultado favorable; la suma de la probabilidad de un evento y la probabilidad de su complemento es igual a 1";
		replayAnimation = 1;
		showTermDefinition();
	}
	//timer_1 = setTimeout("complement_of_an_event_extd(" + a + ")", 1000)
}

function complement_of_an_event_extd(e) {
	var count = parseInt(e);
	count++;
	if(count <= 4) {
		document.getElementById('animation').innerHTML = "<img class='complement_event1' src='assets/images/complement_of_an_event_images/048_complement"+count+".png'/>";
	} 
		complement_of_an_event(count);
}


/*complement_of_an_event Ends*/



/*cone Begins*/
function cone(a) {

	if(a == 0) {
		englishTerm = "cone";
		spanishTerm = "cono";
		englishDef = "a solid figure with a circular base and a curved surface that meets at a point";
		spanishDef = "figura sólida compuesta por una base circular y una superficie curva que se une en un punto";
		showTermDefinition();
	}
	if(a != 4) {
		//timer_1 = setTimeout("cone_extd(" + a + ")", 1000)
	} else {
		//timer_1 = setTimeout("cone_extd(" + a + ")", 1500)
	}
}

function cone_extd(e) {
	var count = parseInt(e);
	var get_id = document.getElementById("animation");
	count++;
	if(count<3)
	{
		get_id.innerHTML = "<div id='cone_align'><img src='assets/images/cone_images/051_cone"+count+".png' /></div>";
	}
	else if(count>=3 && count<5)
	{
		if(selLang == "english") {
			get_id.innerHTML = "<div id='cone_align'><img src='assets/images/cone_images/051_cone"+count+".png' /></div>";
		} else {
			get_id.innerHTML = "<div id='cone_align'><img src='assets/images/cone_images/051_conesp"+count+".png' /></div>";
		}
	}
	 else {
		count = 0;
		get_id.innerHTML = "";
	}
	cone(count);
}

/*cone Ends*/

/*corner Begins*/
function corner(a) {

	if(a == 0) {
		englishTerm = "corner";
		spanishTerm = "vértice";
		englishDef = "a point where three or more faces of a solid figure meet";
		spanishDef = "un punto donde se unen dos o más caras de una figura sólida";
		showTermDefinition();
	}
	//timer_1 = setTimeout("corner_extd(" + a + ")", 1000)
}

function corner_extd(e) {
	var count = parseInt(e);
	var get_id = document.getElementById("animation");
	
	count++;
	
	if(count<5)
	{
		get_id.innerHTML = "<div id='corner'><img src='assets/images/corner_images/061_corner"+count+".png' /></div>";
	}
	else if(count==5)
	{
		if(selLang == 'english') {
			get_id.innerHTML = "<div id='corner'><img src='assets/images/corner_images/061_corner5.png' /></div>";
		} else {
			get_id.innerHTML = "<div id='corner'><img src='assets/images/corner_images/061_cornersp5.png' /></div>";
		}
	}
	 else {
		count = 0;
		get_id.innerHTML = "";
	}
	corner(count);
}

/*corner Ends*/


/*corresponding sides Begins*/

function corresponding_sides(a) {

	if(a == 0) {
		englishTerm = "corresponding sides";
		spanishTerm = "lados correspondientes";
		englishDef = "sides of congruent polygons that are in the same relative position";
		spanishDef = "los lados de polígonos congruentes que están en la misma posición relativa";
		replayAnimation = 1;
		showTermDefinition();
	}
	//timer_1 = setTimeout("corresponding_sides_extd(" + a + ")", 1000)
}

function corresponding_sides_extd(e) {
	var count = parseInt(e);
	var get_id = document.getElementById("animation");
	count++;
	if(count <5) {
		get_id.innerHTML= "<div id='corres_polygons'><img src='assets/images/corresponding_sides_images/063_corresponding-sides"+count+".png'/> </div>";			
	} 
	else if(count==5)
	{
		if(selLang == "english") {
			get_id.innerHTML= "<div id='corres_polygons'><img src='assets/images/corresponding_sides_images/063_corresponding-sides5.png'/> </div>";
		}
		else
		{
			get_id.innerHTML= "<div id='corres_polygons'><img src='assets/images/corresponding_sides_images/063_correspondingsidessp5.png'/> </div>";
		}
		
	}
	corresponding_sides(count);
}

/*corresponding sides Ends*/

/*cubic unit Begins*/
function cubic_unit(a) {

	if(a == 0) {
		englishTerm = "cubic unit";
		spanishTerm = "unidad cúbica";
		englishDef = "unit for measuring volume";
		spanishDef = "unidad para medir el volumen";
		showTermDefinition();
	}
	//timer_1 = setTimeout("cubic_unit_extd(" + a + ")", 1333)
}

function cubic_unit_extd(e) {
	var count = parseInt(e);
	var get_id = document.getElementById("animation");
	count++;
	if(count == 1) {
		get_id.innerHTML = "<img class='cubic_unit_image' src='assets/images/cubic_unit_images/069_cubic-unit1.png'/>"
	} else if(count == 2) {
		if(selLang == "english") {
			get_id.innerHTML = "<img class='cubic_unit_image' src='assets/images/cubic_unit_images/069_cubic-unit2.png'/>"
		} else {
			get_id.innerHTML = "<img class='cubic_unit_image' src='assets/images/cubic_unit_images/069_cubic-unit_span2.png'/>"
		}
		
	}  else if(count == 3) {
		if(selLang == "english") {
			get_id.innerHTML = "<img class='cubic_unit_image' src='assets/images/cubic_unit_images/069_cubic-unit3.png'/>"
		} else {
			get_id.innerHTML = "<img class='cubic_unit_image' src='assets/images/cubic_unit_images/069_cubic-unit_span3.png'/>"
		}
		
	} else if(count == 4) {
		if(selLang == "english") {
			get_id.innerHTML = "<img class='cubic_unit_image' src='assets/images/cubic_unit_images/069_cubic-unit4.png'/>"
		} else {
			get_id.innerHTML = "<img class='cubic_unit_image' src='assets/images/cubic_unit_images/069_cubic-unit_span4.png'/>"
		}
		
	} else {
		count = 0;
		get_id.innerHTML = "";
	}

	cubic_unit(count);
}

/*cubic unit Ends*/


/*customary units of weight Begins*/
function customary_units_of_weight(a) {

	if(a == 0) {
		englishTerm = "customary units of weight";
		spanishTerm = "unidades estándar de peso";
		englishDef = "the units of weight used in the United States, such as ounce, pound, and ton";
		spanishDef = "las unidades de peso que se usan en los Estados Unidos, como la onza, la libra y la tonelada";
		showTermDefinition();
	}
	//timer_1 = setTimeout("customary_units_of_weight_extd(" + a + ")", 1500)
}

function customary_units_of_weight_extd(e) {
	var count = parseInt(e);
	var get_id = document.getElementById("animation");
	count++;
	if(count == 1) {
		get_id.innerHTML = "<img src='assets/images/customary_weight_images/customary_ounce.jpg' class='customary_ounce'/>";
	} else if(count == 2) {
		get_id.innerHTML = "<img src='assets/images/customary_weight_images/customary_ounce.jpg' class='customary_ounce'/><img src='assets/images/customary_weight_images/customary_pound.jpg' id='customary_pound'/>";
	} else if(count == 3) {
		get_id.innerHTML = "<img src='assets/images/customary_weight_images/customary_ounce.jpg' class='customary_ounce'/><img src='assets/images/customary_weight_images/customary_pound.jpg' id='customary_pound'/><img src='assets/images/customary_weight_images/customary_ton.jpg' id='customary_ton'/>";
	} else {
		count = 0;
		get_id.innerHTML = "";
	}

	customary_units_of_weight(count);
}

/*customary units of length Ends*/

/*cylinder Begins*/
function cylinder(a) {

	if(a == 0) {
		englishTerm = "cylinder";
		spanishTerm = "cilindro";
		englishDef = "a solid figure with 2 bases that are congruent circles";
		spanishDef = "una figura sólida con 2 bases que son círculos congruentes";
		showTermDefinition();
	}
	//timer_1 = setTimeout("cylinder_extd(" + a + ")", 1000)
}

function cylinder_extd(e) {
	var count = parseInt(e);
	var get_id = document.getElementById("animation");
	count++;
	if(count == 1) {
		get_id.innerHTML = "<img src='assets/images/cylinder_images/075_cylinder_new.png'>";
	} else if(count == 2) {
		get_id.innerHTML = "<img src='assets/images/cylinder_images/075_cylinder_new_e1.png'>";
	} else if(count == 3) {
		get_id.innerHTML = "<img src='assets/images/cylinder_images/075_cylinder_new_e2.png'>";
	} else {
		count = 0;
		get_id.innerHTML = "";
	}

	cylinder(count);
}

/*cylinder Ends*/
/* circle starts  */
function circle_extd(e) {
	var display = new Array();
	display[0] = "<img src='assets/images/circle_images/031_center.png' />";
	display[1] = "<img src='assets/images/circle_images/031_center_1.png' />";
	display[2] = "<img src='assets/images/circle_images/031_center_2.png' />";
	display[3] = "<img src='assets/images/circle_images/031_center_3.png' />";
	display[4] = "<img src='assets/images/circle_images/031_center_4.png' />";
	display[5] = "<img src='assets/images/circle_images/031_center_5.png' />";
	display[6] = "<img src='assets/images/circle_images/031_center_6.png' />";
	display[7] = "<img src='assets/images/circle_images/031_center_7.png' />";

	if(e < 8) {
		document.getElementById('animation').innerHTML = "<div id='circle_sub'>" + display[parseInt(e)] + "</div>";
	} else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	cont = parseInt(e) + 1;
	circle(cont);
}

function circle(a) {
	var a = parseInt(a);
	if(a == 0) {
		englishTerm = "circle";
		spanishTerm = "círculo";
		englishDef = "a closed figure that contains all the points that are the same distance from a center point; the figure has no straight sides";
		spanishDef = "una figura cerrada que contiene todos los puntos que están a la misma distancia de un punto central; la figura no tiene lados rectos";
		showTermDefinition();
	}
	//timer_1 = setTimeout("circle_extd(" + a + ")", 445);
}

/* circle ends  */


/* circumference  starts  */

function circumference_extd(e) {
	var display = new Array();

	var image_arr = ['039_circumference1.png', '039_circumference2.png', '039_circumference3.png', '039_circumference4.png', '039_circumference5.png', '039_circumference6.png', '039_circumference7.png', '039_circumference8.png', '039_circumference9.png', '039_circumference10.png', '039_circumference11.png', '039_circumference12.png', '039_circumference13.png', '039_circumference14.png', '039_circumference15.png'];
	if(e>=0 && e <=14) {
		document.getElementById('animation').innerHTML = "<div id='circumference_sub'><img src='assets/images/circumference_images/" + image_arr[parseInt(e)] + "'/></div>";
	}	
	else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	cont = parseInt(e) + 1;
	circumference(cont);
}

function circumference(a) {
	var a = parseInt(a);

	if(a == 0) {
		englishTerm = "circumference";
		spanishTerm = "circunferencia";
		englishDef = "the distance around a circle";
		spanishDef = "la distancia alrededor de un círculo";
		showTermDefinition();
	}
	//timer_1 = setTimeout("circumference_extd(" + a + ")", 300);
}

/* circumference ends  */


/* corresponding angles of polygons  starts  */
function corresponding_angles_of_polygons_extd(e) {

	if(e < 3) {
		document.getElementById('animation').innerHTML = "<div id='corresponding_angles_of_polygons_sub'><img src='assets/images/corresponding_angles_of_polygons_images/"+parseInt(e+1)+".png'/></div>";
	} else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	cont = parseInt(e) + 1;
	corresponding_angles_of_polygons(cont);
}

function corresponding_angles_of_polygons(a) {
	var a = parseInt(a);
	if(a == 0) {
		englishTerm = "corresponding angles of polygons";
		spanishTerm = "ángulos correspondientes de polígonos";
		englishDef = "angles of congruent polygons that are in the same relative position";
		spanishDef = "ángulos de polígonos congruentes que están en la misma posición relativa";
		showTermDefinition();
	}
	//timer_1 = setTimeout("corresponding_angles_of_polygons_extd(" + a + ")", 2000);
}

/* corresponding angles of polygons ends  */

/*commutative property of addition begins*/

function commutative_property_of_addition(a) {
	if(a == 0) {
		englishTerm = "Commutative Property of Addition";
		spanishTerm = "propiedad conmutativa de la suma";
		englishDef = "a property that states that the order of the addends can be changed without affecting the sum";
		spanishDef = "propiedad que establece que el orden de los sumandos se puede cambiar sin afectar la suma";
		showTermDefinition();
	}
	//timer_1 = setTimeout("commutative_property_of_addition_extd(" + a + ")", 1000);
}

function commutative_property_of_addition_extd(e) {
	
	var cont = parseInt(e);

	if(e == 0)
		document.getElementById('animation').innerHTML += "<img class='commu_add_image' src='assets/images/commutative property of addition_images/044_commutative-property-of-addition1.png'/>";
	else if(e == 1)
		document.getElementById('animation').innerHTML = "<img class='commu_add_image' src='assets/images/commutative property of addition_images/044_commutative-property-of-addition2.png'/>";
	else if(e == 2)
		document.getElementById('animation').innerHTML = "<img class='commu_add_image' src='assets/images/commutative property of addition_images/044_commutative-property-of-addition3.png'/>";
	else if(e == 3)
		document.getElementById('animation').innerHTML = "<img class='commu_add_image' src='assets/images/commutative property of addition_images/044_commutative-property-of-addition4.png'/>";
	else if(e == 4)
		document.getElementById('animation').innerHTML = "<img class='commu_add_image' src='assets/images/commutative property of addition_images/044_commutative-property-of-addition5.png'/>";
	else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	cont = parseInt(e) + 1;

	commutative_property_of_addition(cont);
}

/*commutative property of addition ends*/

/*commutative_Property_of_multiplication begins*/

function commutative_property_of_multiplication(a) {
	if(a == 0) {
		englishTerm = "Commutative Property of Multiplication";
		spanishTerm = "propiedad conmutativa de la multiplicación";
		englishDef = "a property that states that the order of the factors can be changed without affecting the product";
		spanishDef = "propiedad que establece que el orden de los factores puede cambiarse sin afectar el producto";
		showTermDefinition();
	}
	//timer_1 = setTimeout("commutative_property_of_multiplication_extd(" + a + ")", 1000);

}

function commutative_property_of_multiplication_extd(e) {
	
	var cont = parseInt(e);

	if(e == 0)
		document.getElementById('animation').innerHTML += "<img class='commu_add_image' src='assets/images/commutative property of multiplication_images/045_commutative-property-of-multiplication.png'/>";
	else if(e == 1)
		document.getElementById('animation').innerHTML = "<img class='commu_add_image' src='assets/images/commutative property of multiplication_images/045_commutative-property-of-multiplication1.png'/>";
	else if(e == 2)
		document.getElementById('animation').innerHTML = "<img class='commu_add_image' src='assets/images/commutative property of multiplication_images/045_commutative-property-of-multiplication2.png'/>";
	else if(e == 3)
		document.getElementById('animation').innerHTML = "<img class='commu_add_image' src='assets/images/commutative property of multiplication_images/045_commutative-property-of-multiplication3.png'/>";
	else if(e == 4)
		document.getElementById('animation').innerHTML = "<img class='commu_add_image' src='assets/images/commutative property of multiplication_images/045_commutative-property-of-multiplication4.png'/>";
	else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	cont = parseInt(e) + 1;

	commutative_property_of_multiplication(cont);
}

/*commutative_Property_of_multiplication ends*/
/* congruent angles starts*/
function congruent_angles(a) {
	if(a == 0) {
		englishTerm = "congruent angles";
		spanishTerm = "ángulos congruentes";
		englishDef = "two angles with the same measure";
		spanishDef = "dos ángulos con la misma medida";
		showTermDefinition();
	}
	////timer_1 = setTimeout("congruent_angles_extd(" + a + ")", 1500);
	/*if(a == 3)
		//timer_1 = setTimeout("congruent_angles_extd(" + a + ")", 900);
	else
		//timer_1 = setTimeout("congruent_angles_extd(" + a + ")", 1500);*/
}

function congruent_angles_extd(e) {
	var cont = parseInt(e);
	cont = parseInt(e) + 1;
	if(cont <= 4){
		document.getElementById('animation').innerHTML = '<img id="cong_img1" src="assets/images/congruent_angles_images/congruent_angle'+cont+'.png" />';
	} else{
		document.getElementById('animation').innerHTML = "";
		cont = 0;
	}
	congruent_angles(cont);
}

/* congruent angles  ends */

/* decrease starts*/
function decrease(a) {
	if(a == 0) {
		englishTerm = "decrease";
		spanishTerm = "disminuir";
		englishDef = "to get smaller in size or number";
		spanishDef = "reducir el tamaño o el número de algo";
		showTermDefinition();
	}
	//timer_1 = setTimeout("decrease_extd(" + a + ")", 2000);
}

function decrease_extd(e) {
	var cont = parseInt(e);
	if(cont == 0) {
		var str = '';
		for( i = 0; i < 8; i++)
		str += '<div class="decrease_img"><img src="assets/images/decrease_images/dime_1.png" /></div>';
		for( j = 0; j < 4; j++)
		str += '<div class="decrease_img"><img src="assets/images/decrease_images/dime_1.png" class="decrease_fade" /></div>';
		document.getElementById('animation').innerHTML = str;
	} else if(e == 1)
		$('.decrease_fade').fadeOut('slow');
	else if(e == 2)
		document.getElementById('animation').innerHTML = '<div class="sphere_img"><img src="assets/images/decrease_images/sphere.png" id="sphere_img" /> </div>';
	else if(e == 3) {
		$('#sphere_img').animate({
			width : 44,
			height : 44
		});
		setTimeout("", 1000);
	} else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	cont = parseInt(e) + 1;
	decrease(cont);
}

/* decrease ends */
/* denominator */
function denominator(a) {
	var a = parseInt(a);
	if(a == 0) {
		englishTerm = "denominator";
		spanishTerm = "denominador";
		englishDef = "the number below the bar in a fraction that tells how many equal parts are in the whole or in the set";
		spanishDef = "el número debajo de la barra de una fracción que indica cuántas partes iguales hay en el entero o en el conjunto";
		showTermDefinition();
	}
	if(a == 1 || a == 3) {
		//timer_1 = setTimeout("denominator_extd(" + a + ")", 800);
	} else {
		//timer_1 = setTimeout("denominator_extd(" + a + ")", 1200);
	}

}

function denominator_extd(e) {
	var count = parseInt(e);
	count++;
	if(count <= 4) {
		document.getElementById('animation').innerHTML = "<img class='denominator_1' src='assets/images/denominator_image/087_denominator"+count+".png'/>";
	} else {
		document.getElementById('animation').innerHTML = "";
		count = 0;
	}
		denominator(count);
}

/*dependent events Begins*/
function dependent_events(a) {

	if(a == 0) {
		englishTerm = "dependent events";
		spanishTerm = "eventos dependientes";
		englishDef = "events where the outcome of the first event affects the outcome of the second event";
		spanishDef = "eventos en los que el resultado del primer evento afecta al resultado del segundo evento";
		showTermDefinition();
	}
	if(a != 3) {
		//timer_1 = setTimeout("dependent_events_extd(" + a + ")", 1500)
	} else {
		//timer_1 = setTimeout("dependent_events_extd(" + a + ")", 2000)
	}
}

function dependent_events_extd(e) {
	var count = parseInt(e);
	count++;
	if(count <= 3) {
		document.getElementById('animation').innerHTML = "<img class='dependent_event1' src='assets/images/dependent_event_images/088_dependent-events"+count+".png'/>";
	} else {
		document.getElementById('animation').innerHTML = "";
		count = 0;
	}
		dependent_events(count);
}

/*dependent events Ends*/
/* difference starts*/
function difference(a) {
	if(a == 0) {
		englishTerm = "difference";
		spanishTerm = "diferencia";
		englishDef = "the answer in a subtraction problem";
		spanishDef = "el resultado de un problema de resta";
		showTermDefinition();
	}
	//timer_1 = setTimeout("difference_extd(" + a + ")", 800);
}

function difference_extd(e) {
		var count = parseInt(e);
		count++;
		if(count==1) {
			document.getElementById('animation').innerHTML = "<img class='difference_1' src='assets/images/difference_images/091_difference"+count+".png'/>";
		}else if(count<=3){
			if(selLang == "english"){
				document.getElementById('animation').innerHTML = "<img class='difference_1' src='assets/images/difference_images/091_difference"+count+".png'/>";
			}else{
				document.getElementById('animation').innerHTML = "<img class='difference_1' src='assets/images/difference_images/091_differencesp"+count+".png'/>";
			}
		}
		  else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
	
	difference(count);
}

/* difference ends */

/*digit begins*/

function digit(a) {
	if(a == 0) {
		englishTerm = "digit";
		spanishTerm = "dígito";
		englishDef = "any of the 10 numerals: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9";
		spanishDef = "cualquiera de los 10 numerales: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9";
		showTermDefinition();
	}
	//timer_1 = setTimeout("digit_extd(" + a + ")", 700);
}

function digit_extd(e) {
		var count = parseInt(e);
		count++;
		if(count==1) {
			document.getElementById('animation').innerHTML = "<img class='digit_1' src='assets/images/digit_images/092_digit"+count+".png'/>";
		}else if(count<=5){
			if(selLang == "english"){
				document.getElementById('animation').innerHTML = "<img class='digit_1' src='assets/images/digit_images/092_digit"+count+".png'/>";
			}else{
				document.getElementById('animation').innerHTML = "<img class='digit_1' src='assets/images/digit_images/092_digitsp"+count+".png'/>";
			}
		}
		  else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
	
	digit(count);
}
/*digit ends*/


/*Digital Clock*/
function digital_clock(a) {
	if(a == 0) {
		englishTerm = "digital clock";
		spanishTerm = "reloj digital";
		englishDef = "a tool used to measure time displayed using digits";
		spanishDef = "herramienta que sirve para medir el tiempo y lo muestra con dígitos";
		showTermDefinition();
	}
	if(a <= 2) {
		//timer_1 = setTimeout("digital_clock_extd(" + a + ")", 750);
	} else if(a == 3) {
		//timer_1 = setTimeout("digital_clock_extd(" + a + ")", 1250);
	}
}

function digital_clock_extd(e) {
		var count = parseInt(e);
		count++;
		if(count==1) {
			document.getElementById('animation').innerHTML = "<img class='digital_clock_1' src='assets/images/digitalclock_images/093_digitalclock"+count+".png'/>";
		}else if(count<=3){
			if(selLang == "english"){
				document.getElementById('animation').innerHTML = "<img class='digital_clock_1' src='assets/images/digitalclock_images/093_digitalclock"+count+".png'/>";
			}else{
				document.getElementById('animation').innerHTML = "<img class='digital_clock_1' src='assets/images/digitalclock_images/093_digitalclockSP"+count+".png'/>";
			}
		}
		  else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
	
	digital_clock(count);
}

/*END DIGITAL CLOCK*/

/*Distributive Property*/
function distributive_property(a) {
	var s = parseInt(a);
	if(a == 0) {
		englishTerm = "Distributive Property";
		spanishTerm = "Propiedad distributiva";
		englishDef = "the property of distributing one operation over another, and the answer is the same";
		spanishDef = "la propiedad de distribuir una operación con otra, y que el resultado sea el mismo";
		showTermDefinition();
	}
	//timer_1 = setTimeout("distributive_property_extd(" + a + ")", 1200);
}

function distributive_property_extd(e) {
	var count = parseInt(e);
	count++;
	if(count <= 4) {
		document.getElementById('animation').innerHTML = "<img class='distributive_p1' src='assets/images/distributive_property_images/096_distributiveproperty"+count+".png'/>";
	} else {
		document.getElementById('animation').innerHTML = "";
		count = 0;
	}
		distributive_property(count);
}

/*Distributive property*/


/* dime begins */

function dime(a) {
	if(a == 0) {
		englishTerm = "dime";
		spanishTerm = "moneda de 10¢";
		englishDef = "a coin that is worth 10 cents";
		spanishDef = "moneda que vale 10 centavos";
		showTermDefinition();
	}
	//timer_1 = setTimeout("dime_extd(" + a + ")", 1200);
}

function dime_extd(e) {
	var arr = "<img  id= 'bc' class = 'benchmark_img2' src='assets/images/dime_images/sibgletext.png'>";
	var arr1="<img id= 'bc' class = 'benchmark_img2' src='assets/images/dime_images/singledime.png'/>";
	//var arr1 = "1 dime";
	var arr2="<img id= 'bc' class = 'benchmark_img2' src='assets/images/dime_images/finedime.png' />";
	var cont = parseInt(e);

	if(e == 0) {
		document.getElementById('animation').innerHTML = "<div >&nbsp;" + arr + "</div><br/>";
	} else if(e == 1) {
		var img = "";
		document.getElementById('animation').innerHTML = "<div >&nbsp;" + arr1 + "</div><br/>";
		document.getElementById('animation').innerHTML += "<div class='dime_flow flowings'><img  id= 'bc1' class = 'benchmark_img1' src='assets/images/dime_images/095_dime9.png'></div>";
		
	} else if(e == 2)

		$('.dime_flow').animate({
			top : -146 
		});
	
	else if(e == 3){
		document.getElementById('animation').innerHTML = "<div class='dime_flow flowings'><img  id= 'bc1' class = 'finaldime' src='assets/images/dime_images/095_dime9.png'></div>";
		document.getElementById('animation').innerHTML += "<div >&nbsp;" + arr2 + "</div><br/>";
		
	}
	else {
		document.getElementById('animation').innerHTML = "";
		e = 0;
	}
	cont = parseInt(e) + 1;

	dime(cont);
}

/* dime ends */
/*dilation Begins*/
function dilation(a) {

	if(a == 0) {
		englishTerm = "dilation";
		spanishTerm = "dilatación";
		englishDef = "enlarging or reducing a geometric figure to create a similar figure";
		spanishDef = "agrandar o reducir una figura geométrica para crear una figura similar";
		showTermDefinition();
	}
	if(a == 4 || a == 2) {
		//timer_1 = setTimeout("dilation_extd(" + a + ")", 1800)
	} else {
		//timer_1 = setTimeout("dilation_extd(" + a + ")", 1200)
	}
}

function dilation_extd(e) {
	var count = parseInt(e);
	var get_id = document.getElementById("animation");
	count++;
	if(count == 1) {
		get_id.innerHTML = "<img src='assets/images/dilation_images/dilation1_blue_tri.jpg' class='dilation_img' />";
	} else if(count == 2) {
		get_id.innerHTML = "<img src='assets/images/dilation_images/dilation1_blue_tri.jpg' class='dilation_img'/><img src='assets/images/dilation_images/dilation-12.png' id='dilation_redtri' width='66' height='86'/>";
		$('#dilation_redtri').animate({
			width : '66px',
			height : '86px',
			left : '200px'
		});
	} else if(count == 3) {
		get_id.innerHTML = "<img src='assets/images/dilation_images/dilation2_blue_tri.jpg' class='dilation_img'/>";
	} else if(count == 4) {
		get_id.innerHTML = "<img src='assets/images/dilation_images/dilation2_blue_tri.jpg' class='dilation_img'/><img src='assets/images/dilation_images/dilation23.png' id='dilation_redtriangle3' /><img src='assets/images/dilation_images/dilation-1.png' id='dilation_redtriangle2' />";
		$('#dilation_redtriangle2').css('display', 'none');
		$('#dilation_redtriangle3').animate({
			width : '63px',
			height : '58px',
			left : '135px',
			top : '73px'
		}, 500, function() {
			$('#dilation_redtriangle3').css('display', 'none');
			$('#dilation_redtriangle2').css('display', 'block');
		})
	} else {
	count = 0;
	get_id.innerHTML = "";
	}
	dilation(count);
}

/*dilation Ends*/

/*divide Begins*/

function divide(a) {

	if(a == 0) {
		englishTerm = "divide";
		spanishTerm = "dividir";
		englishDef = "to separate into equal groups";
		spanishDef = "separar en grupos iguales";
		showTermDefinition();
	}
	//timer_1 = setTimeout("divide_extd(" + a + ")", 1200);
}

function divide_extd(e) {
	var count = parseInt(e);
	count++;
	if(count <= 3) {
		document.getElementById('animation').innerHTML = "<img class='divide_1' src='assets/images/divide_images/097_divide"+count+".png'/>";
	} else {
		document.getElementById('animation').innerHTML = "";
		count = 0;
	}
		divide(count);
}
/*divide Ends*/
/*Diagonal*/
function diagonal(a) {
	var s = parseInt(a);
	if(a == 0) {
		englishTerm = "diagonal";
		spanishTerm = "diagonal";
		englishDef = "a line segment drawn from one vertex of a polygon to a nonconsecutive vertex";
		spanishDef = "un segmento de recta trazado desde un vértice de un polígono a un vértice no consecutivo";
		showTermDefinition();
	}
	if(a == 4 || a == 9 || a == 16) {
		//timer_1 = setTimeout("diagonal_extd(" + a + ")", 1500);
	} else {
		//timer_1 = setTimeout("diagonal_extd(" + a + ")", 500);
	}
}

function diagonal_extd(e) {
	var d = parseInt(e);
	if(e == 0) {
		document.getElementById('animation').innerHTML = "<div class='diagonal_class'><img src='assets/images/diagonal_images/089_1_diagonal.png'/></div>";
	} else if(e == 1) {
		document.getElementById('animation').innerHTML = "<div class='diagonal_class'><img src='assets/images/diagonal_images/089_1_diagonal_1.png'/></div>";
	} else if(e == 2) {
		document.getElementById('animation').innerHTML = "<div class='diagonal_class'><img src='assets/images/diagonal_images/089_1_diagonal_2.png'/></div>";
	} else if(e == 3) {
		document.getElementById('animation').innerHTML = "<div class='diagonal_class'><img src='assets/images/diagonal_images/089_1_diagonal_3.png'/></div>";
	} else if(e == 4) {
		document.getElementById('animation').innerHTML = "<div class='diagonal_class'><img src='assets/images/diagonal_images/089_2_diagonal.png'/></div>";
	} else if(e == 5) {
		document.getElementById('animation').innerHTML = "<div class='diagonal_class'><img src='assets/images/diagonal_images/089_2_diagonal_1.png'/></div>";
	} else if(e == 6) {
		document.getElementById('animation').innerHTML = "<div class='diagonal_class'><img src='assets/images/diagonal_images/089_2_diagonal_2.png'/></div>";
	} else if(e == 7) {
		document.getElementById('animation').innerHTML = "<div class='diagonal_class'><img src='assets/images/diagonal_images/089_2_diagonal_3.png'/></div>";
	} else if(e == 8) {
		document.getElementById('animation').innerHTML = "<div class='diagonal_class'><img src='assets/images/diagonal_images/089_2_diagonal_4.png'/></div>";
	} else if(e == 9) {
		document.getElementById('animation').innerHTML = "<div class='diagonal_class'><img src='assets/images/diagonal_images/089_3_diagonal.png'/></div>";
	} else if(e == 10) {
		document.getElementById('animation').innerHTML = "<div class='diagonal_class'><img src='assets/images/diagonal_images/089_3_diagonal_1.png'/></div>";
	} else if(e == 11) {
		document.getElementById('animation').innerHTML = "<div class='diagonal_class'><img src='assets/images/diagonal_images/089_3_diagonal_2.png'/></div>";
	} else if(e == 12) {
		document.getElementById('animation').innerHTML = "<div class='diagonal_class'><img src='assets/images/diagonal_images/089_3_diagonal_3.png'/></div>";
	} else if(e == 13) {
		document.getElementById('animation').innerHTML = "<div class='diagonal_class'><img src='assets/images/diagonal_images/089_3_diagonal_4.png'/></div>";
	} else if(e == 14) {
		document.getElementById('animation').innerHTML = "<div class='diagonal_class'><img src='assets/images/diagonal_images/089_3_diagonal_5.png'/></div>";
	} else if(e == 15) {
		document.getElementById('animation').innerHTML = "<div class='diagonal_class'><img src='assets/images/diagonal_images/089_3_diagonal_6.png'/></div>";
	} else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	d = parseInt(e) + 1;
	diagonal(d);
}

/*end diagonal*/
/* diameter */
function diameter(a) {
	if(a == 0) {
		englishTerm = "diameter";
		spanishTerm = "diámetro";
		englishDef = "the distance across a circle through the center of the circle";
		spanishDef = "la distancia de un círculo a través del centro del círculo";
		showTermDefinition();
	}
	//timer_1 = setTimeout("diameter_extd(" + a + ")", 1000);
}

function diameter_extd(e) {
	var count = parseInt(e);
	count++;
	if(count <= 4) {
		document.getElementById('animation').innerHTML = "<img class='diameter_1' src='assets/images/diameter_images/090_diameter"+count+".png'/>";
	} else {
		document.getElementById('animation').innerHTML = "";
		count = 0;
	}
		diameter(count);
}

/*division Begins*/
function division(a) {

	if(a == 0) {
		englishTerm = "division";
		spanishTerm = "división";
		englishDef = "the process of sharing a number of items to find how many equal groups can be made or how many items will be in each group; the opposite operation of multiplication";
		spanishDef = "el proceso de compartir un número de elementos para hallar cuántos grupos iguales pueden formarse o cuántos elementos habrá en cada grupo; es la operación opuesta a la multiplicación";
		showTermDefinition();
	}
	//timer_1 = setTimeout("division_extd(" + a + ")", 1500);
}

function division_extd(e) {
	var count = parseInt(e);
	var div_id = document.getElementById("animation");
	count++;
	if(count == 1) {
		div_id.innerHTML = "<div class='division_img'><img src='assets/images/division_images/099_division1.png' /></div>";
	} else if(count == 2) {
		div_id.innerHTML = "<div class='division_img'><img src='assets/images/division_images/099_division2.png' /></div>";
	} else if(count == 3) {
		if(selLang == "english") {
			div_id.innerHTML = "<div class='division_img'><img src='assets/images/division_images/099_division3.png'/></div>";
		} else {
			div_id.innerHTML = "<div class='division_img'><img src='assets/images/division_images/099_divisionsp3.png'/></div>";
 		}
	} else {
		count = 0;
		div_id.innerHTML = "";
	}
	division(count);
}

/*division Ends*/


/*double Begins*/
function double(a) {

	if(a == 0) {
		englishTerm = "double";
		spanishTerm = "doble";
		englishDef = "a product that can be written as twice as many";
		spanishDef = "un producto que puede escribirse como algo multiplicado por dos";
		showTermDefinition();
	}
	//timer_1 = setTimeout("double_extd(" + a + ")", 1200);
}

function double_extd(e) {
	var count = parseInt(e);
	var div_id = document.getElementById("animation");
	count++;
	if(count < 5) {
		div_id.innerHTML = "<img src='assets/images/double_images/101_double"+count+".png' id='double_2'/>";
	} 
	else {
		count = 0;
		div_id.innerHTML = "";
	}
	double(count);
}

/*double Ends*/

/*double line graph Begins*/

function double_line_graph(a) {

	if(a == 0) {
		englishTerm = "double line graph";
		spanishTerm = "gráfica de doble línea";
		englishDef = "a graph that compares two sets of data using points connected by line segments";
		spanishDef = "una gráfica que compara dos conjuntos de datos mediante puntos conectados por segmentos de recta";
		showTermDefinition();
	}
	/*if(a != 3)
		//timer_1 = setTimeout("double_line_graph_extd(" + a + ")", 1500)
	else
		//timer_1 = setTimeout("double_line_graph_extd(" + a + ")", 2000)*/
}

function double_line_graph_extd(e) {
	var count = parseInt(e);
	var get_id = document.getElementById("animation");
	count++;
	if(count == 1) {
		get_id.innerHTML = "<img src='assets/images/double_line_graph_images/double_line_graph.png' id='double_line'/>";
	} else if(count == 2) {
		get_id.innerHTML = "<img src='assets/images/double_line_graph_images/double_red_data.jpg' id='double_line'/>";
	} else if(count == 3) {
		get_id.innerHTML = "<img src='assets/images/double_line_graph_images/double_blue_data.jpg' id='double_line'/>";
	} else {
		count = 0;
		get_id.innerHTML = "";
	}

	double_line_graph(count);
}

/* double line graph Ends */

/*degrees Fahrenheit (°F) Begins*/
function degrees_fahrenheit(a) {

	if(a == 0) {
		englishTerm = "degrees Fahrenheit (°F)";
		spanishTerm = "grados Fahrenheit (°F)";
		englishDef = "a customary unit used to measure temperature";
		spanishDef = "unidad estándar para medir la temperatura";
		showTermDefinition();
	}
	if(a != 4) {
		//timer_1 = setTimeout("degrees_fahrenheit_extd(" + a + ")", 1200)
	} else {
		//timer_1 = setTimeout("degrees_fahrenheit_extd(" + a + ")", 1700)
	}
}

function degrees_fahrenheit_extd(e) {
	var count = parseInt(e);
	count++;
	if(count <= 4) {
		document.getElementById('animation').innerHTML = "<img class='degrees_f1' src='assets/images/degrees_fahrenheit_images/086_degreesFahreheit"+count+".png'/>";
	} else {
		document.getElementById('animation').innerHTML = "";
		count = 0;
	}
		degrees_fahrenheit(count);
}


/*degrees Fahrenheit (°F) Ends*/

/* divisor starts*/
function divisor(a) {
	if(a == 0) {
		englishTerm = "divisor";
		spanishTerm = "divisor";
		englishDef = "the number that divides another number in a division problem";
		spanishDef = "el número que divide a otro número en un problema de división";
		showTermDefinition();
	}
	/*if(a == 4)
		//timer_1 = setTimeout("divisor_extd(" + a + ")", 1500);
	else
		//timer_1 = setTimeout("divisor_extd(" + a + ")", 800);*/
}

function divisor_extd(e) {
	var count = parseInt(e);
	count++;
	
	if(count <= 4)
	{
		document.getElementById('animation').innerHTML = "<img class='divisor_1' src='assets/images/divisor_images/100_divisor"+count+".png'/>";
}else
{
	count = 0;
	document.getElementById('animation').innerHTML = ''

	}
	
	divisor(count);
}
/* divisor ends */

/*data point Begins*/
function data_point(a) {

	if(a == 0) {
		englishTerm = "data point";
		spanishTerm = "punto de un dato";
		englishDef = "the representation of related values on a graph";
		spanishDef = "la representación de valores relacionados en una gráfica";
		showTermDefinition();
	}
	if(a != 3) {
		//timer_1 = setTimeout("data_point_exd(" + a + ")", 1500)
	} else {
		//timer_1 = setTimeout("data_point_exd(" + a + ")", 2000)
	}
}

function data_point_exd(e) {
	var count = parseInt(e);
	var get_id = document.getElementById("animation");
	count++;
	var data_arrow = "	<img src='assets/images/arrows/north.png' />";
	if(count == 1) {
		get_id.innerHTML = "<img id='data_tbl_graph' src='assets/images/data_point_images/077_data point.png'/>";
	} else if(count == 2) {
		get_id.innerHTML = "<img id='data_tbl_graph' src='assets/images/data_point_images/077_data point_1.png'/>";
	} else if(count == 3) {
		if(selLang == "english") {
			get_id.innerHTML = "<img id='data_tbl_graph' src='assets/images/data_point_images/077_data point_1.png' />" + "<span class='data_point_arrows'>" + data_arrow + "</span>" + "<p class='data_point_txt label_font_semibold'>data point</p>";
		} else {
			get_id.innerHTML = "<img id='data_tbl_graph' src='assets/images/data_point_images/077_data point_1.png' />" + "<span class='data_point_arrows'>" + data_arrow + "</span>" + "<p class='data_point_txt label_font_semibold'>punto de un dato</p>";
		}
	} else {
		count = 0;
		get_id.innerHTML = "";
	}
	data_point(count);
}

/*data_point Ends*/

/*data set Begins*/
function data_set(a) {

	if(a == 0) {
		englishTerm = "data set";
		spanishTerm = "conjunto de datos";
		englishDef = "a collection of related values";
		spanishDef = "un grupo de valores relacionados";
		showTermDefinition();
	}
	if(a != 3) {
		//timer_1 = setTimeout("data_set_exd(" + a + ")", 1500)
	} else {
		//timer_1 = setTimeout("data_set_exd(" + a + ")", 2000)
	}
}

function data_set_exd(e) {
	var count = parseInt(e);
	var get_id = document.getElementById("animation");
	count++;
	if(count == 1) {
		get_id.innerHTML = "<img id='data_set_tbl_graph' src='assets/images/data_set_images/data_set_tbl_graph.jpg'/>";
	} else if(count == 2) {
		get_id.innerHTML = "<img id='data_set_tbl_graph' src='assets/images/data_set_images/data_set_col_1.jpg'/><p class='data_set1 label_font_semibold'>Driver Rating</p>"
	} else if(count == 3) {
		get_id.innerHTML = "<img id='data_set_tbl_graph' src='assets/images/data_set_images/data_set_col_2.jpg' /><p class='data_set1 label_font_semibold'>Driver Rating and Number of Car Accidents are related</p>";
	} else {
		count = 0;
		get_id.innerHTML = "";
	}
	data_set(count);
}

/*data set Ends*/


/*date Begins*/
function date(a) {

	if(a == 0) {
		englishTerm = "date";
		spanishTerm = "fecha";
		englishDef = "a day of a month";
		spanishDef = "un día de un mes";
		showTermDefinition();
	}
	if(a != 2) {
		//timer_1 = setTimeout("date_exd(" + a + ")", 1300)
	} else {
		//timer_1 = setTimeout("date_exd(" + a + ")", 1800)
	}
}

function date_exd(e) {
	var count = parseInt(e);
	var get_id = document.getElementById("animation");
	count++;
	if(count == 1) {
		get_id.innerHTML = "<div id='date_art'><img src='assets/images/date_images/079_date1.png' /></div>";
	} else if(count == 2) {
		if(selLang == "english") {
			get_id.innerHTML = "<div id='date_art'><img src='assets/images/date_images/079_date2.png' /></div>";
		} else {
			get_id.innerHTML = "<div id='date_art'><img src='assets/images/date_images/079_datesp2.png' /></div>";
		}
	} else {
		count = 0;
		get_id.innerHTML = "";
	}

	date(count);
}

/*date Ends*/

/*day Begins*/
function day(a) {

	if(a == 0) {
		englishTerm = "day";
		spanishTerm = "día";
		englishDef = "a unit for measuring time; the 24 hours it takes for Earth to spin once around";
		spanishDef = "unidad para medir el tiempo; las 24 horas que tarda la Tierra en dar una vuelta completa";
		replayAnimation = 1;
		showTermDefinition();
	}
	if(a != 9) {
		//timer_1 = setTimeout("day_exd(" + a + ")", 1600)
	} else {
		//timer_1 = setTimeout("day_exd(" + a + ")", 2000)
	}
}

function day_exd(e) {
	var count = parseInt(e);
	var get_id = document.getElementById("animation");
	count++;
	if(count==1)
	{
		get_id.innerHTML = "<div><img src='assets/images/day_images/080_day1.png'/></div>";
	}
	else if(count>1 && count<10)
	{
		if(selLang == "english") {
			get_id.innerHTML = "<div><img src='assets/images/day_images/080_day"+count+".png'/></div>";
		}
		else
		{
			get_id.innerHTML = "<div id='day_art'><img src='assets/images/day_images/080_daysp"+count+".png'/></div>";
		}
	}
	day(count);
}

/*day Ends*/

/* even number starts  */

function even_number_extd(e) {
	var count = parseInt(e);
	count++;
	if(count <= 6) {
		document.getElementById('animation').innerHTML = "<img class='evennumber_1' src='assets/images/even_number_images/114_evennumber"+count+".png'/>";
	} else {
		document.getElementById('animation').innerHTML = "";
		count = 0;
	}
		even_number(count);
}


function even_number(a) {
	var a = parseInt(a);
	if(a == 0) {
		englishTerm = "even number";
		spanishTerm = "número par";
		englishDef = "a whole number with 0, 2, 4, 6, or 8 in the ones place";
		spanishDef = "un número entero con un 0, un 2, un 4, un 6, o un 8 en la posición de las unidades";
		showTermDefinition();
	}
	//timer_1 = setTimeout("even_number_extd(" + a + ")", 857);
}

/* even number ends  */

/* equivalent rates */
function equivalent_rates(a) {
	if(a == 0) {
		englishTerm = "equivalent rates";
		spanishTerm = "tasas equivalentes";
		englishDef = "rates that can be written as equivalent ratios";
		spanishDef = "tasas que pueden escribirse como razones equivalentes";
		replayAnimation = oneTime==true ? 1 : 0;
		showTermDefinition();
	}
	//timer_1 = setTimeout("equivalent_rates_extd(" + a + ")", 1200);
}

function equivalent_rates_extd(e) {
	var cnt = parseInt(e);
	var equivalent_rates_div = document.getElementById('animation');
	cnt++;
	if(cnt<=4){
		equivalent_rates_div.innerHTML = "<img class='equivalent_rates' src='assets/images/equalent_rates_image/111_equivalent-rates"+cnt+".png'/>"
	}
	equivalent_rates(cnt);
}

/*base_10_pieces Begins*/
function base_10_pieces(a) {

	if(a == 0) {
		englishTerm = "base-10 pieces";
		spanishTerm = "piezas de base 10";
		englishDef = "blocks used to model numbers";
		spanishDef = "bloques que sirven para representar números";
		showTermDefinition();
	}
	if(a != 3) {
		//timer_1 = setTimeout("base_10_pieces_extd(" + a + ")", 1000)
	} else {
		//timer_1 = setTimeout("base_10_pieces_extd(" + a + ")", 1500)
	}

}

function base_10_pieces_extd(e) {
	var count = parseInt(e);
	var get_id = document.getElementById("animation")
	count++;
	if(selLang == "english") {
		if(count == 1) {
			get_id.innerHTML = "<img class='base_10_pieces' src='assets/images/base10_images/023_base-10_pieces.png' width='360' height='234'/>";
		} else if(count == 2) {
			get_id.innerHTML = "<img class='base_10_pieces' src='assets/images/base10_images/023_base-10_pieces1.png' width='360' height='234'/>";
		} else if(count == 3) {

			get_id.innerHTML = "<img class='base_10_pieces' src='assets/images/base10_images/023_base-10_pieces2.png' width='360' height='234'/>";
		} else {
			count = 0;
			get_id.innerHTML = "";
		}
	} else if(selLang == "spanish") {
		if(count == 1) {
			get_id.innerHTML = "<img class='base_10_pieces' src='assets/images/base10_images/023_base-10_pieces_s.png' width='360' height='234'/>";
		} else if(count == 2) {
			get_id.innerHTML = "<img class='base_10_pieces' src='assets/images/base10_images/023_base-10_pieces1_s.png' width='360' height='234'/>";
		} else if(count == 3) {

			get_id.innerHTML = "<img class='base_10_pieces' src='assets/images/base10_images/023_base-10_pieces2_s.png' width='360' height='234'/>";
		} else {
			count = 0;
			get_id.innerHTML = "";
		}
	}

	base_10_pieces(count);
}

/*base_10_pieces Ends*/

/* expanded form starts */
function expanded_form(a) {

	if(a == 0) {
		englishTerm = "expanded form";
		spanishTerm = "forma extendida";
		englishDef = "a way to write a number that shows the place value";
		spanishDef = "una manera de escribir un número que muestra el valor posicional";
		showTermDefinition();
	}
	//timer_1 = setTimeout("expanded_form_extend(" + a + ")", 800);
}

function expanded_form_extend(e) {
	var count = parseInt(e);
	count++;
	if(count <= 5) {
		document.getElementById('animation').innerHTML = "<img class='expandedform_1' src='assets/images/expanded_form_img/116_expandedform"+count+".png'/>";
	} else {
		document.getElementById('animation').innerHTML = "";
		count = 0;
	}
		expanded_form(count);
}


/* expanded form ends */


/* expanded_notations begins */

function expanded_notation(a) {
	if(a == 0) {
		englishTerm = "expanded notation";
		spanishTerm = "notación extendida";
		englishDef = "a form of notation in which a number is written as the sum of the values of its digits";
		spanishDef = "una forma de notación en la que un número se escribe como la suma de los valores de sus dígitos";
		showTermDefinition();
	}
	//timer_1 = setTimeout("expanded_notation_extd(" + a + ")", 1000);
}

function expanded_notation_extd(e) {
	var cont = parseInt(e);

	if(cont == 0)
		document.getElementById('animation').innerHTML = "<img src='assets/images/expanded_notation_images/117_expanded-notation.png' class='expanded_notation'/>";
	else if(cont == 1) {
		document.getElementById('animation').innerHTML = "<img src='assets/images/expanded_notation_images/117_expanded-notation1.png' class='expanded_notation'/>";
	} else if(cont == 2) {
		document.getElementById('animation').innerHTML = "<img src='assets/images/expanded_notation_images/117_expanded-notation2.png' class='expanded_notation'/>";
	} else if(cont == 3) {
		document.getElementById('animation').innerHTML = "<img src='assets/images/expanded_notation_images/117_expanded-notation3.png' class='expanded_notation'/>";
	} else if(cont == 4) {
		document.getElementById('animation').innerHTML = "<img src='assets/images/expanded_notation_images/117_expanded-notation4.png' class='expanded_notation'/>";
	} else if(cont == 5) {
		document.getElementById('animation').innerHTML = "<img src='assets/images/expanded_notation_images/117_expanded-notation5.png' class='expanded_notation'/>";
	} else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	cont = parseInt(e) + 1;

	expanded_notation(cont);
}

/* expanded_notations ends */


/*equivalent fractions Begins*/

function equivalent_fractions(a) {

	if(a == 0) {
		englishTerm = "equivalent fractions";
		spanishTerm = "fracciones equivalentes";
		englishDef = "fractions that represent or name the same number";
		spanishDef = "fracciones que representan o nombran el mismo número";
		showTermDefinition();
	}
	//timer_1 = setTimeout("equivalent_fractions_extd(" + a + ")", 1000);
}

function equivalent_fractions_extd(e) {
	var count = parseInt(e);
	count++;
	if(count <= 5) {
		document.getElementById('animation').innerHTML = "<img class='equ_frac1' src='assets/images/equ_fract_images/110_equivalentfractions"+count+".png'/>";
	} else {
		document.getElementById('animation').innerHTML = "";
		count = 0;
	}
		equivalent_fractions(count);
}

/*equivalent fractions Ends*/

/*exponent Begins*/
function exponent(a) {

	if(a == 0) {
		englishTerm = "exponent";
		spanishTerm = "exponente";
		englishDef = "a number that indicates how many times a base is used as a factor in repeated multiplication";
		spanishDef = "un número que indica cuántas veces se usa una base como factor en una multiplicación repetida";
		showTermDefinition();
	}
	if(a != 2) {
		//timer_1 = setTimeout("exponent_extd(" + a + ")", 1000)
	} else {
		//timer_1 = setTimeout("exponent_extd(" + a + ")", 1500)
	}
}

function exponent_extd(e) {
		var count = parseInt(e);
		count++;
		if(count==1) {
			document.getElementById('animation').innerHTML = "<img class='exponent_1' src='assets/images/exponent_images_new/119_exponent"+count+".png'/>";
		}else if(count<=2){
			if(selLang == "english"){
				document.getElementById('animation').innerHTML = "<img class='exponent_1' src='assets/images/exponent_images_new/119_exponent"+count+".png'/>";
			}else{
				document.getElementById('animation').innerHTML = "<img class='exponent_1' src='assets/images/exponent_images_new/119_exponentsp"+count+".png'/>";
			}
		}
		  else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
	
	exponent(count);
}
/*exponent Ends*/
/* d_notations begins */

function d_notation(a) {
	if(a == 0) {
		englishTerm = "d notation";
		spanishTerm = "notación extendida";
		englishDef = "a form of notation in which a number is written as the sum of the values of its digits";
		spanishDef = "una forma de notación en la que un número se escribe como la suma de los valores de sus dígitos";
		showTermDefinition();
	}
	//timer_1 = setTimeout("d_notation_extd(" + a + ")", 1000);
}

function d_notation_extd(e) {
	var cont = parseInt(e);

	if(cont == 0)
		document.getElementById('animation').innerHTML = "<img src='assets/images/d_notation_images/117_d-notation.png' />";
	else if(cont == 1) {
		document.getElementById('animation').innerHTML = "<img src='assets/images/d_notation_images/117_d-notation1.png' />";
	} else if(cont == 2) {
		document.getElementById('animation').innerHTML = "<img src='assets/images/d_notation_images/117_d-notation2.png' />";
	} else if(cont == 3) {
		document.getElementById('animation').innerHTML = "<img src='assets/images/d_notation_images/117_d-notation3.png' />";
	} else if(cont == 4) {
		document.getElementById('animation').innerHTML = "<img src='assets/images/d_notation_images/117_d-notation4.png' />";
	} else if(cont == 5) {
		document.getElementById('animation').innerHTML = "<img src='assets/images/d_notation_images/117_d-notation5.png' />";
	} else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	cont = parseInt(e) + 1;

	d_notation(cont);
}

/* d_notations ends */

/*--d_form_extend--*/
function d_form_extend(e) {

	var num = "572";
	var cont = parseInt(e);
	var numLen = num.length;
	var Fval = "";
	var Down = "";
	if(cont == 0) {
		document.getElementById('animation').innerHTML = "<div class='d_top label_font_regular'>" + num + "</div>";
	}
	cont = parseInt(e) + 1;

	if(cont == 2) {
		for(var i = 0; i < numLen; i++) {
			if( i = 3) {
				Fval = num[0] + "00";
				Down = "<div class='d_down label_font_regular' >" + Fval + "</div>";
				document.getElementById('animation').innerHTML = "<div class='d_top label_font_regular'><span class='d_bgcolor' >" + num[0] + "</span>" + num[1] + num[2] + "</div>" + Down;
			}

		}
	}

	if(cont == 3) {
		for(var i = 0; i < numLen; i++) {
			if(i == 2) {
				Fval = "500 + " + num[1] + "0";
				Down = "<div class='d_down label_font_regular'>" + Fval + "</div>";
				document.getElementById('animation').innerHTML = "<div class='d_top label_font_regular'>" + num[0] + "<span class='d_bgcolor' >" + num[1] + "</span>" + num[2] + "</div>" + Down;
			}

		}
	}

	if(cont == 4) {
		for(var i = 0; i < numLen; i++) {
			if(i == 1) {
				Fval = "500 + 70 + " + num[2];
				Down = "<div class='d_down label_font_regular'>" + Fval + "</div>";
				document.getElementById('animation').innerHTML = "<div class='d_top label_font_regular'>" + num[0] + num[1] + "<span class='d_bgcolor' >" + num[2] + "</span>" + "</div>" + Down;
			}

		}
	}
	if(cont == 5) {
		for(var i = 0; i < numLen; i++) {
			if(i == 1) {
				Fval = "500 + 70 + 2"
				Down = "<div class='d_down label_font_regular' >" + Fval + "</div>";
				document.getElementById('animation').innerHTML = "<div class='d_top label_font_regular'>" + num[0] + num[1] + num[2] + "</div>" + Down;
			}

		}
	}
	if(cont == 6) {
		cont = 0;
		document.getElementById('animation').innerHTML = "";

	}

	d_form(cont);
}

function d_form(a) {

	if(a == 0) {
		englishTerm = "d form";
		spanishTerm = "forma extendida";
		englishDef = "a way to write a number that shows the place value";
		spanishDef = "una manera de escribir un número que muestra el valor posicional";
		showTermDefinition();
	}
	//timer_1 = setTimeout("d_form_extend(" + a + ")", 800);
}

/*--------end-----------*/

/*equivalent ratios Begins*/

function equivalent_ratios(a) {

	if(a == 0) {
		englishTerm = "equivalent ratios";
		spanishTerm = "razones equivalentes";
		englishDef = "ratios that can be written as equivalent fractions";
		spanishDef = "razones que pueden escribirse como fracciones equivalentes";
		showTermDefinition();
	}
	//timer_1 = setTimeout("equivalent_ratios_extd(" + a + ")", 750)
}

function equivalent_ratios(a) {

	if(a == 0) {
		englishTerm = "equivalent ratios";
		spanishTerm = "razones equivalentes";
		englishDef = "ratios that can be written as equivalent fractions";
		spanishDef = "razones que pueden escribirse como fracciones equivalentes";
		showTermDefinition();
	}
	//timer_1 = setTimeout("equivalent_ratios_extd(" + a + ")", 750)
}

function equivalent_ratios_extd(e) {
		var count = parseInt(e);
		count++;
		if(count<=5) {
			document.getElementById('animation').innerHTML = "<img class='equiv_ratios_1' src='assets/images/equivalent_ratios_images/112_equivalentratios"+count+".png'/>";
		}
		  else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
	
	equivalent_ratios(count);
}

/*equivalent ratios Ends*/


/* equation */
function equation(a) {
	if(a == 0) {
		englishTerm = "equation";
		spanishTerm = "ecuación";
		englishDef = "a mathematical sentence formed by placing an equal sign between two expressions";
		spanishDef = "un enunciado matemático que se forma al poner un signo de igual entre dos expresiones";
		showTermDefinition();
	}
	//timer_1 = setTimeout("equation_extd(" + a + ")", 1000);
}

function equation_extd(e) {
	var cnt = parseInt(e);
	var equation_div = document.getElementById('animation');
	cnt++;
	
	if(cnt == 1) {
		equation_div.innerHTML = "<div id='equation_image'> <img  src='assets/images/equation_imge/108_equation1.png'> </div>"; 
	} 
	else if(cnt > 1 && cnt < 6) {
		if(selLang=="english"){
			equation_div.innerHTML = "<div id='equation_image'> <img  src='assets/images/equation_imge/108_equation"+ parseInt(cnt)+".png'> </div>";
		}
		else
		{
			equation_div.innerHTML = "<div id='equation_image'> <img  src='assets/images/equation_imge/108_equationsp"+ parseInt(cnt)+".png'> </div>";
		}
	}  
	else if(cnt == 6) {
		cnt = 0;
		equation_div.innerHTML = '';
	}
	equation(cnt);
}

/*equation*/

/*equilateral triangle*/

function equilateral_triangle(a) {
	if(a == 0) {
		englishTerm = "equilateral triangle";
		spanishTerm = "triángulo equilátero";
		englishDef = "a triangle with three congruent sides";
		spanishDef = "un triángulo con tres lados congruentes";
		showTermDefinition();
	}
	//timer_1 = setTimeout("equilateral_triangle_extd(" + a + ")", 1200);

}

function equilateral_triangle_extd(e) {
	var cnt = parseInt(e);
	var equilateral_div = document.getElementById('animation');
	cnt++;
	if(selLang=="english"){
	if(cnt == 1) {
		equilateral_div.innerHTML = "<img class='equilateral_tri1' src='assets/images/equlilateral_triangle/109_equilateraltriangle1.png'/>";
	} else if(cnt == 2) {
		equilateral_div.innerHTML = "<img class='equilateral_tri1' src='assets/images/equlilateral_triangle/109_equilateraltriangle2.png'/>";
	} else if(cnt == 3) {
		equilateral_div.innerHTML = "<img class='equilateral_tri1' src='assets/images/equlilateral_triangle/109_equilateraltriangle3.png'/>";
	} else if(cnt == 4) {
		equilateral_div.innerHTML = "<img class='equilateral_tri1' src='assets/images/equlilateral_triangle/109_equilateraltriangle4.png'/>";
	} else if(cnt == 5) {
		equilateral_div.innerHTML = "<img class='equilateral_tri1' src='assets/images/equlilateral_triangle/109_equilateraltriangle5.png'/>";
	} else if(cnt == 6) {
		cnt = 0;
		equilateral_div.innerHTML = '';
	}
	}
	else{
		if(cnt == 1) {
		equilateral_div.innerHTML = "<img class='equilateral_tri1' src='assets/images/equlilateral_triangle/109_equilateraltriangle1.png'/>";
	} else if(cnt == 2) {
		equilateral_div.innerHTML = "<img class='equilateral_tri1' src='assets/images/equlilateral_triangle/109_equilateraltriangle2.png'/>";
	} else if(cnt == 3) {
		equilateral_div.innerHTML = "<img class='equilateral_tri1' src='assets/images/equlilateral_triangle/109_equilateraltriangle3.png'/>";
	} else if(cnt == 4) {
		equilateral_div.innerHTML = "<img class='equilateral_tri1' src='assets/images/equlilateral_triangle/109_equilateraltrianglesp4.png'/>";
	} else if(cnt == 5) {
		equilateral_div.innerHTML = "<img class='equilateral_tri1' src='assets/images/equlilateral_triangle/109_equilateraltrianglesp5.png'/>";
	}  else if(cnt == 6) {
		cnt = 0;
		equilateral_div.innerHTML = '';
	}
	}
	equilateral_triangle(cnt);
}
/*end equilateral triangle*/


/*Edge 103*/
function edge(a) {
	if(a == 0) {
		englishTerm = "edge";
		spanishTerm = "arista";
		englishDef = "a line segment where two faces of a three-dimensional figure meet";
		spanishDef = "un segmento de recta en el que se unen dos caras de una figura tridimensional";
		showTermDefinition();
	}
	var s = parseInt(a);
	if(a <= 4) {
		//timer_1 = setTimeout("edge_extd(" + a + ")", 1000);
	} else if(a == 5) {
		//timer_1 = setTimeout("edge_extd(" + a + ")", 1500);
	}
}

function edge_extd(e) {
	var d = parseInt(e);
	if(e == 0) {
		document.getElementById('animation').innerHTML = "<img class='edge_image' src='assets/images/edge_image/103_edge1.png'/>";
	} else if(e == 1) {
		if(selLang == "english") {
			document.getElementById('animation').innerHTML = "<img class='edge_image' src='assets/images/edge_image/103_edge2.png'/>";
		} else if(selLang == "spanish") {
			document.getElementById('animation').innerHTML = "<img class='edge_image' src='assets/images/edge_image/103_edgesp2.png'/>";
		}
	} else if(e == 2) {
		if(selLang == "english") {
			document.getElementById('animation').innerHTML = "<img class='edge_image' src='assets/images/edge_image/103_edge3.png'/>";
		} else if(selLang == "spanish") {
			document.getElementById('animation').innerHTML = "<img class='edge_image' src='assets/images/edge_image/103_edgesp3.png'/>";
		}
	} else if(e == 3) {
		if(selLang == "english") {
			document.getElementById('animation').innerHTML = "<img class='edge_image' src='assets/images/edge_image/103_edge4.png'/>";
		} else if(selLang == "spanish") {

			document.getElementById('animation').innerHTML = "<img class='edge_image' src='assets/images/edge_image/103_edgesp4.png'/>";
		}
	} else if(e == 4) {
		if(selLang == "english") {
		document.getElementById('animation').innerHTML = "<img class='edge_image' src='assets/images/edge_image/103_edge5.png'/>";
		} else if(selLang == "spanish") {
			document.getElementById('animation').innerHTML = "<img class='edge_image' src='assets/images/edge_image/103_edgesp5.png'/>";
		}
	} else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	d = parseInt(e) + 1;
	edge(d);
}


/* equal bar */
function equal_bar(a) {
	if(a == 0) {
		englishTerm = "equal bar";
		spanishTerm = "barra de igual";
		englishDef = "the line under an arithmetic problem when the numbers are written one on top of the other";
		spanishDef = "línea que va debajo de un problema de suma cuando los sumandos están unos encima de otros";
		showTermDefinition();
	}
	//timer_1 = setTimeout("equal_bar_extd(" + a + ")", 1000);
}

function equal_bar_extd(e) {
	var cnt = parseInt(e);
	var equal_bar_div = document.getElementById('animation');
	cnt++;
	if(cnt == 1) {
		equal_bar_div.innerHTML = "<div class='equation_bar_class'><img src='assets/images/equation_bar_img/106_equalbar1.png'/> </div>";
	} else if(cnt == 2) {
		if(selLang=="english"){
		equal_bar_div.innerHTML = "<div class='equation_bar_class'><img src='assets/images/equation_bar_img/106_equalbar2.png'/></div>";
		}
		else{
			equal_bar_div.innerHTML = "<div class='equation_bar_class'><img src='assets/images/equation_bar_img/106_equalbarsp2.png'/></div>";
		}
	} else if(cnt == 3) {
		if(selLang=="english"){
		equal_bar_div.innerHTML = "<div class='equation_bar_class'><img src='assets/images/equation_bar_img/106_equalbar3.png'/></div>";
		}else{
			equal_bar_div.innerHTML = "<div class='equation_bar_class'><img src='assets/images/equation_bar_img/106_equalbarsp3.png'/></div>";
		}
	} else if(cnt == 4) {
		cnt = 0;
		equal_bar_div.innerHTML = '';
	}
	equal_bar(cnt);
}
/*-----*/


/* equal sign begins */

function equal_sign(a) {
	if(a == 0) {
		englishTerm = "equal sign";
		spanishTerm = "signo de igual";
		englishDef = "a symbol that shows that the amounts on both sides of a number sentence are the same";
		spanishDef = "símbolo que indica que las cantidades de ambos lados de un enunciado numérico son iguales";
		showTermDefinition();
	}
	//timer_1 = setTimeout("equal_sign_extd(" + a + ")", 1000);
}

function equal_sign_extd(e) {
	
	var count = parseInt(e);

	if(e == 0)
		document.getElementById('animation').innerHTML = "<div class='equal_sign_values'><img src='assets/images/equal_sign_images/107_equalsign1.png'/></div><br/>";
	else if(e == 1 || e==2) {
		
		if(selLang=="english"){
			document.getElementById('animation').innerHTML = "<div class='equal_sign_values'><img src='assets/images/equal_sign_images/107_equalsign"+ parseInt(count+1)+".png'/></div>";
		}
		else{
			document.getElementById('animation').innerHTML = "<div class='equal_sign_values'><img src='assets/images/equal_sign_images/107_equalsignsp"+ parseInt(count+1)+".png'/></div>";
		}
	}
	else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	count = parseInt(e) + 1;

	equal_sign(count);
}
/* equal sign ends */

/* estimate */
function estimate(a) {
	if(a == 0) {
		englishTerm = "estimate";
		spanishTerm = "estimar";
		englishDef = "to find about how many or an answer that is close to the exact answer";
		spanishDef = "averiguar una cantidad o un resultado que se acerca a la respuesta exacta";
		showTermDefinition();
	}
	if(a != 6) {
		//timer_1 = setTimeout("estimate_extd(" + a + ")", 850);
	} else {
		//timer_1 = setTimeout("estimate_extd(" + a + ")", 1300);
	}

}


function estimate_extd(e) {
	var cnt = parseInt(e);
	var estimate_div = document.getElementById('animation');
	cnt++;
	if(selLang=="english"){
	if(cnt == 1) {
		estimate_div.innerHTML = "<img class='estimate_1' src='assets/images/estimate_image/113_estimate1.png'/>"
	} else if(cnt == 2) {
		estimate_div.innerHTML = "<img class='estimate_1' src='assets/images/estimate_image/113_estimate2.png'/>";
	} else if(cnt == 3) {
		estimate_div.innerHTML = "<img class='estimate_1' src='assets/images/estimate_image/113_estimate3.png'/>";
	} else if(cnt == 4) {
		estimate_div.innerHTML = "<img class='estimate_1' src='assets/images/estimate_image/113_estimate4.png'/>";
	} else if(cnt == 5) {
		estimate_div.innerHTML = "<img class='estimate_1' src='assets/images/estimate_image/113_estimate5.png'/>";
	} else if(cnt == 6) {
		estimate_div.innerHTML = "<img class='estimate_1' src='assets/images/estimate_image/113_estimate6.png'/>";
	} else if(cnt == 7) {
		cnt = 0;
		estimate_div.innerHTML = '';
	}
	}
	else{
		if(cnt == 1) {
		estimate_div.innerHTML = "<img class='estimate_1' src='assets/images/estimate_image/113_estimate1.png'/>"
	} else if(cnt == 2) {
		estimate_div.innerHTML = "<img class='estimate_1' src='assets/images/estimate_image/113_estimate2.png'/>";
	} else if(cnt == 3) {
		estimate_div.innerHTML = "<img class='estimate_1' src='assets/images/estimate_image/113_estimatesp3.png'/>";
	} else if(cnt == 4) {
		estimate_div.innerHTML = "<img class='estimate_1' src='assets/images/estimate_image/113_estimate4.png'/>";
	} else if(cnt == 5) {
		estimate_div.innerHTML = "<img class='estimate_1' src='assets/images/estimate_image/113_estimate5.png'/>";
	} else if(cnt == 6) {
		estimate_div.innerHTML = "<img class='estimate_1' src='assets/images/estimate_image/113_estimatesp6.png'/>";
	} else if(cnt == 7) {
		cnt = 0;
		estimate_div.innerHTML = '';
	}
	}
	estimate(cnt);
}

/*------ends----*/

/* event starts*/
function event(a) {
	if(a == 0) {
		englishTerm = "event";
		spanishTerm = "evento";
		englishDef = "something that happens";
		spanishDef = "algo que ocurre";
		showTermDefinition();
	}
	//timer_1 = setTimeout("event_extd(" + a + ")", 1000);
}

function event_extd(e) {
	var cont = parseInt(e);
	if(cont == 0)
		document.getElementById('animation').innerHTML = '<div><img src="assets/images/event_images/complement1.png" id="event_img" /><img src="assets/images/event_images/complement_ball.png" id="event_ball_img" /></div>';
	else if(e == 1) {
		document.getElementById('animation').innerHTML = '<div><img src="assets/images/event_images/complement1.png" id="event_img" /><img src="assets/images/event_images/complement_ball.png" id="event_ball_img" /></div>';
		if(selLang == "english") {
			document.getElementById('animation').innerHTML += '<div class="event_label label_font_semibold">drawing one red marble</div>';
		} else if(selLang == "spanish") {
			document.getElementById('animation').innerHTML += '<div class="event_label_spanish label_font_semibold">elaboración de un mármol rojo</div>';
		}

		$('#event_ball_img').animate({
			top : -10
		});
	} else if(e == 2) {
		document.getElementById('animation').innerHTML = '<div><img src="assets/images/event_images/nickel.png" id="event_nickel_img" /></div>';
	} else if(e == 3) {
		document.getElementById('animation').innerHTML = '<div><img src="assets/images/event_images/nickel.png" id="event_nickel_img" /></div>';
		$('#event_nickel_img').animate({
			height : 1
		}, 80, function() {
			$('#event_nickel_img').animate({
				top : 48,
				height : 66
			}, 80, function() {
				$('#event_nickel_img').animate({
					height : 1
				}, 80, function() {
					$('#event_nickel_img').animate({
						top : -18,
						height : 66
					}, 80, function() {
						$('#event_nickel_img').animate({
							height : 1
						}, 80, function() {
							$('#event_nickel_img').animate({
								bottom : 142,
								height : 66
							}, 80, function() {
								$('#event_nickel_img').animate({
									marginTop : '66px',
									height : 1
								}, 80, function() {
									$('#event_nickel_img').animate({
										bottom : 66,
										height : 66
									}, 80, function() {
										$('#event_nickel_img').animate({
											marginTop : '142px',
											height : 1
										}, 80, function() {
											$('#event_nickel_img').animate({
												bottom : 0,
												height : 66
											}, function() {
												if(selLang == "english") {
													document.getElementById('animation').innerHTML += '<div class="event_label label_font_semibold">a coin landing on heads</div>';
												} else if(selLang == "spanish") {
													document.getElementById('animation').innerHTML += '<div class="event_label_nickel label_font_semibold">una moneda caiga sobre las cabezas</div>';
												}

											});
										});
									});
								});
							});
						});
					});
				});
			});
		});
	} else if(e == 4)
		setTimeout("", 1300);
	else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	cont = parseInt(e) + 1;
	event(cont);
}

/* event  ends */







/*first_quartile*/
function first_quartile(a) {
	if(a == 0) {
		englishTerm = "first quartile";
		spanishTerm = "primer cuartil";
		englishDef = "the median of the lower half of a data set; also called the lower quartile";
		spanishDef = "la mediana de la mitad inferior de un conjunto de datos; también conocido como cuartil inferior";
		showTermDefinition();
	}
	//timer_1 = setTimeout("first_quartile_extd(" + a + ")", 1500);
}

function first_quartile_extd(e) {
		var count = parseInt(e);
		count++;
		if(count<=2) {
			document.getElementById('animation').innerHTML = "<img src='assets/images/first_quartile_image/129_firstquartile"+count+".png'/>";
		}else if(count==3){
			if(selLang == "english"){
				document.getElementById('animation').innerHTML = "<img src='assets/images/first_quartile_image/129_firstquartile"+count+".png'/>";
			}else{
				document.getElementById('animation').innerHTML = "<img src='assets/images/first_quartile_image/129_firstquartilesp"+count+".png'/>";
			}
		}
		  else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
	
	first_quartile(count);
}

/*end first quartile*/

/* flip starts */
function flip(a) {
	if(a == 0) {
		englishTerm = "flip";
		spanishTerm = "volteo";
		englishDef = "to turn a figure over a line; a mirror image";
		spanishDef = "darle la vuelta a una figura sobre una recta; una imagen de espejo";
		showTermDefinition();
	}
	//timer_1 = setTimeout("flip_extd(" + a + ")", 1000);
}

function flip_extd(e) {
	var cnt = parseInt(e);
	var flip_div = document.getElementById('animation');
	cnt++;
	if(cnt == 1) {
		flip_div.innerHTML = "<div class='flip_class'><img src='assets/images/flip_image/130_flip_4.png' width='167'/></div></div>";
	} else if(cnt == 2) {
		flip_div.innerHTML = "<div class='flip_class'><img src='assets/images/flip_image/130_flip_4.png' width='167'/><img  id='flip_image' height='75' width='0' src='assets/images/flip_image/130_flip_3.png'/><div id='flip_redline'></div></div>";
		//$('#flip_redline').css('display','none')
		$('#flip_redline').animate({
			height : 128,
			/*width : '0px'*/
		}, 1000, function() {
			$('#flip_image').animate({
				left : '197px',
				width : '167px'
			}, 1500)
		});
	} else if(cnt == 5) {
		cnt = 0;
		flip_div.innerHTML = '';
	}
	flip(cnt);

}
/* flip ends */


/* foot begins */

function foot(a) {
	if(a == 0) {
		englishTerm = "foot";
		spanishTerm = "pie";
		englishDef = "a customary unit for measuring length";
		spanishDef = "unidad estándar para medir longitud";
		replayAnimation = 1;
		showTermDefinition();
	}
	//timer_1 = setTimeout("foot_extd(" + a + ")", 1000);
}

function foot_extd(e) {
	var cont = parseInt(e);
	if(e < 3)
	{
		document.getElementById('animation').innerHTML = "<div class='foot_txt'><img src='assets/images/foot_images/131_foot"+parseInt(cont+1)+".png' /></div>"; 
	}
	else if(e==3)
	{
		if(selLang == "english") {
			document.getElementById('animation').innerHTML = "<div class='foot_txt'><img src='assets/images/foot_images/131_foot4.png' /></div>";
		} else {
			document.getElementById('animation').innerHTML = "<div class='foot_txt'><img src='assets/images/foot_images/131_footsp4.png' /></div>";
		}
	}
	cont = parseInt(e) + 1;
	foot(cont);
}

/* foot ends */


/* fourth  starts  */
function fourth_extd(e) {
	var display = new Array();

	if(e == 0) {
		document.getElementById('animation').innerHTML = "<div class='fourth_sub '><img src='assets/images/fourth_images/132_fourth1.png'/></div>";
	} else if(e == 1) {
		document.getElementById('animation').innerHTML = "<div class='fourth_sub '><img src='assets/images/fourth_images/132_fourth2.png'/></div>";
	} else if(e == 2) {
		if(selLang == "english") {
		
			document.getElementById('animation').innerHTML = "<div class='fourth_sub '><img src='assets/images/fourth_images/132_fourth3.png'/></div>";
		}
		else
		{
			document.getElementById('animation').innerHTML = "<div class='fourth_sub '><img src='assets/images/fourth_images/132_fourthsp3.png'/></div>";
		}
	} else if(e == 3) {
		document.getElementById('animation').innerHTML = "";
	} else {
		e = -1;
	}
	cont = parseInt(e) + 1;
	fourth(cont);
}

function fourth(a) {
	var a = parseInt(a);
	if(a == 0) {
		englishTerm = "fourth (fourths)";
		spanishTerm = "cuarto (cuartos)";
		englishDef = "1 of 4 equal parts";
		spanishDef = "1 de 4 partes iguales";
		showTermDefinition();
	}
	////timer_1 = setTimeout("fourth_extd(" + a + ")", 1000);
	/*if(a == 3)
		//timer_1 = setTimeout("fourth_extd(" + a + ")", 950);
	else
		//timer_1 = setTimeout("fourth_extd(" + a + ")", 1000);*/
}

/* fourth ends  */



/* fraction  starts  */
function fraction_extd(e) {
	var display = new Array();

	if(e == 0) {
		document.getElementById('animation').innerHTML = "<div class='fraction_sub1'><img src='assets/images/fraction_images/367_third.png'/></div>";
	} else if(e == 1) {
		document.getElementById('animation').innerHTML = "<div class='fraction_sub'><img src='assets/images/fraction_images/133_1_fraction.png'/></div>"; 
	} else if(e == 2) {
		document.getElementById('animation').innerHTML = "<div class='fraction_sub3'><img src='assets/images/fraction_images/133_2_fraction.png'/></div>";
	} else {
			document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	cont = parseInt(e) + 1;
	fraction(cont);
}

function fraction(a) {
	var a = parseInt(a);
	if(a == 0) {
		englishTerm = "fraction";
		spanishTerm = "fracción";
		englishDef = "a number that names part of a whole or part of a set";
		spanishDef = "un número que nombra parte de un entero o parte de un conjunto";
		showTermDefinition();
	}
	//timer_1 = setTimeout("fraction_extd(" + a + ")", 2000);
}

/* fraction ends  */

/*134_fraction_bar*/
function fraction_bar(a) {
	if(a == 0) {
		englishTerm = "fraction bar";
		spanishTerm = "barra de fracción";
		englishDef = "a model that shows one of the equal parts in one whole";
		spanishDef = "un modelo que muestra una de las partes iguales que conforman un entero";
		showTermDefinition();
	}
	//timer_1 = setTimeout("fraction_bar_extd(" + a + ")", 3000);
}

function fraction_bar_extd(e) {
	var d = parseInt(e);
	if(e == 0) {
		document.getElementById('animation').innerHTML = "<div class='frac_bar'><img src='assets/images/fractionbar_img/134_fractionbar1.png'/></div>";
	} else if(e == 1) {
		if(selLang == "english") {
			document.getElementById('animation').innerHTML = "<div class='frac_bar'><img src='assets/images/fractionbar_img/134_fractionbar2.png'/></div>";
		} else {
			document.getElementById('animation').innerHTML = "<div class='frac_bar'><img src='assets/images/fractionbar_img/134_fractionbarsp2.png'/></div>";
		}
	} else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	d = parseInt(e) + 1;

	fraction_bar(d);
}

/*end 134_fraction_bar*/


/* fraction circle  starts  */
function fraction_circle_extd(e) {
	var cnt = parseInt(e);
	if(e == 0) {
		document.getElementById('animation').innerHTML = "<div id='fraction_circle_sub'><img src='assets/images/fraction_circle_images/135_fractioncircle1.png'/></div>"; 
	} 
	else if(e>0 && e < 6 && selLang == "english") {
		document.getElementById('animation').innerHTML = "<div id='fraction_circle_sub'><img src='assets/images/fraction_circle_images/135_fractioncircle"+parseInt(cnt+1)+".png'/></div>";
	}
	else if(e>0 && e < 6 && selLang == "spanish") {
		document.getElementById('animation').innerHTML = "<div id='fraction_circle_sub'><img src='assets/images/fraction_circle_images/135_fractioncirclesp"+parseInt(cnt+1)+".png'/></div>";

	} else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	cont = parseInt(e) + 1;
	fraction_circle(cont);
}

function fraction_circle(a) {
	var a = parseInt(a);
	if(a == 0) {
		englishTerm = "fraction circle";
		spanishTerm = "círculo de fracción";
		englishDef = "a model that shows the equal parts in one whole circle";
		spanishDef = "un modelo que muestra las partes iguales de un círculo entero";
		showTermDefinition();
	}
	//timer_1 = setTimeout("fraction_circle_extd(" + a + ")", 857);
}

/* fraction circle ends  */

/* fraction strip starts */

function fraction_strip(a) {
	if(a == 0) {
		englishTerm = "fraction strip";
		spanishTerm = "tira de fracción";
		englishDef = "a model that shows the equal parts in one whole";
		spanishDef = "un modelo que muestra las partes iguales de un entero";
		showTermDefinition();
	}
	//timer_1 = setTimeout("fraction_strip_extd(" + a + ")", 1000);
}

function fraction_strip_extd(e) {
	var cnt = parseInt(e);
	var fraction_strip_div = document.getElementById('animation');
	cnt++;
	if(cnt == 1) {
		fraction_strip_div.innerHTML = "<div class='fraction_strip_clss '><img src='assets/images/fraction_strip_img/136_fractionstrip1.png' /></div>";
	} 
	else if(cnt>1 && cnt < 6) {
		if(selLang == "english") {
			fraction_strip_div.innerHTML = "<div class='fraction_strip_clss '><img src='assets/images/fraction_strip_img/136_fractionstrip"+cnt+".png' /></div>";
		} else {
			fraction_strip_div.innerHTML = "<div class='fraction_strip_clss '><img src='assets/images/fraction_strip_img/136_fractionstripsp"+cnt+".png' /></div>";
		}
	} 
	else {
		cnt = 0;
		fraction_strip_div.innerHTML = "";
	}
	fraction_strip(cnt);
}

/* end fraction strip */
/* frequency  starts  */
function frequency_extd(e) {
	var display = new Array();
	if(e == 0) {
		document.getElementById('animation').innerHTML = "<div id='frequency_sub'><img src='assets/images/frequency_images/138_frequency table_1.png'/></div>";
	} else if(e == 1) {
		document.getElementById('animation').innerHTML = "<div id='frequency_sub'><img src='assets/images/frequency_images/138_frequency table.png'/></div>";
	} else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	cont = parseInt(e) + 1;
	frequency(cont);
}

function frequency(a) {
	var a = parseInt(a);
	if(a == 0) {
		englishTerm = "frequency";
		spanishTerm = "frecuencia";
		englishDef = "the number of times something happens ";
		spanishDef = "el número de veces que ocurre algo";
		showTermDefinition();
	}
	//timer_1 = setTimeout("frequency_extd(" + a + ")", 2000);

}

/* frequency ends  */

/* frequency table*/
function frequency_table(a) {
	if(a == 0) {
		englishTerm = "frequency table";
		spanishTerm = "tabla de frecuencias";
		englishDef = " a chart in which data are organized into equal intervals and the number of items in each interval is shown";
		spanishDef = "una tabla en la que los datos se organizan en intervalos iguales y se muestra el número de elementos de cada intervalo";
		showTermDefinition();
	}
	if(a != 3) {
		//timer_1 = setTimeout("frequency_table_extd(" + a + ")", 1000);
	} else {
		//timer_1 = setTimeout("frequency_table_extd(" + a + ")", 1500);
	}
}

function frequency_table_extd(e) {
	var cnt = parseInt(e);
	var frequency_table_div = document.getElementById('animation');
	cnt++;
	if(selLang == "english") {
		if(cnt == 1) {
			frequency_table_div.innerHTML = "<div class='frequency_table_div'><img src='assets/images/frequencytable_img/138_frequencytable.png' /></div>"
		} else if(cnt == 2) {
			frequency_table_div.innerHTML = "<div class='frequency_table_div'><img src='assets/images/frequencytable_img/138_frequencytable1.png' /></div>"
		} else if(cnt == 3) {
			frequency_table_div.innerHTML = "<div class='frequency_table_div'><img src='assets/images/frequencytable_img/138_frequencytable2.png' /></div>"
		} else {
			cnt = 0;
			frequency_table_div.innerHTML = "";
		}
	} else {
		if(cnt == 1) {
			frequency_table_div.innerHTML = "<div class='frequency_table_div'><img src='assets/images/frequencytable_img/138_frequencytable_SP.png' /></div>"
		} else if(cnt == 2) {
			frequency_table_div.innerHTML = "<div class='frequency_table_div'><img src='assets/images/frequencytable_img/138_frequencytable_SP1.png' /></div>"
		} else if(cnt == 3) {
			frequency_table_div.innerHTML = "<div class='frequency_table_div'><img src='assets/images/frequencytable_img/138_frequencytable_SP2.png' /></div>"
		} else {
			cnt = 0;
			frequency_table_div.innerHTML = "";
		}
	}
	frequency_table(cnt);
}

/* end frequency table */

/* function begins */

function myfunction(a) {
	if(a == 0) {
		englishTerm = "function";
		spanishTerm = "función";
		englishDef = "a pairing of input and output values in which each input value is paired with exactly one output value";
		spanishDef = "un emparejamiento de valores de entrada y valores de salida en el que cada valor de entrada se empareja exactamente con un valor de salida";
		showTermDefinition();
	}
	//timer_1 = setTimeout("myfunction_extd(" + a + ")", 600);
}

function myfunction_extd(e) {


	var cont = parseInt(e);
	
	if(e < 9) {

		document.getElementById('animation').innerHTML = "<div class='function_img'><img src='assets/images/function_image/139_function"+parseInt(cont+1)+".png'></div>";

	}  else {
		document.getElementById('animation').innerHTML = "";
		e = -1;

	}
	cont = parseInt(e) + 1;

	myfunction(cont);
}

/* function ends */


/*Function rule*/

function function_rule(a) {
	if(a == 0) {
		englishTerm = "function rule";
		spanishTerm = "regla de función";
		englishDef = "an equation that shows how an input value and an output value are related";
		spanishDef = "una ecuación que muestra cómo se relacionan un valor de entrada y un valor de salida";
		showTermDefinition();
	}
	//timer_1 = setTimeout("function_rule_extd(" + a + ")", 1000);

}

function function_rule_extd(e) {
	var d = parseInt(e);
	if(e < 5 ) {
		document.getElementById('animation').innerHTML = "<div class='func_rule'><img src='assets/images/function_rule_images/140_functionrule"+parseInt(e+1)+".png'></div>";
	}  else if(e == 5) {
		if(selLang == "english") {
			document.getElementById('animation').innerHTML = "<div class='func_rule'><img src='assets/images/function_rule_images/140_functionrule6.png'></div>";
		} else if(selLang == "spanish") {
			document.getElementById('animation').innerHTML = "<div class='func_rule'><img src='assets/images/function_rule_images/140_functionrulesp6.png'></div>";
		}
	} else if(e == 6) {
		document.getElementById('animation').innerHTML = "";
	} else {
		e = -1;
	}
	d = parseInt(e) + 1;
	function_rule(d);
}

/* end Function rule * /



/* graph  starts  */
function graph_extd(e) {
	var display, fill_img;

	if(e < 16) {
		document.getElementById('animation').innerHTML = "<div id='graph_sub'><img  src='assets/images/graph_images/143_graph"+parseInt(e+1)+".png'></div>";
	} 
	else if(e==16 || e==17)
	{
		document.getElementById('animation').innerHTML = "<div id='graph_sub'><img src='assets/images/graph_images/143_graph16.png'></div>"; 
	}
	else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	cont = parseInt(e) + 1;
	graph(cont);
}

function graph(a) {
	var a = parseInt(a);
	if(a == 0) {
		englishTerm = "graph";
		spanishTerm = "gráfica";
		englishDef = "a chart that shows information";
		spanishDef = "una tabla que muestra información";
		showTermDefinition();
	}
	//timer_1 = setTimeout("graph_extd(" + a + ")", 375);
}
/* graph ends  */

/* gram begins */

function gram(a) {
	if(a == 0) {
		englishTerm = "gram";
		spanishTerm = "gramo";
		englishDef = "a metric unit that measures weight";
		spanishDef = "una unidad métrica que mide el peso";
		replayAnimation = 1;
		showTermDefinition();
	}
	//timer_1 = setTimeout("gram_extd(" + a + ")", 1000);
}

function gram_extd(e) {

	var arr = "<img  src='assets/images/gram_images/142_gram.png'>";
	var arr1 = "<img  src='assets/images/gram_images/142_gram2.png'>";
	var cont = parseInt(e);
	if(e == 0) {
		document.getElementById('animation').innerHTML += "<span class='gram_img1'>&nbsp;" + arr + "</span>";
	} else if(e == 1) {
		document.getElementById('animation').innerHTML = "<span class='gram_img1'>&nbsp;" + arr + "</span>";
		document.getElementById('animation').innerHTML += "<span class='gram_img2'>&nbsp;" + arr1 + "</span>";
	}
	cont = parseInt(e) + 1;
	gram(cont);
}

/* gram ends */


/* gallon begins */
function gallon(a) {
	if(a == 0) {
		englishTerm = "gallon";
		spanishTerm = "galón";
		englishDef = "a customary unit that measures capacity";
		spanishDef = "unidades estándar que mide la capacidad";
		showTermDefinition();
	}
	//timer_1 = setTimeout("gallon_extd(" + a + ")", 500);
}

function gallon_extd(e) {
	var arr = "<img  class = 'gallon_img' src='assets/images/gallon_images/gallon.png'>";
	var arr6 = "<img  class = 'gallon_img' src='assets/images/gallon_images/141_gallon_txt.png'>";
	var arr1 = "<img  id = 'bc' class = 'gallon_img1' src='assets/images/gallon_images/quart.png'>";
	var arr2 = "<img id = 'bc1' class = 'gallon_img2' src='assets/images/gallon_images/quart.png'>";
	var arr3 = "<img id = 'bc2' class = 'gallon_img3' src='assets/images/gallon_images/quart.png'>";
	var arr4 = "<img id = 'bc3'  class = 'gallon_img4' src='assets/images/gallon_images/quart.png'>";
	var arr5 = "<img  id = 'bc4' class = 'gallon_img22' src='assets/images/gallon_images/gallon_horizon.png'>";
	var cont = parseInt(e);

	if(e == 0) {
		document.getElementById('animation').innerHTML = "<div>&nbsp;" + arr + "</div><br/>";
	} else if(e == 1) {
		document.getElementById('animation').innerHTML = "<div>&nbsp;" + arr + "&nbsp;" + arr1 + "<div class='gallon_fill'></div><img  id = 'bc4' class = 'gallon_img22' src='assets/images/gallon_images/gallon_horizon.png'>&nbsp;" + arr2 + "&nbsp;" + arr3 + "&nbsp;" + arr4 + "</div>"; 
	} else if(cont == 2) {
		window.clearTimeout(timer_1);
		$('#bc').animate({
			top : -18
		}, function() {
			$('#bc').animate({
				left : 80
			}, function() {
				$('#bc').css('display', 'none');
				$('#bc4').css('display', 'block');
				$('.gallon_fill').css('display', 'block');
				$('.gallon_fill').animate({
					height : 46
				}, 1000, function() {
					$('#bc4').css('display', 'none');
					$('.gallon_fill').css('display', 'none');
					$('.gallon_fill').css('height', '1px');
					$('#bc').css('display', 'block');
					$('#bc').animate({
						left : 125
					}, function() {
						$('#bc').animate({
							top : 122
						}, function() {

							$('#bc1').animate({
								top : -18
							}, function() {
								$('#bc1').animate({
									left : 80
								}, function() {
									$('#bc1').css('display', 'none');
									$('#bc4').css('display', 'block');
									$('.gallon_fill').css('display', 'block');
									$('.gallon_fill').animate({
										height : 46
									}, 1000, function() {
										$('#bc4').css('display', 'none');
										$('.gallon_fill').css('display', 'none');
										$('.gallon_fill').css('height', '1px');
										$('#bc1').css('display', 'block');
										$('#bc1').animate({
											left : 185
										}, function() {
											$('#bc1').animate({
												top : 122
											}, function() {

												$('#bc2').animate({
													top : -18
												}, function() {
													$('#bc2').animate({
														left : 80
													}, function() {
														$('#bc2').css('display', 'none');
														$('#bc4').css('display', 'block');
														$('.gallon_fill').css('display', 'block');
														$('.gallon_fill').animate({
															height : 46
														}, 1000, function() {
															$('#bc4').css('display', 'none');
															$('.gallon_fill').css('display', 'none');
															$('.gallon_fill').css('height', '1px');
															$('#bc2').css('display', 'block');
															$('#bc2').animate({
																left : 245
															}, function() {
																$('#bc2').animate({
																	top : 122
																}, function() {

																	$('#bc3').animate({
																		top : -18
																	}, function() {
																		$('#bc3').animate({
																			left : 80
																		}, function() {
																			$('#bc3').css('display', 'none');
																			$('#bc4').css('display', 'block');
																			$('.gallon_fill').css('display', 'block');
																			$('.gallon_fill').animate({
																				height : 46
																			}, 1000, function() {
																				$('#bc4').css('display', 'none');
																				$('.gallon_fill').css('display', 'none');
																				$('.gallon_fill').css('height', '1px');
																				$('#bc3').css('display', 'block');
																				$('#bc3').animate({
																					left : 305
																				}, function() {
																					$('#bc3').animate({
																						top : 122
																					}, function() {
																						document.getElementById('animation').innerHTML = "<div>&nbsp;" + arr6 + "&nbsp;" + arr1 + "<div class='gallon_fill'></div><img  id = 'bc4' class = 'gallon_img22' src='assets/images/gallon_images/gallon_horizon.png'>&nbsp;" + arr2 + "&nbsp;" + arr3 + "&nbsp;" + arr4 + "</div>";													
																						$('.gallon_fill').animate({
																							height : 1
																						}, 1000, function() {
																							document.getElementById('animation').innerHTML = "";
																							gallon(0);
																						});
																					});
																				});
																			});
																		});
																	});
																});
															});
														});
													});
												});
											});
										});
									});
								});
							});
						});
					});
				});
			});
		});
	}
	if(cont < 2) {
		cont = parseInt(e) + 1;
		gallon(cont);
	}
}
/* gallon ends */

/* Greatest common factor starts*/

function greatest_common_factor(a) {
	if(a == 0) {
		englishTerm = "greatest common factor (GCF)";
		spanishTerm = "máximo común divisor (mcd)";
		englishDef = "the greatest whole number that is a common factor of two or more numbers";
		spanishDef = "el mayor número entero que es un factor común de dos o más números";
		replayAnimation = 1;
		showTermDefinition();
	}
	//timer_1 = setTimeout("greatest_common_factor_extd(" + a + ")", 600);
}

function greatest_common_factor_extd(e) {
	var cont = parseInt(e);
	cont++;
	if(cont > 1 && cont <=16) {
		if(selLang == "english") {
			document.getElementById('animation').innerHTML = '<div class="gcf_cont"><img src="assets/images/gcf_images/145_greatestcommonfactor'+cont+'.png"  /></div>';
		}
		else 
		{
			document.getElementById('animation').innerHTML = '<div class="gcf_cont"><img src="assets/images/gcf_images/145_greatestcommonfactorsp'+cont+'.png"  /></div>';
		}
	} 
	else if(cont == 17) {
		if(selLang == "english") {
			document.getElementById('animation').innerHTML = '<div class="gcf_cont"><img src="assets/images/gcf_images/145_greatestcommonfactor17.png"  /></div><img id="gcf_fade" class="gcf_img" src="assets/images/gcf_images/2.png"><img class="gcf_img1" src="assets/images/gcf_images/1.png">'; 
		}
		else
		{
			document.getElementById('animation').innerHTML = '<div class="gcf_cont"><img src="assets/images/gcf_images/145_greatestcommonfactorsp17.png"  /></div><img id="gcf_fade"  class="gcf_img_sp" src="assets/images/gcf_images/2.png"><img class="gcf_img1_sp" src="assets/images/gcf_images/1.png">'; 
		}
	} else if(cont == 18) {
		$('#gcf_fade').fadeOut('slow', function() {	
		});	
	}
	else if(cont == 19)
	{
		if(selLang == "english") {
			document.getElementById('animation').innerHTML = '<div class="gcf_cont"><img src="assets/images/gcf_images/145_greatestcommonfactor18.png"  /></div><img class="gcf_img1" src="assets/images/gcf_images/1.png">'; 
		}
		else
		{
			document.getElementById('animation').innerHTML = '<div class="gcf_cont"><img src="assets/images/gcf_images/145_greatestcommonfactorsp18.png"  /></div><img class="gcf_img1_sp" src="assets/images/gcf_images/1.png">'; 
		}
	}
	cont = parseInt(e) + 1;
	greatest_common_factor(cont);
}

/* Greatest common factor ends */


/* hexagon begins */

function hexagon(a) {
	if(a == 0) {
		englishTerm = "hexagon";
		spanishTerm = "hexágono";
		englishDef = "a polygon with six sides and six angles";
		spanishDef = "polígono con seis lados y seis ángulos";

		showTermDefinition();
	}
	//timer_1 = setTimeout("hexagon_extd(" + a + ")", 1000);
}

function hexagon_extd(e) {
	var cnt = parseInt(e);
	var hexagon_div = document.getElementById('animation');
	cnt++;
	if(selLang=="english"){
	if(cnt == 1) {
		hexagon_div.innerHTML = "<img class='hexagon_1' src='assets/images/hexagon_images/153_hexagon1.png'/>"
	} else if(cnt == 2) {
		hexagon_div.innerHTML = "<img class='hexagon_1' src='assets/images/hexagon_images/153_hexagon2.png'/>";
	} else if(cnt == 3) {
		hexagon_div.innerHTML = "<img class='hexagon_1' src='assets/images/hexagon_images/153_hexagon3.png'/>";
	} else if(cnt == 4) {
		hexagon_div.innerHTML = "<img class='hexagon_1' src='assets/images/hexagon_images/153_hexagon4.png'/>";
	} else if(cnt == 5) {
		hexagon_div.innerHTML = "<img class='hexagon_1' src='assets/images/hexagon_images/153_hexagon5.png'/>";
	} else if(cnt == 6) {
		hexagon_div.innerHTML = "<img class='hexagon_1' src='assets/images/hexagon_images/153_hexagon6.png'/>";
	} else if(cnt == 7) {
		hexagon_div.innerHTML = "<img class='hexagon_1' src='assets/images/hexagon_images/153_hexagon7.png'/>";
	}else if(cnt == 8) {
		hexagon_div.innerHTML = "<img class='hexagon_1' src='assets/images/hexagon_images/153_hexagon8.png'/>";
	}else if(cnt == 9) {
		hexagon_div.innerHTML = "<img class='hexagon_1' src='assets/images/hexagon_images/153_hexagon9.png'/>";
	}else if(cnt == 10) {
		hexagon_div.innerHTML = "<img class='hexagon_1' src='assets/images/hexagon_images/153_hexagon10.png'/>";
	}else if(cnt == 11) {
		hexagon_div.innerHTML = "<img class='hexagon_1' src='assets/images/hexagon_images/153_hexagon11.png'/>";
	}else if(cnt == 12) {
		hexagon_div.innerHTML = "<img class='hexagon_1' src='assets/images/hexagon_images/153_hexagon12.png'/>";
	}else if(cnt == 13) {
		hexagon_div.innerHTML = "<img class='hexagon_1' src='assets/images/hexagon_images/153_hexagon13.png'/>";
	}else if(cnt == 14) {
		hexagon_div.innerHTML = "<img class='hexagon_1' src='assets/images/hexagon_images/153_hexagon14.png'/>";
	}else if(cnt == 15) {
		cnt = 0;
		hexagon_div.innerHTML = '';
	}
	}
	else{
		if(cnt == 1) {
		hexagon_div.innerHTML = "<img class='hexagon_1' src='assets/images/hexagon_images/153_hexagon1.png'/>"
	} else if(cnt == 2) {
		hexagon_div.innerHTML = "<img class='hexagon_1' src='assets/images/hexagon_images/153_hexagon2.png'/>";
	} else if(cnt == 3) {
		hexagon_div.innerHTML = "<img class='hexagon_1' src='assets/images/hexagon_images/153_hexagon3.png'/>";
	} else if(cnt == 4) {
		hexagon_div.innerHTML = "<img class='hexagon_1' src='assets/images/hexagon_images/153_hexagon4.png'/>";
	} else if(cnt == 5) {
		hexagon_div.innerHTML = "<img class='hexagon_1' src='assets/images/hexagon_images/153_hexagon5.png'/>";
	} else if(cnt == 6) {
		hexagon_div.innerHTML = "<img class='hexagon_1' src='assets/images/hexagon_images/153_hexagon6.png'/>";
	} else if(cnt == 7) {
		hexagon_div.innerHTML = "<img class='hexagon_1' src='assets/images/hexagon_images/153_hexagonsp7.png'/>";
	} else if(cnt == 8) {
		hexagon_div.innerHTML = "<img class='hexagon_1' src='assets/images/hexagon_images/153_hexagonsp8.png'/>";
	} else if(cnt == 9) {
		hexagon_div.innerHTML = "<img class='hexagon_1' src='assets/images/hexagon_images/153_hexagonsp9.png'/>";
	} else if(cnt == 10) {
		hexagon_div.innerHTML = "<img class='hexagon_1' src='assets/images/hexagon_images/153_hexagonsp10.png'/>";
	} else if(cnt == 11) {
		hexagon_div.innerHTML = "<img class='hexagon_1' src='assets/images/hexagon_images/153_hexagonsp11.png'/>";
	} else if(cnt == 12) {
		hexagon_div.innerHTML = "<img class='hexagon_1' src='assets/images/hexagon_images/153_hexagonsp12.png'/>";
	} else if(cnt == 13) {
		hexagon_div.innerHTML = "<img class='hexagon_1' src='assets/images/hexagon_images/153_hexagonsp13.png'/>";
	} else if(cnt == 14) {
		hexagon_div.innerHTML = "<img class='hexagon_1' src='assets/images/hexagon_images/153_hexagonsp14.png'/>";
	} else if(cnt == 15) {
		cnt = 0;
		hexagon_div.innerHTML = '';
	}
	}
	hexagon(cnt);
}


/* hexagon ends */
function text() {
	var arr2 = "<div class='hexagon_string_1 label_font_semibold'>6 sides</div>";
	var sarr2 = "<div class='hexagon_string_1 label_font_semibold'>6 lados</div>";
	if(selLang == "english") {
		document.getElementById('animation').innerHTML += "<div class=''>&nbsp;" + arr2 + "</div>";
	} else if(selLang == "spanish") {
		document.getElementById('animation').innerHTML += "<div class=''>&nbsp;" + sarr2 + "</div>";
	}

}

function nexthexa(item) {

	document.getElementById('animation').innerHTML = "<div class=''>&nbsp;" + "<img class = 'hexagon_img' src='assets/images/hexagon_images/hexagon" + item + ".png'>";
	+"</div>";

}

function text1() {
	var arr3 = "<div class='hexagon_string_1 label_font_semibold'>6 sides and 6 angles</div>";
	document.getElementById('animation').innerHTML += "<div class=''>&nbsp;" + arr3 + "</div>";
}

function nexthexa1(item) {
	if(item == 5) {
		if(selLang == "english") {
			document.getElementById('animation').innerHTML = "<div class=''>&nbsp;" + "<img class = 'hexagon_img' src='assets/images/hexagon_images/ahexagon" + item + ".png'>" + "</div><div class='hexagon_string_1 label_font_semibold'>6 sides and 6 angles</div>";

		} else if(selLang == "spanish") {
			document.getElementById('animation').innerHTML = "<div class=''>&nbsp;" + "<img class = 'hexagon_img' src='assets/images/hexagon_images/ahexagon" + item + ".png'>" + "</div><div class='hexagon_string_1 label_font_semibold'>6 lados y 6 ángulos</div>";
		}
	} else {
		if(selLang == "english") {
			document.getElementById('animation').innerHTML = "<div class=''>&nbsp;" + "<img class = 'hexagon_img' src='assets/images/hexagon_images/ahexagon" + item + ".png'>" + "</div><div class='hexagon_string_1 label_font_semibold'>6 sides</div>";
		} else if(selLang == "spanish") {
			document.getElementById('animation').innerHTML = "<div class=''>&nbsp;" + "<img class = 'hexagon_img' src='assets/images/hexagon_images/ahexagon" + item + ".png'>" + "</div><div class='hexagon_string_1 label_font_semibold'>6 lados</div>";
		}

	}
}

/* hexagon ends */



/*inequality*/

function inequality(a) {
	if(a == 0) {
		englishTerm = "inequality";
		spanishTerm = "desigualdad";
		englishDef = "a mathematical sentence that contains one of the symbols >, <, ≥, or ≤";
		spanishDef = "un enunciado matemático que contiene alguno de los símbolos siguientes: >, <, ≥ o ≤";
		showTermDefinition();
	}
	//timer_1 = setTimeout("inequality_extd(" + a + ")", 1000);
}

function inequality_extd(e) {
	var cnt=parseInt(e);
	cnt++;
	if(cnt<=4){
		document.getElementById('animation').innerHTML = "<img class='inequality_img' src='assets/images/inequality_img/165_inequality"+cnt+".png'/>"
	}else{
		document.getElementById('animation').innerHTML = ""
		cnt=0;
	}
	inequality(cnt);
}

/*end inequality*/

/*inequality symbols*/
function inequality_symbols(a) {
	if(a == 0) {
		englishTerm = "inequality symbols";
		spanishTerm = "símbolos de desigualdad";
		englishDef = "symbols used to show how numbers compare";
		spanishDef = "símbolos que se usan para comparar números";
		showTermDefinition();
	}
	//timer_1 = setTimeout("inequality_symbols_extd(" + a + ")", 1500);
}

function inequality_symbols_extd(e) {
	var d = parseInt(e);
	if(e == 0) {
		document.getElementById('animation').innerHTML = "<div class='inequ_symbol label_font_regular'><table class='tabl' align='center'><tr><td>&#60;</td><td class='tabltd'>&#62;</td><td class='tabltd'>&#8804;</td><td class='tabltd'>&#8805;</td></tr></div>";
	} else if(e == 1) {
		document.getElementById('animation').innerHTML = "<div class='inequ_symbol label_font_regular'><table class='tabl' align='center'><tr><td>&#60;</td><td>&#62;</td><td class='tabltd'>&#8804;</td><td class='tabltd'>&#8805;</td></tr></div>";
	} else if(e == 2) {
		document.getElementById('animation').innerHTML = "<div class='inequ_symbol label_font_regular'><table class='tabl' align='center'><tr><td>&#60;</td><td>&#62;</td><td>&#8804;</td><td class='tabltd'>&#8805;</td></tr></div>";
	} else if(e == 3) {
		document.getElementById('animation').innerHTML = "<div class='inequ_symbol label_font_regular'><table class='tabl' align='center'><tr><td>&#60;</td><td>&#62;</td><td>&#8804;</td><td>&#8805;</td></tr></div>";
	} else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	d = parseInt(e) + 1;

	inequality_symbols(d);
}

/*end inequality symbols*/

/*  impossible starts  */
function impossible_extd(e) {
		var count = parseInt(e);
		count++;
		if(count==1) {
			document.getElementById('animation').innerHTML = "<img class='impossible_1' src='assets/images/impossible_images/160_impossible"+count+".png'/>";
		}else if(count<=2){
			if(selLang == "english"){
				document.getElementById('animation').innerHTML = "<img class='impossible_1' src='assets/images/impossible_images/160_impossible"+count+".png'/>";
			}else{
				document.getElementById('animation').innerHTML = "<img class='impossible_1' src='assets/images/impossible_images/160_impossiblesp"+count+".png'/>";
			}
		}
		  
	
	impossible(count);
}
function impossible(a) {
	var a = parseInt(a);
	if(a == 0) {
		englishTerm = "impossible";
		spanishTerm = "imposible";
		englishDef = "an event that will never happen";
		spanishDef = "un evento que nunca sucederá ";
		replayAnimation = 1;
		showTermDefinition();
	}
	//timer_1 = setTimeout("impossible_extd(" + a + ")", 1335);
}

/* impossible ends  */

/*  inch starts  */
function inch_extd(e) {
		var count = parseInt(e);
		count++;
		if(count==1) {
			document.getElementById('animation').innerHTML = "<img class='inch_1' src='assets/images/inch_images/162_inch"+count+".png'/>";
		}else if(count<=2){
			if(selLang == "english"){
				document.getElementById('animation').innerHTML = "<img class='inch_1' src='assets/images/inch_images/162_inch"+count+".png'/>";
			}else{
				document.getElementById('animation').innerHTML = "<img class='inch_1' src='assets/images/inch_images/162_inchsp"+count+".png'/>";
			}
		}
		  
	
	inch(count);
}

function inch(a) {
	var a = parseInt(a);
	if(a == 0) {
		englishTerm = "inch";
		spanishTerm = "pulgada";
		englishDef = "a customary unit for measuring length";
		spanishDef = "unidad estándar para medir longitud";
		replayAnimation = 1;
		showTermDefinition();
	}
	//timer_1 = setTimeout("inch_extd(" + a + ")", 1000);
}

/* inch ends  */


/*  independent events starts  */
function independent_events_extd(e) {
	var count = parseInt(e);
	count++;
	if(count <= 3) {
		document.getElementById('animation').innerHTML = "<img class='independent_events_1' src='assets/images/independent_events_images/164_independentevents"+count+".png'/>";
	} else {
		document.getElementById('animation').innerHTML = "";
		count = 0;
	}
		independent_events(count);
}


function independent_events(a) {
	var a = parseInt(a);
	if(a == 0) {
		englishTerm = "independent events";
		spanishTerm = "eventos independientes";
		englishDef = "events where the outcome of the first event does not affect the outcome of the second event";
		spanishDef = "eventos en los que el resultado del primer evento no afecta al resultado del segundo evento";
		showTermDefinition();
	}
	//timer_1 = setTimeout("independent_events_extd(" + a + ")", 1335);
}

/* independent events ends  */

/* integers  starts  */
function integers_extd(e) {
	var count = parseInt(e);
	count++;
	if(count <= 4) {
		document.getElementById('animation').innerHTML = "<img class='integers1' src='assets/images/integers_img/168_integers"+count+".png'/>";
	} else {
		document.getElementById('animation').innerHTML = "";
		count = 0;
	}
		integers(count);
}

function integers(a) {
	var a = parseInt(a);
	if(a == 0) {
		englishTerm = "integers";
		spanishTerm = "enteros";
		englishDef = "the set of whole numbers and their opposites";
		spanishDef = "el conjunto de números enteros y sus opuestos";
		showTermDefinition();
	}
	//timer_1 = setTimeout("integers_extd(" + a + ")", 1000);
}

/* integers ends  */

/* intersecting lines starts  */
function intersecting_lines_extd(e) {
	var count = parseInt(e);
	count++;
	if(count <= 10) {
		document.getElementById('animation').innerHTML = "<img class='intersect1' src='assets/images/intersecting_lines_images/169_intersecting-lines"+count+".png'/>";
	} else {
		document.getElementById('animation').innerHTML = "";
		count = 0;
	}
		intersecting_lines(count);
}


function intersecting_lines(a) {
	var a = parseInt(a);
	if(a == 0) {
		englishTerm = "intersecting lines";
		spanishTerm = "rectas secantes";
		englishDef = "lines that cross at one point";
		spanishDef = "rectas que se cortan en un punto";
		showTermDefinition();
	}
	if(a == 10 || a == 9) {
		//timer_1 = setTimeout("intersecting_lines_extd(" + a + ")", 2000);
	} else {
		//timer_1 = setTimeout("intersecting_lines_extd(" + a + ")", 800);
	}
}

/* intersecting lines ends  */

/* interval starts  */
function interval_extd(e) {
	var display = new Array();

	if(selLang == "english") {
		display[0] = "<img src='assets/images/interval_images/138_frequency table.png' />";
		display[1] = "<img src='assets/images/interval_images/col_1.png' />";
		display[2] = "<img src='assets/images/interval_images/col_2.png' />";
		display[3] = "<img src='assets/images/interval_images/col_3.png' />";
		display[4] = "<img src='assets/images/interval_images/138_frequency table.png' />";
	} else {
		display[0] = "<img src='assets/images/interval_images/138_frequencytable_sapnish.png' />";
		display[1] = "<img src='assets/images/interval_images/138_frequencytable_sapnish_1.png' />";
		display[2] = "<img src='assets/images/interval_images/138_frequencytable_sapnish_2.png' />";
		display[3] = "<img src='assets/images/interval_images/138_frequencytable_sapnish_3.png' />";
		display[4] = "<img src='assets/images/interval_images/138_frequencytable_sapnish.png' />";
	}

	if(e < 4) {
		document.getElementById('animation').innerHTML = "<div id='interval_sub'>" + display[parseInt(e)] + "</div>";
	} else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	cont = parseInt(e) + 1;
	interval(cont);
}

function interval(a) {
	var a = parseInt(a);
	if(a == 0) {
		englishTerm = "interval";
		spanishTerm = "intervalo ";
		englishDef = "a set of numbers between two given numbers";
		spanishDef = "el conjunto de números entre dos números dados";
		showTermDefinition();
	}
	//timer_1 = setTimeout("interval_extd(" + a + ")", 1000);
}

/* interval ends  */
/* increase starts*/
function increase(a) {
	if(a == 0) {
		englishTerm = "increase";
		spanishTerm = "aumentar";
		englishDef = "get larger in size or number";
		spanishDef = "hacerse más grande de tamaño o número";
		showTermDefinition();
	}
	/*if(a==5)
	//timer_1 = setTimeout("increase_extd(" + a + ")", 2500);
	else
	//timer_1 = setTimeout("increase_extd(" + a + ")", 2000);*/
}

function increase_extd(e) {
	var cont = parseInt(e);
	if(cont == 0) {
		var str = '';
		for( i = 0; i < 9; i++)
		str += '<div class="increase_img"><img src="assets/images/increase_images/dime.png" /></div>';
		for( j = 0; j < 3; j++)
		str += '<div class="increase_img"><img src="assets/images/increase_images/dime.png" class="fade" /></div>';
		document.getElementById('animation').innerHTML = str;
	} else if(e == 1)
		$('.fade').fadeIn('slow');
	else if(e == 2)
		document.getElementById('animation').innerHTML = '<div class="sphere_img"><img src="assets/images/increase_images/sphere.png" id="sphere_img" /><img src="assets/images/increase_images/sphere1.png" id="sphere_img1" /></div>';
	else if(e == 3) {
		$('#sphere_img').animate({
			width : 106,
			height : 106
		}, function() {
			$('#sphere_img').css('display', 'none');
			$('#sphere_img1').css('display', 'block');
		});
	} else if(e == 5) {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	cont = parseInt(e) + 1;
	increase(cont);
}

/* increase ends */
/* key starts  */
function key_extd(e) {
	var display = new Array();
	display[0] = "<img src='assets/images/key_images/259_pictograph.png' />";
	display[1] = "<img src='assets/images/key_images/259_pictograph_1.png' />";
	display[2] = "<img src='assets/images/key_images/text_pictograph.png' />";

	if(e < 3) {
		document.getElementById('animation').innerHTML = "<div id='key_sub'>" + display[parseInt(e)] + "</div>";
	} else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	cont = parseInt(e) + 1;
	key(cont);
}

function key(a) {
	var a = parseInt(a);
	if(a == 0) {
		englishTerm = "key";
		spanishTerm = "clave";
		englishDef = "a note on a pictograph that tells how many each picture represents";
		spanishDef = "una nota en un pictograma que dice a cuántos representa cada dibujo";
		showTermDefinition();
	}
	//timer_1 = setTimeout("key_extd(" + a + ")", 1000);
}

/* key ends  */
/*Kilogram*/
function kilogram(a) {
	if(a == 0) {
		englishTerm = "kilogram";
		spanishTerm = "kilogramo";
		englishDef = "a metric unit that measures weight";
		spanishDef = "una unidad métrica que mide el peso";
		replayAnimation = 1;
		showTermDefinition();
	}
	//timer_1 = setTimeout("kilogram_extd(" + a + ")", 1000);

}

function kilogram_extd(e) {
	var d = parseInt(e);
	if(e == 0) {
		document.getElementById('animation').innerHTML = "<div class='kilogram_div'><img class='kilogram_img' src=\"assets/images/kilogram/173_1_kilogram.png\"/></div>";
	} else if(e == 1) {
		document.getElementById('animation').innerHTML = "<div class='kilogram_div'><img class='kilogram_img' src=\"assets/images/kilogram/173_1_kilogram.png\"/><img  style='position:absolute;left:127px;' src=\"assets/images/kilogram/173_2_kilogram.png\"/></div>";
	}
	d = parseInt(e) + 1;
	kilogram(d);
}

/*End Kilogram*/
/* lateral_surface begins */
function lateral_surface(a) {
	if(a == 0) {
		englishTerm = "lateral surface";
		spanishTerm = "superficie lateral";
		englishDef = "the curved surface of a cylinder";
		spanishDef = "la superficie curva de un cilindro";
		showTermDefinition();
	}
	//timer_1 = setTimeout("lateral_surface_extd(" + a + ")", 1333);
}

function lateral_surface_extd(e) {

	var arr = "<img  id= 'bc' class = 'lateral_area_img' src='assets/images/lateral_area_images/01.png' >";
	var arr1 = "<img  id= 'bc' class = 'lateral_area_img' src='assets/images/lateral_area_images/02.png' >";
	var arr2 = "4 quarters = 1 dollar";
	var cont = parseInt(e);

	if(e == 0) {
		document.getElementById('animation').innerHTML = "<div>&nbsp;" + arr + "</div><br/>";
	} else if(e == 1) {

		document.getElementById('animation').innerHTML = "<div>&nbsp;" + arr1 + "</div><br/>";

	} else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	cont = parseInt(e) + 1;

	lateral_surface(cont);
}
/* lateral_surface ends */
/* leaf starts  */

function leaf_extd(e) {
	var display = new Array();
	cont = parseInt(e) + 1;
	//var leaves = ["plot_1.png", "plot_2.png", "plot_3.png", "plot_4.png", "plot_5.png", "plot_6.png", "plot_7.png", "plot_8.png", "plot_9.png", "plot_10.png", "plot_11.png", "plot_12.png", "plot_13.png"];
	if(cont <= 13) {
		disp = "<img src='assets/images/leaf_images/plot_"+cont+".png'/>";
		//disp = "<img src='assets/images/leaf_images/" + leaves[parseInt(e)+1] + "' />";
		document.getElementById('animation').innerHTML = "<div id='leaf_sub'>" + disp + "</div>";
	} else {
		document.getElementById('animation').innerHTML = "";
		cont = 0;
	}
	
	leaf(cont);
}

function leaf(a) {
	var a = parseInt(a);
	if(a == 0) {
		englishTerm = "leaf";
		spanishTerm = "hoja";
		englishDef = "the last digit to the right in a particular data value";
		spanishDef = "el último dígito a la derecha de un valor concreto";
		showTermDefinition();
	}
	if(a <= 2 || a == 13) {
		//timer_1 = setTimeout("leaf_extd(" + a + ")", 1000);
	} else {
		//timer_1 = setTimeout("leaf_extd(" + a + ")", 500);
	}
}

/* leaf ends  */

function length(a) {
	if(a == 0) {
		englishTerm = "length";
		spanishTerm = "longitud";
		englishDef = "the distance from one end of an object to the other end";
		spanishDef = "la distancia desde un extremo de un objeto al otro extremo";
		showTermDefinition();
	}
	//timer_1 = setTimeout("length_extd(" + a + ")", 1000)
}

function length_extd(e) {
	var count = parseInt(e);
	count++;
	if(count==1) {
		document.getElementById('animation').innerHTML = "<img class='length1' src='assets/images/length_img/180_length"+count+".png'/>";
	} else if(count==2){
		document.getElementById('animation').innerHTML = "<img class='length1' src='assets/images/length_img/180_length2.png'/>";
	} else if(count==3){
		if(selLang == "english") {
			document.getElementById('animation').innerHTML = "<img class='length1' src='assets/images/length_img/180_length3.png'/>";
		}else{
			document.getElementById('animation').innerHTML = "<img class='length1' src='assets/images/length_img/180_lengthsp3.png'/>";
		}
	}else{
		document.getElementById('animation').innerHTML = "";
		count = 0;
	}
		length(count);
}
/*least likely*/

function least_likely(a) {
	if(a == 0) {
		englishTerm = "least likely";
		spanishTerm = "el menos probable";
		englishDef = "the smallest chance of happening";
		spanishDef = "aquello que tiene menor posibilidad de ocurrir";
		showTermDefinition();
	}
	//timer_1 = setTimeout("least_likely_extd(" + a + ")", 2000);

}

function least_likely_extd(e) {
	var d = parseInt(e);
	if(selLang == "english") {
		if(e == 0) {
		document.getElementById('animation').innerHTML = "<img src='assets/images/least_likly_img/178_least-likely_1.png'/>";

	} else if(e == 1) {
		document.getElementById('animation').innerHTML = "<img src='assets/images/least_likly_img/178_least-likely_2.png'/>";
	} else if(e == 2) {
		document.getElementById('animation').innerHTML = "<img src='assets/images/least_likly_img/178_least-likely_3.png'/>";
	} else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	}
	else
	{
		if(e == 0) {
		document.getElementById('animation').innerHTML = "<img src='assets/images/least_likly_img/178_least-likely_1.png'/>";

	} else if(e == 1) {
		document.getElementById('animation').innerHTML = "<img src='assets/images/least_likly_img/178_least-likely_2s.png'/>";
	} else if(e == 2) {
		document.getElementById('animation').innerHTML = "<img src='assets/images/least_likly_img/178_least-likely_3s.png'/>";
	} else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	}
	d = parseInt(e) + 1;

	least_likely(d);
}

/*end least likely*/

/*less likely*/
function less_likely(a) {
	if(a == 0) {
		englishTerm = "less likely";
		spanishTerm = "menos probable";
		englishDef = "has a poor chance of happening";
		spanishDef = "algo que tiene poca probabilidad de ocurrir";
		showTermDefinition();
	}
	//timer_1 = setTimeout("less_likely_extd(" + a + ")", 2000);

}

function less_likely_extd(e) {
	var d = parseInt(e);
	if(selLang == "english") {
		if(e == 0) {
		document.getElementById('animation').innerHTML = "<img src='assets/images/less_likely_img/181_less-likely_1.png'/>";

	} else if(e == 1) {
		document.getElementById('animation').innerHTML = "<img src='assets/images/less_likely_img/181_less-likely_2.png'/>";
	} else if(e == 2) {
		document.getElementById('animation').innerHTML = "<img src='assets/images/less_likely_img/181_less-likely_3.png'/>";
	} else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	}
	else
	{
		if(e == 0) {
		document.getElementById('animation').innerHTML = "<img src='assets/images/less_likely_img/181_less-likely_1.png'/>";

	} else if(e == 1) {
		document.getElementById('animation').innerHTML = "<img src='assets/images/less_likely_img/181_less-likely_2s.png'/>";
	} else if(e == 2) {
		document.getElementById('animation').innerHTML = "<img src='assets/images/less_likely_img/181_less-likely_3s.png'/>";
	} else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	}
	d = parseInt(e) + 1;

	less_likely(d);
}

/*end less likely*/

/*line of symmetry*/

function line_of_symmetry(a) {
	if(a == 0) {
		englishTerm = "line of symmetry";
		spanishTerm = "eje de simetría";
		englishDef = "a line that divides a figure into two parts that are mirror images";
		spanishDef = "una línea que divide una figura en dos partes que son imágenes de espejo";
		showTermDefinition();
	}
	//timer_1 = setTimeout("line_of_symmetry_extd(" + a + ")", 1500);

}

function line_of_symmetry_extd(e) {
	var d = parseInt(e);
	if(e == 0) {
		document.getElementById('animation').innerHTML = "<div class='line_symmetry'><img src=\"assets/images/line_symmetry/symmetry1.png\"/></div>";
	} else if(e == 1) {
		document.getElementById('animation').innerHTML = "<div class='line_symmetry'><img src=\"assets/images/line_symmetry/symmetry2.png\"/></div>";
	} else if(e == 2) {
		document.getElementById('animation').innerHTML = "<div class='line_symmetry'><img src=\"assets/images/line_symmetry/symmetry3.png\"/></div>";
	} else if(e == 3) {
		document.getElementById('animation').innerHTML = "<div class='line_symmetry2'><img class='line_symm' src=\"assets/images/line_symmetry/symmetry4.png\"/></div>";
	} else if(e == 4) {
		document.getElementById('animation').innerHTML = "<div class='line_symmetry2'><img class='line_symm' src=\"assets/images/line_symmetry/symmetry5.png\"/></div>";
	} else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	d = parseInt(e) + 1;
	line_of_symmetry(d);
}

/*end line of symmetry*/


/*line segment*/
function line_segment(a) {
	if(a == 0) {
		englishTerm = "line segment";
		spanishTerm = "segmento de recta";
		englishDef = "part of a line with two endpoints";
		spanishDef = "parte de una recta con dos extremos";
		showTermDefinition();
	}
	//timer_1 = setTimeout("line_segment_extd(" + a + ")", 1200);
}

function line_segment_extd(e) {
	var d = parseInt(e);
	if(e == 0) {
		document.getElementById('animation').innerHTML = "<div class='line_seg'><img src=\"assets/images/linesegment_image/190_linesegment1.png\"/></div>";
	} else if(e == 1) {
		document.getElementById('animation').innerHTML = "<div class='line_seg'><img src=\"assets/images/linesegment_image/190_line segment2.png\"/></div>";
	} else if(e == 2) {
		document.getElementById('animation').innerHTML = "<div class='line_seg'><img src=\"assets/images/linesegment_image/190_line segment3.png \"/></div>";
	} else if(e == 3) {
		document.getElementById('animation').innerHTML = "<div class='line_seg'><img src=\"assets/images/linesegment_image/190_linesegment4.png \"/></div>";
	} else if(e == 4) {
		document.getElementById('animation').innerHTML = "<div class='line_seg'><img src=\"assets/images/linesegment_image/190_linesegment1.png \"/></div>";
	} else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	d = parseInt(e) + 1;
	line_segment(d);
}

/*end line segment*/

/* linear eqaution */
function linear_equation(a) {
	if(a == 0) {
		englishTerm = "linear equation";
		spanishTerm = "ecuación lineal";
		englishDef = "an equation whose graph is a straight line";
		spanishDef = "una ecuación cuya gráfica es una línea recta";
		showTermDefinition();
	}
	/*if(a != 7) {
		//timer_1 = setTimeout("linear_equation_extd(" + a + ")", 1000)
	} else
		//timer_1 = setTimeout("linear_equation_extd(" + a + ")", 1500)*/
}

function linear_equation_extd(e) {
	var cnt = parseInt(e);
	var linear_equation_div = document.getElementById('animation');
	if(cnt <= 6) {
		linear_equation_div.innerHTML = "<img src='assets/images/linear_equat_funct/192_linear equation" + cnt + ".png' width='350'/>";
	} else {
		cnt = -1;
		linear_equation_div.innerHTML = "";
	}
	cnt++;
	linear_equation(cnt);
}

/* linear eqaution */
function linear_function(a) {
	if(a == 0) {
		englishTerm = "linear function";
		spanishTerm = "función lineal";
		englishDef = "a function whose graph is a straight line";
		spanishDef = "una función cuya gráfica es una línea recta";
		showTermDefinition();
	}
	/*if(a != 7)
		//timer_1 = setTimeout("linear_function_extd(" + a + ")", 1000)
	else
		//timer_1 = setTimeout("linear_function_extd(" + a + ")", 1500)*/
}

function linear_function_extd(e) {
	var cnt = parseInt(e);
	var linear_equation_div = document.getElementById('animation');
	if(cnt <= 6) {
		linear_equation_div.innerHTML = "<img src='assets/images/linear_equat_funct/192_linear equation" + cnt + ".png' width='350'/>";
	} else {
		cnt = -1;
		linear_equation_div.innerHTML = "";
	}
	cnt++;
	linear_function(cnt);
}


/*Liter*/
function liter(a) {
	if(a == 0) {
		englishTerm = "liter";
		spanishTerm = "litro";
		englishDef = "a metric unit that measures capacity";
		spanishDef = "una unidad métrica que mide la capacidad";
		showTermDefinition();
	}
	//timer_1 = setTimeout("liter_extd(" + a + ")", 1300);
}

function liter_extd(e) {
	var d = parseInt(e);
	if(e < 5) {
		document.getElementById('animation').innerHTML = "<div class='liter_1'><img src=\"assets/images/liter_img/194_liter"+parseInt(e+1)+".png\"/></div>";
	} else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	d = parseInt(e) + 1;

	liter(d);
}
/*end Liter*/

/*least common denominator (LCD) Begins*/
function least_common_denominator(a) {

	if(a == 0) {
		englishTerm = "least common denominator (LCD)";
		spanishTerm = "mínimo común denominador (mcd)";
		englishDef = "the least common multiple of the denominators of a set of fractions";
		spanishDef = "el menor múltiplo común de los denominadores de un conjunto de fracciones";
		showTermDefinition();
	}
	//timer_1 = setTimeout("least_common_denominator_extd(" + a + ")", 857)
}

function least_common_denominator_extd(e) {
	var count = parseInt(e);
	var div_id = document.getElementById("animation")
	count++;
	if(count == 1) {
		div_id.innerHTML = "<img class='lcd_img' src='assets/images/least_common_denominator(lcd)/176_least-common-denominator1.png'/>";

	}
	else if(count== 2)
	{
		div_id.innerHTML = "<img class='lcd_img' src='assets/images/least_common_denominator(lcd)/176_least-common-denominator1_2.png'/>";
	}
	else if(count == 3) {
		div_id.innerHTML = "<img class='lcd_img' src='assets/images/least_common_denominator(lcd)/176_least-common-denominator2.png'/>";

	}
	else if(count== 4)
	{
		div_id.innerHTML = "<img class='lcd_img' src='assets/images/least_common_denominator(lcd)/176_least-common-denominator3.png'/>";
	}
	else if(count== 5)
	{
		div_id.innerHTML = "<img class='lcd_img' src='assets/images/least_common_denominator(lcd)/176_least-common-denominator3_4.png'/>";
	}
	else if(count== 6)
	{
		div_id.innerHTML = "<img class='lcd_img' src='assets/images/least_common_denominator(lcd)/176_least-common-denominator4.png'/>";
	}else {
		count = 0;
		div_id.innerHTML = "";
	}
	least_common_denominator(count);
}


/* lower extreme starts  */

function lower_extreme_extd(e) {
		var count = parseInt(e);
		count++;
		if(count==1) {
			document.getElementById('animation').innerHTML = "<img src='assets/images/lower_extreme_images/195_lowerextreme"+count+".png'/>";
		}else if(count<=2){
			if(selLang == "english"){
				document.getElementById('animation').innerHTML = "<img src='assets/images/lower_extreme_images/195_lowerextreme"+count+".png'/>";
			}else{
				document.getElementById('animation').innerHTML = "<img src='assets/images/lower_extreme_images/195_lowerextremeSP"+count+".png'/>";
			}
		}
		  else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
	
	lower_extreme(count);
}

function lower_extreme(a) {
	var a = parseInt(a);
	if(a == 0) {
		englishTerm = "lower extreme";
		spanishTerm = "extremo inferior";
		englishDef = "the least value in a data set";
		spanishDef = "el menor valor de un conjunto de datos";
		showTermDefinition();
	}
	//timer_1 = setTimeout("lower_extreme_extd(" + a + ")", 1335);
}

/* lower extreme ends  */

/*least common multiple (LCM) Begins*/
function least_common_multiple(a) {

	if(a == 0) {
		englishTerm = "least common multiple (LCM)";
		spanishTerm = "mínimo común múltiplo (mcm)";
		englishDef = "the least whole number greater than 0 that is a common multiple of two or more numbers";
		spanishDef = "el menor número entero mayor que 0 que es un múltiplo común de dos o más números";
		replayAnimation = 1;
		showTermDefinition();
	}
	//timer_1 = setTimeout("least_common_multiple_extd(" + a + ")", 800)
}

function least_common_multiple_extd(e) {
	var count = parseInt(e);
	//var div_id = document.getElementById("animation")
	//count++;
	//var Multiple3 = ["3", "6", "9", "12", "18", "21", "24..."];
//	var Multiple4 = ["4", "8", "12", "16", "20", "24", "28..."];

	if(selLang == "english") {
		if(count == 0) {
			document.getElementById('animation').innerHTML = "<img src='assets/images/least_com_multi_images/177_least-common-multiple_1.png'/>";
		}else if(count == 1) {
			document.getElementById('animation').innerHTML = "<img src='assets/images/least_com_multi_images/177_least-common-multiple_2.png'/>";
		}else if(count == 2) {
			document.getElementById('animation').innerHTML = "<img src='assets/images/least_com_multi_images/177_least-common-multiple_3.png'/>";
		}else if(count == 3) {
			document.getElementById('animation').innerHTML = "<img src='assets/images/least_com_multi_images/177_least-common-multiple_4.png'/>";
		}else if(count == 4) {
			document.getElementById('animation').innerHTML = "<img src='assets/images/least_com_multi_images/177_least-common-multiple_5.png'/>";
		}else if(count == 5) {
			document.getElementById('animation').innerHTML = "<img src='assets/images/least_com_multi_images/177_least-common-multiple_6.png'/>";
		}else if(count == 6) {
			document.getElementById('animation').innerHTML = "<img src='assets/images/least_com_multi_images/177_least-common-multiple_7.png'/>";
		}else if(count == 7) {
			document.getElementById('animation').innerHTML = "<img src='assets/images/least_com_multi_images/177_least-common-multiple_8.png'/>";
		}else if(count == 8) {
			document.getElementById('animation').innerHTML = "<img src='assets/images/least_com_multi_images/177_least-common-multiple_9.png'/>";
		}else if(count == 9) {
			document.getElementById('animation').innerHTML = "<img src='assets/images/least_com_multi_images/177_least-common-multiple_10.png'/>";
		}else if(count == 10) {
			document.getElementById('animation').innerHTML = "<img src='assets/images/least_com_multi_images/177_least-common-multiple_11.png'/>";
		}else if(count == 11) {
			document.getElementById('animation').innerHTML = "<img src='assets/images/least_com_multi_images/177_least-common-multiple_12.png'/>";
		}else if(count == 12) {
			document.getElementById('animation').innerHTML = "<img src='assets/images/least_com_multi_images/177_least-common-multiple_13.png'/>";
		}else if(count == 13) {
			document.getElementById('animation').innerHTML = "<img src='assets/images/least_com_multi_images/177_least-common-multiple_14.png'/>";
		}else if(count == 14) {
			document.getElementById('animation').innerHTML = "<img src='assets/images/least_com_multi_images/177_least-common-multiple_15.png'/>";
		}else if(count == 15) {
			document.getElementById('animation').innerHTML = "<img src='assets/images/least_com_multi_images/177_least-common-multiple_16.png'/>";
		} else if(count == 16) {
			document.getElementById('animation').innerHTML = "<img src='assets/images/least_com_multi_images/177_least-common-multiple_17.png'/>";
		} else if(count == 17) {
			document.getElementById('animation').innerHTML = "<img src='assets/images/least_com_multi_images/177_least-common-multiple_18.png'/>";
		}else if(count == 18) {
			document.getElementById('animation').innerHTML = "<img src='assets/images/least_com_multi_images/177_least-common-multiple_19.png'/>";
		}
	}
	else
	{
	
	if(count == 0) {
		document.getElementById('animation').innerHTML = "<img src='assets/images/least_com_multi_images/177_least-common-multiple_1s.png'/>";
	} else if(count == 1) {
		document.getElementById('animation').innerHTML = "<img src='assets/images/least_com_multi_images/177_least-common-multiple_2s.png'/>";
	} else if(count == 2) {
		document.getElementById('animation').innerHTML = "<img src='assets/images/least_com_multi_images/177_least-common-multiple_3s.png'/>";
	} else if(count == 3) {
		document.getElementById('animation').innerHTML = "<img src='assets/images/least_com_multi_images/177_least-common-multiple_4s.png'/>";
	} else if(count == 4) {
		document.getElementById('animation').innerHTML = "<img src='assets/images/least_com_multi_images/177_least-common-multiple_5s.png'/>";
	} else if(count == 5) {
		document.getElementById('animation').innerHTML = "<img src='assets/images/least_com_multi_images/177_least-common-multiple_6s.png'/>";
	} else if(count == 6) {
		document.getElementById('animation').innerHTML = "<img src='assets/images/least_com_multi_images/177_least-common-multiple_7s.png'/>";
	}else if(count == 7) {
		document.getElementById('animation').innerHTML = "<img src='assets/images/least_com_multi_images/177_least-common-multiple_8s.png'/>";
	}else if(count == 8) {
		document.getElementById('animation').innerHTML = "<img src='assets/images/least_com_multi_images/177_least-common-multiple_9s.png'/>";
	}else if(count == 9) {
		document.getElementById('animation').innerHTML = "<img src='assets/images/least_com_multi_images/177_least-common-multiple_10s.png'/>";
	}else if(count == 10) {
		document.getElementById('animation').innerHTML = "<img src='assets/images/least_com_multi_images/177_least-common-multiple_11s.png'/>";
	}else if(count == 11) {
		document.getElementById('animation').innerHTML = "<img src='assets/images/least_com_multi_images/177_least-common-multiple_12s.png'/>";
	}else if(count == 12) {
		document.getElementById('animation').innerHTML = "<img src='assets/images/least_com_multi_images/177_least-common-multiple_13s.png'/>";
	}else if(count == 13) {
		document.getElementById('animation').innerHTML = "<img src='assets/images/least_com_multi_images/177_least-common-multiple_14s.png'/>";
	}else if(count == 14) {
		document.getElementById('animation').innerHTML = "<img src='assets/images/least_com_multi_images/177_least-common-multiple_15s.png'/>";
	}else if(count == 15) {
		document.getElementById('animation').innerHTML = "<img src='assets/images/least_com_multi_images/177_least-common-multiple_16.png'/>";
	} else if(count == 16) {
		document.getElementById('animation').innerHTML = "<img src='assets/images/least_com_multi_images/177_least-common-multiple_17.png'/>";
	} else if(count == 17) {
		document.getElementById('animation').innerHTML = "<img src='assets/images/least_com_multi_images/177_least-common-multiple_18.png'/>";
	}else if(count == 18) {
		document.getElementById('animation').innerHTML = "<img src='assets/images/least_com_multi_images/177_least-common-multiple_19.png'/>";
	}
	}
	
count = parseInt(e) + 1;
	least_common_multiple(count);
}

function least_common_multiple_timer(factor, a) {

	var a = parseInt(a);
	timer_2 = setTimeout(function() {
		least_common_multiple_timer_extd(a, factor);
	}, 100);
}

function stopCount() {
	clearTimeout(timer_1);
}

function least_common_multiple_timer_extd(e, factor) {

	if(e == factor.length) {
		clearTimeout(timer_2);
	} else {
		if(e != (factor.length - 1))
			document.getElementById('least_common_multiple').innerHTML += "<span id='least_comm_multiple'>" + factor[e] + ",<span>";
		else
			document.getElementById('least_common_multiple').innerHTML += "<span id='least_comm_multiple_1'>" + factor[e] + "<span>";
		cont = parseInt(e) + 1;
		least_common_multiple_timer(factor, cont);
	}
}

/*least common multiple (LCM) Ends*/
function line_symmetry(a) {
	if(a == 0) {
		englishTerm = "line symmetry";
		spanishTerm = "simetría lineal";
		englishDef = "at least one line divides a figure into two parts that are mirror images";
		spanishDef = "al menos una línea divide a la figura en dos partes que son imágenes de espejo";
		showTermDefinition();
	}
	//timer_1 = setTimeout("line_symmetry_extd(" + a + ")", 1000);
}

function line_symmetry_extd(e) {

	var arr = "<img  id= 'bc' class = 'line_symmetry_img' src='assets/images/line_symmetry/symmetry1.png' />";
	var arr1 = "<img  id= 'bc' class = 'line_symmetry_img' src='assets/images/line_symmetry/symmetry2.png' />";
	var arr2 = "<img  id= 'bc' class = 'line_symmetry_img' src='assets/images/line_symmetry/symmetry3.png' />";
	var arr3 = "<img  id= 'bc' class = 'line_symmetry_img1' src='assets/images/line_symmetry/symmetry4.png' />";
	var arr4 = "<img  id= 'bc' class = 'line_symmetry_img1' src='assets/images/line_symmetry/symmetry5.png' />";

	//var arr2 = "4 quarters = 1 dollar";
	var cont = parseInt(e);

	if(e == 0) {
		document.getElementById('animation').innerHTML = "<div>&nbsp;" + arr + "</div><br/>";
	} else if(e == 1) {

		document.getElementById('animation').innerHTML = "<div>&nbsp;" + arr1 + "</div><br/>";

	} else if(e == 2) {

		document.getElementById('animation').innerHTML = "<div>&nbsp;" + arr2 + "</div><br/>";

	} else if(e == 3) {

		document.getElementById('animation').innerHTML = "<div>&nbsp;" + arr3 + "</div><br/>";

	} else if(e == 4) {

		document.getElementById('animation').innerHTML = "<div>&nbsp;" + arr4 + "</div><br/>";

	} else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	cont = parseInt(e) + 1;

	line_symmetry(cont);
}

/* line_symmetry ends */
/* line of best fit begins */

function line_of_best_fit(a) {
	if(a == 0) {
		englishTerm = "line of best fit";
		spanishTerm = "recta de mayor aproximación";
		englishDef = "the line that comes closest to all points on a scatter plot";
		spanishDef = "la recta que se acerca más a todos los puntos en un diagrama de dispersión";
		showTermDefinition();
	}
	if(a == 7 || a == 4) {
		//timer_1 = setTimeout("line_of_best_fit_extd(" + a + ")", 1500);
	} else {
		//timer_1 = setTimeout("line_of_best_fit_extd(" + a + ")", 444);
	}
}

function line_of_best_fit_extd(e) {
	var count = parseInt(e);
	count++;
	if(count <= 7) {
		document.getElementById('animation').innerHTML = "<img class='lineofbest1' src='assets/images/line_of_best_fit_images/187_bestfit"+count+".png'/>";
	} else {
		document.getElementById('animation').innerHTML = "";
		count = 0;
	}
		line_of_best_fit(count);
}

/* line_of_best_fit ends */

/* line_graph begins */

function line_graph(a) {
	if(a == 0) {
		englishTerm = "line graph";
		spanishTerm = "gráfica lineal";
		englishDef = "a graph that displays data using points connected by line segments to show how quantities change over time";
		spanishDef = "una gráfica que enseña datos con puntos conectados por segmentos de recta para mostrar cómo cambian las cantidades con el tiempo";
		showTermDefinition();
	}
	if(a == 5) {
		//timer_1 = setTimeout("line_graph_extd(" + a + ")", 1500);
	} else {
		//timer_1 = setTimeout("line_graph_extd(" + a + ")", 666);
	}

}

function line_graph_extd(e) {
	var cont = parseInt(e);

	if(e == 0) {
		document.getElementById('animation').innerHTML = "<img class='line_graph_images' src='assets/images/line_graph_images/186_line-graph1.png'/>";
	} else if(e == 1) {
		document.getElementById('animation').innerHTML = "<img class='line_graph_images' src='assets/images/line_graph_images/186_line-graph2.png'/>";
	} else if(e == 2) {
		document.getElementById('animation').innerHTML = "<img class='line_graph_images' src='assets/images/line_graph_images/186_line-graph3.png'/>";
	} else if(e == 3) {
		document.getElementById('animation').innerHTML = "<img class='line_graph_images' src='assets/images/line_graph_images/186_line-graph4.png'/>";
	} else if(e == 4) {
		document.getElementById('animation').innerHTML = "<img class='line_graph_images' src='assets/images/line_graph_images/186_line-graph5.png'/>";
	} else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	cont = parseInt(e) + 1;

	line_graph(cont);
}

/* line_graph ends */

/* line plot begins */

function line_plot(a) {
	if(a == 0) {
		englishTerm = "line plot";
		spanishTerm = "diagrama de puntos";
		englishDef = "a graph in which data are organized using a number line";
		spanishDef = "una gráfica en la que los datos se organizan usando una recta numérica";
		showTermDefinition();
	}
	if(a == 10) {
		//timer_1 = setTimeout("line_plot_extd(" + a + ")", 1500);
	} else {
		//timer_1 = setTimeout("line_plot_extd(" + a + ")", 545);
	}

}

function line_plot_extd(e) {

	var arr = "<img  id= 'bc' class = 'line_plot_img' src='assets/images/line_plot_images/line_plot_0.png' >";
	var arr1 = "<img  id= 'bc' class = 'line_plot_img' src='assets/images/line_plot_images/line_plot_1.png' >";
	var arr2 = "<img  id= 'bc' class = 'line_plot_img' src='assets/images/line_plot_images/line_plot_2.png' >";
	var arr3 = "<img  id= 'bc' class = 'line_plot_img' src='assets/images/line_plot_images/line_plot_3.png' >";
	var arr4 = "<img  id= 'bc' class = 'line_plot_img' src='assets/images/line_plot_images/line_plot_4.png' >";
	var arr5 = "<img  id= 'bc' class = 'line_plot_img' src='assets/images/line_plot_images/line_plot_5.png' >";
	var arr6 = "<img  id= 'bc' class = 'line_plot_img' src='assets/images/line_plot_images/line_plot_6.png' >";
	var arr7 = "<img  id= 'bc' class = 'line_plot_img' src='assets/images/line_plot_images/line_plot_7.png' >";
	var arr8 = "<img  id= 'bc' class = 'line_plot_img' src='assets/images/line_plot_images/line_plot_8.png' >";
	var arr9 = "<img  id= 'bc' class = 'line_plot_img' src='assets/images/line_plot_images/line_plot_final.png' >";
	//var arr2 = "4 quarters = 1 dollar";
	var cont = parseInt(e);

	if(e == 0) {
		document.getElementById('animation').innerHTML = "<div>&nbsp;" + arr + "</div><br/>";
	} else if(e == 1) {

		document.getElementById('animation').innerHTML = "<div>&nbsp;" + arr1 + "</div><br/>";

	} else if(e == 2) {

		document.getElementById('animation').innerHTML = "<div>&nbsp;" + arr2 + "</div><br/>";

	} else if(e == 3) {

		document.getElementById('animation').innerHTML = "<div>&nbsp;" + arr3 + "</div><br/>";

	} else if(e == 4) {

		document.getElementById('animation').innerHTML = "<div>&nbsp;" + arr4 + "</div><br/>";

	} else if(e == 5) {

		document.getElementById('animation').innerHTML = "<div>&nbsp;" + arr5 + "</div><br/>";

	} else if(e == 6) {

		document.getElementById('animation').innerHTML = "<div>&nbsp;" + arr6 + "</div><br/>";

	} else if(e == 7) {

		document.getElementById('animation').innerHTML = "<div>&nbsp;" + arr7 + "</div><br/>";

	} else if(e == 8) {

		document.getElementById('animation').innerHTML = "<div>&nbsp;" + arr8 + "</div><br/>";

	} else if(e == 9) {

		document.getElementById('animation').innerHTML = "<div>&nbsp;" + arr9 + "</div><br/>";

	} else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	cont = parseInt(e) + 1;

	line_plot(cont);
}

/* line_plot ends */
/* line starts*/
function line(a) {
	if(a == 0) {
		englishTerm = "line";
		spanishTerm = "recta";
		englishDef = "a straight path with no endpoints";
		spanishDef = "un trayecto recto sin extremos";
		showTermDefinition();
	}
	//timer_1 = setTimeout("line_extd(" + a + ")", 2000);
}

function line_extd(e) {
	var cont = parseInt(e);
	if(cont == 0)
		document.getElementById('animation').innerHTML = '<img class="line1" src="assets/images/line_images/185_line1.png"/>';
		else if(cont == 1)
		{
			document.getElementById('animation').innerHTML = '<img class="line2" src="assets/images/line_images/185_line2.png"/>';
		}
	
else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	cont = parseInt(e)+1;
	line(cont);
}

/* line ends */
/* legs_of_a_right_triangle starts*/
function legs_of_a_right_triangle(a) {
	if(a == 0) {
		englishTerm = "legs of a right triangle";
		spanishTerm = "catetos de un triángulo";
		englishDef = "the two sides of a right triangle that form the right angle";
		spanishDef = "los dos lados de un triángulo rectángulo que forman el ángulo recto";
		showTermDefinition();
	}
	//timer_1 = setTimeout("legs_of_a_right_triangle_extd(" + a + ")", 2000);
}

function legs_of_a_right_triangle_extd(e) {
	var cont = parseInt(e);
	if(cont == 0)
		document.getElementById('animation').innerHTML = '<img src="assets/images/legs_right_triangle_images/179_legs-of-a-right-triangle1.png" />';
	else if(e == 1) {
		if(selLang == "english"){
			document.getElementById('animation').innerHTML = '<img src="assets/images/legs_right_triangle_images/179_legs-of-a-right-triangle2.png" />';
		}else{
			document.getElementById('animation').innerHTML = '<img src="assets/images/legs_right_triangle_images/179_legs-of-a-right-trianglesp2.png" />';
		}
	} else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	cont = parseInt(e) + 1;
	legs_of_a_right_triangle(cont);
}

/* legs_of_a_right_triangle ends */

/* likely starts*/
function likely(a) {
	if(a == 0) {
		englishTerm = "likely";
		spanishTerm = "probable";
		englishDef = "could happen";
		spanishDef = "algo que podría pasar";
		showTermDefinition();
	}
	//timer_1 = setTimeout("likely_extd(" + a + ")", 2000);
}

function likely_extd(e) {
	var cont = parseInt(e);
	if(cont == 0)
		document.getElementById('animation').innerHTML = "<img src='assets/images/likely_images/184_likely_1.png'/>";
	else if(e == 1) {
		
		if(selLang == "english") {
			document.getElementById('animation').innerHTML = "<img src='assets/images/likely_images/184_likely_2.png'/>";
		} else if(selLang == "spanish") {
			document.getElementById('animation').innerHTML = "<img src='assets/images/likely_images/184_likely_2s.png'/>";
		}
	} else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	cont = parseInt(e) + 1;
	likely(cont);
}

/* likely ends */


/*mass*/
function mass(a) {
	if(a == 0) {
		englishTerm = "mass";
		spanishTerm = "masa";
		englishDef = "the amount of matter in an object";
		spanishDef = "la cantidad de materia en un objeto";
		showTermDefinition();
	}
	//timer_1 = setTimeout("mass_extd(" + a + ")", 800);
}

function mass_extd(e) {
	var d = parseInt(e);
	if(e < 4) {
		document.getElementById('animation').innerHTML = "<div class='mass_1 label_font_semibold'><img src=\"assets/images/mass/142_gram"+parseInt(e+1)+".png\"/></div>";
	}  else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	d = parseInt(e) + 1;

	mass(d);
}

/*end mass*/
/*mean*/
function mean(a) {
	if(a == 0) {
		englishTerm = "mean";
		spanishTerm = "media";
		englishDef = "the sum of the values in a data set divided by the number of values in the data set; also called the average";
		spanishDef = "la suma de los valores de un conjunto de datos dividida por el número de valores que hay en el conjunto de datos; también se conoce como promedio";
		showTermDefinition();
	}
	if(a <= 5) {
		//timer_1 = setTimeout("mean_extd(" + a + ")", 1200);
	} else if(a == 6 || a == 3) {
		//timer_1 = setTimeout("mean_extd(" + a + ")", 2200);
	}
}

function mean_extd(e) {
	var cnt=parseInt(e)+1;
	if(cnt <= 6) {
		document.getElementById('animation').innerHTML = "<div class='meann'><img src='assets/images/mean_img/198_mean"+cnt+".png'/></div>";
	}else{
		document.getElementById('animation').innerHTML = "";
		cnt=0;
	}
	

	mean(cnt);
}

/*end mean*/

/*Measure*/
function measure(a) {
	if(a == 0) {
		englishTerm = "measure";
		spanishTerm = "medir";
		englishDef = "to find the size of something using a standard of comparison";
		spanishDef = "hallar el tamaño de algo usando un estándar de comparación";
		showTermDefinition();
	}
	//timer_1 = setTimeout("measure_extd(" + a + ")", 2000);
}

function measure_extd(e) {
	var cnt = parseInt(e);
	var measure_div = document.getElementById('animation');
	cnt++;
	if(selLang == "english") {
		if(cnt < 4) {
			measure_div.innerHTML = "<div class='measure'><img src=\"assets/images/measure_img/199_measure"+parseInt(cnt)+".png\"/></div>";
		}  else {
			cnt = 0;
			measure_div.innerHTML = '';
		}
	}else{
		if(cnt < 4) {
			measure_div.innerHTML = "<div class='measure'><img src=\"assets/images/measure_img/199_measuresp"+parseInt(cnt)+".png\"/></div>";
		}  else {
			cnt = 0;
			measure_div.innerHTML = '';
		}
	}
	measure(cnt);
}

/*End Measure*/


/* median starts  */
function median_extd(e) {
	if(selLang == "english") {
		if(e < 10) {
			document.getElementById('animation').innerHTML = "<div id='median_sub'><img src=\"assets/images/median_images/200_median"+parseInt(e+1)+".png\"/></div>";
		}
	}else {
			if(e < 10) {
			document.getElementById('animation').innerHTML = "<img src=\"assets/images/median_images/200_mediansp"+parseInt(e+1)+".png\"/>";
		}
	}
	cont = parseInt(e) + 1;
	median(cont);
}

function median(a) {
	var a = parseInt(a);
	if(a == 0) {
		englishTerm = "median";
		spanishTerm = "mediana";
		englishDef = "the middle value or mean of the middle values when the values of a data set are written in order";
		spanishDef = "el valor de en medio o media de los valores de en medio cuando los valores de un conjunto de datos se escriben en orden";
		replayAnimation = 1;
		showTermDefinition();
	}
	if(a < 11) {
		//timer_1 = setTimeout("median_extd(" + a + ")", 727);
	} else {
		//timer_1 = setTimeout("median_extd(" + a + ")", 1000);
	}
}

/* median ends  */

/*  meter starts  */
function meter_extd(e) {
		var count = parseInt(e);
		count++;
		if(count==1) {
			document.getElementById('animation').innerHTML = "<img class='meter_1' src='assets/images/meter_images/201_meter"+count+".png'/>";
		}else if(count<=4){
			if(selLang == "english"){
				document.getElementById('animation').innerHTML = "<img class='meter_1' src='assets/images/meter_images/201_meter"+count+".png'/>";
			}else{
				document.getElementById('animation').innerHTML = "<img class='meter_1' src='assets/images/meter_images/201_meterSP"+count+".png'/>";
			}
		}
		  else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
	
	meter(count);
}
function meter(a) {
	var a = parseInt(a);
	if(a == 0) {
		englishTerm = "meter";
		spanishTerm = "metro";
		englishDef = "a metric unit that measures length";
		spanishDef = "una unidad métrica que mide longitud";
		showTermDefinition();
	}
	//timer_1 = setTimeout("meter_extd(" + a + ")", 1200);
}

/* meter ends  */

/*make a 10*/
function make_a_10(a) {
	if(a == 0) {
		englishTerm = "make a 10";
		spanishTerm = "hacer 10";
		englishDef = "add numbers that make 10";
		spanishDef = "agregar números para obtener un 10";
		showTermDefinition();
	}
	//timer_1 = setTimeout("make_a_10_extd(" + a + ")", 900);
}

function make_a_10_extd(e) {
	var cnt = parseInt(e);
	cnt++;
	if(cnt < 9) {
		document.getElementById('animation').innerHTML = "<div class='make_ten_1'><img src='assets/images/make_a_10_img/"+parseInt(cnt)+".png\'></div>";
	}  else {
		cnt = 0;
		document.getElementById('animation').innerHTML = "";
	}
	make_a_10(cnt);
}
/*end make a 10*/


/* millions period */
function millions_period(a) {
	if(a == 0) {
		englishTerm = "millions period";
		spanishTerm = "periodo del millón";
		englishDef = "the period to the left of the thousands period, containing the millions place, the ten millions place, and the hundred millions place";
		spanishDef = "el periodo a la izquierda del periodo de los millares que contiene la posición de los millones, la posición de los diez millones y la posición de los cien millones";
		showTermDefinition();
	}
	if(a != 5) {
		//timer_1 = setTimeout("millions_period_extd(" + a + ")", 800);
	} else {
		//timer_1 = setTimeout("millions_period_extd(" + a + ")", 1200);
	}
}

function millions_period_extd(e) {
	var cnt = parseInt(e);
	var millions_period_div = document.getElementById('animation');
	cnt++;
	if(cnt < 6) {
		millions_period_div.innerHTML = "<div><img src='assets/images/millions_period_img/205_millionsperiod"+cnt+".png'/></div>";
	} else {
		cnt = 0;
		millions_period_div.innerHTML = "";
	}
	millions_period(cnt);
}
/*206_minus*/
function minus(a) {
	if(a == 0) {
		englishTerm = "minus";
		spanishTerm = "menos";
		englishDef = "subtract or take away";
		spanishDef = "restar o quitar";
		showTermDefinition();
	}
	//timer_1 = setTimeout("minus_extd(" + a + ")", 1500);

}

function minus_extd(e) {
	var d = parseInt(e);
	
	if(e < 6) {
		document.getElementById('animation').innerHTML = "<div class='minus'><img src='assets/images/minus_images/206_minus"+parseInt(d+1)+".png'/></div>";
	} else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	d = parseInt(e) + 1;

	minus(d);
}

/*end 206_minus*/

/*minute hand*/

function minute_hand(a) {
	if(a == 0) {
		englishTerm = "minute hand";
		spanishTerm = "manecilla de los minutos";
		englishDef = "the long hand on an analog clock";
		spanishDef = "la manecilla larga de un reloj analógico";
		showTermDefinition();
	}
	//timer_1 = setTimeout("minute_hand_extd(" + a + ")", 2000);
}

function minute_hand_extd(e) {
	var count = parseInt(e);
	count++;
	if(selLang == "english") {
		if(count <= 2) {
			document.getElementById('animation').innerHTML = "<img class='minutehand1' src='assets/images/minute_hand/207_minutehand"+count+".png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
	}else{
		if(count <= 2) {
			document.getElementById('animation').innerHTML = "<img src='assets/images/minute_hand/207_minutehandsp"+count+".png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
	}
		minute_hand(count);
}

/*end minute hand*/

/* more likely starts*/
function more_likely(a) {
	if(a == 0) {
		englishTerm = "more likely";
		spanishTerm = "más probable";
		englishDef = "has a good chance of happening";
		spanishDef = "algo que tiene buena probabilidad de ocurrir";
		showTermDefinition();
	}
	//timer_1 = setTimeout("more_likely_extd(" + a + ")", 2000);
}

function more_likely_extd(e) {
	var cont = parseInt(e);
	if(selLang == "english") {
		if(cont<3)
		{
			document.getElementById('animation').innerHTML = '<div class="more_likely_img"><br/><img src="assets/images/more_likely_images/211_more-likely'+parseInt(cont+1)+'.png" /></div>';
		} else {
			document.getElementById('animation').innerHTML = "";
			e = -1;
		}
	}else{
		if(cont<3)
		{
			document.getElementById('animation').innerHTML = '<img src="assets/images/more_likely_images/211_more-likelysp'+parseInt(cont+1)+'.png" />';
		} else {
			document.getElementById('animation').innerHTML = "";
			e = -1;
		}
	}
	cont = parseInt(e) + 1;
	more_likely(cont);
}

/* more likely ends */

/* most likely starts*/
function most_likely(a) {
	if(a == 0) {
		englishTerm = "most likely";
		spanishTerm = "el más probable";
		englishDef = "has the greatest chance of happening";
		spanishDef = "aquello que tiene la mayor probabilidad de ocurrir";
		showTermDefinition();
	}
	//timer_1 = setTimeout("most_likely_extd(" + a + ")", 2000);
}

function most_likely_extd(e) {
	var cont = parseInt(e);
	if(selLang == "english") {
		if(cont < 3)
		{
			document.getElementById('animation').innerHTML = '<div class="most_likely_img"><br/><img src="assets/images/most_likely_images/212_most-likely'+parseInt(cont+1)+'.png" /></div>';
		}
		else {
			document.getElementById('animation').innerHTML = "";
			e = -1;
		}
	}else{
		if(cont < 3)
		{
			document.getElementById('animation').innerHTML = '<img src="assets/images/most_likely_images/212_most-likelysp'+parseInt(cont+1)+'.png" />';
		}
		else {
			document.getElementById('animation').innerHTML = "";
			e = -1;
		}
	}
	cont = parseInt(e) + 1;
	most_likely(cont);
}

/* most likely ends */


/* numerator starts  */


function numerator_extd(e) {
	var cnt = parseInt(e);
	var numerator_div = document.getElementById('animation');
	cnt++;
	if(selLang=="english"){
	if(cnt == 1) {
		numerator_div.innerHTML = "<img src='assets/images/numerator/227_numerator1.png'/>"
	} else if(cnt == 2) {
		numerator_div.innerHTML = "<img src='assets/images/numerator/227_numerator2.png'/>";
	} else if(cnt == 3) {
		numerator_div.innerHTML = "<img src='assets/images/numerator/227_numerator3.png'/>";
	} else if(cnt == 4) {
		numerator_div.innerHTML = "<img src='assets/images/numerator/227_numerator4.png'/>";
	}  else if(cnt == 5) {
		cnt = 0;
		numerator_div.innerHTML = '';
	}
	}
	else{
		if(cnt == 1) {
		numerator_div.innerHTML = "<img src='assets/images/numerator/227_numerator1.png'/>"
	} else if(cnt == 2) {
		numerator_div.innerHTML = "<img src='assets/images/numerator/227_numeratorsp2.png'/>";
	} else if(cnt == 3) {
		numerator_div.innerHTML = "<img src='assets/images/numerator/227_numerator3.png'/>";
	} else if(cnt == 4) {
		numerator_div.innerHTML = "<img src='assets/images/numerator/227_numeratorsp4.png'/>";
	} else if(cnt == 5) {
		cnt = 0;
		numerator_div.innerHTML = '';
	}
	}
	numerator(cnt);
}
function numerator(a) {
	var a = parseInt(a);
	if(a == 0) {
		englishTerm = "numerator";
		spanishTerm = "numerador";
		englishDef = "the number above the bar in a fraction that tells how many equal parts of the whole or parts of the set are being considered";
		spanishDef = "el número que se coloca sobre la barra de una fracción para indicar cuántas partes iguales del entero o cuántas partes del conjunto se tienen en cuenta";
		showTermDefinition();
	}
	//timer_1 = setTimeout("numerator_extd(" + a + ")", 1000);
}

/* numerator ends  */

/*228_numerical expression*/
function numerical_expression(a) {
	if(a == 0) {
		englishTerm = "numerical expression";
		spanishTerm = "expresión numérica";
		englishDef = "a number sentence that consists of only numbers";
		spanishDef = "un enunciado numérico que solo tiene números";
		showTermDefinition();
	}
	//timer_1 = setTimeout("numerical_expression_extd(" + a + ")", 1500);
}

function numerical_expression_extd(e) {
	var d = parseInt(e);
	if(e < 4) {
		document.getElementById('animation').innerHTML = "<div class='num_express'><img src=\"assets/images/numerical_expression_images/228_numerical-expression"+parseInt(e+1)+".png\"/></div>";
	} else {
		e = -1;
		document.getElementById('animation').innerHTML = "";
	}
	d = parseInt(e) + 1;

	numerical_expression(d);
}

/*end 228_numerical expression*/
/* number line starts*/
function number_line(a) {
	if(a == 0) {
		englishTerm = "number line";
		spanishTerm = "recta numérica";
		englishDef = "a line that shows the order of numbers";
		spanishDef = "una recta que muestra el orden de los números";
		showTermDefinition();
	}
	//timer_1 = setTimeout("number_line_extd(" + a + ")", 1000);
}

function number_line_extd(e) {
	var cont = parseInt(e);
	if(cont == 0)
		document.getElementById('animation').innerHTML = '<div class="negative_intergers_img"><img src="assets/images/number_line_images/number_line.png"/></div>';
	else if(cont == 1)
		document.getElementById('animation').innerHTML = '<div class="negative_intergers_img"><img src="assets/images/number_line_images/number_line1.png"/></div>';
	else if(cont == 2)
		document.getElementById('animation').innerHTML = '<div class="negative_intergers_img"><img src="assets/images/number_line_images/number_line2.png"/></div>';
	else if(cont == 3)
		document.getElementById('animation').innerHTML = '<div class="negative_intergers_img"><img src="assets/images/number_line_images/number_line3.png"/></div>';
	else if(cont == 4)
		document.getElementById('animation').innerHTML = '<div class="negative_intergers_img"><img src="assets/images/number_line_images/number_line4.png"/></div>';
	else if(cont == 5)
		document.getElementById('animation').innerHTML = '<div class="negative_intergers_img"><img src="assets/images/number_line_images/number_line5.png"/></div>';
	else if(cont == 6)
		document.getElementById('animation').innerHTML = '<div class="negative_intergers_img"><img src="assets/images/number_line_images/number_line6.png"/></div>';
	else if(cont == 7)
		document.getElementById('animation').innerHTML = '<div class="negative_intergers_img"><img src="assets/images/number_line_images/number_line7.png"/></div>';
	else if(cont == 8)
		document.getElementById('animation').innerHTML = '<div class="negative_intergers_img"><img src="assets/images/number_line_images/number_line8.png"/></div>';
	else if(cont == 9)
		document.getElementById('animation').innerHTML = '<div class="negative_intergers_img"><img src="assets/images/number_line_images/number_line9.png"/></div>';
	else if(cont == 10)
		document.getElementById('animation').innerHTML = '<div class="negative_intergers_img"><img src="assets/images/number_line_images/number_line10.png"/></div>';
	else if(cont == 11)
		document.getElementById('animation').innerHTML = '<div class="negative_intergers_img"><img src="assets/images/number_line_images/number_line11.png"/></div>';
	else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	cont = parseInt(e) + 1;
	number_line(cont);
}

/* number line ends */
/* nonnegative_number starts*/
function nonnegative_number(a) {
	if(a == 0) {
		englishTerm = "nonnegative number";
		spanishTerm = "número no negativo";
		englishDef = "a number that is either 0 or positive";
		spanishDef = "un número que es o el 0 o es positivo";
		showTermDefinition();
	}
	//timer_1 = setTimeout("nonnegative_number_extd(" + a + ")", 1000);
}

function nonnegative_number_extd(e) {
	var cont = parseInt(e);
	if(cont == 0)
		document.getElementById('animation').innerHTML = '<div class="negative_intergers_img"><img src="assets/images/nonnegative_images/nonnegative.png"/></div>';
	else if(cont == 1)
		document.getElementById('animation').innerHTML = '<div class="negative_intergers_img"><img src="assets/images/nonnegative_images/nonnegative1.png"/></div>';
	else if(cont == 2)
		document.getElementById('animation').innerHTML = '<div class="negative_intergers_img"><img src="assets/images/nonnegative_images/nonnegative2.png"/></div>';
	else if(cont == 3)
		document.getElementById('animation').innerHTML = '<div class="negative_intergers_img"><img src="assets/images/nonnegative_images/nonnegative3.png"/></div>';
	else if(cont == 4)
		document.getElementById('animation').innerHTML = '<div class="negative_intergers_img"><img src="assets/images/nonnegative_images/nonnegative4.png"/></div>';
	else if(cont == 5)
		document.getElementById('animation').innerHTML = '<div class="negative_intergers_img"><img src="assets/images/nonnegative_images/nonnegative5.png"/></div>';
	else if(cont == 6)
		document.getElementById('animation').innerHTML = '<div class="negative_intergers_img"><img src="assets/images/nonnegative_images/nonnegative6.png"/></div>';
	else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	cont = parseInt(e) + 1;
	nonnegative_number(cont);
}

/* nonnegative_number ends */
/* nonnegative starts*/
function nonnegative(a) {
	if(a == 0) {
		englishTerm = "nonnegative";
		spanishTerm = "no negativo";
		englishDef = "either 0 or a positive number";
		spanishDef = "el 0 o un número positivo";
		showTermDefinition();
	}
	//timer_1 = setTimeout("nonnegative_extd(" + a + ")", 1000);
}

function nonnegative_extd(e) {
	var cont = parseInt(e);
	if(cont == 0)
		document.getElementById('animation').innerHTML = '<div class="negative_intergers_img"><img src="assets/images/nonnegative_images/nonnegative.png"/></div>';
	else if(cont == 1)
		document.getElementById('animation').innerHTML = '<div class="negative_intergers_img"><img src="assets/images/nonnegative_images/nonnegative1.png"/></div>';
	else if(cont == 2)
		document.getElementById('animation').innerHTML = '<div class="negative_intergers_img"><img src="assets/images/nonnegative_images/nonnegative2.png"/></div>';
	else if(cont == 3)
		document.getElementById('animation').innerHTML = '<div class="negative_intergers_img"><img src="assets/images/nonnegative_images/nonnegative3.png"/></div>';
	else if(cont == 4)
		document.getElementById('animation').innerHTML = '<div class="negative_intergers_img"><img src="assets/images/nonnegative_images/nonnegative4.png"/></div>';
	else if(cont == 5)
		document.getElementById('animation').innerHTML = '<div class="negative_intergers_img"><img src="assets/images/nonnegative_images/nonnegative5.png"/></div>';
	else if(cont == 6)
		document.getElementById('animation').innerHTML = '<div class="negative_intergers_img"><img src="assets/images/nonnegative_images/nonnegative6.png"/></div>';
	else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	cont = parseInt(e) + 1;
	nonnegative(cont);
}

/* nonnegative ends */
/* nonlinear equation */
function nonlinear_function(a) {
	if(a == 0) {
		englishTerm = "nonlinear function";
		spanishTerm = "función no linear";
		englishDef = "a function whose graph is not a straight line";
		spanishDef = "una función cuya gráfica no es una línea recta";
		showTermDefinition();
	}
	if(a != 6) {
		//timer_1 = setTimeout("nonlinear_function_extd(" + a + ")", 1800);
	} else {
		//timer_1 = setTimeout("nonlinear_function_extd(" + a + ")", 1200);
	}
}

function nonlinear_function_extd(e) {
	var count = parseInt(e);
	count++;
	if(count <= 5) {
		document.getElementById('animation').innerHTML = "<img class='nonlinear1' src='assets/images/nonlinear_img/223_nonlinearfunction"+count+".png'/>";
	} else {
		document.getElementById('animation').innerHTML = "";
		count = 0;
	}
		nonlinear_function(count);
}

/* nickel begins */

function nickel(a) {
	if(a == 0) {
		englishTerm = "nickel";
		spanishTerm = "moneda de 5¢";
		englishDef = "a coin that is worth 5 cents";
		spanishDef = "moneda que vale 5 centavos";
		showTermDefinition();
	}
	//timer_1 = setTimeout("nickel_extd(" + a + ")", 1200);
}

function nickel_extd(e) {
	var arr = "<img  id= 'bc' class = 'nickel_img nickel_img_index' src='assets/images/nickel_images/nickel.png'/>";
	var arr1 = "1 nickel";
	var sarr1 = "1 nickel";
	var arr2 = "20 nickels = 1 dollar";
	var sarr2 = "20 nickels = 1 dollar";
	var cont = parseInt(e);

	if(e == 0) {
		if(selLang == "english") {
			document.getElementById('animation').innerHTML = "<div id='nickel_second'>&nbsp;" + arr + "</div><br/>";
			document.getElementById('animation').innerHTML += "<div class ='nickel_text label_font_semibold' class=''>&nbsp;" + arr1 + "</div><br/>";
		} else if(selLang == "spanish") {
			document.getElementById('animation').innerHTML = "<div id='nickel_second'>&nbsp;" + arr + "</div><br/>";
			document.getElementById('animation').innerHTML += "<div class ='nickel_text label_font_semibold'>&nbsp;" + sarr1 + "</div><br/>";
		}
	} else if(e == 1) {

		var img = "";

		for(var i = 0; i < 20; i++) {

			if(i == 15)
				img += "<div class='nickel_flow ni_flowing'><img  id= 'bc1' class = 'nickel_img1' src='assets/images/nickel_images/nickel1.png'></div>";
			else
				img += "<div class='nickel_flow ni_flowing'><img  id= 'bc1' class = 'nickel_img1' src='assets/images/nickel_images/nickel.png'></div>";

		}
		document.getElementById('nickel_second').innerHTML = "&nbsp";
		document.getElementById('animation').innerHTML = "<div id='nickel_second'>&nbsp;" + arr + "</div><br/>";
		document.getElementById('animation').innerHTML += img;

	} else if(e == 2) {

		$('.nickel_flow').animate({
			top : -190
		});
	} else if(e == 3) {
		if(selLang == "english") {
			document.getElementById('animation').innerHTML += "<div class ='nickel_text label_font_semibold'>&nbsp;" + arr2 + "</div><br/>";
		} else if(selLang == "spanish") {
			document.getElementById('animation').innerHTML += "<div class ='nickel_text label_font_semibold'>&nbsp;" + sarr2 + "</div><br/>";
		}
	} else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	cont = parseInt(e) + 1;

	nickel(cont);
}

/* nickel ends */
/* net starts*/
function net(a) {
	if(a == 0) {
		englishTerm = "net";
		spanishTerm = "red";
		englishDef = "a pattern that can be folded to make a three-dimensional figure";
		spanishDef = "un patrón que puede doblarse para hacer una figura tridimensional";
		showTermDefinition();
	}
	//timer_1 = setTimeout("net_extd(" + a + ")", 1000);
}

function net_extd(e) {
	var count = parseInt(e);
	count++;
	if(count <= 4) {
		document.getElementById('animation').innerHTML = "<img class='net1' src='assets/images/net_images/221_net"+count+".png'/>";
	} else {
		document.getElementById('animation').innerHTML = "";
		count = 0;
	}
		net(count);
}

/* net ends */
/* negative intergers starts*/
function negative_integers(a) {
	if(a == 0) {
		englishTerm = "negative integers";
		spanishTerm = "enteros negativos";
		englishDef = "integers less than 0";
		spanishDef = "enteros menores que 0";
		showTermDefinition();
	}
	//timer_1 = setTimeout("negative_integers_extd(" + a + ")", 1300);
}

function negative_integers_extd(e) {
	var cont = parseInt(e);
	if(cont == 0)
		document.getElementById('animation').innerHTML = '<div class="negative_intergers_img"><img src="assets/images/negative_integer_images/negative_integers.png" /></div>';
	else if(cont == 1)
		document.getElementById('animation').innerHTML = '<div class="negative_intergers_img"><img src="assets/images/negative_integer_images/negative_integers1.png"/></div>';
	else if(cont == 2)
		document.getElementById('animation').innerHTML = '<div class="negative_intergers_img"><img src="assets/images/negative_integer_images/negative_integers2.png"/></div>';
	else if(cont == 3)
		document.getElementById('animation').innerHTML = '<div class="negative_intergers_img"><img src="assets/images/negative_integer_images/negative_integers3.png"/></div>';
	else if(cont == 4)
		document.getElementById('animation').innerHTML = '<div class="negative_intergers_img"><img src="assets/images/negative_integer_images/negative_integers4.png"/></div>';
	else if(cont == 5)
		document.getElementById('animation').innerHTML = '<div class="negative_intergers_img"><img src="assets/images/negative_integer_images/negative_integers5.png"/></div>';
	
	else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	cont = parseInt(e) + 1;
	negative_integers(cont);
}

/* negative intergers ends */
/* obtuse angle*/
function obtuse_angle(a) {
	if(a == 0) {
		englishTerm = "obtuse angle";
		spanishTerm = "ángulo obtuso";
		englishDef = "an angle whose measure is between 90° and 180°";
		spanishDef = "un ángulo cuya medida está entre 90° y 180°";
		showTermDefinition();
	}
	if(a != 11) {
		//timer_1 = setTimeout("obtuse_angle_extd(" + a + ")", 600);
	} else {
		//timer_1 = setTimeout("obtuse_angle_extd(" + a + ")", 1200);
	}
}

function obtuse_angle_extd(e) {
	var count = parseInt(e);
	count++;
	if(count <= 6) {
		document.getElementById('animation').innerHTML = "<img class='obtuseangle1' src='assets/images/obtuse_angle_img/229_obtuseangle"+count+".png'/>";
	} else if(count == 7){
		document.getElementById('animation').innerHTML = "<img class='obtuseangle1' src='assets/images/obtuse_angle_img/229_obtuseangle5.png'/>";
	}else if(count == 8){
		document.getElementById('animation').innerHTML = "<img class='obtuseangle1' src='assets/images/obtuse_angle_img/229_obtuseangle4.png'/>";
	}else if(count == 9){
		document.getElementById('animation').innerHTML = "<img class='obtuseangle1' src='assets/images/obtuse_angle_img/229_obtuseangle3.png'/>";
	}else if(count == 10){
		document.getElementById('animation').innerHTML = "<img class='obtuseangle1' src='assets/images/obtuse_angle_img/229_obtuseangle2.png'/>";
	}else if(count == 11){
		document.getElementById('animation').innerHTML = "<img class='obtuseangle1' src='assets/images/obtuse_angle_img/229_obtuseangle1.png'/>";
	}else {
		document.getElementById('animation').innerHTML = "";
		count = 0;
	}
		obtuse_angle(count);
}


/* obtuse triangle starts  */
function obtuse_triangle_extd(e) {
	var count = parseInt(e);
	count++;
	if(count <= 2) {
		document.getElementById('animation').innerHTML = "<img class='obtusetriangle1' src='assets/images/obtuse_triangle_images/230_obtusetriangle"+count+".png'/>";
	} else {
		document.getElementById('animation').innerHTML = "";
		count = 0;
	}
		obtuse_triangle(count);
}


function obtuse_triangle(a) {
	var a = parseInt(a);
	if(a == 0) {
		englishTerm = "obtuse triangle";
		spanishTerm = "triángulo obtuso";
		englishDef = "a triangle with one obtuse angle";
		spanishDef = "un triángulo con un ángulo obtuso";
		showTermDefinition();
	}
	//timer_1 = setTimeout("obtuse_triangle_extd(" + a + ")", 1333);
}

/* obtuse triangle ends  */
/* octagon starts  */
function octagon_extd(e) {
	var count = parseInt(e);
	count++;
	if(count <= 18) {
		document.getElementById('animation').innerHTML = "<img class='octagon1' src='assets/images/octagon_images/231_octagon"+count+".png'/>";
	} else {
		document.getElementById('animation').innerHTML = "";
		count = 0;
	}
		octagon(count);
}

function octagon(a) {
	var a = parseInt(a);
	if(a == 0) {
		englishTerm = "octagon";
		spanishTerm = "octágono";
		englishDef = "a polygon with eight sides and eight angles";
		spanishDef = "un polígono con ocho lados y ocho ángulos";
		showTermDefinition();
	}
	/*if(a == 18 || a == 9)
		//timer_1 = setTimeout("octagon_extd(" + a + ")", 1300);
	else
		//timer_1 = setTimeout("octagon_extd(" + a + ")", 400);*/
}

/* octagon ends  */

/* odd number starts  */

function odd_number_extd(e) {
	var display;

	if(e == 0) {
		display = "<div class='label_font_regular'><span class='odd_number' id='oind5'>53</span><span class='odd_number' id='oind4'></span ><br/><span class='odd_number' id='oind1'></span ><span class='odd_number' id='oind2'></span ><span class='odd_number' id='oind0'></span ><br/><span class='odd_number' id='oind3'></span></div>";
	} else if(e == 1) {
		display = "<div class='label_font_regular'><span class='odd_number' id='oind5'>53</span><span class='odd_number' id='oind4'></span ><br/><span class='odd_number' id='oind1'>35</span ><span class='odd_number' id='oind2'></span ><span class='odd_number' id='oind0'></span ><br/><span class='odd_number' id='oind3'></span></div>";
	} else if(e == 2) {
		display = "<div class='label_font_regular'><span class='odd_number' id='oind5'>53</span><span class='odd_number' id='oind4'></span ><br/><span class='odd_number' id='oind1'>35</span ><span class='odd_number' id='oind2'></span ><span class='odd_number' id='oind0'></span ><br/><span class='odd_number' id='oind3'>7</span></div>";
	} else if(e == 3) {
		display = "<div class='label_font_regular'><span class='odd_number' id='oind5'>53</span><span class='odd_number' id='oind4'></span ><br/><span class='odd_number' id='oind1'>35</span ><span class='odd_number' id='oind2'>71</span ><span class='odd_number' id='oind0'></span ><br/><span class='odd_number' id='oind3'>7</span></div>";
	} else if(e == 4) {
		display = "<div class='label_font_regular'><span class='odd_number' id='oind5'>53</span><span class='odd_number' id='oind4'>17</span ><br/><span class='odd_number' id='oind1'>35</span ><span class='odd_number' id='oind2'>71</span ><span class='odd_number' id='oind0'></span ><br/><span class='odd_number' id='oind3'>7</span></div>";
	} else if(e == 5) {
		display = "<div class='label_font_regular'><span class='odd_number' id='oind5'>53</span><span class='odd_number' id='oind4'>17</span ><br/><span class='odd_number' id='oind1'>35</span ><span class='odd_number' id='oind2'>71</span ><span class='odd_number' id='oind0'>29</span ><br/><span class='odd_number' id='oind3'>7</span></div>";
	}
	if(e < 6) {
		document.getElementById('animation').innerHTML = "<div id='odd_number_sub'>" + display + "</div>";
	} else if(e == 6) {
		document.getElementById('animation').innerHTML = "";
	} else {
		e = -1;
	}
	cont = parseInt(e) + 1;
	odd_number(cont);
}

function odd_number(a) {
	var a = parseInt(a);
	if(a == 0) {
		englishTerm = "odd number";
		spanishTerm = "número impar";
		englishDef = "a whole number with 1, 3, 5, 7, or 9 in the ones place";
		spanishDef = "un número entero con 1, 3, 5, 7 ó 9 en el lugar de las unidades";
		showTermDefinition();
	}
	//timer_1 = setTimeout("odd_number_extd(" + a + ")", 857);
}

/* odd number ends  */



/*opposite of an integers*/
function opposite_of_an_integer(a) {
	if(a == 0) {
		englishTerm = "opposite of an integer";
		spanishTerm = "opuesto de un entero";
		englishDef = "the integer that is the same distance from 0 on a number line as the given integer, but in the opposite direction";
		spanishDef = "el entero que está a la misma distancia del 0 en una recta numérica que el entero en cuestión, pero en la dirección opuesta";
		showTermDefinition();
	}
	//timer_1 = setTimeout("opposite_of_an_integer_extd(" + a + ")", 2000);
}

function opposite_of_an_integer_extd(e) {
	var d = parseInt(e);
	if(e == 0) {
		document.getElementById('animation').innerHTML = "<div class='opp_integer'><img src='assets/images/opp_integers_img/220_negativeintegers.png' class='opp_integer1'/></div>";
	} else if(e == 1) {
		document.getElementById('animation').innerHTML = "<div class='opp_integer'><img src='assets/images/opp_integers_img/220_negativeintegers1.png' class='opp_integer1'/></div>";
	} else if(e == 2) {
		document.getElementById('animation').innerHTML = "<div class='opp_integer'><img src='assets/images/opp_integers_img/220_negativeintegers2.png' class='opp_integer1'/></div>";
	} else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	d = parseInt(e) + 1;

	opposite_of_an_integer(d);
}

/*end opposite of an integers*/
/*236 opposite of a number*/
function opposite_of_a_number(a) {
	if(a == 0) {
		englishTerm = "opposite of a number";
		spanishTerm = "opuesto de un número";
		englishDef = "the same number but of the opposite sign";
		spanishDef = "el mismo número pero del signo opuesto";
		showTermDefinition();
	}
	//timer_1 = setTimeout("opposite_of_a_number_extd(" + a + ")", 1000);
}

function opposite_of_a_number_extd(e) {
	var d = parseInt(e);
	if(e < 4) {
		document.getElementById('animation').innerHTML = "<div class='opp_of_num'><img src=\"assets/images/opposite_of_number/236_opposite-of-a-number"+parseInt(e+1)+".png\"/></div>";
	} else {
		e = -1;
		document.getElementById('animation').innerHTML = "";
	}
	d = parseInt(e) + 1;

	opposite_of_a_number(d);
}

/*end 236 opposite of a number*/

/* order starts  */
function order_extd(e) {
	if(e < 9) {
		document.getElementById('animation').innerHTML = "<div id='order_sub'><img src=\"assets/images/order_images/238_order"+parseInt(e+1)+".png\"/></div>";
	} else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	cont = parseInt(e) + 1;
	order(cont);
}

function order(a) {
	var a = parseInt(a);
	if(a == 0) {
		englishTerm = "order";
		spanishTerm = "ordera";
		englishDef = "to list three or more numbers from least to greatest or greatest to least";
		spanishDef = "hacer una lista de tres o más números del menor al mayor o del mayor al menor";
		showTermDefinition();
	}
	//timer_1 = setTimeout("order_extd(" + a + ")", 1000);
}

/* order ends  */

/*order of operations*/
function order_of_operations(a) {
	if(a == 0) {
		englishTerm = "order of operations";
		spanishTerm = "orden de las operaciones";
		englishDef = "the order in which to perform operations when evaluating an expression with more than one operation";
		spanishDef = "el orden en el que se realizan las operaciones cuando se evalúa una expresión con más de una operación";
		showTermDefinition();
	}
	//timer_1 = setTimeout("order_of_operations_extd(" + a + ")", 1000);

}

function order_of_operations_extd(e) {
	var d = parseInt(e);
	  
		if(e < 5) {
			document.getElementById('animation').innerHTML = "<div class='order_ope'><img src=\"assets/images/order_of_operation_images/239_order-of-operations"+parseInt(e+1)+".png\"/></div>";
		} else {
			document.getElementById('animation').innerHTML = "";
			e = -1;
		}
	
	d = parseInt(e) + 1;
	order_of_operations(d);
}

/*end order of operations*/


/*240_ordered_pair*/
function ordered_pair(a) {
	if(a == 0) {
		englishTerm = "ordered pair";
		spanishTerm = "par ordenado";
		englishDef = "a pair of numbers used to locate a point on a coordinate graph";
		spanishDef = "un par de números que se usa para ubicar un punto en una gráfica de coordenadas";
		showTermDefinition();
	}
	if(a == 4 || a == 7) {
		//timer_1 = setTimeout("ordered_pair_extd(" + a + ")", 1800);
	} else {
		//timer_1 = setTimeout("ordered_pair_extd(" + a + ")", 800);
	}
}

function ordered_pair_extd(e) {
	var d = parseInt(e);
	if(e < 7) {
		document.getElementById('animation').innerHTML = "<div class='order_pair'><img src='assets/images/orderd_pair/240_ordered-pair"+parseInt(e+1)+".png'/></div>";
	}  else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	d = parseInt(e) + 1;

	ordered_pair(d);
}

/*end 240_ordered_pair*/

/*  ordinal number starts  */
function ordinal_number_extd(e) {
	
	if(e < 7) {
		document.getElementById('animation').innerHTML = "<div class='ordinal_number_sub'><img src='assets/images/ordinal_number_images/241_ordinalnumber"+parseInt(e+1)+".png'/></div>";
	} else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	cont = parseInt(e) + 1;
	ordinal_number(cont);
}

function ordinal_number(a) {
	var a = parseInt(a);
	if(a == 0) {
		englishTerm = "ordinal number";
		spanishTerm = "número ordinal";
		englishDef = "a number that tells position or order";
		spanishDef = "un número que dice la posición u orden";
		showTermDefinition();
	}
	//timer_1 = setTimeout("ordinal_number_extd(" + a + ")", 857);
}

/* ordinal number ends  */


/*242_origin*/
function origin(a) {
	if(a == 0) {
		englishTerm = "origin";
		spanishTerm = "origen";
		englishDef = "the point where the <span class='origin_italic'>x</span>-axis and <span class='origin_italic'>y</span>-axis intersect";
		spanishDef = "el punto donde el eje <span class='origin_italic'>x y</span> el eje <span class='origin_italic'>y</span> se cruzan";
		showTermDefinition();
	}
	//timer_1 = setTimeout("origin_extd(" + a + ")", 2000);
}

function origin_extd(e) {
	var d = parseInt(e);
	if(selLang == "english") {
		if(e == 0) {
			document.getElementById('animation').innerHTML = "<div class='originn'><img src='assets/images/origin_img/242_origin1.png'/></div>";
		} else if(e == 1) {
			document.getElementById('animation').innerHTML = "<div class='originn'><img src='assets/images/origin_img/242_origin2.png'/></div>";
		} else {
			document.getElementById('animation').innerHTML = "";
			e = -1;
		}
	}else{
		if(e == 0) {
			document.getElementById('animation').innerHTML = "<img src='assets/images/origin_img/242_originsp1.png'/>";
		} else if(e == 1) {
			document.getElementById('animation').innerHTML = "<img src='assets/images/origin_img/242_originsp2.png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			e = -1;
		}
	}
	d = parseInt(e) + 1;

	origin(d);
}

/*243_ounce*/
function ounce(a) {
	if(a == 0) {
		englishTerm = "ounce";
		spanishTerm = "onza";
		englishDef = "a customary unit that measures weight";
		spanishDef = "unidad estándar que mide el peso";
		showTermDefinition();
	}
	//timer_1 = setTimeout("ounce_extd(" + a + ")", 2000);
}

function ounce_extd(e) {
	var d = parseInt(e);

	if(e == 0) {
		document.getElementById('animation').innerHTML = "<div class='ounce'><img src='assets/images/ounce_img/243_ounce1.png'/></div>";
	} else if(e == 1) {
		document.getElementById('animation').innerHTML = "<div class='ounce'><img src='assets/images/ounce_img/243_ounce2.png'/></div>";
	} else {
		e = -1;
		document.getElementById('animation').innerHTML = "";
	}
	
	d = parseInt(e) + 1;
	ounce(d);
}

/*end 243_ounce*/


/* outcome*/
function outcome(a) {
	if(a == 0) {
		englishTerm = "outcome";
		spanishTerm = "resultado";
		englishDef = "a possible result";
		spanishDef = "un resultado posible";
		showTermDefinition();
	}
	if(a != 8) {
		//timer_1 = setTimeout("outcome_extd(" + a + ")", 1000);
	} else {
		//timer_1 = setTimeout("outcome_extd(" + a + ")", 1200);
	}
}

function outcome_extd(e) {
	var cnt = parseInt(e);
	var outcome_div = document.getElementById('animation');
	cnt++;
	if(cnt == 1) {
		outcome_div.innerHTML = "<div><img class='outcome_div' src='assets/images/outcome_img/244_outcome1.png' /></div>";
	} else if(cnt == 2) {
		outcome_div.innerHTML = "<div><img class='outcome_div' src='assets/images/outcome_img/244_outcome2.png' /></div>";
	} else if(cnt == 3) {
		outcome_div.innerHTML = "<div><img class='outcome_div' src='assets/images/outcome_img/244_outcome3.png' /></div>";
	} else if(cnt == 4) {
		outcome_div.innerHTML = "<div><img class='outcome_marble' src='assets/images/outcome_img/244_outcome4.png' /></div>";
	} else if(cnt == 5) {
		outcome_div.innerHTML = "<div><img class='outcome_marble' src='assets/images/outcome_img/244_outcome5.png' /></div>";
	} else if(cnt == 6) {
		outcome_div.innerHTML = "<div><img class='outcome_marble' src='assets/images/outcome_img/244_outcome6.png' /></div>";
	} else if(cnt == 7) {
		outcome_div.innerHTML = "<div><img class='outcome_marble' src='assets/images/outcome_img/244_outcome7.png' /></div>";
	} else if(cnt == 8) {
		outcome_div.innerHTML = "<div><img class='outcome_marble' src='assets/images/outcome_img/244_outcome8.png' /></div>";
	} else {
		cnt = 0;
		outcome_div.innerHTML = "";
	}
	outcome(cnt);
}


/* outlier starts  */
function outlier_extd(e) {
	if(selLang == "english") {
		if(e < 4) {
			document.getElementById('animation').innerHTML = "<div id='outlier_sub'><img src='assets/images/outlier_images/245_outlier"+parseInt(e+1)+".png' /></div>";
		} else {
		
			document.getElementById('animation').innerHTML = "";
			e = -1;
		}
	}else{
		if(e < 4) {
			document.getElementById('animation').innerHTML = "<img src='assets/images/outlier_images/245_outliersp"+parseInt(e+1)+".png' />";
		} else {
		
			document.getElementById('animation').innerHTML = "";
			e = -1;
		}
	}
	cont = parseInt(e) + 1;
	outlier(cont);
}

function outlier(a) {
	var a = parseInt(a);
	if(a == 0) {
		englishTerm = "outlier";
		spanishTerm = "valor atípico";
		englishDef = "a value that is far away from the rest of the data values";
		spanishDef = "un valor que está muy alejado del resto de los valores";
		showTermDefinition();
	}
	//timer_1 = setTimeout("outlier_extd(" + a + ")", 1200);
}

/* outlier ends  */

/*part Begins*/
function part(a) {

	if(a == 0) {
		englishTerm = "part";
		spanishTerm = "parte";
		englishDef = "a number that is being joined by addition to one or more numbers";
		spanishDef = "un número que se une mediante una suma a uno o más números";
		showTermDefinition();
	}
	//timer_1 = setTimeout("part_extd(" + a + ")", 1000)
}
function part_extd(e) {
	var cnt = parseInt(e);
	var part_div = document.getElementById('animation');
	cnt++;
	if(selLang=="english"){
	if(cnt == 1) {
		part_div.innerHTML = "<img class='part1' src='assets/images/part_images/248_parts1.png'/>";
	} else if(cnt == 2) {
		part_div.innerHTML = "<img class='part1' src='assets/images/part_images/248_parts2.png'/>";
	} else if(cnt == 3) {
		part_div.innerHTML = "<img class='part1' src='assets/images/part_images/248_parts3.png'/>";
	} else if(cnt == 4) {
		part_div.innerHTML = "<img class='part1' src='assets/images/part_images/248_parts4.png'/>";
	} else if(cnt == 5) {
		cnt = 0;
		part_div.innerHTML = '';
	}
	}
	else{
		if(cnt == 1) {
		part_div.innerHTML = "<img class='part1' src='assets/images/part_images/248_parts1.png'/>";
	} else if(cnt == 2) {
		part_div.innerHTML = "<img class='part1' src='assets/images/part_images/248_partssp2.png'/>";
	} else if(cnt == 3) {
		part_div.innerHTML = "<img class='part1' src='assets/images/part_images/248_partssp3.png'/>";
	} else if(cnt == 4) {
		part_div.innerHTML = "<img class='part1' src='assets/images/part_images/248_partssp4.png'/>";
	}  else if(cnt == 5) {
		cnt = 0;
		part_div.innerHTML = '';
	}
	}
	part(cnt);
}
/*part Ends*/

/*percent Begins*/
function percent(a) {

	if(a == 0) {
		englishTerm = "percent";
		spanishTerm = "porcentaje";
		englishDef = "a ratio that compares a number with 100";
		spanishDef = "una razón que compara un número con 100";
		showTermDefinition();
	}
	//timer_1 = setTimeout("percent_extd(" + a + ")", 1143);
}

function percent_extd(e) {
		var count = parseInt(e);
		count++;
		if(count <= 6) {
			document.getElementById('animation').innerHTML = "<img class='percent1' src='assets/images/percent_images/252_percent"+count+".png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
			percent(count);
}

/*percent Ends*/

/*perfect_square Begins*/
function perfect_square(a) {

	if(a == 0) {
		englishTerm = "perfect square";
		spanishTerm = "cuadrado perfecto";
		englishDef = "a whole number that is the product of another number and itself";
		spanishDef = "un número entero que es el producto de otro número multiplicado por sí mismo";
		showTermDefinition();
	}
	//timer_1 = setTimeout("perfect_square_extd(" + a + ")", 1143);
	if(a != 6) {
		//timer_1 = setTimeout("perfect_square_extd(" + a + ")", 1120);
	} else {
		//timer_1 = setTimeout("perfect_square_extd(" + a + ")", 1143);
	}
}
function perfect_square_extd(e) {
		var count = parseInt(e);
		count++;
		if(count <= 6) {
			document.getElementById('animation').innerHTML = "<img class='perfect_square1' src='assets/images/perfect_square_images/255_perfect-square"+count+".png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
			perfect_square(count);
}

/*perfect_square Ends*/

/*percent_decrease Begins*/
function percent_decrease(a) {

	if(a == 0) {
		englishTerm = "percent decrease";
		spanishTerm = "disminución del porcentaje";
		englishDef = "change from a given number to a lesser number expressed as a percent of the given number";
		spanishDef = "el cambio de un número determinado a un número menor expresado como un porcentaje del número inicial";
		showTermDefinition();
	}
	//timer_1 = setTimeout("percent_decrease_extd(" + a + ")", 2000);
}
function percent_decrease_extd(e) {
		var count = parseInt(e);
		count++;
		if(count <= 3) {
			document.getElementById('animation').innerHTML = "<img class='percent_decrease1' src='assets/images/percent_decrease_images/253_percent-decrease"+count+".png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
			percent_decrease(count);
}
/*perfect_decrease Ends*/

/*percent_increase Begins*/
function percent_increase(a) {

	if(a == 0) {
		englishTerm = "percent increase";
		spanishTerm = "aumento del porcentaje";
		englishDef = "change from a given number to a greater number expressed as a percent of the given number";
		spanishDef = "el cambio de un número determinado a un número mayor expresado como un porcentaje del número inicial";
		showTermDefinition();
	}
	//timer_1 = setTimeout("percent_increase_extd(" + a + ")", 2000);
}

function percent_increase_extd(e) {
		var count = parseInt(e);
		count++;
		if(count <= 3) {
			document.getElementById('animation').innerHTML = "<img class='percent_increase1' src='assets/images/percent_increase_images/254_percent-increase"+count+".png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
			percent_increase(count);
}

/*perfect_increase Ends*/

/*perimeter Begins*/
function perimeter(a) {

	if(a == 0) {
		englishTerm = "perimeter";
		spanishTerm = "perímetro";
		englishDef = "the distance around the outside of a figure";
		spanishDef = "la distancia alrededor de la parte exterior de una figura";
		showTermDefinition();
	}
	if(a == 5 || a == 9) {
		//timer_1 = setTimeout("perimeter_extd(" + a + ")", 1500);
	} else {
		//timer_1 = setTimeout("perimeter_extd(" + a + ")", 625);
	}
}
function perimeter_extd(e) {
		var count = parseInt(e);
		count++;
		if(count <= 9) {
			document.getElementById('animation').innerHTML = "<img class='perimeter1' src='assets/images/perimeter_images/256_perimeter"+count+".png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
			perimeter(count);
}

/*perimeter Ends*/

/*proportion Begins*/
function proportion(a) {

	if(a == 0) {
		englishTerm = "proportion";
		spanishTerm = "proporción";
		englishDef = "an equation that shows that two ratios are equivalent";
		spanishDef = "una ecuación que muestra que dos razones son equivalentes";
		showTermDefinition();
	}
	//timer_1 = setTimeout("proportion_extd(" + a + ")", 800);
}
function proportion_extd(e) {
	var cnt = parseInt(e);
	var proportion_div = document.getElementById('animation');
	cnt++;
	if(selLang=="english"){
	if(cnt == 1) {
		proportion_div.innerHTML = "<img class='proportion1' src='assets/images/proportion_images/281_proportion1.png'/>";
	} else if(cnt == 2) {
		proportion_div.innerHTML = "<img class='proportion1' src='assets/images/proportion_images/281_proportion2.png'/>";
	} else if(cnt == 3) {
		proportion_div.innerHTML = "<img class='proportion1' src='assets/images/proportion_images/281_proportion3.png'/>";
	} else if(cnt == 4) {
		proportion_div.innerHTML = "<img class='proportion1' src='assets/images/proportion_images/281_proportion4.png'/>";
	} else if(cnt == 5) {
		proportion_div.innerHTML = "<img class='proportion1' src='assets/images/proportion_images/281_proportion5.png'/>";
	} else if(cnt == 6) {
		proportion_div.innerHTML = "<img class='proportion1' src='assets/images/proportion_images/281_proportion6.png'/>";
	} else if(cnt == 7) {
		proportion_div.innerHTML = "<img class='proportion1' src='assets/images/proportion_images/281_proportion7.png'/>";
	} else if(cnt == 8) {
		proportion_div.innerHTML = "<img class='proportion1' src='assets/images/proportion_images/281_proportion8.png'/>";
	} else if(cnt == 9) {
		proportion_div.innerHTML = "<img class='proportion1' src='assets/images/proportion_images/281_proportion9.png'/>";
	} else if(cnt == 10) {
		cnt = 0;
		proportion_div.innerHTML = '';
	}
	}
	else{
		if(cnt == 1) {
		proportion_div.innerHTML = "<img class='proportion1' src='assets/images/proportion_images/281_proportion1.png'/>";
	} else if(cnt == 2) {
		proportion_div.innerHTML = "<img class='proportion1' src='assets/images/proportion_images/281_proportionsp2.png'/>";
	} else if(cnt == 3) {
		proportion_div.innerHTML = "<img class='proportion1' src='assets/images/proportion_images/281_proportionsp3.png'/>";
	} else if(cnt == 4) {
		proportion_div.innerHTML = "<img class='proportion1' src='assets/images/proportion_images/281_proportionsp4.png'/>";
	} else if(cnt == 5) {
		proportion_div.innerHTML = "<img class='proportion1' src='assets/images/proportion_images/281_proportionsp5.png'/>";
	} else if(cnt == 6) {
		proportion_div.innerHTML = "<img class='proportion1' src='assets/images/proportion_images/281_proportionsp6.png'/>";
	} else if(cnt == 7) {
		proportion_div.innerHTML = "<img class='proportion1' src='assets/images/proportion_images/281_proportionsp7.png'/>";
	} else if(cnt == 8) {
		proportion_div.innerHTML = "<img class='proportion1' src='assets/images/proportion_images/281_proportionsp8.png'/>";
	} else if(cnt == 9) {
		proportion_div.innerHTML = "<img class='proportion1' src='assets/images/proportion_images/281_proportionsp9.png'/>";
	} else if(cnt == 10) {
		cnt = 0;
		proportion_div.innerHTML = '';
	}
	}
	proportion(cnt);
}

/*proportion Ends*/

/*power of a number Begins*/
function power_of_a_number(a) {

	if(a == 0) {
		englishTerm = "power of a number";
		spanishTerm = "potencia de un número";
		englishDef = "a number raised to an exponent";
		spanishDef = "un número elevado a un exponente";
		showTermDefinition();
	}
	//timer_1 = setTimeout("power_of_a_number_extd(" + a + ")", 2000)
}

function power_of_a_number_extd(e) {
	var cnt = parseInt(e);
	var powerof_div = document.getElementById('animation');
	cnt++;
	if(selLang=="english"){
	if(cnt == 1) {
		powerof_div.innerHTML = "<img class='power_of_number1' src='assets/images/power_of-a_number_images/274_power-of-a-number1.png'/>";
	} else if(cnt == 2) {
		powerof_div.innerHTML = "<img class='power_of_number1' src='assets/images/power_of-a_number_images/274_power-of-a-number2.png'/>";
	} else if(cnt == 3) {
		cnt = 0;
		powerof_div.innerHTML = '';
	}
	}
	else{
		if(cnt == 1) {
		powerof_div.innerHTML = "<img class='power_of_number1' src='assets/images/power_of-a_number_images/274_power-of-a-number1.png'/>";
	} else if(cnt == 2) {
		powerof_div.innerHTML = "<img class='power_of_number1' src='assets/images/power_of-a_number_images/274_power-of-a-numbersp2.png'/>";
	}  else if(cnt == 3) {
		cnt = 0;
		powerof_div.innerHTML = '';
	}
	}
	power_of_a_number(cnt);
}


/*power of a number Ends*/
/* parallel lines begins */

function parallel_lines(a) {
	if(a == 0) {
		englishTerm = "parallel lines";
		spanishTerm = "rectas paralelas";
		englishDef = "lines that are in the same plane and never intersect";
		spanishDef = "rectas que están en el mismo plano y nunca se cruzan";
		showTermDefinition();
	}
	//timer_1 = setTimeout("parallel_lines_extd(" + a + ")", 2000);
}

function parallel_lines_extd(e) {
	var count = parseInt(e);
	count++;
	if(count <= 2) {
		document.getElementById('animation').innerHTML = "<img class='parallel_lines1' src='assets/images/parallel_lines/246_parallel-lines"+count+".png' HSPACE='5'/>";
	} else {
		//document.getElementById('animation').innerHTML = "";
		//count = 0;
	}
		parallel_lines(count);
}
/* parallel_lines ends */

/* plus_sign starts*/
function plus_sign(a) {
	if(a == 0) {
		englishTerm = "plus sign";
		spanishTerm = "signo de suma";
		englishDef = "a symbol that shows the joining of parts";
		spanishDef = "un símbolo que muestra la unión de partes";
		showTermDefinition();
	}
	//timer_1 = setTimeout("plus_sign_extd(" + a + ")", 2000);
}

function plus_sign_extd(e) {
	var cnt = parseInt(e);
	var plussign_div = document.getElementById('animation');
	cnt++;
	if(selLang=="english"){
	if(cnt == 1) {
		plussign_div.innerHTML = "<img class='plus_sign1' src='assets/images/plus_sign_images/266_plus-signs1.png'/>";
	} else if(cnt == 2) {
		plussign_div.innerHTML = "<img class='plus_sign1' src='assets/images/plus_sign_images/266_plus-signs2.png'/>";
	} else if(cnt == 3) {
		plussign_div.innerHTML = "<img class='plus_sign1' src='assets/images/plus_sign_images/266_plus-signs3.png'/>";
	} else if(cnt == 4) {
		plussign_div.innerHTML = "<img class='plus_sign1' src='assets/images/plus_sign_images/266_plus-signs4.png'/>";
	} else if(cnt == 5) {
		plussign_div.innerHTML = "<img class='plus_sign1' src='assets/images/plus_sign_images/266_plus-signs5.png'/>";
	} else if(cnt == 6) {
		plussign_div.innerHTML = "<img class='plus_sign1' src='assets/images/plus_sign_images/266_plus-signs6.png'/>";
	} else if(cnt == 7) {
		cnt = 0;
		plussign_div.innerHTML = '';
	}
	}
	else{
		if(cnt == 1) {
		plussign_div.innerHTML = "<img class='plus_sign1' src='assets/images/plus_sign_images/266_plus-signs1.png'/>";
	} else if(cnt == 2) {
		plussign_div.innerHTML = "<img class='plus_sign1' src='assets/images/plus_sign_images/266_plus-signs2.png'/>";
	} else if(cnt == 3) {
		plussign_div.innerHTML = "<img class='plus_sign1' src='assets/images/plus_sign_images/266_plus-signs3.png'/>";
	} else if(cnt == 4) {
		plussign_div.innerHTML = "<img class='plus_sign1' src='assets/images/plus_sign_images/266_plus-signs4.png'/>";
	} else if(cnt == 5) {
		plussign_div.innerHTML = "<img class='plus_sign1' src='assets/images/plus_sign_images/266_plus-signssp5.png'/>";
	} else if(cnt == 6) {
		plussign_div.innerHTML = "<img class='plus_sign1' src='assets/images/plus_sign_images/266_plus-signssp6.png'/>";
	} else if(cnt == 7) {
		cnt = 0;
		plussign_div.innerHTML = '';
	}
	}
	plus_sign(cnt);
}
/* plus_sign ends */

/* polygon starts*/
function polygon(a) {
	if(a == 0) {
		englishTerm = "polygon";
		spanishTerm = "polígono";
		englishDef = "a closed geometric figure with three or more straight sides";
		spanishDef = "figura geométrica cerrada con tres o más lados rectos";
		showTermDefinition();
	}
	//timer_1 = setTimeout("polygon_extd(" + a + ")", 1600);
}

function polygon_extd(e) {
		var count = parseInt(e);
		count++;
		if(count <= 4) {
			document.getElementById('animation').innerHTML = "<img class='polygon1' src='assets/images/polygon_images/269_polygon"+count+".png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
			polygon(count);
}


/* polygon ends */

/* parallelogram starts*/
function parallelogram(a) {
	if(a == 0) {
		englishTerm = "parallelogram";
		spanishTerm = "paralelogramo";
		englishDef = "a quadrilateral with two pairs of opposite, parallel sides";
		spanishDef = "un cuadrilátero con dos pares de lados opuestos y paralelos";
		showTermDefinition();
	}
	//timer_1 = setTimeout("parallelogram_extd(" + a + ")", 1500);
}

function parallelogram_extd(e) {
	var count = parseInt(e);
	count++;
	if(count <= 3) {
		document.getElementById('animation').innerHTML = "<img class='parallelogram1' src='assets/images/parallelogram_images/247_parallelogram"+count+".png'/>";
	} else {
		document.getElementById('animation').innerHTML = "";
		count = 0;
	}
		parallelogram(count);
}
/* parallelogram ends */


/* prism starts*/
function prism(a) {
	if(a == 0) {
		englishTerm = "prism";
		spanishTerm = "prisma";
		englishDef = "a three-dimensional figure with two parallel congruent bases and parallelograms for faces";
		spanishDef = "una figura tridimensional con dos bases paralelas congruentes y caras que son paralelogramos";
		showTermDefinition();
	}
	//timer_1 = setTimeout("prism_extd(" + a + ")", 1200);
}
function prism_extd(e) {
		var count = parseInt(e);
		count++;
		if(count <= 16) {
			document.getElementById('animation').innerHTML = "<img class='prism1' src='assets/images/prism_images/278_prism"+count+".png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
			prism(count);
}
/* prism ends */

/* perpendicular_lines starts*/
function perpendicular_lines(a) {
	if(a == 0) {
		englishTerm = "perpendicular lines";
		spanishTerm = "rectas perpendiculares";
		englishDef = "lines that intersect to form 90° angles";
		spanishDef = "rectas que se cruzan para formar ángulos de 90°";
		showTermDefinition();
	}
	//timer_1 = setTimeout("perpendicular_lines_extd(" + a + ")", 2000);
}

function perpendicular_lines_extd(e) {
		var count = parseInt(e);
		count++;
		if(count <= 4) {
			document.getElementById('animation').innerHTML = "<img class='perpendicular1' src='assets/images/perpendicular_images/258_perpendicular"+count+".png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
			perpendicular_lines(count);
}

/* perpendicular_lines ends */





/* pint begins */

function pint(a) {
	if(a == 0) {
		englishTerm = "pint";
		spanishTerm = "pinta";
		englishDef = "a customary unit that measures capacity";
		spanishDef = "unidades estándar que mide la capacidad";
		showTermDefinition();
	}
	//timer_1 = setTimeout("pint_extd(" + a + ")", 1000);
}

function pint_extd(e) {
	var arr = "<img  class = 'pint_img' src='assets/images/pint_image/1_pint.png'>";
	var arr1 = "<img  id = 'bc' class = 'pint_img1' src='assets/images/pint_image/cup1.png'>";
	//var arr1_1 = "<img  id = 'bc' class = 'pint_img1' src='assets/images/pint_image/cup_txt.png'>";
	var arr2 = "<img id = 'bc1' class = 'pint_img2' src='assets/images/pint_image/cup1.png'>";
	var arr5 = "<img  id = 'bc2' class = 'pint_img22' src='assets/images/pint_image/cup_rotate.png'>";
	/*var arr3 = "<img id = 'bc2' class = 'pint_img3' src='assets/images/gallon_images/quart.png'>";
	 var arr4 = "<img id = 'bc3'  class = 'gallon_img4' src='assets/images/gallon_images/quart.png'>";
	 */
	var cont = parseInt(e);

	if(e == 0) {
		document.getElementById('animation').innerHTML = "<div id='nickel1'>&nbsp;" + arr + "</div><br/>";
	} else if(e == 1) {
		if(selLang == "english") {
			document.getElementById('animation').innerHTML = "<div id='nickel1'>&nbsp;" + arr + "&nbsp;" + arr1 + "&nbsp;" + arr2 + "<div class='pint_fill'></div><img  id = 'bc2' class = 'pint_img22' src='assets/images/pint_image/cup_rotate.png'><img class='pint_txt' src='assets/images/pint_image/cup_txt.png' /></div>";
		} else {
			document.getElementById('animation').innerHTML = "<div id='nickel1'>&nbsp;" + arr + "&nbsp;" + arr1 + "&nbsp;" + arr2 + "<div class='pint_fill'></div><img  id = 'bc2' class = 'pint_img22' src='assets/images/pint_image/cup_rotate.png'></div><div><img class='pint_txt' src='assets/images/pint_image/cup_txt.png' /></div>";
		}
	} else if(cont == 2) {
		window.clearTimeout(timer_1);
		$('#bc').animate({
			top : -18
		}, function() {
			$('#bc').animate({
				left : 35
			}, function() {

				$('#bc').css('display', 'none');
				$('#bc2').css('display', 'block');
				$('.pint_fill').css('display', 'block');
				$('.pint_fill').animate({
					height : 43
				}, 1000, function() {
					$('#bc2').css('display', 'none');
					$('.pint_fill').css('display', 'none');
					$('.pint_fill').css('height', '1px');
					$('#bc').css('display', 'block');
					$('#bc').animate({
						left : 165
					}, function() {
						$('#bc').animate({
							top : 135
						}, function() {

							$('#bc1').animate({
								top : -18
							}, function() {
								$('#bc1').animate({
									left : 35
								}, function() {

									$('#bc1').css('display', 'none');
									$('#bc2').css('display', 'block');
									$('.pint_fill').css('display', 'block');
									$('.pint_fill').animate({
										height : 43
									}, 1000, function() {
										$('#bc2').css('display', 'none');
										$('.pint_fill').css('display', 'none');
										$('.pint_fill').css('height', '1px');
										$('#bc1').css('display', 'block');
										$('#bc1').animate({
											left : 261
										}, function() {
											$('#bc1').animate({
												top : 136
											}, function() {
												$('.pint_label').css('display', 'block');
												$('.pint_txt').css('display', 'block');
												$('.pint_fill').animate({
													height : 1
												}, 1000, function() {
												//$('.pint_txt').css('display', 'block');
													document.getElementById('animation').innerHTML = "";
													pint(0);
												});
											});
										});
									});
								});
							});
						});
					});
				});
			});
		});
	}
	
	if(cont < 2) {
		cont = parseInt(e) + 1;
		pint(cont);
	}
}

/* pint ends */


/* penny begins */

function penny(a) {
	if(a == 0) {
		englishTerm = "penny";
		spanishTerm = "moneda de 1¢";
		englishDef = "a coin that is worth 1 cent";
		spanishDef = "moneda que vale 1 centavo";
		showTermDefinition();
	}
	//timer_1 = setTimeout("penny_extd(" + a + ")", 1200);
}


function penny_extd(e) {
	var arr = "<img  id= 'bc' class = 'penny_img penny_imgg' src='assets/images/penny_images/text_coin.png' >";
	var arr3 = "<img  id= 'bc' class = 'penny_img_down' id='penny_img_down' src='assets/images/penny_images/coin1.png' >";	
	var arr1 = "1 penny";
	var arr2 = "<img  id= 'down2' src='assets/images/penny_images/text_coin2.png' >";
	var cont = parseInt(e);

	if(e == 0) {
		document.getElementById('animation').innerHTML = "<div id='nickel_second'>&nbsp;" + arr + "</div><br/>";
	} else if(e == 1) {
		var img = "";
		for(var i = 0; i < 100; i++) {

			if(i == 96)
				img += "<div class='nickel_flow flowing'><img  id= 'bc1' class = 'penny_img1 hidden_white' src='assets/images/penny_images/penny1.png'></div>";
			else
				img += "<div class='nickel_flow flowing'><img  id= 'bc1' class = 'penny_img1' src='assets/images/penny_images/coin1.png'></div>";

		}
		document.getElementById('nickel_second').innerHTML = "&nbsp";
		document.getElementById('animation').innerHTML = "<div id='nickel_second'>&nbsp;" + arr3 + "</div><br/>";
		document.getElementById('nickel_second').innerHTML += img;

	} else if(e == 2) {

		$('.nickel_flow').animate({
			top : -215
		});
	} else if(e == 3) {
			//document.getElementById("penny_img_down").src='';
			//arr3='';penny_img_down.src='';
			document.getElementById('animation').innerHTML += "<div id='down2'></div>";
	} else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	cont = parseInt(e) + 1;

	penny(cont);
}


/* penny ends */



/* positive_correlation starts*/
function positive_correlation(a) {
	if(a == 0) {
		englishTerm = "positive correlation";
		spanishTerm = "correlación positiva";
		englishDef = "the trend of values increasing as related values increase";
		spanishDef = "la tendencia de los valores a aumentar cuando los valores relacionados también aumentan";
		showTermDefinition();
	}
	/*if(a == 2)
		//timer_1 = setTimeout("positive_correlation_extd(" + a + ")", 3200);
	else
		//timer_1 = setTimeout("positive_correlation_extd(" + a + ")", 2000);*/
}

function positive_correlation_extd(e) {
	var cont = parseInt(e);
	if(cont == 0) {
		if(selLang == "english") {
			document.getElementById('animation').innerHTML = '<img src="assets/images/positive_correlation_images/270_positive-correlation1.png" class="pcorelation_1" />';
		} else if(selLang == "spanish") {
			document.getElementById('animation').innerHTML = '<img src="assets/images/positive_correlation_images/270_positive-correlationsp1.png" class="pcorelation_1" />';
		}
	} else if(cont == 1) {
		if(selLang == "english") {
			document.getElementById('animation').innerHTML = '<img src="assets/images/positive_correlation_images/270_positive-correlation1.png" class="pcorelation_1" /><img src="assets/images/positive_correlation_images/red_arrow1.png" class="pcorelation_harrow" /><div class="pcorelation_varrow"></div>';
		} else if(selLang == "spanish") {
			document.getElementById('animation').innerHTML = '<img src="assets/images/positive_correlation_images/270_positive-correlationsp1.png" class="pcorelation_1" /><img src="assets/images/positive_correlation_images/red_arrow1.png" class="pcorelation_harrow" /><div class="pcorelation_varrow"></div>';
		}
		
			$('.pcorelation_harrow').animate({
				width : 151
			}, 1200);
			$('.pcorelation_varrow').animate({
				height : '191px'
			}, 1200);
		
	} else if(cont==2){
		if(selLang == "english") {
			document.getElementById('animation').innerHTML = '<img src="assets/images/positive_correlation_images/270_positive-correlation2.png" class="pcorelation_1" /><img src="assets/images/positive_correlation_images/red_arrow1.png" class="pcorelation_harrow1" /><div class="pcorelation_varrow1"></div>';
		} else if(selLang == "spanish") {
			document.getElementById('animation').innerHTML = '<img src="assets/images/positive_correlation_images/270_positive-correlationsp2.png" class="pcorelation_1" /><img src="assets/images/positive_correlation_images/red_arrow1.png" class="pcorelation_harrow1" /><div class="pcorelation_varrow1"></div>';
		}
	}else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	cont = parseInt(e) + 1;
	positive_correlation(cont);
}

/* positive_correlation ends */

/* pounds starts*/
function pound(a) {
	if(a == 0) {
		englishTerm = "pound";
		spanishTerm = "libra";
		englishDef = "a customary unit that measures weight";
		spanishDef = "unidad estándar para medir peso";
		showTermDefinition();
	}
	//timer_1 = setTimeout("pound_extd(" + a + ")", 2000);
}

function pound_extd(e) {
	var cnt = parseInt(e);
	var pound_div = document.getElementById('animation');
	cnt++;
	if(selLang=="english"){
	if(cnt == 1) {
		pound_div.innerHTML = "<img class='pound1' src='assets/images/pounds_images/273_pound1.png'/>";
	} else if(cnt == 2) {
		pound_div.innerHTML = "<img class='pound1' src='assets/images/pounds_images/273_pound2.png'/>";
	} else if(cnt == 3) {
		cnt = 0;
		pound_div.innerHTML = '';
	}
	}
	else{
		if(cnt == 1) {
		pound_div.innerHTML = "<img class='pound1' src='assets/images/pounds_images/273_poundsp1.png'/>";
	} else if(cnt == 2) {
		pound_div.innerHTML = "<img class='pound1' src='assets/images/pounds_images/273_poundsp2.png'/>";
	}  else if(cnt == 3) {
		cnt = 0;
		pound_div.innerHTML = '';
	}
	}
	pound(cnt);
}

/* pounds ends */

/* product starts*/
function product(a) {
	if(a == 0) {
		englishTerm = "product";
		spanishTerm = "producto";
		englishDef = "a number that is the result of multiplying two or more factors";
		spanishDef = "un número que es el resultado de multiplicar dos o más factores";
		showTermDefinition();
	}
	//timer_1 = setTimeout("product_extd(" + a + ")", 1200);
}
function product_extd(e) {
	var cnt = parseInt(e);
	var product_div = document.getElementById('animation');
	cnt++;
	if(selLang=="english"){
	if(cnt == 1) {
		product_div.innerHTML = "<img class='product1' src='assets/images/product_images/280_product1.png'/>";
	} else if(cnt == 2) {
		product_div.innerHTML = "<img class='product1' src='assets/images/product_images/280_product2.png'/>";
	} else if(cnt == 3) {
		product_div.innerHTML = "<img class='product1' src='assets/images/product_images/280_product3.png'/>";
	} else if(cnt == 4) {
		product_div.innerHTML = "<img class='product1' src='assets/images/product_images/280_product4.png'/>";
	} else if(cnt == 5) {
		cnt = 0;
		product_div.innerHTML = '';
	}
	}
	else{
		if(cnt == 1) {
		product_div.innerHTML = "<img class='product1' src='assets/images/product_images/280_product1.png'/>";
	} else if(cnt == 2) {
		product_div.innerHTML = "<img class='product1' src='assets/images/product_images/280_productsp2.png'/>";
	} else if(cnt == 3) {
		product_div.innerHTML = "<img class='product1' src='assets/images/product_images/280_product3.png'/>";
	} else if(cnt == 4) {
		product_div.innerHTML = "<img class='product1' src='assets/images/product_images/280_productsp4.png'/>";
	} else if(cnt == 5) {
		cnt = 0;
		product_div.innerHTML = '';
	}
	}
	product(cnt);
}




/* product ends */

/* possible outcomes starts*/
function possible_outcomes(a) {
	if(a == 0) {
		englishTerm = "possible outcomes";
		spanishTerm = "resultados posibles";
		englishDef = "all results that could occur";
		spanishDef = "todos los resultados que podrían ocurrir";
		showTermDefinition();
	}
	//timer_1 = setTimeout("possible_outcomes_extd(" + a + ")", 1000);
}
function possible_outcomes_extd(e) {
	var cnt = parseInt(e);
	var possible_out_div = document.getElementById('animation');
	cnt++;
	if(selLang=="english"){
	if(cnt == 1) {
		possible_out_div.innerHTML = "<img class='possible_outcomes1' src='assets/images/possible_outcomes_images/272_possible-outcomes1.png'/>";
	} else if(cnt == 2) {
		possible_out_div.innerHTML = "<img class='possible_outcomes1' src='assets/images/possible_outcomes_images/272_possible-outcomes2.png'/>";
	} else if(cnt == 3) {
		possible_out_div.innerHTML = "<img class='possible_outcomes1' src='assets/images/possible_outcomes_images/272_possible-outcomes3.png'/>";
	} else if(cnt == 4) {
		possible_out_div.innerHTML = "<img class='possible_outcomes1' src='assets/images/possible_outcomes_images/272_possible-outcomes4.png'/>";
	} else if(cnt == 5) {
		possible_out_div.innerHTML = "<img class='possible_outcomes1' src='assets/images/possible_outcomes_images/272_possible-outcomes5.png'/>";
	} else if(cnt == 6) {
		possible_out_div.innerHTML = "<img class='possible_outcomes1' src='assets/images/possible_outcomes_images/272_possible-outcomes6.png'/>";
	} else if(cnt == 7) {
		possible_out_div.innerHTML = "<img class='possible_outcomes1' src='assets/images/possible_outcomes_images/272_possible-outcomes7.png'/>";
	} else if(cnt == 8) {
		possible_out_div.innerHTML = "<img class='possible_outcomes1' src='assets/images/possible_outcomes_images/272_possible-outcomes8.png'/>";
	} else if(cnt == 9) {
		possible_out_div.innerHTML = "<img class='possible_outcomes1' src='assets/images/possible_outcomes_images/272_possible-outcomes9.png'/>";
	} else if(cnt == 10) {
		cnt = 0;
		possible_out_div.innerHTML = '';
	}
	}
	else{
		if(cnt == 1) {
		possible_out_div.innerHTML = "<img class='possible_outcomes1' src='assets/images/possible_outcomes_images/272_possible-outcomes1.png'/>";
	} else if(cnt == 2) {
		possible_out_div.innerHTML = "<img class='possible_outcomes1' src='assets/images/possible_outcomes_images/272_possible-outcomessp2.png'/>";
	} else if(cnt == 3) {
		possible_out_div.innerHTML = "<img class='possible_outcomes1' src='assets/images/possible_outcomes_images/272_possible-outcomessp3.png'/>";
	} else if(cnt == 4) {
		possible_out_div.innerHTML = "<img class='possible_outcomes1' src='assets/images/possible_outcomes_images/272_possible-outcomessp4.png'/>";
	} else if(cnt == 5) {
		possible_out_div.innerHTML = "<img class='possible_outcomes1' src='assets/images/possible_outcomes_images/272_possible-outcomessp5.png'/>";
	} else if(cnt == 6) {
		possible_out_div.innerHTML = "<img class='possible_outcomes1' src='assets/images/possible_outcomes_images/272_possible-outcomessp6.png'/>";
	} else if(cnt == 7) {
		possible_out_div.innerHTML = "<img class='possible_outcomes1' src='assets/images/possible_outcomes_images/272_possible-outcomessp7.png'/>";
	} else if(cnt == 8) {
		possible_out_div.innerHTML = "<img class='possible_outcomes1' src='assets/images/possible_outcomes_images/272_possible-outcomessp8.png'/>";
	} else if(cnt == 9) {
		possible_out_div.innerHTML = "<img class='possible_outcomes1' src='assets/images/possible_outcomes_images/272_possible-outcomessp9.png'/>";
	} else if(cnt == 10) {
		cnt = 0;
		possible_out_div.innerHTML = '';
	}
	}
	possible_outcomes(cnt);
}

/* possible outcomes  ends */

/*pentagon*/
function pentagon(a) {
	if(a == 0) {
		englishTerm = "pentagon";
		spanishTerm = "pentágono";
		englishDef = "a polygon with five sides and five angles";
		spanishDef = "polígono con cinco lados y cinco ángulos";
		showTermDefinition();
	}
	/*if(a != 12)
		//timer_1 = setTimeout("pentagon_extd(" + a + ")", 500);
	else
		//timer_1 = setTimeout("pentagon_extd(" + a + ")", 1000);*/
}

function pentagon_extd(e) {
	var d = parseInt(e);
	if(e <= 12) {
		document.getElementById('animation').innerHTML = "<img class='pentagon_image' src=\"assets/images/pentagon/251_pentagon"+e+".png\"/>";
	}  else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	d = parseInt(e) + 1;

	pentagon(d);
}

/*End pentagon*/
/*pattern Begins*/
function pattern(a) {

	if(a == 0) {
		englishTerm = "pattern";
		spanishTerm = "patrón";
		englishDef = "a repeated cycle";
		spanishDef = "un ciclo repetido";
		showTermDefinition();
	}
	//timer_1 = setTimeout("pattern_extd(" + a + ")", 750);
}

function pattern_extd(e) {
		var count = parseInt(e);
		count++;
		if(count <= 8) {
			document.getElementById('animation').innerHTML = "<img class='pattern1' src='assets/images/pattern_images/249_pattern"+count+".png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
			pattern(count);
}

/*pattern Ends*/

/* periods */
function period(a) {
	if(a == 0) {
		englishTerm = "period";
		spanishTerm = "periodo";
		englishDef = "each group of three digits separated by a comma in a multi-digit number";
		spanishDef = "cada grupo de tres dígitos separado por una coma en un número de varios dígitos";
		showTermDefinition();
	}
	if(a != 4) {
		//timer_1 = setTimeout("period_extd(" + a + ")", 1700);
	} else {
		//timer_1 = setTimeout("period_extd(" + a + ")", 2000);
	}
}

function period_extd(e) {
	var cnt = parseInt(e);
	var period_div = document.getElementById('animation');
	cnt++;
	if(cnt == 1) {
		period_div.innerHTML = "<div class='period_sub'><img src='assets/images/periods_img/257_period1.png'/></div>";
	} else if(cnt == 2) {
		period_div.innerHTML = "<div class='period_sub'><img src='assets/images/periods_img/257_period2.png'/></div>";
	} else if(cnt == 3) {
		period_div.innerHTML = "<div class='period_sub'><img src='assets/images/periods_img/257_period3.png'/></div>";
	} else if(cnt == 4) {
		period_div.innerHTML = "<div class='period_sub'><img src='assets/images/periods_img/257_period4.png'/></div>";
	} else {
		cnt = 0;
		period_div.innerHTML = "";
	}
	
	period(cnt);
}


/*pictograph***************************/
function pictograph(a) {
	if(a == 0) {
		englishTerm = "pictograph";
		spanishTerm = "pictograma";
		englishDef = "a graph that uses pictures to show and compare data";
		spanishDef = "una gráfica que usa dibujos para mostrar y comparar datos";
		showTermDefinition();
	}
	/*if(a != 6)
		//timer_1 = setTimeout("pictograph_extd(" + a + ")", 1200);
	else
		//timer_1 = setTimeout("pictograph_extd(" + a + ")", 1700);*/
}

function pictograph_extd(e) {
	var cnt = parseInt(e);
	var pictograph_div = document.getElementById('animation');
	cnt++;
	var imgarr = ["", "259_pictograph.png", "259_pictograph1.png", "259_pictograph2.png", "259_pictograph3.png", "259_pictograph4.png", "259_pictograph5.png"];
	var imgarr_sp = ["", "259_pictograph_SP1.png", "259_pictograph_SP2.png", "259_pictograph_SP3.png", "259_pictograph_SP4.png", "259_pictograph_SP5.png", "259_pictograph_SPkey.png"];
	if(selLang == "english") {
		if(cnt <= 6) {
			pictograph_div.innerHTML = "<div class='pictograph_div'><img src='assets/images/pictograph_img/" + imgarr[cnt] + "'/></div>";
		} else {
			cnt = 0;
			pictograph_div.innerHTML = "";
		}
	} else {
		if(cnt <= 6) {
			pictograph_div.innerHTML = "<div class='pictograph_div'><img src='assets/images/pictograph_img/" + imgarr_sp[cnt] + "'/></div>";
		} else {
			cnt = 0;
			pictograph_div.innerHTML = "";
		}
	}
	pictograph(cnt);
}

/*picture graph***************************/
function picture_graph(a) {
	if(a == 0) {
		englishTerm = "picture graph";
		spanishTerm = "gráfica de dibujos";
		englishDef = "a graph that uses pictures to display data";
		spanishDef = "una gráfica que usa dibujos para mostrar datos";
		showTermDefinition();
	}
	/*if(a != 6)
		//timer_1 = setTimeout("picture_graph_extd(" + a + ")", 1200);
	else
		//timer_1 = setTimeout("picture_graph_extd(" + a + ")", 1700);*/
}

function picture_graph_extd(e) {
	var cnt = parseInt(e);
	var pictograph_div = document.getElementById('animation');
	cnt++;
	var imgarr = ["", "259_pictograph.png", "259_pictograph1.png", "259_pictograph2.png", "259_pictograph3.png", "259_pictograph4.png", "259_pictograph5.png"];
	var imgarr_sp = ["", "259_pictograph_SP1.png", "259_pictograph_SP2.png", "259_pictograph_SP3.png", "259_pictograph_SP4.png", "259_pictograph_SP5.png", "259_pictograph_SPkey.png"];
	if(selLang == "english") {
		if(cnt <= 6) {
			pictograph_div.innerHTML = "<div class='pictograph_div'><img src='assets/images/pictograph_img/" + imgarr[cnt] + "'/></div>";
		} else {
			cnt = 0;
			pictograph_div.innerHTML = "";
		}
	} else {
		if(cnt <= 6) {
			pictograph_div.innerHTML = "<div class='pictograph_div'><img src='assets/images/pictograph_img/" + imgarr_sp[cnt] + "'/></div>";
		} else {
			cnt = 0;
			pictograph_div.innerHTML = "";
		}
	}
	picture_graph(cnt);
}

/*probability starts */
function probability(a) {
	if(a == 0) {
		englishTerm = "probability";
		spanishTerm = "probabilidad";
		englishDef = "a measure of the chance or likelihood an event will happen";
		spanishDef = "medición de la posibilidad de que ocurra un suceso";
		showTermDefinition();
	}
	if(a <= 8) {
		//timer_1 = setTimeout("probability_extd(" + a + ")", 400);
	} else if(a == 9 || a == 10 || a == 11 || a == 12) {
		//timer_1 = setTimeout("probability_extd(" + a + ")", 1500);
	}

}

function probability_extd(e) {
	var cnt = parseInt(e);
	var probablity_div = document.getElementById('animation');
	cnt++;
	if(selLang=="english"){
	if(cnt == 1) {
		probablity_div.innerHTML = "<img class='probability1' src='assets/images/probability_images/279_probability1.png'/>";
	} else if(cnt == 2) {
		probablity_div.innerHTML = "<img class='probability1' src='assets/images/probability_images/279_probability2.png'/>";
	} else if(cnt == 3) {
		probablity_div.innerHTML = "<img class='probability1' src='assets/images/probability_images/279_probability3.png'/>";
	} else if(cnt == 4) {
		probablity_div.innerHTML = "<img class='probability1' src='assets/images/probability_images/279_probability4.png'/>";
	} else if(cnt == 5) {
		probablity_div.innerHTML = "<img class='probability1' src='assets/images/probability_images/279_probability5.png'/>";
	} else if(cnt == 6) {
		probablity_div.innerHTML = "<img class='probability1' src='assets/images/probability_images/279_probability6.png'/>";
	}  else if(cnt == 7) {
		probablity_div.innerHTML = "<img class='probability1' src='assets/images/probability_images/279_probability7.png'/>";
	}  else if(cnt == 8) {
		probablity_div.innerHTML = "<img class='probability1' src='assets/images/probability_images/279_probability8.png'/>";
	}  else if(cnt == 9) {
		probablity_div.innerHTML = "<img class='probability1' src='assets/images/probability_images/279_probability9.png'/>";
	}  else if(cnt == 10) {
		probablity_div.innerHTML = "<img class='probability1' src='assets/images/probability_images/279_probability10.png'/>";
	}  else if(cnt == 11) {
		probablity_div.innerHTML = "<img class='probability1' src='assets/images/probability_images/279_probability11.png'/>";
	}  else if(cnt == 12) {
		cnt = 0;
		probablity_div.innerHTML = '';
	}
	}
	else{
		if(cnt == 1) {
		probablity_div.innerHTML = "<img class='probability1' src='assets/images/probability_images/279_probability1.png'/>";
	} else if(cnt == 2) {
		probablity_div.innerHTML = "<img class='probability1' src='assets/images/probability_images/279_probability2.png'/>";
	} else if(cnt == 3) {
		probablity_div.innerHTML = "<img class='probability1' src='assets/images/probability_images/279_probability3.png'/>";
	} else if(cnt == 4) {
		probablity_div.innerHTML = "<img class='probability1' src='assets/images/probability_images/279_probability4.png'/>";
	} else if(cnt == 5) {
		probablity_div.innerHTML = "<img class='probability1' src='assets/images/probability_images/279_probability5.png'/>";
	}  else if(cnt == 6) {
		probablity_div.innerHTML = "<img class='probability1' src='assets/images/probability_images/279_probability6.png'/>";
	}  else if(cnt == 7) {
		probablity_div.innerHTML = "<img class='probability1' src='assets/images/probability_images/279_probability7.png'/>";
	}  else if(cnt == 8) {
		probablity_div.innerHTML = "<img class='probability1' src='assets/images/probability_images/279_probability8.png'/>";
	}  else if(cnt == 9) {
		probablity_div.innerHTML = "<img class='probability1' src='assets/images/probability_images/279_probabilitysp9.png'/>";
	}  else if(cnt == 10) {
		probablity_div.innerHTML = "<img class='probability1' src='assets/images/estimate_image/279_probability10.png'/>";
	}  else if(cnt == 11) {
		probablity_div.innerHTML = "<img class='probability1' src='assets/images/estimate_image/279_probabilitysp11.png'/>";
	}  else if(cnt == 12) {
		cnt = 0;
		probablity_div.innerHTML = '';
	}
	}
	probability(cnt);
}

/* probability ends */


/*place value starts*/
function place_value(a) {
	if(a == 0) {
		englishTerm = "place value";
		spanishTerm = "valor posicional";
		englishDef = "the value a digit has because of its location in a number";
		spanishDef = "el valor de un dígito según su posición en un número";
		showTermDefinition();
	}
	//timer_1 = setTimeout("place_value_extd(" + a + ")", 1600);
}

function place_value_extd(e) {
		var count = parseInt(e);
		count++;
		if(count <= 5) {
			document.getElementById('animation').innerHTML = "<img class='placevalue1' src='assets/images/placevalue_img/262_place-value"+count+".png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
			place_value(count);
}
/* place value ends */

/* plane figure*******************/
function plane_figure(a) {
	if(a == 0) {
		englishTerm = "plane figure";
		spanishTerm = "figura plana";
		englishDef = "a flat shape having only two dimensions, length and width";
		spanishDef = "una figura llana que sólo tiene dos dimensiones: longitud y ancho";
		showTermDefinition();
	}
	//timer_1 = setTimeout("plane_figure_extd(" + a + ")", 1200);
}

function plane_figure_extd(e) {
	var cnt = parseInt(e);
	var plane_figure_div = document.getElementById('animation');
	cnt++;
	if(cnt == 1) {
		plane_figure_div.innerHTML = "<img src='assets/images/plane_figure_img/265_2_plane-figure1.png'/>"
	} else if(cnt == 2) {
	plane_figure_div.innerHTML = "<img src='assets/images/plane_figure_img/265_2_plane-figure1.png' /><img id='plane_figure_harr' src='assets/images/plane_figure_img/red_arrow.png'/><img id='plane_figure_varr' src='assets/images/plane_figure_img/red_arrow1.png'/>"
		$("#plane_figure_harr").animate({
			width : "191px"
		});
		$('#plane_figure_varr').animate({
			height : "80px"
		});
	} else if(cnt == 3) {
		plane_figure_div.innerHTML = "<img src='assets/images/plane_figure_img/265_2_plane-figure2.png'/>";
	} else if(cnt == 4) {
		plane_figure_div.innerHTML = "<img src='assets/images/plane_figure_img/265_2_plane-figure2.png'/><img id='plane_figure_harr' src='assets/images/plane_figure_img/red_arrow.png'/><img id='plane_figure_varr' src='assets/images/plane_figure_img/red_arrow1.png'/>";
		$("#plane_figure_harr").animate({
			width : "191px"
		});
		$('#plane_figure_varr').animate({
			height : "80px"
		});
	} else if(cnt == 5) {
		plane_figure_div.innerHTML = "<div class='plane_figure_div'><img src='assets/images/plane_figure_img/068_cube.jpg' class='plane_fig_cubes'/></div>";
	} else if(cnt == 6) {
		plane_figure_div.innerHTML = "<div class='plane_figure_div'><img src='assets/images/plane_figure_img/068_cube_5.jpg' class='plane_fig_cubes'/></div>";
	} else if(cnt == 7) {
		cnt = 0;
		plane_figure_div.innerHTML = "";
	}
	plane_figure(cnt);
}

/* plane **************************/
function plane(a) {
	if(a == 0) {
		englishTerm = "plane";
		spanishTerm = "plano";
		englishDef = "a flat surface with no boundaries";
		spanishDef = "superficie plana sin límites";
		showTermDefinition();
	}
	/*if(a == 0)
		//timer_1 = setTimeout("plane_extd(" + a + ")", 1000);
	else
		//timer_1 = setTimeout("plane_extd(" + a + ")", 2500);*/
}

function plane_extd(e) {
	var cnt = parseInt(e);
	var plane_div = document.getElementById('animation');
	cnt++;
	if(cnt == 1) {
		plane_div.innerHTML = "<div class='plane_div'></div>";
	} else if(cnt == 2) {
		$('.plane_div').animate({
			width : 200,
			height : 200,
			left : 78,
			top : -6
		});
	} else {
		cnt = 0;
		plane_div.innerHTML = "";
	}
	plane(cnt);
}

/* power of 10 starts*/
function powers_of_10(a) {
	if(a == 0) {
		englishTerm = "powers of 10";
		spanishTerm = "potencias de 10";
		englishDef = "10 or any numbers found by multiplying 10 by itself repeatedly";
		spanishDef = "El número 10 o cualquier número que se halla al multiplicar el 10 por sí mismo repetidamente";
		showTermDefinition();
	}
	//timer_1 = setTimeout("powers_of_10_extd(" + a + ")", 1500);
}
function powers_of_10_extd(e) {
		var count = parseInt(e);
		count++;
		if(count <= 3) {
			document.getElementById('animation').innerHTML = "<img class='power_of_10' src='assets/images/power_of_10_images/275_powers_ten"+count+".png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
			powers_of_10(count);
}
/* power of 10 ends */

/*prime_factorization*/
function prime_factorization(a) {
	if(a == 0) {
		englishTerm = "prime factorization";
		spanishTerm = "factorización prima";
		englishDef = "a whole number written as a product of its prime factors";
		spanishDef = "un número entero escrito como el producto de sus factores primos";
		showTermDefinition();
	}

	/*if(a == 1 || a == 3 || a == 5 || a == 7)
		//timer_1 = setTimeout("prime_factorization_extd(" + a + ")", 1000);
	else
		//timer_1 = setTimeout("prime_factorization_extd(" + a + ")", 2000);*/

}

function prime_factorization_extd(e) {
	var d = parseInt(e);
	
	if(e < 8) {
		document.getElementById('animation').innerHTML = "<div class=\"primee label_font_regular\"><img src='assets/images/prime_factorization_images/276_primefactorization"+parseInt(d+1)+".png'/></div>";
	} else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	d = parseInt(e) + 1;

	prime_factorization(d);
}

/*end prime_factorization*/

/*prime number starts*/
function prime_number(a) {
	if(a == 0) {
		englishTerm = "prime number";
		spanishTerm = "número primo";
		englishDef = "a whole number with exactly two factors, 1 and itself";
		spanishDef = "un número entero con exactamente 2 factores: el 1 y sí mismo";
		showTermDefinition();
	}
	if(a != 6) {
		//timer_1 = setTimeout("prime_number_extd(" + a + ")", 1000);
	} else {
		//timer_1 = setTimeout("prime_number_extd(" + a + ")", 1500);
	}
}

function prime_number_extd(e) {
	var cnt = parseInt(e);
	var primenum_div = document.getElementById('animation');
	cnt++;
	if(selLang=="english"){
	if(cnt == 1) {
		primenum_div.innerHTML = "<img class='prime_number1' src='assets/images/prime_number_images/277_prime-number1.png'/>";
	} else if(cnt == 2) {
		primenum_div.innerHTML = "<img class='prime_number1' src='assets/images/prime_number_images/277_prime-number2.png'/>";
	} else if(cnt == 3) {
		primenum_div.innerHTML = "<img class='prime_number1' src='assets/images/prime_number_images/277_prime-number3.png'/>";
	} else if(cnt == 4) {
		primenum_div.innerHTML = "<img class='prime_number1' src='assets/images/prime_number_images/277_prime-number4.png'/>";
	} else if(cnt == 5) {
		primenum_div.innerHTML = "<img class='prime_number1' src='assets/images/prime_number_images/277_prime-number5.png'/>";
	} else if(cnt == 6) {
		primenum_div.innerHTML = "<img class='prime_number1' src='assets/images/prime_number_images/277_prime-number6.png'/>";
	} else if(cnt == 7) {
		cnt = 0;
		primenum_div.innerHTML = '';
	}
	}
	else{
		if(cnt == 1) {
		primenum_div.innerHTML = "<img class='prime_number1' src='assets/images/prime_number_images/277_prime-number1.png'/>";
	} else if(cnt == 2) {
		primenum_div.innerHTML = "<img class='prime_number1' src='assets/images/prime_number_images/277_prime-numbersp2.png'/>";
	} else if(cnt == 3) {
		primenum_div.innerHTML = "<img class='prime_number1' src='assets/images/prime_number_images/277_prime-numbersp3.png'/>";
	} else if(cnt == 4) {
		primenum_div.innerHTML = "<img class='prime_number1' src='assets/images/prime_number_images/277_prime-numbersp4.png'/>";
	} else if(cnt == 5) {
		primenum_div.innerHTML = "<img class='prime_number1' src='assets/images/prime_number_images/277_prime-numbersp5.png'/>";
	} else if(cnt == 6) {
		primenum_div.innerHTML = "<img class='prime_number1' src='assets/images/prime_number_images/277_prime-numbersp6.png'/>";
	} else if(cnt == 7) {
		cnt = 0;
		primenum_div.innerHTML = '';
	}
	}
	prime_number(cnt);
}
/* point of rotation  starts  */

function point_of_rotation_extd(e) {
	var cnt = parseInt(e);
	var pointof_rot_div = document.getElementById('animation');
	cnt++;
	if(selLang=="english"){
	if(cnt == 1) {
		pointof_rot_div.innerHTML = "<img class='point_of_rotation1' src='assets/images/point_of_rotation_images/307_1_rotation1.png'/>";
	} else if(cnt == 2) {
		pointof_rot_div.innerHTML = "<img class='point_of_rotation1' src='assets/images/point_of_rotation_images/307_1_rotation2.png'/>";
	} else if(cnt == 3) {
		pointof_rot_div.innerHTML = "<img class='point_of_rotation1' src='assets/images/point_of_rotation_images/307_1_rotation3.png'/>";
	}  else if(cnt == 4)  {
		cnt = 0;
		pointof_rot_div.innerHTML = '';
	}
	}
	else{
		if(cnt == 1) {
		pointof_rot_div.innerHTML = "<img class='point_of_rotation1' src='assets/images/point_of_rotation_images/307_1_rotation1.png'/>";
	} else if(cnt == 2) {
		pointof_rot_div.innerHTML = "<img class='point_of_rotation1' src='assets/images/point_of_rotation_images/307_1_rotation2.png'/>";
	} else if(cnt == 3) {
		pointof_rot_div.innerHTML = "<img class='point_of_rotation1' src='assets/images/point_of_rotation_images/307_1_rotationsp3.png'/>";
	} else if(cnt == 4)  {
		cnt = 0;
		pointof_rot_div.innerHTML = '';
	}
	}
	point_of_rotation(cnt);
}

function point_of_rotation(a) {
	var a = parseInt(a);
	if(a == 0) {
		englishTerm = "point of rotation";
		spanishTerm = "punto de rotación";
		englishDef = "a central point around which a figure is turned";
		spanishDef = "un punto central alrededor del cual se gira una figura";
		showTermDefinition();
	}
	//timer_1 = setTimeout("point_of_rotation_extd(" + a + ")", 2000);
}

/* point of rotation ends  */
/* point */
function point(a) {
	if(a == 0) {
		englishTerm = "point";
		spanishTerm = "punto";
		englishDef = "a location that has no size";
		spanishDef = "una ubicación que no tiene tamaño";
		showTermDefinition();
	}
	//timer_1 = setTimeout("point_extd(" + a + ")", 1600);
}
function point_extd(e) {
		var count = parseInt(e);
		count++;
		if(count <= 4) {
			document.getElementById('animation').innerHTML = "<img class='point1' src='assets/images/point_img/267_point"+count+".png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
			point(count);
}


/*positive integers*/

function positive_integers(a) {
	if(a == 0) {
		englishTerm = "positive integers";
		spanishTerm = "enteros positivos";
		englishDef = "integers greater than 0";
		spanishDef = "enteros mayores que 0";
		showTermDefinition();
	}
	//timer_1 = setTimeout("positive_integers_extd(" + a + ")", 800);
}

function positive_integers_extd(e) {
	var d = parseInt(e);
	if(e < 6) {
		document.getElementById('animation').innerHTML = "<div class='pos_integers'><img src=\"assets/images/positiveinteger_img/220_positiveintegers"+parseInt(e+1)+".png\"/></div>"; 
	} 
	else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	d = parseInt(e) + 1;

	positive_integers(d);
}

/*end positive integers*/

/*quadrilateral*/
function quadrilateral(a) {
	if(a == 0) {
		englishTerm = "quadrilateral";
		spanishTerm = "cuadrilátero";
		englishDef = "a polygon with four sides and four angles";
		spanishDef = "polígono con cuatro lados y cuatro ángulos";
		showTermDefinition();
	}
	/*if(a != 10)
		//timer_1 = setTimeout("quadrilateral_extd(" + a + ")", 1000);
	else
		//timer_1 = setTimeout("quadrilateral_extd(" + a + ")", 1500);*/

}

function quadrilateral_extd(e) {
	var cnt = parseInt(e);
	var quadril_div = document.getElementById('animation');
	cnt++;
	if(selLang=="english"){
	if(cnt == 1) {
		quadril_div.innerHTML = "<img class='quadrilateral_1' src='assets/images/quadrilateral_images/284_quadrilateral1.png'/>"
	} else if(cnt == 2) {
		quadril_div.innerHTML = "<img class='quadrilateral_1' src='assets/images/quadrilateral_images/284_quadrilateral2.png'/>";
	} else if(cnt == 3) {
		quadril_div.innerHTML = "<img class='quadrilateral_1' src='assets/images/quadrilateral_images/284_quadrilateral3.png'/>";
	} else if(cnt == 4) {
		quadril_div.innerHTML = "<img class='quadrilateral_1' src='assets/images/quadrilateral_images/284_quadrilateral4.png'/>";
	} else if(cnt == 5) {
		quadril_div.innerHTML = "<img class='quadrilateral_1' src='assets/images/quadrilateral_images/284_quadrilateral5.png'/>";
	} else if(cnt == 6) {
		quadril_div.innerHTML = "<img class='quadrilateral_1' src='assets/images/quadrilateral_images/284_quadrilateral6.png'/>";
	} else if(cnt == 7) {
		quadril_div.innerHTML = "<img class='quadrilateral_1' src='assets/images/quadrilateral_images/284_quadrilateral7.png'/>";
	} else if(cnt == 8) {
		quadril_div.innerHTML = "<img class='quadrilateral_1' src='assets/images/quadrilateral_images/284_quadrilateral8.png'/>";
	} else if(cnt == 9) {
		quadril_div.innerHTML = "<img class='quadrilateral_1' src='assets/images/quadrilateral_images/284_quadrilateral9.png'/>";
	} else if(cnt == 10) {
		quadril_div.innerHTML = "<img class='quadrilateral_1' src='assets/images/quadrilateral_images/284_quadrilateral10.png'/>";
	} else if(cnt == 11) {
		cnt = 0;
		quadril_div.innerHTML = '';
	}
	}
	else{
		if(cnt == 1) {
		quadril_div.innerHTML = "<img class='quadrilateral_1' src='assets/images/quadrilateral_images/284_quadrilateral1.png'/>"
	} else if(cnt == 2) {
		quadril_div.innerHTML = "<img class='quadrilateral_1' src='assets/images/quadrilateral_images/284_quadrilateral2.png'/>";
	} else if(cnt == 3) {
		quadril_div.innerHTML = "<img class='quadrilateral_1' src='assets/images/quadrilateral_images/284_quadrilateral3.png'/>";
	} else if(cnt == 4) {
		quadril_div.innerHTML = "<img class='quadrilateral_1' src='assets/images/quadrilateral_images/284_quadrilateral4.png'/>";
	} else if(cnt == 5) {
		quadril_div.innerHTML = "<img class='quadrilateral_1' src='assets/images/quadrilateral_images/284_quadrilateralsp5.png'/>";
	} else if(cnt == 6) {
		quadril_div.innerHTML = "<img class='quadrilateral_1' src='assets/images/quadrilateral_images/284_quadrilateralsp6.png'/>";
	} else if(cnt == 7) {
		quadril_div.innerHTML = "<img class='quadrilateral_1' src='assets/images/quadrilateral_images/284_quadrilateralsp7.png'/>";
	} else if(cnt == 8) {
		quadril_div.innerHTML = "<img class='quadrilateral_1' src='assets/images/quadrilateral_images/284_quadrilateralsp8.png'/>";
	} else if(cnt == 9) {
		quadril_div.innerHTML = "<img class='quadrilateral_1' src='assets/images/quadrilateral_images/284_quadrilateralsp9.png'/>";
	} else if(cnt == 10) {
		quadril_div.innerHTML = "<img class='quadrilateral_1' src='assets/images/quadrilateral_images/284_quadrilateralsp10.png'/>";
	} else if(cnt == 11) 
	  {
		cnt = 0;
		quadril_div.innerHTML = '';
	}
	}
	quadrilateral(cnt);
}


/*end quadrilateral*/

function quarter(a) {
	if(a == 0) {
		englishTerm = "quarter";
		spanishTerm = "moneda de 25¢";
		englishDef = "a coin that is worth 25 cents";
		spanishDef = "moneda que vale 25 centavos";
		showTermDefinition();
	}
	//timer_1 = setTimeout("quarter_extd(" + a + ")", 1200);
}

function quarter_extd(e) {
	//style='z-index:1; left:27px; top:14px; position: relative;'
	var arr = "<img  id= 'bc' class = 'quarter_img' src='assets/images/quarter_images/text_quarter.png'>";
	var arr3 = "<img class = 'quarter_img' src='assets/images/quarter_images/quart.png'>";
	var arr4 = "<img class = 'quarter_img' src='assets/images/quarter_images/text_quart.png'>";
	var arr1 = "1 quarter";
	var arr2 = "4 quarters = 1 dollar";
	var arr_1 = "1 cuarto";
	var arr_2 = "1 cuarto = 1 dólar"
	var cont = parseInt(e);

	if(e == 0) {
		document.getElementById('animation').innerHTML = "<div id='quarter_second'>&nbsp;" + arr + "</div><br/>";
	} else if(e == 1) {
		var img = "";
		for(var i = 0; i < 4; i++) {

			if(i == 1)
				img += "<div class='nickel_flow quarter_flowing'><img  id= 'bc1' class = 'quarter_img1' src='assets/images/quarter_images/white.png'></div>";
			else
				img += "<div class='nickel_flow quarter_flowing'><img  id= 'bc1' class = 'quarter_img1' src='assets/images/quarter_images/quart.png'></div>";

		}
		document.getElementById('animation').innerHTML = "<div id='quarter_second'>&nbsp;" + arr3 + "</div><br/>";
		document.getElementById('animation').innerHTML += img;

	} else if(e == 2) {

		$('.nickel_flow').animate({
			top : -61
		});
	} else if(e == 3) {
		document.getElementById('animation').innerHTML += "<div class= 'text_quart'></div>";
	} else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	cont = parseInt(e) + 1;

	quarter(cont);
}


/* quarter ends */
/*quotient Begins*/
function quotient(a) {

	if(a == 0) {
		englishTerm = "quotient";
		spanishTerm = "cociente";
		englishDef = "the answer in a division problem";
		spanishDef = "el resultado de un problema de división";
		showTermDefinition();
	}
	//timer_1 = setTimeout("quotient_extd(" + a + ")", 1200);
}

function quotient_extd(e) {
	var cnt = parseInt(e);
	var quotient_div = document.getElementById('animation');
	cnt++;
	if(selLang=="english"){
	if(cnt == 1) {
		quotient_div.innerHTML = "<img class='quotient_1' src='assets/images/quotient_images/287_quotient1.png'/>"
	} else if(cnt == 2) {
		quotient_div.innerHTML = "<img class='quotient_1' src='assets/images/quotient_images/287_quotient2.png'/>";
	} else if(cnt == 3) {
		quotient_div.innerHTML = "<img class='quotient_2' src='assets/images/quotient_images/287_quotient3.png'/>";
	} else if(cnt == 4) {
		quotient_div.innerHTML = "<img class='quotient_2' src='assets/images/quotient_images/287_quotient4.png'/>";
	} else if(cnt == 5) {
		cnt = 0;
		quotient_div.innerHTML = '';
	}
	}
	else{
		if(cnt == 1) {
		quotient_div.innerHTML = "<img class='quotient_1' src='assets/images/quotient_images/287_quotient1.png'/>"
	} else if(cnt == 2) {
		quotient_div.innerHTML = "<img class='quotient_1' src='assets/images/quotient_images/287_quotientsp2.png'/>";
	} else if(cnt == 3) {
		quotient_div.innerHTML = "<img class='quotient_2' src='assets/images/quotient_images/287_quotient3.png'/>";
	} else if(cnt == 4) {
		quotient_div.innerHTML = "<img class='quotient_2' src='assets/images/quotient_images/287_quotientsp4.png'/>";
	} else if(cnt == 5) {
		cnt = 0;
		quotient_div.innerHTML = '';
	}
	}
	quotient(cnt);
}

/*quotient Ends*/

/*quadrants starts */
function quadrants(a) {
	if(a == 0) {
		englishTerm = "quadrants";
		spanishTerm = "cuadrantes";
		englishDef = "the four sections formed by the intersection of the <i>x</i>-axis and <i>y</i>-axis";
		spanishDef = "las cuatro secciones formadas por la intersección del eje <i>x</i> y el eje <i>y</i>";
		showTermDefinition();
	}
	//timer_1 = setTimeout("quadrants_extd(" + a + ")", 1200);
}

function quadrants_extd(e) {
		var count = parseInt(e);
		count++;
		if(count <= 5) {
			document.getElementById('animation').innerHTML = "<img class='quadrants1' src='assets/images/quadrants_img/283_quadrants"+count+".png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
			quadrants(count);
}
/* quadrants ends */


/* radical sign starts*/
function radical_sign(a) {
	if(a == 0) {
		englishTerm = "radical sign";
		spanishTerm = "signo radical";
		englishDef = "another name for the square root symbol";
		spanishDef = "nombre alterno para el símbolo de la raíz cuadrada";
		showTermDefinition();
	}
	//timer_1 = setTimeout("radical_sign_extd(" + a + ")", 2000);
}

function radical_sign_extd(e) {
	var cnt = parseInt(e);
	var radical_sign_div = document.getElementById('animation');
	cnt++;
	if(selLang=="english"){
	if(cnt == 1) {
		radical_sign_div.innerHTML = "<img class='radical_sign1' src='assets/images/radical_sign_images/288_radical-sign1.png'/>";
	} else if(cnt == 2) {
		radical_sign_div.innerHTML = "<img class='radical_sign1' src='assets/images/radical_sign_images/288_radical-sign2.png'/>";
	} else if(cnt == 3)  {
		cnt = 0;
		radical_sign_div.innerHTML = '';
	}
	}
	else{
		if(cnt == 1) {
		radical_sign_div.innerHTML = "<img class='radical_sign1' src='assets/images/radical_sign_images/288_radical-sign1.png'/>";
	} else if(cnt == 2) {
		radical_sign_div.innerHTML = "<img class='radical_sign1' src='assets/images/radical_sign_images/288_radical-signsp2.png'/>";
	} else if(cnt == 3) {
		cnt = 0;
		radical_sign_div.innerHTML = '';
	}
	}
	radical_sign(cnt);
}


/* radical sign ends */

/*radius starts*/
function radius(a) {
	if(a == 0) {
		englishTerm = "radius";
		spanishTerm = "radio";
		englishDef = "the distance from the center of a circle to any point on the circle";
		spanishDef = "la distancia desde el centro de un círculo a cualquier punto del círculo";
		showTermDefinition();
	}
	/*if(a != 3)
		//timer_1 = setTimeout("radius_extd(" + a + ")", 1400);
	else
		//timer_1 = setTimeout("radius_extd(" + a + ")", 2000);*/
}


function radius_extd(e) {
		var count = parseInt(e);
		
		if(count <= 4) {
			document.getElementById('animation').innerHTML = "<img class='radius1' src='assets/images/radius_img/289_radius"+count+".png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			count = -1;
		}
			count++;
			radius(count);
}
/* radius ends */

/* range starts  */

function range_extd(e) {
	var cnt = parseInt(e);
	var estimate_div = document.getElementById('animation');
	cnt++;
	if(selLang=="english"){
	if(cnt == 1) {
		estimate_div.innerHTML = "<img class='range1' src='assets/images/range_images/290_range1.png'/>";
	} else if(cnt == 2) {
		estimate_div.innerHTML = "<img class='range1' src='assets/images/range_images/290_range2.png'/>";
	} else if(cnt == 3) {
		estimate_div.innerHTML = "<img class='range1' src='assets/images/range_images/290_range3.png'/>";
	} else if(cnt == 4) {
		estimate_div.innerHTML = "<img class='range1' src='assets/images/range_images/290_range4.png'/>";
	} else if(cnt == 5) {
		estimate_div.innerHTML = "<img class='range1' src='assets/images/range_images/290_range5.png'/>";
	} else if(cnt == 6) {
		cnt = 0;
		estimate_div.innerHTML = '';
	}
	}
	else{
		if(cnt == 1) {
		estimate_div.innerHTML = "<img class='range1' src='assets/images/range_images/290_range1.png'/>";
	} else if(cnt == 2) {
		estimate_div.innerHTML = "<img class='range1' src='assets/images/range_images/290_range2.png'/>";
	} else if(cnt == 3) {
		estimate_div.innerHTML = "<img class='range1' src='assets/images/range_images/290_range3.png'/>";
	} else if(cnt == 4) {
		estimate_div.innerHTML = "<img class='range1' src='assets/images/range_images/290_range4.png'/>";
	} else if(cnt == 5) {
		estimate_div.innerHTML = "<img class='range1' src='assets/images/range_images/290_rangesp5.png'/>";
	} else if(cnt == 6) {
		cnt = 0;
		estimate_div.innerHTML = '';
	}
	}
	range(cnt);
}

function range(a) {
	var a = parseInt(a);
	if(a == 0) {
		englishTerm = "range";
		spanishTerm = "rango";
		englishDef = "the difference between the greatest and least values in a data set";
		spanishDef = "la diferencia entre los valores más grandes y los más pequeños de un conjunto de datos";
		showTermDefinition();
	}
	//timer_1 = setTimeout("range_extd(" + a + ")", 1333);
}

/* range ends  */

/* rate starts  */
function rate_extd(e) {
	var cnt = parseInt(e);
	var rate_div = document.getElementById('animation');
	cnt++;
	if(selLang=="english"){
	if(cnt == 1) {
		rate_div.innerHTML = "<img class='rate1' src='assets/images/rate_images/291_rate1.png'/>";
	} else if(cnt == 2) {
		rate_div.innerHTML = "<img class='rate1' src='assets/images/rate_images/291_rate2.png'/>";
	} else if(cnt == 3) {
		rate_div.innerHTML = "<img class='rate1' src='assets/images/rate_images/291_rate3.png'/>";
	} else if(cnt == 4) {
		rate_div.innerHTML = "<img class='rate1' src='assets/images/rate_images/291_rate4.png'/>";
	} else if(cnt == 5) {
		rate_div.innerHTML = "<img class='rate1' src='assets/images/rate_images/291_rate5.png'/>";
	} else if(cnt == 6) {
		rate_div.innerHTML = "<img class='rate1' src='assets/images/rate_images/291_rate6.png'/>";
	} else if(cnt == 7) {
		cnt = 0;
		rate_div.innerHTML = '';
	}
	}
	else{
		if(cnt == 1) {
		rate_div.innerHTML = "<img class='rate1' src='assets/images/rate_images/291_ratesp1.png'/>";
	} else if(cnt == 2) {
		rate_div.innerHTML = "<img class='rate1' src='assets/images/rate_images/291_ratesp2.png'/>";
	} else if(cnt == 3) {
		rate_div.innerHTML = "<img class='rate1' src='assets/images/rate_images/291_ratesp3.png'/>";
	} else if(cnt == 4) {
		rate_div.innerHTML = "<img class='rate1' src='assets/images/rate_images/291_ratesp4.png'/>";
	} else if(cnt == 5) {
		rate_div.innerHTML = "<img class='rate1' src='assets/images/rate_images/291_ratesp5.png'/>";
	} else if(cnt == 6) {
		rate_div.innerHTML = "<img class='rate1' src='assets/images/rate_images/291_ratesp6.png'/>";
	} else if(cnt == 7) {
		cnt = 0;
		rate_div.innerHTML = '';
	}
	}
	rate(cnt);
}
function rate(a) {
	var a = parseInt(a);
	if(a == 0) {
		englishTerm = "rate";
		spanishTerm = "razón";
		englishDef = "a ratio with two different units of measure";
		spanishDef = "una relación con dos unidades de medida diferentes";
		showTermDefinition();
	}
	//timer_1 = setTimeout("rate_extd(" + a + ")", 1143);
}

/* rate ends  */



/*ratio Begins*/
function ratio(a) {

	if(a == 0) {
		englishTerm = "ratio";
		spanishTerm = "razón";
		englishDef = "a comparison of two quantities";
		spanishDef = "comparación de dos cantidades";
		showTermDefinition();
	}
	//timer_1 = setTimeout("ratio_extd(" + a + ")", 1143)
}

function ratio_extd(e) {
	var cnt = parseInt(e);
	var ratio_div = document.getElementById('animation');
	cnt++;
	if(selLang=="english"){
	if(cnt == 1) {
		ratio_div.innerHTML = "<img class='ratio1' src='assets/images/ratio_images/292_ratio1.png'/>";
	} else if(cnt == 2) {
		ratio_div.innerHTML = "<img class='ratio1' src='assets/images/ratio_images/292_ratio2.png'/>";
	} else if(cnt == 3) {
		ratio_div.innerHTML = "<img class='ratio1' src='assets/images/ratio_images/292_ratio3.png'/>";
	} else if(cnt == 4) {
		ratio_div.innerHTML = "<img class='ratio1' src='assets/images/ratio_images/292_ratio4.png'/>";
	} else if(cnt == 5) {
		ratio_div.innerHTML = "<img class='ratio1' src='assets/images/ratio_images/292_ratio5.png'/>";
	} else if(cnt == 6) {
		ratio_div.innerHTML = "<img class='ratio1' src='assets/images/ratio_images/292_ratio6.png'/>";
	} else if(cnt == 7) {
		cnt = 0;
		ratio_div.innerHTML = '';
	}
	}
	else{
		if(cnt == 1) {
		ratio_div.innerHTML = "<img class='ratio1' src='assets/images/ratio_images/292_ratio1.png'/>";
	} else if(cnt == 2) {
		ratio_div.innerHTML = "<img class='ratio1' src='assets/images/ratio_images/292_ratiosp2.png'/>";
	} else if(cnt == 3) {
		ratio_div.innerHTML = "<img class='ratio1' src='assets/images/ratio_images/292_ratiosp3.png'/>";
	} else if(cnt == 4) {
		ratio_div.innerHTML = "<img class='ratio1' src='assets/images/ratio_images/292_ratiosp4.png'/>";
	} else if(cnt == 5) {
		ratio_div.innerHTML = "<img class='ratio1' src='assets/images/ratio_images/292_ratiosp5.png'/>";
	} else if(cnt == 6) {
		ratio_div.innerHTML = "<img class='ratio1' src='assets/images/ratio_images/292_ratiosp6.png'/>";
	} else if(cnt == 7) {
		cnt = 0;
		ratio_div.innerHTML = '';
	}
	}
	ratio(cnt);
}

/*ratio Ends*/


/* rational number starts  */
function rational_number_extd(e) {
		var count = parseInt(e);
		count++;
		if(count <= 4) {
			document.getElementById('animation').innerHTML = "<img class='rationalnumber1' src='assets/images/rational_number_images/293_rational-number"+count+".png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
			rational_number(count);
}

function rational_number(a) {
	var a = parseInt(a);
	if(a == 0) {
		englishTerm = "rational number";
		spanishTerm = "número racional";
		englishDef = "a number that can be expressed in the form <i>a/b</i>, where <i>a</i> and <i>b</i> are integers and <i>b</i> is not 0";
		spanishDef = "un número que puede expresarse en la forma a/b, donde a y b son enteros y b no es 0";
		showTermDefinition();
	}
	//timer_1 = setTimeout("rational_number_extd(" + a + ")", 1143);
}

/* rational number ends  */

/* ray starts*/
function ray(a) {
	if(a == 0) {
		englishTerm = "ray";
		spanishTerm = "semirrecta";
		englishDef = "part of a line with one endpoint";
		spanishDef = "parte de una recta con un extremo";
		showTermDefinition();
	}
	if(a == 0) {
		//timer_1 = setTimeout("ray_extd(" + a + ")", 800);
	} else {
		//timer_1 = setTimeout("ray_extd(" + a + ")", 2000);
	}
}

function ray_extd(e) {
		var count = parseInt(e);
		count++;
		if(count <= 3) {
			document.getElementById('animation').innerHTML = "<img class='ray1' src='assets/images/ray_images/294_ray"+count+".png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
			ray(count);
}

/* ray ends */


/*reciprocal Begins*/
function reciprocal(a) {

	if(a == 0) {
		englishTerm = "reciprocal";
		spanishTerm = "recíproco";
		englishDef = "for any nonzero number <i>x</i>, the reciprocal is 1/<i>x</i>";
		spanishDef = "para un número <i>x</i> distinto al 0, el recíproco es 1/<i>x</i>";
		showTermDefinition();
	}
	//timer_1 = setTimeout("reciprocal_extd(" + a + ")", 1600)
}
function reciprocal_extd(e) {
	var cnt = parseInt(e);
	var reciprocal_div = document.getElementById('animation');
	cnt++;
	if(selLang=="english"){
	if(cnt == 1) {
		reciprocal_div.innerHTML = "<img class='reciprocal1' src='assets/images/reciprocal_images/295_reciprocal1.png'/>";
	} else if(cnt == 2) {
		reciprocal_div.innerHTML = "<img class='reciprocal1' src='assets/images/reciprocal_images/295_reciprocal2.png'/>";
	} else if(cnt == 3) {
		reciprocal_div.innerHTML = "<img class='reciprocal1' src='assets/images/reciprocal_images/295_reciprocal3.png'/>";
	} else if(cnt == 4) {
		reciprocal_div.innerHTML = "<img class='reciprocal1' src='assets/images/reciprocal_images/295_reciprocal4.png'/>";
	} else if(cnt == 5) {
		cnt = 0;
		reciprocal_div.innerHTML = '';
	}
	}
	else{
		if(cnt == 1) {
		reciprocal_div.innerHTML = "<img class='reciprocal1' src='assets/images/reciprocal_images/295_reciprocal1.png'/>";
	} else if(cnt == 2) {
		reciprocal_div.innerHTML = "<img class='reciprocal1' src='assets/images/reciprocal_images/295_reciprocal2.png'/>";
	} else if(cnt == 3) {
		reciprocal_div.innerHTML = "<img class='reciprocal1' src='assets/images/reciprocal_images/295_reciprocal3.png'/>";
	} else if(cnt == 4) {
		reciprocal_div.innerHTML = "<img class='reciprocal1' src='assets/images/reciprocal_images/295_reciprocalsp4.png'/>";
	} else if(cnt == 5) {
		cnt = 0;
		reciprocal_div.innerHTML = '';
	}
	}
	reciprocal(cnt);
}

/*reciprocal Ends*/

/* rectangle starts*/
function rectangle(a) {
	if(a == 0) {
		englishTerm = "rectangle";
		spanishTerm = "rectángulo";
		englishDef = "a polygon with four right angles and two pairs of opposite sides of equal length";
		spanishDef = "un polígono con cuatro ángulos rectos y dos pares de lados opuestos de igual longitud";
		showTermDefinition();
	}
	//timer_1 = setTimeout("rectangle_extd(" + a + ")", 1600);
}

function rectangle_extd(e) {

	var cont = parseInt(e);
	cont = parseInt(e) + 1;
	if(cont <= 5){
		document.getElementById('animation').innerHTML = "<img src='assets/images/rectangle_images/296_rectangle"+cont+".png' >";
	}
	else {
		document.getElementById('animation').innerHTML = "";
		cont = 0;
	}
	rectangle(cont);
}

/* rectangle ends */

/* rectangular prism  starts*/
function rectangular_prism(a) {
	if(a == 0) {
		englishTerm = "rectangular prism";
		spanishTerm = "prisma rectangular";
		englishDef = "a solid figure with six faces that are rectangles";
		spanishDef = "una figura sólida con seis caras que son rectángulos";
		showTermDefinition();
	}
	//timer_1 = setTimeout("rectangular_prism_extd(" + a + ")", 800);
}

function rectangular_prism_extd(e) {
	var cont = parseInt(e);
	if(cont == 0)
		document.getElementById('animation').innerHTML = '<img src="assets/images/rectangular_prism/rect_prism.png" id="rect_prism_img" />';
	else if(cont == 1)
		document.getElementById('animation').innerHTML = '<img src="assets/images/rectangular_prism/rect_prism2.png" id="rect_prism_img" />';
	else if(cont == 2)
		document.getElementById('animation').innerHTML = '<img src="assets/images/rectangular_prism/rect_prism3.png" id="rect_prism_img" />';
	else if(cont == 3)
		document.getElementById('animation').innerHTML = '<img src="assets/images/rectangular_prism/rect_prism4.png" id="rect_prism_img" />';
	else if(cont == 4)
		document.getElementById('animation').innerHTML = '<img src="assets/images/rectangular_prism/rect_prism5.png" id="rect_prism_img" />';
	else if(cont == 5)
		document.getElementById('animation').innerHTML = '<img src="assets/images/rectangular_prism/rect_prism6.png" id="rect_prism_img" />';
	else if(cont == 6)
		document.getElementById('animation').innerHTML = '<img src="assets/images/rectangular_prism/rect_prism7.png" id="rect_prism_img" />';
	else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	cont = parseInt(e) + 1;
	rectangular_prism(cont);
}

/* rectangular prism  ends*/

/* rectangular pyramid  starts*/
function rectangular_pyramid(a) {
	if(a == 0) {
		englishTerm = "rectangular pyramid";
		spanishTerm = "pirámide rectangularr";
		englishDef = "a solid figure with a base that is a rectangle and four triangular faces that meet at a point";
		spanishDef = "una figura sólida cuya base es un rectángulo con cuatro caras triangulares que se encuentran en un punto";
		showTermDefinition();
	}
	if(a == 6) {
		//timer_1 = setTimeout("rectangular_pyramid_extd(" + a + ")", 1500);
	} else {
		//timer_1 = setTimeout("rectangular_pyramid_extd(" + a + ")", 800);
	}
}
function rectangular_pyramid_extd(e) {
		var count = parseInt(e);
		count++;
		if(count <= 6) {
			document.getElementById('animation').innerHTML = "<img class='rectangular_pyramid1' src='assets/images/rectangular_pyramid_images/298_rectangular-pyramid"+count+".png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
			rectangular_pyramid(count);
}

/* rectangular pyramid  ends*/

/* reflection */
function reflection(a) {
	if(a == 0) {
		englishTerm = "reflection";
		spanishTerm = "reflejo";
		englishDef = "a transformation of a geometric figure by flipping the figure over a line";
		spanishDef = "la transformación de una figura geométrica al voltear la figura sobre una recta";
		showTermDefinition();
	}
	//timer_1 = setTimeout("reflection_extd(" + a + ")", 800);
}

function reflection_extd(e) {
	var cnt = parseInt(e);
	var reflection_div = document.getElementById('animation');
	cnt++;
	if(cnt == 1) {
		reflection_div.innerHTML = "<div class='reflection_align' ><img id='reflection_diaplay' src='assets/images/reflection_img/1.png' /></div>";
	} else if(cnt == 2) {
		reflection_div.innerHTML = "<div class='reflection_align' ><img id='reflection_diaplay' src='assets/images/reflection_img/1.png' /><img id='reflection_1' src='assets/images/reflection_img/2.png' /><img id='reflection_black' src='assets/images/reflection_img/3.png' /></div>";
		$("#reflection_1").animate({
			left : '27px',
			width : '0px'
		}, 950, function() {
			$("#reflection_black").css('display','block');
		})
	} else if(cnt == 5) {
		reflection_div.innerHTML = "<div class='reflection_align_2' ><img class='reflection_img_id_2' src='assets/images/reflection_img/299_2_reflection.png' /></div>";
	} else if(cnt == 6) {
		reflection_div.innerHTML = "<div class='reflection_align_2' ><img class='reflection_img_id_2' src='assets/images/reflection_img/299_2_reflection.png' /><img class='reflectionimg' src='assets/images/reflection_img/299_2_reflection_1.png' /><img class='reflectionimg1' src='assets/images/reflection_img/299_2_reflection_2.png' /></div>";
		$('.reflectionimg').animate({
			left : '80px',
			width : '0px'
		}, 950, function() {
		$('.reflectionimg1').css('display','block')
		})
	} else if(cnt == 9) {
		cnt = 0;
		reflection_div.innerHTML = '';
	}
	reflection(cnt);
}


/*regroup in addition starts */
function regroup_in_addition(a) {
	if(a == 0) {
		englishTerm = "regroup in addition";
		spanishTerm = "reagrupar en la suma";
		englishDef = "to rename a number by trading 10 ones for 1 ten when adding";
		spanishDef = "volver a nombrar un número al cambiar 10 unidades por 1 decena en una suma";
		showTermDefinition();
	}
	//timer_1 = setTimeout("regroup_in_addition_extd(" + a + ")", 1500);
}

function regroup_in_addition_extd(e) {
		var count = parseInt(e);
		count++;
		if(count <= 5) {
			document.getElementById('animation').innerHTML = "<img class='regroup_in_addition1' src='assets/images/regroup_addtion_img/300_regroup"+count+".png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
			regroup_in_addition(count);
}
/* regroup in addition ends */

/* regroup in subtraction starts */
function regroup_in_subtraction(a) {
	//alert("as");
	if(a == 0) {
		englishTerm = "regroup in subtraction";
		spanishTerm = "reagrupar en la resta";
		englishDef = "to trade 1 ten for 10 ones when subtracting";
		spanishDef = "cambiar 1 decena por 10 unidades al restar";
		showTermDefinition();
	}
	//timer_1 = setTimeout("regroup_in_subtraction_extd(" + a + ")", 1600);
}

function regroup_in_subtraction_extd(e) {
		var count = parseInt(e);
		count++;
		if(count <= 4) {
			document.getElementById('animation').innerHTML = "<img class='regroup_in_subtraction1' src='assets/images/regroup_subtract_images/301_regroup"+count+".png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
			regroup_in_subtraction(count);
}
/* regroup in subtraction ends */


/*regular polygon starts */
function regular_polygon(a) {
	if(a == 0) {
		englishTerm = "regular polygon";
		spanishTerm = "polígono regular";
		englishDef = "a geometric figure that has equal side lengths and equal angle measures";
		spanishDef = "una figura geométrica que tiene los lados de igual longitud y los ángulos de igual medida";
		showTermDefinition();
	}
	/*if(a != 6)
		//timer_1 = setTimeout("regular_polygon_extd(" + a + ")", 500);
	else
		//timer_1 = setTimeout("regular_polygon_extd(" + a + ")", 1500);*/
}
function regular_polygon_extd(e) {
		var count = parseInt(e);
		count++;
		if(count <= 6) {
			document.getElementById('animation').innerHTML = "<img class='regular_polygon1' src='assets/images/regular_polygon_img/302_regular-polygon"+count+".png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
			regular_polygon(count);
}

/* rhombus starts*/
function rhombus(a) {
	if(a == 0) {
		englishTerm = "rhombus";
		spanishTerm = "rombo";
		englishDef = "a parallelogram with four sides of equal length";
		spanishDef = "un paralelogramo con cuatro lados de igual longitud";
		showTermDefinition();
	}
	//timer_1 = setTimeout("rhombus_extd(" + a + ")", 800);
}

function rhombus_extd(e) {
		var count = parseInt(e);
		count++;
		if(count <= 6) {
			document.getElementById('animation').innerHTML = "<img class='rhombus1' src='assets/images/rhombus_images/303_rhombus"+count+".png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
			rhombus(count);
}
/* rhombus ends*/



/* right angle starts*/
function right_angle(a) {
	if(a == 0) {
		englishTerm = "right angle";
		spanishTerm = "ángulo recto";
		englishDef = "an angle that forms a square corner, whose measure is exactly 90&#176;";
		spanishDef = "un ángulo que forma una esquina cuadrada, cuya medida es exactamente 90&#176;";
		showTermDefinition();
	}
	//timer_1 = setTimeout("right_angle_extd(" + a + ")", 1500);
}
function right_angle_extd(e) {
		var count = parseInt(e);
		count++;
		if(count <= 4) {
			document.getElementById('animation').innerHTML = "<img class='right_angle1' src='assets/images/right_angle_images/304_right-angle"+count+".png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
			right_angle(count);
}
/* right angle ends*/

/* right triangle starts*/
function right_triangle(a) {
	if(a == 0) {
		englishTerm = "right triangle";
		spanishTerm = "triángulo rectángulo";
		englishDef = "a triangle with one right angle";
		spanishDef = "un triángulo con un ángulo recto";
		showTermDefinition();
	}
	//timer_1 = setTimeout("right_triangle_extd(" + a + ")", 1200);
}
function right_triangle_extd(e) {
		var count = parseInt(e);
		count++;
		if(count <= 3) {
			document.getElementById('animation').innerHTML = "<img class='right_triangle1' src='assets/images/right_triangle_images/305_right-triangle"+count+".png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
			right_triangle(count);
}
/* right triangle ends*/



/* rise starts*/
function rise(a) {
	if(a == 0) {
		englishTerm = "rise";
		spanishTerm = "elevación";
		englishDef = "the vertical change between any two points on a line";
		spanishDef = "el cambio vertical entre dos puntos de una recta";
		showTermDefinition();
	}
	if(a == 4) {
		//timer_1 = setTimeout("rise_extd(" + a + ")", 2500);
	} else {
		//timer_1 = setTimeout("rise_extd(" + a + ")", 1500);
	}

}
function rise_extd(e) {
		var count = parseInt(e);
		count++;
		if(count <= 4) {
			document.getElementById('animation').innerHTML = "<img class='rise1' src='assets/images/rise_images/306_rise"+count+".png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
			rise(count);
}
/* rise ends*/

/* rotation about the origin  starts  */
function rotation_about_the_origin_extd(e) {
	var count = parseInt(e);
	count++;
	if(count <= 4) {
		document.getElementById('animation').innerHTML = "<img class='rotation_about1' src='assets/images/rotation_about_the_origin_images/308_rotationaboutorigin"+count+".png'/>";
	} else {
		document.getElementById('animation').innerHTML = "";
		count = 0;
	}
		rotation_about_the_origin(count);
}


function rotation_about_the_origin(a) {
	var a = parseInt(a);
	if(a == 0) {
		englishTerm = "rotation about the origin";
		spanishTerm = "rotación alrededor del origen";
		englishDef = "a transformation of a figure by turning the figure about the origin";
		spanishDef = "una transformación de una figura al girar la figura alrededor del origen";
		showTermDefinition();
	}
	//timer_1 = setTimeout("rotation_about_the_origin_extd(" + a + ")", 1200);
}

/* rotation about the origin ends  */

/* rotate symmetry */
function rotational_symmetry(a) {
	if(a == 0) {
		englishTerm = "rotational symmetry";
		spanishTerm = "simetría rotacional";
		englishDef = "the property of being able to be rotated less than 360° around a central point and result in an image that looks exactly like the original figure";
		spanishDef = "la capacidad de rotar menos de 360° alrededor de un punto central y resultar en una imagen exactamente igual a la figura original";
		showTermDefinition();
	}
	//timer_1 = setTimeout("rotational_symmetry_extd(" + a + ")", 1200);
}

function rotational_symmetry_extd(e) {
	var cnt = parseInt(e);
	var rotational_symmetry_div = document.getElementById('animation');
	cnt++;
	if(cnt == 1) {
		rotational_symmetry_div.innerHTML = "<img id='rotate_symmentry_1' src='assets/images/rotate_symmetry_img/1.png'/>";
	} else if(cnt == 2) {
		$('#rotate_symmentry_1').rotate({
			animateTo : 180
		});
	} else if(cnt == 3) {
		rotational_symmetry_div.innerHTML = "<img id='rotate_symmentry_2' src='assets/images/rotate_symmetry_img/4.png'/><img id='rotate_symmentry_dot' src='assets/images/rotate_symmetry_img/dot.png'/>";
	} else if(cnt == 4) {
		$('#rotate_symmentry_2').rotate({
			animateTo : 120,
			//top : 69,
			//left : 102
		})
		$('#rotate_symmentry_2').animate({
			top : 69,
			left : 102
		});
		
	} else {
		cnt = 0;
		rotational_symmetry_div.innerHTML = "";
	}
	rotational_symmetry(cnt);
}

/*rounding starts */
function rounding(a) {
	if(a == 0) {
		englishTerm = "rounding";
		spanishTerm = "redondear";
		englishDef = "replacing a number with another number that tells about how many or how much";
		spanishDef = "reemplazar un número con otro número que indica aproximadamente una cantidad";
		showTermDefinition();
	}
	//timer_1 = setTimeout("rounding_extd(" + a + ")", 1200);
}
function rounding_extd(e) {
		var count = parseInt(e);
		count++;
		if(count <= 6) {
			document.getElementById('animation').innerHTML = "<img class='rounding1' src='assets/images/rounding_images/310_rounding"+count+".png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
			rounding(count);
}

/* rounding ends */

/*row Begins*/
function row(a) {

	if(a == 0) {
		englishTerm = "row";
		spanishTerm = "fila";
		englishDef = "information that goes left and right in a table";
		spanishDef = "información que va a la izquierda y a la derecha de una tabla";
		showTermDefinition();
	}
	//timer_1 = setTimeout("row_extd(" + a + ")", 800)
}

function row_extd(e) {
		var count = parseInt(e);
		count++;
		if(count <= 6) {
			document.getElementById('animation').innerHTML = "<img class='row1' src='assets/images/row_images/311_row"+count+".png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
			row(count);
}


/*row Ends*/

/* run starts */

function run(a) {
	if(a == 0) {
		englishTerm = "run";
		spanishTerm = "recorrido";
		englishDef = "the horizontal change between any two points on a line";
		spanishDef = "el cambio horizontal entre dos puntos cualquiera de una recta";
		showTermDefinition();
	}
	//timer_1 = setTimeout("run_extd(" + a + ")", 1500);
}

function run_extd(e) {
		var count = parseInt(e);
		count++;
		if(count <= 4) {
			document.getElementById('animation').innerHTML = "<img class='run1' src='assets/images/run_img/306_run"+count+".png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
			run(count);
}
/* run ends*/

/* sample space starts  */
function sample_space_extd(e) {
	var cnt = parseInt(e);
	var samplespace_div = document.getElementById('animation');
	cnt++;
	if(selLang=="english"){
	if(cnt == 1) {
		samplespace_div.innerHTML = "<img class='sample_space1' src='assets/images/sample_space_images/313_sample-space1.png'/>";
	} else if(cnt == 2) {
		samplespace_div.innerHTML = "<img class='sample_space1' src='assets/images/sample_space_images/313_sample-space2.png'/>";
	} else if(cnt == 3) {
		samplespace_div.innerHTML = "<img class='sample_space1' src='assets/images/sample_space_images/313_sample-space3.png'/>";
	} else if(cnt == 4) {
		samplespace_div.innerHTML = "<img class='sample_space1' src='assets/images/sample_space_images/313_sample-space4.png'/>";
	} else if(cnt == 5) {
		samplespace_div.innerHTML = "<img class='sample_space2' src='assets/images/sample_space_images/313_sample-space5.png'/>";
	} else if(cnt == 6) {
		samplespace_div.innerHTML = "<img class='sample_space2' src='assets/images/sample_space_images/313_sample-space6.png'/>";
	} else if(cnt == 7) {
		samplespace_div.innerHTML = "<img class='sample_space2' src='assets/images/sample_space_images/313_sample-space7.png'/>";
	} else if(cnt == 8) {
		samplespace_div.innerHTML = "<img class='sample_space2' src='assets/images/sample_space_images/313_sample-space8.png'/>";
	} else if(cnt == 9) {
		samplespace_div.innerHTML = "<img class='sample_space2' src='assets/images/sample_space_images/313_sample-space9.png'/>";
	} else if(cnt == 10) {
		samplespace_div.innerHTML = "<img class='sample_space2' src='assets/images/sample_space_images/313_sample-space10.png'/>";
	} else if(cnt == 11) {
		samplespace_div.innerHTML = "<img class='sample_space2' src='assets/images/sample_space_images/313_sample-space11.png'/>";
	} else if(cnt == 12) {
		cnt = 0;
		samplespace_div.innerHTML = '';
	}
	}
	else{
		if(cnt == 1) {
		samplespace_div.innerHTML = "<img class='sample_space1' src='assets/images/sample_space_images/313_sample-space1.png'/>";
	} else if(cnt == 2) {
		samplespace_div.innerHTML = "<img class='sample_space1' src='assets/images/sample_space_images/313_sample-spacesp2.png'/>";
	} else if(cnt == 3) {
		samplespace_div.innerHTML = "<img class='sample_space1' src='assets/images/sample_space_images/313_sample-spacesp3.png'/>";
	} else if(cnt == 4) {
		samplespace_div.innerHTML = "<img class='sample_space1' src='assets/images/sample_space_images/313_sample-spacesp4.png'/>";
	} else if(cnt == 5) {
		samplespace_div.innerHTML = "<img class='sample_space2' src='assets/images/sample_space_images/313_sample-spacesp5.png'/>";
	} else if(cnt == 6) {
		samplespace_div.innerHTML = "<img class='sample_space2' src='assets/images/sample_space_images/313_sample-spacesp6.png'/>";
	} else if(cnt == 7) {
		samplespace_div.innerHTML = "<img class='sample_space2' src='assets/images/sample_space_images/313_sample-spacesp7.png'/>";
	} else if(cnt == 8) {
		samplespace_div.innerHTML = "<img class='sample_space2' src='assets/images/sample_space_images/313_sample-spacesp8.png'/>";
	} else if(cnt == 9) {
		samplespace_div.innerHTML = "<img class='sample_space2' src='assets/images/sample_space_images/313_sample-spacesp9.png'/>";
	} else if(cnt == 10) {
		samplespace_div.innerHTML = "<img class='sample_space2' src='assets/images/sample_space_images/313_sample-spacesp10.png'/>";
	} else if(cnt == 11) {
		samplespace_div.innerHTML = "<img class='sample_space2' src='assets/images/sample_space_images/313_sample-spacesp11.png'/>";
	} else if(cnt == 12) {
		cnt = 0;
		samplespace_div.innerHTML = '';
	}
	}
	sample_space(cnt);
}

function sample_space(a) {
	var a = parseInt(a);
	if(a == 0) {
		englishTerm = "sample space";
		spanishTerm = "espacio muestral";
		englishDef = "the set of all possible outcomes";
		spanishDef = "el conjunto de todos los resultados posibles";
		showTermDefinition();
	}
	//timer_1 = setTimeout("sample_space_extd(" + a + ")", 727);
}

/* sample space ends  */

/* SAS starts  */
function sas_extd(e) {
		var count = parseInt(e);
		count++;
		if(count <= 5) {
			document.getElementById('animation').innerHTML = "<img class='sas1' src='assets/images/sas_images/314_SAS"+count+".png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
			sas(count);
}

function sas(a) {
	var a = parseInt(a);
	if(a == 0) {
		englishTerm = "SAS";
		spanishTerm = "LAL";
		englishDef = "side-angle-side; a rule that states that if two sides and the angle between the sides of one triangle are congruent to two sides and the angle between the sides of another triangle, the triangles are congruent";
		spanishDef = "lado-ángulo-lado; regla que indica que si dos lados y el ángulo entre los lados de un triángulo son congruentes con los dos lados y el ángulo entre los lados de otro triángulo, los triángulos serán congruentes";
		showTermDefinition();
	}
	//timer_1 = setTimeout("sas_extd(" + a + ")", 1200);
}

/* SAS ends  */


/*scale*/
function scale(a) {
	if(a == 0) {
		englishTerm = "scale";
		englishDef = "the numbers placed at fixed distances to help label a graph";
		spanishTerm = "escala";
		spanishDef = "los números colocados a distancias fijas para ayudar a rotular una gráfica";
		showTermDefinition();
	}
	if(a == 0) {
		//timer_1 = setTimeout("scale_extd(" + a + ")", 1000);
	} else {
		//timer_1 = setTimeout("scale_extd(" + a + ")", 1600);
	}
}
function scale_extd(e) {
	var cnt = parseInt(e);
	var scale_div = document.getElementById('animation');
	cnt++;
	if(selLang=="english"){
	if(cnt == 1) {
		scale_div.innerHTML = "<img class='scale1' src='assets/images/scale_images/315_scale1.png'/>";
	} else if(cnt == 2) {
		scale_div.innerHTML = "<img class='scale1' src='assets/images/scale_images/315_scale2.png'/>";
	} else if(cnt == 3) {
		scale_div.innerHTML = "<img class='scale2' src='assets/images/scale_images/315_scale3.png'/>";
	} else if(cnt == 4) {
		scale_div.innerHTML = "<img class='scale2' src='assets/images/scale_images/315_scale4.png'/>";
	} else if(cnt == 5) {
		cnt = 0;
		scale_div.innerHTML = '';
	}
	}
	else{
		if(cnt == 1) {
		scale_div.innerHTML = "<img class='scale1' src='assets/images/scale_images/315_scale1.png'/>";
	} else if(cnt == 2) {
		scale_div.innerHTML = "<img class='scale1' src='assets/images/scale_images/315_scale2.png'/>";
	} else if(cnt == 3) {
		scale_div.innerHTML = "<img class='scale2' src='assets/images/scale_images/315_scale3.png'/>";
	} else if(cnt == 4) {
		scale_div.innerHTML = "<img class='scale2' src='assets/images/scale_images/315_scale4.png'/>";
	} else if(cnt == 5) {
		cnt = 0;
		scale_div.innerHTML = '';
	}
	}
	scale(cnt);
}
/* ENDING ---- scale*/

/*scale_drawing*/
function scale_drawing(a) {
	if(a == 0) {
		englishTerm = "scale drawing";
		englishDef = " a drawing that is the same shape as the actual object but of a different size";
		spanishTerm = "dibujo a escala";
		spanishDef = "un dibujo que tiene la misma forma que el objeto real pero es de otro tamaño";
		showTermDefinition();
	}
	if(a == 0) {
		//timer_1 = setTimeout("scale_drawing_extd(" + a + ")", 800);
	} else {
		//timer_1 = setTimeout("scale_drawing_extd(" + a + ")", 2000);
	}
}


function scale_drawing_extd(e) {
		var count = parseInt(e);
		count++;
		if(count <= 4) {
			document.getElementById('animation').innerHTML = "<img class='scale_drawing1' src='assets/images/scale_drawing_images/316_scale-drawing"+count+".png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
			scale_drawing(count);
}

/* ENDING ---- scale drawing*/

/*scale_factor*/
function scale_factor(a) {
	if(a == 0) {
		englishTerm = "scale factor";
		englishDef = "the ratio of the length in a scale drawing to the actual length of the object";
		spanishTerm = "factor de escala";
		spanishDef = "la relación entre la longitud en un dibujo a escala y la longitud real de un objeto";
		showTermDefinition();
	}
	if(a == 0) {
		//timer_1 = setTimeout("scale_factor_extd(" + a + ")", 800);
	} else {
		//timer_1 = setTimeout("scale_factor_extd(" + a + ")", 2000);
	}
}
function scale_factor_extd(e) {
		var count = parseInt(e);
		count++;
		if(count <= 2) {
			document.getElementById('animation').innerHTML = "<img class='scale_factor1' src='assets/images/scale_factor_images/317_scale-factor1"+count+".png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
			scale_factor(count);
}

/* ENDING ---- scale_factor*/

/* scalene triangle  starts  */
function scalene_triangle_extd(e) {
	var count = parseInt(e);
	if(count == 0) {
		document.getElementById('animation').innerHTML = "<img class='scale_image' src='assets/images/scalene_triangle_images/318_scalene-triangle1.png'>";
	} else if(count == 1) {
		document.getElementById('animation').innerHTML = "<img class='scale_image' src='assets/images/scalene_triangle_images/318_scalene-triangle2.png'>";
	} else if(count == 2) {
		document.getElementById('animation').innerHTML = "<img class='scale_image' src='assets/images/scalene_triangle_images/318_scalene-triangle3.png'>";
	} else if(count == 3) {
		document.getElementById('animation').innerHTML = "<img class='scale_image' src='assets/images/scalene_triangle_images/318_scalene-triangle4.png'>";
	} else if(count == 4) {
		if(selLang == 'english') {
		document.getElementById('animation').innerHTML = "<img class='scale_image' src='assets/images/scalene_triangle_images/318_scalene-triangle5.png'>";
		}	else{
			document.getElementById('animation').innerHTML = "<img class='scale_image' src='assets/images/scalene_triangle_images/318_scalene-triangle5s.png'>";
		}
	}
	 else {
		count = -1
		document.getElementById('animation').innerHTML = "";
	}
	count++;
	scalene_triangle(count);
	
}

function scalene_triangle(a) {
	var a = parseInt(a);
	if(a == 0) {
		englishTerm = "scalene triangle";
		spanishTerm = "triángulo escaleno";
		englishDef = "a triangle with three sides of different lengths";
		spanishDef = "un triángulo con tres lados de longitudes diferentes";
		showTermDefinition();
	}
	//timer_1 = setTimeout("scalene_triangle_extd(" + a + ")", 1000);
}

/* scalene triangle ends  */


/*scatter plot starts */
function scatter_plot(a) {
	if(a == 0) {
		englishTerm = "scatter plot";
		spanishTerm = "diagrama de dispersión";
		englishDef = "a graph that shows the relationship between two variables in a data set";
		spanishDef = "una gráfica que muestra la relación entre dos variables en un conjunto de datos";
		showTermDefinition();
	}
	//timer_1 = setTimeout("scatter_plot_extd(" + a + ")", 1300);
}


function scatter_plot_extd(e) {
		var count = parseInt(e);
		count++;
		if(count <= 3) {
			document.getElementById('animation').innerHTML = "<img class='scatter_plot1' src='assets/images/scatterplot_img/319_scatter-plot"+count+".png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
			scatter_plot(count);
}

/* scatter plot ends */

/* scientific notation starts */

function scientific_notation(a) {
	if(a == 0) {
		englishTerm = "scientific notation";
		spanishTerm = "notación científica";
		englishDef = "a way of writing very large or very small numbers as a product of two factors; the first factor is a number greater than or equal to 1 and less than 10, and the second is a power of 10";
		spanishDef = "una manera de escribir números muy grandes o muy pequeños como un producto de dos factores; el primer factor es un número mayor que o igual a 1 y menor que 10, y el segundo es una potencia de 10";
		showTermDefinition();
	}
	/*if(a == 16 || a == 9)
		//timer_1 = setTimeout("scientific_notation_extd(" + a + ")", 1800);
	else
		//timer_1 = setTimeout("scientific_notation_extd(" + a + ")", 800);*/
}
function scientific_notation_extd(e) {
		var count = parseInt(e);
		count++;
		if(count <= 16) {
			document.getElementById('animation').innerHTML = "<img class='scientific_notation1' src='assets/images/scientific_notation_img/320_scientific-notation"+count+".png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
			scientific_notation(count);
}
/* scientific notation ends */

/* sequence starts */
function sequence(a) {
	if(a == 0) {
		englishTerm = "sequence";
		englishDef = "a list of numbers that follows a mathematical rule or equation";
		spanishTerm = "secuencia";
		spanishDef = "una lista de números que sigue una regla o ecuación matemática";
		showTermDefinition();
	}
	if(a == 0) {
		//timer_1 = setTimeout("sequence_extd(" + a + ")", 1000);
	} else {
		//timer_1 = setTimeout("sequence_extd(" + a + ")", 1500);
	}
}
function sequence_extd(e) {
		var count = parseInt(e);
		count++;
		if(count <= 3) {
			document.getElementById('animation').innerHTML = "<img class='sequence1' src='assets/images/sequence_img/321_sequence"+count+".png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
			sequence(count);
}
/* ENDING ---- sequence*/

/*set*/
function set(a) {
	if(a == 0) {
		englishTerm = "set";
		englishDef = "a collection of items";
		spanishTerm = "conjunto";
		spanishDef = "una colección de artículos";
		showTermDefinition();
	}
	if(a == 0) {
		//timer_1 = setTimeout("set_extd(" + a + ")", 1000);
	} else {
		//timer_1 = setTimeout("set_extd(" + a + ")", 2000);
	}
}

function set_extd(e) {
	var count = parseInt(e);

	if(count < 5) {
		document.getElementById('animation').innerHTML = "<div class='set'><img src='assets/images/set/bal_" + count + ".png'></div>";

	} else {
		count = -1;
		document.getElementById('animation').innerHTML = "";
	}
	count++;
	set(count);
}

/* ENDING ---- set*/

/*share_equally*/
function share_equally(a) {
	if(a == 0) {
		englishTerm = "share equally";
		englishDef = "to divide a quantity into equal groups";
		spanishTerm = "compartir por igual";
		spanishDef = "dividir una cantidad en grupos iguales";
		showTermDefinition();
	}
	if(a == 0) {
		//timer_1 = setTimeout("share_equally_extd(" + a + ")", 700);
	} else {
		//timer_1 = setTimeout("share_equally_extd(" + a + ")", 2000);
	}
}

function share_equally_extd(e) {
	var count = parseInt(e);
	if(count < 3) {
		document.getElementById('animation').innerHTML = "<div id='share_equally'><img  src='assets/images/share_equally/share_equally_" + count + ".png'/></div>"; 
	} else {
		count = -1
		document.getElementById('animation').innerHTML = "";
	}
	count++;
	share_equally(count);
}

/* ENDING ---- share equally*/

/*side Begins*/
function side(a) {

	if(a == 0) {
		englishTerm = "side";
		spanishTerm = "lado";
		englishDef = "a line segment that is part of a shape";
		spanishDef = "un segmento de recta que es parte de una figura";
		showTermDefinition();
	}
	//timer_1 = setTimeout("side_extd(" + a + ")", 1000)
}

function side_extd(e) {
	var count = parseInt(e);
	var div_id = document.getElementById("animation");
	count++;
	if(count >= 0) {
		div_id.innerHTML = "<img src='assets/images/side_images/side_" + count + ".png' id='side_triangle'/>";
	}
	if(count == 4) {
		count = 0;
		div_id.innerHTML = "";
	}
	side(count);
}

/*side Ends*/


/*square similar*/
function similar(a) {
	if(a == 0) {
		englishTerm = "similar";
		spanishTerm = "similares";
		englishDef = "geometric figures that are the same shape, but not necessarily the same size";
		spanishDef = "figuras geométricas que tienen la misma forma, pero no necesariamente el mismo";
		showTermDefinition();
	}
	if(a == 0) {
		//timer_1 = setTimeout("similar_extd(" + a + ")", 1000);
	} else {
		//timer_1 = setTimeout("similar_extd(" + a + ")", 1600);
	}
}

function similar_extd(e) {
	var count = parseInt(e);
	if(count == 0) {
		document.getElementById('animation').innerHTML = "<div class='similar_figures'><img class='similar_figures_img' id='img_1' src='assets/images/similar_img/similar_1.png'><img id='img_2' class='similar_figures_img2' src='assets/images/similar_img/similar_2.png'></div>";
	} else if(count == 1) {
		document.getElementById('animation').innerHTML = "<div class='similar_figures'><img class='similar_figures_img' id='img_1' src='assets/images/similar_img/similar_1.png'><img id='img_2' src='assets/images/similar_img/similar_2.png' class='similar_figures_img2' ><img id='img_3' src='assets/images/similar_img/similar_3.png' class='similar_figures_img3' ></div>";
		$('#img_1').animate({
			left : 175
		}, 600, function() {
			$('#img_1').animate({
				width : 178,
				height : 97,
				top : 51,
				left : 149
			}, 600)
		})
	} else if(count == 2) {
		$('#img_1').css('display', 'none')
		$('#img_2').css('display', 'none')
		$('#img_3').css('display', 'block')
	} else if(count == 3) {
		$('#img_3').animate({
			width : 100,
			height : 55,
			top : 93,
			left : 183
		}, 400)
		$('#img_2').css('display', 'block')
	} else {
		count = -1
		document.getElementById('animation').innerHTML = "";
	}
	count++;
	similar(count);
}

/* ENDING ---- similar*/


/*square similar figures*/
function similar_figures(a) {
	if(a == 0) {
		englishTerm = "similar figures";
		spanishTerm = "figuras similares";
		englishDef = "geometric figures that are the same shape, but not necessarily the same size";
		spanishDef = "figuras geométricas que tienen la misma forma, pero no necesariamente el mismo ";
		showTermDefinition();
	}
	if(a == 0) {
		//timer_1 = setTimeout("similar_figures_extd(" + a + ")", 1000);
	} else {
		//timer_1 = setTimeout("similar_figures_extd(" + a + ")", 1600);
	}
}

function similar_figures_extd(e) {
	var count = parseInt(e);
	if(count == 0) {
		document.getElementById('animation').innerHTML = "<div class='similar_figures'><img class='similar_figures_img' id='img_1' src='assets/images/similar_img/similar_1.png'><img id='img_2' src='assets/images/similar_img/similar_2.png' class='similar_figures_img2' ></div>";
	} else if(count == 1) {
		document.getElementById('animation').innerHTML = "<div class='similar_figures'><img class='similar_figures_img' id='img_1' src='assets/images/similar_img/similar_1.png'><img id='img_2' src='assets/images/similar_img/similar_2.png' class='similar_figures_img2' ><img id='img_3' src='assets/images/similar_img/similar_3.png' class='similar_figures_img3' ></div>";
		$('#img_1').animate({
			left : 175
		}, 600, function() {
			$('#img_1').animate({
				width : 178,
				height : 97,
				top : 51,
				left : 149
			}, 600)
		})
	} else if(count == 2) {
		$('#img_1').css('display', 'none')
		$('#img_2').css('display', 'none')
		$('#img_3').css('display', 'block')
	} else if(count == 3) {
		$('#img_3').animate({
			width : 100,
			height : 55,
			top : 93,
			left : 183
		}, 400)
		$('#img_2').css('display', 'block')
	} else {
		count = -1
		document.getElementById('animation').innerHTML = "";
	}
	count++;
	similar_figures(count);
}

/* ENDING ---- similar figures*/ 

/* simplest form starts*/
function simplest_form(a) {
	if(a == 0) {
		englishTerm = "simplest form";
		spanishTerm = "forma simplificada";
		englishDef = "the form of a fraction in which the only common factor of the numerator and the denominator is 1";
		spanishDef = "la forma de una fracción en la que el único factor común del numerador y el denominador es 1";
		showTermDefinition();
	}
	//timer_1 = setTimeout("simplest_form_extd(" + a + ")", 1700);
}
function simplest_form_extd(e) {
		var count = parseInt(e);
		count++;
		if(count <= 4) {
			document.getElementById('animation').innerHTML = "<img class='simplest_form1' src='assets/images/simplest_form_images/327_1_simplest-form"+count+".png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
			simplest_form(count);
}
/* simplest form ends*/

/* simplest form of a fraction starts*/
function simplest_form_of_a_fraction(a) {
	if(a == 0) {
		englishTerm = "simplest form of a fraction";
		spanishTerm = "forma simplificada de una fracción";
		englishDef = "the form of a fraction in which the only common factor of the numerator and the denominator is 1";
		spanishDef = "la forma de una fracción en la que el único factor común del numerador y el denominador es 1";
		showTermDefinition();
	}
	//timer_1 = setTimeout("simplest_form_of_a_fraction_extd(" + a + ")", 1700);
}
function simplest_form_of_a_fraction_extd(e) {
		var count = parseInt(e);
		count++;
		if(count <= 4) {
			document.getElementById('animation').innerHTML = "<img class='simplest_form_fraction1' src='assets/images/simplest_form_fraction_img/327_1_simplest-_form_fraction"+count+".png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
			simplest_form_of_a_fraction(count);
}

/* simplest form of a fraction ends*/

/* sixth  starts  */
function sixth_extd(e) {
	var count = parseInt(e);
	count++;
	if(count <= 3) {
		document.getElementById('animation').innerHTML = "<img class='sixth_1' src='assets/images/sixth_images/329_sixth"+count+".png'/>";
	} else {
		document.getElementById('animation').innerHTML = "";
		count = 0;
	}
		sixth(count);
}



function sixth(a) {
	var a = parseInt(a);
	if(a == 0) {
		englishTerm = "sixth (sixths)";
		spanishTerm = "sexto (sextos)";
		englishDef = "1 of 6 equal parts";
		spanishDef = "1 de 6 partes iguales";
		showTermDefinition();
	}
	//timer_1 = setTimeout("sixth_extd(" + a + ")", 1000);
}

/* sixth ends  */

/*square skip counting*/
function skip_counting(a) {
	if(a == 0) {
		englishTerm = "skip counting";
		englishDef = "counting forward or backward by intervals of a given number";
		spanishTerm = "contar salteado";
		spanishDef = "contar hacia delante o hacia atrás en intervalos de un número determinado";
		showTermDefinition();
	}
	if(a == 0) {
		//timer_1 = setTimeout("skip_counting_extd(" + a + ")", 300);
	} else {
		//timer_1 = setTimeout("skip_counting_extd(" + a + ")", 1100);
	}
}
function skip_counting_extd(e) {
		var count = parseInt(e);
		count++;
		if(count <= 11) {
			document.getElementById('animation').innerHTML = "<img class='skip_counting1' src='assets/images/skip_counting_images/330_skip-count"+count+".png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
			skip_counting(count);
}

/* ENDING ---- skip counting*/

/* slide starts */
function slide(a) {
	if(a == 0) {
		englishTerm = "slide";
		spanishTerm = "deslizar";
		englishDef = "to move a figure in any direction without turning it";
		spanishDef = "mover una figura en cualquier dirección sin girarla";
		showTermDefinition();
	}
	//timer_1 = setTimeout("slide_extd(" + a + ")", 1800);
}

function slide_extd(e) {
	var cnt = parseInt(e);
	var slide_div = document.getElementById('animation');
	cnt++;
	if(cnt == 1) {
		slide_div.innerHTML = "<div class='slide_align' ><img id='slide_diaplay' src='assets/images/slide_images/331_slide1.png' /><img src='assets/images/slide_images/331_slide1.png' id='slide_imgslide'/><img  class='slide_line' src='assets/images/slide_images/331_slide_arrow.png' /></div>";
	} else if(cnt == 2) {

		$("#slide_imgslide").animate({
			left : '2px'
		}, 1800);
		$(".slide_line").animate({
			left : '1px',
			width : '353px'
		}, 1800);

	} else if(cnt == 5) {
		cnt = 0;
		slide_div.innerHTML = '';
	}
	slide(cnt);
}

/* slide ends  */

/*slope starts */
function slope(a) {
	if(a == 0) {
		englishTerm = "slope";
		spanishTerm = "pendiente";
		englishDef = "the ratio of the vertical change, rise, to the horizontal change, run, between any two points on a line";
		spanishDef = "la relación del cambio vertical, o elevación, al cambio horizontal, o recorrido, entre dos puntos de una recta";
		showTermDefinition();
	}
	/*if(a != 9)
		//timer_1 = setTimeout("slope_extd(" + a + ")", 1200);
	else
		//timer_1 = setTimeout("slope_extd(" + a + ")", 700);*/
}
function slope_extd(e) {
		var count = parseInt(e);
		count++;
		if(count <= 7) {
			document.getElementById('animation').innerHTML = "<img class='slope1' src='assets/images/slope_img/332_slope"+count+".png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
			slope(count);
}

/* slope ends */
/* solid starts  */

function solid(a) {
    var a = parseInt(a);
    if(a == 0) {
        englishTerm = "solid";
        spanishTerm = "sólido";
        englishDef = "a three-dimensional figure that has length, width, and height";
        spanishDef = "una figura tridimensional que tiene longitud, ancho y altura";
        showTermDefinition();
    }
    //timer_1 = setTimeout("solid_extd(" + a + ")", 889);
}
function solid_extd(e) {
		var count = parseInt(e);
		count++;
		if(count <= 8) {
			document.getElementById('animation').innerHTML = "<img class='solid1' src='assets/images/solid_images/333_solid"+count+".png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
			solid(count);
}
/* solid ends  */

/* solid figure starts  */

function solid_figure(a) {
	var a = parseInt(a);
	if(a == 0) {
		englishTerm = "solid figure";
		spanishTerm = "figura sólida";
		englishDef = "a three-dimensional figure that has length, width, and height";
		spanishDef = "una figura tridimensional que tiene longitud, ancho y altura";
		showTermDefinition();
	}
	//timer_1 = setTimeout("solid_figure_extd(" + a + ")", 889);
}
function solid_figure_extd(e) {
		var count = parseInt(e);
		count++;
		if(count <= 8) {
			document.getElementById('animation').innerHTML = "<img class='solid_figure1' src='assets/images/solid_figure_images/333_solid_figure"+count+".png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
			solid_figure(count);
}
/* solid figures ends  */

/*solution Begins*/
function solution(a) {

	if(a == 0) {
		englishTerm = "solution";
		spanishTerm = "solución";
		englishDef = "a number that, when substituted for a variable in an equation, results in a true statement";
		spanishDef = "un número que sustituye la variable de una ecuación y resulta en un enunciado verdadero";
		showTermDefinition();
	}
	//timer_1 = setTimeout("solution_extd(" + a + ")", 1000)
}

function solution_extd(e) {
		var count = parseInt(e);
		count++;
		if(count <= 12) {
			document.getElementById('animation').innerHTML = "<img class='solution1' src='assets/images/solution_images/335_solution"+count+".png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
			solution(count);
}
/*solution Ends*/


/*solution of a system of equations*/
function solution_of_a_system_of_equations(a) {
	if(a == 0) {
		englishTerm = "solution of a system of equations";
		englishDef = "an ordered pair that is a solution of every equation in the system";
		spanishTerm = "solución de un sistema de ecuaciones";
		spanishDef = "un par ordenado que es la solución de cada ecuación del sistema";
		showTermDefinition();
	}
	if(a == 0) {
		//timer_1 = setTimeout("solution_of_a_system_of_equations_extd(" + a + ")", 1000);
	} else {
		//timer_1 = setTimeout("solution_of_a_system_of_equations_extd(" + a + ")", 2000);
	}
}
function solution_of_a_system_of_equations_extd(e) {
		var count = parseInt(e);
		count++;
		if(count <= 7) {
			document.getElementById('animation').innerHTML = "<img class='solution_of_eq1' src='assets/images/solution_of_a_system_of_equations/336_solution_system"+count+".png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
			solution_of_a_system_of_equations(count);
}
/* ENDING ---- solution of a system of equations*/


/* solution set of an inequality starts */
function solution_set_of_an_inequality(a) {
	if(a == 0) {
		englishTerm = "solution set of an inequality";
		spanishTerm = "conjunto de soluciones de una desigualdad";
		englishDef = "the set of numbers that make an inequality true";
		spanishDef = "el conjunto de números que hace que una desigualdad sea verdadera";
		replayAnimation = 1;
		showTermDefinition();
	}
	//timer_1 = setTimeout("solution_set_of_an_inequality_extd(" + a + ")", 1600);
}

function solution_set_of_an_inequality_extd(e) {
		var count = parseInt(e);
		count++;
		if(count <= 4) {
			document.getElementById('animation').innerHTML = "<img class='solution_set_inequality1' src='assets/images/solution_set_img/337_solution-set"+count+".png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
			solution_set_of_an_inequality(count);
}
/* solution set of an inequality ends */


/*sphere*/

function sphere(a) {
	if(a == 0) {
		englishTerm = "sphere";
		spanishTerm = "esfera";
		englishDef = "a solid figure made up of all the points that are the same distance from a fixed point called a center";
		spanishDef = "una figura sólida compuesta por todos los puntos que están a la misma distancia de un punto fijo llamado centro";
		showTermDefinition();
	}
	//timer_1 = setTimeout("sphere_extd(" + a + ")", 1000);

}

function sphere_extd(e) {
		var count = parseInt(e);
		count++;
		if(count==1) {
			document.getElementById('animation').innerHTML = "<img class='sphere_1' src='assets/images/sphere_img/338_sphere"+count+".png'/>";
		}else if(count<=3){
			if(selLang == "english"){
				document.getElementById('animation').innerHTML = "<img class='sphere_1' src='assets/images/sphere_img/338_sphere"+count+".png'/>";
			}else{
				document.getElementById('animation').innerHTML = "<img class='sphere_1' src='assets/images/sphere_img/338_spheresp"+count+".png'/>";
			}
		}
		  else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
	
	sphere(count);
}

/*end sphere*/

/*square*/
function square(a) {
	if(a == 0) {
		englishTerm = "square";
		englishDef = "a figure that has four equal sides and four right angles";
		spanishTerm = "cuadrado";
		spanishDef = "una figura que tiene cuatro lados iguales y cuatro ángulos rectos";
		showTermDefinition();
	}
	if(a == 0) {
		//timer_1 = setTimeout("square_extd(" + a + ")", 1000);
	} else {
		//timer_1 = setTimeout("square_extd(" + a + ")", 1600);
	}
}
function square_extd(e) {
		var count = parseInt(e);
		count++;
		if(count <= 10) {
			document.getElementById('animation').innerHTML = "<img class='square1' src='assets/images/square_images/339_square"+count+".png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
			square(count);
}
/* square ends */

/* square pyramid starts */
function square_pyramid(a) {
	if(a == 0) {
		englishTerm = "square pyramid";
		englishDef = "a three-dimensional figure with a square base and four triangular faces that meet at a point";
		spanishTerm = "pirámide cuadrada";
		spanishDef = "una figura tridimensional con una base cuadrada y cuatro caras triangulares que se encuentran en un punto";
		showTermDefinition();
	}
	if(a == 0) {
		//timer_1 = setTimeout("square_pyramid_extd(" + a + ")", 1000);
	} else {
		//timer_1 = setTimeout("square_pyramid_extd(" + a + ")", 1600);
	}
}
function square_pyramid_extd(e) {
		var count = parseInt(e);
		count++;
		if(count <= 7) {
			document.getElementById('animation').innerHTML = "<img class='square_pyramid1' src='assets/images/square_pyramid_images/340_square-pyramid"+count+".png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
			square_pyramid(count);
}
/* square pyramid ends */

/*square_root*/
function square_root(a) {

	if(a == 0) {
		englishTerm = "square root";
		englishDef = "a number that when multiplied by itself is equal to a given number";
		spanishTerm = "raíz cuadrada";
		spanishDef = "un número que, cuando se multiplica por sí mismo, es igual a un número dado";
		showTermDefinition();
	}
	if(a == 0) {
		//timer_1 = setTimeout("square_root_extd(" + a + ")", 1000);

	} else {
		//timer_1 = setTimeout("square_root_extd(" + a + ")", 1150);
	}
}
function square_root_extd(e) {
		var count = parseInt(e);
		count++;
		if(count <= 6) {
			document.getElementById('animation').innerHTML = "<img class='square_root1' src='assets/images/square_root_images/341_square-root"+count+".png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
			square_root(count);
}
/* ENDING ---- square_root*/


/* square_unit starts*/
function square_unit(a) {
	if(a == 0) {
		englishTerm = "square unit";
		englishDef = "the unit used to measure area";
		spanishTerm = "unidad cuadrada";
		spanishDef = "unidad que se usa para medir el área";
		showTermDefinition();
	}
	if(a == 0) {
		//timer_1 = setTimeout("square_unit_extd(" + a + ")", 1000);
	} else {
		//timer_1 = setTimeout("square_unit_extd(" + a + ")", 2000);
	}
}

function square_unit_extd(e) {
		var count = parseInt(e);
		count++;
		if(count <= 3) {
			document.getElementById('animation').innerHTML = "<img class='square_unit1' src='assets/images/square_unit_images/342_square-unit"+count+".png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
			square_unit(count);
}

/* ENDING ---- square unit*/


/* SSS starts*/
function sss(a) {
	if(a == 0) {
		englishTerm = "SSS";
		spanishTerm = "LLL";
		englishDef = "side-side-side; the rule states that if three sides of one triangle are congruent to three sides of another triangle, the triangles are congruent";
		spanishDef = "lado-lado-lado; la regla que dice que si tres lados de un triángulo son congruentes con los tres lados de otro triángulo, los triángulos son congruentes";
		showTermDefinition();
	}
	//timer_1 = setTimeout("sss_extd(" + a + ")", 1600);
}
function sss_extd(e) {
		var count = parseInt(e);
		count++;
		if(count <= 4) {
			document.getElementById('animation').innerHTML = "<img class='sss1' src='assets/images/sss_images/343_SSS"+count+".png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
			sss(count);
}
/* SSS ends */

/*standard_form*/
function standard_form(a) {

	if(a == 0) {
		englishTerm = "standard form";
		englishDef = "a number written with one digit for each place value";
		spanishTerm = "forma estándar";
		spanishDef = "un número escrito con un dígito por cada valor posicional";
		showTermDefinition();
	}
	if(a == 0) {
		//timer_1 = setTimeout("standard_form_extd(" + a + ")", 1000);

	} else {
		//timer_1 = setTimeout("standard_form_extd(" + a + ")", 2000);
	}
}
function standard_form_extd(e) {
		var count = parseInt(e);
		count++;
		if(count <= 3) {
			document.getElementById('animation').innerHTML = "<img class='standard_form1' src='assets/images/standard_form_images/344_standard-form"+count+".png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
			standard_form(count);
}

/* ENDING ---- standard_form*/


/* stem starts  */
function stem_extd(e) {
	var display = new Array();
	display[0] = "<img src='assets/images/stem_images/stem.png' />";
	display[1] = "<img src='assets/images/stem_images/stem1.png' />";
	display[2] = "<img src='assets/images/stem_images/1.png' />";
	display[3] = "<img src='assets/images/stem_images/2.png' />";
	display[4] = "<img src='assets/images/stem_images/3.png' />";
	display[5] = "<img src='assets/images/stem_images/4.png' />";
	if(e < 6) {
		document.getElementById('animation').innerHTML = "<div id='stem_sub'>" + display[parseInt(e)] + "</div>";

	} else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	cont = parseInt(e) + 1;
	stem(cont);
}

function stem(a) {
	var a = parseInt(a);
	if(a == 0) {
		englishTerm = "stem";
		spanishTerm = "tallo";
		englishDef = "all the digits to the left of the leaf in a particular data value";
		spanishDef = "todos los dígitos a la izquierda de la hoja de un valor concreto";
		showTermDefinition();
	}
	//timer_1 = setTimeout("stem_extd(" + a + ")", 667);
}

/* stem ends  */

/* stem and leaf starts */
function stem_and_leaf_plot(a) {
	if(a == 0) {
		englishTerm = "stem-and-leaf plot";
		spanishTerm = "diagrama de tallo y hoja";
		englishDef = "a way to organize a large set of data";
		spanishDef = "una manera de organizar un conjunto grande de datos";
		showTermDefinition();
	}
	//timer_1 = setTimeout("stem_and_leaf_plot_extd(" + a + ")", 1200);

}

function stem_and_leaf_plot_extd(e) {
	var d = parseInt(e);
	if(e == 0) {
		document.getElementById('animation').innerHTML = "<div class='stem_and_leaf'><img src=\"assets/images/stem_and_leaf_images/346_stem-and-leaf plot.png\"/></div>";
	} else if(e == 1) {
		document.getElementById('animation').innerHTML = "<div class='stem_and_leaf'><img src=\"assets/images/stem_and_leaf_images/346_stem-and-leaf plot1.png\"/></div>";
	} else if(e == 2) {
		document.getElementById('animation').innerHTML = "<div class='stem_and_leaf'><img src=\"assets/images/stem_and_leaf_images/346_stem-and-leaf plot2.png\"/></div>";
	} else if(e == 3) {
		document.getElementById('animation').innerHTML = "<div class='stem_and_leaf'><img src=\"assets/images/stem_and_leaf_images/346_stem-and-leaf plot3.png\"/></div>";
	} else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	d = parseInt(e) + 1;

	stem_and_leaf_plot(d);
}
/* stem and leaf ends */

/* straight_angle starts  */
function straight_angle_extd(e) {
		var count = parseInt(e);
		count++;
		if(count <= 3) {
			document.getElementById('animation').innerHTML = "<img class='straight_angle1' src='assets/images/straight_angle_img/347_straight-angle"+count+".png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
			straight_angle(count);
}

function straight_angle(a) {
	var a = parseInt(a);
	if(a == 0) {
		englishTerm = "straight angle";
		spanishTerm = "ángulo recto";
		englishDef = "an angle whose rays form a straight line and whose measure is exactly 180&deg;";
		spanishDef = "un ángulo cuyas semirrectas forman una línea recta y  mide exactamente 180&deg;";
		showTermDefinition();
	}

		//timer_1 = setTimeout("straight_angle_extd(" + a + ")", 1200);
	
}

/* straight_angle ends  */

/* subtract starts  */
function subtract_extd(e) {
		var count = parseInt(e);
		count++;
		if(count <= 5) {
			document.getElementById('animation').innerHTML = "<img class='subtract1' src='assets/images/subtract_img/348_subtract"+count+".png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
			subtract(count);
}

function subtract(a) {
	var a = parseInt(a);
	if(a == 0) {
		englishTerm = "subtract";
		spanishTerm = "restar";
		englishDef = "to find the difference of two numbers";
		spanishDef = "hallar la diferencia entre dos números";
		showTermDefinition();
	}
	//timer_1 = setTimeout("subtract_extd(" + a + ")", 2000);
}

/* subtract ends  */

/* subtraction starts  */
function subtraction_extd(e) {
		var count = parseInt(e);
		count++;
		if(count <= 5) {
			document.getElementById('animation').innerHTML = "<img class='subtraction1' src='assets/images/subtraction_img/349_subtraction"+count+".png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
			subtraction(count);
}

function subtraction(a) {
	var a = parseInt(a);
	if(a == 0) {
		englishTerm = "subtraction";
		spanishTerm = "resta";
		englishDef = "the process of finding how many are left when a number is taken away from another number; the process of finding the difference when two groups are compared";
		spanishDef = "el proceso de hallar cuántos quedan cuando un número se le quita a otro número; el proceso de hallar la diferencia cuando dos grupos se comparan";
		showTermDefinition();
	}
	//timer_1 = setTimeout("subtraction_extd(" + a + ")", 2000);
}

/* subtraction ends  */

/*subtrahend*/
function subtrahend(a) {
	if(a == 0) {
		englishTerm = "subtrahend";
		englishDef = "the number in a subtraction problem that is being subtracted";
		spanishTerm = "sustraendo";
		spanishDef = "el número que se resta en un problema de resta";
		showTermDefinition();
	}
	if(a == 0) {
		//timer_1 = setTimeout("subtrahend_extd(" + a + ")", 1000);

	} else {
		//timer_1 = setTimeout("subtrahend_extd(" + a + ")", 2667);
	}
}
function subtrahend_extd(e) {
		var count = parseInt(e);
		count++;
		if(count <= 2) {
			document.getElementById('animation').innerHTML = "<img class='subtrahend1' src='assets/images/subtrahend_images/350_subtrahend"+count+".png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
			subtrahend(count);
}
/* ENDING ---- subtrahend*/


/* sum starts */
function sum(a) {

	if(a == 0) {
		englishTerm = "sum";
		englishDef = "the total or whole amount; the answer to an addition problem";
		spanishTerm = "suma";
		spanishDef = "el total o la cantidad total; el resultado en un problema de suma";
		showTermDefinition();
	}
	if(a == 0) {
		//timer_1 = setTimeout("sum_extd(" + a + ")", 1000);

	} else {
		//timer_1 = setTimeout("sum_extd(" + a + ")", 2000);
	}
}
function sum_extd(e) {
		var count = parseInt(e);
		count++;
		if(count <= 2) {
			document.getElementById('animation').innerHTML = "<img class='sum1' src='assets/images/sum_images/351_sum"+count+".png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
			sum(count);
}
/* ENDING ---- sum*/

/*supplementary angles*/
function supplementary_angles(a) {
	if(a == 0) {
		englishTerm = "supplementary angles";
		spanishTerm = "ángulos suplementarios";
		englishDef = "two angles whose measures have a sum of 180°";
		spanishDef = "dos ángulos cuyas medidas suman 180°";
		showTermDefinition();
	}
	//timer_1 = setTimeout("supplementary_angles_extd(" + a + ")", 1500);

}

function supplementary_angles_extd(e) {
	var count = parseInt(e);
	count++;
	if(count <= 4) {
		document.getElementById('animation').innerHTML = "<img class='supplementary_ang1' src='assets/images/supplementary_angle_img/352_supplementaryangles"+count+".png'/>";
	} else {
		document.getElementById('animation').innerHTML = "";
		count = 0;
	}
		supplementary_angles(count);
}


/*supplementary angles*/


/* surface area starts*/
function surface_area(a) {
	if(a == 0) {
		englishTerm = "surface area";
		spanishTerm = "área de superficie";
		englishDef = "the sum of the areas of all the faces of a solid figure";
		spanishDef = "la suma de las áreas de todas las caras de una figura sólida";
		showTermDefinition();
	}
	//timer_1 = setTimeout("surface_area_extd(" + a + ")", 1000);
}
function surface_area_extd(e) {
		var count = parseInt(e);
		count++;
		if(count <= 13) {
			document.getElementById('animation').innerHTML = "<img class='surface_area1' src='assets/images/surface_area_images/353_surface-area"+count+".png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
			surface_area(count);
}
/* surface area ends */

/* surface area of a rectangular prism starts*/
function surface_area_of_a_rectangular_prism(a) {
	if(a == 0) {
		englishTerm = "surface area of a rectangular prism";
		spanishTerm = "área de superficie de un prisma rectangular";
		englishDef = "the sum of the areas of both bases and all four faces of the prism";
		spanishDef = "la suma de las áreas de las dos bases y todas las caras del prisma";
		showTermDefinition();
	}
	//timer_1 = setTimeout("surface_area_of_a_rectangular_prism_extd(" + a + ")", 1250);
}
function surface_area_of_a_rectangular_prism_extd(e) {
		var count = parseInt(e);
		count++;
		if(count <= 7) {
			document.getElementById('animation').innerHTML = "<img class='surface_area_of_a_rectangular_prism1' src='assets/images/surface_area_of_rectangle_img/354_surfacearea_rectprism"+count+".png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
			surface_area_of_a_rectangular_prism(count);
}

/* surface area of a rectangular prism ends */


/* system of linear equations starts*/
function system_of_linear_equations(a) {
	if(a == 0) {
		englishTerm = "system of linear equations";
		spanishTerm = "sistema de ecuaciones lineales";
		englishDef = "two or more linear equations considered together";
		spanishDef = "dos o más ecuaciones lineales considerados en conjunto";
		showTermDefinition();
	}
	//timer_1 = setTimeout("system_of_linear_equations_extd(" + a + ")", 1600);
}
function system_of_linear_equations_extd(e) {
		var count = parseInt(e);
		count++;
		if(count <= 4) {
			document.getElementById('animation').innerHTML = "<img class='system_eq1' src='assets/images/system_of_eqation_img/355_system"+count+".png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
			system_of_linear_equations(count);
}
/* system of linear equations ends */


/* table starts  */
function table_extd(e) {
		var count = parseInt(e);
		count++;
		if(count <= 6) {
			document.getElementById('animation').innerHTML = "<img class='table1' src='assets/images/table_images/356_table"+count+".png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
			table(count);
}

function table(a) {
	var a = parseInt(a);
	if(a == 0) {
		englishTerm = "table";
		spanishTerm = "tabla";
		englishDef = "information arranged in rows and columns";
		spanishDef = "información se disponen en filas y columnas";
		showTermDefinition();
	}
	/*if(a != 8)
		//timer_1 = setTimeout("table_extd(" + a + ")", 888);
	else
		//timer_1 = setTimeout("table_extd(" + a + ")", 1300);*/
}

/* table ends  */

/*table of values begins*/
function table_of_values(a) {
	if(a == 0) {
		englishTerm = "table of values";
		spanishTerm = "tabla de valores";
		englishDef = "a table of coordinate points representing a relationship";
		spanishDef = "una tabla de puntos de coordenadas que representa una relación";
		showTermDefinition();
	}
	//timer_1 = setTimeout("table_of_values_extd(" + a + ")", 1333);

}
function table_of_values_extd(e) {
		var count = parseInt(e);
		count++;
		if(count <= 5) {
			document.getElementById('animation').innerHTML = "<img class='table_of_values1' src='assets/images/table_of_values_img/357_table-of-values"+count+".png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
			table_of_values(count);
}
/*table of values ends*/

/* take_away starts  */
function take_away_extd(e) {
		var count = parseInt(e);
		count++;
		if(count <= 5) {
			document.getElementById('animation').innerHTML = "<img class='take_away1' src='assets/images/take_away_img/348_subtract"+count+".png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
			take_away(count);
}

function take_away(a) {
	var a = parseInt(a);
	if(a == 0) {
		englishTerm = "take away";
		spanishTerm = "restar";
		englishDef = "another way to subtract";
		spanishDef = "otra forma de restar";
		showTermDefinition();
	}
	//timer_1 = setTimeout("take_away_extd(" + a + ")", 2000);
}

/* take_away ends  */

/* tally_mark starts  */
function tally_mark_extd(e) {
	var tally_mark_txt1;
	var div_id = document.getElementById("animation");
	var count = parseInt(e) + 1;
	if(count <= 4) {
		div_id.innerHTML = "<img src='assets/images/tally_mark_img/360_tally-table" + count + ".png' id='tally_table'/>";
	}
	if(count == 5) {
		count = 0;
		div_id.innerHTML = "";
	}
	
	tally_mark(count);
}

function tally_mark(a) {
	var a = parseInt(a);
	if(a == 0) {
		englishTerm = "tally mark";
		spanishTerm = "conteo marca";
		englishDef = "a mark used to count";
		spanishDef = "una marca utilizada para contar";
		showTermDefinition();
	}
	//timer_1 = setTimeout("tally_mark_extd(" + a + ")", 2000);
}

/* tally_mark ends  */

/*tally_table Begins*/
function tally_table(a) {

	if(a == 0) {
		englishTerm = "tally table";
		spanishTerm = "tabla de conteo";
		englishDef = "a table with tally marks";
		spanishDef = "una tabla con marcas de conteo";
		showTermDefinition();
	}
	//timer_1 = setTimeout("tally_table_extd(" + a + ")", 1000)
}

function tally_table_extd(e) {
	var count = parseInt(e);
	var div_id = document.getElementById("animation");
	count++;
	if(count <= 4) {
		div_id.innerHTML = "<img src='assets/images/tally_table_images/360_tally-table" + count + ".png' id='tally_table'/>";
	}
	if(count == 5) {
		count = 0;
		div_id.innerHTML = "";
	}

	tally_table(count);
}

/*tally_table Ends*/

/*temperature*/

function temperature(a) {
	if(a == 0) {
		englishTerm = "temperature";
		englishDef = "the measure of how hot or cold something is";
		spanishTerm = "temperature";
		spanishDef = "la medida del grado de calor de un objeto";
		showTermDefinition();
	}
	if(a == 0) {
		//timer_1 = setTimeout("temperature_extd(" + a + ")", 1000);

	} else {
		//timer_1 = setTimeout("temperature_extd(" + a + ")", 2667);
	}
}
function temperature_extd(e) {
		var count = parseInt(e);
		count++;
		if(count <= 2) {
			document.getElementById('animation').innerHTML = "<img class='temperature1' src='assets/images/temperature_images/361_temperature"+count+".png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
			temperature(count);
}

/* ENDING ---- temperature*/


/*tens_frame Begins*/
function tens_frame(a) {

	if(a == 0) {
		englishTerm = "tens frame";
		spanishTerm = "conjuntos de diez";
		englishDef = "a frame that shows 0 to 10 objects";
		spanishDef = "un conjunto que muestra 0 a 10 objetos";
		showTermDefinition();
	}
	//timer_1 = setTimeout("tens_frame_extd(" + a + ")", 1000)
}

function tens_frame_extd(e) {
	var count = parseInt(e);
	var div_id = document.getElementById("animation");
	count++;
	if(count <= 8) {
		div_id.innerHTML = "<img src='assets/images/tens_frame_images/tens_frame_" + count + ".png' id='tens_empty_frame'/>";
	}
	if(count == 9) {
		count = 0;
		div_id.innerHTML = "";
	}

	tens_frame(count);
}

/*tens frame Ends*/

/* tens rod starts*/
function tens_rod(a) {
	if(a == 0) {
		englishTerm = "tens rod";
		spanishTerm = "barra de decenas";
		englishDef = "a rod made up of 10 ones blocks used to represent 10";
		spanishDef = "una barra hecha de 10 bloques de unidades usada para representar 10";
		replayAnimation = 1;
		showTermDefinition();
	}
	//timer_1 = setTimeout("tens_rod_extd(" + a + ")", 2000);
}

function tens_rod_extd(e) {
	var cont = parseInt(e);
	if(cont == 0)
	{
		document.getElementById('animation').innerHTML = '<div id="tens_rod"><img src="assets/images/ones_block_images/pieces1.png" id="tens_rod_hundreds" class="tens_rod_fade1" />&nbsp;&nbsp;<img src="assets/images/ones_block_images/pieces2.png" id="tens_rod_tens" />&nbsp;&nbsp;<img src="assets/images/ones_block_images/pieces3.png" id="tens_once_block" class="tens_rod_fade1"/></div>';
	}
	else if(cont == 1)
		$('.tens_rod_fade1').fadeOut('slow');
	cont = parseInt(e) + 1;
	tens_rod(cont);
}

/* tens rod ends */

/*tenth*/

function tenth(a) {
	if(a == 0) {
		englishTerm = "tenth";
		spanishTerm = "décimo";
		englishDef = "one of 10 equal parts of a whole";
		spanishDef = "una de las 10 partes iguales de un entero";
		showTermDefinition();
	}
	//timer_1 = setTimeout("tenth_extd(" + a + ")", 2000);

}

function tenth_extd(e) {
	var d = parseInt(e);
	if(e < 2) {
		document.getElementById('animation').innerHTML = "<div class='tenthh'><img src=\"assets/images/tenth_image/364_tenth"+parseInt(e)+".png\"/></div>";

	} else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	d = parseInt(e) + 1;

	tenth(d);
}

/*end tenth*/

/*term Begins*/
function term(a) {

	if(a == 0) {
		englishTerm = "term";
		spanishTerm = "término";
		englishDef = "a number, a variable, or a product of one or more numbers and variables in an expression";
		spanishDef = "un número, una variable, o un producto de uno o más números y variables en una expresión";
		showTermDefinition();
	}
	//timer_1 = setTimeout("term_extd(" + a + ")", 1600)
}

function term_extd(e) {
		var count = parseInt(e);
		count++;
		if(count <= 4) {
			document.getElementById('animation').innerHTML = "<img class='term1' src='assets/images/term_images/365_term"+count+".png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
			term(count);
}

/*term Ends*/


/* term of a sequesce*/
function term_of_a_sequence(a) {

	if(a == 0) {
		englishTerm = "term of a sequence";
		englishDef = "one number or value in a sequence";
		spanishTerm = "término de una sequencia";
		spanishDef = "un número o valor en una secuencia";
		showTermDefinition();
	}
	//timer_1 = setTimeout("term_of_a_sequence_extd(" + a + ")", 1000);
}

function term_of_a_sequence_extd(e) {
		var count = parseInt(e);
		count++;
		if(count <= 9) {
			document.getElementById('animation').innerHTML = "<img class='term_of_a_sequence1' src='assets/images/term_of_sequence_img/167_input-output-table"+count+".png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
			term_of_a_sequence(count);
}
/* ENDING ---- term of a sequesce*/


/*thermometer*/

function thermometer(a) {
	if(a == 0) {
		englishTerm = "thermometer";
		englishDef = "a tool used to measure temperature";
		spanishTerm = "termómetro";
		spanishDef = "una herramienta utilizada para medir la temperatura";
		showTermDefinition();
	}
	if(a == 0) {
		//timer_1 = setTimeout("thermometer_extd(" + a + ")", 1000);

	} else {
		//timer_1 = setTimeout("thermometer_extd(" + a + ")", 2667);
	}
}
function thermometer_extd(e) {
		var count = parseInt(e);
		count++;
		if(count <= 2) {
			document.getElementById('animation').innerHTML = "<img class='thermometer1' src='assets/images/thermometer_images/361_temperature"+count+".png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
			thermometer(count);
}
/* ENDING ---- thermometer*/

/* third starts  */

function third_extd(e) {
	var count = parseInt(e);
	count++;
	if(count <= 3) {
		document.getElementById('animation').innerHTML = "<img class='third_1' src='assets/images/third_images/367_third"+count+".png'/>";
	} else {
		document.getElementById('animation').innerHTML = "";
		count = 0;
	}
		third(count);
}

function third(a) {
	var a = parseInt(a);
	if(a == 0) {
		englishTerm = "third (thirds)";
		spanishTerm = "tercio (tercios)";
		englishDef = "1 of 3 equal parts";
		spanishDef = "1 de 3 partes iguales";
		showTermDefinition();
	}
	//timer_1 = setTimeout("third_extd(" + a + ")", 1000);
}

/* third ends  */

/* thousand periods */
function thousands_period(a) {
	if(a == 0) {
		englishTerm = "thousands period";
		spanishTerm = "periodo del millar";
		englishDef = "the period to the left of the ones period, containing the thousands place, the ten thousands place, and the hundred thousands place";
		spanishDef = "el periodo a la izquierda del periodo de las unidades, que contiene la posición de los millares, la posición de los diez millares y la posición de los cien millares";
		showTermDefinition();
	}
	if(a != 5) {
		//timer_1 = setTimeout("thousands_period_extd(" + a + ")", 1200);
	} else {
		//timer_1 = setTimeout("thousands_period_extd(" + a + ")", 1500);
	}
}

function thousands_period_extd(e) {
	var cnt = parseInt(e);
	var thousands_period_div = document.getElementById('animation');
	cnt++;	
	if(cnt < 6) {
		thousands_period_div.innerHTML = "<div class='thousand_periods'><img src='assets/images/thousandsperiod_img/369_thousands-period"+cnt+".png'/></div>";
	}  else {
		cnt = 0;
		thousands_period_div.innerHTML = "";
	}
	thousands_period(cnt);
}

/* three-dimensional figure starts  */
function three_dimensional_figure_extd(e) {
		var count = parseInt(e);
		count++;
		if(count <= 8) {
			document.getElementById('animation').innerHTML = "<img class='three_dimensional_figure1' src='assets/images/three_dimensional_figure_images/333_solid"+count+".png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
			three_dimensional_figure(count);
}

function three_dimensional_figure(a) {
	var a = parseInt(a);
	if(a == 0) {
		englishTerm = "three-dimensional figure";
		spanishTerm = "figura tridimensional";
		englishDef = "a figure that takes up space";
		spanishDef = "una figura que ocupa espacio";
		showTermDefinition();
	}
	//timer_1 = setTimeout("three_dimensional_figure_extd(" + a + ")", 889);
}

/* three-dimensional figure ends  */

/* transformation */
function transformation(a) {
	if(a == 0) {
		englishTerm = "transformation";
		spanishTerm = "transformación";
		englishDef = "the movement of a figure by a slide (translation), flip (reflection), or turn (rotation)";
		spanishDef = "el movimiento de una figura al deslizarse (translación), voltearse (reflexión) o girar (rotación)";
		showTermDefinition();
	}
		//timer_1 = setTimeout("transformation_extd(" + a + ")", 1200);
}

function transformation_extd(e) {
	var cnt = parseInt(e);
	var transformation_div = document.getElementById('animation');
	cnt++;
	if(cnt == 1) {
		transformation_div.innerHTML = "<img src='assets/images/transformation_img/1.png' />";
	} else if(cnt == 2) {
		transformation_div.innerHTML = "<img src='assets/images/transformation_img/1_1.png' /><img id='img_slide' src='assets/images/transformation_img/2.png' />";
		$('#img_slide').css('display', 'block')
		$("#img_slide").animate({
			left : '215px'
		},1000);
		
	} 	else if(cnt == 4) {
		transformation_div.innerHTML = "<img id='img_slide1' src='assets/images/transformation_img/3.png' />";
	} else if(cnt == 6) {
		transformation_div.innerHTML = "<img id='img_slide1' src='assets/images/transformation_img/3_3.png' /><img id='img_slide_to' src='assets/images/transformation_img/3_2.png' /><img id='img_slide1_rgt' src='assets/images/transformation_img/4.png' />";
		$("#img_slide_to").animate({
			width : '0',
			left : '185px'
		}, 950, function() {
			$("#img_slide1_rgt").animate({
				left : '200px',
				width : '30'
			}, 950);
		});
	
	} else if(cnt == 9) {
		transformation_div.innerHTML = "<img src='assets/images/transformation_img/5.png' />";
	} else if(cnt == 10) {
		transformation_div.innerHTML = "<img src='assets/images/transformation_img/6.png' /></div>";
	} else if(cnt == 12) {
		cnt = 0;
		transformation_div.innerHTML = '';
	}
	transformation(cnt);
}

/* translation */
function translation(a) {
	if(a == 0) {
		englishTerm = "translation";
		spanishTerm = "translación";
		englishDef = "moving a geometric figure by sliding";
		spanishDef = "mover una figura geométrica deslizándola";
		showTermDefinition();
	}
	//timer_1 = setTimeout("translation_extd(" + a + ")", 1000);
}

function translation_extd(e) {
	var cnt = parseInt(e);
	var translation_div = document.getElementById('animation');
	cnt++;
	if(cnt == 1) {
		translation_div.innerHTML = "<img src='assets/images/translation_img/1.png' />";
	} else if(cnt == 2) {
		translation_div.innerHTML = "<img src='assets/images/translation_img/1_1.png' /><img id='img_slide1_2' src='assets/images/translation_img/2.png' />";
		//$('#translation_img_id').css('display', 'block');
		//$('#transalation_arr').css('display', 'block');
		$('#img_slide1_2').css('display', 'block');
		$("#img_slide1_2").animate({
			left:'215px'
		},800)
	
	} else if(cnt == 5) {
		translation_div.innerHTML = "<img src='assets/images/translation_img/3_1.png' />";
	} else if(cnt == 6) {
		translation_div.innerHTML = "<img src='assets/images/translation_img/3_2.png' /><img id='img_slide2_2' src='assets/images/translation_img/translation.png' />";
		$('#img_slide2_2').css('display', 'block');
		$('#img_slide2_2').animate({
			left : '185px'
		},800)
	} else if(cnt == 8) {
		cnt = 0;
		translation_div.innerHTML = '';
	}
	translation(cnt);
}


/* transversal starts  */

function transversal_extd(e) {
		var count = parseInt(e);
		count++;
		if(count <= 3) {
			document.getElementById('animation').innerHTML = "<img class='transversal1' src='assets/images/transversal_images/374_transversal"+count+".png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
			transversal(count);
}
function transversal(a) {
	var a = parseInt(a);
	if(a == 0) {
		englishTerm = "transversal";
		spanishTerm = "transversal";
		englishDef = "a line that intersects two or more lines at different points";
		spanishDef = "una recta que cruza dos o más rectas en puntos diferentes";
		showTermDefinition();
	}
	//timer_1 = setTimeout("transversal_extd(" + a + ")", 1000);
}

/* transversal ends  */

/* trapezoid starts  */

function trapezoid_extd(e) {
		var count = parseInt(e);
		count++;
		if(count <= 3) {
			document.getElementById('animation').innerHTML = "<img class='trapezoid1' src='assets/images/trapezoid_images/375_trapezoid"+count+".png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
			trapezoid(count);
}
function trapezoid(a) {
	var a = parseInt(a);
	if(a == 0) {
		englishTerm = "trapezoid";
		spanishTerm = "trapecio";
		englishDef = "a quadrilateral with exactly one pair of parallel sides";
		spanishDef = "un cuadrilátero con exactamente un par de lados paralelos";
		showTermDefinition();
	}
	//timer_1 = setTimeout("trapezoid_extd(" + a + ")", 2000);
}

/* trapezoid ends  */

/* triangle starts*/
function triangle(a) {
	if(a == 0) {
		englishTerm = "triangle";
		spanishTerm = "triángulo";
		englishDef = "a polygon with three sides and three angles";
		spanishDef = "un polígono con tres lados y tres ángulos";
		showTermDefinition();
	}
	//timer_1 = setTimeout("triangle_extd(" + a + ")", 1250);
}



function triangle_extd(e) {
		var count = parseInt(e);
		count++;
		if(count <= 8) {
			document.getElementById('animation').innerHTML = "<img class='triangle1' src='assets/images/triangle_images/376_triangle"+count+".png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
			triangle(count);
}

/* triangle ends */

/* turn ***************************/
function turn(a) {
	if(a == 0) {
		englishTerm = "turn";
		spanishTerm = "girar";
		englishDef = "to turn a figure around a point";
		spanishDef = "voltear una figura alrededor de un punto";
		showTermDefinition();
	}
	//timer_1 = setTimeout("turn_extd(" + a + ")", 1600);
}

function turn_extd(e) {
	var cnt = parseInt(e);
	var turn_div = document.getElementById('animation');
	if(cnt == 0) {
		turn_div.innerHTML = "<img   id='turn_img0'  class='turn_1' src='assets/images/turn_img/377_turn" + cnt + ".png' />";
	} else if(cnt == 1) {
		turn_div.innerHTML = "<img    id='turn_img1'  class='turn_1' src='assets/images/turn_img/377_turn" + cnt + ".png' />";
	} else if(cnt == 2) {
		turn_div.innerHTML = "<img    id='turn_img2'  class='turn_1' src='assets/images/turn_img/377_turn" + cnt + ".png' />";
	} else if(cnt == 3) {
		turn_div.innerHTML = "<img   id='turn_img3'  class='turn_1' src='assets/images/turn_img/377_turn" + cnt + ".png' />";
	} else if(cnt == 4) {
		turn_div.innerHTML = "<img   id='turn_img4'  class='turn_1' src='assets/images/turn_img/377_turn" + cnt + ".png' />";
	} else if(cnt == 5) {
		turn_div.innerHTML = "<img   id='turn_img5'  class='turn_1' src='assets/images/turn_img/377_turn" + cnt + ".png' />";
	} else if(cnt == 6) {
		turn_div.innerHTML = "<img  id='turn_img5' class='turn_1' src='assets/images/turn_img/377_turn" + cnt + ".png'/>";
	} else {
		cnt = -1;
		turn_div.innerHTML = "";
	}
	cnt++;
	turn(cnt);
}


/* unit rate starts  */

function unit_rate_extd(e) {
		var count = parseInt(e);
		count++;
		if(count <= 4) {
			document.getElementById('animation').innerHTML = "<img class='unit_rate1' src='assets/images/unit_rate_images/378_unit-rate"+count+".png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
			unit_rate(count);
}

function unit_rate(a) {
	var a = parseInt(a);
	if(a == 0) {
		englishTerm = "unit rate";
		spanishTerm = "tasa de unidad";
		englishDef = "a rate with a denominator of 1";
		spanishDef = "una tasa con un denominador de 1";
		showTermDefinition();
	}
	//timer_1 = setTimeout("unit_rate_extd(" + a + ")", 1333);
}

/* unit rate ends  */

/*value begins*/

function value(a) {
	if(a == 0) {
		englishTerm = "value";
		spanishTerm = "valor";
		englishDef = "an amount given to a digit based on the digit and the digit’s place value";
		spanishDef = "una cantidad dada a un dígito basada en el dígito y en el valor posicional del dígito";
		showTermDefinition();
	}
	//timer_1 = setTimeout("value_extd(" + a + ")", 1600);
}

function value_extd(e) {
		var count = parseInt(e);
		count++;
		if(count <= 4) {
			document.getElementById('animation').innerHTML = "<img class='value1' src='assets/images/value_images/380_value"+count+".png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
			value(count);
}

/*value ends*/

/* variable starts  */

function variable_extd(e) {
		var count = parseInt(e);
		count++;
		if(count <= 6) {
			document.getElementById('animation').innerHTML = "<img class='variable1' src='assets/images/variable_images/381_variable"+count+".png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
			variable(count);
}
function variable(a) {
	var a = parseInt(a);
	if(a == 0) {
		englishTerm = "variable";
		spanishTerm = "variable";
		englishDef = "a letter or symbol that represents a number";
		spanishDef = "una letra o símbolo que representa un número";
		showTermDefinition();
	}
	//timer_1 = setTimeout("variable_extd(" + a + ")", 1666);
}

/* variable ends  */

/* Venn diagram starts  */

function venn_diagram_extd(e) {
		var count = parseInt(e);
		count++;
		if(count <= 5) {
			document.getElementById('animation').innerHTML = "<img class='venn_diagram1' src='assets/images/venn_diagram_images/382_venn-diagram"+count+".png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
			venn_diagram(count);
}

function venn_diagram(a) {
	var a = parseInt(a);
	if(a == 0) {
		englishTerm = "Venn diagram";
		spanishTerm = "diagrama de Venn";
		englishDef = "a diagram that uses circles to show relationships between sets";
		spanishDef = "un diagrama con círculos que muestran las relaciones entre conjuntos";
		showTermDefinition();
	}
	//timer_1 = setTimeout("venn_diagram_extd(" + a + ")", 1667);
}

/* Venn diagram ends  */

/* vertex starts  */

function vertex_extd(e) {
		var count = parseInt(e);
		count++;
		if(count <= 6) {
			document.getElementById('animation').innerHTML = "<img class='vertex1' src='assets/images/vertex_images/383_vertex"+count+".png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
			vertex(count);
}

function vertex(a) {
	var a = parseInt(a);
	if(a == 0) {
		englishTerm = "vertex";
		spanishTerm = "vértice";
		englishDef = "a point where two sides of an angle or shape meet, or where three edges of a solid figure meet";
		spanishDef = "un punto donde se encuentran dos lados de un ángulo o de una forma, o donde se encuentran tres aristas de una figura sólida";
		showTermDefinition();
	}
	//timer_1 = setTimeout("vertex_extd(" + a + ")", 1429);
}

/* vertex ends  */

/* vertex of a polygon starts  */

function vertex_of_a_polygon_extd(e) {
		var count = parseInt(e);
		count++;
		if(count <= 6) {
			document.getElementById('animation').innerHTML = "<img class='vertex_polygon1' src='assets/images/vertex_polygon_images/384_vertext_of_polygon"+count+".png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
			vertex_of_a_polygon(count);
}
function vertex_of_a_polygon(a) {
	var a = parseInt(a);
	if(a == 0) {
		englishTerm = "vertex of a polygon";
		spanishTerm = "vértice de un polígono";
		englishDef = "a point common to two sides of a polygon";
		spanishDef = "un punto común a dos lados de un polígono";
		showTermDefinition();
	}
	//timer_1 = setTimeout("vertex_of_a_polygon_extd(" + a + ")", 1666);
}

/* vertex of a polygon ends  */


/* vertical angles starts  */

function vertical_angles_extd(e) {
		var count = parseInt(e);
		count++;
		if(count <= 3) {
			document.getElementById('animation').innerHTML = "<img class='vertical_angle1' src='assets/images/vertical_angles_images/385_vertical-angles"+count+".png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
			vertical_angles(count);
}

function vertical_angles(a) {
	var a = parseInt(a);
	if(a == 0) {
		englishTerm = "vertical angles";
		spanishTerm = "ángulos verticales";
		englishDef = "the opposite congruent angles formed by two intersecting lines";
		spanishDef = "los lados opuestos congruentes formados por dos rectas secantes";
		showTermDefinition();
	}
	//timer_1 = setTimeout("vertical_angles_extd(" + a + ")", 2500);
}

/* vertical angles ends  */

/* volume starts*/
function volume(a) {
	if(a == 0) {
		englishTerm = "volume";
		spanishTerm = "volumen";
		englishDef = "the amount of space a three-dimensional figure occupies";
		spanishDef = "la cantidad de espacio que ocupa una figura tridimensional";
		showTermDefinition();
	}

	/*if(a == 2)
		//timer_1 = setTimeout("volume_extd(" + a + ")", 4000);
	else
		//timer_1 = setTimeout("volume_extd(" + a + ")", 1500);*/
}

function volume_extd(e) {
	var cont = parseInt(e);

	if(cont == 0)
		document.getElementById('animation').innerHTML = '<div class="volume_img"><div class="volume_fill"></div></div>';
	else if(e == 1) {
		if(selLang == "english") {
			document.getElementById('animation').innerHTML = '<div class="volume_img1"><div class="volume_fill"></div></div>';
		} else if(selLang == "spanish") {
			document.getElementById('animation').innerHTML = '<div class="volume_img1"><div class="volume_fill"></div></div>';
		}

		$('.volume_fill').animate({
			top : 10,
			height : 50
		}, 2000, function() {
			document.getElementById('animation').innerHTML = '<div class="volume_img2"><div class="volume_fill"></div></div>';
		});
	} else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	cont = parseInt(e) + 1;

	volume(cont);
}

/* volume ends */


/* week starts  */
function week_extd(e) {
		var count = parseInt(e);
		count++;
		if(count <= 4) {
			document.getElementById('animation').innerHTML = "<img class='week1' src='assets/images/week_images/387_week"+count+".png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
			week(count);
}
function week(a) {
	var a = parseInt(a);
	if(a == 0) {
		englishTerm = "week";
		spanishTerm = "semana";
		englishDef = "a unit for measuring time";
		spanishDef = "una unidad para medir el tiempo";
		showTermDefinition();
	}
	//timer_1 = setTimeout("week_extd(" + a + ")", 2000);
}

/* week ends  */


/* weight begins*/
function weight(a) {
	if(a == 0) {
		englishTerm = "weight";
		spanishTerm = "peso";
		englishDef = "the measure of how heavy an object is";
		spanishDef = "la medida de cuán pesado es un objeto";
		showTermDefinition();
	}
	//timer_1 = setTimeout("weight_extd(" + a + ")", 2000);
}

function weight_extd(e) {
		var count = parseInt(e);
		count++;
		if(count <= 2) {
			document.getElementById('animation').innerHTML = "<img class='whole1' src='assets/images/weight_images/388_weight"+count+".png'/>";
		} else if(count==3){
			document.getElementById('animation').innerHTML += "<img class='whole2' src='assets/images/weight_images/142_gram.png'/>";
		}else if(count==4){
			document.getElementById('animation').innerHTML += "<img class='whole3' src='assets/images/weight_images/142_gram2.png'/>";
		}else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
			weight(count);
}


/* weight ends */

/* whole starts  */

function whole_extd(e) {
		var count = parseInt(e);
		count++;
		if(count <= 5) {
			document.getElementById('animation').innerHTML = "<img class='whole1' src='assets/images/whole_images/389_whole"+count+".png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
			whole(count);
}

function whole(a) {
	var a = parseInt(a);
	if(a == 0) {
		englishTerm = "whole";
		spanishTerm = "entero";
		englishDef = "the sum of two or more parts";
		spanishDef = "la suma de dos o más partes";
		showTermDefinition();
	}
	//timer_1 = setTimeout("whole_extd(" + a + ")", 1429);
}

/* whole ends  */

/* x-axis */
function x_axis(a) {

	if(a == 0) {
		englishTerm = "<i>x</i>-axis";
		englishDef = "the horizontal number line of a coordinate graph";
		spanishTerm = "eje <i>x</i>";
		spanishDef = "la recta numérica horizontal de una gráfica de coordenadas";
		showTermDefinition();
	}
	if(a == 0) {
		//timer_1 = setTimeout("x_axis_extd(" + a + ")", 1000);

	} else {
		//timer_1 = setTimeout("x_axis_extd(" + a + ")", 2000);
	}
}

function x_axis_extd(e) {
		var count = parseInt(e);
		count++;
		if(count <= 2) {
			document.getElementById('animation').innerHTML = "<img class='x_axis1' src='assets/images/x_axis_images/390_x-axis"+count+".png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
			x_axis(count);
}


/* ENDING ---- x-axis*/


/* x-intercept */
function x_intercept(a) {

	if(a == 0) {
		englishTerm = "<i>x</i>-intercept";
		englishDef = "the point where a graph crosses the <i>x</i>-axis";
		spanishTerm = "intersección en <i>x</i>";
		spanishDef = "el punto donde una gráfica cruza el eje <i>x</i>";
		showTermDefinition();
	}
	if(a == 0) {
		//timer_1 = setTimeout("x_intercept_extd(" + a + ")", 1000);

	} else {
		//timer_1 = setTimeout("x_intercept_extd(" + a + ")", 1500);
	}
}

function x_intercept_extd(e) {
		var count = parseInt(e);
		count++;
		if(count <= 2) {
			document.getElementById('animation').innerHTML = "<img class='x_intercept1' src='assets/images/x_intercept_images/391_intercepts"+count+".png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
			x_intercept(count);
}
/* ENDING ---- x-intercept*/


/*y-axis*/
function y_axis(a) {

	if(a == 0) {
		englishTerm = "<i>y</i>-axis";
		englishDef = "the vertical number line of a coordinate graph";
		spanishTerm = "eje <i>y</i>";
		spanishDef = "la recta numérica vertical de una gráfica de coordenadas";
		showTermDefinition();
	}
	if(a == 0) {
		//timer_1 = setTimeout("y_axis_extd(" + a + ")", 1000);

	} else {
		//timer_1 = setTimeout("y_axis_extd(" + a + ")", 2000);
	}
}

function y_axis_extd(e) {
		var count = parseInt(e);
		count++;
		if(count <= 2) {
			document.getElementById('animation').innerHTML = "<img class='y_axis1' src='assets/images/y_axis_images/393_y-axis"+count+".png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
			y_axis(count);
}

/* ENDING ---- y-axis*/

/*y-intercept*/
function y_intercept(a) {
	if(a == 0) {
		englishTerm = "<i>y</i>-intercept";
		englishDef = "the point where a graph crosses the <i>y</i>-axis";
		spanishTerm = "intersección en <i>y</i>";
		spanishDef = "el punto donde una gráfica cruza el eje <i>y</i>";
		showTermDefinition();
	}
	if(a == 0) {
		//timer_1 = setTimeout("y_intercept_extd(" + a + ")", 1000);
	} else {
		//timer_1 = setTimeout("y_intercept_extd(" + a + ")", 1500);
	}
}


function y_intercept_extd(e) {
		var count = parseInt(e);
		count++;
		if(count <= 2) {
			document.getElementById('animation').innerHTML = "<img class='y_intercept1' src='assets/images/y_intercept_images/391_intercepts"+count+".png'/>";
		} else {
			document.getElementById('animation').innerHTML = "";
			count = 0;
		}
			y_intercept(count);
}

/* ENDING ---- y-intercept*/
/*multiple*/
function multiple(a) {
	if(a == 0) {
		englishTerm = "multiple";
		spanishTerm = "múltiplo";
		englishDef = "the product of a given number and any whole number greater than 0";
		spanishDef = "el producto de un número y cualquier número entero mayor que 0";
		showTermDefinition();
	}
	//timer_1 = setTimeout("multiple_extd(" + a + ")", 2000);

}

function multiple_extd(e) {
	var d = parseInt(e);
	if(e == 0) {
		if(selLang == 'english') {
			document.getElementById('animation').innerHTML = "<div class='multiplee label_font_regular'>Multiples of 3: <span class=\"hidd\">3, 6, 9, 12, 15, 18, 21, 24, &#x2026;</span></div>";
		} else if(selLang == 'spanish') {
			document.getElementById('animation').innerHTML = "<div class='multiplee label_font_regular'>Múltiplos de  3: <span class=\"hidd\">3, 6, 9, 12, 15, 18, 21, 24, &#x2026;</span></div>";
		}
	} else if(e == 1) {
		if(selLang == 'english') {
			document.getElementById('animation').innerHTML = "<div class='multiplee label_font_regular'>Multiples of 3: 3, 6, 9, 12, 15, 18, 21, 24, &#x2026;</div>";
		} else if(selLang == 'spanish') {
			document.getElementById('animation').innerHTML = "<div class='multiplee label_font_regular'>Múltiplos de  3: 3, 6, 9, 12, 15, 18, 21, 24, &#x2026;</div>";
		}
	} else if(e == 2) {
		if(selLang == 'english') {
			document.getElementById('animation').innerHTML = "<div class='multiplee label_font_regular'>Multiples of 4: <span class=\"hidd\">4, 8, 12, 16, 20, 24, 28, &#x2026;</span></div>";
		} else if(selLang == 'spanish') {
			document.getElementById('animation').innerHTML = "<div class='multiplee label_font_regular'>Múltiplos de  4: <span class=\"hidd\">4, 8, 12, 16, 20, 24, 28&#x2026;</span></div>";
		}
	} else if(e == 3) {
		if(selLang == 'english') {
			document.getElementById('animation').innerHTML = "<div class='multiplee label_font_regular'>Multiples of 4: 4, 8, 12, 16, 20, 24, 28, &#x2026;</div>";
		} else if(selLang == 'spanish') {
			document.getElementById('animation').innerHTML = "<div class='multiplee label_font_regular'>Múltiplos de  4: 4, 8, 12, 16, 20, 24, 28, &#x2026;</div>";
		}
	} else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	d = parseInt(e) + 1;

	multiple(d);
}


/*end multiple*/


/* elapsed time */
function elapsed_time(a) {
	if(a == 0) {
		englishTerm = "elapsed time";
		spanishTerm = "tiempo transcurrido";
		englishDef = "the amount of time that passes between the beginning and the end of an event";
		spanishDef = "la cantidad de tiempo que pasa entre el comienzo y el final de un evento";
		showTermDefinition();
	}
	if(a != 6) {
		//timer_1 = setTimeout("elapsed_time_extd(" + a + ")", 1000);
	} else {
		//timer_1 = setTimeout("elapsed_time_extd(" + a + ")", 1500);
	}
}

function elapsed_time_extd(e) {
	var cnt = parseInt(e);
	var elapsed_time_div = document.getElementById('animation');
	cnt++;
	if(cnt == 1) {
		elapsed_time_div.innerHTML = "<div class='elapsed_time_class'><img  src='assets/images/elapsed_time_img/012_analog_clock1.png' /></div>"
	} else if(cnt == 2) {
		elapsed_time_div.innerHTML = "<div class='elapsed_time_class'><img  src='assets/images/elapsed_time_img/012_analog_clock2.png' /></div>"
	} else if(cnt == 3) {
		elapsed_time_div.innerHTML = "<div class='elapsed_time_class'><img  src='assets/images/elapsed_time_img/012_analog_clock3.png' /></div>"
	} else if(cnt == 4) {
		elapsed_time_div.innerHTML = "<div class='elapsed_time_class'><img  src='assets/images/elapsed_time_img/012_analog_clock4.png' /></div>"
	} else if(cnt == 5) {
		elapsed_time_div.innerHTML = "<div class='elapsed_time_class'><img  src='assets/images/elapsed_time_img/012_analog_clock5.png' /></div>"
	} else if(cnt == 6) {
		elapsed_time_div.innerHTML = "<div class='elapsed_time_class'><img  src='assets/images/elapsed_time_img/012_analog_clock6.png' /></div>"
	} else {
		cnt = 0;
		elapsed_time_div.innerHTML = '';
	}
	elapsed_time(cnt);
}

/*mixed number*/
function mixed_number(a) {
	if(a == 0) {
		englishTerm = "mixed number";
		spanishTerm = "número mixto";
		englishDef = "a number represented by a whole number and a fraction";
		spanishDef = "un número representado por un número entero y una fracción";
		showTermDefinition();
	}
	//timer_1 = setTimeout("mixed_number_extd(" + a + ")", 1500);
}

function mixed_number_extd(e) {
	var d = parseInt(e);
	if(e < 5) {
		document.getElementById('animation').innerHTML = "<div class='mix_num '><img src=\"assets/images/mixed_number_images/208_mixed-number"+parseInt(e+1)+".png\"/></div>";
	}  else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	d = parseInt(e) + 1;
	mixed_number(d);
}

/*end mixed number*/


/*eighth Begins*/

function eighth(a) {

	if(a == 0) {
		englishTerm = "eighth (eighths)";
		spanishTerm = "octavo (octavos)";
		englishDef = "1 of 8 equal parts";
		spanishDef = "1 de 8 partes iguales";
		showTermDefinition();
	}
	//timer_1 = setTimeout("eighth_extd(" + a + ")", 1000);
}

function eighth_extd(e) {
	var count = parseInt(e);
	count++;
	if(count <= 3) {
		document.getElementById('animation').innerHTML = "<img class='eighth_1' src='assets/images/eighth_images/104_eighth"+count+".png'/>";
	} else {
		document.getElementById('animation').innerHTML = "";
		count = 0;
	}
		eighth(count);
}


/*eighth Ends*/
function experiment_extd(e) {

	var coins, flip;

	if(e >= 0 && e <= 9) {
		experiment_timer("4", e);
	} else if(e == 10) {
		var experiment_txt = "experiment: flip a coin ten times";
		var experiment_txt_spanish="experimento: lanzar una moneda diez veces";
		if(selLang=="english"){
		coins = "<div id='experiment_coins'><img id='experiment_1' src='assets/images/experiment_images/7.png' /><img id='experiment_2' src='assets/images/experiment_images/7.png' /><img id='experiment_3' src='assets/images/experiment_images/7.png' /><img id='experiment_4' src='assets/images/experiment_images/7.png' /><img id='experiment_5' src='assets/images/experiment_images/7.png' /><img id='experiment_6' src='assets/images/experiment_images/7.png' /><img id='experiment_7' src='assets/images/experiment_images/7.png' /><img id='experiment_8' src='assets/images/experiment_images/7.png' /><img id='experiment_9' src='assets/images/experiment_images/7.png' /><img id='experiment_10' src='assets/images/experiment_images/7.png' /><br/>" + experiment_txt + "</div>";
		}
		else{
			coins = "<div id='experiment_coins'><img id='experiment_1' src='assets/images/experiment_images/7.png' /><img id='experiment_2' src='assets/images/experiment_images/7.png' /><img id='experiment_3' src='assets/images/experiment_images/7.png' /><img id='experiment_4' src='assets/images/experiment_images/7.png' /><img id='experiment_5' src='assets/images/experiment_images/7.png' /><img id='experiment_6' src='assets/images/experiment_images/7.png' /><img id='experiment_7' src='assets/images/experiment_images/7.png' /><img id='experiment_8' src='assets/images/experiment_images/7.png' /><img id='experiment_9' src='assets/images/experiment_images/7.png' /><img id='experiment_10' src='assets/images/experiment_images/7.png' /><br/>" + experiment_txt_spanish + "</div>";
		}
		flip = "<span id='experiment_span' style='margin-left:0px'></span>";
		document.getElementById('animation').innerHTML = "<div class='experiment_sub label_font_semibold'>" + flip + coins + "</div>";

	} else if(e==13){
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	cont = parseInt(e) + 1;
	experiment(cont);
}

function experiment(a) {
	var a = parseInt(a);
	if(a == 0) {
		englishTerm = "experiment";
		spanishTerm = "experimento";
		englishDef = "a situation involving chance that leads to results called outcomes";
		spanishDef = "una situación en la que influye el azar y lleva a la obtención de resultados";
		showTermDefinition();
	}
	//timer_1 = setTimeout("experiment_extd(" + a + ")", 545);
}
function experiment_timer(cont, e) {
	//timer_2 = setTimeout(function() { experiment_//timer_extd(cont, e);	}, 75);
}

function experiment_timer_extd(cont, e) {
	cont = parseInt(cont);

	if(cont == -1) {
		clearTimeout(timer_2);
	} else {

		var experiment_img = "experiment_flip_" + cont;

		var coins, flip;
		var experiment_txt = "experiment: flip a coin ten times";
		coins = "<div id='experiment_coins'>";
		for( experiment_imgcnt = 0; experiment_imgcnt < 10; experiment_imgcnt++) {
			if(e == experiment_imgcnt) {
				coins += "<img id='experiment_2' src='assets/images/experiment_images/7.png' style='visibility:hidden' />";
			} else {
				coins += "<img id='experiment_2' src='assets/images/experiment_images/7.png' style='visibility:visible' />";
			}
		}
		coins += "</div>";
		var margin_left = parseInt(e) * 35 + "px;";
		var experiment_imgName = ["6.png", "4.png", "2.png", "1.png"];
		flip = "<span style='position: absolute; width: 35px;margin-left:" + margin_left + "'>";

		for( experiment_cnt = 0; experiment_cnt < 4; experiment_cnt++) {
			var margin_top = parseInt(experiment_cnt) * 25 + "px;";
			if(cont == experiment_cnt) {
				flip += "<span style='visibility:visible;position:absolute;height:15px;margin-top:" + margin_top + "' id='experiment_flip_" + experiment_cnt + "'><img src='assets/images/experiment_images/" + experiment_imgName[experiment_cnt] + "' class='flip'/></span>";
			} else {
				flip += "<span style='visibility:hidden;position:absolute;height:15px;margin-top:" + margin_top + "' id='experiment_flip_" + experiment_cnt + "'><img src='assets/images/experiment_images/" + experiment_imgName[experiment_cnt] + "' class='flip'/></span>";
			}
		}
		flip += "</span>";
		document.getElementById('animation').innerHTML = "<div id='experiment_sub'>" + flip + coins + "</div>";
		cont = parseInt(cont) - 1;
		experiment_timer(cont, e);
	}

}
/* experiment ends  */




function face(a) {
	if(a == 0) {
		englishTerm = "face";
		spanishTerm = "cara";
		englishDef = "a flat surface of a solid figure";
		spanishDef = "superficie plana de una figura sólida";
		showTermDefinition();
	}
	//if(a == 2)
		//timer_1 = setTimeout("face_extd(" + a + ")", 1500);
	//else
		//timer_1 = setTimeout("face_extd(" + a + ")", 800);
}

function face_extd(e) {
	var cont = parseInt(e);

	if(cont == 0)
	{
		document.getElementById('animation').innerHTML = "<div id='face_img'><img src='assets/images/face_images/120_face1.png'></div>";
	}
	else if(e == 1) {
		if(selLang == "english") {
		document.getElementById('animation').innerHTML = "<div id='face_img'><img src='assets/images/face_images/120_face2.png'></div>";
		}
		else
		{
		document.getElementById('animation').innerHTML = "<div id='face_img'><img src='assets/images/face_images/120_facesp2.png'></div>";	
		}
	}
	else if(e == 2) {
		if(selLang == "english") {
		document.getElementById('animation').innerHTML = "<div id='face_img'><img src='assets/images/face_images/120_face3.png'></div>";
	}
	else
	{
		document.getElementById('animation').innerHTML = "<div id='face_img'><img src='assets/images/face_images/120_facesp3.png'></div>";
	}
	}
		 else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	cont = parseInt(e) + 1;
	face(cont);
}

/* face ends */


/*fact family starts  121 */
function fact_family(a) {
	if(a == 0) {
		englishTerm = "fact family";
		spanishTerm = "familia de operaciones";
		englishDef = "a set of related addition and subtraction facts";
		spanishDef = "un conjunto de operaciones de suma y resta relacionadas";
		showTermDefinition();
	}
	if(a <= 3) {
		//timer_1 = setTimeout("fact_family_extd(" + a + ")", 800);
	} else if(a == 4) {
		//timer_1 = setTimeout("fact_family_extd(" + a + ")", 1500);
	}
}

function fact_family_extd(e) {
	var d = parseInt(e);
	if(e == 0) {
		document.getElementById('animation').innerHTML = "<div class='fact_family_class'><img src='assets/images/fact_family_images/121_factfamily1.png'></div>";
	} else if(e == 1) {
		document.getElementById('animation').innerHTML = "<div class='fact_family_class'><img src='assets/images/fact_family_images/121_factfamily2.png'></div>";
	} else if(e == 2) {
		document.getElementById('animation').innerHTML = "<div class='fact_family_class'><img src='assets/images/fact_family_images/121_factfamily3.png'></div>";
	} else if(e == 3) {
		document.getElementById('animation').innerHTML = "<div class='fact_family_class'><img src='assets/images/fact_family_images/121_factfamily4.png'></div>";
	} else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	d = parseInt(e) + 1;
	fact_family(d);
}

/*fact family ends*/
	
	
	/* factor starts*/
function factor(a) {
	if(a == 0) {
		englishTerm = "factor";
		spanishTerm = "factor";
		englishDef = "a number that divides into a whole number with a remainder of 0";
		spanishDef = "un número que se divide entre un número entero con un residuo de 0";
		showTermDefinition();
	}
	if(a <= 5) {
		//timer_1 = setTimeout("factor_extd(" + a + ")", 1000);
	} else if(a == 6) {
		//timer_1 = setTimeout("factor_extd(" + a + ")", 1500);
	}
}

function factor_extd(e) {
	var d = parseInt(e);
	if(e == 0) {
		document.getElementById('animation').innerHTML = "<div id='factor_1'><img src='assets/images/factor_images/123_factor1.png'></div>";
	} else if(e == 1) {
		document.getElementById('animation').innerHTML = "<div id='factor_1'><img src='assets/images/factor_images/123_factor2.png'></div>";
	} else if(e == 2) {
		document.getElementById('animation').innerHTML = "<div id='factor_1'><img src='assets/images/factor_images/123_factor3.png'></div>";
	} else if(e == 3) {
		document.getElementById('animation').innerHTML = "<div id='factor_1'><img src='assets/images/factor_images/123_factor4.png'></div>";
	} else if(e == 4) {
		document.getElementById('animation').innerHTML = "<div id='factor_1'><img src='assets/images/factor_images/123_factor5.png'></div>";
	}  else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	d = parseInt(e) + 1;

	factor(d);
}
/* factor ends */

function factor_of_a_whole_number(a) {
	if(a == 0) {
		englishTerm = "factor of a whole number";
		spanishTerm = "factor de un número entero";
		englishDef = "a number that divides evenly into a given whole number";
		spanishDef = "un número que se divide por igual entre cierto número ";
		showTermDefinition();
	}
	//timer_1 = setTimeout("factor_of_a_whole_number_extd(" + a + ")", 1000);

}


function factor_of_a_whole_number_extd(e) {
	var d = parseInt(e);
	if(e == 0) {
		document.getElementById('animation').innerHTML = "<div id='factor_whole'><img src='assets/images/factor_whole_images/123_factor1.png'></div>";
	} else if(e == 1) {
		document.getElementById('animation').innerHTML = "<div id='factor_whole'><img src='assets/images/factor_whole_images/123_factor2.png'></div>";
	} else if(e == 2) {
		document.getElementById('animation').innerHTML = "<div id='factor_whole'><img src='assets/images/factor_whole_images/123_factor3.png'></div>";
	} else if(e == 3) {
		document.getElementById('animation').innerHTML = "<div id='factor_whole'><img src='assets/images/factor_whole_images/123_factor4.png'></div>";
	} else if(e == 4) {
		document.getElementById('animation').innerHTML = "<div id='factor_whole'><img src='assets/images/factor_whole_images/123_factor5.png'></div>";
	}  else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	d = parseInt(e) + 1;

	factor_of_a_whole_number(d);
}
/*end factor of whole number*/

/*factor pair 125 */
function factor_pair(a) {
	if(a == 0) {
		englishTerm = "factor pair";
		spanishTerm = "par de factores";
		englishDef = "two numbers whose product is a given number";
		spanishDef = "dos números cuyo producto es cierto número";
		showTermDefinition();
	}
	//timer_1 = setTimeout("factor_pair_extd(" + a + ")", 1200);
}

function factor_pair_extd(e) {
	var d = parseInt(e);
	if(e == 0) {
		document.getElementById('animation').innerHTML = "<div class='factor_pair_class'><img src='assets/images/factor_pairs_images/125_factorpair1.png'></div>";
	} else if(e == 1) {
		document.getElementById('animation').innerHTML = "<div class='factor_pair_class'><img src='assets/images/factor_pairs_images/125_factorpair2.png'></div>";
	} else if(e == 2) {
		document.getElementById('animation').innerHTML = "<div class='factor_pair_class'><img src='assets/images/factor_pairs_images/125_factorpair3.png'></div>";
	} else if(e == 3) {
		document.getElementById('animation').innerHTML = "<div class='factor_pair_class'><img src='assets/images/factor_pairs_images/125_factorpair4.png'></div>";
	} else if(e == 4) {
		if(selLang == "english") {
		document.getElementById('animation').innerHTML = "<div class='factor_pair_class'><img src='assets/images/factor_pairs_images/125_factorpair5.png'></div>";
		}else{
	    document.getElementById('animation').innerHTML = "<div class='factor_pair_class'><img src='assets/images/factor_pairs_images/125_factorpairsp5.png'></div>";
		}
	}
		 else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	d = parseInt(e) + 1;
	factor_pair(d);
}

/*factorization  126*/
function factorization(a) {
	if(a == 0) {
		englishTerm = "factorization";
		spanishTerm = "factorización";
		englishDef = "a whole number written as a product of its factors";
		spanishDef = "un número entero escrito como un producto de sus factores";
		showTermDefinition();
	}
	//timer_1 = setTimeout("factorization_extd(" + a + ")", 1200);
}

function factorization_extd(e) {
	var d = parseInt(e);
	if(e == 0) {
		document.getElementById('animation').innerHTML = "<div class='factorization_class'><img src='assets/images/factorization_images/126_factorization1.png'></div>";
	} else if(e == 1) {
		document.getElementById('animation').innerHTML = "<div class='factorization_class'><img src='assets/images/factorization_images/126_factorization2.png'></div>";
	} else if(e == 2) {
		document.getElementById('animation').innerHTML = "<div class='factorization_class'><img src='assets/images/factorization_images/126_factorization3.png'></div>";
	} else if(e == 3) {
		document.getElementById('animation').innerHTML = "<div class='factorization_class'><img src='assets/images/factorization_images/126_factorization4.png'></div>";
	} else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	d = parseInt(e) + 1;
	factorization(d);
}

/*end factorization*/



/* factors begins */

function factors(a) {
	if(a == 0) {
		englishTerm = "factors";
		spanishTerm = "factores";
		englishDef = "numbers that are multiplied to find a product";
		spanishDef = "números que se multiplican para hallar un producto";
		showTermDefinition();
	}
	//timer_1 = setTimeout("factors_extd(" + a + ")", 1200);
}

function factors_extd(e) {
	
	var cont = parseInt(e);

	
	if(e == 0)
		document.getElementById('animation').innerHTML = "<div class='factors_values'><img src='assets/images/factors_images/127_factors1.png'></div>";
	else if(e == 1) {


		if(selLang=="english"){
		document.getElementById('animation').innerHTML = "<div class='factors_values'><img src='assets/images/factors_images/127_factors2.png'></div>";
		}
		else{
		document.getElementById('animation').innerHTML = "<div class='factors_values'><img src='assets/images/factors_images/127_factorssp2.png'></div>";
		}
	} 
	
	else if(e == 2) {
		document.getElementById('animation').innerHTML = "<div class='factors_values'><img src='assets/images/factors_images/127_factors3.png'></div>";
	} else if(e == 3) {
		
		
		if(selLang=="english"){
		document.getElementById('animation').innerHTML = "<div class='factors_values'><img src='assets/images/factors_images/127_factors4.png'></div>";
		}
		else{
			document.getElementById('animation').innerHTML = "<div class='factors_values'><img src='assets/images/factors_images/127_factorssp4.png'></div>";
		}
		
	} else {
		//document.getElementById('animation').innerHTML = "";
	    //e = -1;
	}
	cont = parseInt(e) + 1;

	factors(cont);
}

/* factors ends */
/*favorable outcomes Begins*/
function favorable_outcomes(a) {

	if(a == 0) {
		englishTerm = "favorable outcomes";
		spanishTerm = "resultados favorables";
		englishDef = "outcomes for which the probability is being found";
		spanishDef = "determinación de la probabilidad de obtener ciertos resultados";
		showTermDefinition();
	}
	if(a == 5 || a == 3) {
		//timer_1 = setTimeout("favorable_outcomes_extd(" + a + ")", 2000)
	} else {
		//timer_1 = setTimeout("favorable_outcomes_extd(" + a + ")", 1200)
	}
}

function favorable_outcomes_extd(e) {
	var count = parseInt(e);
	var get_id = document.getElementById("animation")
	count++;
	if(selLang=="english"){
	if(count == 1) {
		get_id.innerHTML = "<div><img class='favoueable_outcome_img1' src='assets/images/favorable_outcomes_images/128_favorable-outcomes1.png'></div>";
	} else if(count == 2) {
		get_id.innerHTML = "<div><img class='favoueable_outcome_img1' src='assets/images/favorable_outcomes_images/128_favorable-outcomes2.png'></div>";
	} else if(count == 3) {
		get_id.innerHTML = "<div><img class='favoueable_outcome_img1' src='assets/images/favorable_outcomes_images/128_favorable-outcomes3.png'></div>";
	} else if(count == 4) {
		get_id.innerHTML = "<div class='favoueable_outcome_img'><img src='assets/images/favorable_outcomes_images/128_favorable-outcomes4.png'></div>";
	} else if(count == 5) {
		get_id.innerHTML = "<div class='favoueable_outcome_img'><img src='assets/images/favorable_outcomes_images/128_favorable-outcomes5.png'></div>";
	} else {
		count = 0;
		get_id.innerHTML = " ";
	}
	}
	else{
		if(count == 1) {
		get_id.innerHTML = "<div><img class='favoueable_outcome_img1' src='assets/images/favorable_outcomes_images/128_favorable-outcomes1.png'></div>";
	} else if(count == 2) {
		get_id.innerHTML = "<div><img class='favoueable_outcome_img1' src='assets/images/favorable_outcomes_images/128_favorable-outcomessp2.png'></div>";
	} else if(count == 3) {
		get_id.innerHTML = "<div><img class='favoueable_outcome_img1' src='assets/images/favorable_outcomes_images/128_favorable-outcomessp3.png'></div>";
	} else if(count == 4) {
		get_id.innerHTML = "<div class='favoueable_outcome_img'><img src='assets/images/favorable_outcomes_images/128_favorable-outcomes4.png'></div>";
	} else if(count == 5) {
		get_id.innerHTML = "<div class='favoueable_outcome_img'><img src='assets/images/favorable_outcomes_images/128_favorable-outcomessp5.png'></div>";
	} else {
		count = 0;
		get_id.innerHTML = " ";
	}
	}
	favorable_outcomes(count);
}

/*favorable outcomes Ends*/


/* composite_number */
function composite_number(a) {
	if(a == 0) {
		englishTerm = "composite number";
		spanishTerm = "número compuesto";
		englishDef = "a whole number that has more than two factors";
		spanishDef = "un número entero que tiene más de dos factores";
		showTermDefinition();
	}
	//timer_1 = setTimeout("composite_number_extd(" + a + ")", 850);
}

function composite_number_extd(e) {
	var cnt = parseInt(e);
	var composite_div = document.getElementById('animation');
	var Factor_27 = 'Factors of 27: 1, 3, 9, 27';
	var Factor_29 = 'Factors of 29: 1, 29';

	var Factor_27_spanish = 'Factores de 27: 1, 3, 9, 27';
	var Factor_29_spanish = 'Factores de 29: 1, 29';
	cnt++;
	if(selLang == "english") {
		if(cnt == 1) {
			composite_div.innerHTML = "<div class='composite_number_txt'><img src='assets/images/composite_number_images/050_composite_number1.png' /></div>";
		} else if(cnt == 2) {
			composite_div.innerHTML = "<div class='composite_number_txt'><img src='assets/images/composite_number_images/050_composite_number2.png' /></div>";
		} else if(cnt == 3) {
			composite_div.innerHTML = "<div class='composite_number_txt'><img src='assets/images/composite_number_images/050_composite_number3.png' /></div>";
		} else if(cnt == 4) {
			composite_div.innerHTML = "<div class='composite_number_txt'><img src='assets/images/composite_number_images/050_composite_number4.png' /></div>";
		} else if(cnt == 5) {
			composite_div.innerHTML = "<div class='composite_number_txt'><img src='assets/images/composite_number_images/050_composite_number5.png' /></div>";
		} else if(cnt == 6) {
			composite_div.innerHTML = "<div class='composite_number_txt'><img src='assets/images/composite_number_images/050_composite_number6.png' /></div>";
		} else if(cnt == 7) {
			cnt = 0;
			composite_div.innerHTML = '';
		}
	} else {
		if(cnt == 1) {
			composite_div.innerHTML = "<div class='composite_number_txt'><img src='assets/images/composite_number_images/050_composite_number1.png' /></div>";
		} else if(cnt == 2) {
			composite_div.innerHTML = "<div class='composite_number_txt'><img src='assets/images/composite_number_images/050_composite_numbersp2.png' /></div>";
		} else if(cnt == 3) {
			composite_div.innerHTML = "<div class='composite_number_txt'><img src='assets/images/composite_number_images/050_composite_numbersp3.png' /></div>";
		} else if(cnt == 4) {
			composite_div.innerHTML = "<div class='composite_number_txt'><img src='assets/images/composite_number_images/050_composite_numbersp4.png' /></div>";
		} else if(cnt == 5) {
			composite_div.innerHTML = "<div class='composite_number_txt'><img src='assets/images/composite_number_images/050_composite_numbersp5.png' /></div>";
		} else if(cnt == 6) {
			composite_div.innerHTML = "<div class='composite_number_txt'><img src='assets/images/composite_number_images/050_composite_numbersp6.png' /></div>";
		} else if(cnt == 7) {
			cnt = 0;
			composite_div.innerHTML = '';
		}
	}

	composite_number(cnt);
}

/* END */



/*decimal*/
function decimal(a) {
	if(a == 0) {
		englishTerm = "decimal";
		spanishTerm = "decimal";
		englishDef = "a number that uses place value and a decimal point to show tenths, hundredths, and so on";
		spanishDef = "un número que usa el valor posicional y un punto decimal para mostrar décimas, centésimas, etc.";
		showTermDefinition();
	}
	if(a <= 4) {
		//timer_1 = setTimeout("decimal_extd(" + a + ")", 1000);
	} else if(a == 5) {
		//timer_1 = setTimeout("decimal_extd(" + a + ")", 1500);
	}
}

function decimal_extd(e) {
	var d = parseInt(e);
	if(e == 0) {
		    document.getElementById('animation').innerHTML = "<img  src='assets/images/decimal_image/081_decimal1.png'>";
	} else if(e == 1) {
		if(selLang == "english") {
			document.getElementById('animation').innerHTML = "<img  src='assets/images/decimal_image/081_decimal2.png'>";
		} else if(selLang == "spanish") {
			document.getElementById('animation').innerHTML = "<img  src='assets/images/decimal_image/decimalSp2.png' class='decimal_image'>";
		}
	} else if(e == 2) {
		if(selLang == "english") {
			document.getElementById('animation').innerHTML = "<img  src='assets/images/decimal_image/081_decimal3.png'>";
		} else if(selLang == "spanish") {
			document.getElementById('animation').innerHTML = "<img  src='assets/images/decimal_image/decimalSp3.png' class='decimal_image'>";
		}
	} else if(e == 3) {
		if(selLang == "english") {
			document.getElementById('animation').innerHTML = "<img  src='assets/images/decimal_image/081_decimal4.png'>";
		} else if(selLang == "spanish") {
			document.getElementById('animation').innerHTML = "<img  src='assets/images/decimal_image/decimalSp4.png' class='decimal_image'>";
		}
	} else if(e == 4) {
		if(selLang == "english") {
			document.getElementById('animation').innerHTML = "<img  src='assets/images/decimal_image/081_decimal5.png'>";
		} else if(selLang == "spanish") {
			document.getElementById('animation').innerHTML = "<img  src='assets/images/decimal_image/decimalSp5.png' class='decimal_image'></div>";
		}
	} else {
		//document.getElementById('animation').innerHTML = "";
		//e = -1;
	}
	d = parseInt(e) + 1;
	decimal(d);
}

/*end decimal*/


/* decimal point */
function decimal_point(a) {
	if(a == 0) {
		englishTerm = "decimal point";
		spanishTerm = "punto decimal";
		englishDef = "a period used to separate the ones place from the tenths place in a number; separates dollars from cents";
		spanishDef = "el punto que se usa para separar la posición de las unidades de la posición de las décimas en un número; separa los dólares de los centavos";
		showTermDefinition();
	}
	//timer_1 = setTimeout("decimal_point_extd(" + a + ")", 1000);
}

function decimal_point_extd(e) {
	var d = parseInt(e);
	if(e == 0) {
		document.getElementById('animation').innerHTML = "<img  src='assets/images/decimalpoint_image/082_decimalpoint1.png' class='decimal_point_image'>"; 
	} else if(e == 1) {
		if(selLang == "english") {
			document.getElementById('animation').innerHTML = "<img  src='assets/images/decimalpoint_image/082_decimalpoint2.png' class='decimal_point_image'>";
		} else if(selLang == "spanish") {
			document.getElementById('animation').innerHTML = "<img  src='assets/images/decimalpoint_image/082_decimalpointsp2.png' class='decimal_point_image'>";
		}
	} else if(e == 2) {
		if(selLang == "english") {
			document.getElementById('animation').innerHTML = "<img  src='assets/images/decimalpoint_image/082_decimalpoint3.png' class='decimal_point_image'>";
		} else if(selLang == "spanish") {
			document.getElementById('animation').innerHTML = "<img  src='assets/images/decimalpoint_image/082_decimalpointsp3.png' class='decimal_point_image'>";
		}
	} else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	d = parseInt(e) + 1;
	decimal_point(d);
}


/* decimeter 083 */
function decimeter(a) {
	if(a == 0) {
		englishTerm = "decimeter";
		spanishTerm = "decímetro";
		englishDef = "a metric unit that measures length";
		spanishDef = "unidad métrica que mide longitud";
		showTermDefinition();
	}
	//timer_1 = setTimeout("decimeter_extd(" + a + ")", 1200);
}

function decimeter_extd(e) {
	var cnt = parseInt(e);
	var decimeter_div = document.getElementById('animation');
	cnt++;
	if(selLang=="english"){
	if(cnt == 1) {
		decimeter_div.innerHTML = "<div><img class='decimeter_img_class' src='assets/images/decimeter_img/decimeter1.png' /></div>";
	} else if(cnt == 2) {
		decimeter_div.innerHTML = "<div><img class='decimeter_img_class' src='assets/images/decimeter_img/decimeter2.png' /></div>";
	} else if(cnt == 3) {
		decimeter_div.innerHTML = "<div><img class='decimeter_img_class' src='assets/images/decimeter_img/decimeter3.png' /></div>";
	} else if(cnt == 4) {
		decimeter_div.innerHTML = "<div><img class='decimeter_img_class' src='assets/images/decimeter_img/decimeter4.png' /></div>";
	} else if(cnt == 5) {
		cnt = 0;
		decimeter_div.innerHTML = '';
	}
	}
	else{
		if(cnt == 1) {
		decimeter_div.innerHTML = "<div><img class='decimeter_img_class' src='assets/images/decimeter_img/decimeter1.png' /></div>";
	} else if(cnt == 2) {
		decimeter_div.innerHTML = "<div><img class='decimeter_img_class' src='assets/images/decimeter_img/decimetersp2.png' /></div>";
	} else if(cnt == 3) {
		decimeter_div.innerHTML = "<div><img class='decimeter_img_class' src='assets/images/decimeter_img/decimetersp3.png' /></div>";
	} else if(cnt == 4) {
		decimeter_div.innerHTML = "<div><img class='decimeter_img_class' src='assets/images/decimeter_img/decimetersp4.png' /></div>";
	} else if(cnt == 5) {
		cnt = 0;
		decimeter_div.innerHTML = '';
	}
	}
	decimeter(cnt);
}




/***/
/* coordinate graph */
function coordinate_graph(a) {
	if(a == 0) {
		englishTerm = "coordinate graph";
		spanishTerm = "gráfica de coordenadas";
		englishDef = "a graph formed by a horizontal number line, or axis, and a vertical number line, or axis";
		spanishDef = "gráfica formada por una recta numérica horizontal, o eje, y una recta numérica vertical, &nbsp;&nbsp;&nbsp; o eje";
		showTermDefinition();
	}
	//timer_1 = setTimeout("coordinate_graph_extd(" + a + ")", 1200);
}

function coordinate_graph_extd(e) {
	var cnt = parseInt(e);
	var coordinate_graph_div = document.getElementById('animation');
	cnt++;
	if(cnt == 1) {
		if(selLang == "english") {
		coordinate_graph_div.innerHTML = "<div class='coordinate_graph_img'><img  src='assets/images/coordinate_graph_img/059_coordinategraph1.png' /></div>";
		}
		else
		{
		coordinate_graph_div.innerHTML = "<div class='coordinate_graph_img1'><img  src='assets/images/coordinate_graph_img/059_coordinategraph1.png' /></div>";	
		}
	} else if(cnt == 2) {
		if(selLang == "english") {
			coordinate_graph_div.innerHTML = "<div class='coordinate_graph_img'><img  src='assets/images/coordinate_graph_img/059_coordinategraph2.png' /></div>";
		} else {
			coordinate_graph_div.innerHTML = "<div class='coordinate_graph_img1'><img  src='assets/images/coordinate_graph_img/059_coordinategraphsp2.png' /></div>";
		}
	} else if(cnt == 3) {
		if(selLang == "english") {
			coordinate_graph_div.innerHTML = "<div class='coordinate_graph_img'><img  src='assets/images/coordinate_graph_img/059_coordinategraph3.png' /></div>";
		} else {
			coordinate_graph_div.innerHTML = "<div class='coordinate_graph_img1'><img  src='assets/images/coordinate_graph_img/059_coordinategraphsp3.png' /></div>";
		}
	} else if(cnt == 4) {
		if(selLang == "english") {
			coordinate_graph_div.innerHTML = "<div class='coordinate_graph_img'><img  src='assets/images/coordinate_graph_img/059_coordinategraph4.png' /></div>";
		} else {
			coordinate_graph_div.innerHTML = "<div class='coordinate_graph_img1'><img  src='assets/images/coordinate_graph_img/059_coordinategraphsp4.png' /></div>";
		}
	} else if(cnt == 5) {
		cnt = 0;
		coordinate_graph_div.innerHTML = '';
	}
	coordinate_graph(cnt);
}


/* consecutive_vertices starts*/
function consecutive_vertices(a) {
	if(a == 0) {
		englishTerm = "consecutive vertices";
		spanishTerm = "vértices consecutivos";
		englishDef = "vertices of a polygon that are connected by a side";
		spanishDef = "vértices de un polígono conectados por un lado";
		showTermDefinition();
	}
	//timer_1 = setTimeout("consecutive_vertices_extd(" + a + ")", 1000);
}

function consecutive_vertices_extd(e) {
	var cont = parseInt(e);

	if(cont == 0)
		document.getElementById('animation').innerHTML = '<div id="vertices_img"><img src="assets/images/consecutive_vertices_images/058_consecutivevertices1.png" /></div>';
	else if(e == 1)
		document.getElementById('animation').innerHTML = '<div id="vertices_img" ><img src="assets/images/consecutive_vertices_images/058_consecutivevertices2.png"/> </div>';
	else if(e == 2) {
		if(selLang == "english") {
			document.getElementById('animation').innerHTML = '<div id="vertices_img"><img src="assets/images/consecutive_vertices_images/058_consecutivevertices3.png" /> </div>';
		} else if(selLang == "spanish") {
			document.getElementById('animation').innerHTML = '<div id="vertices_img" ><img src="assets/images/consecutive_vertices_images/058_consecutiveverticessp.png"/> </div>';
		}

	} else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	cont = parseInt(e) + 1;
	consecutive_vertices(cont);
}

/* consecutive_vertices ends */

/*customary units of capacity Begins*/
function customary_units_of_capacity(a) {

	if(a == 0) {
		englishTerm = "customary units of capacity";
		spanishTerm = "unidades estándar de capacidad";
		englishDef = "the units of capacity used in the United States, such as fluid ounce, cup, pint, quart, and gallon";
		spanishDef = "las unidades que se usan en los Estados Unidos para medir capacidad, como la onza líquida, la taza, la pinta, el cuarto y el galón";
		showTermDefinition();
	}
	//timer_1 = setTimeout("customary_units_of_capacity_extd(" + a + ")", 1200)
}

function customary_units_of_capacity_extd(e) {
	var count = parseInt(e);
	var get_id = document.getElementById("animation");
	count++;
	if(count == 1) {
		get_id.innerHTML = "<div class='customary_units_capacity_1'><img src='assets/images/customary_capacity_images/073_cup.png' /></div>";
	} else if(count == 2) {
		get_id.innerHTML = "<div class='customary_units_capacity_2'><img src='assets/images/customary_capacity_images/261_pint.png' /></div>";
	} else if(count == 3) {
		get_id.innerHTML = "<div class='customary_units_capacity'><img src='assets/images/customary_capacity_images/285_quart.png' /></div>";
	} else if(count == 4) {
		get_id.innerHTML = "<div class='customary_units_capacity'><img src='assets/images/customary_capacity_images/141_gallon.png' /></div>";
	} else {
		count = 0;
		get_id.innerHTML = "";
	}

	customary_units_of_capacity(count);
}

/*customary units of capacity Ends*/
/*customary units of length Begins*/
function customary_units_of_length(a) {

	if(a == 0) {
		englishTerm = "customary units of length";
		spanishTerm = "unidades estándar de longitud";
		englishDef = "the units of length used in the United States, such as inch, foot, yard, and mile";
		spanishDef = "las unidades que se usan en los Estados Unidos para medir longitud, como la pulgada, el pie, la yarda y la milla";
		showTermDefinition();
	}
	//timer_1 = setTimeout("customary_units_of_length_extd(" + a + ")", 1500)
}

function customary_units_of_length_extd(e) {
	var count = parseInt(e);
	var get_id = document.getElementById("animation");
	count++;
	if(count == 1) {
		get_id.innerHTML = "<div class='customary_units_length_1'><img src='assets/images/customary_length_images/073_customary_length1.png' /></div>";
	} else if(count == 2) {
		get_id.innerHTML = "<div class='customary_units_length_2'><img src='assets/images/customary_length_images/073_customary_length2.png' /></div>";
	} else if(count == 3) {
		get_id.innerHTML = "<div class='customary_units_length_3'><img src='assets/images/customary_length_images/073_customary_length3.png' /></div>";
	} else {
		count = 0;
		get_id.innerHTML = "";
	}

	customary_units_of_length(count);
}

/*customary units of length Ends*/
/* complementary angles */
function complementary_angles(a) {
	if(a == 0) {
		englishTerm = "complementary angles";
		spanishTerm = "ángulos complementarios";
		englishDef = "two angles whose measures have a sum of 90°";
		spanishDef = "dos ángulos cuyas medidas suman 90°";
		showTermDefinition();
	}
	//timer_1 = setTimeout("complementary_angles_extd(" + a + ")", 1200);
}

function complementary_angles_extd(e) {
	var cnt = parseInt(e);
	var complementary_angles_div = document.getElementById('animation');
	cnt++;
	if(cnt == 1) {
		complementary_angles_div.innerHTML = "<div class='complmntary_angle_img'><img src='assets/images/complementary_angle_img/049_complementaryangles1.png' /></div>";
	} else if(cnt == 2) {
		complementary_angles_div.innerHTML = "<div class='complmntary_angle_img'><img  src='assets/images/complementary_angle_img/049_complementaryangles2.png' /></div>";
	} else if(cnt == 3) {
		complementary_angles_div.innerHTML = "<div class='complmntary_angle_img'><img src='assets/images/complementary_angle_img/049_complementaryangles3.png' /></div>";
	} else if(cnt == 4) {
		complementary_angles_div.innerHTML = "<div class='complmntary_angle_img'><img src='assets/images/complementary_angle_img/049_complementaryangles4.png' /></div>";
	} else if(cnt == 5) {
		cnt = 0;
		complementary_angles_div.innerHTML = '';
	}
	complementary_angles(cnt);
}

/*degrees Celsius (°C) Begins*/
function degrees_celsius(a) {

	if(a == 0) {
		englishTerm = "degrees Celsius (°C)";
		spanishTerm = "grados Celsius (°C)";
		englishDef = "a unit commonly used outside the United States to measure temperature";
		spanishDef = "unidad que se usa comúnmente fuera de los Estados Unidos para medir la temperatura";
		showTermDefinition();
	}
	if(a != 5) {
		//timer_1 = setTimeout("degrees_celsius_extd(" + a + ")", 1200)
	} else {
		//timer_1 = setTimeout("degrees_celsius_extd(" + a + ")", 1700)
	}
}

function degrees_celsius_extd(e) {
	var count = parseInt(e);
	var get_id = document.getElementById("animation");
	
	//Right arrow
	
	count++;
	if(count == 1) {
		get_id.innerHTML = "<div class='degrees_celsius'><img src='assets/images/degrees_celsius_images/085_degreesCelsius1.png' /></div>";
	} else if(count == 2) {
		get_id.innerHTML = "<div class='degrees_celsius'><img src='assets/images/degrees_celsius_images/085_degreesCelsius2.png' /></div>";
	} else if(count == 3) {
		get_id.innerHTML = "<div class='degrees_celsius'><img src='assets/images/degrees_celsius_images/085_degreesCelsius3.png' /></div>";
	} else if(count == 4) {
		get_id.innerHTML = "<div class='degrees_celsius'><img src='assets/images/degrees_celsius_images/085_degreesCelsius4.png' /></div>";
	}
	else if(count == 4) {
		get_id.innerHTML = "<div class='degrees_celsius'><img src='assets/images/degrees_celsius_images/085_degreesCelsius5.png' /></div>";
	} else {
		count = 0;
		get_id.innerHTML = "";
	}
	degrees_celsius(count);
}

/*degrees Celsius (°C) Ends*/

/* dividend starts*/
function dividend(a) {
	if(a == 0) {
		englishTerm = "dividend";
		spanishTerm = "dividendo";
		englishDef = "the number that is to be divided in a division problem";
		spanishDef = "el número que se divide en un problema de división";
		showTermDefinition();
	}
	/*if(a == 4)
		//timer_1 = setTimeout("dividend_extd(" + a + ")", 2000);
	else
		//timer_1 = setTimeout("dividend_extd(" + a + ")", 800);*/

}

function dividend_extd(e) {
	var cont = parseInt(e);
	var divisor = "4";
	var dividen = "24";
	var quotient = "6";
	var dividen2 = "35";
	var divisor2 = " &#0247; 7 = 5"
	if(cont == 0)
		document.getElementById('animation').innerHTML = "<div class='dividend_img'><img src='assets/images/dividend_images/098_dividend1.png' /></div>";
	else if(cont == 1) {
		if(selLang == "english") {
			document.getElementById('animation').innerHTML = "<div class='dividend_img'><img src='assets/images/dividend_images/098_dividend2.png' /></div>";
		} else if(selLang == "spanish") {
			document.getElementById('animation').innerHTML = "<div class='dividend_img'><img src='assets/images/dividend_images/098_dividendsp2.png' /></div>";
		}
	} else if(cont == 2)
		document.getElementById('animation').innerHTML = "<div class='dividend_img'><img src='assets/images/dividend_images/098_dividend3.png' /></div>";
	else if(cont == 3) {
		if(selLang == "english") {
			document.getElementById('animation').innerHTML = "<div class='dividend_img'><img src='assets/images/dividend_images/098_dividend4.png' /></div>";
		} else if(selLang == "spanish") {
			document.getElementById('animation').innerHTML = "<div class='dividend_img'><img src='assets/images/dividend_images/098_dividendsp4.png' /></div>"; 
		}

	} else {
		cont = -1;
		document.getElementById('animation').innerHTML = ''
	}
	cont = parseInt(cont) + 1;
	dividend(cont);
}

/* dividend ends */





/* maximum starts  */


function maximum(a) {
	var a = parseInt(a);
	if(a == 0) {
		englishTerm = "maximum";
		spanishTerm = "máximo";
		englishDef = "the greatest value in a data set";
		spanishDef = "el mayor valor de un conjunto de datos";
		showTermDefinition();
	}
	//timer_1 = setTimeout("maximum_extd(" + a + ")", 1333);
}

function maximum_extd(e) {
	var cont = parseInt(e);
	if(cont == 0)
		document.getElementById('animation').innerHTML = "<div class='maximum_img'><img src='assets/images/maximum_images/400_maximum1.png' /></div>";
	else if(cont == 1) {
		if(selLang == "english") {
			document.getElementById('animation').innerHTML = "<div class='maximum_img'><img src='assets/images/maximum_images/400_maximum2.png' /></div>";
		}
		else
		{
			document.getElementById('animation').innerHTML = "<div class='maximum_img'><img src='assets/images/maximum_images/400_maximumsp2.png' /></div>";
		}
	} else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	cont = parseInt(e) + 1;
	maximum(cont);
}


/* maximum ends  */

/* minimum starts  */
function minimum(a) {
	var a = parseInt(a);
	if(a == 0) {
		englishTerm = "minimum";
		spanishTerm = "mínimo";
		englishDef = "the least value in a data set";
		spanishDef = "el menor valor de un conjunto de datos";
		showTermDefinition();
	}
	//timer_1 = setTimeout("minimum_extd(" + a + ")", 1333);
}


function minimum_extd(e) {
	var cont = parseInt(e);
	if(cont == 0)
	{
		document.getElementById('animation').innerHTML = "<div class='minimum_img'><img src='assets/images/minimum_images/399_minimum1.png' /></div>";
	}
	else if(cont == 1) {
		if(selLang == "english") {
			document.getElementById('animation').innerHTML = "<div class='minimum_img'><img src='assets/images/minimum_images/399_minimum2.png' /></div>";
		}
		else
		{
			document.getElementById('animation').innerHTML = "<div class='minimum_img'><img src='assets/images/minimum_images/399_minimumsp2.png' /></div>";
		}
	} else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	cont = parseInt(e) + 1;
	minimum(cont);
}

/* minimum ends  */


/* vertex of a solid figure starts  */
function vertex_of_a_solid_figure(a) {
	var a = parseInt(a);
	if(a == 0) {
		englishTerm = "vertex of a solid figure";
		spanishTerm = "vértice de una figura sólida";
		englishDef = "the point where two or more edges of a three-dimensional figure meet";
		spanishDef = "el punto donde se unen dos o más aristas de una figura tridimensional";
		showTermDefinition();
	}
	//timer_1 = setTimeout("vertex_of_solid_figure_extd(" + a + ")", 1000);
}

function vertex_of_solid_figure_extd(e) {
	var cont = parseInt(e);
	if(cont == 0)
	{
		document.getElementById('animation').innerHTML = "<div class='vertex_of_solid_figure'><img src='assets/images/vertex_of_solid_figure_images/398_vertex_of_a_solid figure1.png' /></div>";
	}
	else if(cont == 1) {
		if(selLang == "english") {
			document.getElementById('animation').innerHTML = "<div class='vertex_of_solid_figure'><img src='assets/images/vertex_of_solid_figure_images/398_vertex_of_a_solid figure2.png' /></div>";
		}
		else
		{
			document.getElementById('animation').innerHTML = "<div class='vertex_of_solid_figure'><img src='assets/images/vertex_of_solid_figure_images/398_vertex_of_a_solid figuresp2.png' /></div>";
		}
	} 
	else if(cont == 2) {
		if(selLang == "english") {
			document.getElementById('animation').innerHTML = "<div class='vertex_of_solid_figure'><img src='assets/images/vertex_of_solid_figure_images/398_vertex_of_a_solid figure3.png' /></div>";
		}
		else
		{
			document.getElementById('animation').innerHTML = "<div class='vertex_of_solid_figure'><img src='assets/images/vertex_of_solid_figure_images/398_vertex_of_a_solid figuresp3.png' /></div>";
		}
	}
	else if(cont == 3) {
		if(selLang == "english") {
			document.getElementById('animation').innerHTML = "<div class='vertex_of_solid_figure'><img src='assets/images/vertex_of_solid_figure_images/398_vertex_of_a_solid figure4.png' /></div>";
		}
		else
		{
			document.getElementById('animation').innerHTML = "<div class='vertex_of_solid_figure'><img src='assets/images/vertex_of_solid_figure_images/398_vertex_of_a_solid figuresp4.png' /></div>";
		}
	}
	else if(cont == 4) {
		if(selLang == "english") {
			document.getElementById('animation').innerHTML = "<div class='vertex_of_solid_figure'><img src='assets/images/vertex_of_solid_figure_images/398_vertex_of_a_solid figure5.png' /></div>";
		}
		else
		{
			document.getElementById('animation').innerHTML = "<div class='vertex_of_solid_figure'><img src='assets/images/vertex_of_solid_figure_images/398_vertex_of_a_solid figuresp5.png' /></div>";
		}
	}else {

		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	cont = parseInt(e) + 1;
	vertex_of_a_solid_figure(cont);
}


/* vertex of a solid figure ends  */

/* base of a solid figure  starts  */
function base_of_solid_figure_extd(e) {
	var cont = parseInt(e);
	if(cont == 0)
	{
		if(selLang == "english") {
		document.getElementById('animation').innerHTML = "<div class='base_of_solid_figure'><img src='assets/images/base_of_solid_figure_images/396_base_of_a_solid_figure1.png' /></div>";
		}
		else
		{
		document.getElementById('animation').innerHTML = "<div class='base_of_solid_figure'><img src='assets/images/base_of_solid_figure_images/396_base_of_a_solid_figuresp1.png' /></div>";

		}
	}
	else if(cont == 1) {
		if(selLang == "english") {
			document.getElementById('animation').innerHTML = "<div class='base_of_solid_figure'><img src='assets/images/base_of_solid_figure_images/396_base_of_a_solid_figure2.png' /></div>";
		}
		else
		{
			document.getElementById('animation').innerHTML = "<div class='base_of_solid_figure'><img src='assets/images/base_of_solid_figure_images/396_base_of_a_solid_figuresp2.png' /></div>";
		}
	} 
	else if(cont == 2) {
		if(selLang == "english") {
			document.getElementById('animation').innerHTML = "<div class='base_of_solid_figure'><img src='assets/images/base_of_solid_figure_images/396_base_of_a_solid_figure3.png' /></div>";
		}
		else
		{
			document.getElementById('animation').innerHTML = "<div class='base_of_solid_figure'><img src='assets/images/base_of_solid_figure_images/396_base_of_a_solid_figuresp3.png' /></div>";
		}
	}
	else if(cont == 3) {
		if(selLang == "english") {
			document.getElementById('animation').innerHTML = "<div class='base_of_solid_figure'><img src='assets/images/base_of_solid_figure_images/396_base_of_a_solid_figure4.png' /></div>";
		}
		else
		{
			document.getElementById('animation').innerHTML = "<div class='base_of_solid_figure'><img src='assets/images/base_of_solid_figure_images/396_base_of_a_solid_figuresp4.png' /></div>";
		}
	}else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	cont = parseInt(e) + 1;
	base_of_a_solid_figure(cont);
}

function base_of_a_solid_figure(a) {
	var a = parseInt(a);
	if(a == 0) {
		englishTerm = "base of a solid figure";
		spanishTerm = "base de una figura sólida";
		englishDef = "the top or bottom face of a three-dimensional figure by which the figure is measured or named";
		spanishDef = "la cara superior o inferior de una figura tridimensional por la cuál se mide o se nombra tal figura";
		showTermDefinition();
	}
	//timer_1 = setTimeout("base_of_solid_figure_extd(" + a + ")", 1600);
}
/* base of a solid figure ends  */

/* yard  starts  */
function yard_extd(e) {
			var cont = parseInt(e);

	if(cont == 0)
	{
		document.getElementById('animation').innerHTML = "<div class='yard_img'><img src='assets/images/yard_images/392_yard1.png' /></div>";
	}
	else if(cont == 1)
	{
		document.getElementById('animation').innerHTML = "<div class='yard_img'><img src='assets/images/yard_images/392_yard2.png' /></div>";
	}
	else if(cont == 2)
	{
		document.getElementById('animation').innerHTML = "<div class='yard_img'><img src='assets/images/yard_images/392_yard3.png' /></div>";
	}
	else if(cont == 3)
	{
		document.getElementById('animation').innerHTML = "<div class='yard_img'><img src='assets/images/yard_images/392_yard4.png' /></div>";
	}
	else if(cont == 4)
	{
		document.getElementById('animation').innerHTML = "<div class='yard_img'><img src='assets/images/yard_images/392_yard5.png' /></div>";
	}
	else  if(cont == 5)
	{
		document.getElementById('animation').innerHTML = "<div class='yard_img'><img src='assets/images/yard_images/392_yard6.png' /></div>";
	}
	else if(cont == 6)
	{
		document.getElementById('animation').innerHTML = "<div class='yard_img'><img src='assets/images/yard_images/392_yard7.png' /></div>";
	}
	else if(cont == 7)
	{
		document.getElementById('animation').innerHTML = "<div class='yard_img'><img src='assets/images/yard_images/392_yard8.png' /></div>";
	}
	cont = parseInt(e) + 1;
	yard(cont);
}

function yard(a) {
	var a = parseInt(a);
	if(a == 0) {
		englishTerm = "yard";
		spanishTerm = "yard";
		englishDef = "a customary unit for measuring length";
		spanishDef = "unidad estándar para medir longitud";
		replayAnimation = 1;
		showTermDefinition();
	}
	//timer_1 = setTimeout("yard_extd(" + a + ")", 1000);
}

/* yard ends  */


/* upper extreme starts  */
function upper_extreme_extd(e) {
	var cont = parseInt(e);
	if(cont == 0)
	{
		document.getElementById('animation').innerHTML = "<div class='upper_extreme'><img src='assets/images/upper_extreme_images/379_upperextreme1.png' /></div>";
	}
	else if(cont == 1)
	{
		if(selLang == "english") {
			document.getElementById('animation').innerHTML = "<div class='upper_extreme'><img src='assets/images/upper_extreme_images/379_upperextreme2.png' /></div>";
		}
		else
		{
			
		document.getElementById('animation').innerHTML = "<div class='upper_extreme'><img src='assets/images/upper_extreme_images/379_upperextremesp2.png' /></div>";
		}
	}
	 else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	cont = parseInt(e) + 1;
	upper_extreme(cont);
}

function upper_extreme(a) {
	var a = parseInt(a);
	if(a == 0) {
		englishTerm = "upper extreme";
		spanishTerm = "extremo superior";
		englishDef = "the greatest value in a data set";
		spanishDef = "el mayor valor de un conjunto de datos";
		showTermDefinition();
	}
	//timer_1 = setTimeout("upper_extreme_extd(" + a + ")", 1333);
}

/* upper extreme ends  */
/* third quartile starts  */
function third_quartile_extd(e) {
	var cont = parseInt(e);
	if(cont == 0)
	{
		document.getElementById('animation').innerHTML = "<div class='third_quartile_img'><img src='assets/images/third_quartile_images/1.png' /></div>";
	}
	else if(cont == 1)
	{
		document.getElementById('animation').innerHTML = "<div class='third_quartile_img'><img src='assets/images/third_quartile_images/2.png' /></div>";
	}
	else if(cont == 2)
	{
		if(selLang == "english") {
		document.getElementById('animation').innerHTML = "<div class='third_quartile_img'><img src='assets/images/third_quartile_images/3.png' /></div>";
		}
		else
		{
			document.getElementById('animation').innerHTML = "<div class='third_quartile_img'><img src='assets/images/third_quartile_images/3sp.png' /></div>";
	}
	} else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	cont = parseInt(e) + 1;
	third_quartile(cont);
}

function third_quartile(a) {
	var a = parseInt(a);
	if(a == 0) {
		englishTerm = "third quartile";
		spanishTerm = "tercer cuartil";
		englishDef = "the median of the upper half of a data set; also called the upper quartile";
		spanishDef = "la mediana de la mitad superior de un conjunto de datos; también llamado cuartil superior";
		showTermDefinition();
	}
	//timer_1 = setTimeout("third_quartile_extd(" + a + ")", 1500);
}

/* third quartile ends  */

/*grid*/

function grid(a) {
	if(a == 0) {
		englishTerm = "grid";
		spanishTerm = "cuadrícula";
		englishDef = "a pattern of lines formed by two number lines used to show the location of a point";
		spanishDef = "un patrón de rectas formado por dos rectas numéricas que se usan para mostrar la ubicación de un punto";
		showTermDefinition();
	}
	//timer_1 = setTimeout("grid_extd(" + a + ")", 1300);

}

function grid_extd(e) {
	var d = parseInt(e);
	if(e == 0) {

		document.getElementById('animation').innerHTML = "<div class='grid_1'><img src='assets/images/grid/146_grid1.png' /></div>";

	} else if(e == 1) {
		document.getElementById('animation').innerHTML = "<div class='grid_1'><img src='assets/images/grid/146_grid2.png' /></div>";
	} else if(e == 2) {
		document.getElementById('animation').innerHTML = "<div class='grid_1'><img src='assets/images/grid/146_grid3.png' /></div>";
	} else if(e == 3) {
		document.getElementById('animation').innerHTML = "<div class='grid_1'><img src='assets/images/grid/146_grid4.png' /></div>";
	}else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	d = parseInt(e) + 1;

	grid(d);
}

/*end grid*/


/*Half*/

function half(a) {
	if(a == 0) {
		englishTerm = "half (halves)";
		spanishTerm = "mitad (mitades)";
		englishDef = "1 of 2 equal parts";
		spanishDef = "1 de 2 partes iguales";
		showTermDefinition();
	}
	//timer_1 = setTimeout("half_extd(" + a + ")", 1300);
}

function half_extd(e) {
	var d = parseInt(e);
	if(e == 0) {

		document.getElementById('animation').innerHTML = "<div class='half'><img src='assets/images/half/147_half1.png' /></div>";

	} else if(e == 1) {
		document.getElementById('animation').innerHTML = "<div class='half'><img src='assets/images/half/147_half2.png' /></div>";
	}  else if(e == 2) {
		if(selLang == "english") {
		document.getElementById('animation').innerHTML = "<div class='half'><img src='assets/images/half/147_half3.png' /></div>";
		}
		else
		{
		document.getElementById('animation').innerHTML = "<div class='half'><img src='assets/images/half/147_halfsp3.png' /></div>";
		}
	}
	 else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	d = parseInt(e) + 1;
	half(d);
}

/*End Half*/

/*height of a cylinder Begins*/
function height_of_a_cylinder(a) {

	if(a == 0) {
		englishTerm = "height of a cylinder";
		spanishTerm = "altura de un cilindro";
		englishDef = "the perpendicular distance between the two bases of a cylinder";
		spanishDef = "la distancia perpendicular entre las dos bases de un cilindro";
		showTermDefinition();
	}
	//timer_1 = setTimeout("height_of_a_cylinder_extd(" + a + ")", 1333);
}

function height_of_a_cylinder_extd(e) {
	var count = parseInt(e);
	var div_id = document.getElementById("animation");
	count++;
	if(count == 1) {
		div_id.innerHTML = "<div class='hgt_cylinder'><img src='assets/images/hgt_cylinder_images/148_cylinder height1.png' /></div>";
	} else if(count == 2) {
		if(selLang == "english") {
			div_id.innerHTML = "<div class='hgt_cylinder'><img src='assets/images/hgt_cylinder_images/148_cylinder height2.png' /></div>";
		} else if(selLang == "spanish") {
			div_id.innerHTML = "<div class='hgt_cylinder'><img src='assets/images/hgt_cylinder_images/148_cylinder heightsp2.png' /></div>";
		}
	} else {
		count = 0;
		div_id.innerHTML = "";
	}

	height_of_a_cylinder(count);
}

/*height of a cylinder Ends*/

/*height of parallelogram*/
function height_of_a_parallelogram(a) {
	if(a == 0) {
		englishTerm = "height of a parallelogram";
		spanishTerm = "altura de un paralelogramo";
		englishDef = "the perpendicular distance from a base to the opposite side of the parallelogram";
		spanishDef = "la distancia perpendicular desde una base al lado opuesto de un paralelogramo";
		showTermDefinition();
	}
	//timer_1 = setTimeout("height_of_a_parallelogram_extd(" + a + ")", 700);

}

function height_of_a_parallelogram_extd(e) {
	var d = parseInt(e);
	if(e == 0) {
		document.getElementById('animation').innerHTML = "<div class='hgt_parallelogram'><img src='assets/images/heightofparalelogrm_img/149_parallelogram height.png' /></div>";
	} else if(e == 1) {
		document.getElementById('animation').innerHTML = "<div class='hgt_parallelogram'><img src='assets/images/heightofparalelogrm_img/149_parallelogram height1.png' /></div>";
	} else if(e == 2) {
		if(selLang == "english") {
		document.getElementById('animation').innerHTML = "<div class='hgt_parallelogram'><img src='assets/images/heightofparalelogrm_img/149_parallelogram height2.png' /></div>";
		}
		else
		{
		document.getElementById('animation').innerHTML = "<div class='hgt_parallelogram'><img src='assets/images/heightofparalelogrm_img/149_parallelogram heightsp2.png' /></div>";
		}
	}else if(e == 3) {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	d = parseInt(e) + 1;

	height_of_a_parallelogram(d);
}

/*end height of parallelogram*/

/*isosceles triangle*/
function isosceles_triangle(a) {
	if(a == 0) {
		englishTerm = "isosceles triangle";
		spanishTerm = "triángulo isósceles";
		englishDef = "a triangle with exactly two congruent sides";
		spanishDef = "un triángulo con dos lados exactamente congruentes";
		showTermDefinition();
	}
	//timer_1 = setTimeout("isosceles_triangle_extd(" + a + ")", 1200);

}

function isosceles_triangle_extd(e) {
	var d = parseInt(e);
if(e == 0) {
		document.getElementById('animation').innerHTML = "<div class='isosceles_triangle'><img src='assets/images/isosceles_triangle/171_isosceles triangle1.png' /></div>";
	} else if(e == 1) {
		document.getElementById('animation').innerHTML = "<div class='isosceles_triangle'><img src='assets/images/isosceles_triangle/171_isosceles triangle2.png' /></div>";
	}
	else if(e == 2) {
		document.getElementById('animation').innerHTML = "<div class='isosceles_triangle'><img src='assets/images/isosceles_triangle/171_isosceles triangle3.png' /></div>";
	}
	
	 else if(e == 3) {
		if(selLang == "english") {
		document.getElementById('animation').innerHTML = "<div class='isosceles_triangle'><img src='assets/images/isosceles_triangle/171_isosceles triangle4.png' /></div>";
		}
		else
		{
		document.getElementById('animation').innerHTML = "<div class='isosceles_triangle'><img src='assets/images/isosceles_triangle/171_isosceles trianglesp4.png' /></div>";
		}
	}else if(e == 4) {
		if(selLang == "english") {
		document.getElementById('animation').innerHTML = "<div class='isosceles_triangle'><img src='assets/images/isosceles_triangle/171_isosceles triangle5.png' /></div>";
		}
		else
		{
		document.getElementById('animation').innerHTML = "<div class='isosceles_triangle'><img src='assets/images/isosceles_triangle/171_isosceles trianglesp5.png' /></div>";
		}
	}else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	d = parseInt(e) + 1;

	isosceles_triangle(d);
}

/*end isosceles triangle*/
/*Triangle Height*/
function height_of_a_triangle(a) {
	if(a == 0) {
		englishTerm = "height of a triangle";
		spanishTerm = "altura de un triángulo";
		englishDef = "the perpendicular distance between a vertex and the opposite side of the triangle";
		spanishDef = "la distancia perpendicular entre un vértice y el lado opuesto del triángulo";
		showTermDefinition();
	}
	//timer_1 = setTimeout("height_of_a_triangle_extd(" + a + ")", 750);

}

function height_of_a_triangle_extd(e) {
	var d = parseInt(e);
if(e == 0) {
		document.getElementById('animation').innerHTML = "<div class='height_triangle'><img src='assets/images/heightoftriangle_img/152_triangleheight1.png' /></div>";
	} else if(e == 1) {
		document.getElementById('animation').innerHTML = "<div class='height_triangle'><img src='assets/images/heightoftriangle_img/152_triangleheight2.png' /></div>";
	}
	else if(e == 2) {
		document.getElementById('animation').innerHTML = "<div class='height_triangle'><img src='assets/images/heightoftriangle_img/152_triangleheight3.png' /></div>";
	}
	else if(e == 3) {
		if(selLang == "english") {
		document.getElementById('animation').innerHTML = "<div class='height_triangle'><img src='assets/images/heightoftriangle_img/152_triangleheight4.png' /></div>";
		}
		else
		{
		document.getElementById('animation').innerHTML = "<div class='height_triangle'><img src='assets/images/heightoftriangle_img/152_triangleheightsp4.png' /></div>";
		}
	}
	else if(e == 4) {
		document.getElementById('animation').innerHTML = "<div class='height_triangle'><img src='assets/images/heightoftriangle_img/152_triangleheight5.png' /></div>";
	}
	else if(e == 5) {
		document.getElementById('animation').innerHTML = "<div class='height_triangle'><img src='assets/images/heightoftriangle_img/152_triangleheight6.png' /></div>";
	}
	else if(e == 6) {
		document.getElementById('animation').innerHTML = "<div class='height_triangle'><img src='assets/images/heightoftriangle_img/152_triangleheight7.png' /></div>";
	}
	else if(e == 7) {
		if(selLang == "english") {
		document.getElementById('animation').innerHTML = "<div class='height_triangle1'><img src='assets/images/heightoftriangle_img/152_triangleheight8.png' /></div>";
		}
		else
		{
		document.getElementById('animation').innerHTML = "<div class='height_triangle1'><img src='assets/images/heightoftriangle_img/152_triangleheightsp8.png' /></div>";
		}
	}
	else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	d = parseInt(e) + 1;

	height_of_a_triangle(d);
}

/*End Triangle Height*/

/*Trapezoid*/

function height_of_a_trapezoid(a) {
	if(a == 0) {
		englishTerm = "height of a trapezoid";
		spanishTerm = "altura de un trapecio";
		englishDef = "the perpendicular distance between the bases of a trapezoid";
		spanishDef = "la distancia perpendicular entre las bases de un trapecio";
		showTermDefinition();
	}
	//timer_1 = setTimeout("height_of_a_trapezoid_extd(" + a + ")", 1200);

}

function height_of_a_trapezoid_extd(e) {
	var d = parseInt(e);
	if(e == 0) {
		document.getElementById('animation').innerHTML = "<div class='height_trapezoid'><img src='assets/images/heightoftrapezoid_img/151_trapezoidheight1.png' /></div>";
	} else if(e == 1) {
		document.getElementById('animation').innerHTML = "<div class='height_trapezoid'><img src='assets/images/heightoftrapezoid_img/151_trapezoidheight2.png' /></div>";
	}else if(e == 2) {
		document.getElementById('animation').innerHTML = "<div class='height_trapezoid'><img src='assets/images/heightoftrapezoid_img/151_trapezoidheight3.png' /></div>";
	}
else if(e == 3) {
	if(selLang == "english") {
		document.getElementById('animation').innerHTML = "<div class='height_trapezoid'><img src='assets/images/heightoftrapezoid_img/151_trapezoidheight4.png' /></div>";
	}
	else
	{
				document.getElementById('animation').innerHTML = "<div class='height_trapezoid'><img src='assets/images/heightoftrapezoid_img/151_trapezoidheightsp4.png' /></div>";

	}
	}
	else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	d = parseInt(e) + 1;
	height_of_a_trapezoid(d);
}

/*End trapezoid*/
/*chord Begins*/

function chord(a) {

	if(a == 0) {
		englishTerm = "chord";
		spanishTerm = "cuerda";
		englishDef = "a line segment that connects any two points on a circle";
		spanishDef = "un segmento de recta que conecta dos puntos cualquiera de un círculo";
		showTermDefinition();
	}
	//timer_1 = setTimeout("chord_extd(" + a + ")", 1000);
}

function chord_extd(e) {
	var count = parseInt(e);
	var div_id = document.getElementById("animation");
	count++

	 if(count == 1) {
		div_id.innerHTML = "<div id='chord_point'><img src='assets/images/chord_images/036_chord1.png' /></div>";
	} else if(count == 2) {
		div_id.innerHTML = "<div id='chord_point'><img src='assets/images/chord_images/036_chord2.png' /></div>";
	} else if(count == 3) {
		div_id.innerHTML = "<div id='chord_point'><img src='assets/images/chord_images/036_chord3.png' /></div>";
	} else if(count == 4) {
		div_id.innerHTML = "<div id='chord_point'><img src='assets/images/chord_images/036_chord4.png' /></div>";
	} else if(count == 5) {
		div_id.innerHTML = "<div id='chord_point'><img src='assets/images/chord_images/036_chord5.png' /></div>";
	} else if(count == 6) {
		div_id.innerHTML = "<div id='chord_point'><img src='assets/images/chord_images/036_chord6.png' /></div>";
		$("#chord_point").fadeOut();
	} else if(count == 7) {
		div_id.innerHTML = "<div id='chord_point'><img src='assets/images/chord_images/036_chord7.png' /></div>";
	} else if(count == 8) {
		div_id.innerHTML = "<div id='chord_point'><img src='assets/images/chord_images/036_chord8.png'/></div>";
	} else if(count == 9) {
		div_id.innerHTML = "<div id='chord_point'><img src='assets/images/chord_images/036_chord9.png'/></div>";
	} else if(count == 10) {
		div_id.innerHTML = "<div id='chord_point'><img src='assets/images/chord_images/036_chord10.png'/></div>";
	}else if(count == 11) {
		div_id.innerHTML = "<div id='chord_point'><img src='assets/images/chord_images/036_chord11.png'/></div>";
	} else {
		count = 0;
		div_id.innerHTML = "";
	}
	chord(count);
}

/*chord Ends*/

/* congruent_figures begins */

function congruent_figures(a) {
	if(a == 0) {
		englishTerm = "congruent figures";
		spanishTerm = "figuras congruentes";
		englishDef = "geometric figures that are the same shape and same size";
		spanishDef = "figuras geométricas que tienen la misma forma y el mismo tamaño";
		showTermDefinition();
	}
	//timer_1 = setTimeout("congruent_figures_extd(" + a + ")", 1500);
}

function congruent_figures_extd(e) {

var cont = parseInt(e);

	if(e == 0) {
		document.getElementById('animation').innerHTML = "<div class='congruent_figures'><img src='assets/images/congurent_figures_images/054_congruent figures.png'/></div>";
	} else if(e == 1) {
		document.getElementById('animation').innerHTML = "<div class='congruent_figures'><img src='assets/images/congurent_figures_images/054_congruent figures1.png'/></div>";

	} else if(e == 2) {
		document.getElementById('animation').innerHTML = "<div class='congruent_figures'><img src='assets/images/congurent_figures_images/054_congruent figures2.png'/></div>";

	} else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	cont = parseInt(e) + 1;

	congruent_figures(cont);
}

/* congruent_figures ends */

/* congurent begins */

function congruent(a) {
	if(a == 0) {
		englishTerm = "congruent";
		spanishTerm = "congruente";
		englishDef = "geometric figures that are the same shape and same size";
		spanishDef = "figuras geométricas que tienen la misma forma y el mismo tamaño";
		showTermDefinition();
	}
	//timer_1 = setTimeout("congruent_extd(" + a + ")", 1500);
}

function congruent_extd(e) {

	var cont = parseInt(e);

	if(e == 0) {
		document.getElementById('animation').innerHTML = "<div class='congruent_img'><img src='assets/images/congurent_images/054_congruent figures.png'/></div>";
	} else if(e == 1) {
		document.getElementById('animation').innerHTML = "<div class='congruent_img'><img src='assets/images/congurent_images/054_congruent figures1.png'/></div>";

	} else if(e == 2) {
		document.getElementById('animation').innerHTML = "<div class='congruent_img'><img src='assets/images/congurent_images/054_congruent figures2.png'/></div>";

	} else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	cont = parseInt(e) + 1;

	congruent(cont);
}

/* congurent ends */

/* congruent_polygons begins */

function congruent_polygons(a) {
	if(a == 0) {
		englishTerm = "congruent polygons";
		spanishTerm = "polígonos congruentes";
		englishDef = "polygons that are the same shape and same size";
		spanishDef = "polígonos que tienen la misma forma y el mismo tamaño";
		showTermDefinition();
	}
	//timer_1 = setTimeout("congruent_polygons_extd(" + a + ")", 1500);
}

function congruent_polygons_extd(e) {
	var cont = parseInt(e);

		if(e == 0) {
		document.getElementById('animation').innerHTML = "<div class='congruent_polygons'><img src='assets/images/congruent_polygons_images/055_congruentpolygons1.png'/></div>";
	} else if(e == 1) {
		document.getElementById('animation').innerHTML = "<div class='congruent_polygons'><img src='assets/images/congruent_polygons_images/055_congruentpolygons2.png'/></div>";

	} else if(e == 2) {
		document.getElementById('animation').innerHTML = "<div class='congruent_polygons'><img src='assets/images/congruent_polygons_images/055_congruentpolygons3.png'/></div>";

	} else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	cont = parseInt(e) + 1;

	congruent_polygons(cont);
}

/* congruent_polygons ends */


/*Pyramid*/
function height_of_a_pyramid(a) {
	if(a == 0) {
		englishTerm = "height of a pyramid";
		spanishTerm = "altura de una pirámide";
		englishDef = "the perpendicular distance from the tip of the pyramid to the base";
		spanishDef = "la distancia perpendicular desde la punta de la pirámide hasta la base";
		showTermDefinition();
	}
	//timer_1 = setTimeout("height_of_a_pyramid_extd(" + a + ")", 750);
}

function height_of_a_pyramid_extd(e) {
	var d = parseInt(e);
	if(e == 0) {
		document.getElementById('animation').innerHTML = "<div class='height_pyramid'><img src='assets/images/heightofprymid_img/150_pyramidheight1.png'/></div>";
	} else if(e == 1) {
		document.getElementById('animation').innerHTML = "<div class='height_pyramid'><img src='assets/images/heightofprymid_img/150_pyramidheight2.png'/></div>";
	} else if(e == 2) {
		document.getElementById('animation').innerHTML = "<div class='height_pyramid'><img src='assets/images/heightofprymid_img/150_pyramidheight3.png'/></div>";
	} else if(e == 3) {
		document.getElementById('animation').innerHTML = "<div class='height_pyramid'><img src='assets/images/heightofprymid_img/150_pyramidheight4.png'/></div>";
	}else if(e == 4) {
		if(selLang == "english") {
			document.getElementById('animation').innerHTML = "<div class='height_pyramid'><img src='assets/images/heightofprymid_img/150_pyramidheight5.png'/></div>";
		} else if(selLang == "spanish") {
			document.getElementById('animation').innerHTML = "<div class='height_pyramid'><img src='assets/images/heightofprymid_img/150_pyramidheightsp5.png'/></div>";
		}
	}else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	d = parseInt(e) + 1;
	height_of_a_pyramid(d);
}

/*Pyramid*/

/*pyramid Begins*/
function pyramid(a) {

	if(a == 0) {
		englishTerm = "pyramid";
		spanishTerm = "pirámide";
		englishDef = "a solid figure with a polygon base and faces that are triangles";
		spanishDef = "figura sólida con la base formada por un polígono y caras que son triángulos";
		showTermDefinition();
	}
	//timer_1 = setTimeout("pyramid_extd(" + a + ")", 1200);
}

function pyramid_extd(e) {
	var count = parseInt(e);
	var div_id = document.getElementById("animation");
	count++;

	if(count == 1) {
		div_id.innerHTML = "<div class='pyramid_img'><img src='assets/images/pyramid/282_pyramid1.png'/></div>";
	} else if(count == 2) {
		div_id.innerHTML = "<div class='pyramid_img'><img src='assets/images/pyramid/282_pyramid2.png'/></div>";
	} else if(count == 3) {
		div_id.innerHTML = "<div class='pyramid_img'><img src='assets/images/pyramid/282_pyramid3.png'/></div>";
	} else if(count == 4) {
		div_id.innerHTML = "<div class='pyramid_img'><img src='assets/images/pyramid/282_pyramid4.png'/></div>";
	} else if(count == 5) {
		div_id.innerHTML = "<div class='pyramid_img'><img src='assets/images/pyramid/282_pyramid5.png'/></div";
	} else if(count == 6) {
		div_id.innerHTML = "<div class='pyramid_img'><img src='assets/images/pyramid/282_pyramid6.png'/></div>";
	} else if(count == 7) {
		div_id.innerHTML = "<div class='pyramid_img'><img src='assets/images/pyramid/282_pyramid7.png'/></div>";
	} else {
		count = 0;
		div_id.innerHTML = "";
	}
	pyramid(count);
}

/*pyramid Ends*/
/*least common denominator (LCD) Ends*/
function less_than_symbol(a) {
	if(a == 0) {
		englishTerm = "less than symbol";
		spanishTerm = "símbolo menor que";
		englishDef = "a symbol used when comparing two numbers with the lesser number given first";
		spanishDef = "un símbolo que se usa cuando se comparan dos números, siendo menor el primero de los dos números";
		showTermDefinition();
	}
	//timer_1 = setTimeout("less_than_symbol_extd(" + a + ")", 1000);

}

function less_than_symbol_extd(e) {
	var d = parseInt(e);
	if(e == 0) {
		document.getElementById('animation').innerHTML = "<div class='less_than_symbol'><img src='assets/images/less_than_symbol/182_lessthansymbol1.png'/></div>";
	} else if(e == 1) {
		document.getElementById('animation').innerHTML = "<div class='less_than_symbol'><img src='assets/images/less_than_symbol/182_lessthansymbol2.png'/></div>";
	} else if(e == 2) {
		document.getElementById('animation').innerHTML = "<div class='less_than_symbol'><img src='assets/images/less_than_symbol/182_lessthansymbol3.png'/></div>";
	} else if(e == 3) {
		document.getElementById('animation').innerHTML = "<div class='less_than_symbol'><img src='assets/images/less_than_symbol/182_lessthansymbol4.png'/></div>";
	} else if(e == 4) {
		document.getElementById('animation').innerHTML = "<div class='less_than_symbol'><img src='assets/images/less_than_symbol/182_lessthansymbol5.png'/></div>";
	}else if(e == 5) {
		document.getElementById('animation').innerHTML = "<div class='less_than_symbol'><img src='assets/images/less_than_symbol/182_lessthansymbol6.png'/></div>";
	} else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	d = parseInt(e) + 1;

	less_than_symbol(d);
}

/*End Less than Symbol*/

/*Greater than symbol*/

function greater_than_symbol(a) {
	if(a == 0) {
		englishTerm = "greater than symbol";
		spanishTerm = "símbolo mayor que";
		englishDef = "a symbol used when comparing two numbers with the greater number given first";
		spanishDef = "un símbolo que se usa cuando se comparan dos números, siendo mayor el primero de los dos números ";
		showTermDefinition();
	}
	//timer_1 = setTimeout("greater_than_symbol_extd(" + a + ")", 850);
}

function greater_than_symbol_extd(e) {
	var d = parseInt(e);
	if(e == 0) {
		document.getElementById('animation').innerHTML = "<div class='greater_than_symbol'><img src='assets/images/greater_than_symbol/144_greaterthansymbol1.png'/></div>";
	} else if(e == 1) {
		document.getElementById('animation').innerHTML = "<div class='greater_than_symbol'><img src='assets/images/greater_than_symbol/144_greaterthansymbol2.png'/></div>";
	} else if(e == 2) {
		document.getElementById('animation').innerHTML = "<div class='greater_than_symbol'><img src='assets/images/greater_than_symbol/144_greaterthansymbol3.png'/></div>";
	} else if(e == 3) {
		document.getElementById('animation').innerHTML = "<div class='greater_than_symbol'><img src='assets/images/greater_than_symbol/144_greaterthansymbol4.png'/></div>";
	} else if(e == 4) {
		document.getElementById('animation').innerHTML = "<div class='greater_than_symbol'><img src='assets/images/greater_than_symbol/144_greaterthansymbol5.png'/></div>";
	} else if(e == 5) {
		document.getElementById('animation').innerHTML = "<div class='greater_than_symbol'><img src='assets/images/greater_than_symbol/144_greaterthansymbol6.png'/></div>";
	} else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	d = parseInt(e) + 1;

	greater_than_symbol(d);
}

/*Greater than symbol*/


/* rotation  starts  */
function rotation_extd(e) {
	var display = new Array();

	if(e == 0) {
		document.getElementById('animation').innerHTML = "<div class='rotation_img'><img src='assets/images/rotation_images/307_rotation1.png'/></div>";
	} else if(e == 1) {
		document.getElementById('animation').innerHTML = "<div class='rotation_img'><img src='assets/images/rotation_images/307_rotation2.png'/></div>";
	}else if(e == 2) {
		document.getElementById('animation').innerHTML = "<div class='rotation_img'><img src='assets/images/rotation_images/307_rotation3.png'/></div>";
	} else if(e == 3) {
		document.getElementById('animation').innerHTML = "<div class='rotation_img'><img src='assets/images/rotation_images/307_rotation4.png'/></div>";
	}   else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	cont = parseInt(e) + 1;
	rotation(cont);
}

function rotation(a) {
	var a = parseInt(a);
	if(a == 0) {
		englishTerm = "rotation";
		spanishTerm = "rotación";
		englishDef = "a transformation of a figure by turning the figure around a fixed point";
		spanishDef = "la transformación de una figura al girar la figura alrededor de un punto fijo";
		showTermDefinition();
	}
	//timer_1 = setTimeout("rotation_extd(" + a + ")", 1200);
}

/* rotation ends  */
                                                                         
/* quart starts*/
function quart(a) {
	if(a == 0) {
		englishTerm = "quart";
		spanishTerm = "cuarto";
		englishDef = "a customary unit that measures capacity";
		spanishDef = "unidades estándar que mide la capacidad";
		showTermDefinition();
	}
	//timer_1 = setTimeout("quart_extd(" + a + ")", 1000);
}

function quart_extd(e) {
	var cont = parseInt(e);
	if(cont == 0)
		document.getElementById('animation').innerHTML = '<div class="quart_img"><img src="assets/images/quart_images/quart.png" class="quar_img1" /></div>';
	else if(cont == 1)
		if(selLang == "english") {
			document.getElementById('animation').innerHTML = '<div class="quart_img"><img src="assets/images/quart_images/quart.png" class="quar_img1" id="quart_quart" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="quart_fill"></div><img src="assets/images/quart_images/pint1.png" class="quar_img2" id="quart_pint2" /><img src="assets/images/quart_images/pint.png" class="quar_img1" id="quart_pint1" /><img src="assets/images/quart_images/pint.png" class="quar_img1" id="quart_pint3" /><div class="quart_label">1 quart = 2 pints</div></div>';
		} else {
			document.getElementById('animation').innerHTML = '<div class="quart_img"><img src="assets/images/quart_images/quart.png" class="quar_img1" id="quart_quart" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="quart_fill"></div><img src="assets/images/quart_images/pint1.png" class="quar_img2" id="quart_pint2" /><img src="assets/images/quart_images/pint.png" class="quar_img1" id="quart_pint1" /><img src="assets/images/quart_images/pint.png" class="quar_img1" id="quart_pint3" /><div class="quart_label">1 cuarto = 2 pintas</div></div>';
		}
	else if(cont == 2) {
		window.clearTimeout(timer_1);
		$('#quart_pint1').animate({
			top : -100
		}, function() {
			$('#quart_pint1').animate({
				left : 70
			}, function() {
				$('#quart_pint1').css('display', 'none');
				$('#quart_pint2').css('display', 'block');
				$('.quart_fill').css('display', 'block');
				$('.quart_fill').animate({
					height : 47
				}, 2000, function() {
					$('.quart_fill').css('display', 'none');
					$('.quart_fill').css('height', '1px');
					$('#quart_pint2').css('display', 'none');
					$('#quart_pint1').css('display', 'block');
					$('#quart_pint1').animate({
						left : 100
					}, function() {
						$('#quart_pint1').animate({
							top : 30
						}, function() {

							$('#quart_pint3').animate({
								top : -100
							}, function() {
								$('#quart_pint3').animate({
									left : 70
								}, function() {
									$('#quart_pint3').css('display', 'none');
									$('#quart_pint2').css('display', 'block');
									$('.quart_fill').css('display', 'block');
									$('.quart_fill').animate({
										height : 47
									}, 2000, function() {
										$('.quart_fill').css('display', 'none');
										$('#quart_pint2').css('display', 'none');
										$('#quart_pint3').css('display', 'block');
										$('#quart_pint3').animate({
											left : 135
										}, function() {
											$('#quart_pint3').animate({
												top : 30
											}, function() {
												
												if(selLang == "english") {
			document.getElementById('animation').innerHTML = '<div class="quart_img"><img src="assets/images/quart_images/quart2.png" id="quart_text"><div class="quart_fill"></div><img src="assets/images/quart_images/pint.png" class="quar_img1" id="quart_pint3" /><img src="assets/images/quart_images/pint.png" class="quar_img1" id="quart_pint1" /></div>';
		} else {
			document.getElementById('animation').innerHTML = '<div class="quart_img"><img src="assets/images/quart_images/quart2_spn.png" id="quart_text"><div class="quart_fill"></div><img src="assets/images/quart_images/pint.png" class="quar_img1" id="quart_pint3" /><img src="assets/images/quart_images/pint.png" class="quar_img1" id="quart_pint1" /></div>';
		}
												$('.quart_fill').animate({
													height : 1
												}, 1600, function() {
													document.getElementById('animation').innerHTML = "";
													quart(0);
												});
											});
										});
									});
								});
							});
						});
					});
				});
			});
		});
	}
	if(cont < 2) {
		cont = parseInt(e) + 1;
		quart(cont);
	}
}

/* quart ends */


/*histogram Begins*/
function histogram(a) {

	if(a == 0) {
		englishTerm = "histogram";
		spanishTerm = "histograma";
		englishDef = "a bar graph in which each category is a range of values";
		spanishDef = "una gráfica de barras en la que cada categoría es un rango de valores";
		showTermDefinition();
	}
	//timer_1 = setTimeout("histogram_extd(" + a + ")", 1000)
}

function histogram_extd(e) {
	var count = parseInt(e);
	var div_id = document.getElementById("animation")
	count++;
	if(count == 1) {
		div_id.innerHTML = "<div class='histrogram_img'><img src='assets/images/histogram_images/154_histogram1.png'/></div>";
	} else if(count == 2) {
		div_id.innerHTML = "<div class='histrogram_img'><img src='assets/images/histogram_images/154_histogram2.png'/></div>";
	} else if(count == 3) {
		div_id.innerHTML = "<div class='histrogram_img'><img src='assets/images/histogram_images/154_histogram3.png'/></div>";
	} else if(count == 4) {
		div_id.innerHTML = "<div class='histrogram_img'><img src='assets/images/histogram_images/154_histogram4.png'/></div>";
	} else if(count == 5) {
		div_id.innerHTML = "<div class='histrogram_img'><img src='assets/images/histogram_images/154_histogram5.png'/></div>";
	}else {
		count = 0;
		div_id.innerHTML = "";
	}

	histogram(count);
}

/*histogram Ends*/

/*hour hand Begins*/
function hour_hand(a) {

	if(a == 0) {
		englishTerm = "hour hand";
		spanishTerm = "manecilla de las horas";
		englishDef = "the short hand on an analog clock";
		spanishDef = "la manecilla corta de un reloj analógico";
		showTermDefinition();
	}
	//timer_1 = setTimeout("hour_hand_extd(" + a + ")", 2000)
}

function hour_hand_extd(e) {
	var count = parseInt(e);
	var div_id = document.getElementById("animation");
	if(selLang == "english") {
		if(count == 0) {
			div_id.innerHTML =  "<div class='histrogram_img'><img src='assets/images/hour_hand_images/1.png'/></div>";
		} else if(count ==1) {
			div_id.innerHTML = "<div class='histrogram_img'><img src='assets/images/hour_hand_images/2.png'/></div>";
		} else {
			count = -1;
			div_id.innerHTML = "";
		}
	}else{
		if(count == 0) {
			div_id.innerHTML =  "<div class='histrogram_img'><img src='assets/images/hour_hand_images/012_analog_clock1sp.png'/></div>";
		} else if(count ==1) {
			div_id.innerHTML = "<div class='histrogram_img'><img src='assets/images/hour_hand_images/012_analog_clock2sp.png'/></div>";
		} else {
			count = -1;
			div_id.innerHTML = "";
		}
	}
	count++;
	hour_hand(count);
}

/*hour hand Ends*/



/* hundreds chart*/

function hundreds_chart(a) {
	if(a == 0) {
		englishTerm = "hundreds chart";
		spanishTerm = "tabla de números hasta el cien";
		englishDef = "the chart that shows the numbers 1–100 in order";
		spanishDef = "tabla que muestra los números del 1 al 100 en orden";
		showTermDefinition();
	}
	if(a != 11) {
		//timer_1 = setTimeout("hundreds_chart_extd(" + a + ")", 300);
	} else {
		//timer_1 = setTimeout("hundreds_chart_extd(" + a + ")", 1500);
	}
}

function hundreds_chart_extd(e) {
	var cnt = parseInt(e);
	var hundreds_chart_div = document.getElementById('animation');
	cnt++;
	if(cnt == 1) {
		hundreds_chart_div.innerHTML =  "<div class='hundreds_chart_img'><img src='assets/images/hundreds_chartimg/156_hundredschart1.png'/></div>";
	} else if(cnt == 2) {
		hundreds_chart_div.innerHTML =  "<div class='hundreds_chart_img'><img src='assets/images/hundreds_chartimg/156_hundredschart2.png'/></div>";
	} else if(cnt == 3) {
		hundreds_chart_div.innerHTML =  "<div class='hundreds_chart_img'><img src='assets/images/hundreds_chartimg/156_hundredschart3.png'/></div>";
	} else if(cnt == 4) {
		hundreds_chart_div.innerHTML =  "<div class='hundreds_chart_img'><img src='assets/images/hundreds_chartimg/156_hundredschart4.png'/></div>";
	} else if(cnt == 5) {
		hundreds_chart_div.innerHTML =  "<div class='hundreds_chart_img'><img src='assets/images/hundreds_chartimg/156_hundredschart5.png'/></div>";
	} else if(cnt == 6) {
		hundreds_chart_div.innerHTML =  "<div class='hundreds_chart_img'><img src='assets/images/hundreds_chartimg/156_hundredschart6.png'/></div>";
	} else if(cnt == 7) {
		hundreds_chart_div.innerHTML =  "<div class='hundreds_chart_img'><img src='assets/images/hundreds_chartimg/156_hundredschart7.png'/></div>";
	} else if(cnt == 8) {
		hundreds_chart_div.innerHTML =  "<div class='hundreds_chart_img'><img src='assets/images/hundreds_chartimg/156_hundredschart8.png'/></div>";
	} else if(cnt == 9) {
		hundreds_chart_div.innerHTML =  "<div class='hundreds_chart_img'><img src='assets/images/hundreds_chartimg/156_hundredschart9.png'/></div>";
	} else if(cnt == 10) {
		hundreds_chart_div.innerHTML =  "<div class='hundreds_chart_img'><img src='assets/images/hundreds_chartimg/156_hundredschart10.png'/></div>";
	} else if(cnt == 11) {
		hundreds_chart_div.innerHTML =  "<div class='hundreds_chart_img'><img src='assets/images/hundreds_chartimg/156_hundredschart11.png'/></div>";
	} else {
		cnt = 0;
		hundreds_chart_div.innerHTML = "";
	}
	hundreds_chart(cnt);
}
/* hundreds flat  starts  */

function hundreds_flat_extd(e) {
	var cont = parseInt(e);
	if(cont == 0) {
		document.getElementById('animation').innerHTML = '<div class="hundreds_flat_img"><img src="assets/images/hundreds_flat_images/1.png"  height="160px" />&nbsp;&nbsp;<img src="assets/images/hundreds_flat_images/2.png" class="fade1" height="160px"/>&nbsp;&nbsp;<img src="assets/images/hundreds_flat_images/3.png" class="fade1" 3="160px"/></div>';
	} else if(cont == 1) {
		$('.fade1').fadeOut('slow');
	}
	cont = parseInt(e) + 1;
	hundreds_flat(cont);
}

function hundreds_flat(a) {
	var a = parseInt(a);
	if(a == 0) {
		englishTerm = "hundreds flat";
		spanishTerm = "cuadrados de base diez";
		englishDef = "a square made up of 100 ones blocks used to represent 100";
		spanishDef = "un cuadrado formado por 100 bloques de unidades que se usa para representar 100 unidades";
		replayAnimation = 1;
		showTermDefinition();
	}
	//timer_1 = setTimeout("hundreds_flat_extd(" + a + ")", 1333);
}

/* hundreds flat ends  */



/* hypotenuse starts  */
function hypotenuse_extd(e) {
	var count = parseInt(e);
	var div_id = document.getElementById("animation");
	
		if(count == 0) {
			div_id.innerHTML =  "<div class='hypotenuse_img'><img src='assets/images/hypotenuse_images/159_hypotenuse1.png'/></div>";
		} else if(count ==1) {
			if(selLang == "english") {
				div_id.innerHTML = "<div class='hypotenuse_img'><img src='assets/images/hypotenuse_images/159_hypotenuse2.png'/></div>";
			}else{
				div_id.innerHTML = "<div class='hypotenuse_img'><img src='assets/images/hypotenuse_images/159_hypotenusesp2.png'/></div>";
			}
		}  else {
			document.getElementById('animation').innerHTML = "";
			e = -1;
		}
		
	count = parseInt(e) + 1;
	hypotenuse(count);
}

function hypotenuse(a) {
	var a = parseInt(a);
	if(a == 0) {
		englishTerm = "hypotenuse";
		spanishTerm = "hipotenusa";
		englishDef = "the side opposite the right angle in a right triangle; the longest side of a right triangle";
		spanishDef = "el lado opuesto al ángulo recto de un triángulo rectángulo; el lado más largo de un triángulo rectángulo";
		showTermDefinition();
	}
	//timer_1 = setTimeout("hypotenuse_extd(" + a + ")", 1333);
}

/* hypotenuse ends  */

/* hundredth starts  */
function hundredth_extd(e) {
	var display = new Array();
	var count = parseInt(e);
	var hundredth_id = document.getElementById("animation");
	if(count == 0) {
		hundredth_id.innerHTML =  "<div class='hundredth_img'><img src='assets/images/hundredth_images/158_hundredth2.png'/></div>";
	} else if(count ==1) {
		hundredth_id.innerHTML = "<div class='hundredth_img'><img src='assets/images/hundredth_images/1.png'/></div>";
	}  else {
		e=-1;
		hundredth_id.innerHTML = "";
	}
	count = parseInt(e) + 1;
	hundredth(count);
}

function hundredth(a) {
	var a = parseInt(a);
	if(a == 0) {
		englishTerm = "hundredth";
		spanishTerm = "centésimo";
		englishDef = "one of 100 equal parts of a whole";
		spanishDef = "una de 100 partes iguales de un entero";
		showTermDefinition();
	}
	/*if(a == 0)
		//timer_1 = setTimeout("hundredth_extd(" + a + ")", 800);
	else
		//timer_1 = setTimeout("hundredth_extd(" + a + ")", 1333);*/
}

/* hundredth ends  */
/*input-output table*/
function input_output_table(a) {
	if(a == 0) {
		englishTerm = "input-output table";
		spanishTerm = "tabla de entradas y salidas";
		englishDef = "a table that shows how an input value is paired with an output value";
		spanishDef = "una tabla que muestra cómo un valor de entrada corresponde con un valor de salida";
		showTermDefinition();
	}
	//timer_1 = setTimeout("input_output_table_extd(" + a + ")", 1200);

}

function input_output_table_extd(e) {
	var d = parseInt(e);
	if(e == 0) {
		document.getElementById('animation').innerHTML ="<div class='input_output_table'><img src='assets/images/input-output-table/167_input-output-table1.png'/></div>";
	} else if(e == 1) {
		document.getElementById('animation').innerHTML = "<div class='input_output_table'><img src='assets/images/input-output-table/167_input-output-table2.png'/></div>";
	} else if(e == 2) {
		document.getElementById('animation').innerHTML = "<div class='input_output_table'><img src='assets/images/input-output-table/167_input-output-table3.png'/></div>";
	} else if(e == 3) {
		document.getElementById('animation').innerHTML = "<div class='input_output_table'><img src='assets/images/input-output-table/167_input-output-table4.png'/></div>";
	} else if(e == 4) {
		document.getElementById('animation').innerHTML = "<div class='input_output_table'><img src='assets/images/input-output-table/167_input-output-table5.png'/></div>";
	} else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	d = parseInt(e) + 1;

	input_output_table(d);
}

/*end input-output table*/
/*improper_fraction*/
function improper_fraction(a) {
	if(a == 0) {
		englishTerm = "improper fraction";
		spanishTerm = "fracción impropia";
		englishDef = "any fraction in which the numerator is greater than or equal to the denominator";
		spanishDef = "cualquier fracción en la que el numerador es mayor o igual que el denominador";
		showTermDefinition();
	}
	//timer_1 = setTimeout("improper_fraction_extd(" + a + ")", 1000);

}

function improper_fraction_extd(e) {
	var d = parseInt(e);
	if(e == 0) {
		document.getElementById('animation').innerHTML ="<div class='improper_fraction'><img src='assets/images/improper_fraction/161_improper-fraction1.png'/></div>";
	} else if(e == 1) {
		document.getElementById('animation').innerHTML = "<div class='improper_fraction'><img src='assets/images/improper_fraction/161_improper-fraction2.png'/></div>";
	} else if(e == 2) {
		document.getElementById('animation').innerHTML = "<div class='improper_fraction'><img src='assets/images/improper_fraction/161_improper-fraction3.png'/></div>";
	} else if(e == 3) {
		document.getElementById('animation').innerHTML = "<div class='improper_fraction'><img src='assets/images/improper_fraction/161_improper-fraction4.png'/></div>";
	} else if(e == 4) {
		document.getElementById('animation').innerHTML = "<div class='improper_fraction'><img src='assets/images/improper_fraction/161_improper-fraction5.png'/></div>";
	}else if(e == 5) {
		document.getElementById('animation').innerHTML = "<div class='improper_fraction'><img src='assets/images/improper_fraction/161_improper-fraction6.png'/></div>";
	} else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	d = parseInt(e) + 1;
	improper_fraction(d);
}

/*end improper_fraction*/
/*202_meter_stick*/
function meter_stick(a) {
	if(a == 0) {
		englishTerm = "meter stick";
		spanishTerm = "barra de un metro";
		englishDef = "a measuring tool marked in centimeters that is 1 meter long";
		spanishDef = "una herramienta de medida marcada en centímetros que mide 1 metro de largo";
		showTermDefinition();
	}
	//timer_1 = setTimeout("meter_stick_extd(" + a + ")", 2000);
}

function meter_stick_extd(e) {
	var d = parseInt(e);
	if(e == 0) {
		document.getElementById('animation').innerHTML ="<div class='meter_stick'><img src='assets/images/meter_images/202_meter-stick1.png'/></div>";
	} else if(e == 1) {
		document.getElementById('animation').innerHTML = "<div class='meter_stick'><img src='assets/images/meter_images/202_meter-stick2.png'/></div>";
	} else if(e == 2) {
		document.getElementById('animation').innerHTML = "<div class='meter_stick'><img src='assets/images/meter_images/202_meter-stick3.png'/></div>";
	} else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	d = parseInt(e) + 1;

	meter_stick(d);
}

/*202_meter_stick*/
/*203_metric_unit*/
function metric_units(a) {
	if(a == 0) {
		englishTerm = "metric units";
		spanishTerm = "unidades métricas";
		englishDef = "the units of measure based on the metric system, such as liter, meter, and gram";
		spanishDef = "las unidades de medida basadas en el sistema métrico, como el litro, el metro y el gramo";
		showTermDefinition();
	}
	//timer_1 = setTimeout("metric_units_extd(" + a + ")", 2000);
}

function metric_units_extd(e) {
	var d = parseInt(e);
	if(e == 0) {
		document.getElementById('animation').innerHTML ="<img src='assets/images/metric_unit_img/203_metricunits1.png'/>";
	} else if(e == 1) {
		document.getElementById('animation').innerHTML = "<img src='assets/images/metric_unit_img/203_metricunits2.png'/>";
	} else if(e == 2) {
		document.getElementById('animation').innerHTML = "<img src='assets/images/metric_unit_img/142_gram.png'/>";
	} else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	d = parseInt(e) + 1;

	metric_units(d);
}

/*end 203_metric_unit*/






/*204_milliliter*/
function milliliter(a) {
	if(a == 0) {
		englishTerm = "milliliter";
		spanishTerm = "mililitro";
		englishDef = "a metric unit that measures capacity";
		spanishDef = " una unidad métrica que mide la capacidad";
		showTermDefinition();
	}
	//timer_1 = setTimeout("milliliter_extd(" + a + ")", 3000);
}

function milliliter_extd(e) {
	var d = parseInt(e);
	if(e == 0) {
		document.getElementById('animation').innerHTML = "<div class='milliliter_img'><img src='assets/images/mililiter_img/204_milliliter1.png'/></div>";
	} else if(e == 1) {
				document.getElementById('animation').innerHTML = "<div class='milliliter_img'><img src='assets/images/mililiter_img/204_milliliter2.png'/></div>";
	} else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	d = parseInt(e) + 1;

	milliliter(d);
}

/*end 204_milliliter*/

/*month*/
function month(a) {
	if(a == 0) {
		englishTerm = "month";
		spanishTerm = "mes";
		englishDef = "a unit for measuring time";
		spanishDef = "unidad para medir el tiempo";
		showTermDefinition();
	}
		//timer_1 = setTimeout("month_extd(" + a + ")", 1500);
}

function month_extd(e) {
	var d = parseInt(e);
	if(e == 0) {
				document.getElementById('animation').innerHTML = "<div class='month_img'><img src='assets/images/month_img/1.png'/></div>";
	}else if(e == 1) {
				document.getElementById('animation').innerHTML = "<div class='month_img'><img src='assets/images/month_img/210_month2.png'/></div>";
	}else if(e == 2) {
				document.getElementById('animation').innerHTML = "<div class='month_img'><img src='assets/images/month_img/210_month3.png'/></div>";
	}else if(e == 3) {
				document.getElementById('animation').innerHTML = "<div class='month_img'><img src='assets/images/month_img/210_month4.png'/></div>";
	}else if(e == 4) {
				document.getElementById('animation').innerHTML = "<div class='month_img'><img src='assets/images/month_img/210_month5.png'/></div>";
	}else if(e == 5) {
				document.getElementById('animation').innerHTML = "<div class='month_img'><img src='assets/images/month_img/210_month6.png'/></div>";
	}else if(e == 6) {
				document.getElementById('animation').innerHTML = "<div class='month_img'><img src='assets/images/month_img/210_month7.png'/></div>";
	}else if(e == 7) {
				document.getElementById('animation').innerHTML = "<div class='month_img'><img src='assets/images/month_img/210_month8.png'/></div>";
	}else if(e == 8) {
				document.getElementById('animation').innerHTML = "<div class='month_img'><img src='assets/images/month_img/210_month9.png'/></div>";
	}else if(e == 9) {
				document.getElementById('animation').innerHTML = "<div class='month_img'><img src='assets/images/month_img/210_month10.png'/></div>";
	} else if(e == 10) {
				document.getElementById('animation').innerHTML = "<div class='month_img'><img src='assets/images/month_img/210_month11.png'/></div>";
	}else if(e == 11) {
				document.getElementById('animation').innerHTML = "<div class='month_img'><img src='assets/images/month_img/210_month12.png'/></div>";
	}else if(e == 12) {
				document.getElementById('animation').innerHTML = "<div class='month_img'><img src='assets/images/month_img/210_month13.png'/></div>";
	}else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	d = parseInt(e) + 1;

	month(d);
}

/*end month*/

/*mode*/
function mode(a) {
	if(a == 0) {
		englishTerm = "mode";
		spanishTerm = "moda";
		englishDef = "the value or values that occur most often in a data set";
		spanishDef = "el valor o los valores más comunes en un conjunto de datos";
		showTermDefinition();
	}
	//timer_1 = setTimeout("mode_extd(" + a + ")", 1300);

}

function mode_extd(e) {
	var d = parseInt(e);
	if(e == 0) {
				document.getElementById('animation').innerHTML = "<div class='mode_img'><img src='assets/images/mode/209_mode1.png'/></div>";
	}else if(e == 1) {
				document.getElementById('animation').innerHTML = "<div class='mode_img'><img src='assets/images/mode/209_mode2.png'/></div>";
	}else if(e == 2) {
				document.getElementById('animation').innerHTML = "<div class='mode_img'><img src='assets/images/mode/209_mode3.png'/></div>";
	}else if(e == 3) {
				document.getElementById('animation').innerHTML = "<div class='mode_img'><img src='assets/images/mode/209_mode4.png'/></div>";
	}else if(e == 4) {
				document.getElementById('animation').innerHTML = "<div class='mode_img1'><img src='assets/images/mode/209_mode5.png'/></div>";
	}else if(e == 5) {
				document.getElementById('animation').innerHTML = "<div class='mode_img1'><img src='assets/images/mode/209_mode6.png'/></div>";
	}else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	d = parseInt(e) + 1;

	mode(d);
}

/*end mode*/

/* multiplication starts*/
function multiplication(a) {
	if(a == 0) {
		englishTerm = "multiplication";
		spanishTerm = "multiplicación";
		englishDef = "an operation that gives the total number when equal groups are combined";
		spanishDef = "una operación que da el número total cuando se combinan grupos iguales";
		showTermDefinition();
	}
	//timer_1 = setTimeout("multiplication_extd(" + a + ")", 2000);
}

function multiplication_extd(e) {
	var cont = parseInt(e);
	if(e == 0) {
				document.getElementById('animation').innerHTML = "<div class='multiplication_img'><img src='assets/images/multiplication_images/215_multiplication1.png'/></div>";
	}else if(e == 1) {
				document.getElementById('animation').innerHTML = "<div class='multiplication_img'><img src='assets/images/multiplication_images/215_multiplication2.png'/></div>";
	}else if(e == 2) {
				document.getElementById('animation').innerHTML = "<div class='multiplication_img'><img src='assets/images/multiplication_images/215_multiplication3.png'/></div>";
	}else if(e == 3) {
				document.getElementById('animation').innerHTML = "<div class='multiplication_img'><img src='assets/images/multiplication_images/215_multiplication4.png'/></div>";
	}else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	cont = parseInt(e) + 1;
	multiplication(cont);
}

/* multiplication ends */


/*216_Multiplication Property of One*/
function multiplication_property_of_one(a) {
	if(a == 0) {
		englishTerm = "Multiplication Property of One";
		spanishTerm = "Propiedad del uno de la multiplicación";
		englishDef = "any number multiplied by 1 is the number itself";
		spanishDef = "cualquier número multiplicado por 1 es igual al mismo número";
		showTermDefinition();
	}
	//timer_1 = setTimeout("Multiplication_Property_of_One_extd(" + a + ")", 1000);

}

function Multiplication_Property_of_One_extd(e) {
	var d = parseInt(e);
	if(e == 0) {
				document.getElementById('animation').innerHTML = "<div class='Multiplication_Prop_One'><img src='assets/images/multiplication_prop_one/1.png'/></div>";
	} else if(e == 1) {
				document.getElementById('animation').innerHTML = "<div class='Multiplication_Prop_One'><img src='assets/images/multiplication_prop_one/2.png'/></div>";
	} else if(e == 2) {
				document.getElementById('animation').innerHTML = "<div class='Multiplication_Prop_One'><img src='assets/images/multiplication_prop_one/3.png'/></div>";
	} else if(e == 3) {
				document.getElementById('animation').innerHTML = "<div class='Multiplication_Prop_One'><img src='assets/images/multiplication_prop_one/4.png'/></div>";
	} else if(e == 4) {
				document.getElementById('animation').innerHTML = "<div class='Multiplication_Prop_One'><img src='assets/images/multiplication_prop_one/5.png'/></div>";
	} else if(e == 5) {
				document.getElementById('animation').innerHTML = "<div class='Multiplication_Prop_One'><img src='assets/images/multiplication_prop_one/6.png'/></div>";
	} else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	d = parseInt(e) + 1;

	multiplication_property_of_one(d);
}

/*end 216_Multiplication Property of One*/
/*217_Multiplication_Property_of_Zero*/
function multiplication_property_of_zero(a) {
	if(a == 0) {
		englishTerm = "Multiplication Property of Zero";
		spanishTerm = "Propiedad del cero de la multiplicación";
		englishDef = "any number multiplied by 0 is 0";
		spanishDef = "cualquier número multiplicado por 0 es igual a 0";
		showTermDefinition();
	}
	if(a <= 5) {
		//timer_1 = setTimeout("Multiplication_Property_of_Zero_extd(" + a + ")", 1000);
	} else {
		//timer_1 = setTimeout("Multiplication_Property_of_Zero_extd(" + a + ")", 2500);
	}

}

function Multiplication_Property_of_Zero_extd(e) {
	var d = parseInt(e);
		if(e == 0) {
				document.getElementById('animation').innerHTML = "<div class='Multiplication_Prop_Zero'><img src='assets/images/multiplication_prop_zero/1.png'/></div>";
	} else if(e == 1) {
				document.getElementById('animation').innerHTML = "<div class='Multiplication_Prop_Zero'><img src='assets/images/multiplication_prop_zero/2.png'/></div>";
	} else if(e == 2) {
				document.getElementById('animation').innerHTML = "<div class='Multiplication_Prop_Zero'><img src='assets/images/multiplication_prop_zero/3.png'/></div>";
	} else if(e == 3) {
				document.getElementById('animation').innerHTML = "<div class='Multiplication_Prop_Zero'><img src='assets/images/multiplication_prop_zero/4.png'/></div>";
	} else if(e == 4) {
				document.getElementById('animation').innerHTML = "<div class='Multiplication_Prop_Zero'><img src='assets/images/multiplication_prop_zero/5.png'/></div>";
	} else if(e == 5) {
				document.getElementById('animation').innerHTML = "<div class='Multiplication_Prop_Zero'><img src='assets/images/multiplication_prop_zero/6.png'/></div>";
	} else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	d = parseInt(e) + 1;

	multiplication_property_of_zero(d);
}

/*end Multiplication_Property_of_Zero*/

/*opposite_angles_of_a_parallelogram*/
function opposite_angles_of_a_parallelogram(a) {
	if(a == 0) {
		englishTerm = "opposite angles of a parallelogram";
		spanishTerm = "ángulos opuestos de un paralelogramo";
		englishDef = "nonconsecutive angles of a parallelogram";
		spanishDef = "ángulos no consecutivos de un paralelogramo";
		showTermDefinition();
	}
	//timer_1 = setTimeout("opposite_angles_of_a_parallelogram_extd(" + a + ")", 2500);
}

function opposite_angles_of_a_parallelogram_extd(e) {
	var d = parseInt(e);
	if(e == 0) {
		document.getElementById('animation').innerHTML = "<div class='opp_parall'><img src='assets/images/opposite_angles_parallelogram/1.png'/></div>";
	} else if(e == 1) {
		document.getElementById('animation').innerHTML = "<div class='opp_parall'><img src='assets/images/opposite_angles_parallelogram/2.png'/></div>";
	} else if(e == 2) {
		document.getElementById('animation').innerHTML = "<div class='opp_parall'><img src='assets/images/opposite_angles_parallelogram/3.png'/></div>";
	} else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	d = parseInt(e) + 1;

	opposite_angles_of_a_parallelogram(d);
}

/*end opposite_angles_of_a_parallelogram*/
/*234_operations*/
function operations(a) {
	if(a == 0) {
		englishTerm = "operations";
		spanishTerm = "operaciones";
		englishDef = "addition, subtraction, multiplication, and division";
		spanishDef = "suma, resta, multiplicación y división";
		showTermDefinition();
	}
	//timer_1 = setTimeout("operations_extd(" + a + ")", 1000);
}

function operations_extd(e) {
	var d = parseInt(e);
	if(e == 0) {
		document.getElementById('animation').innerHTML = "<div class='operations_img'><img src='assets/images/operations/234_operatons1.png'/></div>";
	} else if(e == 1) {
		document.getElementById('animation').innerHTML = "<div class='operations_img'><img src='assets/images/operations/234_operatons2.png'/></div>";
	} else if(e == 2) {
		document.getElementById('animation').innerHTML = "<div class='operations_img'><img src='assets/images/operations/234_operatons3.png'/></div>";
	} else if(e == 3) {
		document.getElementById('animation').innerHTML = "<div class='operations_img'><img src='assets/images/operations/234_operatons4.png'/></div>";
	} else {
		e = -1;
		document.getElementById('animation').innerHTML = "";
	}
	d = parseInt(e) + 1;
	operations(d);
}

/*end 234_operations*/




/* multiply starts*/
function multiply(a) {
	if(a == 0) {
		englishTerm = "multiply";
		spanishTerm = "multiplicar";
		englishDef = "to perform repeated addition of equal-sized groups";
		spanishDef = "realizar sumas repetidas de grupos de igual tamaño";
		showTermDefinition();
	}
	//if(a == 2)
	//	//timer_1 = setTimeout("multiply_extd(" + a + ")", 3000);
	//else
		//timer_1 = setTimeout("multiply_extd(" + a + ")", 1500);
}
function multiply_extd(e) {
	var cont = parseInt(e);
	if(e == 0) {
		document.getElementById('animation').innerHTML = "<div class='multiply_img'><img src='assets/images/multiply/218_multiply1.png'/></div>";
	}
	else if(e == 1) {
		document.getElementById('animation').innerHTML = "<div class='multiply_img'><img src='assets/images/multiply/218_multiply2.png'/></div>";
	}
	else if(e == 2) {
		document.getElementById('animation').innerHTML = "<div class='multiply_img'><img src='assets/images/multiply/218_multiply3.png'/></div>";
	}else if(e == 3) {
		document.getElementById('animation').innerHTML = "<div class='multiply_img'><img src='assets/images/multiply/218_multiply4.png'/></div>";
	}
	else {
		document.getElementById('animation').innerHTML = "";
		e = -1;
	}
	cont = parseInt(e) + 1;
	multiply(cont);
}
/* multiply ends */

/* ones block starts*/
function ones_block(a) {
	if(a == 0) {
		englishTerm = "ones block";
		spanishTerm = "bloque de unidades";
		englishDef = "a single cube used to represent 1";
		spanishDef = "un cubo que se usa para representar 1";
		replayAnimation = 1;
		showTermDefinition();
	}
	//timer_1 = setTimeout("ones_block_extd(" + a + ")", 2000);
}

function ones_block_extd(e) {
	var cont = parseInt(e);
	if(cont == 0)
		document.getElementById('animation').innerHTML = '<div class="ones_block_img"><img src="assets/images/ones_block_images/pieces1.png" id="hundreds_block" class="fade1" />&nbsp;&nbsp;<img src="assets/images/ones_block_images/pieces2.png" id="tens_block" class="fade1"/>&nbsp;&nbsp;<img src="assets/images/ones_block_images/pieces3.png" id="ones_block"/></div>';
	else if(cont == 1)
	//return false;
		$('.fade1').fadeOut('slow');
	cont = parseInt(e) + 1;
	ones_block(cont);
}

/* ones block ends */




/* like terms */
function like_terms(a) {
	if(a == 0) {
		englishTerm = "like terms";
		spanishTerm = "términos semejantes";
		englishDef = "two or more terms that contain the same variable(s)";
		spanishDef = "dos o más términos que contienen la(s) misma(s) variable(s)";
		showTermDefinition();
	}
	//timer_1 = setTimeout("like_terms_extd(" + a + ")", 1000)
}

function like_terms_extd(e) {
	var cnt = parseInt(e);
	var like_terms_div = document.getElementById('animation');
	cnt++;
	if(cnt == 1) {
		like_terms_div.innerHTML ="<div class='like_terms_img'><img src='assets/images/like_term_image/1.png'/></div>";
	} else if(cnt == 2) {
		like_terms_div.innerHTML ="<div class='like_terms_img'><img src='assets/images/like_term_image/2.png'/></div>";
	} else if(cnt == 3) {
		like_terms_div.innerHTML ="<div class='like_terms_img'><img src='assets/images/like_term_image/3.png'/></div>";
	} else if(cnt == 4) {
		like_terms_div.innerHTML ="<div class='like_terms_img'><img src='assets/images/like_term_image/4.png'/></div>";
		
	} else {
		cnt = 0;
		like_terms_div.innerHTML = '';
	}
	like_terms(cnt);
}

/* negative_correlation starts*/
function negative_correlation(a) {

	if(a == 0) {
		englishTerm = "negative correlation";
		spanishTerm = "correlación negativa";
		englishDef = "the trend of values decreasing as related values increase";
		spanishDef = "la tendencia de valores que disminuyen cuando los valores relacionados aumentan";
		showTermDefinition();
	}
	/*if(a == 4)
		//timer_1 = setTimeout("negative_correlation_extd(" + a + ")", 3000);
	else
		//timer_1 = setTimeout("negative_correlation_extd(" + a + ")", 2000);*/
}

function negative_correlation_extd(e) {
	var cont = parseInt(e);
	if(cont == 0) {	
			document.getElementById('animation').innerHTML = '<div class="negative_intergers_img"><img src="assets/images/negative_correlation_images/219_negative-correlation1.png" class="corelation_1" /></div>';
	} else if(cont==1){
		document.getElementById('animation').innerHTML = '<div class="negative_intergers_img"><img src="assets/images/negative_correlation_images/219_negative-correlation1.png" class="corelation_1" /><img src="assets/images/negative_correlation_images/219_negative-correlation4.png" class="corelation_harrow" /><img src="assets/images/negative_correlation_images/219_negative-correlation3.png" class="corelation_varrow" /></div>';
	}else if(cont ==2) {
			$('.corelation_harrow').animate({
				width : '188px'
			});
			$('.corelation_varrow').animate({
				height : '93px'
			});
		
	} else if(cont==3){
		document.getElementById('animation').innerHTML = '<div class="negative_intergers_img"><img src="assets/images/negative_correlation_images/219_negative-correlation2.png" class="corelation_1" /><img src="assets/images/negative_correlation_images/219_negative-correlation4.png" class="corelation_harrow1" /><img src="assets/images/negative_correlation_images/219_negative-correlation3.png" class="corelation_varrow1" /></div>';
	}
	else
	{
	
		document.getElementById('animation').innerHTML = '';
		cont=-1;
		}
	cont = parseInt(cont) + 1;
	negative_correlation(cont);
}
/* negative_correlation ends */
function place_value_chart(a){
	if(a == 0) {
		englishTerm = "place value chart";
		spanishTerm = "tabla de valor posicional";
		englishDef = "a chart that shows the value of each digit in a number";
		spanishDef = "una tabla que muestra el valor de cada dígito de un número";
		showTermDefinition();
	}
	//timer_1 = setTimeout("place_value_chart_extd(" + a + ")", 2000);
}
function place_value_chart_extd(e){
var cnt=parseInt(e);
cnt++;
	if(cnt<=5){
		document.getElementById('animation').innerHTML ="<img src='assets/images/place_value_chart/263_place-value-chart"+cnt+".png' />";
	}else{
		cnt=0;document.getElementById('animation').innerHTML ="";
	}
	place_value_chart(cnt);
}
function multiple_of_a_number(a){
	if(a == 0) {
		englishTerm = "multiple of a number";
		spanishTerm = "tabla de valor posicional";
		englishDef = "the product of a given number and any whole number greater than 0";
		spanishDef = "una tabla que muestra el valor de cada dígito de un número";
		showTermDefinition();
	}
	//timer_1 = setTimeout("multiple_of_a_number_extd(" + a + ")", 1200);
}
function multiple_of_a_number_extd(e){
	var cnt=parseInt(e);
	cnt++;
	if(cnt<=17){
		document.getElementById('animation').innerHTML ="<img src='assets/images/multiple_of_num/263_place-value-chart"+cnt+".png'/>";
	}else{
	cnt=0;document.getElementById('animation').innerHTML ="";
	}
	multiple_of_a_number(cnt);
}