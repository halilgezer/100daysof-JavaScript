let btn = document.getElementById("btn");
let result = document.getElementById("result");
let input = document.getElementById("input");

btn.addEventListener("click", vowelCounter) 

function vowelCounter (){
  let vowelCount = 0 ; 
  let wordValue = input.value.toLowerCase() ;

  for ( let count = 0 ; count < wordValue.length ; count++){
    let letter = wordValue[count];
    if (letter.match(/[a,e,o,u,i]/)){
      
      vowelCount++;
      console.log(vowelCount);
    }
  }
  result.style.display ="block" ;
  result.style.backgroundColor ="green" ;
  result.style.color ="white";
  result.innerHTML =`${input.value.toUpperCase()} has ${vowelCount} vowels.`
}

