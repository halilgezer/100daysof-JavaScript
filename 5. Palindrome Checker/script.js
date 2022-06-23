let btn = document.getElementById("btn");
let result = document.getElementById("result");
let input = document.getElementById("input");

btn.addEventListener("click", palindrome) 

function palindrome (){
  let word1 = document.getElementById("input").value ; 
  let len = word1.length ;
  let start = word1.substring(0 , Math.floor(len/2)).toLowerCase();
  let end = word1.substring(len - Math.floor(len/2)).toLowerCase();
 let flip = end.split("").reverse().join("");
 // flip = [...end].reverse().join("");

 if( start == flip ){
  result.innerHTML =`${word1} is a palindrome..`
  result.style.backgroundColor ="green";
  result.style.display ="block";
  result.style.color="white"
 }
 else{
  result.innerHTML =`${word1} is not a palindrome..`
  result.style.backgroundColor ="red";
  result.style.display ="block";
  result.style.color="white"
 }


}