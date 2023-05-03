const modal = document.getElementById('myModal')
const close_model = document.getElementById('close')

//player global variables
let player_card_total = playercard1 + playercard2;
let CPU_card_total = CPUcard1 + CPUcard2;
let CardDeck = generateDeck(52)

function generateDeck(deckSize) {
    let deck = []
    for (let i = 0;i<4;i++){
        if (i===0) {
            suit = 'heart';
        }
        if (i===1) {
            suit = 'Spade';
        }
        if (i===2) {
            suit = 'Club';
        }
        if (i===3) {
            suit = 'diamond';
        }
        for (let i=0; i < (deckSize/4); i++) {
            let card = card(suit,i);
            deck.push(card);
        }   
    }
    return deck
}

class card {
    constructor(suit, value){
        this.suit = suit;
        this.value = this.Cardnum(value);
    }   
    get img (){
        
    }
    Cardnum(value) {
        if (value === 1){
            let cardkind = 'ace';
            let cardvalue = 10;
            let cardInfo = [cardkind,cardvalue];
            return cardInfo;   
        }
        if (value > 10) {
            if (value === 11) {
                let cardkind = 'Jack';
                let cardvalue = 10;
                let cardInfo = [cardkind,cardvalue];
                return cardInfo;  
            }
            if (value === 12) {
                let cardkind = 'Queen';
                let cardvalue = 10;
                let cardInfo = [cardkind,cardvalue];
                return cardInfo;  
            }
            if (value === 13) {
                let cardkind = 'King';
                let cardvalue = 10;
                let cardInfo = [cardkind,cardvalue];
                return cardInfo;  
            }
        }
        else {
            return value;
        }
    }
}

function closeInstructions() {
    modal.style.display = 'none'
}
function openInstructions (){
    modal.style.display = 'block'
}
function hit() {
    alert('hit has been pressed')
    // add it to the player sum
    // add to UI
    // Check for end condition
}

function stay() {
    alert('stay has been pressed')
    //Finalize sum
    // generate CPU turn
    //if player: move to CPU turn
    //if CPU: check for end conditio
}

function reset() {
    alert('reset has been pressed')
    //remove excess cards
    //reactiviate Hit function
    //bring Html back to normal
}

function getcard() {
    //generate a random part of the card array   
    // remove that card from array
    //add it to player array
}

function checkforendcondition(){
    //check sum of current player turn 
    //if greater than 21, bust
    //if not compare it to other players sum
}


