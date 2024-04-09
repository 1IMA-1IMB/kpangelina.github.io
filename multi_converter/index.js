//Multi-Converter oppgave

function liquidConverter(valNum) {
    document.getElementById("outputGallon").innerHTML = valNum / 3.78541; // endrer value fra liter til gallon.
    document.getElementById("outputOunce").innerHTML = valNum / 0.0295735; // endrer value fra liter til ounce.
    document.getElementById("outputCup").innerHTML = valNum /  0.236588; // endrer value fra liter til cups.
    document.getElementById("outputSs").innerHTML = valNum /  0.0147868; // endrer value fra liter til SS.
}
//Palindrom oppgave
function palindromFunc(){
    const palindrom = document.getElementById("palindromInput").value.toLowerCase() // endrer til lowercase.
    const endret = palindrom.split("").reverse().join("")  // spiltter, reverserer og samler koden igjen for å sjekke om den er lik fremlengs og baklengs.
 
    if (palindrom == endret){
        document.getElementById("palindromOutput").innerHTML = "Palindrome" // hvis den er lik fremlengs og baklengs, skriver den ut at det er en palindrom i console.
    } else {     
        document.getElementById("palindromOutput").innerHTML = "Not a Palindrome" // hvis den IKKE er lik fremlengs og baklengs, skriver den ut at det IKKE er en Palindrom i console.
    }
}



