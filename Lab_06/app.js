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

$(document).ready(function(){
    $("#submit-btn").click(function hideForm(){
        $("#form").hide();
        $("#display_rating").show();
        
    });
});



