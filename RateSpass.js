function guessNumberEasy(){
    return randomNum = Math.floor(Math.random()* 31);
}

function guessNumberMedium(){
    return randomNum = Math.floor(Math.random() *51);
}

function guessNumberHard(){
    return randomNum = Math.floor(Math.random() *101);
}
function GameMode(x){
    num = x;
    countRun = 1;
    breakPoint = 0;
    while(breakPoint != 1){
        console.log("Das ist dein ["+ countRun + "] Versuch");
        guess = prompt("Gib einen tipp ab: ");
        if(guess == "konamicode" || guess == "konami code"){
            console.log("psst\npssst!\n"+ num+"\n zwinker zwinker");
            guess = prompt("Gib einen tipp ab: ");
        }
        if( Math.round(guess) < num){
            console.log("zu klein!");
        }
        else if(Math.round(guess) > num){
            console.log("zu groß!");
        }
        else if ( Math.round(guess) == num){
            alert("Glückwunsch du hast "+ countRun + " Versuche gebraucht um "+ num + " zu erraten.. gg wp");
            breakPoint = 1;
        }
        countRun++;
    } 
}

function output(){
    console.log("Welchen Schwierigkeitsgrad möchstest du spielen?\n[1] => [0-30] Leicht \n[2] => [0-50]Mittel\n[3] => [0-100] Schwer\n[4] => Ende");
}

function startGame(){
    choice = 0;
    guess = 0;
    console.log("OK let's gooooo");
    console.log(" ");
    alert("Falls die Konsole noch nicht offen ist:\n Im nächsten Fenster 4 Eingeben, Konsole über Entwicklertool öffnen und Seite neu Laden\noder drücke [F12].");
    while (choice != 4) {

        output();
        
        choice = prompt("Wähle aus der Liste in der Konsole");

        if(choice == "1"){
            console.log("Deine Eingabe: "+choice + " = Leicht");
            GameMode(guessNumberEasy());

            
        }
        else if (choice == "2") {
            console.log("Deine Eingabe: "+choice + " = Mittel");
            GameMode(guessNumberMedium());

        }
        else if (choice == "3"){
            console.log("Deine Eingabe: "+choice + " = Schwer");
            GameMode(guessNumberHard());
        }
    }
}
window.onload = startGame();