// define objects for global game data

var gameData; // global for translation data

const gameSessionData = {
    lang:"",
    currentPos:0,
}


// add event listener for selecting languge 
var langSelect = document.getElementById("lang-select");
langSelect.addEventListener("submit", handleLangSubmit, false); 

var card = document.getElementById("flip-card")
card.addEventListener("click", handleCardClick)

document.getElementById("ans-submit").addEventListener("submit", handleAnswerSubmit, false)

function handleLangSubmit(event){
    event.preventDefault();
    let lang = document.getElementById("lang").value;
    getJsonFromFile("resourses/data/"+lang+'.json');

    setLang(lang);
    hideLangSelect();
}

async function getJsonFromFile(file) {
    let response = await fetch(file);
    gameData = await response.json();
    // must find a way to avoid calling set card val from getText
    setCardVal(gameData[0]["original"]);
  }

  setLang = (l) => {
    gameSessionData.lang = l;
}

hideLangSelect = () =>{
    document.getElementById("lang-popup").style.display = 'none';  
}

setCardVal = (text) => {
    document.getElementById("card-text").innerHTML = text;
}

function handleCardClick(event){
    let currentpair = gameData[gameSessionData.currentPos];
    setCardVal(currentpair["translation"]);
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
    document.getElementById('answer').style.background = 'green';
}

showLoseAnim = () => {
    document.getElementById('answer').style.background = 'red';
}