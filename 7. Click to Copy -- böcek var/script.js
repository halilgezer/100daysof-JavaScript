let btn = document.querySelector(".btn");
let coupon = document.getElementById("input");


btn.addEventListener("click", copyMyText() ) ;

function copyMyText () {
  coupon.select() ;
  coupon.setSelectionRange(0,99999);
  navigator.clipboard.writeText(coupon.value);
}