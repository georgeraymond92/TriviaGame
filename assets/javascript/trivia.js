// make the document listen for a function
$(document).ready(function() {

    // Create a button to start the quiz
    function takeQuiz() {
        startButton = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Take My Quizz!!!</a></p>";
        $(".mainArea").html(startButton);
    }

    // Run function takeQuiz
    takeQuiz();



// when you click the go button
$("body").on("click", ".start-button", function(event){
	displayHTML();
    timerStart();

// closing out the first on click
});

//  the if else statments for when you make a choice

$("body").on("click", ".answer", function(event){
	// userChoice will be equal to the text value of the button clicked
	userChoice = $(this).text();
	if(userChoice === answerSolutions[currentQuestion]) {
		//alert("correct");

		clearInterval(theClock);
		generateWin();
	}
	else {
		//alert("wrong answer!");
		clearInterval(theClock);
		generateLoss();
	}
}); // Close .answer click

$("body").on("click", ".reset-button", function(event){
	resetGame();
}); // Closes reset-button click

});  //  Closes jQuery wrapper

// Functions Functions Functions


function addToLosses() {
	unawnsered++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + timeCount + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + answerSolutions[currentQuestion] + "</p>" + "<img class='center-block img-wrong' src='assets/images/timeUp.JPG'>";
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 2000);
}

function generateWin() {
	correctCount++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + timeCount + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + answerSolutions[currentQuestion] + "</p>" + imageArray[currentQuestion];
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 4000);
}

function generateLoss() {
	wrongCount++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + timeCount + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "+ answerSolutions[currentQuestion] + "</p>" + "<img class='center-block img-wrong' src='assets/images/wrong.JPG'>";
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 1500);
}

function displayHTML() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questionArray[currentQuestion] + "</p><p class='first-answer answer'>A. " + answerArray[currentQuestion][0] + "</p><p class='answer'>B. "+answerArray[currentQuestion][1]+"</p><p class='answer'>C. "+answerArray[currentQuestion][2]+"</p><p class='answer'>D. "+answerArray[currentQuestion][3]+"</p>";
	$(".mainArea").html(gameHTML);
}

function wait() {
	if (currentQuestion < 7) {
	currentQuestion++;
	displayHTML();
	timeCount = 30;
	timerStart();
    }
	else {
		displayScore();
	}
}

function timerStart() {
	theClock = setInterval(thirtySeconds, 1000);
	function thirtySeconds() {
		if (timeCount === 0) {
			clearInterval(theClock);
			addToLosses();
		}
		if (timeCount > 0) {
			timeCount--;
		}
		$(".timer").html(timeCount);
	}
}

function displayScore() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + timeCount + "</span></p>" + "<p class='text-center'>All done, here's how you did!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctCount + "</p>" + "<p>Wrong Answers: " + wrongCount + "</p>" + "<p>Unanswered: " + unawnsered + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
	$(".mainArea").html(gameHTML);
}

function resetGame() {
	currentQuestion = 0;
	correctCount = 0;
	wrongCount = 0;
	unawnsered = 0;
	timeCount = 30;
	displayHTML();
	timerStart();
}
// startScreen
var startQuiz;
// gameHTML
var html;
var questionArray = ["Jackson Pollock was an influential abstract expressionist painter from what country?", "The Van Gogh museum is located in what European capital city?", "What color do you get when you mix yellow and blue?", "In what year did the French revolution begin?", "What city has the largest population?", "In what year did Neil Armstrong and Buzz Aldrin land on the moon?", "Lox, often served on a bagel, is a fillet of brined what?", "Sriracha is type of hot sauce named after a city located in what country?"];
var answerArray = [["Japan", "France", "England", "The United States"], ["Paris","Amsterdam","London","Prague"], ["Magenta", "Purple", "Green", "brown"], ["1885","1234","1789","2003"], ["Bakersfeild CA", "New York NY", "Tokyo Japan", "Seattle WA"], ["1969","1772","1954","2018"], ["Grapes", "Salmon", "Cod", "Turkey"], ["China","Australia","Germany","Thailand"]];
var imageArray = ["<img class='center-block img-right' src='assets/images/JacksonP.JPG'>", "<img class='center-block img-right' src='assets/images/vanG.JPG'>", "<img class='center-block img-right' src='assets/images/green.JPG'>", "<img class='center-block img-right' src='assets/images/frenchR.JPG'>", "<img class='center-block img-right' src='assets/images/tokyo.JPG'>", "<img class='center-block img-right' src='assets/images/moon.JPG'>", "<img class='center-block img-right' src='assets/images/lox.JPG'>", "<img class='center-block img-right' src='assets/images/sriracha.JPG'>"];
var answerSolutions = ["D. The United States", "B. Amsterdam", "C. Green", "C. 1789", "C. Tokyo Japan", "A. 1969", "B. Salmon", "D. Thailand"];
var currentQuestion = 0;
var timeCount = 30;
var userChoice;
var theClock;
var correctCount = 0;
var wrongCount = 0;
var unawnsered = 0;

