import './scss/style.scss';
import Gallows from './js/Gallows.js';

Gallows.createAlphabet();
const startGame = () => {
    const gallow = new Gallows();
    gallow.start();
    btn_start.removeEventListener('click', startGame);
    const btn_reset = document.querySelector('.reset').addEventListener('click', () => gallow.resetGame())
}
const btn_start = document.querySelector('.start');
btn_start.addEventListener('click', startGame);