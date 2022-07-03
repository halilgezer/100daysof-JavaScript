// Bmı = kg / m2
// Normal 18.55 - 24.9
//Underweight < 18.5
// overweight 25 - 29.9
// obese 30 and above 
const height = document.getElementById("height") ;
const weight = document.getElementById("weight");
const result = document.querySelector(".result");
const calculate = document.querySelector(".btn");
const reset = document.querySelector(".reset");



calculate.addEventListener("click", calculateBMI ) ;

function calculateBMI (e) {
  e.preventDefault();
  result.style.display = "block";
  reset.style.display = "block";
  if(  height.value === "" || isNaN(height.value)|| height.value < 10   ) {
    return (result.innerHTML = "Height is not a valid number!" );
  }else  if( weight.value === "" || isNaN(weight.value)|| weight.value < 2 ) {
    return (result.innerHTML = "Weight is not a valid number!" );
  }else {

 let bmi = Math.round( weight.value / ( (height.value / 100 ) ** 2 ) );
 console.log(height.value);
 console.log(weight.value);
 

 if (bmi >= 18.5 && bmi < 25) {
    result.innerHTML ="Your BMI result is Normal : "  + bmi  ;
    result.style.backgroundColor ="green";
 } else if ( bmi < 18.5) {
  result.innerHTML ="Your BMI result is Underweight : "  + bmi  ;
  result.style.backgroundColor ="red";
 }else if (bmi >= 25 && bmi < 30) {
  result.innerHTML ="Your BMI result is Overweight : "  + bmi  ;
  result.style.backgroundColor ="red";
}else if ( bmi >= 30) {
  result.innerHTML ="Your BMI result is Obese : "  + bmi  ;
  result.style.backgroundColor ="red";
 }

}
}

reset.addEventListener("click", () => {
  result.style.display = "none";
  reset.style.display = "none";
  weight.value = "" ;
  height.value = "";
})
 
