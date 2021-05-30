document.addEventListener('DOMContentLoaded', ()=> {
    const cardArray = [
        {
            name: 'crash',
            img: 'img/crash.jpg'
        },
        {
            name: 'crash',
            img: 'img/crash.jpg'
        },       
        {
            name: 'diablo2',
            img: 'img/diablo2.jpg'
        },
        {
            name: 'diablo2',
            img: 'img/diablo2.jpg'
        },
        {
            name: 'gta2',
            img: 'img/gta2.jpg'
        },
        {
            name: 'gta2',
            img: 'img/gta2.jpg'
        },
        {
            name: 'mario',
            img: 'img/mario.jpg'
        },
        {
            name: 'mario',
            img: 'img/mario.jpg'
        },
        {
            name: 'q3',
            img: 'img/q3.jpg'
        },
        {
            name: 'q3',
            img: 'img/q3.jpg'
        },        
        {
            name: 'worms',
            img: 'img/worms.jpg'
        },
        {
            name: 'worms',
            img: 'img/worms.jpg'
        },
    ];

    cardArray.sort(()=> 0.5 - Math.random());

    const grid = document.querySelector('.grid');      
    const resultDisplay = document.querySelector('#result');
    var cardChosen = [];
    var cardChosenId = [];
    var cardsWon = [];
    var imgs;

    //create your board
    function createBoard() {
        for (let i=0; i < cardArray.length; i++) {
            var card = document.createElement('img');
            card.setAttribute('src', 'img/card.jpg');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);            
        }
    }

    //check for matches
    function checkForMatch() {
        imgs.forEach(element => {
            element.addEventListener('click', flipCard);
        });    
        var cards = document.querySelectorAll('img');
        const optionOneId = cardChosenId[0];
        const optionTwoId = cardChosenId[1];
        if (cardChosen[0] === cardChosen[1]) {
            alert('You found a match!');
            cards[optionOneId].setAttribute('src', 'img/blank.jpg');
            cards[optionTwoId].setAttribute('src', 'img/blank.jpg');
            cardsWon.push(cardChosen);
        } else {
            cards[optionOneId].setAttribute('src', 'img/card.jpg');
            cards[optionTwoId].setAttribute('src', 'img/card.jpg');
            alert('Sorry, try again');
        }
        cardChosen = [];
        cardChosenId = [];
        resultDisplay.textContent = cardsWon.length;
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congratulations! You found them all!';
        }
    } 

    //flip your card
    function flipCard() {
        var cardId = this.getAttribute('data-id');
        cardChosen.push(cardArray[cardId].name);
        cardChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if (cardChosen.length === 2) {  
            imgs.forEach(element => {
                element.removeEventListener('click', flipCard);
            });          
            setTimeout(checkForMatch, 500)
        }
    }


    createBoard();
    imgs = document.querySelectorAll('.grid img');    
})