function play() {
    hideElement();
    addElement();
    continueGame();
}
function continueGame() {
    const alphabet = randomAlphabet();
    const displayAlphabet = document.getElementById('alphabet-screen');
    displayAlphabet.innerText = alphabet;
    addBackgroundColor(alphabet);
}