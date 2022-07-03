// Active menu switcher 

const navList = document.querySelector(".nav-list");

navList.addEventListener("click",(e) =>  {
  const navLink = e.target.parentElement ;
  if(navLink.classList.contains("link")){
    navList.querySelector(".active").classList.remove("active");
    navLink.classList.add("active");
}
} );


// Scroll to Top

const scrollBtn = document.querySelector(".top") ;
const rootEl = document.documentElement ;

document.addEventListener("scroll",showBtn) ;

scrollBtn.addEventListener("click",scrollToTop);


function showBtn () {
  const scrollTotal = rootEl.scrollHeight - rootEl.clientHeight;
  if(rootEl.scrollTop / scrollTotal > 0.4) {
    scrollBtn.classList.add("show-btn");
  }else {
    scrollBtn.classList.remove("show-btn");
  }
}

function scrollToTop () {
  rootEl.scrollTo({
    top : 0 ,
    behavior : "smooth",
  }) ;
}