// User Input #1 Takes user input in the form of a review.
function showReview () {
    let review = document.getElementById("user_review").value;
    let username = document.getElementById("user_username").value;
    let rating = document.getElementById("user_rating").value;
    let game = document.getElementById("user_game").value;

    display_username.innerHTML = username;
    display_rating.innerHTML = rating;
    display_review.innerHTML = review;
    display_game.innerHTML = game;
}

// JQuery inorder to hide the form after submit and to hide/show the display rating
$("#display_rating").hide();

$(document).ready(function(){
    $("#submit-btn").click(function hideForm(){
        $("#form").hide();
        $("#display_rating").show();
        
    });
});

// User Input #2 Changes the Background color of the webpage.
function changeBackgroundColor () {
    let color = prompt("Choose a color for the background.");
    let body = document.getElementsByTagName("body")[0];
    document.body.style.backgroundColor = color;
}

// Reset Button for the background color
document.getElementById("reset-color").addEventListener("click", function() {
    document.body.style.backgroundColor = "#0f0f0f";
  });


// User Input #3 Takes the user input from the review rating and display whether the game is good or not.
document.getElementById("submit-btn").addEventListener("click", function() {
    if (+document.getElementById("user_rating").value >= 80) {
        alert("This is a good game");
        }
    else {
        alert("Sorry this game is not good.");          
    }
  })


    



