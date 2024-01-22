let player = {
    name :"Aswin",
    chips : 145
}
let cards = []
let sum = 0;
let hasBlackjack = false
let isAlive = false

let message = ""


message = "logging out"
//1. store the message-el paragraph in a variable called messageEl
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")

let cardEl = document.getElementById("card-el")



let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name +': '+ '₹' +' ' + player.chips

// create a function getRandomCard(), that always returns the numberr 5
function getRandomCard(){

    let randomNumber = Math.floor(Math.random()*13) +1

    if(randomNumber>10 ){
        return 10
    }else if (randomNumber === 1){
        return 11
    }else{
        return randomNumber
    }
}

// Create a new function called startGame() that Calls renderGame()
function start(){
    isAlive = true
    //generate  two random numbers
    // Re-assign the cards and sum variables so that the game can start
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard,secondCard]
    sum = firstCard+secondCard
    rendergame()
}
function rendergame(){
         // render out firstCard and secondCard
    
         cardEl.textContent = "Cards: " 
         // Create a for loop that renders out all the cards instead of just two
         for (let i=0;  i<cards.length; i++){
            cardEl.textContent += cards[i] + " "
         }
         
         // rendr out all the cards we have
         sumEl.textContent = "Sum: "+sum;
    if (sum<=20){
        message = "do you want to draw a new Card?";
    }else if(sum===21){
        message="Whoo! You've got the Blackjack";
        hasBlackjack = true
    }else{
        message = "you''re Out of the game";
        isAlive = false
    }
    
    // 2. Display the message in the messageEl using messageEl.textContent
    messageEl.textContent = message
}

function card(){
     // only allow the player to get a new card if she is alive and does not Have blackjack

    if ( isAlive === true && hasBlackjack === false){
        let card = getRandomCard()

        sum+= card
         cards.push(card)
         console.log(cards);
        
        rendergame()
        
    }
   
}

