let randomNumber = document.getElementById("count");
let btn = document.getElementById("generate");

let randomGenarator = () => {

  let random = Math.floor(Math.random() * 10 + 1 ) ;
  randomNumber.innerHTML = random;
 //console.log(randomNumber);
} ;

btn.addEventListener("click",randomGenarator) ;