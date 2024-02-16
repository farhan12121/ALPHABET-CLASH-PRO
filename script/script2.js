function hideElement() {
    const element = document.getElementById('home');
    element.classList.add('hidden');
}
function addElement() {
    const element = document.getElementById('Playground');
    element.classList.remove('hidden')
}
function randomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    const alphabet = alphabets[index];
    return alphabet;
}

function addBackgroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-[#FFA500]');
}
function removeBackgroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-[#FFA500]');
}