

	//Heroes

	var flash = {name: "Flash", health: 300, strength: 3, original: 3};
	var arrow = {name: "Green Arrow", health: 315, strength: 2, original: 2};
	var superGirl = {name: "Supergirl", health: 550, strength: 5, original: 5};
	var atom = {name: "Atom", health: 400, strength: 4, original: 4};

	//Villians
	var reverseFlash = {name: "Reverse Flash", health: 225, strength: 10, counter: 9};
	var brainiac = {name: "Brainiac", health: 175, strength: 6, counter: 10};
	var damienDarhk = {name: "Damien Darhk", health: 500, strength: 15, counter: 10};
	var deathStroke = {name: "Death Stroke", health: 250, strength: 12, counter: 8};

	var userSelection = {name: "none"};
	var oppSelection = {name: "none"};

function runGame() {

	$("#flashStats").append("Health: " + flash.health + "<br>Strength: " + flash.strength);
	$("#arrowStats").append("Health: " + arrow.health + "<br>Strength: " + arrow.strength);
	$("#superGirlStats").append("Health: " + superGirl.health + "<br>Strength: " + superGirl.strength);
	$("#atomStats").append("Health: " + atom.health + "<br>Strength: " + atom.strength);

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
		$("#heroes").css("display", "none");
	});

	$("#arrow").on("click", function(){
		$("#arrowStats").addClass("curFighter");
		$("#arrow").appendTo("#userSelection");
		$(".curFighter").css("display", "inline");
		userSelection = arrow;
		$("#heroes").css("display", "none");		
	});

	$("#superGirl").on("click", function(){
		$("#superGirlStats").addClass("curFighter");	
		$("#superGirl").appendTo("#userSelection");
		$(".curFighter").css("display", "inline");
		$("#heroes").css("display", "none");
		userSelection = superGirl;
	});

	$("#theAtom").on("click", function(){
		$("#atomStats").addClass("curFighter");	
		$("#theAtom").appendTo("#userSelection");
		$(".curFighter").css("display", "inline");
		$("#heroes").css("display", "none");
		userSelection = atom;
	});

	$("#reverseFlash").on("click", function(){
		$("#reverseFlash").addClass("currentEnemy");
		$("#reverseFlashStats").addClass("curStatsOpp");	
		$("#reverseFlash").appendTo("#oppSelection");
		oppSelection = reverseFlash;
		$(".curStatsOpp").css("display", "inline");	
		$("#villians").css("display", "none");		
	});

	$("#deathStroke").on("click", function(){
		$("#deathStroke").addClass("currentEnemy");	
		$("#deathStrokeStats").addClass("curStatsOpp");	
		oppSelection = deathStroke;	
		$("#deathStroke").appendTo("#oppSelection");
		$(".curStatsOpp").css("display", "inline");
		$("#villians").css("display", "none");			
	});

	$("#brainiac").on("click", function(){
		$("#brainiac").addClass("currentEnemy");
		$("#brainiacStats").addClass("curStatsOpp");
		oppSelection = brainiac;
		$("#brainiac").appendTo("#oppSelection");
		$(".curStatsOpp").css("display", "inline");
		$("#villians").css("display", "none");		
	});

	$("#damienDarhk").on("click", function(){
		$("#damienDarhk").addClass("currentEnemy");
		$("#damienDarhkStats").addClass("curStatsOpp");
		oppSelection = damienDarhk;
		$("#damienDarhk").appendTo("#oppSelection");
		$(".curStatsOpp").css("display", "inline");
		$("#villians").css("display", "none");		
	});

	$("#attack").on("click", function(){
			oppSelection.health = oppSelection.health - userSelection.strength;
			userSelection.health = userSelection.health - oppSelection.counter;
			userSelection.strength = userSelection.strength + userSelection.original;
			$(".curFighter").html("Health: " + userSelection.health + "<br>Strength: " + userSelection.strength);
			$(".curStatsOpp").html("Health: " + oppSelection.health + "<br>Strength: " + oppSelection.strength + "<br>Counter Attack: " + oppSelection.counter);

			console.log(userSelection);			

		if ( oppSelection.health < 0) {
			$(".currentEnemy").appendTo("#villians");
			$(".currentEnemy").addClass("dead");
		    $(".curStatsOpp").css("display", "none");
		    $(".curStatsOpp").removeClass("curStatsOpp");
		    $(".currentEnemy").removeClass("currentEnemy");
			$("#villians").css("display", "inline");		    
		}

		if (damienDarhk.health < "0" && brainiac.health < "0" && deathStroke.health < "0" && reverseFlash.health < "0" ) {
			$("#heroes").css("display", "none");
			$("#villians").css("display", "none");
			$("#winAlert").css("display", "inline");
			$("#newGame").css("display", "inline");
			$("#winAlert").html("Congratulations!! " + userSelection.name + " you have saved this city!!");
			$("#reset").css("display", "none");
			$("#attack").css("display", "none");

		} else if (userSelection.health < "0") {
			$("#heroes").css("display", "none");
			$("#villians").css("display", "none");
			$(".currentHero").addClass("dead");
			$("#lossAlert").css("display", "inline");
			$("#lossAlert").html("You died!! " + userSelection.name + " you have failed this city!!");		
			$("#newGame").css("display", "inline");
			$("#reset").css("display", "none");
			$("#attack").css("display", "none");
		}	
	});	
};
	
// function newGame() {	
//  	$("#flash").appendTo("#heroes");
// 	$("#arrow").appendTo("#heroes");
// 	$("#superGirl").appendTo("#heroes");
// 	$("#theAtom").appendTo("#heroes");
// 	$("#reverseFlash").appendTo("#villians");
// 	$("#deathStroke").appendTo("#villians");
// 	$("#brainiac").appendTo("#villians");
// 	$("#damienDarhk").appendTo("#villians");
// 	$("#heroes").css("display", "inline");
// 	$("#villians").css("display", "inline");	
// 	$(".dead").removeClass("dead");
// 	$(".currentHero").removeClass("currentHero");
// 	$(".curFighter").removeClass("curFighter");
// 	$(".currentEnemy").removeClass("currentEnemy");
// 	$(".curStatsOpp").removeClass("curStatsOpp");
// 	$(".stats").css("display", "none");
	
	
// 	$(".curFighter").html("Health: " + userSelection.health + "<br>Strength: " + userSelection.strength);	
// 	$(".curStatsOpp").html("Health: " + oppSelection.health + "<br>Strength: " + oppSelection.strength + "<br>Counter Attack: " + oppSelection.counter);
	
// 	$("#winAlert").css("display", "none");
// 	$("#lossAlert").css("display", "none");
// }
 
 runGame();

$("#reset").on("click", function() {

	location.reload();
});

$("#newGame").on("click", function() {

	location.reload();
})

