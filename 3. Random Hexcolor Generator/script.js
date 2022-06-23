let randomColor = document.getElementById("count");
let btn = document.getElementById("generate");
let body = document.getElementById("body");

let randomGenarator = () => {

  let random = Math.random().toString(16).substring(2,8) ;
  randomColor.innerText = "#" + random;
  body.style.backgroundColor = "#" + random;
 console.log(randomColor);
} ;

btn.addEventListener("click",randomGenarator) ;
randomGenarator();