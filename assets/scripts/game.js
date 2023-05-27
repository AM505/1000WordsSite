//TODOs:
// card should flip back when clicked again
// should record which answers you got correct or how many attempts it took
// should be able to exit early and see what was correct
// should get pairs by random 

var gameData; // global for translation data

// global to store game session data
const gameSessionData = {
    lang: "",
    currentPos: 0,
    indexOfSeen: {},
    lives: 10,
    cor_ans: 0,
    arr_len: 0,
};

var flipped = false;


// add event listener for selecting languge 

const urlParams = new URLSearchParams(window.location.search);
const lang = urlParams.get('language');

document.getElementById('answer').classList.add('active-animation');

document.addEventListener('DOMContentLoaded', handleLangSubmit, false);

document.getElementById("flip-card").addEventListener("click", handleCardClick);

document.getElementById("ans-submit").addEventListener("submit", handleAnswerSubmit, false);

document.getElementById("skip-button").addEventListener("click", handleSkip);

document.getElementById('lives').innerHTML = gameSessionData.lives;

async function handleLangSubmit(event) {
    //get language json from server and wait for response
    let response = await fetch("assets/data/" + lang.toLowerCase() + ".json");
    gameData = await response.json();
    // shuffle parsed json so user gets different experience every time
    gameSessionData.arr_len = gameData.length;
    shuffle(gameData);
    setCardVal(gameData[0]["original"]);

    setLang(lang);
}

setLang = (l) => {
    gameSessionData.lang = l;
}


setCardVal = (text) => {
    document.getElementById("card-text").innerHTML = text;
}

function handleCardClick(event) {
    // handle card click event

    // if the card is not flipped then flip it and set the state to flipped
    // otherwise do the reverse
    let currentpair = gameData[gameSessionData.currentPos];
    if (!flipped) {
        setCardVal(currentpair["translation"]);
        flipped = !flipped;
    }
    else {
        setCardVal(currentpair["original"]);
        flipped = !flipped;
    }
}

function handleAnswerSubmit(event) {
    event.preventDefault();
    let ans = document.getElementById('answer').value;
    let currentpair = gameData[gameSessionData.currentPos];
    // check if ans close or one of accepted
    if (ansAccepted(ans, currentpair["translation"])) {
        //play some kind of win anim and go to next pair 
        showWinAnim();
        goToNextPair();
        //clear text box
        clearTextBox();
    }

    else {
        //prompt user to guess again 
        showLoseAnim();
    }
}

ansAccepted = (ans, corrAns) => {
    // string manipulation to check if ans is correct
    // convert to lower case so user doesn't have to worry about capitals
    ans = ans.toLowerCase();
    corrAns = corrAns.toLowerCase();
    //split comma seperated values
    let ansArray = corrAns.split(',');
    // check if answer user gives is one of accepted
    return ansArray.includes(ans);
}

goToNextPair = () => {
    // increments the card order by one and sets the text to the next json pair
    // doesn't increment if all words gone through
    if (!(gameSessionData.currentPos == gameSessionData.arr_len - 1)) {
        gameSessionData.currentPos += 1;
        let currentpair = gameData[gameSessionData.currentPos];
        setCardVal(currentpair["original"]);
    }
    // would implement an else block here to run code telling the user they have won
    else {
        document.getElementById("container-popup").style.display = 'inline';
        document.getElementById('lives-remaining').innerHTML = gameSessionData.lives.toString();
        document.getElementById('correct-words').innerHTML = gameSessionData.cor_ans.toString();

    }
}

showWinAnim = () => {
    // increment the correct answer counter
    gameSessionData.cor_ans += 1;
    document.getElementById('cor-ans').innerHTML = gameSessionData.cor_ans;
    // show win banner
    let winBanner = document.getElementById("win-banner");
    winBanner.style.display = 'inline';
    // hide win banner after 2s (anim time)
    setTimeout(function () {
        winBanner.style.display = 'none';
    }, 2000);
}

showLoseAnim = () => {
    // turn ans box red and play shake animation
    let ansBox = document.getElementById('answer');
    ansBox.style.animation = 'shake 0.5s 3';
    ansBox.style.background = 'red';
    // if the player runs out of lives, give 10 more lives
    // don't actually want the player to be able to loose
    if (gameSessionData.lives < 1) {
        gameSessionData.lives = 10;
    }
    else {
        gameSessionData.lives -= 1;
    }
    document.getElementById('lives').innerHTML = gameSessionData.lives;
    //undo animation and clear text box of wrong answer
    setTimeout(function () {
        document.getElementById('answer').style.animation = '';
        clearTextBox();
    }, 3000);
}

clearTextBox = () => {
    document.getElementById('answer').style.background = 'white';
    document.getElementById('answer').value = "";
}

function handleSkip(event) {
    goToNextPair();
}

/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 * from https://stackoverflow.com/questions/60662796/shuffle-array-in-js
 */
function shuffle(arr) {
    var j, x, index;
    for (index = arr.length - 1; index > 0; index--) {
        j = Math.floor(Math.random() * (index + 1));
        x = arr[index];
        arr[index] = arr[j];
        arr[j] = x;
    }
    return arr;
}