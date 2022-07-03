const empty ="",
uCase = "ABCDEFGHIJKLMNOPQRSTUVWYZ", 
lCase = "abcdefghijklmnopqrstuvwxyz", 
number = "0123456789", 
symbol= "!@#$%^&*=-_" ;

const passwordLength = document.getElementById("p-length"),
upperCase = document.getElementById("p-uppercase"),
lowerCase = document.getElementById("p-lowercase"),
pNumber = document.getElementById("p-number"),
pSymbol = document.getElementById("p-symbol"),
submit = document.getElementById("submit"),
password = document.getElementById("password") ,
copy = document.getElementById("copy") ,
reset = document.getElementById("reset") ;

submit.addEventListener("click", () => {
  

  let initialPassword = empty ;
  // Add Character if an option is checked.
  upperCase.checked ? (initialPassword += uCase ) : "" ;
  lowerCase.checked ? (initialPassword += lCase ) : "" ;
  pNumber.checked ? (initialPassword += number ) : "" ;
  pSymbol.checked ? (initialPassword += symbol ) : "" ;

  password.value = generatePassword(passwordLength.value, initialPassword );

}); 

  function generatePassword ( l, initialPassword ) {
    let pass ="" ;
    for ( let i = 0; i < l ; i++) {
      pass += initialPassword.charAt (
        Math.floor( Math.random() *initialPassword.length )
      )
    }
    return pass ; 
  }
// Copy Function 

copy.addEventListener ( "click", ()  => {
  if (password.value == "") {
    alert("Please check at least one of the checkboxes!") ;
  } else {
    password.select();
    document.execCommand("copy");
    alert("Password has been copied to clipboard") ;
  }
})

// Reset all the givens 
reset.addEventListener("click",  () => {
  passwordLength.value = 12 ;
  pNumber.checked  = false ;
  pSymbol.checked  = false ;
  lowerCase.checked  = false ;
  password.value = "";

} )  ;


