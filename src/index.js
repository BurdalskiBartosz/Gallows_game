import './scss/style.scss';
import Gallows from './js/Gallows.js';
window.addEventListener("load", function () {
    if (screen.width <= 1050) {
        alert("Spróbuj zagrać na urządzeniu o większej rozdzielczości")
        location.reload(true);
    }
})
Gallows.createAlphabet();
const startGame = () => {
    const gallow = new Gallows();
    gallow.start();
    btn_start.removeEventListener('click', startGame);
    const btn_reset = document.querySelector('.reset').addEventListener('click', () => gallow.resetGame())
}
const btn_start = document.querySelector('.start');
btn_start.addEventListener('click', startGame);