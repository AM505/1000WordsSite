//TODOs:
// card should flip back when clicked again
// should record which answers you got correct or how many attempts it took
// should be able to exit early and see what was correct
// should get pairs by random 

var gameData; // global for translation data

const gameSessionData = {
    lang:           "",
    currentPos:      0,
    indexOfSeen:    {},
    lives:          10,
}

var flipped = false;


// add event listener for selecting languge 

const urlParams = new URLSearchParams(window.location.search);
const lang = urlParams.get('language');

document.addEventListener('DOMContentLoaded', handleLangSubmit, false); 


document.getElementById("flip-card").addEventListener("click", handleCardClick)

document.getElementById("ans-submit").addEventListener("submit", handleAnswerSubmit, false)

document.getElementById("skip-button").addEventListener("click", handleSkip)

document.getElementById('lives').innerHTML  = gameSessionData.lives;

async function handleLangSubmit(event){
    event.preventDefault();

    let response = await fetch("resourses/data/"+lang+".json");
    gameData = await response.json();

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

function handleCardClick(event){
    let currentpair = gameData[gameSessionData.currentPos];
    if(!flipped){
        setCardVal(currentpair["translation"]);
        flipped = !flipped;
    }
    else{
        setCardVal(currentpair["original"]);
        flipped = !flipped;
    }
}

function handleAnswerSubmit(event){
    event.preventDefault();
    let ans = document.getElementById('answer').value;
    let currentpair = gameData[gameSessionData.currentPos];
    // check if ans close or one of accepted
    if(ansAccepted(ans, currentpair["translation"])){
        //play some kind of win anim and go to next pair 
        goToNextPair();
        showWinAnim();
        //clear text box
        clearTextBox();
    }

    else{
        //prompt user to guess again 
        showLoseAnim();
    }
}

ansAccepted = (ans, corrAns) => {
    ans = ans.toLowerCase();
    corrAns = corrAns.toLowerCase();
    let ansArray = corrAns.split(',')
  
    return ansArray.includes(ans);
}

goToNextPair = () => {
    gameSessionData.currentPos+=1;
    let currentpair = gameData[gameSessionData.currentPos];
    setCardVal(currentpair["original"]);

}

showWinAnim = () => {
    let winBanner = document.getElementById("win-banner")
    winBanner.style.display = 'inline';  
    setTimeout(function(){
        winBanner.style.display = 'none';
    }, 6000);
}

showLoseAnim = () => {
    document.getElementById('answer').style.background = 'red';
    gameSessionData.lives -= 1;
    document.getElementById('lives').innerHTML  = gameSessionData.lives;
}

clearTextBox = () => {
    document.getElementById('answer').style.background = 'white';
    document.getElementById('answer').value = "";
}

function handleSkip(event){
    goToNextPair()
}

/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 * from https://stackoverflow.com/questions/60662796/shuffle-array-in-js
 */
function shuffle (arr) {
    var j, x, index;
    for (index = arr.length - 1; index > 0; index--) {
        j = Math.floor(Math.random() * (index + 1));
        x = arr[index];
        arr[index] = arr[j];
        arr[j] = x;
    }
    return arr;
}