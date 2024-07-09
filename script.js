let homeScoreEl = document.getElementById('home-score');
let homeScore = 0;
let guestScoreEl = document.getElementById('guest-score');
let guestScore = 0;
let winnerHome = document.getElementById('winner-home');
let winnerGuest = document.getElementById('winner-guest');

function addOneHome() {
    homeScore += 1
    homeScoreEl.textContent = homeScore;
}

function addTwoHome() {
    homeScore += 2
    homeScoreEl.textContent = homeScore;
}

function addThreeHome() {
    homeScore += 3
    homeScoreEl.textContent = homeScore;
}

function addOneGuest() {
    guestScore += 1
    guestScoreEl.textContent = guestScore;
}

function addTwoGuest() {
    guestScore += 2
    guestScoreEl.textContent = guestScore;
}

function addThreeGuest() {
    guestScore += 3
    guestScoreEl.textContent = guestScore;
}

function checkWinner() {

    if (homeScore > guestScore) {
        winnerHome.style.border = '2px solid #4FF94F';
        winnerGuest.style.border = '1px solid #9AABD8';
    }
    else if (guestScore > homeScore){
        winnerGuest.style.border = '2px solid #4FF94F';
        winnerHome.style.border = '1px solid #9AABD8';
    }
    else {
        winnerHome.style.border = '1px solid #9AABD8';
        winnerGuest.style.border = '1px solid #9AABD8';
    }
}

function newGame() {
    homeScore = 0;
    homeScoreEl.textContent = homeScore;
    guestScore = 0;
    guestScoreEl.textContent = guestScore;
    winnerHome.style.border = '1px solid #9AABD8';
    winnerGuest.style.border = '1px solid #9AABD8';
}

