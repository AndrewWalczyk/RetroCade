async function getInstructions() {
    const response = await fetch('/gameInstructions');
    const jsonData = await response.json();
    const gameInstructions = Object.values(jsonData);
    console.log(gameInstructions);
    
    return gameInstructions;
}

function game() {
    var image = document.getElementById("deck");
    getInstructions().then(card =>{
        for (const x of card) {
            image.src = "images/cards/${x.card.rank}_of_${x.card.suit}.png";
            setTimeout(function() {console.log("Wait to flip");}, 2000);
        }
    });

}