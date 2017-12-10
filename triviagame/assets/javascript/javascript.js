
var trivia = {

	q1: { 
		ques: "Who was Goku fighting on Namek when he went Super Saiyan for the first time?", 
		 ans: {
				a: "Captaian Ginyu",
				b: "Vegeta",
				c: "Cell",
				d: "Frieza",
		 },
		  correct: "d",
		  image: "<img class='gif' src='assets/images/frieza.gif' alt='Frieza'>",
	},
	q2: { 
		ques: "What is the form of Super Saiyan beyond god?",
		 ans: {
		  	a: "Super Saiyan God",
		  	b: "Super Saiyan Blue",
		  	c: "Super Saiyan Green",
		  	d: "Super Saiyan God 2",
		  },
		  correct: "b",
		  cName: "Super Saiyan Blue",
		  image: "<img class='gif' src='assets/images/ssbGoku.gif' alt='SSB Goku'>",
	},
	q3: {
		ques: "Who is the prince of all Saiyans?",
		ans: {
			a: "Broly",
			b: "Bardock",
			c: "Vegeta",
			d: "Kakarot",
		},
		correct: "c",
		cName: "Vegeta",
		image: "<img class='gif' src='assets/images/vegeta.gif' alt='Vegeta'>",
	},
	q4: {
		ques: "Who is the God of Destruction for Universe 7?",
		ans: {
			a: "Beerus",
			b: "Champa",
			c: "Whis",
			d: "Valla",
		},
		correct: "a",

		image: "<img class='gif' src='assets/images/beerus.gif' alt='Beerus'>",
	},
	q5: {
		ques: "Who trained Goku to use the Kio-Ken fighting style?",
		ans: {
			a: "Beerus",
			b: "Master Roshi",
			c: "Kami",
			d: "King Kai",
		},
		correct: "d",
		image: "<img class='gif' src='assets/images/kingkai.gif' alt='King Kai'>",
	},
	q6: {
		ques: "Who is the assassin that tried to kill Goku from Universe 6?",
		ans: {
			a: "Chill",
			b: "Hit",
			c: "Cabba",
			d: "Jeran",
		},
		correct: "b",
		image: "<img class='gif' src='assets/images/hit.gif' alt='Hit'>",
	},
	q7: {
		ques: "During the tournament of power, what form did Goku achieve that shocked the gods?",
		ans: {
			a: "Super Saiyan Black",
			b: "Ultra Instinct",
			c: "Mega Instinct",
			d: "Super Saiyan God Super Saiyan",
		},
		correct: "b",
		image: "<img class='gif' src='assets/images/ultra.gif' alt='Ultra Instinct'>",
	},
	q8: {
		ques: "Zamusu stole Goku's body and was able to transform into?",
		ans: {
			a: "Goku Black",
			b: "Super Saiyan Emerald",
			c: "Super Saiyan Rosé",
			d: "Super Saiyan Black",
		},
		correct: "c",
		image: "<img class='gif' src='assets/images/ssrgoku.gif' alt='SSR Goku'>",
	},
	q9: {
		ques: "Who was the second person to beat Frieza?",
		ans: {
			a: "Trunks",
			b: "Vegeta",
			c: "Goku",
			d: "Gohan",
		},
		correct: "a",
		image: "<img class='gif' src='assets/images/trunks.gif' alt='Trunks'>",
	},
	q10: {
		ques: "What was the dragon ball that Gohan wore on his head?",
		ans: {
			a: "One Star",
			b: "Two Star",
			c: "Three Star",
			d: "Four Star",
		},
		correct: "d",
		image: "<img class='gif' src='assets/images/4star.gif' alt='Four Star'>",
	}
};

var correct = 0;
var incorrect = 0;
var unanswered =0;

var cNames = [trivia.q1.ans.d, trivia.q2.ans.b, trivia.q3.ans.c, trivia.q4.ans.a, trivia.q5.ans.d, trivia.q6.ans.b, trivia.q7.ans.b, trivia.q8.ans.c, trivia.q9.ans.a, trivia.q10.ans.d];
var qBank = [q1 = trivia.q1, q2=trivia.q2, q3=trivia.q3, q4=trivia.q4, q5=trivia.q5, q6=trivia.q6, q7=trivia.q7, q8=trivia.q8, q9=trivia.q9, q10=trivia.q10 ];

var i = 0;

var currentTime;
var time = 30;
var clockRunning = true;
var intervalID;

var clock = {

		// currentTime: 0,

		// time: 31,

		run: function() {

			// $("#counter").html("00:30");

				$("#counter").css("color", "orange");
				intervalID = setInterval(clock.count, 1000);
		},

		stop: function() {
			clearInterval(clock.intervalID);
			clockRunning = false;
		},

		count: function() {

			time--;

			currentTime = clock.timeConverter(time);

			$("#counter").html(currentTime + " seconds remaining");

			if (clockRunning = false) {

				clearInterval(currentTime);
				time = -1;

			} else if (time == 0 ) {

				clockRunning = false;
			} else if ( time < 6) {
				$("#counter").css("color", "red");
			}

				clock.timeUP();
		},

		timeUP: function() {

			if (time == 0) {
				clearInterval(clock.intervalID);
				$("#counter").css("display", "none");
				$("#answerBank").css("display", "none");
				$("#image").css("display", "inline");
				$("#image").html("<h1 class='wrong'>You have run out of time!</h1><br>"
								+ "<h1 class='wrong'>The Correct answer was: " + cNames[i] + "</h1>");									
				unanswered++;
				questions();
				setTimeout( function(){ 					
							$("#counter").css("color", "orange");
							$("#image").css("display", "none");
							$("#answerBank").css("display", "inline");
							i++;
							time = 30;
							$("#counter").css("display", "block");
							console.log(i);
							questions();
				}, 3000);				

			} else if ( i == 10) {
				$("#counter").css("display", "none");
				$("#game").css("display", "none");
				$("#title").html("<div><h2>Game Over! Here are your results:</h2></div>");
				$("#correct").html("Correct Answers: " + correct);
				$("#incorrect").html("Incorrect Answers: " + incorrect);
				$("#unanswered").html("Unanswered Answers: " + unanswered + "<br><br>" + "<button class='btn' id='reset'>Play Again?</button>");
				clockRunning = false;
			}
		},

		timeConverter: function(t) {

			var minutes = Math.floor( t / 60);
			var seconds = t - (minutes * 60);

			// if (seconds < 10) {
			// 	seconds = "00" + seconds;
			// }

			if (minutes === 0) {
				minutes = "00";
			}

			else if (minutes < 10) {
				minutes = "0" + minutes;
			}

			return seconds;
		}
	};



var questions = function() {

				$("#question").html("<h2>" + qBank[i].ques + "</h2>");
			
				$("#answer1").html(qBank[i].ans.a + "<br>");
				$("#answer2").html(qBank[i].ans.b + "<br>");
				$("#answer3").html(qBank[i].ans.c + "<br>");
				$("#answer4").html(qBank[i].ans.d);
			};


var game = function() {

	$(".btn").on("click", function() {

		var selected = this.value;

			if (selected == qBank[i].correct) {
			// alert("YAY");
			correct++
			$("#counter").css("display", "none");
			clearInterval(clock.intervalID);
			$("#image").css("display", "inline");
			$("#image").html(qBank[i].image + "<br><h1 class='wrong'>Correct Answer!</h1>");
			$("#answerBank").css("display", "none");
			setTimeout( function(){ 
				if ( selected == qBank[i].correct) {
						$("#counter").css("color", "orange");			
						$("#image").css("display", "none");
						$("#answerBank").css("display", "inline");
						i++;
						time = 30;
						$("#counter").css("display", "block");
						console.log(i);
						questions();
				} 
			}, 3000);
			console.log(i);
			} else {
				clearInterval(clock.intervalID);
				$("#counter").css("display", "none");
				$("#answerBank").css("display", "none");
				$("#image").css("display", "inline");
				$("#image").html("<h1 class='wrong'>That was not the correct answer!</h1><br>"
								+ "<h1 class='wrong'>The Correct answer was: " + cNames[i] + "</h1>");									
				incorrect++
				questions();
				setTimeout( function(){ 					
							$("#counter").css("color", "orange");
							$("#image").css("display", "none");
							$("#answerBank").css("display", "inline");
							i++;
							time = 30;
							$("#counter").css("display", "block");
							console.log(i);
							questions();
				}, 3000);				
			}

		});
}

$(document).ready(function() {
	$("#title").append("<button id='start'>Start Game</button>");
	$("#title").append("<audio autoplay id='theme' src='assets/music/theme.mp4'></audio>");	
	$("#start").on("click", function() {
		$(".container-fluid").css("display", "block");
		$("#start").css("display", "none");
			clock.run();
			clock.count();
			clock.timeUP();
	})
})

$("#reset").on("click", function() {
	i = 0;
	correct = 0;
	incorrect = 0;
	unanswered = 0;	
	$("#results").css("display", "none");
	$(".container-fluid").css("display", "block");
	console.log(i);
	questions();
	game();
})

questions();
game();
