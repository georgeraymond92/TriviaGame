// make the document listen for a function
$(document).ready(function() {
    
    // Create a button to start the quiz
    function takeQuiz() {
        startQuiz = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Take My Quizz!!!</a></p>";
        $(".mainArea").html(startQuiz);
    }

    // Run function takeQuiz
    takeQuiz();
})


var startQuiz;