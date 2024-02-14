function liquidConverter(valNum) {
    document.getElementById("outputGallon").innerHTML = valNum / 3.78541;
    document.getElementById("outputOunce").innerHTML = valNum / 0.0295735;
    document.getElementById("outputCup").innerHTML = valNum /  0.236588;
    document.getElementById("outputSs").innerHTML = valNum /  0.0147868;
}
//palindrom oppg
function palindromFunc(){
    const palindrom = document.getElementById("palindromInput").value.toLowerCase()
    const endret = palindrom.split("").reverse().join("")  
 
    if (palindrom == endret){
        document.getElementById("palindromOutput").innerHTML = "Palindrome"
    } else {     
        document.getElementById("palindromOutput").innerHTML = "Not a Palindrome"
    }
}



