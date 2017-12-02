
//Heroes
var flash = {health: "100", strength: "10"};
var arrow = {health: "75", strength: "6"};
var superGirl = {health: "150", strength: "15"};
var atom = {health: "110", strength: "12"};

//Villians
var reverseFlash = {health: "100", strength: "10"};
var brainiac = {health: "75", strength: "6"};
var damienDarhk = {health: "150", strength: "15"};
var deathStroke = {health: "110", strength: "12"};

var villians = [ "reverseFlash", "deathStroke", "brainiac", "damienDarhk"];

var villianSelector = villians[Math.floor(Math.random() * villians.length)]

$("#flashStats").append("Health: " + flash.health + "<br>Strength: " + flash.strength);
$("#arrowStats").append("Health: " + arrow.health + "<br>Strength: " + arrow.strength);
$("#superGirlStats").append("Health: " + superGirl.health + "<br>Strength: " + superGirl.strength);
$("#atomStats").append("Health: " + atom.health + "<br>Strength: " + atom.strength);

$("#reverseFlashStats").append("Health: " + reverseFlash.health + "<br>Strength: " + reverseFlash.strength);
$("#brainiacStats").append("Health: " + brainiac.health + "<br>Strength: " + brainiac.strength);
$("#damienDarhkStats").append("Health: " + damienDarhk.health + "<br>Strength: " + damienDarhk.strength);
$("#deathStrokeStats").append("Health: " + deathStroke.health + "<br>Strength: " + deathStroke.strength);

$("#flash").on("click", function() {
	$("#flash").appendTo("#userSelection");
	$("#heroes").css("display", "none");
	$("#flashStats").css("display", "inline");
});

$("#arrow").on("click", function(){
	$("#arrow").appendTo("#userSelection");
	$("#heroes").css("display", "none");
	$("#arrowStats").css("display", "inline");	
});

$("#superGirl").on("click", function(){
	$("#superGirl").appendTo("#userSelection");
	$("#heroes").css("display", "none");
	$("#superGirlStats").css("display", "inline");
});

$("#theAtom").on("click", function(){
	$("#theAtom").appendTo("#userSelection");
	$("#heroes").css("display", "none");
	$("#atomStats").css("display", "inline");
});

if (villianSelector == "reverseFlash") {
		$("#reverseFlash").appendTo("#oppSelection");
		$("#reverseFlashStats").css("display", "inline");
} else if (villianSelector == "deathStroke") {
		$("#deathStroke").appendTo("#oppSelection");
		$("#deathStrokeStats").css("display", "inline");
} else if (villianSelector == "brainiac") {
		$("#brainiac").appendTo("#oppSelection");
		$("#brainiacStats").css("display", "inline");
} else if (villianSelector == "damienDarhk") {
		$("#damienDarhk").appendTo("#oppSelection");
		$("#damienDarhkStats").css("display", "inline");
}