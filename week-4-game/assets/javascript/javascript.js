

	//Heroes
	var flash = {name: "Flash", health: "300", strength: "10", counter: "8"};
	var arrow = {name: "Green Arrow", health: "275", strength: "6", counter: "5"};
	var superGirl = {name: "Supergirl", health: "450", strength: "15", counter: "13"};
	var atom = {name: "Atom", health: "310", strength: "12", counter: "10"};

	//Villians
	var reverseFlash = {name: "Reverse Flash", health: "400", strength: "10", counter: "8"};
	var brainiac = {name: "Brainiac", health: "175", strength: "6", counter: "5"};
	var damienDarhk = {name: "Damien Darhk", health: "550", strength: "15", counter: "13"};
	var deathStroke = {name: "Death Stroke", health: "310", strength: "12", counter: "10"};

	var userSelection = {name: "none"};
	var oppSelection = {name: "none"};

function runGame() {

	$("#flashStats").append("Health: " + flash.health + "<br>Strength: " + flash.strength + "<br>Counter Attack: " + flash.counter);
	$("#arrowStats").append("Health: " + arrow.health + "<br>Strength: " + arrow.strength + "<br>Counter Attack: " + arrow.counter);
	$("#superGirlStats").append("Health: " + superGirl.health + "<br>Strength: " + superGirl.strength + "<br> Counter Attack: " + superGirl.counter);
	$("#atomStats").append("Health: " + atom.health + "<br>Strength: " + atom.strength + "<br> Counter Attack:" + atom.counter);

	$("#reverseFlashStats").append("Health: " + reverseFlash.health + "<br>Strength: " + reverseFlash.strength + "<br> Counter Attack: " + reverseFlash.counter);
	$("#brainiacStats").append("Health: " + brainiac.health + "<br>Strength: " + brainiac.strength + "<br> Counter Attack: " + brainiac.counter);
	$("#damienDarhkStats").append("Health: " + damienDarhk.health + "<br>Strength: " + damienDarhk.strength + "<br> Counter Attack: " + damienDarhk.counter);
	$("#deathStrokeStats").append("Health: " + deathStroke.health + "<br>Strength: " + deathStroke.strength + "<br> Counter Attack: " + deathStroke.counter);

	$(".curFighter").html("Health: " + userSelection.health + "<br>Strength: " + userSelection.strength + "<br>Counter Attack: " + userSelection.counter);	
	$(".curStatsOpp").html("Health: " + oppSelection.health + "<br>Strength: " + oppSelection.strength + "<br>Counter Attack: " + oppSelection.counter);


	$("#flash").on("click", function() {
		$("#flashStats").addClass("curFighter");
		$("#flash").addClass("currentHero");
		$("#flash").appendTo("#userSelection");
		$(".curFighter").css("display", "inline");
		userSelection = flash;
	});

	$("#arrow").on("click", function(){
		$("#arrowStats").addClass("curFighter");
		$("#arrow").appendTo("#userSelection");
		$(".curFighter").css("display", "inline");
		userSelection = arrow;		
	});

	$("#superGirl").on("click", function(){
		$("#superGirlStats").addClass("curFighter");	
		$("#superGirl").appendTo("#userSelection");
		$(".curFighter").css("display", "inline");
		userSelection = superGirl;
	});

	$("#theAtom").on("click", function(){
		$("#atomStats").addClass("curFighter");	
		$("#theAtom").appendTo("#userSelection");
		$(".curFighter").css("display", "inline");
		userSelection = atom;
	});

	$("#reverseFlash").on("click", function(){
		$("#reverseFlash").addClass("currentEnemy");
		$("#reverseFlashStats").addClass("curStatsOpp");	
		$("#reverseFlash").appendTo("#oppSelection");
		oppSelection = reverseFlash;
		$(".curStatsOpp").css("display", "inline");	
	});

	$("#deathStroke").on("click", function(){
		$("#deathStroke").addClass("currentEnemy");	
		$("#deathStrokeStats").addClass("curStatsOpp");	
		oppSelection = deathStroke;	
		$("#deathStroke").appendTo("#oppSelection");
		$(".curStatsOpp").css("display", "inline");	
	});

	$("#brainiac").on("click", function(){
		$("#brainiac").addClass("currentEnemy");
		$("#brainiacStats").addClass("curStatsOpp");
		oppSelection = brainiac;
		$("#brainiac").appendTo("#oppSelection");
		$(".curStatsOpp").css("display", "inline");
	});

	$("#damienDarhk").on("click", function(){
		$("#damienDarhk").addClass("currentEnemy");
		$("#damienDarhkStats").addClass("curStatsOpp");
		oppSelection = damienDarhk;
		$("#damienDarhk").appendTo("#oppSelection");
		$(".curStatsOpp").css("display", "inline");
	});

	$("#attack").on("click", function(){
			oppSelection.health = oppSelection.health - userSelection.strength;
			userSelection.health = userSelection.health - userSelection.counter;
			userSelection.strength = userSelection.strength * 2;
			$(".curFighter").html("Health: " + userSelection.health + "<br>Strength: " + userSelection.strength + "<br>Counter Attack: " + userSelection.counter);
			$(".curStatsOpp").html("Health: " + oppSelection.health + "<br>Strength: " + oppSelection.strength + "<br>Counter Attack: " + oppSelection.counter);

			console.log(flash);			

		if ( oppSelection.health < 0) {
			$(".currentEnemy").appendTo("#villians");
			$(".currentEnemy").addClass("dead");
		    $(".curStatsOpp").css("display", "none");
		    $(".curStatsOpp").removeClass("curStatsOpp");
		    $(".currentEnemy").removeClass("currentEnemy");
		    if (userSelection == flash) {
		    	userSelection.strength = 10;
		    } else if (userSelection == arrow) {
		    	userSelection.strength = 6;
		    } else if (userSelection == superGirl) {
		    	userSelection.strength = 15;
		    } else if (userSelection == atom) {
		    	userSelection.strength = 12;
		    }
		}
		if (damienDarhk.health < "0" && brainiac.health < "0" && deathStroke.health < "0" && reverseFlash.health < "0" ) {
			$("#heroes").css("display", "none");
			$("#villians").css("display", "none");
			$("#winAlert").css("display", "inline");
			$("#newGame").css("display", "inline");
			$("#reset").css("display", "none");
			$("#attack").css("display", "none");

		} else if (userSelection.health < "0") {
			$("#heroes").css("display", "none");
			$("#villians").css("display", "none");
			$(".currentHero").addClass("dead");
			$("#lossAlert").css("display", "inline");
			$("#newGame").css("display", "inline");
			$("#reset").css("display", "none");
			$("#attack").css("display", "none");
		}	
	});	
};
	
function newGame() {	
 	$("#flash").appendTo("#heroes");
	$("#arrow").appendTo("#heroes");
	$("#superGirl").appendTo("#heroes");
	$("#theAtom").appendTo("#heroes");
	$("#reverseFlash").appendTo("#villians");
	$("#deathStroke").appendTo("#villians");
	$("#brainiac").appendTo("#villians");
	$("#damienDarhk").appendTo("#villians");
	$("#heroes").css("display", "inline");
	$("#villians").css("display", "inline");	
	$(".dead").removeClass("dead");
	$(".currentHero").removeClass("currentHero");
	$(".curFighter").removeClass("curFighter");
	$(".currentEnemy").removeClass("currentEnemy");
	$(".curStatsOpp").removeClass("curStatsOpp");
	$(".stats").css("display", "none");
	
	
	$(".curFighter").html("Health: " + userSelection.health + "<br>Strength: " + userSelection.strength + "<br>Counter Attack: " + userSelection.counter);	
	$(".curStatsOpp").html("Health: " + oppSelection.health + "<br>Strength: " + oppSelection.strength + "<br>Counter Attack: " + oppSelection.counter);
	
	$("#winAlert").css("display", "none");
	$("#lossAlert").css("display", "none");
}
 
 runGame();

$("#reset").on("click", function() {

	$("#reset").css("display", "inline");
	$("#attack").css("display", "inline");	
	$("#newGame").css("display", "none");
	
	flash.health = 300;
	arrow.health = 275;
	superGirl.health = 450;
	atom.health = 310;

	reverseFlash.health = 100;
	brainiac.health = 175;
	deathStroke.health = 210
	damienDarhk.health = 510;
	
	newGame();
});

$("#newGame").on("click", function() {

	$("#reset").css("display", "inline");
	$("#attack").css("display", "inline");	
	$("#newGame").css("display", "none");

	flash.health = 300;
	arrow.health = 275;
	superGirl.health = 450;
	atom.health = 310;

	reverseFlash.health = 100;
	brainiac.health = 175;
	deathStroke.health = 210
	damienDarhk.health = 510;
	
	newGame();
})

