const modal = document.getElementById('myModal');
const Stay_button = document.getElementById('stay');
const Hit_button = document.getElementById('hit');
const Reset_button = document.getElementById('reset');
const UserSumUI = document.getElementById('user-sum');
const DealerSumUI = document.getElementById('dealer-sum');
const close_model = document.getElementById('close');
const start_button = document.getElementById('start');
const UserCardUi = document.getElementById('user-cards');
const DealerCardUi = document.getElementById('dealer-cards');
let intializebuttons = false;
let User;
let CPU;
let CardDeck;
class card {
    constructor(suit, value){
        this.suit = suit;
        this.value = this.Cardnum(value);
    }   
    get img (){
        return 0;
    }
    Cardnum(value) {
        if (value === 1){
            let cardkind = 'ace';
            let cardvalue = 1;
            let cardInfo = [cardvalue,cardkind];
            return cardInfo;   
        }
        if (value > 10) {
            if (value === 11) {
                let cardkind = 'Jack';
                let cardvalue = 10;
                let cardInfo = [cardvalue,cardkind];
                return cardInfo;  
            }
            if (value === 12) {
                let cardkind = 'Queen';
                let cardvalue = 10;
                let cardInfo = [cardvalue,cardkind];
                return cardInfo;  
            }
            if (value === 13) {
                let cardkind = 'King';
                let cardvalue = 10;
                let cardInfo = [cardvalue,cardkind];
                return cardInfo;  
            }
        }
        else {
            return [value];
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
class player {
    constructor(){
        this.card1 = getcard();
        this.card2 = getcard();
        this.hitAvailable = true;
        this.playerhand = this.playerhand()
        this.bust = false;
        this.card;
        this.sum = 0;
    }
    playerhand() {
        return [this.card1,this.card2];
    }
    hit() {
        this.Update()
        this.checkforBust();

        if (this.hitAvailable) {
            let newcard = getcard();
            if (newcard != null && !this.bust) {
                this.playerhandsum += newcard.value[0];
                this.playerhand.push(newcard);
            }
        }
        else {
            return null;
        }
        this.Update()
        this.checkforBust();
        // alert('check');
    }
    Update() {
        this.card = "";
        this.sum = 0;
        for (let i = 0; i < this.playerhand.length;i++) {
            this.card += this.playerhand[i].value[0].toString() + ', ';
        }
        for (let i = 0; i < this.playerhand.length;i++) {
            this.sum += this.playerhand[i].value[0];
        }
        UserCardUi.innerText = 'Your cards: ' + this.card; 
        UserSumUI.innerText = this.sum;
    }
}
class dealer extends player {
    constructor(Staythreshhold=16) {
        super()
        this.Staythreshhold = Staythreshhold;
    }
    Start() {
        while (this.sum < this.Staythreshhold) {
            this.hit()
            this.Update()
        }
        return this.sum
    }
    reveal() {
        this.card = "";
        this.sum = 0;
        for (let i = 0; i < this.playerhand.length;i++) {
            this.card += this.playerhand[i].value[0].toString() + ', ';
        }
        for (let i = 0; i < this.playerhand.length;i++) {
            this.sum += this.playerhand[i].value[0];
        }
        DealerCardUi.innerText = 'Dealer cards: ' + this.card;
        DealerSumUI.innerText = this.sum.toString(); 
    }
    checkforBust(){
        if (this.sum > 21){
            this.hitAvailable = false;
            alert("Computer busted");
            this.bust = true;
            DealerSumUI.style.color = 'darkred';
        }
        
    }
    Update() {
        this.card = "";
        this.sum = 0;
        for (let i = 0; i < this.playerhand.length;i++) {
            if (i===0){
                this.card += this.playerhand[0].value[0].toString() + ', ';
            }
            else {
                this.card +=  'X, ';
            }
        }
        for (let i = 0; i < this.playerhand.length;i++) {
            this.sum += this.playerhand[i].value[0];
        }
        DealerCardUi.innerText = 'Dealer cards: ' + this.card;
        DealerSumUI.innerText = this.card1.value[0].toString(); 
    }   
}
class HumanUser extends player {
   constructor (Opponet) {
    super()
    this.Opponet = Opponet
    this.stayAvailable = true;
   }
   stay() {
    if (this.stayAvailable){
        console.log('check!');
        this.hitAvailable = false;
        this.Update()
        this.Opponet.Start()
        checkwin(this.Opponet.sum, this.sum)
        this.stayAvailable= false;
    }
   }
   checkforBust(){
    if (this.sum > 21){
        this.hitAvailable = false;
        alert("Youve busted :(.");
        UserSumUI.style.color = 'darkred';
        this.bust = true;
        this.stay();
        this.stayAvailable= false;
    }
    
}
}
function closeInstructions() {
    modal.style.display = 'none';
}
function openInstructions (){
    modal.style.display = 'block';
}

function reset() {
    CardDeck = generateDeck(52);
    CPU = new dealer();
    if (!intializebuttons) {
        Hit_button.addEventListener('click', function (){User.hit()});
        Stay_button.addEventListener('click', function (){User.stay()});
    }
    User = new HumanUser(CPU);
    User.Update();
    CPU.Update();
    UserSumUI.style.color = 'black';
    DealerSumUI.style.color = 'black';
    User.bust = false;
    CPU.bust = false;
    start_button.style.visibility = 'hidden';
    Reset_button.style.display = 'inline';
    intializebuttons = true;
}
function getcard() {
    if (CardDeck.length !== 0) {
        let deckvalue = Math.floor(Math.random()*CardDeck.length);
        let newCard = CardDeck[deckvalue]
        CardDeck.splice(deckvalue,1)
        return newCard;
    }
    else {
        alert('There are no cards left in the deck, you must stay')
        return null 
    }
}
function checkwin(scores) {
    CPU.reveal()
    if (User.sum > CPU.sum && User.bust != true|| !User.bust && CPU.bust) {
        alert('You Win!!');
        console.log('winner');
    }
    if (User.sum < CPU.sum&& CPU.bust != true || User.bust && !CPU.bust) {
        alert('You Lose :(');
        console.log('loser');
    }
    if (User.sum === CPU.sum || CPU.bust === true && User.bust === true) {
        alert('You tied!')
    }
}