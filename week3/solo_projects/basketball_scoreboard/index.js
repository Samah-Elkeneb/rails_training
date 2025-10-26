let team1Score = 0
let team2Score = 0

let team1ScoreEl = document.getElementById("team1-score-el")
let team2ScoreEl = document.getElementById("team2-score-el")

function add(addingValue, team1) {

    if (team1) {
        team1Score += addingValue
        team1ScoreEl.textContent = team1Score
    }
    else {
        team2Score += addingValue
        team2ScoreEl.textContent = team2Score
    }
}
