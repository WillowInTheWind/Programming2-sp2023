const modal = document.getElementById('myModal');
const close_model = document.getElementById('close');
const start_button = document.getElementsByClassName('start')
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
            let cardvalue = 1;
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
function generateDeck(deckSize) {
    let deck = [];
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
        for (let i=1; i <= (deckSize/4); i++) {
            let newcard = new card(suit,i);
            deck.push(newcard);    
        }   
    }
    return deck;
}



function closeInstructions() {
    modal.style.display = 'none';
}
function openInstructions (){
    modal.style.display = 'block';
}
function hit() {
    console.log(getcard());
    // add it to the player sum
    // add to UI
    // Check for end condition
}

function stay() {
    alert('stay has been pressed');
    //Finalize sum
    // generate CPU turn
    //if player: move to CPU turn
    //if CPU: check for end conditio
}

function reset() {
    let playercard1 = getcard();
    let playercard2 = getcard();
    let CPUcard1 = getcard();
    let CPUcard2 = getcard();
    let player_card_total = playercard1.value + playercard2.value;
    let CPU_card_total = CPUcard1.value + CPUcard2.value;
    let CardDeck = generateDeck(52);
    
}

function getcard() {
    if (CardDeck.length !== 0) {
        let deckvalue = Math.floor(Math.random()*CardDeck.length);
        let newCard = CardDeck[deckvalue]
        CardDeck.splice(deckvalue,1)
        return newCard;
    }
    else {
        alert('there are no cards left in the deck, you must stay')
        return null 
    }
}

function checkforendcondition(){
    //check sum of current player turn 
    //if greater than 21, bust
    //if not compare it to other players sum
}


