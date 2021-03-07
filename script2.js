// Seperate js page created for local storage javascript
var highScore = document.querySelector("#highScore");
var clear = document.querySelector("#clear");
var tryAgain = document.querySelector("#tryAgain");

// Event listener to clear scores 
  clear.addEventListener("click", function () {
      localStorage.clear();
      location.reload();
});
// Parsing from local stroage to create high scores table
  var allScores = localStorage.getItem("allScores");
    allScores = JSON.parse(allScores);
    if (allScores !== null) {

    for (var i = 0; i < allScores.length; i++) {

        var createLi = document.createElement("li");
        createLi.textContent = allScores[i].initials + " " + allScores[i].score;
        highScore.appendChild(createLi);

    }
}
// Created to return to previos page using index link
  goBack.addEventListener("click", function () {
      window.location.replace("./index.html");
});
