// let textArea = document.getElementById('text-area');
// let okButton = document.getElementById('ok-button');

// okButton.addEventListener('click',function(){
//  textArea.style.display = 'none'
// });
// textArea.innerText = "Hello World"


/*console.log('Hello World');*/

// let productName = "Hammer";
// console.log(productName);  

// let p = "Hammer";
// console.log(p);  

// let productName ="Hammer";
// let productId ="H123";
// console.log(productName, productId);

// let productName ="Hammer", productId ="H123";
// console.log(productName, productId);

// let productname = 'John\'s Hammer'; 
// console.log(productname); 

// let price = 5.00,
//     price2 = 3.00;
// console.log(price + price2);

// let first = 12,
//     second = 3;
// let answer = first + second;
// console.log(answer);

//
//Blackjack
//by Hien Ho

//Card variable
let suits=['Heart', 'Clubs', 'Diamonds', 'Spades'];
let values = ['Ace', 'King', 'Queen', 'Jack',
    'Ten', 'Nine', 'Eight', 'Seven', 'Six',
    'Five', 'Four', 'Three', 'Two'];

//DOM variable 
let textArea = document.getElementById('text-area');
let newGameButton = document.getElementById('new-game-button');
let hitButton = document.getElementById('hit-button');
let stayButton = document.getElementById('stay-button');

//Game Variables
let gameStarted =false,
    gaveOver=false,
    playerWon=false,
    dealerCards =[],
    playerCards =[],
    dealerScore =0,
    playerScore=0,
    deck=[];

hitButton.style.display = 'none';
stayButton.style.display ='none';
showStatus();

newGameButton.addEventListener('click', function() {
    gameStarted = true;
    gameOver=false;
    playWon=false;

    deck=createDeck();
    shuffleDeck(deck);

    //deck =createDeck();
    dealerCards = [getFirstCard(), getNextCard()];
    playerCards = [getNextCard(), getNextCard()];

    textArea.innerText = 'Started...';
    newGameButton.style.display = 'none';
    hitButton.style.display = "inline";
    stayButton.style.display = 'inline';
});

function createDeck(){
    let deck = []
    
    for (let suitIdx = 0; suitIdx < suits.length; suitIdx++){

        for (let valueIdx = 0; valueIdx < values.length; valueIdx++) {
            let card = {
                suit: suits[suitIdx],
                value: values[valueIdx]
            };
            deck.push(card);

        }

    }

    return deck;
}
function test() {
    let firstArray = ['array1-value1', 'array1-value2'];
    let secondArray = ['array2-value1', 'array2-value2'];

    for (let i = 0; i < firstArray.length; i++) {

        for (let j = 0; j < secondArray.length; j++) {
            
            console.log("[" + i + "][" + j + "]");
            
        }

    }
}
// let deck = createDeck();

function shuffleDeck(deck){
    for (let i=0; i<deck.length; i++){
        let swapIdx = Math.trunc(Math.random()*deck.length);
        let tmp = deck[swapIdx];
        deck[swapIdx]=deck[i];
        deck[i] = tmp;
    }
}

function getCardString(card){
    return card.value +'of' +card.suit;
}

function getNextCard(){
    return deck.shift();
}

function showStatus(){
    if(!gameStarted){
        textArea.innerText = "Welcome to Blackjack!";
        return;
    }




    

    for(var i=0; i<deck.length; i++){
        textArea.innerText += '\n' + getCardString(deck[i]);
    }
}
// function getNextCard(){
//     return deck.shift();
// }

// for (let suitIdx=0; suitIdx<suits.length; suitIdx++){
//     for(let valueIdx =0; valueIdx<value.length; valueIdx++){
//         deck.push(values[valueIdx]+ 'of' + suits[suitIdx]);
//     }
// }
// // for(let i =0; i<deck.length; i++){
// //     console.log(deck[i]);
// // }

// let playerCards = [getNextCard(), getNextCard()];

// console.log("Welcome to Blackjack!");

// console.log("You are dealt: ");
// console.log(" " +getCardString(playerCards[0]) );
// console.log(" " +getCardString(playerCards[1]) );


// let cities = ['New York', 'Los Angeles' , 'chicago']
// console.log(cities[0]);
// console.log(cities[1]);
// console.log(cities[3]);