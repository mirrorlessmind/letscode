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
  var allPlayers = localStorage.getItem("allPlayers");
    allPlayers = JSON.parse(allPlayers);
    if (allPlayers !== null) {

    for (var i = 0; i < allPlayers.length; i++) {

        var createLi = document.createElement("li");
        createLi.textContent = allPlayers[i].initials + " " + allPlayers[i].score;
        highScore.appendChild(createLi);

    }
}
// Created to return to previos page using index link
  tryAgain.addEventListener("click", function () {
      window.location.replace("./index.html");
});
