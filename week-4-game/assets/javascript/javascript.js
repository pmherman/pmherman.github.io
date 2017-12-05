

	//Heroes
	var flash = {name: "Flash", health: "250", strength: "3", counter: "3"};
	var arrow = {name: "Green Arrow", health: "200", strength: "2", counter: "2"};
	var superGirl = {name: "Supergirl", health: "400", strength: "5", counter: "5"};
	var atom = {name: "Atom", health: "275", strength: "4", counter: "4"};

	//Villians
	var reverseFlash = {name: "Reverse Flash", health: "400", strength: "20", counter: "30"};
	var brainiac = {name: "Brainiac", health: "175", strength: "12", counter: "20"};
	var damienDarhk = {name: "Damien Darhk", health: "550", strength: "30", counter: "26"};
	var deathStroke = {name: "Death Stroke", health: "310", strength: "24", counter: "20"};

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
		    	userSelection.strength = 3;
		    } else if (userSelection == arrow) {
		    	userSelection.strength = 2;
		    } else if (userSelection == superGirl) {
		    	userSelection.strength = 5;
		    } else if (userSelection == atom) {
		    	userSelection.strength = 4;
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

	location.reload();
});

$("#newGame").on("click", function() {

	location.reload();
})

