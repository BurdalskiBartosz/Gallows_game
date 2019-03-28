export default class Gallows {
    constructor() {
        this.words = ["Szubienica", "Javascript", "Mortal Combat", "Copernicus", "Język C plus plus", "Ala ma kota", "Alicja w krainie czarów", "GallowsGame"];
        this.wordToFind = document.querySelector('.text');
        this.letters = [...document.querySelectorAll('.letter')];
        this.takeLetter = this.takeLetter.bind(this);
        this.counter = document.querySelector(".counter");
        this.infoWindow = document.querySelector('.infoWindow');
        this.infoWindowH2 = document.querySelector(".infoWindow h2");
        this.infoWindowSpan = document.querySelector(".infoWindow span");
    }
    resetGame() {
        this.letters.forEach((letter) => {
            letter.classList.remove('checked_true', 'checked_false');
        })
        this.addEvent();
        this.start();
        this.chance = 7;
        this.counter.textContent = this.chance;
        this.infoWindow.style.display = 'none';
        this.winOrLose = null;
    }
    addEvent() {
        this.letters.forEach((letter) => letter.addEventListener('click', this.takeLetter))
    }
    takeLetter(e) {
        this.btn = e.target;
        this.showLetter()
    }
    showLetter() {
        for (let i = 0; i < this.wordToHide.length; i++) {
            if (this.wordToHide[i] == this.btn.value) {
                this.replacment(i);
                this.btn.classList.add('checked_true');
                this.btn.removeEventListener('click', this.takeLetter)
            }
        }
        if (this.btn.classList.contains('checked_true') == false) {
            this.btn.classList.add('checked_false');
            this.btn.removeEventListener('click', this.takeLetter);
            this.chance--;
            this.counter.textContent = this.chance;
            if (this.chance == 0) {
                this.winOrLose = 0;
                this.endGame();
            }
        }
        if (this.wordToHide == this.hiddenWord) {
            this.winOrLose = 1;
            this.endGame()
        }
    }
    replacment(i) {
        this.hiddenWord = this.hiddenWord.substr(0, i) + this.wordToHide[i] + this.hiddenWord.substr(i + 1);
        this.wordToFind.textContent = this.hiddenWord;
    }
    randomWord() {
        this.word = Math.floor(Math.random() * this.words.length);
        return this.words[this.word];
    }
    start() {
        this.addEvent();
        this.hiddenWord = "";
        this.wordToHide = this.randomWord().toUpperCase();
        for (let i = 0; i < this.wordToHide.length; i++) {
            if (this.wordToHide[i] == " ") {
                this.hiddenWord += " ";
            } else {
                this.hiddenWord += '-';
            }
        }
        this.wordToFind.textContent = this.hiddenWord;
        this.chance = 7;
        this.counter.textContent = this.chance;
    }
    endGame() {
        this.letters.forEach((letter) => letter.removeEventListener('click', this.takeLetter));
        this.info = [
            ["Wygrałeś", "Przegrałeś"],
            ["Gratulacje!", "Spróbuj jeszcze raz!"]
        ]
        switch (this.winOrLose) {
            case 0:
                this.infoWindowH2.textContent = this.info[0][1];
                this.infoWindowSpan.textContent = this.info[1][1];
                break;
            case 1:
                this.infoWindowH2.textContent = this.info[0][0];
                this.infoWindowSpan.textContent = this.info[1][0];
                break;
        }
        this.infoWindow.style.display = 'block';
    }
    static createAlphabet() {
        const letters = "AĄBCĆDEĘFGHIJKLŁMNŃOÓPRSTUWVXYZŻŹ";
        const alphabet = document.querySelector('.alphabet');
        for (let i = 0; i < letters.length; i++) {
            const btn = document.createElement('button');
            btn.textContent = letters[i];
            btn.classList.add('letter');
            btn.setAttribute('value', letters[i]);
            alphabet.appendChild(btn);
        }
    }
}