let time = 10 ;
let promoTime = time * 60 ;
let counting = document.getElementById("countdown");

function startCountDown ( ) {

  let promoTimer = setInterval( () => {

    if(promoTime <= 0 ){
      clearInterval (promoTimer) ;
      counting.innerHTML = "Promo has ended." ;
    } else {

      promoTime-- ;
      const hours = Math.floor( (promoTime / 3600 ) % 24 ) ;
      const minutes = Math.floor( (promoTime / 60 ) % 60 ) ;
      const seconds = Math.floor( (promoTime %60 )  ) ;

    counting.innerHTML = `
          Remaining Time...  <br>
      ${hours}Hours : ${minutes}Minutes : ${seconds}Seconds <br>
      Hurry Up! 
      ` ;


    }
    

  } ,1000 )
}

startCountDown();


 
  