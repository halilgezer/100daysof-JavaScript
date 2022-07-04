const celcius = document.querySelector("#celcius");
const fahrenheit = document.querySelector("#fahrenheit");
const kelvin = document.querySelector("#kelvin");
const form = document.querySelector("form");

form.addEventListener("input", convertTemperature);


// --Convert Celsius to--
// fah = (x * 1.8) + 32;
// kelvin = x + 273.15;

// -- Convert Fah to --
// celsius = (x - 32) / 1.8;
// kelvin = (x - 32) / 1.8 + 273.15;

// -- Conver Kelvin to --
// fah = (x - 273.15) * 1.8 + 32;
// celsius = parseFloat(x) - 273.15;

function convertTemperature (e) {
  
  if (e.target.classList.contains("celcius")) {
    let x = e.target.value ;
    fahrenheit.value = (x  * 1.8) + 32 ;
    kelvin.value = x +273.15;
    console.log("celcius input oldu.");

  }
  if(e.target.classList.contains("fahrenheit")){
    let x = e.target.value ;
    celcius.value = ((x - 32) / 1.8).toFixed(1);
    kelvin.value = (((x - 32) / 1.8) +273.15 ).toFixed(1);
    console.log("fah input oldu.");

  }
  if(e.target.classList.contains("kelvin")){
    let x = e.target.value ;
    celcius.value = parseFloat(x) - 273.15 ;
    fahrenheit.value = (( x - 273.15 ) * 1.8 + 32).toFixed(1) ; 
    console.log("kelv input oldu.");
  }
}