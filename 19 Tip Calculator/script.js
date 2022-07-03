const btn = document.querySelector(".btn");
const tip = document.querySelector(".tip");
const total = document.querySelector(".total");
const error = document.querySelector(".error");
const reset =document.querySelector(".btn-reset") ;
 
const hideError  = () => {
  setTimeout( () => {
    error.style.display="none";
  },3000);
};

const clearResult = () => {
  tip.innerHTML = "Tip Amount : $0 ";
  total.innerHTML = "Total Amount : $0 ";
}

const calculateTip = () => {
  const bill = document.querySelector(".bill").value;
  const rate = document.querySelector(".rate").value;

  if (bill === "" || rate.value == 0 ){
    //console.log ("Please add a number");

    error.style.display ="block";
    hideError () ;

  } else if (isNaN(bill) || rate == "0" ) {
    error.innerHTML = "Please enter a number";
    error.style.display ="block";
    hideError();
  } else {
    let tipAmount = Math.ceil(bill * rate) ;
   
    tip.innerHTML = `Tip Amount : $${tipAmount}`;
    total.innerHTML = `Tip Amount : $${Number(tipAmount) +Number( bill) }` ;
  }
}

//calculateTip () ;
btn.addEventListener("click",calculateTip) ;  

reset.addEventListener("click", clearResult);