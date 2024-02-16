function play() {
    hideElement();
    addElement();
    continueGame();
}


document.addEventListener('keyup', function captureKeyBoardPress(event) {
    const plyerPress = event.key;
    const displayAlphabet = document.getElementById('alphabet-screen');
    const displayAlphabetElement = displayAlphabet.innerText;
    const expectedAlphabet = displayAlphabetElement.toLowerCase();
    if (plyerPress === expectedAlphabet) {
        const scoreUpdate = document.getElementById('score');
        const scoreUpdateText = scoreUpdate.innerText;
        const scoreUpdateNumber = parseInt(scoreUpdateText);
        const newScore = scoreUpdateNumber + 1;
        scoreUpdate.innerText = newScore;
        removeBackgroundColor(expectedAlphabet);
        continueGame()
    } else {
        const lifeUpdate = document.getElementById('Life');
        const lifeUpdateText = lifeUpdate.innerText;
        const lifeUpdateNumber = parseInt(lifeUpdateText);
        const newLife = lifeUpdateNumber - 1;
        lifeUpdate.innerText = newLife;
    }
})


function continueGame() {
    const alphabet = randomAlphabet();
    const displayAlphabet = document.getElementById('alphabet-screen');
    displayAlphabet.innerText = alphabet;
    addBackgroundColor(alphabet);
}